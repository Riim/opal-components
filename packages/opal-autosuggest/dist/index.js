(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-dropdown"), require("@riim/opal-icon"), require("@riim/opal-text-input"), require("reflect-metadata"), require("@riim/next-tick"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-dropdown", "@riim/opal-icon", "@riim/opal-text-input", "reflect-metadata", "@riim/next-tick", "cellx", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/packages/opal-autosuggest/src/index.ts"] = factory(require("@riim/opal-dropdown"), require("@riim/opal-icon"), require("@riim/opal-text-input"), require("reflect-metadata"), require("@riim/next-tick"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/packages/opal-autosuggest/src/index.ts"] = factory(root["@riim/opal-dropdown"], root["@riim/opal-icon"], root["@riim/opal-text-input"], root["reflect-metadata"], root["@riim/next-tick"], root["cellx"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__) {
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
__webpack_require__(3);
__webpack_require__(4);
__export(__webpack_require__(5));


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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
var next_tick_1 = __webpack_require__(6);
var cellx_1 = __webpack_require__(8);
var cellx_decorators_1 = __webpack_require__(9);
var rionite_1 = __webpack_require__(10);
__webpack_require__(11);
var template = __webpack_require__(12);
function toComparable(str) {
    return str.replace(/\s+/g, ' ').toLowerCase();
}
var defaultDataListItemSchema = Object.freeze({
    value: 'id',
    text: 'name',
    subtext: 'parent'
});
var OpalAutosuggest = /** @class */ (function (_super) {
    __extends(OpalAutosuggest, _super);
    function OpalAutosuggest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramMinQueryLength = 3;
        _this.paramCount = 5;
        _this.paramOpenMenuOnNothingFound = false;
        _this.dataList = new cellx_1.ObservableList();
        _this._inputNotConfirmed = false;
        _this._loadingPlanned = false;
        _this.loading = false;
        return _this;
    }
    OpalAutosuggest_1 = OpalAutosuggest;
    Object.defineProperty(OpalAutosuggest.prototype, "loaderShown", {
        get: function () {
            return this._loadingPlanned || this.loading;
        },
        enumerable: true,
        configurable: true
    });
    OpalAutosuggest.prototype.initialize = function () {
        var dataListItemSchema = this.paramDataListItemSchema;
        var defaultDataListItemSchema = this.constructor
            .defaultDataListItemSchema;
        this._dataListItemValueFieldName =
            dataListItemSchema.value || defaultDataListItemSchema.value;
        this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
        this._dataListItemSubtextFieldName =
            dataListItemSchema.subtext || defaultDataListItemSchema.subtext;
        if (!this.$specifiedParams || !this.$specifiedParams.has('dataProvider')) {
            throw new TypeError('Parameter "dataProvider" is required');
        }
        this.dataProvider = this.paramDataProvider;
        if (!this.dataProvider) {
            throw new TypeError('"dataProvider" is not defined');
        }
        this.value = this.paramValue;
    };
    OpalAutosuggest.prototype.elementAttached = function () {
        this.listenTo(this, {
            'change:paramValue': this._onParamValueChange,
            'change:loaderShown': this._onLoaderShownChange
        });
        this.listenTo(this.dataList, 'change', this._onDataListChange);
        this.listenTo('textInput', {
            focus: this._onTextInputFocus,
            blur: this._onTextInputBlur,
            input: this._onTextInputInput,
            change: this._onTextInputChange
        });
        this.listenTo(this.$('textInput').textField, 'click', this._onTextFieldClick);
        this.listenTo('menu', 'change:paramOpened', this._onMenuParamOpenedChange);
        this.listenTo(this.$('menu').element, 'mouseover', this._onMenuElementMouseOver);
    };
    OpalAutosuggest.prototype.ready = function () {
        if (this.value) {
            this.$('textInput').value = this.value[this._dataListItemTextFieldName];
        }
    };
    OpalAutosuggest.prototype._onParamValueChange = function (evt) {
        var item = evt.data.value;
        this._clearDataList();
        this.value = item;
        this.$('textInput').value = item
            ? item[this._dataListItemTextFieldName]
            : '';
    };
    OpalAutosuggest.prototype._onLoaderShownChange = function (evt) {
        this.$('textInput').paramLoading = evt.data.value;
    };
    OpalAutosuggest.prototype._onDataListChange = function () {
        var _this = this;
        // Смотри _itemsRequestCallback
        next_tick_1.nextTick(function () {
            _this.openMenu();
        });
    };
    OpalAutosuggest.prototype._onTextInputFocus = function () {
        this.openMenu();
    };
    OpalAutosuggest.prototype._onTextInputBlur = function () {
        this._cancelLoading();
        // Нужно для следующего случая:
        // 1. выбираем что-то;
        // 2. изменяем запрос так чтобы ничего не нашлось;
        // 3. убираем фокус.
        if (!this.$('menu').paramOpened) {
            this._selectItem();
        }
    };
    OpalAutosuggest.prototype._onTextInputInput = function (evt) {
        var _this = this;
        this._inputNotConfirmed = true;
        this._clearDataList();
        if ((evt.target.value || '').length >= this.paramMinQueryLength) {
            this._loadingPlanned = true;
            this._loadingTimeout = this.setTimeout(function () {
                _this._loadingPlanned = false;
                _this._load();
            }, 300);
        }
    };
    OpalAutosuggest.prototype._onTextInputChange = function (evt) {
        if (!evt.target.value) {
            this._clearDataList();
            if (this.value) {
                this.value = null;
                this.emit('change');
            }
        }
    };
    OpalAutosuggest.prototype._onTextFieldClick = function () {
        this.openMenu();
    };
    OpalAutosuggest.prototype._onMenuParamOpenedChange = function (evt) {
        if (evt.data.value) {
            this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
            this._documentListening = this.listenTo(document, {
                keydown: this._onDocumentKeyDown,
                click: this._onDocumentClick
            });
        }
        else {
            this._documentFocusListening.stop();
            this._documentListening.stop();
        }
    };
    OpalAutosuggest.prototype._onMenuElementMouseOver = function (evt) {
        var menu = this.$('menu').element;
        var el = evt.target;
        for (;;) {
            if (el == menu) {
                return;
            }
            if (el.classList.contains('OpalAutosuggest__listLtem')) {
                break;
            }
            el = el.parentElement;
            if (!el) {
                return;
            }
        }
        var focusedListItem = this._focusedListItem;
        if (!focusedListItem || el != focusedListItem) {
            this._focusedListItem = el;
            if (focusedListItem) {
                focusedListItem.removeAttribute('focused');
            }
            el.setAttribute('focused', '');
        }
    };
    OpalAutosuggest.prototype._onDocumentFocus = function (evt) {
        if (!this.element.contains(evt.target.parentElement)) {
            this.closeMenu();
            this._selectItem();
        }
    };
    OpalAutosuggest.prototype._onDocumentKeyDown = function (evt) {
        var _a;
        switch (evt.which) {
            case 38 /* Up */:
            case 40 /* Bottom */: {
                evt.preventDefault();
                var focusedListItem = this._focusedListItem;
                var listItems = this.$$('listItem');
                if (focusedListItem) {
                    var index = listItems.indexOf(focusedListItem);
                    if (evt.which == 38 ? index > 0 : index < listItems.length - 1) {
                        var newFocusedListItem = listItems[index + (evt.which == 38 ? -1 : 1)];
                        this._focusedListItem = newFocusedListItem;
                        focusedListItem.removeAttribute('focused');
                        newFocusedListItem.setAttribute('focused', '');
                    }
                    else if (evt.which == 40) {
                        var menuFooterSlot = this.$('menuFooterSlot');
                        if (menuFooterSlot) {
                            var tabbableComponentEl = menuFooterSlot.element.querySelector('[tab_index]');
                            if (tabbableComponentEl && tabbableComponentEl.$component) {
                                if (focusedListItem) {
                                    this._focusedListItem = null;
                                    focusedListItem.removeAttribute('focused');
                                }
                                tabbableComponentEl.$component.focus();
                                document.body.classList.remove('_noFocusHighlight');
                                break;
                            }
                        }
                    }
                }
                else {
                    if (evt.which == 40) {
                        var menuFooterSlot = this.$('menuFooterSlot');
                        if (menuFooterSlot) {
                            var tabbableComponentEl = menuFooterSlot.element.querySelector('[tab_index]');
                            if (tabbableComponentEl && tabbableComponentEl.$component) {
                                if (!listItems.length) {
                                    tabbableComponentEl.$component.focus();
                                    document.body.classList.remove('_noFocusHighlight');
                                    break;
                                }
                                else if (tabbableComponentEl.$component.paramFocused) {
                                    document.body.classList.remove('_noFocusHighlight');
                                    break;
                                }
                            }
                        }
                    }
                    if (listItems.length) {
                        var newFocusedListItem = listItems[evt.which == 38 ? listItems.length - 1 : 0];
                        this._focusedListItem = newFocusedListItem;
                        newFocusedListItem.setAttribute('focused', '');
                    }
                }
                this.$('textInput').focus();
                break;
            }
            case 13 /* Enter */:
            case 39 /* Right */: {
                if (this._focusedListItem &&
                    (document.activeElement == this.$('textInput').textField ||
                        document.activeElement == document.body)) {
                    evt.preventDefault();
                    var focusedListItemDataSet = this._focusedListItem.dataset;
                    this.$('textInput').value = focusedListItemDataSet.text;
                    this._clearDataList();
                    this._selectItem((_a = {},
                        _a[this._dataListItemValueFieldName] = focusedListItemDataSet.value,
                        _a[this._dataListItemTextFieldName] = focusedListItemDataSet.text,
                        _a[this._dataListItemSubtextFieldName] = focusedListItemDataSet.subtext,
                        _a));
                }
                break;
            }
            case 27 /* Esc */: {
                evt.preventDefault();
                this.closeMenu();
                this._selectItem();
                break;
            }
        }
    };
    OpalAutosuggest.prototype._onDocumentClick = function (evt) {
        if (!this.element.contains(evt.target)) {
            this.closeMenu();
            this._selectItem();
        }
    };
    OpalAutosuggest.prototype._load = function () {
        this.loading = true;
        var args = [this.$('textInput').value];
        if (this.dataProvider.getItems.length >= 2) {
            args.unshift(this.paramCount);
        }
        this.dataProvider.getItems
            .apply(this.dataProvider, args)
            .then((this._requestCallback = this.registerCallback(this._itemsRequestCallback)));
    };
    OpalAutosuggest.prototype._itemsRequestCallback = function (data) {
        var _this = this;
        this.loading = false;
        var items = data.items;
        if (items.length) {
            this.dataList.addRange(items);
            // Cell.forceRelease();
            // Содержимое OpalDropdown рендерится лениво, из-за этого обработчик изменения dataList
            // в RnRepeat оказывается после _onDataListChange (RnRepeat рендерится после
            // elementAttached). При первом открытии меню всё хорошо, тк. появившийся RnRepeat
            // показывает свои items в RnRepeat#elementConnected, но при втором открытии возможно
            // следующее: срабатывает _onDataListChange в котором открывается меню,
            // для меню считается выравнивание, но RnRepeat ещё не обновился тк. обработчик
            // изменения dataList в нём идёт сразу за текущим.
            // В результате выравнивание меню получается неправильным.
            // По этой причине вместо Cell.forceRelease здесь nextTick и nextTick добавлен в
            // _onDataListChange.
            next_tick_1.nextTick(function () {
                var focusedListItem = _this.$('listItem');
                _this._focusedListItem = focusedListItem;
                focusedListItem.setAttribute('focused', '');
            });
        }
        else if (this.paramOpenMenuOnNothingFound) {
            this.openMenu(true);
        }
    };
    OpalAutosuggest.prototype._cancelLoading = function () {
        if (this._loadingPlanned) {
            this._loadingPlanned = false;
            this._loadingTimeout.clear();
        }
        else if (this.loading) {
            this._requestCallback.cancel();
            this.loading = false;
        }
    };
    OpalAutosuggest.prototype.openMenu = function (force) {
        if (force || this.dataList.length) {
            this.$('menu').open();
        }
        return this;
    };
    OpalAutosuggest.prototype.closeMenu = function () {
        this.$('menu').close();
        return this;
    };
    OpalAutosuggest.prototype._selectItem = function (item) {
        var _this = this;
        if (item === undefined) {
            if (this._inputNotConfirmed) {
                var query_1 = this.$('textInput').value;
                if (query_1) {
                    query_1 = toComparable(query_1);
                    item = this.dataList.find(function (item) { return toComparable(item[_this._dataListItemTextFieldName]) == query_1; });
                    if (item && this.dataList.length > 1) {
                        this._clearDataList();
                    }
                }
                this._selectItem(item || null);
            }
        }
        else {
            if (item) {
                this._inputNotConfirmed = false;
                if (this.value &&
                    this.value[this._dataListItemValueFieldName] ==
                        item[this._dataListItemValueFieldName]) {
                    return;
                }
            }
            else if (!this.value) {
                return;
            }
            this.value = item;
            this.emit('change');
        }
    };
    OpalAutosuggest.prototype.clear = function (textInputValue) {
        this._clearDataList();
        if (this.value) {
            this.value = null;
        }
        this.$('textInput').value = textInputValue || null;
        return this;
    };
    OpalAutosuggest.prototype._clearDataList = function () {
        this._cancelLoading();
        this.closeMenu();
        this.dataList.clear();
        this._focusedListItem = null;
    };
    var OpalAutosuggest_1;
    OpalAutosuggest.defaultDataListItemSchema = defaultDataListItemSchema;
    __decorate([
        rionite_1.Param({
            type: eval,
            default: defaultDataListItemSchema,
            readonly: true
        }),
        __metadata("design:type", Object)
    ], OpalAutosuggest.prototype, "paramDataListItemSchema", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalAutosuggest.prototype, "paramDataProvider", void 0);
    __decorate([
        rionite_1.Param({ type: eval }),
        __metadata("design:type", Object)
    ], OpalAutosuggest.prototype, "paramValue", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalAutosuggest.prototype, "paramMinQueryLength", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalAutosuggest.prototype, "paramCount", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalAutosuggest.prototype, "paramOpenMenuOnNothingFound", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalAutosuggest.prototype, "dataList", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalAutosuggest.prototype, "value", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalAutosuggest.prototype, "_loadingPlanned", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalAutosuggest.prototype, "loading", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalAutosuggest.prototype, "loaderShown", null);
    OpalAutosuggest = OpalAutosuggest_1 = __decorate([
        rionite_1.Component({
            elementIs: 'OpalAutosuggest',
            template: template,
            domEvents: {
                listItem: {
                    click: function (_evt, context) {
                        var _a;
                        var textInput = this.$('textInput');
                        var item = context.item;
                        textInput.value = item[this._dataListItemTextFieldName];
                        textInput.focus();
                        this._clearDataList();
                        this._selectItem((_a = {},
                            _a[this._dataListItemValueFieldName] = item[this._dataListItemValueFieldName],
                            _a[this._dataListItemTextFieldName] = item[this._dataListItemTextFieldName],
                            _a[this._dataListItemSubtextFieldName] = item[this._dataListItemSubtextFieldName],
                            _a));
                    }
                }
            }
        })
    ], OpalAutosuggest);
    return OpalAutosuggest;
}(rionite_1.BaseComponent));
exports.OpalAutosuggest = OpalAutosuggest;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalAutosuggest{position:relative;display:inline-block;vertical-align:middle}.OpalAutosuggest .OpalAutosuggest__textInput{display:block}.OpalAutosuggest .OpalAutosuggest__listItem{position:relative;overflow:hidden;padding:7px 22px;background:#fff;color:#000;text-align:left;-o-text-overflow:ellipsis;text-overflow:ellipsis;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalAutosuggest .OpalAutosuggest__listItem:hover,.OpalAutosuggest .OpalAutosuggest__listItem[focused]{background:#e6e6e6}.OpalAutosuggest .OpalAutosuggest__listItem:active{background:#ccc}.OpalAutosuggest .OpalAutosuggest__listItem sub{bottom:0;display:block;font-size:.9em;line-height:1.5;opacity:.5}.OpalAutosuggest .OpalAutosuggest__nothingFoundSlot{display:block;padding:12px;text-align:center}.OpalAutosuggest .OpalAutosuggest__nothingFoundMessage{white-space:nowrap;opacity:.6}.OpalAutosuggest .OpalAutosuggest__menuFooter{display:block;margin:12px 22px}.OpalTextInputValidator .OpalAutosuggest{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "@Slot (for=textInput) {\nOpalTextInput/textInput (\nvalue='{paramValue |key(_dataListItemTextFieldName) }',\nplaceholder=Начните вводить для поиска,\nclearable\n) {\nOpalIcon/textInputEndIcon (class=OpalTextInput__endIcon, name=search)\n}\n}\nOpalDropdown/menu {\n@Slot (for=menuHeader)\ndiv/list {\n@Repeat (for=item in dataList) {\ndiv/listItem (\ndata-value='{item |key(_dataListItemValueFieldName) }',\ndata-text='{item |key(_dataListItemTextFieldName) }',\ndata-subtext='{item |key(_dataListItemSubtextFieldName) }'\n) {\n'{item |key(_dataListItemTextFieldName) }'\nsub {\n'{item |key(_dataListItemSubtextFieldName) }'\n}\n}\n}\n}\n@IfElse (dataList.length) {\n@Slot/nothingFoundSlot (for=nothingFound) {\nspan/nothingFound {\nspan/nothingFoundMessage {\n'Ничего не найдено'\n}\n}\n}\n}\n@Slot/menuFooterSlot (for=menuFooter)\n}"

/***/ })
/******/ ]);
});