(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("rionite"), require("@riim/next-uid"), require("@riim/kebab-case"), require("@riim/rionite-snake-case-attribute-name"), require("history/createBrowserHistory"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "rionite", "@riim/next-uid", "@riim/kebab-case", "@riim/rionite-snake-case-attribute-name", "history/createBrowserHistory"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-router"] = factory(require("reflect-metadata"), require("rionite"), require("@riim/next-uid"), require("@riim/kebab-case"), require("@riim/rionite-snake-case-attribute-name"), require("history/createBrowserHistory"));
	else
		root["@riim/opal-router"] = factory(root["reflect-metadata"], root["rionite"], root["@riim/next-uid"], root["@riim/kebab-case"], root["@riim/rionite-snake-case-attribute-name"], root["history/createBrowserHistory"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__152__, __WEBPACK_EXTERNAL_MODULE__180__, __WEBPACK_EXTERNAL_MODULE__181__, __WEBPACK_EXTERNAL_MODULE__182__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 178);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__152__;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(4);
__export(__webpack_require__(179));


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var kebab_case_1 = __webpack_require__(180);
var next_uid_1 = __webpack_require__(152);
var rionite_snake_case_attribute_name_1 = __webpack_require__(181);
var createBrowserHistory_1 = __webpack_require__(182);
var rionite_1 = __webpack_require__(10);
var OpalRoute_1 = __webpack_require__(183);
exports.OpalRoute = OpalRoute_1.OpalRoute;
var escapeRegExp_1 = __webpack_require__(184);
__webpack_require__(185);
var parsePath_1 = __webpack_require__(186);
var PathNodeType_1 = __webpack_require__(187);
var forEach = Array.prototype.forEach;
var history = createBrowserHistory_1.default();
function valueToAttributeValue(value) {
    return value === false ? 'no' : value === true ? 'yes' : value;
}
var OpalRouter = /** @class */ (function (_super) {
    __extends(OpalRouter, _super);
    function OpalRouter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramUseLocationHash = false;
        _this.paramScrollTopOnChange = true;
        _this.paramScrollTopOnChangeComponent = true;
        _this._route = null;
        _this._state = null;
        _this._componentElement = null;
        return _this;
    }
    OpalRouter.prototype.initialize = function () {
        this._routes = [];
    };
    OpalRouter.prototype.ready = function () {
        var routes = this._routes;
        forEach.call(this.element.getElementsByTagName('opal-route'), function (routeEl) {
            var path = routeEl.$component.paramPath;
            var rePath = [];
            var props = [];
            (function processPath(path) {
                for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                    var node = path_1[_i];
                    switch (node.type) {
                        case PathNodeType_1.PathNodeType.SIMPLE: {
                            rePath.push(escapeRegExp_1.escapeRegExp(node.value).replace('\\*', '.*?'));
                            break;
                        }
                        case PathNodeType_1.PathNodeType.OPTIONAL: {
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
                        case PathNodeType_1.PathNodeType.INSERT: {
                            rePath.push('([^\\/]+)');
                            props.push({ name: node.name, optional: false });
                            break;
                        }
                    }
                }
            })(parsePath_1.parsePath(path));
            rePath = rePath.join('');
            routes.push({
                path: path,
                rePath: RegExp("^" + rePath + (rePath.charAt(rePath.length - 1) == '/' ? '?' : '/?') + "$"),
                properties: props,
                componentName: kebab_case_1.kebabCase(routeEl.$component.paramComponent)
            });
        });
    };
    OpalRouter.prototype.elementAttached = function () {
        var _this = this;
        this._disposables[next_uid_1.nextUID()] = {
            dispose: history.listen(function (location) {
                _this._onHistoryChange(location);
            })
        };
        if (!this.paramUseLocationHash) {
            this.listenTo(document.body, 'click', this._onBodyClick);
        }
        this.listenTo(this, '<*>refresh-router', this._onRefreshRouter);
        if (this.paramUseLocationHash) {
            this._update(history.location.hash.slice(1), '');
        }
        else {
            this._update(history.location.pathname, history.location.hash);
        }
    };
    OpalRouter.prototype.elementDetached = function () {
        this._clear();
    };
    OpalRouter.prototype._onHistoryChange = function (location) {
        if (this.paramUseLocationHash) {
            this._update(location.hash.slice(1), '');
        }
        else {
            this._update(location.pathname, location.hash);
        }
    };
    OpalRouter.prototype._onBodyClick = function (evt) {
        var el = evt.target;
        while (el.tagName != 'A') {
            el = el.parentElement;
            if (!el) {
                return;
            }
        }
        var href = el.getAttribute('href');
        if (!href) {
            return;
        }
        var hashIndex = href.indexOf('#');
        var path = hashIndex == -1 ? href : href.slice(0, hashIndex);
        if (path &&
            !/^(?:\w+:|\/\/)/.test(path) &&
            el.getAttribute('target') != '_blank' &&
            this._update(path, hashIndex == -1 ? '' : href.slice(hashIndex + 1))) {
            evt.preventDefault();
            if (path != history.location.pathname) {
                history.push(href);
            }
        }
    };
    OpalRouter.prototype._onRefreshRouter = function () {
        this.refresh();
        return false;
    };
    OpalRouter.prototype._update = function (path, hash) {
        if (!path) {
            path = '/';
        }
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
                var prevState_1 = this_1._state;
                var stateKeys = Object.keys(state);
                if (stateKeys.length == Object.keys(prevState_1).length &&
                    stateKeys.every(function (name) { return state[name] === prevState_1[name]; })) {
                    return { value: true };
                }
                var componentEl_1 = this_1._componentElement;
                var $paramsConfig = componentEl_1.$component.constructor[rionite_1.KEY_PARAMS_CONFIG];
                var attrs = componentEl_1.attributes;
                var canWrite = true;
                if ($paramsConfig) {
                    for (var i = attrs.length; i;) {
                        var name_1 = attrs.item(--i).name;
                        if (name_1 == 'class') {
                            continue;
                        }
                        var $paramConfig = $paramsConfig[name_1];
                        if ($paramConfig &&
                            $paramConfig.readonly &&
                            !($paramConfig.name in state)) {
                            canWrite = false;
                            break;
                        }
                    }
                    if (canWrite) {
                        for (var name_2 in state) {
                            if ($paramsConfig[name_2].readonly &&
                                componentEl_1.getAttribute(rionite_snake_case_attribute_name_1.snakeCaseAttributeName(name_2, true)) !==
                                    valueToAttributeValue(state[name_2])) {
                                canWrite = false;
                                break;
                            }
                        }
                    }
                }
                if (canWrite) {
                    if ($paramsConfig) {
                        for (var i = attrs.length; i;) {
                            var name_3 = attrs.item(--i).name;
                            if (name_3 == 'class') {
                                continue;
                            }
                            var $paramConfig = $paramsConfig[name_3];
                            if ($paramConfig && !($paramConfig.name in state)) {
                                componentEl_1.removeAttribute(rionite_snake_case_attribute_name_1.snakeCaseAttributeName(name_3, true));
                            }
                        }
                    }
                    this_1._state = state;
                    this_1._applyState();
                    if (this_1.paramScrollTopOnChange) {
                        window.scrollTo(window.pageXOffset, 0);
                    }
                    this_1.emit('change');
                    return { value: true };
                }
            }
            if (this_1._componentElement) {
                this_1.element.removeChild(this_1._componentElement);
            }
            this_1._route = route;
            this_1._state = state;
            var componentEl = (this_1._componentElement = document.createElement(route.componentName));
            this_1._applyState();
            componentEl.rioniteComponent.ownerComponent = this_1;
            this_1.element.appendChild(componentEl);
            if (this_1.paramScrollTopOnChange || this_1.paramScrollTopOnChangeComponent) {
                window.scrollTo(window.pageXOffset, 0);
            }
            this_1.emit('change');
            return { value: true };
        };
        var this_1 = this;
        for (var _i = 0, _a = this._routes; _i < _a.length; _i++) {
            var route = _a[_i];
            var state_1 = _loop_1(route);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        if (this._route) {
            this.emit('change');
            this._clear();
        }
        return false;
    };
    OpalRouter.prototype._applyState = function () {
        var state = this._state;
        var componentEl = this._componentElement;
        for (var name_4 in state) {
            componentEl.setAttribute(rionite_snake_case_attribute_name_1.snakeCaseAttributeName(name_4, true), valueToAttributeValue(state[name_4]));
        }
    };
    OpalRouter.prototype._clear = function () {
        if (this._route) {
            this._route = null;
            this._state = null;
            this.element.removeChild(this._componentElement);
            this._componentElement = null;
        }
    };
    OpalRouter.prototype.refresh = function () {
        var route = this._route;
        if (route) {
            this.element.removeChild(this._componentElement);
            var componentEl = (this._componentElement = document.createElement(route.componentName));
            this._applyState();
            componentEl.rioniteComponent.ownerComponent = this;
            this.element.appendChild(componentEl);
            if (this.paramScrollTopOnChange || this.paramScrollTopOnChangeComponent) {
                window.scrollTo(window.pageXOffset, 0);
            }
        }
    };
    OpalRouter.history = history;
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalRouter.prototype, "paramUseLocationHash", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalRouter.prototype, "paramScrollTopOnChange", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalRouter.prototype, "paramScrollTopOnChangeComponent", void 0);
    OpalRouter = __decorate([
        rionite_1.Component({
            elementIs: 'OpalRouter'
        })
    ], OpalRouter);
    return OpalRouter;
}(rionite_1.BaseComponent));
exports.OpalRouter = OpalRouter;


