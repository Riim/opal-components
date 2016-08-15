require('./index.css');

let { Component, utils: { hyphenize, escapeHTML } } = require('rionite');
let OpalRoute = require('./opal-route');
let escapeRegExp = require('./escapeRegExp');
let PathNodeType = require('./PathNodeType');
let parsePath = require('./parsePath');

let createObject = Object.create;
let forEach = Array.prototype.forEach;

module.exports = Component.extend('opal-router', {
	Static: {
		OpalRoute
	},

	_route: null,
	_componentElement: null,

	initialize() {
		this._routes = [];
	},

	ready() {
		let routes = this._routes;

		forEach.call(this.element.querySelectorAll('opal-route'), routeEl => {
			let path = routeEl.$c.props.path;
			let pathSchema = parsePath(path);
			let rePath = [];
			let props = [];

			(function processPathSchema(pathSchema) {
				for (let i = 0, l = pathSchema.length; i < l; i++) {
					let node = pathSchema[i];

					switch (node.type) {
						case PathNodeType.NORMAL: {
							rePath.push(escapeRegExp(node.value).replace('\\*', '.*?'));
							break;
						}
						case PathNodeType.OPTIONAL: {
							rePath.push('(');
							props.push({ name: node.name, optional: true });
							processPathSchema(node.childNodes);
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
			})(pathSchema);

			rePath = rePath.join('');
			rePath += rePath.charAt(rePath.length - 1) == '\/' ? '?' : '\/?';

			routes.push({
				path,
				rePath: RegExp('^' + rePath + '$'),
				properties: props,
				componentName: routeEl.$c.props.component
			});
		});
	},

	elementAttached() {
		this._update();
		this.listenTo(window, 'popstate', this._onWindowPopState);
	},

	elementDetached() {
		if (this._route) {
			this._route = null;
			this._clear();
		}
	},

	_onWindowPopState() {
		this._update();
	},

	_update() {
		let routes = this._routes;
		let path = location.hash.slice(1) || '/';

		for (let i = 0, l = routes.length; i < l; i++) {
			let route = routes[i];
			let match = path.match(route.rePath);

			if (match) {
				let state = route.properties.reduce((state, prop, index) => {
					state[prop.name] = prop.optional ? !!match[index + 1] : match[index + 1];
					return state;
				}, createObject(null));

				if (route === this._route) {
					let componentEl = this._componentElement;
					let attrs = componentEl.attributes;

					for (let i = attrs.length; i;) {
						let attr = attrs.item(--i);

						if (!(attr.name in state)) {
							componentEl.removeAttribute(attr.name);
						}
					}

					this._applyState(state);
				} else {
					this._clear();

					this._route = route;

					let componentEl = this._componentElement = document.createElement(route.componentName);

					componentEl.$c.ownerComponent = this;
					this._applyState(state);

					this.element.appendChild(componentEl);
				}

				return;
			}
		}

		if (this._route) {
			this._route = null;
			this._clear();
		}
	},

	_applyState(state) {
		let componentEl = this._componentElement;

		for (let name in state) {
			let value = state[name];

			componentEl.setAttribute(
				hyphenize(name),
				`${ value === false ? 'no' : (value === true ? 'yes' : escapeHTML(value)) }`
			);
		}
	},

	_clear() {
		if (this._componentElement) {
			this.element.removeChild(this._componentElement);
			this._componentElement = null;
		}
	}
});
