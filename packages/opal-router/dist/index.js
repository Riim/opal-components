(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("@riim/kebab-case"), require("@riim/next-uid"), require("@riim/rionite-snake-case-attribute-name"), require("history"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "@riim/kebab-case", "@riim/next-uid", "@riim/rionite-snake-case-attribute-name", "history", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-router"] = factory(require("reflect-metadata"), require("@riim/kebab-case"), require("@riim/next-uid"), require("@riim/rionite-snake-case-attribute-name"), require("history"), require("rionite"));
	else
		root["@riim/opal-router"] = factory(root["reflect-metadata"], root["@riim/kebab-case"], root["@riim/next-uid"], root["@riim/rionite-snake-case-attribute-name"], root["history"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
__export(__webpack_require__(2));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OpalRouter_1;
Object.defineProperty(exports, "__esModule", { value: true });
const kebab_case_1 = __webpack_require__(3);
const next_uid_1 = __webpack_require__(4);
const rionite_snake_case_attribute_name_1 = __webpack_require__(5);
const history_1 = __webpack_require__(6);
const rionite_1 = __webpack_require__(7);
const OpalRoute_1 = __webpack_require__(8);
exports.OpalRoute = OpalRoute_1.OpalRoute;
const escapeRegExp_1 = __webpack_require__(9);
__webpack_require__(10);
const parsePath_1 = __webpack_require__(11);
const PathNodeType_1 = __webpack_require__(12);
const history = history_1.createBrowserHistory();
function valueToAttributeValue(value) {
    return value === false ? 'no' : value === true ? 'yes' : value;
}
let OpalRouter = OpalRouter_1 = class OpalRouter extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.useLocationHash = false;
        this.scrollTopOnChange = true;
        this.scrollTopOnChangeComponent = true;
        this._route = null;
        this._state = null;
        this._componentElement = null;
    }
    initialize() {
        this._routes = [];
    }
    ready() {
        let routes = this._routes;
        Array.prototype.forEach.call(this.element.getElementsByTagName('opal-route'), (routeEl) => {
            let path = routeEl.$component.path;
            let rePath = [];
            let props = [];
            (function processPath(path) {
                for (let node of path) {
                    switch (node.type) {
                        case PathNodeType_1.PathNodeType.STATIC: {
                            rePath.push(escapeRegExp_1.escapeRegExp(node.value).replace('\\*', '.*?'));
                            break;
                        }
                        case PathNodeType_1.PathNodeType.OPTIONAL: {
                            if (node.name) {
                                rePath.push('(');
                                props.push({
                                    name: node.name,
                                    optional: true
                                });
                            }
                            else {
                                rePath.push('(?:');
                            }
                            processPath(node.children);
                            rePath.push(')?');
                            break;
                        }
                        case PathNodeType_1.PathNodeType.INSERT: {
                            rePath.push('([^\\/]+)');
                            props.push({
                                name: node.name,
                                optional: false
                            });
                            break;
                        }
                    }
                }
            })(parsePath_1.parsePath(path));
            rePath = rePath.join('');
            routes.push({
                path,
                rePath: RegExp(`^${rePath}${rePath.charAt(rePath.length - 1) == '/' ? '?' : '/?'}$`),
                properties: props,
                componentName: kebab_case_1.kebabCase(routeEl.$component.component)
            });
        });
    }
    elementAttached() {
        this._disposables[next_uid_1.nextUID()] = {
            dispose: history.listen(location => {
                this._onHistoryChange(location);
            })
        };
        if (!this.useLocationHash) {
            this.listenTo(document.body, 'click', this._onBodyClick);
        }
        this.listenTo(this, OpalRouter_1.EVENT_REFRESH_ROUTER, this._onRefreshRouter);
        if (this.useLocationHash) {
            this._update(history.location.hash.slice(1), '');
        }
        else {
            this._update(history.location.pathname, history.location.hash);
        }
    }
    elementDetached() {
        this._clear();
    }
    _onHistoryChange(location) {
        if (this.useLocationHash) {
            this._update(location.hash.slice(1), '');
        }
        else {
            this._update(location.pathname, location.hash);
        }
    }
    _onBodyClick(evt) {
        let el = evt.target;
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
        if (path &&
            !/^(?:\w+:|\/\/)/.test(path) &&
            el.getAttribute('target') != '_blank' &&
            this._update(path, hashIndex == -1 ? '' : href.slice(hashIndex + 1))) {
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
    _update(path, _hash) {
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
                    state[prop.name] = !!match[index + 1];
                }
                else {
                    let value = match[index + 1];
                    // `/password-recovery(/[email])`
                    if (value) {
                        state[prop.name] = decodeURIComponent(value);
                    }
                }
                return state;
            }, Object.create(null));
            if (route === this._route) {
                let prevState = this._state;
                let stateKeys = Object.keys(state);
                if (stateKeys.length == Object.keys(prevState).length &&
                    stateKeys.every(name => state[name] === prevState[name])) {
                    return true;
                }
                let componentEl = this._componentElement;
                let $paramsConfig = componentEl.$component.constructor[rionite_1.KEY_PARAMS_CONFIG];
                let attrs = componentEl.attributes;
                let canWrite = true;
                if ($paramsConfig) {
                    for (let i = attrs.length; i;) {
                        let name = attrs.item(--i).name;
                        if (name == 'class') {
                            continue;
                        }
                        let $paramConfig = $paramsConfig[name];
                        if ($paramConfig &&
                            $paramConfig.readonly &&
                            !($paramConfig.name in state)) {
                            canWrite = false;
                            break;
                        }
                    }
                    if (canWrite) {
                        for (let name in state) {
                            if ($paramsConfig[name].readonly &&
                                componentEl.getAttribute(rionite_snake_case_attribute_name_1.snakeCaseAttributeName(name, true)) !==
                                    valueToAttributeValue(state[name])) {
                                canWrite = false;
                                break;
                            }
                        }
                    }
                }
                if (canWrite) {
                    if ($paramsConfig) {
                        for (let i = attrs.length; i;) {
                            let name = attrs.item(--i).name;
                            if (name == 'class') {
                                continue;
                            }
                            let $paramConfig = $paramsConfig[name];
                            if ($paramConfig && !($paramConfig.name in state)) {
                                componentEl.removeAttribute(rionite_snake_case_attribute_name_1.snakeCaseAttributeName(name, true));
                            }
                        }
                    }
                    this._state = state;
                    this._applyState();
                    if (this.scrollTopOnChange) {
                        window.scrollTo(window.pageXOffset, 0);
                    }
                    this.emit('change');
                    return true;
                }
            }
            if (this._componentElement) {
                this.element.removeChild(this._componentElement);
            }
            this._route = route;
            this._state = state;
            let componentEl = (this._componentElement = document.createElement(route.componentName));
            this._applyState();
            componentEl.rioniteComponent.ownerComponent = this;
            this.element.appendChild(componentEl);
            if (this.scrollTopOnChange || this.scrollTopOnChangeComponent) {
                window.scrollTo(window.pageXOffset, 0);
            }
            this.emit('change');
            return true;
        }
        if (this._route) {
            this.emit('change');
            this._clear();
        }
        return false;
    }
    _applyState() {
        let state = this._state;
        let componentEl = this._componentElement;
        for (let name in state) {
            componentEl.setAttribute(rionite_snake_case_attribute_name_1.snakeCaseAttributeName(name, true), valueToAttributeValue(state[name]));
        }
    }
    _clear() {
        if (!this._route) {
            return;
        }
        this._route = null;
        this._state = null;
        this.element.removeChild(this._componentElement);
        this._componentElement = null;
    }
    refresh() {
        let route = this._route;
        if (!route) {
            return;
        }
        this.element.removeChild(this._componentElement);
        let componentEl = (this._componentElement = document.createElement(route.componentName));
        this._applyState();
        componentEl.rioniteComponent.ownerComponent = this;
        this.element.appendChild(componentEl);
        if (this.scrollTopOnChange || this.scrollTopOnChangeComponent) {
            window.scrollTo(window.pageXOffset, 0);
        }
    }
};
OpalRouter.EVENT_REFRESH_ROUTER = Symbol('refresh-router');
OpalRouter.history = history;
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalRouter.prototype, "useLocationHash", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalRouter.prototype, "scrollTopOnChange", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalRouter.prototype, "scrollTopOnChangeComponent", void 0);
OpalRouter = OpalRouter_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalRouter'
    })
], OpalRouter);
exports.OpalRouter = OpalRouter;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
const rionite_1 = __webpack_require__(7);
let OpalRoute = class OpalRoute extends rionite_1.BaseComponent {
};
__decorate([
    rionite_1.Param({
        required: true,
        readonly: true
    }),
    __metadata("design:type", String)
], OpalRoute.prototype, "path", void 0);
__decorate([
    rionite_1.Param({
        required: true,
        readonly: true
    }),
    __metadata("design:type", String)
], OpalRoute.prototype, "component", void 0);
OpalRoute = __decorate([
    rionite_1.Component({
        elementIs: 'OpalRoute'
    })
], OpalRoute);
exports.OpalRoute = OpalRoute;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;
function escapeRegExp(str) {
    return str.replace(reEscapableChars, '\\$1');
}
exports.escapeRegExp = escapeRegExp;


