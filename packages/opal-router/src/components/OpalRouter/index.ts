import { kebabCase } from '@riim/kebab-case';
import { nextUID } from '@riim/next-uid';
import { snakeCaseAttributeName } from '@riim/rionite-snake-case-attribute-name';
import { IEvent } from 'cellx';
import { Observable } from 'cellx-decorators';
import {
	BrowserHistory,
	createBrowserHistory,
	State,
	Update
	} from 'history';
import {
	BaseComponent,
	Component,
	IComponentElement,
	KEY_PARAMS_CONFIG,
	Param
	} from 'rionite';
import { OpalRoute } from '../OpalRoute';
import './index.css';
import { escapeRegExp } from './lib/escapeRegExp';
import { parsePath } from './lib/parsePath';
import { PathNodeType } from './lib/PathNodeType';
import template from './template.rnt';

export * from 'history';
export { OpalRoute };

export interface IRouteProperty {
	name: string;
	optional: boolean;
}

export interface IRoute {
	path: string;
	rePath: RegExp;
	properties: Array<IRouteProperty>;
	component: OpalRoute;
}

const history = createBrowserHistory();

function valueToAttributeValue(value: boolean | string): string {
	return value === false ? 'no' : value === true ? 'yes' : value;
}

@Component({
	elementIs: 'OpalRouter',
	template
})
export class OpalRouter extends BaseComponent {
	static EVENT_CHANGE = Symbol('change');
	static EVENT_REFRESH_ROUTER = Symbol('refresh-router');
	static EVENT_BLOCK_ROUTER = Symbol('block-router');
	static EVENT_UNBLOCK_ROUTER = Symbol('unblock-router');

	static history: BrowserHistory<State> = history;

	@Param({ type: Boolean, readonly: true })
	useLocationHash: boolean;
	@Param({ default: true })
	scrollTopOnChange: boolean;
	@Param({ default: true })
	scrollTopOnComponentChange: boolean;

	_routes: Array<IRoute>;

	_route: IRoute | null = null;
	_state: Map<string /* name */, boolean | string> | null = null;

	_historyBlockingMessage: string;
	_historyUnblock: ReturnType<typeof history.block> | null = null;

	_componentElement: IComponentElement | null = null;

	@Observable
	isLoaderShown = false;

	_updateCounter = 0;

	initialize() {
		this._routes = [];
	}

	ready() {
		let routes = this._routes;

		for (let routeEl of this.element.getElementsByTagName('opal-route') as Iterable<
			IComponentElement<OpalRoute>
		>) {
			let path = routeEl.$component!.path;
			let rePath: Array<string> | string = [];
			let props: Array<IRouteProperty> = [];

			(function processPath(path) {
				for (let node of path) {
					switch (node.type) {
						case PathNodeType.STATIC: {
							rePath.push(escapeRegExp(node.value).replace('\\*', '.*?'));
							break;
						}
						case PathNodeType.OPTIONAL: {
							if (node.name) {
								rePath.push('(');
								props.push({
									name: node.name,
									optional: true
								});
							} else {
								rePath.push('(?:');
							}

							processPath(node.children);

							rePath.push(')?');

							break;
						}
						case PathNodeType.INSERT: {
							rePath.push('([^\\/]+)');
							props.push({
								name: node.name,
								optional: false
							});

							break;
						}
					}
				}
			})(parsePath(path));

			rePath = rePath.join('');

			routes.push({
				path,
				rePath: RegExp(
					`^${rePath}${rePath.charAt(rePath.length - 1) == '/' ? '?' : '/?'}$`
				),
				properties: props,
				component: routeEl.$component!
			});
		}
	}

