(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-dropdown"), require("@riim/opal-loader"), require("cellx"), require("@riim/next-tick"), require("@riim/opal-button"), require("@riim/opal-icon"), require("@riim/opal-filtered-list"), require("@riim/gettext"), require("@riim/opal-sign-button"), require("@riim/opal-text-input"), require("@riim/opal-loaded-list"), require("rionite"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-dropdown", "@riim/opal-loader", "cellx", "@riim/next-tick", "@riim/opal-button", "@riim/opal-icon", "@riim/opal-filtered-list", "@riim/gettext", "@riim/opal-sign-button", "@riim/opal-text-input", "@riim/opal-loaded-list", "rionite", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-select"] = factory(require("@riim/opal-dropdown"), require("@riim/opal-loader"), require("cellx"), require("@riim/next-tick"), require("@riim/opal-button"), require("@riim/opal-icon"), require("@riim/opal-filtered-list"), require("@riim/gettext"), require("@riim/opal-sign-button"), require("@riim/opal-text-input"), require("@riim/opal-loaded-list"), require("rionite"), require("cellx-decorators"));
	else
		root["@riim/opal-select"] = factory(root["@riim/opal-dropdown"], root["@riim/opal-loader"], root["cellx"], root["@riim/next-tick"], root["@riim/opal-button"], root["@riim/opal-icon"], root["@riim/opal-filtered-list"], root["@riim/gettext"], root["@riim/opal-sign-button"], root["@riim/opal-text-input"], root["@riim/opal-loaded-list"], root["rionite"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_A7KY__, __WEBPACK_EXTERNAL_MODULE_BLMt__, __WEBPACK_EXTERNAL_MODULE_P7z7__, __WEBPACK_EXTERNAL_MODULE_WTz___, __WEBPACK_EXTERNAL_MODULE_X6DG__, __WEBPACK_EXTERNAL_MODULE_Y0hN__, __WEBPACK_EXTERNAL_MODULE_Y1_I__, __WEBPACK_EXTERNAL_MODULE_eaeG__, __WEBPACK_EXTERNAL_MODULE_ej3F__, __WEBPACK_EXTERNAL_MODULE_hl6F__, __WEBPACK_EXTERNAL_MODULE_ioIi__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "qudD");
/******/ })
/************************************************************************/
/******/ ({

/***/ "9gpB":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSelect{position:relative;display:inline-block}.OpalSelect .OpalSelect__button{display:block;min-width:100%;text-align:left}.OpalSelect .OpalSelect__button[size=s] .OpalSelect__buttonIcon{margin-left:8px;width:12px;height:12px}.OpalSelect .OpalSelect__button[checked] .OpalSelect__buttonIcon{-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}.OpalSelect .OpalSelect__buttonIcon{position:relative;top:-1px;margin-left:10px;width:14px;height:14px;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;-o-transition:transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear}.OpalSelect:not([view_type=clean]) .OpalSelect__button{padding-right:47px}.OpalSelect:not([view_type=clean]) .OpalSelect__button[size=s]{padding-right:34px}.OpalSelect:not([view_type=clean]) .OpalSelect__button[size=s] .OpalSelect__buttonIcon{right:14px;margin-left:0}.OpalSelect:not([view_type=clean]) .OpalSelect__buttonIcon{position:absolute;top:0;right:23px;bottom:0;margin:auto}.OpalSelect .OpalSelect__itemInput{display:block;margin:6px 10px 4px;width:auto}.OpalSelect .OpalPopover.OpalSelect__menu{padding:6px 0;min-width:140px}.OpalSelect .OpalPopover.OpalSelect__menu .OpalPopover__contentSlot{overflow-x:auto;max-height:400px}.OpalSelect .OpalFilteredList .OpalFilteredList__queryInput{margin:4px 10px 6px}.OpalSelect .OpalModal__contentSlot>.OpalFilteredList .OpalFilteredList__queryInput{margin:0 0 10px}.OpalSelect .OpalLoadedList{max-height:342px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "A7KY":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_A7KY__;

/***/ }),

/***/ "BLMt":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_BLMt__;

/***/ }),

