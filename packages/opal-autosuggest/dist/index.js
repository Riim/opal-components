(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-dropdown"), require("@riim/opal-icon"), require("@riim/opal-text-input"), require("reflect-metadata"), require("@riim/next-tick"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-dropdown", "@riim/opal-icon", "@riim/opal-text-input", "reflect-metadata", "@riim/next-tick", "cellx", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-autosuggest"] = factory(require("@riim/opal-dropdown"), require("@riim/opal-icon"), require("@riim/opal-text-input"), require("reflect-metadata"), require("@riim/next-tick"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-autosuggest"] = factory(root["@riim/opal-dropdown"], root["@riim/opal-icon"], root["@riim/opal-text-input"], root["reflect-metadata"], root["@riim/next-tick"], root["cellx"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__) {
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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OpalAutosuggest_1;
Object.defineProperty(exports, "__esModule", { value: true });
const next_tick_1 = __webpack_require__(6);
const cellx_1 = __webpack_require__(7);
const cellx_decorators_1 = __webpack_require__(8);
const rionite_1 = __webpack_require__(9);
__webpack_require__(10);
const template_rnt_1 = __webpack_require__(11);
function toComparable(str) {
    return str.replace(/\s+/g, ' ').toLowerCase();
}
const defaultDataListItemSchema = Object.freeze({
    value: 'id',
    text: 'name',
    subtext: 'parent'
});
let OpalAutosuggest = OpalAutosuggest_1 = class OpalAutosuggest extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.minQueryLength = 3;
        this.limit = 5;
        this.openMenuOnNothingFound = false;
        this.dataList = new cellx_1.ObservableList();
        this._inputNotConfirmed = false;
        this._loadingPlanned = false;
        this.loading = false;
    }
    get loaderShown() {
        return this._loadingPlanned || this.loading;
    }
    initialize() {
        let dataListItemSchema = this.dataListItemSchema;
        let defaultDataListItemSchema = this.constructor
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
    }
    elementAttached() {
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
        this.listenTo('menu', 'change:opened', this._onMenuOpenedChange);
        this.listenTo(this.$('menu').element, 'mouseover', this._onMenuElementMouseOver);
    }
    ready() {
        if (this.value) {
            this.$('textInput').value = this.value[this._dataListItemTextFieldName];
        }
    }
    _onParamValueChange(evt) {
        let item = evt.data.value;
        this._clearDataList();
        this.value = item;
        this.$('textInput').value = item
            ? item[this._dataListItemTextFieldName]
            : '';
    }
    _onLoaderShownChange(evt) {
        this.$('textInput').loading = evt.data.value;
    }
    _onDataListChange() {
        // Смотри _itemsRequestCallback
        next_tick_1.nextTick(() => {
            this.openMenu();
        });
    }
    _onTextInputFocus() {
        this.openMenu();
    }
    _onTextInputBlur() {
        this._cancelLoading();
        // Нужно для следующего случая:
        // 1. выбираем что-то;
        // 2. изменяем запрос так чтобы ничего не нашлось;
        // 3. убираем фокус.
        if (!this.$('menu').opened) {
            this._selectItem();
        }
    }
    _onTextInputInput(evt) {
        this._inputNotConfirmed = true;
        this._clearDataList();
        if ((evt.target.value || '').length >= this.minQueryLength) {
            this._loadingPlanned = true;
            this._loadingTimeout = this.setTimeout(() => {
                this._loadingPlanned = false;
                this._load();
            }, 300);
        }
    }
    _onTextInputChange(evt) {
        if (!evt.target.value) {
            this._clearDataList();
            if (this.value) {
                this.value = null;
                this.emit('change');
            }
        }
    }
    _onTextFieldClick() {
        this.openMenu();
    }
    _onMenuOpenedChange(evt) {
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
    }
    _onMenuElementMouseOver(evt) {
        let menu = this.$('menu').element;
        let el = evt.target;
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
        let focusedOption = this._focusedOption;
        if (!focusedOption || el != focusedOption) {
            this._focusedOption = el;
            if (focusedOption) {
                focusedOption.removeAttribute('focused');
            }
            el.setAttribute('focused', '');
        }
    }
    _onDocumentFocus(evt) {
        if (!this.element.contains(evt.target.parentElement)) {
            this.closeMenu();
            this._selectItem();
        }
    }
    _onDocumentKeyDown(evt) {
        switch (evt.which) {
            case 38 /* Up */:
            case 40 /* Bottom */: {
                evt.preventDefault();
                let focusedOption = this._focusedOption;
                let options = this.$$('option');
                if (focusedOption) {
                    let index = options.indexOf(focusedOption);
                    if (evt.which == 38 ? index > 0 : index < options.length - 1) {
                        let newFocusedOption = options[index + (evt.which == 38 ? -1 : 1)];
                        this._focusedOption = newFocusedOption;
                        focusedOption.removeAttribute('focused');
                        newFocusedOption.setAttribute('focused', '');
                    }
                    else if (evt.which == 40) {
                        let menuFooterSlot = this.$('menuFooterSlot');
                        if (menuFooterSlot) {
                            let tabbableComponentEl = menuFooterSlot.element.querySelector('[tab_index]');
                            if (tabbableComponentEl && tabbableComponentEl.$component) {
                                if (focusedOption) {
                                    this._focusedOption = null;
                                    focusedOption.removeAttribute('focused');
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
                        let menuFooterSlot = this.$('menuFooterSlot');
                        if (menuFooterSlot) {
                            let tabbableComponentEl = menuFooterSlot.element.querySelector('[tab_index]');
                            if (tabbableComponentEl && tabbableComponentEl.$component) {
                                if (!options.length) {
                                    tabbableComponentEl.$component.focus();
                                    document.body.classList.remove('_noFocusHighlight');
                                    break;
                                }
                                else if (tabbableComponentEl.$component.focused) {
                                    document.body.classList.remove('_noFocusHighlight');
                                    break;
                                }
                            }
                        }
                    }
                    if (options.length) {
                        let newFocusedOption = options[evt.which == 38 ? options.length - 1 : 0];
                        this._focusedOption = newFocusedOption;
                        newFocusedOption.setAttribute('focused', '');
                    }
                }
                this.$('textInput').focus();
                break;
            }
            case 13 /* Enter */:
            case 39 /* Right */: {
                if (this._focusedOption &&
                    (document.activeElement == this.$('textInput').textField ||
                        document.activeElement == document.body)) {
                    evt.preventDefault();
                    let focusedOptionDataSet = this._focusedOption.dataset;
                    this.$('textInput').value = focusedOptionDataSet.text;
                    this._clearDataList();
                    this._selectItem({
                        [this._dataListItemValueFieldName]: focusedOptionDataSet.value,
                        [this._dataListItemTextFieldName]: focusedOptionDataSet.text,
                        [this._dataListItemSubtextFieldName]: focusedOptionDataSet.subtext
                    });
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
    }
    _onDocumentClick(evt) {
        if (!this.element.contains(evt.target)) {
            this.closeMenu();
            this._selectItem();
        }
    }
    _load() {
        this.loading = true;
        let args = [this.$('textInput').value];
        if (this.dataProvider.getItems.length >= 2) {
            args.unshift(this.limit);
        }
        this.dataProvider.getItems
            .apply(this.dataProvider, args)
            .then((this._requestCallback = this.registerCallback(this._itemsRequestCallback)));
    }
    _itemsRequestCallback(data) {
        this.loading = false;
        let items = data.items;
        if (items.length) {
            this.dataList.addRange(items);
            // Cell.release();
            // Содержимое OpalDropdown рендерится лениво, из-за этого обработчик изменения dataList
            // в RnRepeat оказывается после _onDataListChange. При первом открытии меню всё хорошо,
            // тк. RnRepeat#_render запускается в RnRepeat#elementConnected: OpalDropdown#_open() ->
            // this.contentRendered = true; -> RnRepeat#elementConnected -> RnRepeat#_render ->
            // OpalDropdown#_open$(). То есть при запуске OpalDropdown#_open$ RnRepeat уже
            // отрендерился. Но при втором открытии возможно следующее: срабатывает
            // _onDataListChange в котором открывается меню, для меню считается выравнивание, но
            // RnRepeat ещё не обновился тк. обработчик изменения dataList в нём идёт сразу за
            // местным. В результате выравнивание меню получается неправильным. По этой причине в
            // _onDataListChange добавлен nextTick и как следствие здесь вместо Cell.release тоже
            // нужно использовать nextTick.
            next_tick_1.nextTick(() => {
                let focusedOption = this.$('option');
                this._focusedOption = focusedOption;
                focusedOption.setAttribute('focused', '');
            });
        }
        else if (this.openMenuOnNothingFound) {
            this.openMenu(true);
        }
    }
    _cancelLoading() {
        if (this._loadingPlanned) {
            this._loadingPlanned = false;
            this._loadingTimeout.clear();
        }
        else if (this.loading) {
            this._requestCallback.cancel();
            this.loading = false;
        }
    }
    openMenu(force) {
        if (force || this.dataList.length) {
            this.$('menu').open();
        }
        return this;
    }
    closeMenu() {
        this.$('menu').close();
        return this;
    }
    _selectItem(item) {
        if (item === undefined) {
            if (this._inputNotConfirmed) {
                let query = this.$('textInput').value;
                if (query) {
                    query = toComparable(query);
                    item = this.dataList.find(item => toComparable(item[this._dataListItemTextFieldName]) == query);
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
    }
    clear(textInputValue) {
        this._clearDataList();
        if (this.value) {
            this.value = null;
        }
        this.$('textInput').value = textInputValue || null;
        return this;
    }
    _clearDataList() {
        this._cancelLoading();
        this.closeMenu();
        this.dataList.clear();
        this._focusedOption = null;
    }
};
OpalAutosuggest.defaultDataListItemSchema = defaultDataListItemSchema;
__decorate([
    rionite_1.Param({
        type: eval,
        default: defaultDataListItemSchema,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalAutosuggest.prototype, "dataListItemSchema", void 0);
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
], OpalAutosuggest.prototype, "minQueryLength", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalAutosuggest.prototype, "limit", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalAutosuggest.prototype, "openMenuOnNothingFound", void 0);
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
        template: template_rnt_1.default,
        domEvents: {
            option: {
                click(_evt, context) {
                    let textInput = this.$('textInput');
                    let item = context.item;
                    textInput.value = item[this._dataListItemTextFieldName];
                    textInput.focus();
                    this._clearDataList();
                    this._selectItem({
                        [this._dataListItemValueFieldName]: item[this._dataListItemValueFieldName],
                        [this._dataListItemTextFieldName]: item[this._dataListItemTextFieldName],
                        [this._dataListItemSubtextFieldName]: item[this._dataListItemSubtextFieldName]
                    });
                }
            }
        }
    })
], OpalAutosuggest);
exports.OpalAutosuggest = OpalAutosuggest;


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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalAutosuggest{position:relative;display:inline-block;vertical-align:middle}.OpalAutosuggest .OpalAutosuggest__textInput{display:block}.OpalAutosuggest .OpalAutosuggest__option{position:relative;overflow:hidden;padding:7px 22px;background:#fff;color:#000;text-align:left;-o-text-overflow:ellipsis;text-overflow:ellipsis;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalAutosuggest .OpalAutosuggest__option:hover,.OpalAutosuggest .OpalAutosuggest__option[focused]{background:#e6e6e6}.OpalAutosuggest .OpalAutosuggest__option:active{background:#ccc}.OpalAutosuggest .OpalAutosuggest__option sub{bottom:0;display:block;font-size:.9em;line-height:1.5;opacity:.5}.OpalAutosuggest .OpalAutosuggest__nothingFoundSlot{display:block;padding:12px;text-align:center}.OpalAutosuggest .OpalAutosuggest__nothingFoundMessage{white-space:nowrap;opacity:.6}.OpalAutosuggest .OpalAutosuggest__menuFooter{display:block;margin:12px 22px}.OpalTextInputValidator .OpalAutosuggest{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("RnSlot (for=textInput) {\nOpalTextInput:textInput (\nvalue='{paramValue |key(_dataListItemTextFieldName) }',\nplaceholder={'Начните вводить для поиска' |t },\nclearable\n) {\nOpalIcon:textInputEndIcon (class=OpalTextInput__endIcon, name=search)\n}\n}\nOpalDropdown:menu {\nRnSlot (for=menuHeader)\ndiv:optionList {\ndiv:option (\n@for=item in dataList,\ndata-value='{item |key(_dataListItemValueFieldName) }',\ndata-text='{item |key(_dataListItemTextFieldName) }',\ndata-subtext='{item |key(_dataListItemSubtextFieldName) }'\n) {\n'{item |key(_dataListItemTextFieldName) }'\nsub {\n'{item |key(_dataListItemSubtextFieldName) }'\n}\n}\n}\nRnSlot:nothingFoundSlot (@unless=dataList.length, for=nothingFound) {\nspan:nothingFound {\nspan:nothingFoundMessage {\n'{\"Ничего не найдено\" |t }'\n}\n}\n}\nRnSlot:menuFooterSlot (for=menuFooter)\n}");

/***/ })
/******/ ]);
});