	connected() {
		this._disposables[nextUID()] = {
			dispose: history.listen((update) => {
				this._onHistoryChange(update);
			})
		};

		if (!this.useLocationHash) {
			this.listenTo(document.body, 'click', this._onBodyClick, this, true);
		}

		this.listenTo(this, {
			[OpalRouter.EVENT_REFRESH_ROUTER]: this._onRefreshRouter,
			[OpalRouter.EVENT_BLOCK_ROUTER]: this._onBlockRouter,
			[OpalRouter.EVENT_UNBLOCK_ROUTER]: this._onUnblockRouter
		});

		if (this.useLocationHash) {
			this._update(history.location.hash.slice(1), '');
		} else {
			this._update(history.location.pathname, history.location.hash);
		}
	}

	disconnected() {
		this._clear();
	}

	_onHistoryChange(update: Update) {
		if (this.useLocationHash) {
			this._update(update.location.hash.slice(1), '');
		} else {
			this._update(update.location.pathname, update.location.hash);
		}
	}

	_onBodyClick(evt: Event) {
		let el: Element | null = evt.target as Element;

		while (el.tagName != 'A') {
			el = el.parentElement;

			if (!el) {
				return;
			}
		}

		let href = el.getAttribute('href');

		if (!href) {
			return;
		}

		let hashIndex = href.indexOf('#');
		let path = hashIndex == -1 ? href : href.slice(0, hashIndex);

		if (
			path &&
			!/^(?:\w+:|\/\/)/.test(path) &&
			el.getAttribute('target') != '_blank' &&
			this._update(path, hashIndex == -1 ? '' : href.slice(hashIndex + 1))
		) {
			evt.preventDefault();
			evt.stopImmediatePropagation();

			if (path != history.location.pathname) {
				history.push(href);
			}
		}
	}

	_onRefreshRouter() {
		this.refresh();
		return false;
	}

	_onBlockRouter(evt: IEvent) {
		this._historyBlockingMessage = evt.data.message;

		if (!this._historyUnblock) {
			this._historyUnblock = history.block((transition) => {
				if (confirm(this._historyBlockingMessage)) {
					this._historyUnblock!();
					this._historyUnblock = null;
					transition.retry();
				}
			});
		}

		return false;
	}

	_onUnblockRouter() {
		if (this._historyUnblock) {
			this._historyUnblock();
			this._historyUnblock = null;
		}
	}

