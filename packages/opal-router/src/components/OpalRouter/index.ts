import { kebabCase } from '@riim/kebab-case';
import { nextUID } from '@riim/next-uid';
import { snakeCaseAttributeName } from '@riim/rionite-snake-case-attribute-name';
import { createBrowserHistory, History, Location } from 'history';
import {
	BaseComponent,
	Component,
	IComponentElement,
	KEY_PARAMS_CONFIG,
	Param
	} from 'rionite';
import { OpalRoute } from '../OpalRoute';
import { escapeRegExp } from './escapeRegExp';
import './index.css';
import { parsePath } from './parsePath';
import { PathNodeType } from './PathNodeType';

export { History, Location };
export { OpalRoute };

export interface IRouteProperty {
	name: string;
	optional: boolean;
}

export interface IRoute {
	path: string;
	rePath: RegExp;
	properties: Array<IRouteProperty>;
	componentName: string;
}

export interface IComponentState {
	[name: string]: boolean | string;
}

const history = createBrowserHistory();

function valueToAttributeValue(value: boolean | string): string {
	return value === false ? 'no' : value === true ? 'yes' : value;
}

@Component({
	elementIs: 'OpalRouter'
})
export class OpalRouter extends BaseComponent {
	static EVENT_CHANGE = Symbol('change');
	static EVENT_REFRESH_ROUTER = Symbol('refresh-router');

	static history = history;

	@Param({ readonly: true })
	useLocationHash = false;
	@Param
	scrollTopOnChange = true;
	@Param
	scrollTopOnChangeComponent = true;

	_routes: Array<IRoute>;
	_route: IRoute | null = null;
	_state: IComponentState | null = null;
	_componentElement: IComponentElement | null = null;

	initialize() {
		this._routes = [];
	}

	ready() {
		let routes = this._routes;

		Array.prototype.forEach.call(
			this.element.getElementsByTagName('opal-route'),
			(routeEl: IComponentElement<OpalRoute>) => {
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
					componentName: kebabCase(routeEl.$component!.component)
				});
			}
		);
	}

	elementAttached() {
		this._disposables[nextUID()] = {
			dispose: history.listen(location => {
				this._onHistoryChange(location);
			})
		};

		if (!this.useLocationHash) {
			this.listenTo(document.body, 'click', this._onBodyClick);
		}

		this.listenTo(this, OpalRouter.EVENT_REFRESH_ROUTER, this._onRefreshRouter);

		if (this.useLocationHash) {
			this._update(history.location.hash.slice(1), '');
		} else {
			this._update(history.location.pathname, history.location.hash);
		}
	}

	elementDetached() {
		this._clear();
	}

	_onHistoryChange(location: Location) {
		if (this.useLocationHash) {
			this._update(location.hash.slice(1), '');
		} else {
			this._update(location.pathname, location.hash);
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

			if (path != history.location.pathname) {
				history.push(href);
			}
		}
	}

	_onRefreshRouter() {
		this.refresh();
		return false;
	}

	_update(path: string, _hash: string): boolean {
		if (!path) {
			path = '/';
		}

		for (let route of this._routes) {
			let match = path.match(route.rePath);

			if (!match) {
				continue;
			}

			let state: IComponentState = route.properties.reduce((state, prop, index) => {
				if (prop.optional) {
					state[prop.name] = !!match![index + 1];
				} else {
					let value = match![index + 1];

					// `/password-recovery(/[email])`
					if (value) {
						state[prop.name] = decodeURIComponent(value);
					}
				}

				return state;
			}, Object.create(null));

			if (route === this._route) {
				let prevState = this._state!;
				let stateKeys = Object.keys(state);

				if (
					stateKeys.length == Object.keys(prevState).length &&
					stateKeys.every(name => state[name] === prevState[name])
				) {
					return true;
				}

				let componentEl = this._componentElement!;
				let $paramsConfig = (componentEl.$component!.constructor as typeof BaseComponent)[
					KEY_PARAMS_CONFIG
				]!;
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
							!($paramConfig.name in state)
						) {
							canWrite = false;
							break;
						}
					}

					if (canWrite) {
						for (let name in state) {
							if (
								$paramsConfig.get(name)!.readonly &&
								componentEl.getAttribute(snakeCaseAttributeName(name, true)) !==
									valueToAttributeValue(state[name])
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

							if ($paramConfig && !($paramConfig.name in state)) {
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

			let componentEl = (this._componentElement = document.createElement(
				route.componentName
			) as IComponentElement);
			this._applyState();
			componentEl.rioniteComponent.ownerComponent = this;
			this.element.appendChild(componentEl);

			if (this.scrollTopOnChange || this.scrollTopOnChangeComponent) {
				window.scrollTo(window.pageXOffset, 0);
			}

			this.emit(OpalRouter.EVENT_CHANGE);

			return true;
		}

		if (this._route) {
			this.emit(OpalRouter.EVENT_CHANGE);
			this._clear();
		}

		return false;
	}

	_applyState() {
		let state = this._state!;
		let componentEl = this._componentElement!;

		for (let name in state) {
			componentEl.setAttribute(
				snakeCaseAttributeName(name, true),
				valueToAttributeValue(state[name])
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

		let componentEl = (this._componentElement = document.createElement(
			route.componentName
		) as IComponentElement);
		this._applyState();
		componentEl.rioniteComponent.ownerComponent = this;
		this.element.appendChild(componentEl);

		if (this.scrollTopOnChange || this.scrollTopOnChangeComponent) {
			window.scrollTo(window.pageXOffset, 0);
		}
	}
}
