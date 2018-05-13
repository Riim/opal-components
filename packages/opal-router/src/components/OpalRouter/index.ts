import { kebabCase } from '@riim/kebab-case';
import { snakeCaseAttributeName } from '@riim/rionite-snake-case-attribute-name';
import { history, Location } from 'created-browser-history';
import {
	BaseComponent,
	Component,
	I$ComponentParamConfig,
	IComponentElement,
	KEY_PARAMS_CONFIG,
	Param
	} from 'rionite';
import { OpalRoute } from '../OpalRoute';
import { escapeRegExp } from './escapeRegExp';
import './index.css';
import { parsePath } from './parsePath';
import { PathNodeType } from './PathNodeType';

export { OpalRoute };

const forEach = Array.prototype.forEach;

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

function valueToAttributeValue(value: boolean | string): string {
	return value === false ? 'no' : value === true ? 'yes' : value;
}

@Component({
	elementIs: 'OpalRouter'
})
export class OpalRouter extends BaseComponent {
	@Param paramScrollTopOnChange = true;
	@Param paramScrollTopOnChangeComponent = true;

	_routes: Array<IRoute>;
	_route: IRoute | null = null;
	_state: IComponentState | null = null;
	_componentElement: IComponentElement | null = null;

	_historyListening: { unlisten: () => void };

	initialize() {
		this._routes = [];
	}

	ready() {
		let routes = this._routes;

		forEach.call(
			this.element.getElementsByTagName('opal-route'),
			(routeEl: IComponentElement<OpalRoute>) => {
				let path = routeEl.$component.paramPath;
				let rePath: Array<string> | string = [];
				let props: Array<IRouteProperty> = [];

				(function processPath(path) {
					for (let node of path) {
						switch (node.type) {
							case PathNodeType.SIMPLE: {
								rePath.push(escapeRegExp(node.value).replace('\\*', '.*?'));
								break;
							}
							case PathNodeType.OPTIONAL: {
								if (node.name) {
									rePath.push('(');
									props.push({ name: node.name, optional: true });
								} else {
									rePath.push('(?:');
								}

								processPath(node.childNodes);

								rePath.push(')?');

								break;
							}
							case PathNodeType.INSERT: {
								rePath.push('([^\\/]+)');
								props.push({ name: node.name, optional: false });
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
					componentName: kebabCase(routeEl.$component.paramComponent)
				});
			}
		);
	}

	elementAttached() {
		this.listenTo(this, '<*>refresh-router', this._onRefreshRouter);

		this._update(location.hash);

		this._historyListening = {
			unlisten: history.listen(location => {
				this._onWindowPopState(location);
			})
		};
	}

	elementDetached() {
		this._historyListening.unlisten();
		this._clear();
	}

	_onRefreshRouter() {
		this.refresh();
		return false;
	}

	_onWindowPopState(location: Location) {
		this._update(location.hash);
	}

	_update(hash: string) {
		let path = hash.slice(1) || '/';

		for (let route of this._routes) {
			let match = path.match(route.rePath);

			if (!match) {
				continue;
			}

			let state = route.properties.reduce(
				(state, prop, index) => {
					if (prop.optional) {
						state[prop.name] = !!match![index + 1];
					} else {
						let value = match![index + 1];
						state[prop.name] = value && decodeURIComponent(value);
					}

					return state;
				},
				Object.create(null) as IComponentState
			);

			if (route === this._route) {
				let prevState = this._state!;
				let stateKeys = Object.keys(state);

				if (
					stateKeys.length == Object.keys(prevState).length &&
					stateKeys.every(name => state[name] === prevState[name])
				) {
					return;
				}

				let componentEl = this._componentElement!;
				let $paramsConfig: { [name: string]: I$ComponentParamConfig } | undefined =
					componentEl.$component.constructor[KEY_PARAMS_CONFIG];
				let attrs = componentEl.attributes;
				let canWrite = true;

				if ($paramsConfig) {
					for (let i = attrs.length; i; ) {
						let name = attrs.item(--i)!.name;

						if (name == 'class') {
							continue;
						}

						let $paramConfig = $paramsConfig[name];

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
								$paramsConfig[name].readonly &&
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
					if ($paramsConfig) {
						for (let i = attrs.length; i; ) {
							let name = attrs.item(--i)!.name;

							if (name == 'class') {
								continue;
							}

							let $paramConfig = $paramsConfig[name];

							if ($paramConfig && !($paramConfig.name in state)) {
								componentEl.removeAttribute(snakeCaseAttributeName(name, true));
							}
						}
					}

					this._state = state;

					this._applyState();

					if (this.paramScrollTopOnChange) {
						window.scrollTo(window.pageXOffset, 0);
					}

					this.emit('change');

					return;
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
			componentEl.$component.ownerComponent = this;
			this.element.appendChild(componentEl);

			if (this.paramScrollTopOnChange || this.paramScrollTopOnChangeComponent) {
				window.scrollTo(window.pageXOffset, 0);
			}

			this.emit('change');

			return;
		}

		if (this._route) {
			this.emit('change');
			this._clear();
		}
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
		if (this._route) {
			this._route = null;
			this._state = null;

			this.element.removeChild(this._componentElement!);
			this._componentElement = null;
		}
	}

	refresh() {
		let route = this._route;

		if (route) {
			this.element.removeChild(this._componentElement!);

			let componentEl = (this._componentElement = document.createElement(
				route.componentName
			) as IComponentElement);
			this._applyState();
			componentEl.$component.ownerComponent = this;
			this.element.appendChild(componentEl);

			if (this.paramScrollTopOnChange || this.paramScrollTopOnChangeComponent) {
				window.scrollTo(window.pageXOffset, 0);
			}
		}
	}
}
