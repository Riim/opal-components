(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"), require("cellx"), require("@riim/next-tick"), require("@riim/gettext"), require("@riim/opal-utils"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "cellx-decorators", "cellx", "@riim/next-tick", "@riim/gettext", "@riim/opal-utils"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-select"] = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"), require("cellx"), require("@riim/next-tick"), require("@riim/gettext"), require("@riim/opal-utils"));
	else
		root["@riim/opal-select"] = factory(root["rionite"], root["reflect-metadata"], root["cellx-decorators"], root["cellx"], root["@riim/next-tick"], root["@riim/gettext"], root["@riim/opal-utils"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 189);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
__export(__webpack_require__(190));


/***/ }),

/***/ 190:
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
var gettext_1 = __webpack_require__(5);
var next_tick_1 = __webpack_require__(4);
var opal_utils_1 = __webpack_require__(6);
var cellx_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
var OpalSelectOption_1 = __webpack_require__(191);
exports.OpalSelectOption = OpalSelectOption_1.OpalSelectOption;
__webpack_require__(194);
var isEqualArray_1 = __webpack_require__(195);
var template_nelm_1 = __webpack_require__(196);
var map = Array.prototype.map;
var defaultDataListItemSchema = Object.freeze({
    value: 'value',
    text: 'text',
    subtext: 'subtext',
    disabled: 'disabled'
});
var defaultVMItemSchema = Object.freeze({
    value: 'value',
    text: 'text',
    subtext: 'subtext',
    disabled: 'disabled'
});
var OpalSelect = /** @class */ (function (_super) {
    __extends(OpalSelect, _super);
    function OpalSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramSize = 'm';
        _this.paramMultiple = false;
        _this.paramMaxTextLength = 20;
        _this.paramPlaceholder = gettext_1.getText.t('Не выбрано');
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        _this._needOptionsUpdating = false;
        _this._notUpdateOptions = false;
        _this._opened = false;
        _this._onсeFocusedAfterLoading = false;
        return _this;
    }
    OpalSelect_1 = OpalSelect;
    Object.defineProperty(OpalSelect.prototype, "value", {
        get: function () {
            var _this = this;
            return this.viewModel.map(function (item) { return item[_this._viewModelItemValueFieldName]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelect.prototype, "_buttonText", {
        get: function () {
            var _this = this;
            var text = this.viewModel
                .map(function (item) { return item[_this._viewModelItemTextFieldName]; })
                .join(', ');
            if (!text) {
                return this.paramPlaceholder;
            }
            if (text.length > this.paramMaxTextLength) {
                text = gettext_1.getText.nt('Выбран{n:|о|о} {n}', this.viewModel.length);
            }
            return text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelect.prototype, "options", {
        get: function () {
            return map.call(this.optionElements, function (option) { return option.$component; });
        },
        enumerable: true,
        configurable: true
    });
    OpalSelect.prototype.initialize = function () {
        var _this = this;
        if (this.paramDataListKeypath) {
            cellx_1.define(this, 'dataList', new cellx_1.Cell(Function("return this." + this.paramDataListKeypath + ";"), {
                context: this.ownerComponent || window
            }));
            this._isParamDataListSpecified = true;
        }
        else if (this.$specifiedParams && this.$specifiedParams.has('dataList')) {
            cellx_1.define(this, 'dataList', function () { return _this.paramDataList; });
            this._isParamDataListSpecified = true;
        }
        else {
            this.dataList = null;
            this._isParamDataListSpecified = false;
        }
        var dataListItemSchema = this.paramDataListItemSchema;
        var defaultDataListItemSchema = this.constructor
            .defaultDataListItemSchema;
        this._dataListItemValueFieldName =
            dataListItemSchema.value || defaultDataListItemSchema.value;
        this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
        this._dataListItemSubtextFieldName =
            dataListItemSchema.subtext || defaultDataListItemSchema.subtext;
        this._dataListItemDisabledFieldName =
            dataListItemSchema.disabled || defaultDataListItemSchema.disabled;
        this.viewModel = this.paramViewModel || new cellx_1.ObservableList();
        var vmItemSchema = this.paramViewModelItemSchema;
        var defaultVMItemSchema = this.constructor
            .defaultViewModelItemSchema;
        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
        this._viewModelItemSubtextFieldName = vmItemSchema.subtext || defaultVMItemSchema.subtext;
        this._viewModelItemDisabledFieldName =
            vmItemSchema.disabled || defaultVMItemSchema.disabled;
        this._addNewItem = this.paramAddNewItem;
    };
    OpalSelect.prototype.ready = function () {
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
    };
    OpalSelect.prototype._initViewModel = function () {
        var _this = this;
        var value = this.paramValue;
        var selectedOptions;
        if (value) {
            if (!Array.isArray(value)) {
                throw new TypeError('Parameter "value" must be an array');
            }
            this._notUpdateOptions = true;
            this.viewModel.clear();
            if (value.length) {
                if (this.paramMultiple) {
                    selectedOptions = this.options.filter(function (option) { return value.indexOf(option.value) != -1; });
                }
                else {
                    value = value[0];
                    var selectedOption = this.options.find(function (option) { return option.value == value; });
                    if (selectedOption) {
                        selectedOptions = [selectedOption];
                    }
                }
            }
        }
        else if (this.paramMultiple) {
            selectedOptions = this.options.filter(function (option) { return option.selected; });
        }
        else {
            var selectedOption = this.options.find(function (option) { return option.selected; });
            if (selectedOption) {
                selectedOptions = [selectedOption];
            }
        }
        if (selectedOptions && selectedOptions.length) {
            this._notUpdateOptions = true;
            this.viewModel.addRange(selectedOptions.map(function (option) {
                return (_a = {},
                    _a[_this._viewModelItemValueFieldName] = option.value,
                    _a[_this._viewModelItemTextFieldName] = option.text,
                    _a[_this._viewModelItemSubtextFieldName] = option.subtext,
                    _a);
                var _a;
            }));
        }
        this._notUpdateOptions = false;
        if (value) {
            this._updateOptions();
        }
    };
    OpalSelect.prototype.elementAttached = function () {
        if (this.paramFocused) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this.focus();
        }
        this.listenTo(this, {
            'change:paramValue': this._onParamValueChange,
            'change:paramFocused': this._onParamFocusedChange
        });
        this.listenTo(this.viewModel, 'change', this._onViewModelChange);
        this.listenTo('button', {
            focus: this._onButtonFocus,
            blur: this._onButtonBlur,
            click: this._onButtonClick
        });
        this.listenTo('menu', {
            'change:paramOpened': this._onMenuParamOpenedChange,
            '<OpalSelectOption>select': this._onMenuSelectOptionSelect,
            '<OpalSelectOption>deselect': this._onMenuSelectOptionDeselect,
            '<OpalButton>click': this._onMenuButtonClick,
            '<OpalTextInput>confirm': this._onMenuTextInputConfirm,
            '<*>change': this._onMenuChange
        });
    };
    OpalSelect.prototype._onParamValueChange = function (evt) {
        var vm = this.viewModel;
        var value = evt.data.value;
        if (value) {
            if (!Array.isArray(value)) {
                throw new TypeError('Parameter "value" must be an array');
            }
            if (value.length) {
                var multiple = this.paramMultiple;
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
    };
    OpalSelect.prototype._updateViewModel = function (value, multiple) {
        var vm = this.viewModel;
        var vmItemValueFieldName = this._viewModelItemValueFieldName;
        var vmItemTextFieldName = this._viewModelItemTextFieldName;
        var vmItemSubtextFieldName = this._viewModelItemSubtextFieldName;
        if (multiple) {
            this.options.forEach(function (option) {
                var optionValue = option.value;
                var itemIndex = vm.findIndex(function (item) { return item[vmItemValueFieldName] == optionValue; });
                if (value.indexOf(optionValue) == -1) {
                    if (itemIndex != -1) {
                        vm.removeAt(itemIndex);
                    }
                }
                else if (itemIndex == -1) {
                    vm.add((_a = {},
                        _a[vmItemValueFieldName] = optionValue,
                        _a[vmItemTextFieldName] = option.text,
                        _a[vmItemSubtextFieldName] = option.subtext,
                        _a));
                }
                var _a;
            });
        }
        else {
            value = value[0];
            if (!this.options.some(function (option) {
                if (option.value != value) {
                    return false;
                }
                vm.set(0, (_a = {},
                    _a[vmItemValueFieldName] = value,
                    _a[vmItemTextFieldName] = option.text,
                    _a[vmItemSubtextFieldName] = option.subtext,
                    _a));
                return true;
                var _a;
            })) {
                vm.clear();
            }
        }
    };
    OpalSelect.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
            if (!this._documentKeyDownListening) {
                this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            }
            this.focus();
            this.emit('focus');
        }
        else {
            if (!this._opened) {
                this._documentKeyDownListening.stop();
                this._documentKeyDownListening = null;
            }
            this.blur();
            this.emit('blur');
        }
    };
    OpalSelect.prototype._onViewModelChange = function () {
        if (!this._needOptionsUpdating && !this._notUpdateOptions) {
            this._updateOptions();
        }
    };
    OpalSelect.prototype._onButtonFocus = function () {
        this.paramFocused = true;
    };
    OpalSelect.prototype._onButtonBlur = function () {
        this.paramFocused = false;
    };
    OpalSelect.prototype._onButtonClick = function (evt) {
        if (evt.target.checked) {
            this.open();
        }
        else {
            this.close();
        }
    };
    OpalSelect.prototype._onMenuParamOpenedChange = function (evt) {
        if (!evt.data.value) {
            this.close();
        }
        return false;
    };
    OpalSelect.prototype._onMenuSelectOptionSelect = function (evt) {
        var vm = this.viewModel;
        var vmItem = (_a = {},
            _a[this._viewModelItemValueFieldName] = evt.target.value,
            _a[this._viewModelItemTextFieldName] = evt.target.text,
            _a[this._viewModelItemTextFieldName] = evt.target.text,
            _a);
        if (this.paramMultiple) {
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
        var _a;
    };
    OpalSelect.prototype._onMenuSelectOptionDeselect = function (evt) {
        if (this.paramMultiple) {
            var value_1 = evt.target.value;
            this._notUpdateOptions = true;
            this.viewModel.removeAt(this.viewModel.findIndex(function (item) { return item.value == value_1; }));
            this._notUpdateOptions = false;
        }
        else {
            evt.target.select();
            this.close();
            this.focus();
        }
        this.emit('deselect');
        return false;
    };
    OpalSelect.prototype._onMenuButtonClick = function (evt) {
        var _this = this;
        var button = evt.target;
        if (button !== this.$('btn-add-new-item')) {
            return;
        }
        if (!this._addNewItem) {
            throw new TypeError('Parameter "addNewItem" is required');
        }
        var text = button.element.dataset.newItemText;
        button.paramLoading = true;
        button.disable();
        this._addNewItem(text).then(function (newItem) {
            button.paramLoading = false;
            button.enable();
            _this._embedNewItem(newItem);
        }, function () {
            button.paramLoading = false;
            button.enable();
        });
        return false;
    };
    OpalSelect.prototype._onMenuTextInputConfirm = function (evt) {
        var _this = this;
        var textInput = evt.target;
        if (textInput !== this.$('new-item-input')) {
            return;
        }
        if (!this._addNewItem) {
            throw new TypeError('Parameter "addNewItem" is required');
        }
        var text = textInput.value;
        textInput.clear();
        textInput.paramLoading = true;
        textInput.disable();
        this._addNewItem(text).then(function (newItem) {
            textInput.paramLoading = false;
            textInput.enable();
            _this._embedNewItem(newItem);
        }, function () {
            textInput.paramLoading = false;
            textInput.enable();
        });
        return false;
    };
    OpalSelect.prototype._embedNewItem = function (newItem) {
        var value = newItem[this._viewModelItemValueFieldName];
        var text = newItem[this._viewModelItemTextFieldName];
        var subtext = newItem[this._viewModelItemDisabledFieldName];
        if (this.dataList) {
            this.dataList.add((_a = {},
                _a[this._dataListItemValueFieldName] = value,
                _a[this._dataListItemTextFieldName] = text,
                _a[this._dataListItemSubtextFieldName] = subtext,
                _a));
        }
        var loadedList = this.$('loaded-list');
        if (loadedList) {
            loadedList.paramQuery = '';
        }
        var vm = this.viewModel;
        var vmItem = (_b = {},
            _b[this._viewModelItemValueFieldName] = value,
            _b[this._viewModelItemTextFieldName] = text,
            _b[this._dataListItemSubtextFieldName] = subtext,
            _b);
        if (this.paramMultiple) {
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
        var _a, _b;
    };
    OpalSelect.prototype._onMenuChange = function (evt) {
        if (!this._notUpdateOptions &&
            (evt.target instanceof rionite_1.RtIfThen || evt.target instanceof rionite_1.RtRepeat)) {
            this.optionsCell.pull();
            this._updateOptions();
        }
    };
    OpalSelect.prototype.open = function () {
        var _this = this;
        if (this._opened) {
            return false;
        }
        this._opened = true;
        this._valueOnOpen = this.viewModel.map(function (item) { return item[_this._viewModelItemValueFieldName]; });
        this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
        if (!this._documentKeyDownListening) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
        }
        this.$('button').check();
        this._notUpdateOptions = true;
        this.$('menu').open();
        this._notUpdateOptions = false;
        if (this._needOptionsUpdating) {
            this._needOptionsUpdating = false;
            this._updateOptions();
        }
        var loadedList = this.$('loaded-list');
        if (loadedList) {
            loadedList.checkLoading();
        }
        var focusTarget = this.$('focus');
        if (focusTarget) {
            focusTarget.focus();
        }
        else {
            var filteredList = this.$('filtered-list');
            if (filteredList) {
                focusTarget = filteredList.$('query-input');
            }
            if (focusTarget) {
                focusTarget.focus();
            }
            else {
                this._focusOptions();
            }
        }
        return true;
    };
    OpalSelect.prototype.close = function () {
        var _this = this;
        if (!this._opened) {
            return false;
        }
        this._opened = false;
        this._documentFocusListening.stop();
        if (!this.paramFocused) {
            this._documentKeyDownListening.stop();
            this._documentKeyDownListening = null;
        }
        this.$('button').uncheck();
        this.$('menu').close();
        if (this.paramMultiple) {
            if (!isEqualArray_1.isEqualArray(this.viewModel.map(function (item) { return item[_this._viewModelItemValueFieldName]; }), this._valueOnOpen)) {
                this.emit('change');
            }
        }
        return true;
    };
    OpalSelect.prototype.toggle = function (value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
    };
    OpalSelect.prototype._onDocumentFocus = function (evt) {
        if (!opal_utils_1.isFocusable(evt.target)) {
            return;
        }
        if (!this.element.contains(evt.target.parentNode)) {
            this.close();
        }
    };
    OpalSelect.prototype._onDocumentKeyDown = function (evt) {
        switch (evt.which) {
            case 32 /* Space */: {
                if (this._opened) {
                    if (this.paramFocused) {
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
                            document.body.classList.remove('_no-focus-highlight');
                        }
                    }
                    else {
                        var options = this.options;
                        for (var i = 1, l = options.length; i < l; i++) {
                            if (options[i].paramFocused) {
                                do {
                                    var option = options[--i];
                                    if (!option.paramDisabled && option.element.offsetWidth) {
                                        document.body.classList.remove('_no-focus-highlight');
                                        option.focus();
                                        break;
                                    }
                                } while (i);
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
                            document.body.classList.remove('_no-focus-highlight');
                        }
                    }
                    else {
                        var options = this.options;
                        for (var i = 0, l = options.length - 1; i < l; i++) {
                            if (options[i].paramFocused) {
                                do {
                                    var option = options[++i];
                                    if (!option.paramDisabled && option.element.offsetWidth) {
                                        document.body.classList.remove('_no-focus-highlight');
                                        option.focus();
                                        break;
                                    }
                                } while (i < l);
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
    };
    OpalSelect.prototype._updateOptions = function () {
        var vm = this.viewModel;
        var vmItemValueFieldName = this._viewModelItemValueFieldName;
        var vmItemDisabledFieldName = this._viewModelItemDisabledFieldName;
        this.options.forEach(function (option) {
            var value = option.value;
            var item = vm.find(function (item) { return item[vmItemValueFieldName] == value; });
            if (item) {
                option.selected = true;
                option.disabled = item[vmItemDisabledFieldName];
            }
            else {
                option.selected = false;
            }
        });
    };
    OpalSelect.prototype._focusOptions = function () {
        var options = this.options;
        var optionForFocus;
        for (var i = 0, l = options.length; i < l; i++) {
            var option = options[i];
            if (!option.paramDisabled) {
                if (option.selected) {
                    optionForFocus = option;
                    break;
                }
                if (!optionForFocus) {
                    optionForFocus = option;
                }
            }
        }
        if (optionForFocus) {
            optionForFocus.focus();
            return true;
        }
        return false;
    };
    OpalSelect.prototype.focus = function () {
        this.$('button').focus();
        return this;
    };
    OpalSelect.prototype.blur = function () {
        this.$('button').blur();
        return this;
    };
    OpalSelect.defaultDataListItemSchema = defaultDataListItemSchema;
    OpalSelect.defaultViewModelItemSchema = defaultVMItemSchema;
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalSelect.prototype, "paramViewType", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSelect.prototype, "paramSize", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalSelect.prototype, "paramMultiple", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSelect.prototype, "paramDataList", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", String)
    ], OpalSelect.prototype, "paramDataListKeypath", void 0);
    __decorate([
        rionite_1.Param({ type: eval, default: defaultDataListItemSchema, readonly: true }),
        __metadata("design:type", Object)
    ], OpalSelect.prototype, "paramDataListItemSchema", void 0);
    __decorate([
        rionite_1.Param({ type: eval }),
        __metadata("design:type", Array)
    ], OpalSelect.prototype, "paramValue", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalSelect.prototype, "paramViewModel", void 0);
    __decorate([
        rionite_1.Param({ type: eval, default: defaultVMItemSchema, readonly: true }),
        __metadata("design:type", Object)
    ], OpalSelect.prototype, "paramViewModelItemSchema", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Function)
    ], OpalSelect.prototype, "paramAddNewItem", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalSelect.prototype, "paramText", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSelect.prototype, "paramMaxTextLength", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSelect.prototype, "paramPlaceholder", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSelect.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSelect.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSelect.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalSelect.prototype, "viewModel", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
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
            template: template_nelm_1.default,
            events: {
                'menu-slot': {
                    '<*>loaded': function (evt) {
                        if (this._onсeFocusedAfterLoading || evt.target !== this.$('loaded-list')) {
                            return;
                        }
                        this._onсeFocusedAfterLoading = true;
                        this._focusOptions();
                        var focusTarget = this.$('focus');
                        if (!focusTarget) {
                            var filteredList = this.$('filtered-list');
                            if (filteredList) {
                                focusTarget = filteredList.$('query-input');
                            }
                        }
                        if (focusTarget) {
                            next_tick_1.nextTick(function () {
                                focusTarget.focus();
                            });
                        }
                    }
                }
            }
        })
    ], OpalSelect);
    return OpalSelect;
    var OpalSelect_1;
}(rionite_1.BaseComponent));
exports.OpalSelect = OpalSelect;


/***/ }),

/***/ 191:
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
var next_tick_1 = __webpack_require__(4);
var cellx_decorators_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
__webpack_require__(192);
var template_nelm_1 = __webpack_require__(193);
var OpalSelectOption = /** @class */ (function (_super) {
    __extends(OpalSelectOption, _super);
    function OpalSelectOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramSelected = false;
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        return _this;
    }
    Object.defineProperty(OpalSelectOption.prototype, "_tabIndex", {
        get: function () {
            return this.paramDisabled ? -1 : this.paramTabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalSelectOption.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramFocused', this._onParamFocusedChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur,
            click: this._onControlClick
        });
    };
    OpalSelectOption.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalSelectOption.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.paramFocused = true;
            }
        });
    };
    OpalSelectOption.prototype._onControlBlur = function () {
        this.paramFocused = false;
    };
    OpalSelectOption.prototype._onControlClick = function (evt) {
        evt.preventDefault();
        if (!this.paramDisabled) {
            this.click();
        }
    };
    OpalSelectOption.prototype.click = function () {
        this.emit(this.toggle() ? 'select' : 'deselect');
        this.emit('change');
        return this;
    };
    Object.defineProperty(OpalSelectOption.prototype, "value", {
        get: function () {
            return this.paramValue === null ? this.paramText : this.paramValue;
        },
        set: function (value) {
            this.paramValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelectOption.prototype, "text", {
        get: function () {
            return this.paramText.trim() || '—';
        },
        set: function (text) {
            this.paramText = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelectOption.prototype, "subtext", {
        get: function () {
            return this.paramSubtext && this.paramSubtext.trim();
        },
        set: function (subtext) {
            this.paramSubtext = subtext;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelectOption.prototype, "selected", {
        get: function () {
            return this.paramSelected;
        },
        set: function (selected) {
            this.paramSelected = selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelectOption.prototype, "disabled", {
        get: function () {
            return this.paramDisabled;
        },
        set: function (disabled) {
            this.paramDisabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    OpalSelectOption.prototype.select = function () {
        if (!this.paramSelected) {
            this.paramSelected = true;
            return true;
        }
        return false;
    };
    OpalSelectOption.prototype.deselect = function () {
        if (this.paramSelected) {
            this.paramSelected = false;
            return true;
        }
        return false;
    };
    OpalSelectOption.prototype.toggle = function (value) {
        return (this.paramSelected = value === undefined ? !this.paramSelected : value);
    };
    OpalSelectOption.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalSelectOption.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalSelectOption.prototype.enable = function () {
        this.paramDisabled = false;
        return this;
    };
    OpalSelectOption.prototype.disable = function () {
        this.paramDisabled = true;
        return this;
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalSelectOption.prototype, "paramValue", void 0);
    __decorate([
        rionite_1.Param({ required: true }),
        __metadata("design:type", String)
    ], OpalSelectOption.prototype, "paramText", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalSelectOption.prototype, "paramSubtext", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSelectOption.prototype, "paramSelected", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSelectOption.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSelectOption.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSelectOption.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalSelectOption.prototype, "_tabIndex", null);
    OpalSelectOption = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalSelectOption);
    return OpalSelectOption;
}(rionite_1.BaseComponent));
exports.OpalSelectOption = OpalSelectOption;


/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSelectOption{display:block}.OpalSelectOption .OpalSelectOption__control{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:7px 38px 7px 22px;width:100%;border:0;border-radius:0;background:#fff;color:#000;text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalSelectOption .OpalSelectOption__control:hover{background:#e6e6e6}.OpalSelectOption .OpalSelectOption__control:focus{outline:0}.OpalSelectOption .OpalSelectOption__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;-webkit-box-shadow:inset 0 0 0 1px #33a0ff;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.OpalSelectOption .OpalSelectOption__control:active{background:#ccc}.OpalSelectOption .OpalSelectOption__content-slot{position:relative;display:block;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.OpalSelectOption .OpalSelectOption__content-slot sub{bottom:0;display:block;font-size:.9em;line-height:1.5;opacity:.5}.OpalSelectOption .OpalSelectOption__icon-check{position:absolute;top:0;right:14px;bottom:0;display:none;margin:auto;width:16px;height:16px}.OpalSelectOption[selected] .OpalSelectOption__control{color:#0d87f2}.OpalSelectOption[selected] .OpalSelectOption__icon-check{display:block}.OpalSelectOption[disabled]{opacity:.5;pointer-events:none}.OpalSelectOption[disabled] .OpalSelectOption__control{cursor:default}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nbutton/control (tabindex={_tabIndex}) {\nRtSlot/content-slot {\n'{paramText}'\n@IfThen (if=paramSubtext) {\nsub {\n'{paramSubtext}'\n}\n}\n}\nOpalIcon/icon-check (name=checkmark)\n}\n}");

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSelect{position:relative;display:inline-block;vertical-align:middle}.OpalSelect .OpalSelect__button{display:block;min-width:100%;text-align:left}.OpalSelect .OpalSelect__button[size=s] .OpalSelect__button-icon{margin-left:8px;width:12px;height:12px}.OpalSelect .OpalSelect__button[checked] .OpalSelect__button-icon{-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}.OpalSelect .OpalSelect__button-icon{position:relative;top:-1px;margin-left:10px;width:14px;height:14px;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;-o-transition:transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear}.OpalSelect:not([view-type=clean]) .OpalSelect__button{padding-right:47px}.OpalSelect:not([view-type=clean]) .OpalSelect__button[size=s]{padding-right:34px}.OpalSelect:not([view-type=clean]) .OpalSelect__button[size=s] .OpalSelect__button-icon{right:14px;margin-left:0}.OpalSelect:not([view-type=clean]) .OpalSelect__button-icon{position:absolute;top:0;right:23px;bottom:0;margin:auto}.OpalSelect .OpalSelect__new-item-input{display:block;margin:6px 10px 4px;width:auto}.OpalSelect .OpalPopover{padding:6px 0;min-width:140px}.OpalSelect .OpalPopover .OpalPopover__content{overflow:auto;max-height:380px}.OpalSelect .OpalFilteredList .OpalFilteredList__query-input{margin:4px 10px 6px}.OpalSelect .OpalModal__content>.OpalFilteredList .OpalFilteredList__query-input{margin:0 0 10px}.OpalSelect .OpalLoadedList{height:304px}.OpalSelect .OpalLoader[align-center]{border-top-width:100px;border-bottom-width:100px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isEqualArray(arr1, arr2) {
    var len = arr1.length;
    if (len != arr2.length) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
exports.isEqualArray = isEqualArray;


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot (for=button) {\nOpalButton/button (\nview-type={paramViewType},\nsize={paramSize},\ncheckable,\ntab-index={paramTabIndex},\ndisabled={paramDisabled}\n) {\n@IfThen (if=paramText) {\n'{paramText}'\n}\n@IfElse (if=paramText) {\n'{_buttonText}'\n}\nOpalIcon/button-icon (name=chevronBottom)\n}\n}\nRtSlot (for=menu-slot) {\nRtSlot/menu-slot (for=menu) {\nOpalDropdown/menu (auto-closing) {\nRtSlot (for=menu-content) {\n@IfThen (if=_isParamDataListSpecified) {\ndiv/, menu-content {\n@IfThen (if=dataList) {\n@Repeat (for=item of dataList, track-by={_dataListItemValueFieldName}) {\nOpalSelectOption/option (\nvalue='{item |key(_dataListItemValueFieldName) }',\ntext='{item |key(_dataListItemTextFieldName) }',\nsubtext='{item |key(_dataListItemSubtextFieldName) }',\ndisabled='{item |key(_dataListItemDisabledFieldName) }'\n)\n}\nRtSlot/new-item-input-slot // ...\n}\n@IfElse (if=dataList) {\nOpalLoader/menu-loader (shown)\n}\n}\n}\n@IfElse (if=_isParamDataListSpecified) {\ndiv/, menu-content {\nRtSlot/options (for-tag=opal-select-option)\nRtSlot (for=new-item-input-slot) {\nRtSlot/new-item-input-slot (for=new-item-input)\n}\n}\n}\n}\n}\n}\n}\n}");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ })

/******/ });
});