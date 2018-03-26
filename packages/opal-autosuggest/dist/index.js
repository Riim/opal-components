(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"), require("cellx"), require("@riim/next-tick"), require("@riim/opal-icon"), require("@riim/gettext"), require("@riim/opal-text-input"), require("@riim/opal-utils"), require("@riim/opal-dropdown"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "cellx-decorators", "cellx", "@riim/next-tick", "@riim/opal-icon", "@riim/gettext", "@riim/opal-text-input", "@riim/opal-utils", "@riim/opal-dropdown"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-autosuggest"] = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"), require("cellx"), require("@riim/next-tick"), require("@riim/opal-icon"), require("@riim/gettext"), require("@riim/opal-text-input"), require("@riim/opal-utils"), require("@riim/opal-dropdown"));
	else
		root["@riim/opal-autosuggest"] = factory(root["rionite"], root["reflect-metadata"], root["cellx-decorators"], root["cellx"], root["@riim/next-tick"], root["@riim/opal-icon"], root["@riim/gettext"], root["@riim/opal-text-input"], root["@riim/opal-utils"], root["@riim/opal-dropdown"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_14__) {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(14);
__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(1);
__export(__webpack_require__(28));


/***/ }),
/* 28 */
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
var next_tick_1 = __webpack_require__(4);
var opal_utils_1 = __webpack_require__(9);
var cellx_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
__webpack_require__(29);
var template_nelm_1 = __webpack_require__(30);
function toComparable(str) {
    return str.replace(/\s+/g, ' ').toLowerCase();
}
var defaultDataListItemSchema = Object.freeze({ value: 'id', text: 'name', subtext: 'parent' });
var OpalAutosuggest = /** @class */ (function (_super) {
    __extends(OpalAutosuggest, _super);
    function OpalAutosuggest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramMinQueryLength = 3;
        _this.paramCount = 5;
        _this.paramOpenMenuOnNothingFound = false;
        _this.dataList = new cellx_1.ObservableList();
        _this._isNotInputConfirmed = false;
        _this._isLoadingPlanned = false;
        _this.loading = false;
        return _this;
    }
    OpalAutosuggest_1 = OpalAutosuggest;
    Object.defineProperty(OpalAutosuggest.prototype, "isLoaderShown", {
        get: function () {
            return this._isLoadingPlanned || this.loading;
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
            'change:isLoaderShown': this._onIsLoaderShownChange
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
    OpalAutosuggest.prototype._onIsLoaderShownChange = function (evt) {
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
        this._isNotInputConfirmed = true;
        this._clearDataList();
        if ((evt.target.value || '').length >= this.paramMinQueryLength) {
            this._isLoadingPlanned = true;
            this._loadingTimeout = this.setTimeout(function () {
                _this._isLoadingPlanned = false;
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
        for (; !el.classList.contains('OpalAutosuggest__listLtem'); el = el.parentNode) {
            if (el == menu) {
                return;
            }
        }
        var focusedListItem = this._focusedListItem;
        if (el != focusedListItem) {
            this._focusedListItem = el;
            focusedListItem.removeAttribute('focused');
            el.setAttribute('focused', '');
        }
    };
    OpalAutosuggest.prototype._onDocumentFocus = function (evt) {
        if (!opal_utils_1.isFocusable(evt.target)) {
            return;
        }
        if (!this.element.contains(evt.target.parentNode)) {
            this.closeMenu();
            this._selectItem();
        }
    };
    OpalAutosuggest.prototype._onDocumentKeyDown = function (evt) {
        switch (evt.which) {
            case 38 /* Up */:
            case 40 /* Bottom */: {
                var focusedListItem = this._focusedListItem;
                if (focusedListItem) {
                    evt.preventDefault();
                    var listItems = this.$$('listItem');
                    var index = listItems.indexOf(focusedListItem);
                    if (evt.which == 38 ? index > 0 : index < listItems.length - 1) {
                        var newFocusedListItem = listItems[index + (evt.which == 38 ? -1 : 1)];
                        this._focusedListItem = newFocusedListItem;
                        focusedListItem.removeAttribute('focused');
                        newFocusedListItem.setAttribute('focused', '');
                    }
                }
                break;
            }
            case 13 /* Enter */:
            case 39 /* Right */: {
                var focusedListItem = this._focusedListItem;
                if (focusedListItem) {
                    evt.preventDefault();
                    var focusedListItemDataSet = focusedListItem.dataset;
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
        var _a;
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
            // в RtRepeat оказывается после _onDataListChange (RtRepeat рендерится после
            // elementAttached). При первом открытии меню всё хорошо, тк. появившийся RtRepeat
            // показывает свои items в RtRepeat#elementConnected, но при втором открытии возможно
            // следующее: срабатывает _onDataListChange в котором открывается меню,
            // для меню считается выравнивание, но RtRepeat ещё не обновился тк. обработчик
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
        if (this._isLoadingPlanned) {
            this._isLoadingPlanned = false;
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
            if (this._isNotInputConfirmed) {
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
                this._isNotInputConfirmed = false;
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
    OpalAutosuggest.prototype.clear = function () {
        this._clearDataList();
        if (this.value) {
            this.value = null;
        }
        this.$('textInput').clear();
    };
    OpalAutosuggest.prototype._clearDataList = function () {
        this._cancelLoading();
        this.closeMenu();
        this.dataList.clear();
        this._focusedListItem = null;
    };
    OpalAutosuggest.defaultDataListItemSchema = defaultDataListItemSchema;
    __decorate([
        rionite_1.Param({ type: eval, default: defaultDataListItemSchema, readonly: true }),
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
    ], OpalAutosuggest.prototype, "_isLoadingPlanned", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalAutosuggest.prototype, "loading", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalAutosuggest.prototype, "isLoaderShown", null);
    OpalAutosuggest = OpalAutosuggest_1 = __decorate([
        rionite_1.Component({
            i18n: {
                textInputPlaceholder: gettext_1.getText.t('Начните вводить для поиска'),
                nothingFound: gettext_1.getText.t('Ничего не найдено')
            },
            template: template_nelm_1.default,
            domEvents: {
                listItem: {
                    click: function (evt, listItem) {
                        var textInput = this.$('textInput');
                        var listItemDataSet = listItem.dataset;
                        textInput.value = listItemDataSet.text;
                        textInput.focus();
                        this._clearDataList();
                        this._selectItem((_a = {},
                            _a[this._dataListItemValueFieldName] = listItemDataSet.value,
                            _a[this._dataListItemTextFieldName] = listItemDataSet.text,
                            _a[this._dataListItemSubtextFieldName] = listItemDataSet.subtext,
                            _a));
                        var _a;
                    }
                }
            }
        })
    ], OpalAutosuggest);
    return OpalAutosuggest;
    var OpalAutosuggest_1;
}(rionite_1.BaseComponent));
exports.OpalAutosuggest = OpalAutosuggest;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalAutosuggest{position:relative;display:inline-block;vertical-align:middle}.OpalAutosuggest .OpalAutosuggest__textInput{display:block}.OpalAutosuggest .OpalAutosuggest__listItem{position:relative;overflow:hidden;padding:7px 22px;background:#fff;color:#000;text-align:left;-o-text-overflow:ellipsis;text-overflow:ellipsis;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalAutosuggest .OpalAutosuggest__listItem:hover,.OpalAutosuggest .OpalAutosuggest__listItem[focused]{background:#e6e6e6}.OpalAutosuggest .OpalAutosuggest__listItem:active{background:#ccc}.OpalAutosuggest .OpalAutosuggest__listItem sub{bottom:0;display:block;font-size:.9em;line-height:1.5;opacity:.5}.OpalAutosuggest .OpalAutosuggest__nothingFoundSlot{display:block;padding:12px;text-align:center}.OpalAutosuggest .OpalAutosuggest__nothingFoundMessage{white-space:nowrap;opacity:.6}.OpalTextInputValidator .OpalAutosuggest{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot (for=textInput) {\nOpalTextInput/textInput (\nvalue='{paramValue |key(_dataListItemTextFieldName) }',\nplaceholder={constructor.i18n.textInputPlaceholder},\nclearable\n) {\nOpalIcon/textInputEndIcon (class=OpalTextInput__endIcon, name=search)\n}\n}\nOpalDropdown/menu {\ndiv/list {\n@Repeat (for=item of dataList) {\ndiv/listItem (\ndata-value='{item |key(_dataListItemValueFieldName) }',\ndata-text='{item |key(_dataListItemTextFieldName) }'\n) {\n'{item |key(_dataListItemTextFieldName) }'\nsub {\n'{item |key(_dataListItemSubtextFieldName) }'\n}\n}\n}\n}\n@IfElse (if=dataList.length) {\nRtSlot/nothingFoundSlot (for=nothingFound) {\nspan/nothingFound {\nspan/nothingFoundMessage {\n'{constructor.i18n.nothingFound}'\n}\n}\n}\n}\n}\n}");

/***/ })
/******/ ]);
});