/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PathNodeType_1 = __webpack_require__(12);
const reName = /[a-z][0-9a-z]*/i;
function parsePath(path) {
    let ctx = PathNodeType_1.PathNodeType.STATIC;
    let pos = 0;
    let chr = path[0];
    return readPath();
    function next(c) {
        if (c && c != chr) {
            throw {
                name: 'SyntaxError',
                message: `Expected "${c}" instead of "${chr}"`,
                pos,
                path
            };
        }
        chr = path[++pos];
        return chr;
    }
    function readPath() {
        let path = [];
        while (chr) {
            if (chr == '(') {
                path.push(readOptionalNode());
            }
            else if (chr == '[') {
                path.push(readInsert());
            }
            else {
                path.push(readStaticNode());
            }
        }
        return path;
    }
    function readStaticNode() {
        let value = chr;
        while (next()) {
            if (chr == '(' || chr == '[' || (ctx == PathNodeType_1.PathNodeType.OPTIONAL && chr == ')')) {
                break;
            }
            value += chr;
        }
        return {
            type: PathNodeType_1.PathNodeType.STATIC,
            value
        };
    }
    function readOptionalNode() {
        let optionalNodePos = pos;
        next('(');
        let name;
        if (chr == '|') {
            name = readOptionalNodeName();
        }
        let children = [];
        let prevCtx = ctx;
        ctx = PathNodeType_1.PathNodeType.OPTIONAL;
        while (chr) {
            if (chr == ')') {
                next();
                ctx = prevCtx;
                return {
                    type: PathNodeType_1.PathNodeType.OPTIONAL,
                    name: name || null,
                    children
                };
            }
            else if (chr == '(') {
                children.push(readOptionalNode());
            }
            else if (chr == '[') {
                children.push(readInsert());
            }
            else {
                children.push(readStaticNode());
            }
        }
        throw {
            name: 'SyntaxError',
            message: 'Missing ")" in compound statement',
            pos: optionalNodePos,
            path
        };
    }
    function readOptionalNodeName() {
        next('|');
        let optionalNodeNamePos = pos;
        let name = '';
        while (chr) {
            if (chr == '|') {
                if (!reName.test(name) || name == 'class') {
                    throw {
                        name: 'SyntaxError',
                        message: `Invalid name "${name}"`,
                        pos: optionalNodeNamePos,
                        path
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
            pos: optionalNodeNamePos,
            path
        };
    }
    function readInsert() {
        let insertPos = pos;
        next('[');
        let name = '';
        let prevCtx = ctx;
        ctx = PathNodeType_1.PathNodeType.INSERT;
        while (chr) {
            if (chr == ']') {
                if (!reName.test(name) || name == 'class') {
                    throw {
                        name: 'SyntaxError',
                        message: `Invalid name "${name}"`,
                        pos: insertPos + 1,
                        path
                    };
                }
                next();
                ctx = prevCtx;
                return {
                    type: PathNodeType_1.PathNodeType.INSERT,
                    name
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
            pos: insertPos,
            path
        };
    }
}
exports.parsePath = parsePath;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PathNodeType;
(function (PathNodeType) {
    PathNodeType[PathNodeType["STATIC"] = 0] = "STATIC";
    PathNodeType[PathNodeType["OPTIONAL"] = 1] = "OPTIONAL";
    PathNodeType[PathNodeType["INSERT"] = 2] = "INSERT";
})(PathNodeType = exports.PathNodeType || (exports.PathNodeType = {}));


/***/ })
/******/ ]);
});