/***/ "IvWP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"RnSlot",,[,[[,"for","button"]]],[[1,,"OpalButton",["button"],[,[[,"viewType","{viewType}"],[,"size","{size}"],[,"checkable",""],[,"tabIndex","{tabIndex}"],[,"disabled","{disabled}"]]],[[1,1,"cond",,[,[[,"if","text"]]],[[3,"{text}"]]],[1,1,"cond",,[,[[,"unless","text"]]],[[3,"{_buttonText}"]]],[1,,"OpalIcon",["buttonIcon"],[,[[,"name","chevronDown"]]],]]]]],[1,,"RnSlot",,[,[[,"for","menuSlot"]]],[[1,,"RnSlot",["menuSlot"],[,[[,"for","menu"]]],[[1,,"OpalDropdown",["menu"],[,[[,"closeOn","mousedown"]]],[[1,,"RnSlot",,[,[[,"for","menuHeader"]]],],[1,,"RnSlot",,[,[[,"for","menuContent"]]],[[1,,"div",[,"menuContent"],[,[[1,"if","_paramDataListSpecified"]]],[[1,1,"cond",,[,[[,"if","dataList"]]],[[1,1,"repeat",,[,[[,"for","item in dataList"],[,"trackBy","{=_dataListItemValueFieldName}"]]],[[1,,"OpalSelectOption",["option"],[,[[,"value","{item |key(_dataListItemValueFieldName) }"],[,"text","{item |key(_dataListItemTextFieldName) }"],[,"subtext","{item |key(_dataListItemSubtextFieldName) }"],[,"disabled","{item |key(_dataListItemDisabledFieldName) }"]]],]]],[1,,"RnSlot",["itemInputValidatorSlot"],,]]],[1,,"OpalLoader",["menuLoader"],[,[[1,"unless","dataList"],[,"shown",""]]],]]],[1,,"div",[,"menuContent"],[,[[1,"unless","_paramDataListSpecified"]]],[[1,,"RnSlot",["options"],[,[[,"forTag","opal-select-option"]]],],[1,,"RnSlot",,[,[[,"for","itemInputSlot"]]],[[1,,"RnSlot",["itemInputValidatorSlot"],[,[[,"for","itemInputValidator"]]],[[1,,"RnSlot",["itemInputSlot"],[,[[,"for","itemInput"]]],]]]]]]]]],[1,,"RnSlot",,[,[[,"for","menuFooter"]]],]]]]]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "M5PH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalSelectOption_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalSelectOption = void 0;
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("hhhP");
const template_rnt_1 = __webpack_require__("qAT2");
let OpalSelectOption = OpalSelectOption_1 = class OpalSelectOption extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this._mouseUpEvent = false;
    }
    get _tabIndex() {
        return this.disabled ? -1 : this.tabIndex;
    }
    ready() {
        if (this.selected) {
            this.indeterminate = false;
        }
    }
    _onSelectedChange(evt) {
        if (evt.data.value) {
            this.indeterminate = false;
        }
    }
    _onIndeterminateChange(evt) {
        if (evt.data.value) {
            this.selected = false;
        }
    }
    _onControlFocus() {
        this.focused = true;
    }
    _onControlBlur() {
        this.focused = false;
    }
    _onControlMouseUp() {
        this._mouseUpEvent = true;
        if (!this.disabled) {
            this.click();
        }
    }
    _onControlClick(evt) {
        evt.preventDefault();
        if (this._mouseUpEvent) {
            this._mouseUpEvent = false;
        }
        else if (!this.disabled) {
            this.click();
        }
    }
    click() {
        this.emit(this.toggle() ? OpalSelectOption_1.EVENT_SELECT : OpalSelectOption_1.EVENT_DESELECT);
        this.emit(OpalSelectOption_1.EVENT_CHANGE);
        return this;
    }
    get value() {
        return this.paramValue === null ? this.paramText : this.paramValue;
    }
    set value(value) {
        this.paramValue = value;
    }
    get text() {
        return this.paramText.trim() || '—';
    }
    set text(text) {
        this.paramText = text;
    }
    get subtext() {
        return this.paramSubtext && this.paramSubtext.trim();
    }
    set subtext(subtext) {
        this.paramSubtext = subtext;
    }
    select() {
        if (!this.selected) {
            this.selected = true;
            return true;
        }
        return false;
    }
    deselect() {
        if (this.selected) {
            this.selected = false;
            return true;
        }
        return false;
    }
    toggle(value) {
        return (this.selected = value === undefined ? !this.selected : value);
    }
    focus() {
        this.$('control').focus();
        return this;
    }
    blur() {
        this.$('control').blur();
        return this;
    }
    enable() {
        this.disabled = false;
        return this;
    }
    disable() {
        this.disabled = true;
        return this;
    }
};
OpalSelectOption.EVENT_CHANGE = Symbol('change');
OpalSelectOption.EVENT_DESELECT = Symbol('deselect');
OpalSelectOption.EVENT_SELECT = Symbol('select');
__decorate([
    rionite_1.Param('value', String)
], OpalSelectOption.prototype, "paramValue", void 0);
__decorate([
    rionite_1.Param('text', { type: String, required: true })
], OpalSelectOption.prototype, "paramText", void 0);
__decorate([
    rionite_1.Param('subtext', String)
], OpalSelectOption.prototype, "paramSubtext", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalSelectOption.prototype, "selected", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalSelectOption.prototype, "indeterminate", void 0);
__decorate([
    rionite_1.Param({ default: 0 })
], OpalSelectOption.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalSelectOption.prototype, "focused", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalSelectOption.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalSelectOption.prototype, "_tabIndex", null);
__decorate([
    rionite_1.Listen('change:selected')
], OpalSelectOption.prototype, "_onSelectedChange", null);
__decorate([
    rionite_1.Listen('change:indeterminate')
], OpalSelectOption.prototype, "_onIndeterminateChange", null);
__decorate([
    rionite_1.Listen('focus', 'control')
], OpalSelectOption.prototype, "_onControlFocus", null);
__decorate([
    rionite_1.Listen('blur', 'control')
], OpalSelectOption.prototype, "_onControlBlur", null);
__decorate([
    rionite_1.Listen('mouseup', 'control')
], OpalSelectOption.prototype, "_onControlMouseUp", null);
__decorate([
    rionite_1.Listen('click', 'control')
], OpalSelectOption.prototype, "_onControlClick", null);
OpalSelectOption = OpalSelectOption_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalSelectOption',
        template: template_rnt_1.default
    })
], OpalSelectOption);
exports.OpalSelectOption = OpalSelectOption;


