(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("@riim/gettext"), require("@riim/next-tick"), require("cellx"), require("cellx-decorators"), require("rionite"), require("@riim/opal-loader"), require("@riim/mixin"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "@riim/gettext", "@riim/next-tick", "cellx", "cellx-decorators", "rionite", "@riim/opal-loader", "@riim/mixin"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-loaded-list"] = factory(require("reflect-metadata"), require("@riim/gettext"), require("@riim/next-tick"), require("cellx"), require("cellx-decorators"), require("rionite"), require("@riim/opal-loader"), require("@riim/mixin"));
	else
		root["@riim/opal-loaded-list"] = factory(root["reflect-metadata"], root["@riim/gettext"], root["@riim/next-tick"], root["cellx"], root["cellx-decorators"], root["rionite"], root["@riim/opal-loader"], root["@riim/mixin"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__140__, __WEBPACK_EXTERNAL_MODULE__142__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 139);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(140);
__webpack_require__(4);
__export(__webpack_require__(141));


/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__140__;

/***/ }),

/***/ 141:
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
var gettext_1 = __webpack_require__(6);
var mixin_1 = __webpack_require__(142);
var next_tick_1 = __webpack_require__(7);
var cellx_1 = __webpack_require__(9);
var cellx_decorators_1 = __webpack_require__(10);
var rionite_1 = __webpack_require__(11);
__webpack_require__(143);
var template_nelm_1 = __webpack_require__(144);
var defaultDataListItemSchema = Object.freeze({ value: 'id', text: 'name' });
var OpalLoadedList = /** @class */ (function (_super) {
    __extends(OpalLoadedList, _super);
    function OpalLoadedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramCount = 100;
        _this.paramPreloading = false;
        _this.dataList = new cellx_1.ObservableList();
        _this._isScrollingInProcessing = false;
        _this._isLoadingCheckPlanned = false;
        _this.loading = false;
        _this._lastRequestedQuery = null;
        _this._lastLoadedQuery = null;
        return _this;
    }
    OpalLoadedList_1 = OpalLoadedList;
    Object.defineProperty(OpalLoadedList.prototype, "empty", {
        get: function () {
            return !this.dataList.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalLoadedList.prototype, "isLoaderShown", {
        get: function () {
            return this.total === undefined || this.dataList.length < this.total || this.loading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalLoadedList.prototype, "isNothingFoundShown", {
        get: function () {
            return this.total === 0 && !this._isLoadingCheckPlanned && !this.loading;
        },
        enumerable: true,
        configurable: true
    });
    OpalLoadedList.prototype.initialize = function () {
        this._dataListItemTextFieldName =
            this.paramDataListItemSchema.text ||
                this.constructor.defaultDataListItemSchema.text;
        if (!this.$specifiedParams || !this.$specifiedParams.has('dataProvider')) {
            throw new TypeError('Parameter "dataProvider" is required');
        }
        this.dataProvider = this.paramDataProvider;
        if (!this.dataProvider) {
            throw new TypeError('"dataProvider" is not defined');
        }
    };
    OpalLoadedList.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramQuery', this._onParamQueryChange);
        this.listenTo(this.element, 'scroll', this._onElementScroll);
        if (this.paramPreloading) {
            this._load();
        }
        else {
            this.checkLoading();
        }
    };
    OpalLoadedList.prototype._onParamQueryChange = function () {
        var _this = this;
        if (this.loading) {
            this._requestCallback.cancel();
            this.loading = false;
        }
        this.dataList.clear();
        this.total = undefined;
        if (this._isLoadingCheckPlanned) {
            this._loadingCheckTimeout.clear();
        }
        else {
            this._isLoadingCheckPlanned = true;
        }
        this._loadingCheckTimeout = this.setTimeout(function () {
            _this._isScrollingInProcessing = false;
            _this._isLoadingCheckPlanned = false;
            _this.checkLoading();
        }, 300);
    };
    OpalLoadedList.prototype._onElementScroll = function () {
        var _this = this;
        if (this._isScrollingInProcessing) {
            return;
        }
        this._isScrollingInProcessing = true;
        if (this._isLoadingCheckPlanned) {
            this._loadingCheckTimeout.clear();
        }
        else {
            this._isLoadingCheckPlanned = true;
        }
        this._loadingCheckTimeout = this.setTimeout(function () {
            _this._isScrollingInProcessing = false;
            _this._isLoadingCheckPlanned = false;
            _this.checkLoading();
        }, 150);
    };
    OpalLoadedList.prototype.checkLoading = function () {
        if (this.paramQuery === this._lastRequestedQuery &&
            (this.loading || (this.total !== undefined && this.dataList.length == this.total))) {
            return;
        }
        var elRect = this.element.getBoundingClientRect();
        if (elRect.height &&
            elRect.bottom > this.$('loader').element.getBoundingClientRect().top) {
            this._load();
        }
    };
    OpalLoadedList.prototype._load = function () {
        if (this.loading) {
            this._requestCallback.cancel();
        }
        var infinite = this.dataProvider.getItems.length >= 2;
        var query = (this._lastRequestedQuery = this.paramQuery);
        var args = [query];
        if (infinite) {
            args.unshift(this.paramCount, this.dataList.length
                ? this.dataList.get(-1)[this.paramDataListItemSchema.value ||
                    this.constructor
                        .defaultDataListItemSchema.value]
                : null);
        }
        this.loading = true;
        this.dataProvider.getItems.apply(this.dataProvider, args).then((this._requestCallback = this.registerCallback(function (data) {
            var _this = this;
            this.loading = false;
            var items = data.items;
            this.total = infinite && data.total !== undefined ? data.total : items.length;
            if (query === this._lastLoadedQuery) {
                this.dataList.addRange(items);
            }
            else {
                this.dataList.clear().addRange(items);
                this._lastLoadedQuery = query;
            }
            cellx_1.Cell.forceRelease();
            this.emit('loaded');
            next_tick_1.nextTick(function () {
                _this.checkLoading();
            });
        })));
    };
    OpalLoadedList.prototype._getListItemContext = function (context, slot) {
        return mixin_1.mixin(Object.create(context), slot.$context, ['$component']);
    };
    OpalLoadedList.defaultDataListItemSchema = defaultDataListItemSchema;
    __decorate([
        rionite_1.Param({ type: eval, default: defaultDataListItemSchema, readonly: true }),
        __metadata("design:type", Object)
    ], OpalLoadedList.prototype, "paramDataListItemSchema", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalLoadedList.prototype, "paramDataProvider", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalLoadedList.prototype, "paramCount", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalLoadedList.prototype, "paramQuery", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalLoadedList.prototype, "paramPreloading", void 0);
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
    ], OpalLoadedList.prototype, "_isLoadingCheckPlanned", void 0);
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
    ], OpalLoadedList.prototype, "isLoaderShown", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalLoadedList.prototype, "isNothingFoundShown", null);
    OpalLoadedList = OpalLoadedList_1 = __decorate([
        rionite_1.Component({
            elementIs: 'OpalLoadedList',
            i18n: {
                nothingFound: gettext_1.getText.t('Ничего не найдено')
            },
            template: template_nelm_1.default
        })
    ], OpalLoadedList);
    return OpalLoadedList;
    var OpalLoadedList_1;
}(rionite_1.BaseComponent));
exports.OpalLoadedList = OpalLoadedList;


/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__142__;

/***/ }),

/***/ 143:
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

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\ndiv/list {\n@Repeat (for=$item in dataList) {\nRnSlot/listItemSlot (for=listItem, cloneContent, getContext={_getListItemContext}) {\nspan/listItem {\n'{$item |key(_dataListItemTextFieldName) }'\n}\n}\n}\n}\nOpalLoader/loader (shown={isLoaderShown}, alignCenter={empty})\n@IfThen (isNothingFoundShown) {\nRnSlot/nothingFoundSlot (for=nothingFound, getContext={_getListItemContext}) {\nspan/nothingFound {\nspan/nothingFoundMessage {\n'{constructor.i18n.nothingFound}'\n}\n}\n}\n}\n}");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ })

/******/ });
});