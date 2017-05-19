import './index.css';

import { IComponentElement, Component, d, Utils } from 'rionite';
import OpalRoute from './opal-route';
import PathNodeType from './PathNodeType';
import parsePath from './parsePath';
import escapeRegExp from './escapeRegExp';

let hyphenize = Utils.hyphenize;
let escapeHTML = Utils.escapeHTML;

let forEach = Array.prototype.forEach;

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
	[name: string]: boolean | string
}

function isReadonlyProperty(propConfig: any): boolean {
	return propConfig &&
		typeof propConfig == 'object' &&
		(propConfig.type !== undefined || propConfig.default !== undefined) &&
		propConfig.readonly;
}

function valueToAttributeValue(value: boolean | string): string {
	return `${ value === false ? 'no' : (value === true ? 'yes' : escapeHTML(value)) }`;
}

@d.Component<OpalRouter>({
	elementIs: 'opal-router',

	props: {
		scrollTopOnChange: true,
		scrollTopOnChangeComponent: true
	},

	events: {
		':component': {
			'<*>refresh-router'() {
				this.refresh();
				return false;
			}
		}
	}
})
export default class OpalRouter extends Component {
	static OpalRoute = OpalRoute;

	_routes: Array<IRoute>;
	_route: IRoute | null = null;
	_state: IComponentState | null = null;
	_componentElement: IComponentElement | null = null;

	initialize() {
		this._routes = [];
	}

	ready() {
		let routes = this._routes;

		forEach.call(this.element.querySelectorAll('opal-route'), (routeEl: IComponentElement) => {
			let path: string = routeEl.$component.props.path;
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
				rePath: RegExp(`^${ rePath }${ rePath.charAt(rePath.length - 1) == '\/' ? '?' : '\/?' }$`),
				properties: props,
				componentName: routeEl.$component.props.component
			});
		});
	}

	elementAttached() {
		this._update();
		this.listenTo(window, 'popstate', this._onWindowPopState);
	}

	elementDetached() {
		this._clear();
	}

	_onWindowPopState() {
		this._update();
	}

	_update() {
		let path = location.hash.slice(1) || '/';

		for (let route of this._routes) {
			let match = path.match(route.rePath);

			if (!match) {
				continue;
			}

			let state: IComponentState = route.properties.reduce((state: IComponentState, prop, index) => {
				if (prop.optional) {
					state[prop.name] = !!(match as RegExpMatchArray)[index + 1];
				} else {
					let value = (match as RegExpMatchArray)[index + 1];
					state[prop.name] = value && decodeURIComponent(value);
				}

				return state;
			}, Object.create(null));

			if (route === this._route) {
				let componentEl = this._componentElement as IComponentElement;
				let propsConfig = (componentEl.$component.constructor as typeof Component).props;
				let attrs = componentEl.attributes;
				let writable = true;

				if (propsConfig) {
					for (let i = attrs.length; i;) {
						let name = attrs.item(--i).name;

						if (name != 'class' && !(name in state) && isReadonlyProperty(propsConfig[name])) {
							writable = false;
							break;
						}
					}

					if (writable) {
						for (let name in state) {
							if (
								componentEl.getAttribute(hyphenize(name)) !== valueToAttributeValue(state[name]) &&
									isReadonlyProperty(propsConfig[name])
							) {
								writable = false;
								break;
							}
						}
					}
				}

				if (writable) {
					for (let i = attrs.length; i;) {
						let name = attrs.item(--i).name;

						if (name != 'class' && !(name in state)) {
							componentEl.removeAttribute(name);
						}
					}

					this._state = state;

					this._applyState();

					if (this.props.scrollTopOnChange) {
						document.body.scrollTop = 0;
					}

					return;
				}
			}

			if (this._componentElement) {
				this.element.removeChild(this._componentElement);
			}

			this._route = route;
			this._state = state;

			let componentEl = this._componentElement = document.createElement(route.componentName) as IComponentElement;

			componentEl.$component.ownerComponent = this;
			this._applyState();

			this.element.appendChild(componentEl);

			if (this.props.scrollTopOnChange || this.props.scrollTopOnChangeComponent) {
				document.body.scrollTop = 0;
			}

			return;
		}

		this._clear();
	}

	_applyState() {
		let state = this._state as IComponentState;
		let componentEl = this._componentElement as IComponentElement;

		for (let name in state) {
			componentEl.setAttribute(hyphenize(name), valueToAttributeValue(state[name]));
		}
	}

	_clear() {
		if (this._route) {
			this._route = null;
			this._state = null;

			this.element.removeChild(this._componentElement as IComponentElement);
			this._componentElement = null;
		}
	}

	refresh() {
		let route = this._route;

		if (route) {
			this.element.removeChild(this._componentElement as IComponentElement);

			let componentEl = this._componentElement = document.createElement(route.componentName) as IComponentElement;

			componentEl.$component.ownerComponent = this;
			this._applyState();

			this.element.appendChild(componentEl);

			if (this.props.scrollTopOnChange || this.props.scrollTopOnChangeComponent) {
				document.body.scrollTop = 0;
			}
		}
	}
}

export { OpalRoute };