/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__180__;

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__181__;

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__182__;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(10);
var OpalRoute = /** @class */ (function (_super) {
    __extends(OpalRoute, _super);
    function OpalRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        rionite_1.Param({ required: true, readonly: true }),
        __metadata("design:type", String)
    ], OpalRoute.prototype, "paramPath", void 0);
    __decorate([
        rionite_1.Param({ required: true, readonly: true }),
        __metadata("design:type", String)
    ], OpalRoute.prototype, "paramComponent", void 0);
    OpalRoute = __decorate([
        rionite_1.Component({
            elementIs: 'OpalRoute'
        })
    ], OpalRoute);
    return OpalRoute;
}(rionite_1.BaseComponent));
exports.OpalRoute = OpalRoute;


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;
function escapeRegExp(str) {
    return str.replace(reEscapableChars, '\\$1');
}
exports.escapeRegExp = escapeRegExp;


/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalRouter{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PathNodeType_1 = __webpack_require__(187);
var reName = /[a-z][0-9a-z]*/i;
function parsePath(path) {
    var ctx = PathNodeType_1.PathNodeType.SIMPLE;
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
            if (chr == '(' || chr == '[' || (ctx == PathNodeType_1.PathNodeType.OPTIONAL && chr == ')')) {
                break;
            }
            value += chr;
        }
        return {
            type: PathNodeType_1.PathNodeType.SIMPLE,
            value: value
        };
    }
    function readOptionalNode() {
        var optionalNodeAt = at;
        next('(');
        var name;
        if (chr == '|') {
            name = readOptionalNodeName();
        }
        var childNodes = [];
        var prevCtx = ctx;
        ctx = PathNodeType_1.PathNodeType.OPTIONAL;
        while (chr) {
            if (chr == ')') {
                next();
                ctx = prevCtx;
                return {
                    type: PathNodeType_1.PathNodeType.OPTIONAL,
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
        next('|');
        var optionalNodeNameAt = at;
        var name = '';
        while (chr) {
            if (chr == '|') {
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
        ctx = PathNodeType_1.PathNodeType.INSERT;
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
                    type: PathNodeType_1.PathNodeType.INSERT,
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
exports.parsePath = parsePath;


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PathNodeType;
(function (PathNodeType) {
    PathNodeType[PathNodeType["SIMPLE"] = 0] = "SIMPLE";
    PathNodeType[PathNodeType["OPTIONAL"] = 1] = "OPTIONAL";
    PathNodeType[PathNodeType["INSERT"] = 2] = "INSERT";
})(PathNodeType = exports.PathNodeType || (exports.PathNodeType = {}));


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ })

/******/ });
});