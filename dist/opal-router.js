(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite"], factory);
	else if(typeof exports === 'object')
		exports["opal-router"] = factory(require("rionite"));
	else
		root["opal-router"] = factory(root["rionite"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(63);
	var rionite_1 = __webpack_require__(1);
	var opal_route_1 = __webpack_require__(9);
	var PathNodeType_1 = __webpack_require__(8);
	var parsePath_1 = __webpack_require__(18);
	var escapeRegExp_1 = __webpack_require__(17);
	var opal_route_2 = __webpack_require__(9);
	exports.OpalRoute = opal_route_2.default;
	var hyphenize = rionite_1.Utils.hyphenize;
	var escapeHTML = rionite_1.Utils.escapeHTML;
	var forEach = Array.prototype.forEach;
	var OpalRouter = (function (_super) {
	    __extends(OpalRouter, _super);
	    function OpalRouter() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this._route = null;
	        _this._componentElement = null;
	        return _this;
	    }
	    OpalRouter.prototype.initialize = function () {
	        this._routes = [];
	    };
	    OpalRouter.prototype.ready = function () {
	        var routes = this._routes;
	        forEach.call(this.element.querySelectorAll('opal-route'), function (routeEl) {
	            var path = routeEl.$c.props['path'];
	            var rePath = [];
	            var props = [];
	            (function processPath(path) {
	                for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
	                    var node = path_1[_i];
	                    switch (node.type) {
	                        case PathNodeType_1.default.SIMPLE: {
	                            rePath.push(escapeRegExp_1.default(node.value).replace('\\*', '.*?'));
	                            break;
	                        }
	                        case PathNodeType_1.default.OPTIONAL: {
	                            if (node.name) {
	                                rePath.push('(');
	                                props.push({ name: node.name, optional: true });
	                            }
	                            else {
	                                rePath.push('(?:');
	                            }
	                            processPath(node.childNodes);
	                            rePath.push(')?');
	                            break;
	                        }
	                        case PathNodeType_1.default.INSERT: {
	                            rePath.push('([^\\/]+)');
	                            props.push({ name: node.name, optional: false });
	                            break;
	                        }
	                    }
	                }
	            })(parsePath_1.default(path));
	            rePath = rePath.join('');
	            routes.push({
	                path: path,
	                rePath: RegExp("^" + rePath + (rePath.charAt(rePath.length - 1) == '\/' ? '?' : '\/?') + "$"),
	                properties: props,
	                componentName: routeEl.$c.props['component']
	            });
	        });
	    };
	    OpalRouter.prototype.elementAttached = function () {
	        this._update();
	        this.listenTo(window, 'popstate', this._onWindowPopState);
	    };
	    OpalRouter.prototype.elementDetached = function () {
	        this._clear();
	    };
	    OpalRouter.prototype._onWindowPopState = function () {
	        this._update();
	    };
	    OpalRouter.prototype._update = function () {
	        var path = location.hash.slice(1) || '/';
	        var _loop_1 = function (route) {
	            var match = path.match(route.rePath);
	            if (!match) {
	                return "continue";
	            }
	            var state = route.properties.reduce(function (state, prop, index) {
	                if (prop.optional) {
	                    state[prop.name] = !!match[index + 1];
	                }
	                else {
	                    var value = match[index + 1];
	                    state[prop.name] = value && decodeURIComponent(value);
	                }
	                return state;
	            }, Object.create(null));
	            if (route === this_1._route) {
	                var componentEl = this_1._componentElement;
	                var attrs = componentEl.attributes;
	                for (var i = attrs.length; i;) {
	                    var name_1 = attrs.item(--i).name;
	                    if (name_1 != 'class' && !(name_1 in state)) {
	                        componentEl.removeAttribute(name_1);
	                    }
	                }
	                this_1._applyState(state);
	            }
	            else {
	                this_1._clear();
	                this_1._route = route;
	                var componentEl = this_1._componentElement = document.createElement(route.componentName);
	                componentEl.$c.ownerComponent = this_1;
	                this_1._applyState(state);
	                this_1.element.appendChild(componentEl);
	            }
	            return { value: void 0 };
	        };
	        var this_1 = this;
	        for (var _i = 0, _a = this._routes; _i < _a.length; _i++) {
	            var route = _a[_i];
	            var state_1 = _loop_1(route);
	            if (typeof state_1 === "object")
	                return state_1.value;
	        }
	        this._clear();
	    };
	    OpalRouter.prototype._applyState = function (state) {
	        var componentEl = this._componentElement;
	        for (var name_2 in state) {
	            var value = state[name_2];
	            componentEl.setAttribute(hyphenize(name_2), "" + (value === false ? 'no' : (value === true ? 'yes' : escapeHTML(value))));
	        }
	    };
	    OpalRouter.prototype._clear = function () {
	        if (this._route) {
	            this._route = null;
	            this.element.removeChild(this._componentElement);
	            this._componentElement = null;
	        }
	    };
	    return OpalRouter;
	}(rionite_1.Component));
	OpalRouter.OpalRoute = opal_route_1.default;
	OpalRouter = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-router'
	    })
	], OpalRouter);
	exports.default = OpalRouter;


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 8:
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PathNodeType;
	(function (PathNodeType) {
	    PathNodeType[PathNodeType["SIMPLE"] = 0] = "SIMPLE";
	    PathNodeType[PathNodeType["OPTIONAL"] = 1] = "OPTIONAL";
	    PathNodeType[PathNodeType["INSERT"] = 2] = "INSERT";
	})(PathNodeType || (PathNodeType = {}));
	;
	exports.default = PathNodeType;


