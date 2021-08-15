(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-loader"), require("cellx"), require("cellx-collections"), require("rionite"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-loader", "cellx", "cellx-collections", "rionite", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-loaded-list"] = factory(require("@riim/opal-loader"), require("cellx"), require("cellx-collections"), require("rionite"), require("cellx-decorators"));
	else
		root["@riim/opal-loaded-list"] = factory(root["@riim/opal-loader"], root["cellx"], root["cellx-collections"], root["rionite"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_BLMt__, __WEBPACK_EXTERNAL_MODULE_P7z7__, __WEBPACK_EXTERNAL_MODULE_oHAe__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "s8ac");
/******/ })
/************************************************************************/
/******/ ({

/***/ "9X+W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,["list"],,,"div",,[[1,["listItemSlot"],,,"RnSlot",[,[[1,"for","$item in dataList"],[,"for","listItem"],[,"cloneContent",""],[,"getContext","{_getListItemContext}"]]],[[1,["listItem"],,,"span",,[[3,"{$item |key(_dataListItemTextFieldName) }"]]]]]]],[1,["loader"],,,"OpalLoader",[,[[,"shown","{loaderShown}"],[,"inCenter","{dataList.length |not }"]]],],[1,["nothingFoundSlot"],,,"RnSlot",[,[[1,"if","nothingFoundShown"],[,"for","nothingFound"]]],[[1,["nothingFoundMessage"],,,"div",,[[3,"{\"Ничего не найдено\" |t }"]]]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "BLMt":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_BLMt__;

/***/ }),

/***/ "Ee58":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalLoadedList{position:relative;display:block;overflow-x:hidden;overflow-y:auto;max-height:460px}.OpalLoadedList .OpalLoadedList__listItem{display:block}.OpalLoadedList .OpalLoadedList__loader[in_center]{border-top-width:70px;border-bottom-width:70px}.OpalLoadedList .OpalLoadedList__nothingFoundSlot{display:block;padding:28px;text-align:center}.OpalLoadedList .OpalLoadedList__nothingFoundMessage{white-space:nowrap;opacity:.6}.OpalLoadedList .OpalLoadedList__nothingFoundMessage+.OpalSelect__btnAddItem{margin-top:18px}.OpalSelect .OpalLoadedList .OpalSelect__btnAddItem{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "P7z7":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_P7z7__;

/***/ }),

/***/ "jpRZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalLoadedList_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalLoadedList = void 0;
const cellx_1 = __webpack_require__("P7z7");
const cellx_collections_1 = __webpack_require__("oHAe");
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("Ee58");
const template_rnt_1 = __webpack_require__("9X+W");
let defaultDataListItemSchema = Object.freeze({
    value: 'id',
    text: 'name'
});
let OpalLoadedList = OpalLoadedList_1 = class OpalLoadedList extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.dataList = new cellx_collections_1.ObservableList();
        this._scrollingInProcessing = false;
        this._loadingCheckPlanned = false;
        this.loading = false;
        this._lastRequestedQuery = null;
        this._lastLoadedQuery = null;
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
    }
    connected() {
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
        let getItemsLength = this.dataProvider.getItems.length;
        let query = (this._lastRequestedQuery = this.query);
        let args = getItemsLength ? [query] : [];
        if (getItemsLength >= 2) {
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
            this.total =
                getItemsLength >= 2 && data.total !== undefined ? data.total : items.length;
            if (query === this._lastLoadedQuery) {
                this.dataList.addRange(items);
            }
            else {
                this.dataList.clear().addRange(items);
                this._lastLoadedQuery = query;
            }
            cellx_1.Cell.release();
            this.emit(OpalLoadedList_1.EVENT_LOADED);
            this.checkLoading();
        })));
    }
    clear() {
        this.dataList.clear();
        this.total = undefined;
        this._lastLoadedQuery = null;
        this.dataProvider.reset();
    }
    _getListItemContext(context, slot) {
        return {
            __proto__: context,
            $item: slot.$context.$item
        };
    }
};
OpalLoadedList.EVENT_LOADED = Symbol('loaded');
OpalLoadedList.defaultDataListItemSchema = defaultDataListItemSchema;
__decorate([
    rionite_1.Param({ type: eval, default: defaultDataListItemSchema, readonly: true })
], OpalLoadedList.prototype, "dataListItemSchema", void 0);
__decorate([
    rionite_1.Param({ required: true, readonly: true })
], OpalLoadedList.prototype, "dataProvider", void 0);
__decorate([
    rionite_1.Param({ default: 100 })
], OpalLoadedList.prototype, "limit", void 0);
__decorate([
    rionite_1.Param(String)
], OpalLoadedList.prototype, "query", void 0);
__decorate([
    rionite_1.Param({ type: Boolean, readonly: true })
], OpalLoadedList.prototype, "preloading", void 0);
__decorate([
    cellx_decorators_1.Observable
], OpalLoadedList.prototype, "dataList", void 0);
__decorate([
    cellx_decorators_1.Observable
], OpalLoadedList.prototype, "total", void 0);
__decorate([
    cellx_decorators_1.Observable
], OpalLoadedList.prototype, "_loadingCheckPlanned", void 0);
__decorate([
    cellx_decorators_1.Observable
], OpalLoadedList.prototype, "loading", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalLoadedList.prototype, "loaderShown", null);
__decorate([
    cellx_decorators_1.Computed
], OpalLoadedList.prototype, "nothingFoundShown", null);
__decorate([
    rionite_1.Listen('change:query')
], OpalLoadedList.prototype, "_onQueryChange", null);
__decorate([
    rionite_1.Listen('scroll', '@element')
], OpalLoadedList.prototype, "_onElementScroll", null);
OpalLoadedList = OpalLoadedList_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalLoadedList',
        template: template_rnt_1.default
    })
], OpalLoadedList);
exports.OpalLoadedList = OpalLoadedList;


/***/ }),

/***/ "oHAe":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_oHAe__;

/***/ }),

/***/ "s8ac":
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
__webpack_require__("BLMt");
__exportStar(__webpack_require__("jpRZ"), exports);


/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ })

/******/ });
});