	_update(path: string, _hash: string) {
		if (!path) {
			path = '/';
		}

		for (let route of this._routes) {
			let match = path.match(route.rePath);

			if (!match) {
				continue;
			}

			let state = route.properties.reduce((state, prop, index) => {
				if (prop.optional) {
					state.set(prop.name, !!match![index + 1]);
				} else {
					let value = match![index + 1];

					// `/password-recovery(/[email])`
					if (value) {
						state.set(prop.name, decodeURIComponent(value));
					}
				}

				return state;
			}, new Map() as Exclude<OpalRouter['_state'], null>);

			if (route === this._route) {
				let prevState = this._state!;

				if (
					state.size == prevState.size &&
					[...state.keys()].every((name) => state.get(name) === prevState.get(name))
				) {
					return true;
				}

				let componentEl = this._componentElement!;
				let $paramsConfig = componentEl.$component!.constructor[KEY_PARAMS_CONFIG]!;
				let attrs = componentEl.attributes;
				let canWrite = true;

				if ($paramsConfig.size) {
					for (let i = attrs.length; i; ) {
						let name = attrs.item(--i)!.name;

						if (name == 'class') {
							continue;
						}

						let $paramConfig = $paramsConfig.get(name);

						if (
							$paramConfig &&
							$paramConfig.readonly &&
							!state.has($paramConfig.name)
						) {
							canWrite = false;
							break;
						}
					}

					if (canWrite) {
						for (let [name, value] of state) {
							if (
								$paramsConfig.get(name)!.readonly &&
								componentEl.getAttribute(snakeCaseAttributeName(name, true)) !==
									valueToAttributeValue(value)
							) {
								canWrite = false;
								break;
							}
						}
					}
				}

				if (canWrite) {
					if ($paramsConfig.size) {
						for (let i = attrs.length; i; ) {
							let name = attrs.item(--i)!.name;

							if (name == 'class') {
								continue;
							}

							let $paramConfig = $paramsConfig.get(name);

							if ($paramConfig && !state.has($paramConfig.name)) {
								componentEl.removeAttribute(snakeCaseAttributeName(name, true));
							}
						}
					}

					this._state = state;

					this._applyState();

					if (this.scrollTopOnChange) {
						window.scrollTo(window.pageXOffset, 0);
					}

					this.emit(OpalRouter.EVENT_CHANGE);

					return true;
				}
			}

			if (this._componentElement) {
				this.element.removeChild(this._componentElement);
			}

			this._route = route;
			this._state = state;

			let updateCounter = ++this._updateCounter;

			let onComponentLoaded = (elementName: string) => {
				// if (route !== this._route) {
				if (updateCounter !== this._updateCounter) {
					return;
				}

				let f = () => {
					if (updateCounter !== this._updateCounter) {
						return;
					}

					this.isLoaderShown = false;

					if (this.scrollTopOnChange || this.scrollTopOnComponentChange) {
						window.scrollTo(window.pageXOffset, 0);
					}

					this.emit(OpalRouter.EVENT_CHANGE);
				};

				let componentEl = (this._componentElement = document.createElement(
					kebabCase(elementName, true)
				) as IComponentElement);
				this._applyState();
				this.element.appendChild(componentEl);
				let initializationPromise = componentEl.rioniteComponent.connect(this);

				if (initializationPromise) {
					this.isLoaderShown = true;
					initializationPromise.then(f);
				} else {
					this.isLoaderShown = false;
					f();
				}
			};

			if (route.component.component) {
				this.isLoaderShown = false;
				onComponentLoaded(route.component.component);
			} else {
				this.isLoaderShown = true;

				route.component.lazyLoadComponent!()
					.then((componentConstr) => componentConstr.elementIs)
					.then(onComponentLoaded);
			}

			return true;
		}

		if (this._route) {
			this.emit(OpalRouter.EVENT_CHANGE);
			this._clear();
		}

		return false;
	}

	_applyState() {
		let componentEl = this._componentElement!;

		for (let [name, value] of this._state!) {
			componentEl.setAttribute(
				snakeCaseAttributeName(name, true),
				valueToAttributeValue(value)
			);
		}
	}

	_clear() {
		if (!this._route) {
			return;
		}

		this._route = null;
		this._state = null;

		this.element.removeChild(this._componentElement!);
		this._componentElement = null;
	}

	refresh() {
		let route = this._route;

		if (!route) {
			return;
		}

		this.element.removeChild(this._componentElement!);

		let updateCounter = ++this._updateCounter;

		let onComponentLoaded = (elementName: string) => {
			// if (route !== this._route) {
			if (updateCounter !== this._updateCounter) {
				return;
			}

			let f = () => {
				if (updateCounter !== this._updateCounter) {
					return;
				}

				this.isLoaderShown = false;

				if (this.scrollTopOnChange || this.scrollTopOnComponentChange) {
					window.scrollTo(window.pageXOffset, 0);
				}
			};

			let componentEl = (this._componentElement = document.createElement(
				kebabCase(elementName, true)
			) as IComponentElement);
			this._applyState();
			this.element.appendChild(componentEl);
			let initializationWait = componentEl.rioniteComponent.connect(this);

			if (initializationWait) {
				this.isLoaderShown = true;
				initializationWait.then(f);
			} else {
				this.isLoaderShown = false;
				f();
			}
		};

		if (route.component.component) {
			this.isLoaderShown = false;
			onComponentLoaded(route.component.component);
		} else {
			this.isLoaderShown = true;

			route.component.lazyLoadComponent!()
				.then((componentConstr) => componentConstr.elementIs)
				.then(onComponentLoaded);
		}
	}
}