/***/ }),

/***/ "P7z7":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_P7z7__;

/***/ }),

/***/ "WTz/":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_WTz___;

/***/ }),

/***/ "X6DG":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X6DG__;

/***/ }),

/***/ "Y0hN":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Y0hN__;

/***/ }),

/***/ "Y1+I":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Y1_I__;

/***/ }),

/***/ "ZuAa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalSelect_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalSelect = exports.OpalSelectOption = void 0;
const gettext_1 = __webpack_require__("eaeG");
const next_tick_1 = __webpack_require__("WTz/");
const opal_button_1 = __webpack_require__("X6DG");
const opal_loaded_list_1 = __webpack_require__("ioIi");
const opal_sign_button_1 = __webpack_require__("ej3F");
const opal_text_input_1 = __webpack_require__("hl6F");
const cellx_1 = __webpack_require__("P7z7");
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
const OpalSelectOption_1 = __webpack_require__("M5PH");
Object.defineProperty(exports, "OpalSelectOption", { enumerable: true, get: function () { return OpalSelectOption_1.OpalSelectOption; } });
__webpack_require__("9gpB");
const isArraysEqual_1 = __webpack_require__("nJvV");
const template_rnt_1 = __webpack_require__("IvWP");
const defaultDataListItemSchema = Object.freeze({
    value: 'value',
    text: 'text',
    subtext: 'subtext',
    disabled: 'disabled'
});
const defaultVMItemSchema = Object.freeze({
    value: 'value',
    text: 'text',
    subtext: 'subtext',
    disabled: 'disabled'
});
let OpalSelect = OpalSelect_1 = class OpalSelect extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.dataListCell = null;
        this.optionsCell = null;
        this._needOptionsUpdating = false;
        this._notUpdateOptions = false;
        this._opened = false;
        this._onceFocusedAfterLoading = false;
        this.validator = null;
    }
    get value() {
        return this.viewModel.map((item) => item[this._viewModelItemValueFieldName]);
    }
    set value(value) {
        this.paramValue = value;
    }
    get _buttonText() {
        let text = this.viewModel
            .map((item) => item[this._viewModelItemTextFieldName])
            .join(', ');
        if (!text) {
            return this.placeholder;
        }
        if (text.length > this.maxTextLength) {
            text = gettext_1.t('Выбран{n:|о|о} {n}', this.viewModel.length);
        }
        return text;
    }
    get options() {
        return Array.from(this.optionElements).map((optionEl) => optionEl.$component);
    }
    initialize() {
        let dataListKeypath = this.dataListKeypath;
        if (dataListKeypath || this.$specifiedParams.has('dataList')) {
            cellx_1.define(this, 'dataList', dataListKeypath
                ? new cellx_1.Cell(Function(`return this.${dataListKeypath};`), {
                    context: this.ownerComponent || window
                })
                : () => this.paramDataList);
            this._paramDataListSpecified = true;
        }
        else {
            this.dataList = null;
            this._paramDataListSpecified = false;
        }
        let dataListItemSchema = this.dataListItemSchema;
        let defaultDataListItemSchema = this.constructor
            .defaultDataListItemSchema;
        this._dataListItemValueFieldName =
            dataListItemSchema.value || defaultDataListItemSchema.value;
        this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
        this._dataListItemSubtextFieldName =
            dataListItemSchema.subtext || defaultDataListItemSchema.subtext;
        this._dataListItemDisabledFieldName =
            dataListItemSchema.disabled || defaultDataListItemSchema.disabled;
        this.viewModel = this.paramViewModel || new cellx_1.ObservableList();
        let vmItemSchema = this.viewModelItemSchema;
        let defaultVMItemSchema = this.constructor
            .defaultViewModelItemSchema;
        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
        this._viewModelItemSubtextFieldName = vmItemSchema.subtext || defaultVMItemSchema.subtext;
        this._viewModelItemDisabledFieldName =
            vmItemSchema.disabled || defaultVMItemSchema.disabled;
        this._addItem = this.addItem;
    }
    ready() {
        this.optionElements = this.element.getElementsByClassName('OpalSelectOption');
        if (this.paramViewModel && !this.paramValue) {
            this._needOptionsUpdating = true;
        }
        else {
            this._notUpdateOptions = true;
            this.$('menu').renderContent();
            this._notUpdateOptions = false;
            this._initViewModel();
        }
    }
    _initViewModel() {
        let value = this.paramValue;
        let selectedOptions;
        if (value) {
            if (!Array.isArray(value)) {
                throw new TypeError('Parameter "value" must be an array');
            }
            this._notUpdateOptions = true;
            this.viewModel.clear();
            if (value.length) {
                if (this.multiple) {
                    selectedOptions = this.options.filter((option) => value.includes(option.value));
                }
                else {
                    value = value[0];
                    let selectedOption = this.options.find((option) => option.value == value);
                    if (selectedOption) {
                        selectedOptions = [selectedOption];
                    }
                }
            }
        }
        else if (this.multiple) {
            selectedOptions = this.options.filter((option) => option.selected);
        }
        else {
            let selectedOption = this.options.find((option) => option.selected);
            if (selectedOption) {
                selectedOptions = [selectedOption];
            }
        }
        if (selectedOptions && selectedOptions.length) {
            this._notUpdateOptions = true;
            this.viewModel.addRange(selectedOptions.map((option) => ({
                [this._viewModelItemValueFieldName]: option.value,
                [this._viewModelItemTextFieldName]: option.text,
                [this._viewModelItemSubtextFieldName]: option.subtext
            })));
        }
        this._notUpdateOptions = false;
        if (value) {
            this._updateOptions();
        }
    }
    connected() {
        if (this.focused) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this.focus();
        }
        if (!this.openOnClick) {
            this.listenTo(this.$('button').element, 'mousedown', this._onButtonElementMouseDown);
        }
    }
    _onParamValueChange(evt) {
        let vm = this.viewModel;
        let value = evt.data.value;
        if (value) {
            if (!Array.isArray(value)) {
                throw new TypeError('Parameter "value" must be an array');
            }
            if (value.length) {
                let multiple = this.multiple;
                if (multiple ||
                    !vm.length ||
                    value[0] != vm.get(0)[this._viewModelItemValueFieldName]) {
                    if (this._needOptionsUpdating) {
                        this._needOptionsUpdating = false;
                        this._notUpdateOptions = true;
                        this.$('menu').renderContent();
                        this._notUpdateOptions = false;
                        this._updateViewModel(value, multiple);
                    }
                    else {
                        this._updateViewModel(value, multiple);
                    }
                }
                return;
            }
        }
        vm.clear();
    }
    _updateViewModel(value, multiple) {
        let dataList = this.dataList;
        let vm = this.viewModel;
        let vmItemValueFieldName = this._viewModelItemValueFieldName;
        let vmItemTextFieldName = this._viewModelItemTextFieldName;
        let vmItemSubtextFieldName = this._viewModelItemSubtextFieldName;
        if (multiple) {
            for (let item of dataList || this.options) {
                let itemValue = dataList
                    ? item[vmItemValueFieldName]
                    : item.value;
                let index = vm.findIndex((item) => item[vmItemValueFieldName] == itemValue);
                if (!value.includes(itemValue)) {
                    if (index != -1) {
                        vm.removeAt(index);
                    }
                }
                else if (index == -1) {
                    vm.add({
                        [vmItemValueFieldName]: itemValue,
                        [vmItemTextFieldName]: dataList
                            ? item[vmItemTextFieldName]
                            : item.text,
                        [vmItemSubtextFieldName]: dataList
                            ? item[vmItemSubtextFieldName]
                            : item.subtext
                    });
                }
            }
        }
        else {
            let itemValue = value[0];
            if (!(dataList || this.options).some((item) => {
                if ((dataList
                    ? item[vmItemValueFieldName]
                    : item.value) != itemValue) {
                    return false;
                }
                vm.set(0, {
                    [vmItemValueFieldName]: itemValue,
                    [vmItemTextFieldName]: dataList
                        ? item[vmItemTextFieldName]
                        : item.text,
                    [vmItemSubtextFieldName]: dataList
                        ? item[vmItemSubtextFieldName]
                        : item.subtext
                });
                return true;
            })) {
                vm.clear();
            }
        }
    }
    _onFocusedChange(evt) {
        if (evt.data.value) {
            if (!this._documentKeyDownListening) {
                this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            }
            this.emit(OpalSelect_1.EVENT_FOCUS);
        }
        else {
            if (this._documentKeyDownListening && !this._opened) {
                this._documentKeyDownListening.stop();
                this._documentKeyDownListening = null;
            }
            this.emit(OpalSelect_1.EVENT_BLUR);
        }
    }
    _onViewModelChange() {
        if (!this._needOptionsUpdating && !this._notUpdateOptions) {
            this._updateOptions();
        }
    }
    _onButtonFocus() {
        this.focused = true;
    }
    _onButtonBlur() {
        this.focused = false;
    }
    _onButtonClick(evt) {
        evt.defaultPrevented = true;
        if (this._documentClickListening) {
            this._documentClickListening.stop();
            this._documentClickListening = null;
        }
        else if (evt.target.checked) {
            this.close();
        }
        else {
            this.open();
        }
    }
    _onButtonElementMouseDown() {
        if (this.disabled) {
            return;
        }
        if (!this._documentClickListening) {
            this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
        }
        if (this._opened) {
            this.close();
        }
        else {
            setTimeout(() => {
                this.open();
            }, 1);
        }
    }
    _onDocumentClick() {
        if (this._documentClickListening) {
            this._documentClickListening.stop();
            this._documentClickListening = null;
        }
    }
    _onMenuOpenedChange(evt) {
        if (!evt.data.value) {
            this.close();
        }
        return false;
    }
    _onMenuSelectOptionSelect(evt) {
        let vm = this.viewModel;
        let vmItem = {
            [this._viewModelItemValueFieldName]: evt.target.value,
            [this._viewModelItemTextFieldName]: evt.target.text,
            [this._viewModelItemSubtextFieldName]: evt.target.subtext
        };
        if (this.multiple) {
            this._notUpdateOptions = true;
            vm.add(vmItem);
            this._notUpdateOptions = false;
            this.emit(OpalSelect_1.EVENT_SELECT);
        }
        else {
            if (vm.length) {
                vm.set(0, vmItem);
            }
            else {
                vm.add(vmItem);
            }
            this.close();
            this.focus();
            this.emit(OpalSelect_1.EVENT_SELECT);
            this.emit(OpalSelect_1.EVENT_CHANGE);
        }
        return false;
    }
    _onMenuSelectOptionDeselect(evt) {
        if (this.multiple || this.clearOnDeselect) {
            let vmItemValueFieldName = this._viewModelItemValueFieldName;
            let value = evt.target.value;
            this._notUpdateOptions = true;
            this.viewModel.removeAt(this.viewModel.findIndex((item) => item[vmItemValueFieldName] == value));
            this._notUpdateOptions = false;
        }
        else {
            evt.target.select();
            this.close();
            this.focus();
        }
        this.emit(OpalSelect_1.EVENT_DESELECT);
        return false;
    }
    _onMenuTextInputConfirm(evt) {
        let textInput = evt.target;
        if (textInput !== this.$('itemInput')) {
            return;
        }
        if (!this._addItem) {
            throw new TypeError('Parameter "addItem" is required');
        }
        evt.data.initialEvent.preventDefault();
        if (textInput.validator && !textInput.validator.validate()) {
            return false;
        }
        let text = textInput.value;
        textInput.clear();
        textInput.loading = true;
        textInput.disable();
        this._addItem(text, this).then((item) => {
            textInput.loading = false;
            textInput.enable();
            if (item) {
                this._addItem$(item);
            }
        }, () => {
            textInput.loading = false;
            textInput.enable();
        });
        return false;
    }
    _onMenuButtonClick(evt) {
        let button = evt.target;
        if (button !== this.$('btnAddItem')) {
            return;
        }
        if (!this._addItem) {
            throw new TypeError('Parameter "addItem" is required');
        }
        let text = button.element.dataset.itemText;
        button.loading = true;
        button.disable();
        this._addItem(text, this).then((item) => {
            button.loading = false;
            button.enable();
            if (item) {
                this._addItem$(item);
            }
        }, () => {
            button.loading = false;
            button.enable();
        });
        return false;
    }
    _addItem$(item) {
        let value = item[this._dataListItemValueFieldName];
        let text = item[this._dataListItemTextFieldName];
        let subtext = item[this._dataListItemSubtextFieldName];
        if (this.dataList &&
            !this.dataList.find((item) => item[this._dataListItemValueFieldName] == value)) {
            this.dataList.add({
                [this._dataListItemValueFieldName]: value,
                [this._dataListItemTextFieldName]: text,
                [this._dataListItemSubtextFieldName]: subtext
            });
        }
        let loadedList = this.$('loadedList');
        if (loadedList) {
            loadedList.query = '';
        }
        let vm = this.viewModel;
        let vmItem = {
            [this._viewModelItemValueFieldName]: value,
            [this._viewModelItemTextFieldName]: text,
            [this._dataListItemSubtextFieldName]: subtext
        };
        if (this.multiple) {
            vm.add(vmItem);
            this.emit(OpalSelect_1.EVENT_INPUT);
        }
        else {
            if (vm.length) {
                vm.set(0, vmItem);
            }
            else {
                vm.add(vmItem);
            }
            this.close();
            this.focus();
            this.emit(OpalSelect_1.EVENT_INPUT);
            this.emit(OpalSelect_1.EVENT_CHANGE);
        }
    }
    _onMenuChange() {
        if (!this._notUpdateOptions) {
            this.optionsCell.pull();
            this._updateOptions();
        }
    }
    open() {
        if (this._opened) {
            return false;
        }
        this._opened = true;
        this._valueOnOpen = this.viewModel.map((item) => item[this._viewModelItemValueFieldName]);
        this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
        if (!this._documentKeyDownListening) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
        }
        if (this.dataListCell) {
            this._dataListChangeListeneng = this.listenTo(this, 'change:dataList', this._onDataListChange);
        }
        this._menuLoadedListeneng = this.listenTo('menu', this.constructor.menuLoadedEvents, this._onMenuLoaded);
        this.$('button').check();
        this._notUpdateOptions = true;
        this.$('menu').open();
        this._notUpdateOptions = false;
        if (this._needOptionsUpdating) {
            this._needOptionsUpdating = false;
            this._updateOptions();
        }
        let loadedList = this.$('loadedList');
        if (loadedList && !loadedList.loading) {
            if (this.clearLoadedListOnOpen) {
                loadedList.clear();
            }
            loadedList.checkLoading();
        }
        this.focus();
        return true;
    }
    close() {
        if (!this._opened) {
            return false;
        }
        this._opened = false;
        this._documentFocusListening.stop();
        if (!this.focused) {
            this._documentKeyDownListening.stop();
            this._documentKeyDownListening = null;
        }
        if (this._dataListChangeListeneng) {
            this._dataListChangeListeneng.stop();
        }
        this._menuLoadedListeneng.stop();
        this.$('button').uncheck();
        this.$('menu').close();
        if (this.multiple) {
            if (!isArraysEqual_1.isArraysEqual(this.viewModel.map((item) => item[this._viewModelItemValueFieldName]), this._valueOnOpen)) {
                this.emit(OpalSelect_1.EVENT_CHANGE);
            }
        }
        return true;
    }
    toggle(value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
    }
    _onDocumentFocus(evt) {
        if (!this.element.contains(evt.target.parentElement)) {
            this.close();
        }
    }
    _onDocumentKeyDown(evt) {
        switch (evt.which) {
            case 32 /* Space */: {
                if (this._opened) {
                    if (this.focused) {
                        evt.preventDefault();
                        this.close();
                    }
                }
                else {
                    evt.preventDefault();
                    this.open();
                }
                break;
            }
            case 38 /* Up */: {
                evt.preventDefault();
                if (this._opened) {
                    if (document.activeElement == document.body) {
                        if (this._focusOptions()) {
                            document.body.classList.remove('_noFocusHighlight');
                        }
                    }
                    else {
                        let options = this.options;
                        for (let i = 0, l = options.length;; i++) {
                            if (i < l) {
                                if (options[i].focused) {
                                    for (;;) {
                                        if (!i) {
                                            for (let j = options.length; j;) {
                                                let option = options[--j];
                                                if (!option.disabled &&
                                                    option.element.offsetWidth) {
                                                    document.body.classList.remove('_noFocusHighlight');
                                                    option.focus();
                                                    break;
                                                }
                                            }
                                            break;
                                        }
                                        let option = options[--i];
                                        if (!option.disabled && option.element.offsetWidth) {
                                            document.body.classList.remove('_noFocusHighlight');
                                            option.focus();
                                            break;
                                        }
                                    }
                                    break;
                                }
                            }
                            else {
                                if (this._focusOptions()) {
                                    document.body.classList.remove('_noFocusHighlight');
                                }
                                break;
                            }
                        }
                    }
                }
                else {
                    this.open();
                }
                break;
            }
            case 40 /* Down */: {
                evt.preventDefault();
                if (this._opened) {
                    if (document.activeElement == document.body) {
                        if (this._focusOptions()) {
                            document.body.classList.remove('_noFocusHighlight');
                        }
                    }
                    else {
                        let options = this.options;
                        for (let i = 0, l = options.length;; i++) {
                            if (i < l) {
                                if (options[i].focused) {
                                    for (;;) {
                                        if (i + 1 == l) {
                                            for (let option of options) {
                                                if (!option.disabled &&
                                                    option.element.offsetWidth) {
                                                    document.body.classList.remove('_noFocusHighlight');
                                                    option.focus();
                                                    break;
                                                }
                                            }
                                            break;
                                        }
                                        let option = options[++i];
                                        if (!option.disabled && option.element.offsetWidth) {
                                            document.body.classList.remove('_noFocusHighlight');
                                            option.focus();
                                            break;
                                        }
                                    }
                                    break;
                                }
                            }
                            else {
                                if (this._focusOptions()) {
                                    document.body.classList.remove('_noFocusHighlight');
                                }
                                break;
                            }
                        }
                    }
                }
                else {
                    this.open();
                }
                break;
            }
            case 27 /* Esc */: {
                evt.preventDefault();
                this.close();
                this.focus();
                break;
            }
        }
    }
    _onDataListChange(evt) {
        if (!evt.data.prevValue) {
            next_tick_1.nextTick(() => {
                if (this._opened) {
                    this.focus();
                }
            });
        }
    }
    _onMenuLoaded(evt) {
        if (this._onceFocusedAfterLoading || evt.target !== this.$('loadedList')) {
            return;
        }
        this._onceFocusedAfterLoading = true;
        let focusTarget = this.$('focus') ||
            this.$('filteredList');
        if (focusTarget) {
            focusTarget.focus();
        }
    }
    _updateOptions() {
        let vm = this.viewModel;
        let vmItemValueFieldName = this._viewModelItemValueFieldName;
        let vmItemDisabledFieldName = this._viewModelItemDisabledFieldName;
        for (let option of this.options) {
            let value = option.value;
            let item = vm.find((item) => item[vmItemValueFieldName] == value);
            if (item) {
                option.selected = true;
                if (item[vmItemDisabledFieldName] !== undefined) {
                    option.disabled = item[vmItemDisabledFieldName];
                }
            }
            else {
                option.selected = false;
            }
        }
    }
    focus() {
        if (this._opened) {
            this._focusOptions();
            let focusTarget = this.$('focus') ||
                this.$('filteredList');
            if (focusTarget && focusTarget.focus() !== false) {
                return this;
            }
        }
        this.$('button').focus();
        return this;
    }
    blur() {
        this.$('button').blur();
        return this;
    }
    _focusOptions() {
        let focusTarget;
        for (let option of this.options) {
            if (!option.disabled && option.element.offsetWidth) {
                if (option.selected) {
                    focusTarget = option;
                    break;
                }
                if (!focusTarget) {
                    focusTarget = option;
                }
            }
        }
        if (focusTarget) {
            focusTarget.focus();
            return true;
        }
        return false;
    }
    enable() {
        this.disabled = false;
        return this;
    }
    disable() {
        this.disabled = true;
        return this;
    }
    validate() {
        return !this.validator || this.validator.validate();
    }
};
OpalSelect.EVENT_BLUR = Symbol('blur');
OpalSelect.EVENT_CHANGE = Symbol('change');
OpalSelect.EVENT_DESELECT = Symbol('deselect');
OpalSelect.EVENT_FOCUS = Symbol('focus');
OpalSelect.EVENT_INPUT = Symbol('input');
OpalSelect.EVENT_SELECT = Symbol('select');
OpalSelect.buttonFocusEvents = [opal_button_1.OpalButton.EVENT_FOCUS, opal_sign_button_1.OpalSignButton.EVENT_FOCUS];
OpalSelect.buttonBlurEvents = [opal_button_1.OpalButton.EVENT_BLUR, opal_sign_button_1.OpalSignButton.EVENT_BLUR];
OpalSelect.buttonClickEvents = [opal_button_1.OpalButton.EVENT_CLICK, opal_sign_button_1.OpalSignButton.EVENT_CLICK];
OpalSelect.menuChangeEvents = [rionite_1.RnIfThen.EVENT_CHANGE, rionite_1.RnRepeat.EVENT_CHANGE];
OpalSelect.menuLoadedEvents = [opal_loaded_list_1.OpalLoadedList.EVENT_LOADED];
OpalSelect.defaultDataListItemSchema = defaultDataListItemSchema;
OpalSelect.defaultViewModelItemSchema = defaultVMItemSchema;
__decorate([
    rionite_1.Param({ default: 'default' })
], OpalSelect.prototype, "viewType", void 0);
__decorate([
    rionite_1.Param({ default: 'm' })
], OpalSelect.prototype, "size", void 0);
__decorate([
    rionite_1.Param({ type: Boolean, readonly: true })
], OpalSelect.prototype, "multiple", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalSelect.prototype, "clearOnDeselect", void 0);
__decorate([
    rionite_1.Param('dataList')
], OpalSelect.prototype, "paramDataList", void 0);
__decorate([
    rionite_1.Param({ type: String, readonly: true })
], OpalSelect.prototype, "dataListKeypath", void 0);
__decorate([
    rionite_1.Param({ type: eval, default: defaultDataListItemSchema, readonly: true })
], OpalSelect.prototype, "dataListItemSchema", void 0);
__decorate([
    rionite_1.Param('value', eval)
], OpalSelect.prototype, "paramValue", void 0);
__decorate([
    rionite_1.Param('viewModel', { readonly: true })
], OpalSelect.prototype, "paramViewModel", void 0);
__decorate([
    rionite_1.Param({ type: eval, default: defaultVMItemSchema, readonly: true })
], OpalSelect.prototype, "viewModelItemSchema", void 0);
__decorate([
    rionite_1.Param({ readonly: true })
], OpalSelect.prototype, "addItem", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalSelect.prototype, "clearLoadedListOnOpen", void 0);
__decorate([
    rionite_1.Param(String)
], OpalSelect.prototype, "text", void 0);
__decorate([
    rionite_1.Param({ default: 20 })
], OpalSelect.prototype, "maxTextLength", void 0);
__decorate([
    rionite_1.Param({ default: gettext_1.pt('OpalSelect#placeholder', 'Не выбрано') })
], OpalSelect.prototype, "placeholder", void 0);
__decorate([
    rionite_1.Param({ type: Boolean, readonly: true })
], OpalSelect.prototype, "openOnClick", void 0);
__decorate([
    rionite_1.Param({ default: 0 })
], OpalSelect.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalSelect.prototype, "focused", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalSelect.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Observable
], OpalSelect.prototype, "viewModel", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalSelect.prototype, "value", null);
__decorate([
    cellx_decorators_1.Computed
], OpalSelect.prototype, "_buttonText", null);
__decorate([
    cellx_decorators_1.Computed
], OpalSelect.prototype, "options", null);
__decorate([
    rionite_1.Listen('change:paramValue')
], OpalSelect.prototype, "_onParamValueChange", null);
__decorate([
    rionite_1.Listen('change:focused')
], OpalSelect.prototype, "_onFocusedChange", null);
__decorate([
    rionite_1.Listen(cellx_1.ObservableList.EVENT_CHANGE, '@viewModel')
], OpalSelect.prototype, "_onViewModelChange", null);
__decorate([
    rionite_1.Listen((ctor) => ctor.buttonFocusEvents, 'button')
], OpalSelect.prototype, "_onButtonFocus", null);
__decorate([
    rionite_1.Listen((ctor) => ctor.buttonBlurEvents, 'button')
], OpalSelect.prototype, "_onButtonBlur", null);
__decorate([
    rionite_1.Listen((ctor) => ctor.buttonClickEvents, 'button')
], OpalSelect.prototype, "_onButtonClick", null);
__decorate([
    rionite_1.Listen('change:opened', 'menu')
], OpalSelect.prototype, "_onMenuOpenedChange", null);
__decorate([
    rionite_1.Listen(OpalSelectOption_1.OpalSelectOption.EVENT_SELECT, 'menu')
], OpalSelect.prototype, "_onMenuSelectOptionSelect", null);
__decorate([
    rionite_1.Listen(OpalSelectOption_1.OpalSelectOption.EVENT_DESELECT, 'menu')
], OpalSelect.prototype, "_onMenuSelectOptionDeselect", null);
__decorate([
    rionite_1.Listen(opal_text_input_1.OpalTextInput.EVENT_CONFIRM, 'menu')
], OpalSelect.prototype, "_onMenuTextInputConfirm", null);
__decorate([
    rionite_1.Listen(opal_button_1.OpalButton.EVENT_CLICK, 'menu')
], OpalSelect.prototype, "_onMenuButtonClick", null);
__decorate([
    rionite_1.Listen((ctor) => ctor.menuChangeEvents, 'menu')
], OpalSelect.prototype, "_onMenuChange", null);
OpalSelect = OpalSelect_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalSelect',
        template: template_rnt_1.default
    })
], OpalSelect);
exports.OpalSelect = OpalSelect;