/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var rionite_1 = __webpack_require__(1);
	var OpalRoute = (function (_super) {
	    __extends(OpalRoute, _super);
	    function OpalRoute() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    return OpalRoute;
	}(rionite_1.Component));
	OpalRoute = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-route',
	        props: {
	            path: { type: String, required: true, readonly: true },
	            component: { type: String, required: true, readonly: true }
	        }
	    })
	], OpalRoute);
	exports.default = OpalRoute;


/***/ },

/***/ 17:
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;
	function escapeRegExp(str) {
	    return str.replace(reEscapableChars, '\\$1');
	}
	exports.default = escapeRegExp;


/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var PathNodeType_1 = __webpack_require__(8);
	var reName = /[a-z][0-9a-z]*/i;
	function parsePath(path) {
	    var ctx = PathNodeType_1.default.SIMPLE;
	    var at = 0;
	    var chr = path[0];
	    return readPath();
	    function next(c) {
	        if (c && c != chr) {
	            throw {
	                name: 'SyntaxError',
	                message: "Expected \"" + c + "\" instead of \"" + chr + "\"",
	                at: at,
	                path: path
	            };
	        }
	        chr = path[++at];
	        return chr;
	    }
	    function readPath() {
	        var path = [];
	        while (chr) {
	            if (chr == '(') {
	                path.push(readOptionalNode());
	            }
	            else if (chr == '[') {
	                path.push(readInsert());
	            }
	            else {
	                path.push(readSimpleNode());
	            }
	        }
	        return path;
	    }
	    function readSimpleNode() {
	        var value = chr;
	        while (next()) {
	            if (chr == '(' || chr == '[' || ctx == PathNodeType_1.default.OPTIONAL && chr == ')') {
	                break;
	            }
	            value += chr;
	        }
	        return {
	            type: PathNodeType_1.default.SIMPLE,
	            value: value
	        };
	    }
	    function readOptionalNode() {
	        var optionalNodeAt = at;
	        next('(');
	        var name;
	        if (chr == ':') {
	            name = readOptionalNodeName();
	        }
	        var childNodes = [];
	        var prevCtx = ctx;
	        ctx = PathNodeType_1.default.OPTIONAL;
	        while (chr) {
	            if (chr == ')') {
	                next();
	                ctx = prevCtx;
	                return {
	                    type: PathNodeType_1.default.OPTIONAL,
	                    name: name || null,
	                    childNodes: childNodes
	                };
	            }
	            else if (chr == '(') {
	                childNodes.push(readOptionalNode());
	            }
	            else if (chr == '[') {
	                childNodes.push(readInsert());
	            }
	            else {
	                childNodes.push(readSimpleNode());
	            }
	        }
	        throw {
	            name: 'SyntaxError',
	            message: 'Missing ")" in compound statement',
	            at: optionalNodeAt,
	            path: path
	        };
	    }
	    function readOptionalNodeName() {
	        next(':');
	        var optionalNodeNameAt = at;
	        var name = '';
	        while (chr) {
	            if (chr == ':') {
	                if (!reName.test(name) || name == 'class') {
	                    throw {
	                        name: 'SyntaxError',
	                        message: "Invalid name \"" + name + "\"",
	                        at: optionalNodeNameAt,
	                        path: path
	                    };
	                }
	                next();
	                return name;
	            }
	            else {
	                name += chr;
	                next();
	            }
	        }
	        throw {
	            name: 'SyntaxError',
	            message: 'Missing ":" in compound statement',
	            at: optionalNodeNameAt,
	            path: path
	        };
	    }
	    function readInsert() {
	        var insertAt = at;
	        next('[');
	        var name = '';
	        var prevCtx = ctx;
	        ctx = PathNodeType_1.default.INSERT;
	        while (chr) {
	            if (chr == ']') {
	                if (!reName.test(name) || name == 'class') {
	                    throw {
	                        name: 'SyntaxError',
	                        message: "Invalid name \"" + name + "\"",
	                        at: insertAt + 1,
	                        path: path
	                    };
	                }
	                next();
	                ctx = prevCtx;
	                return {
	                    type: PathNodeType_1.default.INSERT,
	                    name: name
	                };
	            }
	            else {
	                name += chr;
	                next();
	            }
	        }
	        throw {
	            name: 'SyntaxError',
	            message: 'Missing "]" in compound statement',
	            at: insertAt,
	            path: path
	        };
	    }
	}
	exports.default = parsePath;


/***/ },

/***/ 63:
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


/***/ }

/******/ })
});
;