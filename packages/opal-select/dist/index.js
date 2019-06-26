(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-button"), require("@riim/opal-dropdown"), require("@riim/opal-filtered-list"), require("@riim/opal-icon"), require("@riim/opal-loaded-list"), require("@riim/opal-loader"), require("@riim/opal-text-input"), require("reflect-metadata"), require("@riim/gettext"), require("@riim/next-tick"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-button", "@riim/opal-dropdown", "@riim/opal-filtered-list", "@riim/opal-icon", "@riim/opal-loaded-list", "@riim/opal-loader", "@riim/opal-text-input", "reflect-metadata", "@riim/gettext", "@riim/next-tick", "cellx", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-select"] = factory(require("@riim/opal-button"), require("@riim/opal-dropdown"), require("@riim/opal-filtered-list"), require("@riim/opal-icon"), require("@riim/opal-loaded-list"), require("@riim/opal-loader"), require("@riim/opal-text-input"), require("reflect-metadata"), require("@riim/gettext"), require("@riim/next-tick"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-select"] = factory(root["@riim/opal-button"], root["@riim/opal-dropdown"], root["@riim/opal-filtered-list"], root["@riim/opal-icon"], root["@riim/opal-loaded-list"], root["@riim/opal-loader"], root["@riim/opal-text-input"], root["reflect-metadata"], root["@riim/gettext"], root["@riim/next-tick"], root["cellx"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__14__) {
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
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__export(__webpack_require__(9));


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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
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
var OpalSelect_1;
Object.defineProperty(exports, "__esModule", { value: true });
const gettext_1 = __webpack_require__(10);
const next_tick_1 = __webpack_require__(11);
const cellx_1 = __webpack_require__(12);
const cellx_decorators_1 = __webpack_require__(13);
const rionite_1 = __webpack_require__(14);
const OpalSelectOption_1 = __webpack_require__(15);
exports.OpalSelectOption = OpalSelectOption_1.OpalSelectOption;
__webpack_require__(18);
const isEqualArray_1 = __webpack_require__(19);
const template_rnt_1 = __webpack_require__(20);
const map = Array.prototype.map;
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
        this.size = 'm';
        this.multiple = false;
        this.viewModelCell = new cellx_1.Cell(new cellx_1.ObservableList());
        this.maxTextLength = 20;
        // ;;; Плейсхолдер селекта.
        this.placeholder = gettext_1.pt('OpalSelect#placeholder', 'Не выбрано');
        this.openOnClick = false;
        this.tabIndex = 0;
        this.focused = false;
        this.disabled = false;
        this.dataListCell = null;
        this._needOptionsUpdating = false;
        this._notUpdateOptions = false;
        this._opened = false;
        this._onceFocusedAfterLoading = false;
    }
    get value() {
        return this.viewModel.map(item => item[this._viewModelItemValueFieldName]);
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
        return map.call(this.optionElements, (option) => option.$component);
    }
    initialize() {
        if (this.dataListKeypath) {
            cellx_1.define(this, 'dataList', new cellx_1.Cell(Function(`return this.${this.dataListKeypath};`), {
                context: this.ownerComponent || window
            }));
            this._isParamDataListSpecified = true;
        }
        else if (this.$specifiedParams && this.$specifiedParams.has('dataList')) {
            cellx_1.define(this, 'dataList', () => this.paramDataList);
            this._isParamDataListSpecified = true;
        }
        else {
            this.dataList = null;
            this._isParamDataListSpecified = false;
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
        let vmItemSchema = this.viewModelItemSchema;
        let defaultVMItemSchema = this.constructor
            .defaultViewModelItemSchema;
        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
        this._viewModelItemSubtextFieldName = vmItemSchema.subtext || defaultVMItemSchema.subtext;
        this._viewModelItemDisabledFieldName =
            vmItemSchema.disabled || defaultVMItemSchema.disabled;
        this._addNewItem = this.addNewItem;
    }
    ready() {
        this.optionElements = this.element.getElementsByClassName('OpalSelectOption');
        if (this.$specifiedParams.has('viewModel') && !this.paramValue) {
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
        let value = this.value;
        let selectedOptions;
        if (value) {
            if (!Array.isArray(value)) {
                throw new TypeError('Parameter "value" must be an array');
            }
            this._notUpdateOptions = true;
            this.viewModel.clear();
            if (value.length) {
                if (this.multiple) {
                    selectedOptions = this.options.filter(option => value.indexOf(option.value) != -1);
                }
                else {
                    value = value[0];
                    let selectedOption = this.options.find(option => option.value == value);
                    if (selectedOption) {
                        selectedOptions = [selectedOption];
                    }
                }
            }
        }
        else if (this.multiple) {
            selectedOptions = this.options.filter(option => option.selected);
        }
        else {
            let selectedOption = this.options.find(option => option.selected);
            if (selectedOption) {
                selectedOptions = [selectedOption];
            }
        }
        if (selectedOptions && selectedOptions.length) {
            this._notUpdateOptions = true;
            this.viewModel.addRange(selectedOptions.map(option => ({
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
    elementAttached() {
        if (this.focused) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this.focus();
        }
        this.listenTo(this, {
            'change:paramValue': this._onParamValueChange,
            'change:focused': this._onFocusedChange
        });
        this.listenTo(this.viewModel, 'change', this._onViewModelChange);
        this.listenTo('button', {
            focus: this._onButtonFocus,
            blur: this._onButtonBlur,
            click: this._onButtonClick
        });
        if (!this.openOnClick) {
            this.listenTo(this.$('button').element, 'mousedown', this._onButtonElementMouseDown);
        }
        this.listenTo('menu', {
            'change:opened': this._onMenuOpenedChange,
            '<OpalSelectOption>select': this._onMenuSelectOptionSelect,
            '<OpalSelectOption>deselect': this._onMenuSelectOptionDeselect,
            '<OpalTextInput>confirm': this._onMenuTextInputConfirm,
            '<OpalButton>click': this._onMenuButtonClick,
            '<*>change': this._onMenuChange
        });
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
        let vm = this.viewModel;
        let vmItemValueFieldName = this._viewModelItemValueFieldName;
        let vmItemTextFieldName = this._viewModelItemTextFieldName;
        let vmItemSubtextFieldName = this._viewModelItemSubtextFieldName;
        if (multiple) {
            this.options.forEach(option => {
                let optionValue = option.value;
                let itemIndex = vm.findIndex(item => item[vmItemValueFieldName] == optionValue);
                if (value.indexOf(optionValue) == -1) {
                    if (itemIndex != -1) {
                        vm.removeAt(itemIndex);
                    }
                }
                else if (itemIndex == -1) {
                    vm.add({
                        [vmItemValueFieldName]: optionValue,
                        [vmItemTextFieldName]: option.text,
                        [vmItemSubtextFieldName]: option.subtext
                    });
                }
            });
        }
        else {
            value = value[0];
            if (!this.options.some(option => {
                if (option.value != value) {
                    return false;
                }
                vm.set(0, {
                    [vmItemValueFieldName]: value,
                    [vmItemTextFieldName]: option.text,
                    [vmItemSubtextFieldName]: option.subtext
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
            this.emit('focus');
        }
        else {
            if (this._documentKeyDownListening && !this._opened) {
                this._documentKeyDownListening.stop();
                this._documentKeyDownListening = null;
            }
            this.emit('blur');
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
            this.emit('select');
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
            this.emit('select');
            this.emit('change');
        }
        return false;
    }
    _onMenuSelectOptionDeselect(evt) {
        if (this.multiple) {
            let vmItemValueFieldName = this._viewModelItemValueFieldName;
            let value = evt.target.value;
            this._notUpdateOptions = true;
            this.viewModel.removeAt(this.viewModel.findIndex(item => item[vmItemValueFieldName] == value));
            this._notUpdateOptions = false;
        }
        else {
            evt.target.select();
            this.close();
            this.focus();
        }
        this.emit('deselect');
        return false;
    }
    _onMenuTextInputConfirm(evt) {
        let textInput = evt.target;
        if (textInput !== this.$('newItemInput')) {
            return;
        }
        if (!this._addNewItem) {
            throw new TypeError('Parameter "addNewItem" is required');
        }
        let text = textInput.value;
        textInput.clear();
        textInput.loading = true;
        textInput.disable();
        this._addNewItem(text, this).then((newItem) => {
            textInput.loading = false;
            textInput.enable();
            if (newItem) {
                this._addNewItem$(newItem);
            }
        }, () => {
            textInput.loading = false;
            textInput.enable();
        });
        return false;
    }
    _onMenuButtonClick(evt) {
        let button = evt.target;
        if (button !== this.$('btnAddNewItem')) {
            return;
        }
        if (!this._addNewItem) {
            throw new TypeError('Parameter "addNewItem" is required');
        }
        let text = button.element.dataset.newItemText;
        button.loading = true;
        button.disable();
        this._addNewItem(text, this).then((newItem) => {
            button.loading = false;
            button.enable();
            if (newItem) {
                this._addNewItem$(newItem);
            }
        }, () => {
            button.loading = false;
            button.enable();
        });
        return false;
    }
    _addNewItem$(newItem) {
        let value = newItem[this._viewModelItemValueFieldName];
        let text = newItem[this._viewModelItemTextFieldName];
        let subtext = newItem[this._viewModelItemDisabledFieldName];
        if (this.dataList) {
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
            this.emit('input');
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
            this.emit('input');
            this.emit('change');
        }
    }
    _onMenuChange(evt) {
        if (!this._notUpdateOptions &&
            (evt.target instanceof rionite_1.RnIfThen || evt.target instanceof rionite_1.RnRepeat)) {
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
        this._menuLoadedListeneng = this.listenTo(this.$('menu'), '<*>loaded', this._onMenuLoaded);
        this.$('button').check();
        this._notUpdateOptions = true;
        this.$('menu').open();
        this._notUpdateOptions = false;
        if (this._needOptionsUpdating) {
            this._needOptionsUpdating = false;
            this._updateOptions();
        }
        let loadedList = this.$('loadedList');
        if (loadedList) {
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
            if (!isEqualArray_1.isEqualArray(this.viewModel.map((item) => item[this._viewModelItemValueFieldName]), this._valueOnOpen)) {
                this.emit('change');
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
                        for (let i = 0, l = options.length; i < l; i++) {
                            if (options[i].focused) {
                                for (;;) {
                                    if (!i) {
                                        for (let j = options.length; j;) {
                                            let option = options[--j];
                                            if (!option.disabled && option.element.offsetWidth) {
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
                        for (let i = 0, l = options.length; i < l; i++) {
                            if (options[i].focused) {
                                for (;;) {
                                    if (i + 1 == l) {
                                        for (let option of options) {
                                            if (!option.disabled && option.element.offsetWidth) {
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
        this._focusOptions();
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
        this.options.forEach(option => {
            let value = option.value;
            let item = vm.find(item => item[vmItemValueFieldName] == value);
            if (item) {
                option.selected = true;
                if (item[vmItemDisabledFieldName] !== undefined) {
                    option.disabled = item[vmItemDisabledFieldName];
                }
            }
            else {
                option.selected = false;
            }
        });
    }
    focus() {
        if (this._opened) {
            let focusTarget = this.$('focus') ||
                this.$('filteredList');
            if ((focusTarget && focusTarget.focus() !== false) || this._focusOptions()) {
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
};
OpalSelect.defaultDataListItemSchema = defaultDataListItemSchema;
OpalSelect.defaultViewModelItemSchema = defaultVMItemSchema;
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalSelect.prototype, "viewType", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSelect.prototype, "size", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalSelect.prototype, "multiple", void 0);
__decorate([
    rionite_1.Param('dataList'),
    __metadata("design:type", Object)
], OpalSelect.prototype, "paramDataList", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", String)
], OpalSelect.prototype, "dataListKeypath", void 0);
__decorate([
    rionite_1.Param({
        type: eval,
        default: defaultDataListItemSchema,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalSelect.prototype, "dataListItemSchema", void 0);
__decorate([
    rionite_1.Param('value', { type: eval }),
    __metadata("design:type", Array)
], OpalSelect.prototype, "paramValue", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalSelect.prototype, "viewModel", void 0);
__decorate([
    rionite_1.Param({
        type: eval,
        default: defaultVMItemSchema,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalSelect.prototype, "viewModelItemSchema", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Function)
], OpalSelect.prototype, "addNewItem", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalSelect.prototype, "text", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSelect.prototype, "maxTextLength", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSelect.prototype, "placeholder", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalSelect.prototype, "openOnClick", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSelect.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSelect.prototype, "focused", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSelect.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], OpalSelect.prototype, "value", null);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], OpalSelect.prototype, "_buttonText", null);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], OpalSelect.prototype, "options", null);
OpalSelect = OpalSelect_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalSelect',
        template: template_rnt_1.default
    })
], OpalSelect);
exports.OpalSelect = OpalSelect;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
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
const cellx_decorators_1 = __webpack_require__(13);
const rionite_1 = __webpack_require__(14);
__webpack_require__(16);
const template_rnt_1 = __webpack_require__(17);
let OpalSelectOption = class OpalSelectOption extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.selected = false;
        this.indeterminate = false;
        this.tabIndex = 0;
        this.focused = false;
        this.disabled = false;
        this._mouseUpEvent = false;
    }
    get _tabIndex() {
        return this.disabled ? -1 : this.tabIndex;
    }
    elementAttached() {
        this.listenTo(this, {
            'change:selected': this._onSelectedChange,
            'change:indeterminate': this._onIndeterminateChange
        });
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur,
            mouseup: this._onControlMouseUp,
            click: this._onControlClick
        });
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
        this.emit(this.toggle() ? 'select' : 'deselect');
        this.emit('change');
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
__decorate([
    rionite_1.Param('value'),
    __metadata("design:type", String)
], OpalSelectOption.prototype, "paramValue", void 0);
__decorate([
    rionite_1.Param('text', { required: true }),
    __metadata("design:type", String)
], OpalSelectOption.prototype, "paramText", void 0);
__decorate([
    rionite_1.Param('subtext'),
    __metadata("design:type", String)
], OpalSelectOption.prototype, "paramSubtext", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSelectOption.prototype, "selected", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSelectOption.prototype, "indeterminate", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSelectOption.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSelectOption.prototype, "focused", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalSelectOption.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OpalSelectOption.prototype, "_tabIndex", null);
OpalSelectOption = __decorate([
    rionite_1.Component({
        elementIs: 'OpalSelectOption',
        template: template_rnt_1.default
    })
], OpalSelectOption);
exports.OpalSelectOption = OpalSelectOption;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSelectOption{display:block}.OpalSelectOption .OpalSelectOption__control{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:7px 38px 7px 22px;width:100%;border:0;border-radius:0;background:#fff;color:#000;text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalSelectOption .OpalSelectOption__control:hover{background:#e6e6e6}.OpalSelectOption .OpalSelectOption__control:focus{outline:0}.OpalSelectOption .OpalSelectOption__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;-webkit-box-shadow:inset 0 0 0 1px #33a0ff;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.OpalSelectOption .OpalSelectOption__control:active{background:#ccc}.OpalSelectOption .OpalSelectOption__contentSlot{position:relative;display:block;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.OpalSelectOption .OpalSelectOption__contentSlot sub{bottom:0;display:block;color:gray;font-size:.9em;line-height:1.5}.OpalSelectOption .OpalSelectOption__iconSelected,.OpalSelectOption .OpalSelectOption__iconIndeterminate{position:absolute;top:0;right:14px;bottom:0;margin:auto;width:16px;height:16px;color:#000}.OpalSelectOption[selected] .OpalSelectOption__control,.OpalSelectOption[indeterminate] .OpalSelectOption__control{color:#0d87f2}.OpalSelectOption[disabled]{pointer-events:none}.OpalSelectOption[disabled] .OpalSelectOption__control{cursor:default}.OpalSelectOption[disabled] .OpalSelectOption__contentSlot{color:gray}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button:control (tabindex={_tabIndex}) {\nRnSlot:contentSlot {\n'{paramText}'\nsub (@if=paramSubtext) {\n'{paramSubtext}'\n}\n}\nOpalIcon:iconSelected (@if=selected, name=checkmark)\nOpalIcon:iconIndeterminate (@if=indeterminate, name=minus)\n}");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSelect{position:relative;display:inline-block;vertical-align:middle}.OpalSelect .OpalSelect__button{display:block;min-width:100%;text-align:left}.OpalSelect .OpalSelect__button[size=s] .OpalSelect__buttonIcon{margin-left:8px;width:12px;height:12px}.OpalSelect .OpalSelect__button[checked] .OpalSelect__buttonIcon{-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}.OpalSelect .OpalSelect__buttonIcon{position:relative;top:-1px;margin-left:10px;width:14px;height:14px;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;-o-transition:transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear}.OpalSelect:not([view_type=clean]) .OpalSelect__button{padding-right:47px}.OpalSelect:not([view_type=clean]) .OpalSelect__button[size=s]{padding-right:34px}.OpalSelect:not([view_type=clean]) .OpalSelect__button[size=s] .OpalSelect__buttonIcon{right:14px;margin-left:0}.OpalSelect:not([view_type=clean]) .OpalSelect__buttonIcon{position:absolute;top:0;right:23px;bottom:0;margin:auto}.OpalSelect .OpalSelect__newItemInput{display:block;margin:6px 10px 4px;width:auto}.OpalSelect .OpalPopover{padding:6px 0;min-width:140px}.OpalSelect .OpalPopover .OpalPopover__contentSlot{overflow:auto;max-height:380px}.OpalSelect .OpalFilteredList .OpalFilteredList__queryInput{margin:4px 10px 6px}.OpalSelect .OpalModal__contentSlot>.OpalFilteredList .OpalFilteredList__queryInput{margin:0 0 10px}.OpalSelect .OpalLoadedList{height:304px}.OpalSelect .OpalLoader[align_center]{border-top-width:100px;border-bottom-width:100px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isEqualArray(arr1, arr2) {
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
exports.isEqualArray = isEqualArray;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("RnSlot (for=button) {\nOpalButton:button (\nviewType={viewType},\nsize={size},\ncheckable,\ntabIndex={tabIndex},\ndisabled={disabled}\n) {\n@IfThen (text) {\n'{text}'\n}\n@IfElse (text) {\n'{_buttonText}'\n}\nOpalIcon:buttonIcon (name=chevronDown)\n}\n}\nRnSlot (for=menuSlot) {\nRnSlot:menuSlot (for=menu) {\nOpalDropdown:menu (closeOn=mousedown) {\nRnSlot (for=menuHeader)\nRnSlot (for=menuContent) {\ndiv::menuContent (@if=_isParamDataListSpecified) {\n@IfThen (dataList) {\n@Repeat (for=item in dataList, trackBy={=_dataListItemValueFieldName}) {\nOpalSelectOption:option (\nvalue='{=item |key(_dataListItemValueFieldName) }',\ntext='{=item |key(_dataListItemTextFieldName) }',\nsubtext='{=item |key(_dataListItemSubtextFieldName) }',\ndisabled='{=item |key(_dataListItemDisabledFieldName) }'\n)\n}\nRnSlot:newItemInputSlot // ...\n}\nOpalLoader:menuLoader (@unless=dataList, shown)\n}\ndiv::menuContent (@unless=_isParamDataListSpecified) {\nRnSlot:options (forTag=opal-select-option)\nRnSlot (for=newItemInputSlot) {\nRnSlot:newItemInputSlot (for=newItemInput)\n}\n}\n}\nRnSlot (for=menuFooter)\n}\n}\n}");

/***/ })
/******/ ]);
});