/***/ }),

/***/ "eaeG":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_eaeG__;

/***/ }),

/***/ "ej3F":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ej3F__;

/***/ }),

/***/ "hhhP":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSelectOption{display:block}.OpalSelectOption .OpalSelectOption__control{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:7px 38px 7px 22px;width:100%;border:0;border-radius:0;background:#fff;color:var(--textColor50, hsl(208,10%,5%));text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalSelectOption .OpalSelectOption__control:hover{background:var(--grayColor900, hsl(0,0%,90%))}.OpalSelectOption .OpalSelectOption__control:focus{outline:0}body:not(._noFocusHighlight) .OpalSelectOption .OpalSelectOption__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;-webkit-box-shadow:inset 0 0 0 1px var(--primaryColor650, hsl(208,93%,65%));box-shadow:inset 0 0 0 1px var(--primaryColor650, hsl(208,93%,65%));content:'';pointer-events:none}.OpalSelectOption .OpalSelectOption__control:active{background:var(--grayColor800, hsl(0,0%,80%))}.OpalSelectOption .OpalSelectOption__contentSlot{position:relative;display:block;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.OpalSelectOption .OpalSelectOption__contentSlot sub{bottom:0;display:block;color:var(--grayColor500, hsl(0,0%,50%));font-size:.9em;line-height:1.5}.OpalSelectOption .OpalSelectOption__iconSelected,.OpalSelectOption .OpalSelectOption__iconIndeterminate{position:absolute;top:0;right:14px;bottom:0;margin:auto;width:16px;height:16px;color:var(--textColor50, hsl(208,10%,5%))}.OpalSelectOption[selected] .OpalSelectOption__control,.OpalSelectOption[indeterminate] .OpalSelectOption__control{color:var(--primaryColor500, hsl(208,93%,50%))}.OpalSelectOption[disabled]{pointer-events:none}.OpalSelectOption[disabled] .OpalSelectOption__control{cursor:default}.OpalSelectOption[disabled] .OpalSelectOption__contentSlot{color:var(--grayColor500, hsl(0,0%,50%))}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "hl6F":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hl6F__;

/***/ }),

/***/ "ioIi":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ioIi__;

/***/ }),

/***/ "nJvV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArraysEqual = void 0;
function isArraysEqual(arr1, arr2) {
    let len = arr1.length;
    if (len != arr2.length) {
        return false;
    }
    for (let i = 0; i < len; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
exports.isArraysEqual = isArraysEqual;


/***/ }),

/***/ "qAT2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"button",["control"],[,[[,"type","button"],[,"tabindex","{_tabIndex}"]]],[[1,,"RnSlot",["contentSlot"],,[[3,"{paramText}"],[1,,"sub",,[,[[1,"if","paramSubtext"]]],[[3,"{paramSubtext}"]]]]],[1,,"OpalIcon",["iconSelected"],[,[[1,"if","selected"],[,"name","checkmark"]]],],[1,,"OpalIcon",["iconIndeterminate"],[,[[1,"if","indeterminate"],[,"name","minus"]]],]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "qudD":
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
__webpack_require__("X6DG");
__webpack_require__("A7KY");
__webpack_require__("Y1+I");
__webpack_require__("Y0hN");
__webpack_require__("ioIi");
__webpack_require__("BLMt");
__webpack_require__("hl6F");
__exportStar(__webpack_require__("ZuAa"), exports);


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