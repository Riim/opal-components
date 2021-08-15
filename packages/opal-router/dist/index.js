(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("history"), require("@riim/next-uid"), require("rionite"), require("@riim/kebab-case"), require("@riim/rionite-snake-case-attribute-name"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["history", "@riim/next-uid", "rionite", "@riim/kebab-case", "@riim/rionite-snake-case-attribute-name", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-router"] = factory(require("history"), require("@riim/next-uid"), require("rionite"), require("@riim/kebab-case"), require("@riim/rionite-snake-case-attribute-name"), require("cellx-decorators"));
	else
		root["@riim/opal-router"] = factory(root["history"], root["@riim/next-uid"], root["rionite"], root["@riim/kebab-case"], root["@riim/rionite-snake-case-attribute-name"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_ZFcg__, __WEBPACK_EXTERNAL_MODULE_cIp5__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_vRer__, __WEBPACK_EXTERNAL_MODULE_wLwu__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "6j3v");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FrP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PathNodeType = void 0;
var PathNodeType;
(function (PathNodeType) {
    PathNodeType[PathNodeType["STATIC"] = 0] = "STATIC";
    PathNodeType[PathNodeType["OPTIONAL"] = 1] = "OPTIONAL";
    PathNodeType[PathNodeType["INSERT"] = 2] = "INSERT";
})(PathNodeType = exports.PathNodeType || (exports.PathNodeType = {}));


/***/ }),

/***/ "3C5J":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalRouter{position:relative;display:block;min-height:320px}@media (min-height:440px){.OpalRouter{min-height:440px}}@media (min-height:560px){.OpalRouter{min-height:560px}}@media (min-height:680px){.OpalRouter{min-height:680px}}@media (min-height:800px){.OpalRouter{min-height:800px}}@media (min-height:920px){.OpalRouter{min-height:920px}}@media (min-height:1040px){.OpalRouter{min-height:1040px}}@media (min-height:1160px){.OpalRouter{min-height:1160px}}@media (min-height:1280px){.OpalRouter{min-height:1280px}}.OpalRouter .OpalRouter__loader{position:absolute;top:0;right:0;bottom:0;left:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "6j3v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__("SN5g"), exports);


/***/ }),

/***/ "SN5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var OpalRouter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalRouter = exports.OpalRoute = void 0;
const kebab_case_1 = __webpack_require__("vRer");
const next_uid_1 = __webpack_require__("cIp5");
const rionite_snake_case_attribute_name_1 = __webpack_require__("wLwu");
const cellx_decorators_1 = __webpack_require__("yOaX");
const history_1 = __webpack_require__("ZFcg");
const rionite_1 = __webpack_require__("u4yd");
const OpalRoute_1 = __webpack_require__("ZqFQ");
Object.defineProperty(exports, "OpalRoute", { enumerable: true, get: function () { return OpalRoute_1.OpalRoute; } });
__webpack_require__("3C5J");
const escapeRegExp_1 = __webpack_require__("xb8m");
const parsePath_1 = __webpack_require__("w1X0");
const PathNodeType_1 = __webpack_require__("+FrP");
const template_rnt_1 = __webpack_require__("nuuU");
__exportStar(__webpack_require__("ZFcg"), exports);
const history = history_1.createBrowserHistory();
function valueToAttributeValue(value) {
    return value === false ? 'no' : value === true ? 'yes' : value;
}
let OpalRouter = OpalRouter_1 = class OpalRouter extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this._route = null;
        this._state = null;
        this._historyUnblock = null;
        this._componentElement = null;
        this.isLoaderShown = false;
        this._updateCounter = 0;
    }
    initialize() {
        this._routes = [];
    }
    ready() {
        let routes = this._routes;
        for (let routeEl of this.element.getElementsByTagName('opal-route')) {
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
                component: routeEl.$component
            });
        }
    }
    connected() {
        this._disposables[next_uid_1.nextUID()] = {
            dispose: history.listen((update) => {
                this._onHistoryChange(update);
            })
        };
        if (!this.useLocationHash) {
            this.listenTo(document.body, 'click', this._onBodyClick, this, true);
        }
        this.listenTo(this, {
            [OpalRouter_1.EVENT_REFRESH_ROUTER]: this._onRefreshRouter,
            [OpalRouter_1.EVENT_BLOCK_ROUTER]: this._onBlockRouter,
            [OpalRouter_1.EVENT_UNBLOCK_ROUTER]: this._onUnblockRouter
        });
        if (this.useLocationHash) {
            this._update(history.location.hash.slice(1), '');
        }
        else {
            this._update(history.location.pathname, history.location.hash);
        }
    }
    disconnected() {
        this._clear();
    }
    _onHistoryChange(update) {
        if (this.useLocationHash) {
            this._update(update.location.hash.slice(1), '');
        }
        else {
            this._update(update.location.pathname, update.location.hash);
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
    _onBlockRouter(evt) {
        this._historyBlockingMessage = evt.data.message;
        if (!this._historyUnblock) {
            this._historyUnblock = history.block((transition) => {
                if (confirm(this._historyBlockingMessage)) {
                    this._historyUnblock();
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
                    state.set(prop.name, !!match[index + 1]);
                }
                else {
                    let value = match[index + 1];
                    // `/password-recovery(/[email])`
                    if (value) {
                        state.set(prop.name, decodeURIComponent(value));
                    }
                }
                return state;
            }, new Map());
            if (route === this._route) {
                let prevState = this._state;
                if (state.size == prevState.size &&
                    [...state.keys()].every((name) => state.get(name) === prevState.get(name))) {
                    return true;
                }
                let componentEl = this._componentElement;
                let $paramsConfig = componentEl.$component.constructor[rionite_1.KEY_PARAMS_CONFIG];
                let attrs = componentEl.attributes;
                let canWrite = true;
                if ($paramsConfig.size) {
                    for (let i = attrs.length; i;) {
                        let name = attrs.item(--i).name;
                        if (name == 'class') {
                            continue;
                        }
                        let $paramConfig = $paramsConfig.get(name);
                        if ($paramConfig &&
                            $paramConfig.readonly &&
                            !state.has($paramConfig.name)) {
                            canWrite = false;
                            break;
                        }
                    }
                    if (canWrite) {
                        for (let [name, value] of state) {
                            if ($paramsConfig.get(name).readonly &&
                                componentEl.getAttribute(rionite_snake_case_attribute_name_1.snakeCaseAttributeName(name, true)) !==
                                    valueToAttributeValue(value)) {
                                canWrite = false;
                                break;
                            }
                        }
                    }
                }
                if (canWrite) {
                    if ($paramsConfig.size) {
                        for (let i = attrs.length; i;) {
                            let name = attrs.item(--i).name;
                            if (name == 'class') {
                                continue;
                            }
                            let $paramConfig = $paramsConfig.get(name);
                            if ($paramConfig && !state.has($paramConfig.name)) {
                                componentEl.removeAttribute(rionite_snake_case_attribute_name_1.snakeCaseAttributeName(name, true));
                            }
                        }
                    }
                    this._state = state;
                    this._applyState();
                    if (this.scrollTopOnChange) {
                        window.scrollTo(window.pageXOffset, 0);
                    }
                    this.emit(OpalRouter_1.EVENT_CHANGE);
                    return true;
                }
            }
            if (this._componentElement) {
                this.element.removeChild(this._componentElement);
            }
            this._route = route;
            this._state = state;
            let updateCounter = ++this._updateCounter;
            let onComponentLoaded = (elementName) => {
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
                    this.emit(OpalRouter_1.EVENT_CHANGE);
                };
                let componentEl = (this._componentElement = document.createElement(kebab_case_1.kebabCase(elementName, true)));
                this._applyState();
                this.element.appendChild(componentEl);
                let initializationPromise = componentEl.rioniteComponent.connect(this);
                if (initializationPromise) {
                    this.isLoaderShown = true;
                    initializationPromise.then(f);
                }
                else {
                    this.isLoaderShown = false;
                    f();
                }
            };
            if (route.component.component) {
                this.isLoaderShown = false;
                onComponentLoaded(route.component.component);
            }
            else {
                this.isLoaderShown = true;
                route.component.lazyLoadComponent()
                    .then((componentConstr) => componentConstr.elementIs)
                    .then(onComponentLoaded);
            }
            return true;
        }
        if (this._route) {
            this.emit(OpalRouter_1.EVENT_CHANGE);
            this._clear();
        }
        return false;
    }
    _applyState() {
        let componentEl = this._componentElement;
        for (let [name, value] of this._state) {
            componentEl.setAttribute(rionite_snake_case_attribute_name_1.snakeCaseAttributeName(name, true), valueToAttributeValue(value));
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
        let updateCounter = ++this._updateCounter;
        let onComponentLoaded = (elementName) => {
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
            let componentEl = (this._componentElement = document.createElement(kebab_case_1.kebabCase(elementName, true)));
            this._applyState();
            this.element.appendChild(componentEl);
            let initializationWait = componentEl.rioniteComponent.connect(this);
            if (initializationWait) {
                this.isLoaderShown = true;
                initializationWait.then(f);
            }
            else {
                this.isLoaderShown = false;
                f();
            }
        };
        if (route.component.component) {
            this.isLoaderShown = false;
            onComponentLoaded(route.component.component);
        }
        else {
            this.isLoaderShown = true;
            route.component.lazyLoadComponent()
                .then((componentConstr) => componentConstr.elementIs)
                .then(onComponentLoaded);
        }
    }
};
OpalRouter.EVENT_CHANGE = Symbol('change');
OpalRouter.EVENT_REFRESH_ROUTER = Symbol('refresh-router');
OpalRouter.EVENT_BLOCK_ROUTER = Symbol('block-router');
OpalRouter.EVENT_UNBLOCK_ROUTER = Symbol('unblock-router');
OpalRouter.history = history;
__decorate([
    rionite_1.Param({ type: Boolean, readonly: true })
], OpalRouter.prototype, "useLocationHash", void 0);
__decorate([
    rionite_1.Param({ default: true })
], OpalRouter.prototype, "scrollTopOnChange", void 0);
__decorate([
    rionite_1.Param({ default: true })
], OpalRouter.prototype, "scrollTopOnComponentChange", void 0);
__decorate([
    cellx_decorators_1.Observable
], OpalRouter.prototype, "isLoaderShown", void 0);
OpalRouter = OpalRouter_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalRouter',
        template: template_rnt_1.default
    })
], OpalRouter);
exports.OpalRouter = OpalRouter;


