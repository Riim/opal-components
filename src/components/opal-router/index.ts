import './index.css';

import { IComponentElement, Component, d, Utils } from 'rionite';
import OpalRoute from './opal-route';
import PathNodeType from './PathNodeType';
import parsePath from './parsePath';
import escapeRegExp from './escapeRegExp';

export { default as OpalRoute } from './opal-route';

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

@d.Component({
	elementIs: 'opal-router'
})
export default class OpalRouter extends Component {
	static OpalRoute = OpalRoute;

	_routes: Array<IRoute>;
	_route: IRoute | null = null;
	_componentElement: IComponentElement | null = null;

	initialize() {
		this._routes = [];
	}

	ready() {
		let routes = this._routes;

		forEach.call(this.element.querySelectorAll('opal-route'), (routeEl: IComponentElement) => {
			let path: string = routeEl.$c.props['path'];
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
							rePath.push('(');
							props.push({ name: node.name, optional: true });
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
				componentName: routeEl.$c.props['component']
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
				let attrs = componentEl.attributes;

				for (let i = attrs.length; i;) {
					let name = attrs.item(--i).name;

					if (name != 'class' && !(name in state)) {
						componentEl.removeAttribute(name);
					}
				}

				this._applyState(state);
			} else {
				this._clear();

				this._route = route;

				let componentEl = this._componentElement = document.createElement(route.componentName) as
					IComponentElement;

				componentEl.$c.ownerComponent = this;
				this._applyState(state);

				this.element.appendChild(componentEl);
			}

			return;
		}

		this._clear();
	}

	_applyState(state: IComponentState) {
		let componentEl = this._componentElement as IComponentElement;

		for (let name in state) {
			let value = state[name];

			componentEl.setAttribute(
				hyphenize(name),
				`${ value === false ? 'no' : (value === true ? 'yes' : escapeHTML(value)) }`
			);
		}
	}

	_clear() {
		if (this._route) {
			this._route = null;

			this.element.removeChild(this._componentElement as IComponentElement);
			this._componentElement = null;
		}
	}
}