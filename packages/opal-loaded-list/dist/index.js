(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-loader"), require("reflect-metadata"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-loader", "reflect-metadata", "cellx", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-loaded-list"] = factory(require("@riim/opal-loader"), require("reflect-metadata"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-loaded-list"] = factory(root["@riim/opal-loader"], root["reflect-metadata"], root["cellx"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__) {
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
__webpack_require__(2);
__export(__webpack_require__(3));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
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
var OpalLoadedList_1;
Object.defineProperty(exports, "__esModule", { value: true });
const cellx_1 = __webpack_require__(4);
const cellx_decorators_1 = __webpack_require__(5);
const rionite_1 = __webpack_require__(6);
__webpack_require__(7);
const template_rnt_1 = __webpack_require__(8);
let defaultDataListItemSchema = Object.freeze({
    value: 'id',
    text: 'name'
});
let OpalLoadedList = OpalLoadedList_1 = class OpalLoadedList extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.limit = 100;
        this.preloading = false;
        this.dataList = new cellx_1.ObservableList();
        this._scrollingInProcessing = false;
        this._loadingCheckPlanned = false;
        this.loading = false;
        this._lastRequestedQuery = null;
        this._lastLoadedQuery = null;
    }
    get empty() {
        return !this.dataList.length;
    }
    get loaderShown() {
        return this.total === undefined || this.dataList.length < this.total || this.loading;
    }
    get nothingFoundShown() {
        return this.total === 0 && !this._loadingCheckPlanned && !this.loading;
    }
    initialize() {
        this._dataListItemTextFieldName =
            this.dataListItemSchema.text ||
                this.constructor.defaultDataListItemSchema.text;
        if (!this.$specifiedParams || !this.$specifiedParams.has('dataProvider')) {
            throw new TypeError('Parameter "dataProvider" is required');
        }
        if (!this.dataProvider) {
            throw new TypeError('"dataProvider" is not defined');
        }
    }
    elementAttached() {
        this.listenTo(this, 'change:query', this._onQueryChange);
        this.listenTo(this.element, 'scroll', this._onElementScroll);
        if (this.preloading) {
            this._load();
        }
        else {
            this.checkLoading();
        }
    }
    _onQueryChange() {
        if (this.loading) {
            this._requestCallback.cancel();
            this.loading = false;
        }
        this.dataList.clear();
        this.total = undefined;
        if (this._loadingCheckPlanned) {
            this._loadingCheckTimeout.clear();
        }
        else {
            this._loadingCheckPlanned = true;
        }
        this._loadingCheckTimeout = this.setTimeout(() => {
            this._scrollingInProcessing = false;
            this._loadingCheckPlanned = false;
            this.checkLoading();
        }, 300);
    }
    _onElementScroll() {
        if (this._scrollingInProcessing) {
            return;
        }
        this._scrollingInProcessing = true;
        if (this._loadingCheckPlanned) {
            this._loadingCheckTimeout.clear();
        }
        else {
            this._loadingCheckPlanned = true;
        }
        this._loadingCheckTimeout = this.setTimeout(() => {
            this._scrollingInProcessing = false;
            this._loadingCheckPlanned = false;
            this.checkLoading();
        }, 150);
    }
    checkLoading() {
        if (this.query === this._lastRequestedQuery &&
            (this.loading || (this.total !== undefined && this.dataList.length == this.total))) {
            return;
        }
        let elRect = this.element.getBoundingClientRect();
        if (elRect.height &&
            elRect.bottom > this.$('loader').element.getBoundingClientRect().top) {
            this._load();
        }
    }
    _load() {
        if (this.loading) {
            this._requestCallback.cancel();
        }
        let infinite = this.dataProvider.getItems.length >= 2;
        let query = (this._lastRequestedQuery = this.query);
        let args = [query];
        if (infinite) {
            args.unshift(this.limit, this.dataList.length
                ? this.dataList.get(-1)[this.dataListItemSchema.value ||
                    this.constructor
                        .defaultDataListItemSchema.value]
                : null);
        }
        this.loading = true;
        this.dataProvider.getItems.apply(this.dataProvider, args).then((this._requestCallback = this.registerCallback(function (data) {
            this.loading = false;
            let items = data.items;
            this.total = infinite && data.total !== undefined ? data.total : items.length;
            if (query === this._lastLoadedQuery) {
                this.dataList.addRange(items);
            }
            else {
                this.dataList.clear().addRange(items);
                this._lastLoadedQuery = query;
            }
            cellx_1.Cell.release();
            this.emit('loaded');
            this.checkLoading();
        })));
    }
    _getListItemContext(context, slot) {
        return {
            __proto__: context,
            $item: slot.$context.$item
        };
    }
};
OpalLoadedList.defaultDataListItemSchema = defaultDataListItemSchema;
__decorate([
    rionite_1.Param({
        type: eval,
        default: defaultDataListItemSchema,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalLoadedList.prototype, "dataListItemSchema", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalLoadedList.prototype, "dataProvider", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalLoadedList.prototype, "limit", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalLoadedList.prototype, "query", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalLoadedList.prototype, "preloading", void 0);
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalLoadedList.prototype, "dataList", void 0);
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalLoadedList.prototype, "total", void 0);
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalLoadedList.prototype, "_loadingCheckPlanned", void 0);
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalLoadedList.prototype, "loading", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], OpalLoadedList.prototype, "empty", null);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], OpalLoadedList.prototype, "loaderShown", null);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], OpalLoadedList.prototype, "nothingFoundShown", null);
OpalLoadedList = OpalLoadedList_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalLoadedList',
        template: template_rnt_1.default
    })
], OpalLoadedList);
exports.OpalLoadedList = OpalLoadedList;


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

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalLoadedList{position:relative;display:block;overflow-x:hidden;overflow-y:auto;height:500px}.OpalLoadedList .OpalLoadedList__listItem{display:block}.OpalLoadedList .OpalLoadedList__loader[align_center]{position:absolute;top:0;right:0;bottom:0;left:0}.OpalLoadedList .OpalLoadedList__nothingFoundSlot{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;height:100%;text-align:center;white-space:nowrap}.OpalLoadedList .OpalLoadedList__nothingFoundSlot::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.OpalLoadedList .OpalLoadedList__nothingFound{display:inline-block;vertical-align:middle;white-space:normal}.OpalLoadedList .OpalLoadedList__nothingFoundMessage{white-space:nowrap;opacity:.6}.OpalLoadedList .OpalLoadedList__nothingFoundMessage+.OpalSelect__btnAddNewItem{margin-top:18px}.OpalSelect .OpalLoadedList .OpalSelect__btnAddNewItem{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div:list {\nRnSlot:listItemSlot (\n@for=$item in dataList,\nfor=listItem,\ncloneContent,\ngetContext={_getListItemContext}\n) {\nspan:listItem {\n'{$item |key(_dataListItemTextFieldName) }'\n}\n}\n}\nOpalLoader:loader (shown={loaderShown}, alignCenter={empty})\nRnSlot:nothingFoundSlot (\n@if=nothingFoundShown,\nfor=nothingFound,\ngetContext={_getListItemContext}\n) {\nspan:nothingFound {\nspan:nothingFoundMessage {\n'{\"Ничего не найдено\" |t }'\n}\n}\n}");

/***/ })
/******/ ]);
});