/***/ }),

/***/ "ZFcg":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ZFcg__;

/***/ }),

/***/ "ZqFQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalRoute = void 0;
const rionite_1 = __webpack_require__("u4yd");
let OpalRoute = class OpalRoute extends rionite_1.BaseComponent {
};
__decorate([
    rionite_1.Param({ type: String, required: true, readonly: true })
], OpalRoute.prototype, "path", void 0);
__decorate([
    rionite_1.Param({ type: String, readonly: true })
], OpalRoute.prototype, "component", void 0);
__decorate([
    rionite_1.Param({ readonly: true })
], OpalRoute.prototype, "lazyLoadComponent", void 0);
OpalRoute = __decorate([
    rionite_1.Component({
        elementIs: 'OpalRoute'
    })
], OpalRoute);
exports.OpalRoute = OpalRoute;


/***/ }),

/***/ "cIp5":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cIp5__;

/***/ }),

/***/ "nuuU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,["contentSlot"],,,"RnSlot",,],[1,["loader"],,,"OpalLoader",[,[[,"shown","{isLoaderShown}"]]],]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "vRer":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vRer__;

/***/ }),

/***/ "w1X0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePath = void 0;
const PathNodeType_1 = __webpack_require__("+FrP");
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

/***/ "wLwu":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_wLwu__;

/***/ }),

/***/ "xb8m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeRegExp = void 0;
const reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;
function escapeRegExp(str) {
    return str.replace(reEscapableChars, '\\$1');
}
exports.escapeRegExp = escapeRegExp;


/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ })

/******/ });
});