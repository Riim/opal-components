(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-router"] = factory(require("rionite"));
	else
		root["opal-router"] = factory(root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	__webpack_require__(17);
	__webpack_require__(18);

	var _require = __webpack_require__(3);

	var Component = _require.Component;
	var _require$utils = _require.utils;
	var hyphenize = _require$utils.hyphenize;
	var escapeHTML = _require$utils.escapeHTML;

	var escapeRegExp = __webpack_require__(19);
	var PathNodeType = __webpack_require__(20);
	var parsePath = __webpack_require__(21);

	var createObject = Object.create;
	var forEach = Array.prototype.forEach;

	module.exports = Component.extend('opal-router', {
		_route: null,
		_componentElement: null,

		ready: function ready() {
			var routes = this._routes = [];

			forEach.call(this.element.querySelectorAll('opal-route'), function (routeEl) {
				var path = routeEl.$c.props.path;
				var pathSchema = parsePath(path);
				var rePath = [];
				var props = [];

				(function processPathSchema(pathSchema) {
					for (var i = 0, l = pathSchema.length; i < l; i++) {
						var node = pathSchema[i];

						switch (node.type) {
							case PathNodeType.NORMAL:
								{
									rePath.push(escapeRegExp(node.value).replace('\\*', '.*?'));
									break;
								}
							case PathNodeType.OPTIONAL:
								{
									rePath.push('(');
									props.push({ name: node.name, optional: true });
									processPathSchema(node.childNodes);
									rePath.push(')?');
									break;
								}
							case PathNodeType.INSERT:
								{
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
					path: path,
					rePath: RegExp('^' + rePath + '$'),
					properties: props,
					componentName: routeEl.$c.props.component
				});
			});
		},
		elementAttached: function elementAttached() {
			this._update();
			this.listenTo(window, 'popstate', this._onWindowPopState);
		},
		elementDetached: function elementDetached() {
			if (this._route) {
				this._route = null;
				this._clear();
			}
		},
		_onWindowPopState: function _onWindowPopState() {
			this._update();
		},
		_update: function _update() {
			var _this = this;

			var routes = this._routes;
			var path = location.hash.slice(1) || '/';

			var _loop = function _loop(i, l) {
				var route = routes[i];
				var match = path.match(route.rePath);

				if (match) {
					var state = route.properties.reduce(function (state, prop, index) {
						state[prop.name] = prop.optional ? !!match[index + 1] : match[index + 1];
						return state;
					}, createObject(null));

					if (route === _this._route) {
						var componentEl = _this._componentElement;
						var attrs = componentEl.attributes;

						for (var _i = attrs.length; _i;) {
							var attr = attrs.item(--_i);

							if (!(attr.name in state)) {
								componentEl.removeAttribute(attr.name);
							}
						}

						_this._applyState(state);
					} else {
						_this._clear();

						_this._route = route;

						var _componentEl = _this._componentElement = document.createElement(route.componentName);

						_componentEl.$c.ownerComponent = _this;
						_this._applyState(state);

						_this.element.appendChild(_componentEl);
					}

					return {
						v: void 0
					};
				}
			};

			for (var i = 0, l = routes.length; i < l; i++) {
				var _ret = _loop(i, l);

				if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
			}

			if (this._route) {
				this._route = null;
				this._clear();
			}
		},
		_applyState: function _applyState(state) {
			var componentEl = this._componentElement;

			for (var name in state) {
				var value = state[name];

				componentEl.setAttribute(hyphenize(name), '' + (value === false ? 'no' : value === true ? 'yes' : escapeHTML(value)));
			}
		},
		_clear: function _clear() {
			if (this._componentElement) {
				this.element.removeChild(this._componentElement);
				this._componentElement = null;
			}
		}
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _require = __webpack_require__(3);

	var Component = _require.Component;


	module.exports = Component.extend('opal-route', {
		Static: {
			props: {
				path: String,
				component: String
			}
		}
	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-router{display:block}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	var reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;

	/**
	 * @typesign (str: string) -> string;
	 */
	function escapeRegExp(str) {
	  return str.replace(reEscapableChars, '\\$1');
	}

	module.exports = escapeRegExp;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		NORMAL: 0,
		OPTIONAL: 1,
		INSERT: 2
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var PathNodeType = __webpack_require__(20);

	var reName = /[a-z][0-9a-z]*/i;

	function parsePath(path) {
		var ctx = PathNodeType.NORMAL;

		var at = 0;
		var chr = path[0];

		return readPath();

		function raiseError(msg, at) {
			throw {
				name: 'SyntaxError',
				message: msg,
				at: at,
				path: path
			};
		}

		function next(c) {
			if (c && c != chr) {
				raiseError('Expected "' + c + '" instead of "' + chr + '"', at);
			}

			chr = path[++at];
			return chr;
		}

		function readPath() {
			var path = [];

			while (chr) {
				if (chr == '(') {
					path.push(readOptionalNode());
				} else if (chr == '[') {
					path.push(readInsert());
				} else {
					path.push(readNormalNode());
				}
			}

			return path;
		}

		function readNormalNode() {
			var value = chr;

			while (next()) {
				if (chr == '(' || chr == '[' || ctx == PathNodeType.OPTIONAL && chr == ')') {
					break;
				}

				value += chr;
			}

			return {
				type: PathNodeType.NORMAL,
				value: value
			};
		}

		function readOptionalNode() {
			var optionalNodeAt = at;

			next('(');

			var name = readOptionalNodeName();
			var childNodes = [];

			var prevCtx = ctx;
			ctx = PathNodeType.OPTIONAL;

			while (chr) {
				if (chr == ')') {
					next();
					ctx = prevCtx;

					return {
						type: PathNodeType.OPTIONAL,
						name: name,
						childNodes: childNodes
					};
				} else if (chr == '(') {
					childNodes.push(readOptionalNode());
				} else if (chr == '[') {
					childNodes.push(readInsert());
				} else {
					childNodes.push(readNormalNode());
				}
			}

			raiseError('Missing ")" in compound statement', optionalNodeAt);
		}

		function readOptionalNodeName() {
			var optionalNodeNameAt = at;
			var name = '';

			while (chr) {
				if (chr == '?') {
					if (!reName.test(name)) {
						raiseError('Invalid name "' + name + '"', optionalNodeNameAt);
					}

					next();

					return name;
				} else {
					name += chr;
					next();
				}
			}

			raiseError('Invalid path "' + path + '"', 0);
		}

		function readInsert() {
			var insertAt = at;

			next('[');

			var name = '';

			var prevCtx = ctx;
			ctx = PathNodeType.INSERT;

			while (chr) {
				if (chr == ']') {
					if (!reName.test(name)) {
						raiseError('Invalid name "' + name + '"', insertAt + 1);
					}

					next();
					ctx = prevCtx;

					return {
						type: PathNodeType.INSERT,
						name: name
					};
				} else {
					name += chr;
					next();
				}
			}

			raiseError('Missing "]" in compound statement', insertAt);
		}
	}

	module.exports = parsePath;

/***/ }
/******/ ])
});
;