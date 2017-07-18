(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"), require("cellx-indexed-collections"), require("created-browser-history"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx", "cellx-indexed-collections", "created-browser-history"], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("rionite"), require("cellx"), require("cellx-indexed-collections"), require("created-browser-history"));
	else
		root["index"] = factory(root["rionite"], root["cellx"], root["cellx-indexed-collections"], root["created-browser-history"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_101__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFocusable(el) {
    if (el.hasAttribute('tabindex')) {
        return el.tabIndex >= 0;
    }
    switch (el.tagName) {
        case 'a':
        case 'area': {
            return el.hasAttribute('href') && el.tabIndex >= 0;
        }
        case 'button':
        case 'input':
        case 'textarea':
        case 'select': {
            return !el.hasAttribute('disabled') && el.tabIndex >= 0;
        }
        case 'iframe':
        case 'object':
        case 'embed': {
            return el.tabIndex >= 0;
        }
    }
    return el.hasAttribute('contenteditable') && el.tabIndex >= 0;
}
exports.isFocusable = isFocusable;


/***/ }),
/* 3 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var cellx_indexed_collections_1 = __webpack_require__(4);
var rionite_1 = __webpack_require__(0);
__webpack_require__(54);
var isFocusable_1 = __webpack_require__(2);
__webpack_require__(55);
var isEqualArray_1 = __webpack_require__(56);
var opal_select_option_1 = __webpack_require__(57);
exports.OpalSelectOption = opal_select_option_1.OpalSelectOption;
var template = __webpack_require__(61);
var nextTick = cellx_1.Utils.nextTick;
var RtIfThen = rionite_1.Components.RtIfThen, RtRepeat = rionite_1.Components.RtRepeat;
var map = Array.prototype.map;
var defaultDataListItemSchema = { value: 'value', text: 'text', disabled: 'disabled' };
var defaultVMItemSchema = { value: 'value', text: 'text', disabled: 'disabled' };
var OpalSelect = (function (_super) {
    __extends(OpalSelect, _super);
    function OpalSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._opened = false;
        _this._onсeFocusedAfterLoading = false;
        return _this;
    }
    OpalSelect.prototype.initialize = function () {
        var input = this.input;
        if (input.datalistKeypath) {
            var context_1 = this.ownerComponent || window;
            var getDataList_1 = Function("return this." + input.datalistKeypath + ";");
            cellx_1.define(this, 'dataList', function () {
                return getDataList_1.call(context_1);
            });
            var dataListItemSchema = input.datalistItemSchema;
            this._dataListItemValueFieldName = dataListItemSchema.value || defaultDataListItemSchema.value;
            this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
            this._dataListItemDisabledFieldName = dataListItemSchema.disabled || defaultDataListItemSchema.disabled;
        }
        else {
            this.dataList = null;
        }
        var vmItemSchema = input.viewModelItemSchema;
        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
        this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;
        var vm;
        if (input.viewModelKeypath) {
            vm = Function("return this." + input.viewModelKeypath + ";").call(this.ownerComponent || window);
            if (!vm) {
                throw new TypeError('"viewModel" is not defined');
            }
        }
        else {
            vm = new cellx_indexed_collections_1.IndexedList(undefined, { indexes: [this._viewModelItemValueFieldName] });
        }
        cellx_1.define(this, {
            viewModel: vm,
            options: function () {
                return this.optionElements ?
                    map.call(this.optionElements, function (option) { return option.$component; }) :
                    [];
            },
            text: function () {
                var _this = this;
                var text = this.viewModel.map(function (item) { return item[_this._viewModelItemTextFieldName]; }).join(', ');
                if (!text) {
                    return this.input.placeholder;
                }
                if (text.length > this.input.maxTextLength) {
                    text = rionite_1.getText.nt('Выбран{n:|о|о} {n}', this.viewModel.length);
                }
                return text;
            }
        });
    };
    OpalSelect.prototype.ready = function () {
        var _this = this;
        this.optionElements = this.element.getElementsByClassName('opal-select-option');
        var input = this.input;
        if (input.viewModel) {
            this._updateOptions();
        }
        else {
            var value_1 = input.value;
            var selectedOptions = void 0;
            if (value_1) {
                if (!Array.isArray(value_1)) {
                    throw new TypeError('value must be an array');
                }
                if (value_1.length) {
                    if (input.multiple) {
                        selectedOptions = this.options.filter(function (option) { return value_1.indexOf(option.value) != -1; });
                    }
                    else {
                        value_1 = value_1[0];
                        var selectedOption = this.options
                            .find(function (option) { return option.value == value_1; });
                        selectedOptions = selectedOption ? [selectedOption] : [];
                    }
                }
                else {
                    selectedOptions = [];
                }
            }
            else {
                if (input.multiple) {
                    selectedOptions = this.options.filter(function (option) { return option.selected; });
                }
                else {
                    var selectedOption = this.options.find(function (option) { return option.selected; });
                    selectedOptions = selectedOption ? [selectedOption] : [];
                }
            }
            if (selectedOptions.length) {
                this.viewModel.addRange(selectedOptions.map(function (option) {
                    return (_a = {},
                        _a[_this._viewModelItemValueFieldName] = option.value,
                        _a[_this._viewModelItemTextFieldName] = option.text,
                        _a);
                    var _a;
                }));
            }
            if (value_1) {
                this._updateOptions();
            }
        }
    };
    OpalSelect.prototype.elementAttached = function () {
        this.listenTo(this, {
            'input-value-change': this._onInputValueChange,
            'input-focused-change': this._onInputFocusedChange
        });
        this.listenTo(this.viewModel, 'change', this._onViewModelChange);
    };
    OpalSelect.prototype._onInputValueChange = function (evt) {
        var vm = this.viewModel;
        var value = evt.value;
        if (value) {
            if (!Array.isArray(value)) {
                throw new TypeError('value must be an array');
            }
            if (value.length) {
                var vmItemValueFieldName_1 = this._viewModelItemValueFieldName;
                var vmItemTextFieldName_1 = this._viewModelItemTextFieldName;
                if (this.input.multiple) {
                    this.options.forEach(function (option) {
                        var optionValue = option.value;
                        if (value.indexOf(optionValue) != -1) {
                            if (!vm.contains(optionValue, vmItemValueFieldName_1)) {
                                vm.add((_a = {},
                                    _a[vmItemValueFieldName_1] = optionValue,
                                    _a[vmItemTextFieldName_1] = option.text,
                                    _a));
                            }
                        }
                        else {
                            var item = vm.get(optionValue, vmItemValueFieldName_1);
                            if (item) {
                                vm.remove(item);
                            }
                        }
                        var _a;
                    });
                }
                else {
                    value = value[0];
                    if (!vm.length || value != vm.get(0)[vmItemValueFieldName_1]) {
                        if (!this.options.some(function (option) {
                            if (option.value != value) {
                                return false;
                            }
                            vm.set(0, (_a = {},
                                _a[vmItemValueFieldName_1] = value,
                                _a[vmItemTextFieldName_1] = option.text,
                                _a));
                            return true;
                            var _a;
                        }) && vm.length) {
                            vm.clear();
                        }
                    }
                }
            }
            else {
                vm.clear();
            }
        }
        else {
            vm.clear();
        }
    };
    OpalSelect.prototype._onInputFocusedChange = function (evt) {
        if (evt.value) {
            if (!this._documentKeyDownListening) {
                this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            }
            this.focus();
        }
        else {
            if (!this._opened) {
                this._documentKeyDownListening.stop();
                this._documentKeyDownListening = null;
            }
            this.blur();
        }
    };
    OpalSelect.prototype._onViewModelChange = function () {
        this._updateOptions();
    };
    OpalSelect.prototype._updateOptions = function () {
        var _this = this;
        var vm = this.viewModel;
        this.options.forEach(function (option) {
            var item = vm.get(option.value, _this._viewModelItemValueFieldName);
            if (item) {
                option.selected = true;
                option.disabled = item[_this._viewModelItemDisabledFieldName];
            }
            else {
                option.selected = false;
            }
        });
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
        this.$('menu').open();
        var loadedList = this.$('loaded-list');
        if (loadedList) {
            nextTick(function () {
                loadedList.checkLoading();
            });
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
        if (!this.input.focused) {
            this._documentKeyDownListening.stop();
            this._documentKeyDownListening = null;
        }
        this.$('button').uncheck();
        this.$('menu').close();
        if (this.input.multiple) {
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
        if (!isFocusable_1.isFocusable(evt.target)) {
            return;
        }
        if (!this.element.contains(evt.target.parentNode)) {
            this.close();
        }
    };
    OpalSelect.prototype._onDocumentKeyDown = function (evt) {
        switch (evt.which) {
            case 32 /* Space */: {
                evt.preventDefault();
                if (this._opened) {
                    if (this.input.focused) {
                        this.close();
                    }
                }
                else {
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
                            if (options[i].input.focused) {
                                do {
                                    var option = options[--i];
                                    if (!option.input.disabled) {
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
                            if (options[i].input.focused) {
                                do {
                                    var option = options[++i];
                                    if (!option.input.disabled) {
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
    OpalSelect.prototype._focusOptions = function () {
        var options = this.options;
        var optionForFocus;
        for (var i = 0, l = options.length; i < l; i++) {
            var option = options[i];
            if (!option.input.disabled) {
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
    OpalSelect.OpalSelectOption = opal_select_option_1.OpalSelectOption;
    OpalSelect.defaultDataListItemSchema = defaultDataListItemSchema;
    OpalSelect.defaultVMItemSchema = defaultVMItemSchema;
    OpalSelect = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-select',
            input: {
                viewType: String,
                size: 'm',
                multiple: { default: false, readonly: true },
                datalistKeypath: { type: String, readonly: true },
                datalistItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
                addNewItemKeypath: { type: String, readonly: true },
                value: eval,
                viewModelKeypath: { type: String, readonly: true },
                viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
                text: String,
                maxTextLength: 20,
                placeholder: rionite_1.getText.t('Не выбрано'),
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template,
            oevents: {
                button: {
                    focus: function () {
                        this.input.focused = true;
                        this.emit('focus');
                    },
                    blur: function () {
                        this.input.focused = false;
                        this.emit('blur');
                    },
                    click: function (evt) {
                        if (evt.target.checked) {
                            this.open();
                        }
                        else {
                            this.close();
                        }
                    }
                },
                menu: {
                    'input-opened-change': function (evt) {
                        if (!evt.value) {
                            this.close();
                        }
                    },
                    '<opal-select-option>select': function (evt) {
                        var vm = this.viewModel;
                        var vmItem = (_a = {},
                            _a[this._viewModelItemValueFieldName] = evt.target.value,
                            _a[this._viewModelItemTextFieldName] = evt.target.text,
                            _a);
                        if (this.input.multiple) {
                            vm.add(vmItem);
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
                            this.emit('change');
                        }
                        var _a;
                    },
                    '<opal-select-option>deselect': function (evt) {
                        if (this.input.multiple) {
                            this.viewModel.remove(this.viewModel.get(evt.target.value, this._viewModelItemValueFieldName));
                        }
                        else {
                            evt.target.select();
                            this.close();
                            this.focus();
                        }
                    },
                    '<opal-text-input>confirm': function (evt) {
                        var _this = this;
                        var textInput = evt.target;
                        if (textInput !== this.$('new-item-input')) {
                            return;
                        }
                        var addNewItemKeypath = this.input.addNewItemKeypath;
                        if (!addNewItemKeypath) {
                            throw new TypeError('Input "addNewItemKeypath" is required');
                        }
                        var addNewItem = this._addNewItem || (this._addNewItem = Function("return this." + addNewItemKeypath + ";")
                            .call(this.ownerComponent || window));
                        if (!addNewItem) {
                            throw new TypeError('"addNewItem" is not defined');
                        }
                        var text = textInput.value;
                        textInput.clear();
                        textInput.input.loading = true;
                        textInput.input.disabled = true;
                        addNewItem(text).then(function (newItem) {
                            textInput.input.loading = false;
                            textInput.input.disabled = false;
                            var value = newItem[_this._viewModelItemValueFieldName];
                            var text = newItem[_this._viewModelItemTextFieldName];
                            if (_this.dataList) {
                                _this.dataList.add((_a = {},
                                    _a[_this._dataListItemValueFieldName] = value,
                                    _a[_this._dataListItemTextFieldName] = text,
                                    _a));
                            }
                            var loadedList = _this.$('loaded-list');
                            if (loadedList) {
                                loadedList.input.query = '';
                            }
                            var vm = _this.viewModel;
                            var vmItem = (_b = {},
                                _b[_this._viewModelItemValueFieldName] = value,
                                _b[_this._viewModelItemTextFieldName] = text,
                                _b);
                            if (_this.input.multiple) {
                                vm.add(vmItem);
                                _this.emit('input');
                            }
                            else {
                                if (vm.length) {
                                    vm.set(0, vmItem);
                                }
                                else {
                                    vm.add(vmItem);
                                }
                                _this.close();
                                _this.focus();
                                _this.emit('input');
                                _this.emit('change');
                            }
                            var _a, _b;
                        }, function () {
                            textInput.input.loading = false;
                            textInput.input.disabled = false;
                        });
                    },
                    '<*>change': function (evt) {
                        if (!(evt.target instanceof RtIfThen) && !(evt.target instanceof RtRepeat)) {
                            return;
                        }
                        this.optionsCell.pull();
                        this._updateOptions();
                        return false;
                    }
                },
                'loaded-list': {
                    loaded: function () {
                        var _this = this;
                        if (this._onсeFocusedAfterLoading) {
                            return;
                        }
                        this._onсeFocusedAfterLoading = true;
                        nextTick(function () {
                            _this._focusOptions();
                            var focusTarget = _this.$('focus');
                            if (focusTarget) {
                                nextTick(function () {
                                    focusTarget.focus();
                                });
                            }
                            else {
                                var filteredList = _this.$('filtered-list');
                                if (filteredList) {
                                    focusTarget = filteredList.$('query-input');
                                }
                                if (focusTarget) {
                                    nextTick(function () {
                                        focusTarget.focus();
                                    });
                                }
                            }
                        });
                    }
                },
                'btn-close': {
                    click: function () {
                        this.close();
                        this.focus();
                    }
                }
            }
        })
    ], OpalSelect);
    return OpalSelect;
}(rionite_1.Component));
exports.OpalSelect = OpalSelect;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 28 28\" id=\"opal-components__icon-cross\"><path stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" fill=\"none\" d=\"M2 2l24 24m0-24L2 26\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 6 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(41);
var template = __webpack_require__(42);
var nextTick = cellx_1.Utils.nextTick;
var OpalTab = (function (_super) {
    __extends(OpalTab, _super);
    function OpalTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTab.prototype.initialize = function () {
        cellx_1.define(this, {
            _tabIndex: function () {
                return this.input.disabled ? -1 : this.input.tabIndex;
            }
        });
    };
    OpalTab.prototype.elementAttached = function () {
        this.listenTo(this, 'input-focused-change', this._onInputFocusedChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur,
            click: this._onControlClick
        });
    };
    OpalTab.prototype.ready = function () {
        if (this.input.focused) {
            this.focus();
        }
    };
    OpalTab.prototype._onInputFocusedChange = function (evt) {
        this[evt.value ? 'focus' : 'blur']();
    };
    OpalTab.prototype._onControlFocus = function (evt) {
        var _this = this;
        nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.input.focused = true;
            }
        });
    };
    OpalTab.prototype._onControlBlur = function () {
        this.input.focused = false;
    };
    OpalTab.prototype._onControlClick = function (evt) {
        evt.preventDefault();
        if (!this.input.disabled) {
            this.click();
        }
    };
    OpalTab.prototype.click = function () {
        this.emit(this.toggle() ? 'select' : 'deselect');
        return this;
    };
    Object.defineProperty(OpalTab.prototype, "selected", {
        get: function () {
            return this.input.selected;
        },
        set: function (selected) {
            this.input.selected = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalTab.prototype.select = function () {
        if (!this.input.selected) {
            this.input.selected = true;
            return true;
        }
        return false;
    };
    OpalTab.prototype.deselect = function () {
        if (this.input.selected) {
            this.input.selected = false;
            return true;
        }
        return false;
    };
    OpalTab.prototype.toggle = function (value) {
        return (this.input.selected = value === undefined ? !this.input.selected : value);
    };
    OpalTab.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalTab.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalTab.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalTab.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    OpalTab = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tab',
            input: {
                selected: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template
        })
    ], OpalTab);
    return OpalTab;
}(rionite_1.Component));
exports.OpalTab = OpalTab;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PathNodeType;
(function (PathNodeType) {
    PathNodeType[PathNodeType["SIMPLE"] = 0] = "SIMPLE";
    PathNodeType[PathNodeType["OPTIONAL"] = 1] = "OPTIONAL";
    PathNodeType[PathNodeType["INSERT"] = 2] = "INSERT";
})(PathNodeType = exports.PathNodeType || (exports.PathNodeType = {}));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var opal_button_1 = __webpack_require__(9);
exports.OpalButton = opal_button_1.OpalButton;
var opal_sign_button_1 = __webpack_require__(11);
exports.OpalSignButton = opal_sign_button_1.OpalSignButton;
var opal_text_input_1 = __webpack_require__(14);
exports.OpalTextInput = opal_text_input_1.OpalTextInput;
var opal_input_mask_1 = __webpack_require__(17);
exports.OpalInputMask = opal_input_mask_1.OpalInputMask;
exports.OpalInputMaskDefinition = opal_input_mask_1.OpalInputMaskDefinition;
var opal_group_1 = __webpack_require__(20);
exports.OpalGroup = opal_group_1.OpalGroup;
var opal_checkbox_1 = __webpack_require__(22);
exports.OpalCheckbox = opal_checkbox_1.OpalCheckbox;
var opal_radio_group_1 = __webpack_require__(25);
exports.OpalRadioGroup = opal_radio_group_1.OpalRadioGroup;
exports.OpalRadioButton = opal_radio_group_1.OpalRadioButton;
var opal_switch_1 = __webpack_require__(29);
exports.OpalSwitch = opal_switch_1.OpalSwitch;
var opal_slider_1 = __webpack_require__(32);
exports.OpalSlider = opal_slider_1.OpalSlider;
var opal_switch_menu_1 = __webpack_require__(35);
exports.OpalSwitchMenu = opal_switch_menu_1.OpalSwitchMenu;
var opal_tabs_1 = __webpack_require__(37);
exports.OpalTabs = opal_tabs_1.OpalTabs;
exports.OpalTabList = opal_tabs_1.OpalTabList;
exports.OpalTab = opal_tabs_1.OpalTab;
var opal_dropdown_1 = __webpack_require__(46);
exports.OpalDropdown = opal_dropdown_1.OpalDropdown;
var opal_popover_1 = __webpack_require__(48);
exports.OpalPopover = opal_popover_1.OpalPopover;
var opal_modal_1 = __webpack_require__(51);
exports.OpalModal = opal_modal_1.OpalModal;
var opal_select_1 = __webpack_require__(3);
exports.OpalSelect = opal_select_1.OpalSelect;
exports.OpalSelectOption = opal_select_1.OpalSelectOption;
var opal_multiselect_1 = __webpack_require__(62);
exports.OpalMultiselect = opal_multiselect_1.OpalMultiselect;
var opal_input_validator_1 = __webpack_require__(65);
exports.OpalInputValidator = opal_input_validator_1.OpalInputValidator;
exports.OpalInputValidatorRule = opal_input_validator_1.OpalInputValidatorRule;
var opal_calendar_1 = __webpack_require__(70);
exports.OpalCalendar = opal_calendar_1.OpalCalendar;
var opal_date_input_1 = __webpack_require__(76);
exports.OpalDateInput = opal_date_input_1.OpalDateInput;
var opal_loader_1 = __webpack_require__(80);
exports.OpalLoader = opal_loader_1.OpalLoader;
var opal_loaded_list_1 = __webpack_require__(82);
exports.OpalLoadedList = opal_loaded_list_1.OpalLoadedList;
var opal_filtered_list_1 = __webpack_require__(85);
exports.OpalFilteredList = opal_filtered_list_1.OpalFilteredList;
var opal_autosuggest_1 = __webpack_require__(88);
exports.OpalAutosuggest = opal_autosuggest_1.OpalAutosuggest;
var opal_tag_select_1 = __webpack_require__(91);
exports.OpalTagSelect = opal_tag_select_1.OpalTagSelect;
var opal_multirow_1 = __webpack_require__(94);
exports.OpalMultirow = opal_multirow_1.OpalMultirow;
exports.OpalMultirowRow = opal_multirow_1.OpalMultirowRow;
var opal_router_1 = __webpack_require__(100);
exports.OpalRouter = opal_router_1.OpalRouter;
exports.OpalRoute = opal_router_1.OpalRoute;


/***/ }),
/* 9 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(10);
var nextTick = cellx_1.Utils.nextTick;
var OpalButton = (function (_super) {
    __extends(OpalButton, _super);
    function OpalButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalButton.prototype.initialize = function () {
        cellx_1.define(this, {
            _tabIndex: function () {
                return this.input.disabled ? -1 : this.input.tabIndex;
            }
        });
    };
    OpalButton.prototype.ready = function () {
        if (this.input.focused) {
            this.element.tabIndex = this._tabIndex;
            this.focus();
        }
    };
    OpalButton.prototype.elementAttached = function () {
        this.listenTo(this, {
            'input-focused-change': this._onInputFocusedChange,
            'change:_tabIndex': this._onTabIndexChange
        });
        this.listenTo(this.element, {
            focus: this._onElementFocus,
            blur: this._onElementBlur,
            click: this._onElementClick
        });
        this.element.tabIndex = this._tabIndex;
    };
    OpalButton.prototype._onInputFocusedChange = function (evt) {
        this[evt.value ? 'focus' : 'blur']();
    };
    OpalButton.prototype._onTabIndexChange = function () {
        this.element.tabIndex = this._tabIndex;
    };
    OpalButton.prototype._onElementFocus = function (evt) {
        var _this = this;
        nextTick(function () {
            if (document.activeElement != _this.element) {
                return;
            }
            if (_this.element.tagName.indexOf('-', 1) != -1) {
                _this._documentKeyDownListening = _this.listenTo(document, 'keydown', _this._onDocumentKeyDown);
            }
            _this.input.focused = true;
            _this.emit('focus');
        });
    };
    OpalButton.prototype._onElementBlur = function () {
        if (this._documentKeyDownListening) {
            this._documentKeyDownListening.stop();
        }
        this.input.focused = false;
        this.emit('blur');
    };
    OpalButton.prototype._onElementClick = function () {
        if (!this.input.disabled) {
            this.click();
        }
    };
    OpalButton.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */) {
            evt.preventDefault();
            if (!this.input.disabled) {
                this.click();
            }
        }
    };
    OpalButton.prototype.click = function () {
        if (this.input.checkable) {
            this.emit(this.toggle() ? 'check' : 'uncheck');
        }
        this.emit('click');
        return this;
    };
    Object.defineProperty(OpalButton.prototype, "checked", {
        get: function () {
            return this.input.checked;
        },
        set: function (checked) {
            this.input.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    OpalButton.prototype.check = function () {
        if (!this.input.checked) {
            this.input.checked = true;
            return true;
        }
        return false;
    };
    OpalButton.prototype.uncheck = function () {
        if (this.input.checked) {
            this.input.checked = false;
            return true;
        }
        return false;
    };
    OpalButton.prototype.toggle = function (value) {
        return (this.input.checked = value === undefined ? !this.input.checked : value);
    };
    OpalButton.prototype.focus = function () {
        this.element.focus();
        return this;
    };
    OpalButton.prototype.blur = function () {
        this.element.blur();
        return this;
    };
    OpalButton.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalButton.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    OpalButton = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-button',
            input: {
                viewType: 'default',
                size: 'm',
                checkable: false,
                checked: false,
                loading: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            }
        })
    ], OpalButton);
    return OpalButton;
}(rionite_1.Component));
exports.OpalButton = OpalButton;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-button{padding:0;border:0;background:0 0;color:inherit;font:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-button:not([view-type=clean]){position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:7px 23px;border-radius:3px;background:#546778;color:#fff;vertical-align:middle;text-align:center;text-decoration:none;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-button:not([view-type=clean])::-moz-focus-inner{padding:0;border:0}.opal-button:not([view-type=clean])[size=s]{padding:4px 13px;font-size:14px;line-height:21px}.opal-button:not([view-type=clean]):hover{background:#597791}.opal-button:not([view-type=clean]):focus{outline:none}body:not(._no-focus-highlight) .opal-button:not([view-type=clean]):focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.opal-button:not([view-type=clean]):active,.opal-button:not([view-type=clean])[checked]{background:#43484c}.opal-button:not([view-type=clean])[loading]{background-image:-o-linear-gradient(315deg,rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.35) 50%,rgba(255,255,255,.35) 75%,transparent 75%,transparent 100%);background-image:linear-gradient(135deg,rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.35) 50%,rgba(255,255,255,.35) 75%,transparent 75%,transparent 100%);background-size:30px 30px;-webkit-animation:opal-button-loading-animation 3s linear infinite;animation:opal-button-loading-animation 3s linear infinite}.opal-button:not([view-type=clean])[disabled]{opacity:.5;pointer-events:none}.opal-group .opal-group__content>.opal-button:not([view-type=clean]):not(:first-child),.opal-group .opal-group__content>:not(:first-child) .opal-button:not([view-type=clean]){border-top-left-radius:0;border-bottom-left-radius:0;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4)}.opal-group .opal-group__content>.opal-button:not([view-type=clean]):not(:last-child),.opal-group .opal-group__content>:not(:last-child) .opal-button:not([view-type=clean]){border-top-right-radius:0;border-bottom-right-radius:0}.opal-switch-menu .opal-button:not([view-type=clean]):not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4)}.opal-switch-menu .opal-button:not([view-type=clean]):not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.opal-button[view-type=primary]{background:#1b91f8}.opal-button[view-type=primary]:hover{background-color:#33a0ff}.opal-button[view-type=primary]:active,.opal-button[view-type=primary][checked]{background-color:#1371c3}.opal-button[view-type=danger]{background:#f63159}.opal-button[view-type=danger]:hover{background-color:#fd496d}.opal-button[view-type=danger]:active,.opal-button[view-type=danger][checked]{background-color:#d3173d}@-webkit-keyframes opal-button-loading-animation{0%{background-position:0 0}to{background-position:60px 0}}@keyframes opal-button-loading-animation{0%{background-position:0 0}to{background-position:60px 0}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 11 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(12);
var template = __webpack_require__(13);
var nextTick = cellx_1.Utils.nextTick;
var OpalSignButton = (function (_super) {
    __extends(OpalSignButton, _super);
    function OpalSignButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalSignButton.prototype.initialize = function () {
        cellx_1.define(this, {
            _tabIndex: function () {
                return this.input.disabled ? -1 : this.input.tabIndex;
            }
        });
    };
    OpalSignButton.prototype.elementAttached = function () {
        this.listenTo(this, 'input-focused-change', this._onInputFocusedChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur,
            click: this._onControlClick
        });
    };
    OpalSignButton.prototype.ready = function () {
        if (this.input.focused) {
            this.focus();
        }
    };
    OpalSignButton.prototype._onInputFocusedChange = function (evt) {
        this[evt.value ? 'focus' : 'blur']();
    };
    OpalSignButton.prototype._onControlFocus = function (evt) {
        var _this = this;
        nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.input.focused = true;
                _this.emit('focus');
            }
        });
    };
    OpalSignButton.prototype._onControlBlur = function () {
        this.input.focused = false;
        this.emit('blur');
    };
    OpalSignButton.prototype._onControlClick = function (evt) {
        evt.preventDefault();
        if (!this.input.disabled) {
            this.click();
        }
    };
    OpalSignButton.prototype.click = function () {
        if (this.input.checkable) {
            this.emit(this.toggle() ? 'check' : 'uncheck');
        }
        this.emit('click');
        return this;
    };
    Object.defineProperty(OpalSignButton.prototype, "checked", {
        get: function () {
            return this.input.checked;
        },
        set: function (checked) {
            this.input.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    OpalSignButton.prototype.check = function () {
        if (!this.input.checked) {
            this.input.checked = true;
            return true;
        }
        return false;
    };
    OpalSignButton.prototype.uncheck = function () {
        if (this.input.checked) {
            this.input.checked = false;
            return true;
        }
        return false;
    };
    OpalSignButton.prototype.toggle = function (value) {
        return (this.input.checked = value === undefined ? !this.input.checked : value);
    };
    OpalSignButton.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalSignButton.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalSignButton.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalSignButton.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    OpalSignButton = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-sign-button',
            input: {
                sign: { type: String, required: true },
                checkable: false,
                checked: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template
        })
    ], OpalSignButton);
    return OpalSignButton;
}(rionite_1.Component));
exports.OpalSignButton = OpalSignButton;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-sign-button{position:relative;display:inline-block;line-height:0}.opal-sign-button .opal-sign-button__control{padding:0;border:0;background:0 0;color:inherit;white-space:nowrap;font:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-sign-button .opal-sign-button__sign{position:relative;top:-1px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;margin:3px;width:28px;height:28px;border:2px solid;border-radius:50%;vertical-align:middle;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-sign-button .opal-sign-button__sign::before,.opal-sign-button .opal-sign-button__sign::after{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-sign-button .opal-sign-button__sign::after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.opal-sign-button[sign=plus] .opal-sign-button__sign{border-color:#107cda}.opal-sign-button[sign=plus] .opal-sign-button__sign::before,.opal-sign-button[sign=plus] .opal-sign-button__sign::after{background:#107cda;content:''}.opal-sign-button[sign=minus] .opal-sign-button__sign{border-color:#eb143f}.opal-sign-button[sign=minus] .opal-sign-button__sign::before{background:#eb143f;content:''}.opal-sign-button[sign=plus] .opal-sign-button__control:hover .opal-sign-button__sign,.opal-sign-button[sign=plus] .opal-sign-button__control:active .opal-sign-button__sign{border-color:#33a0ff}.opal-sign-button[sign=plus] .opal-sign-button__control:hover .opal-sign-button__sign::before,.opal-sign-button[sign=plus] .opal-sign-button__control:hover .opal-sign-button__sign::after,.opal-sign-button[sign=plus] .opal-sign-button__control:active .opal-sign-button__sign::before,.opal-sign-button[sign=plus] .opal-sign-button__control:active .opal-sign-button__sign::after{background:#33a0ff}.opal-sign-button[sign=minus] .opal-sign-button__control:hover .opal-sign-button__sign,.opal-sign-button[sign=minus] .opal-sign-button__control:active .opal-sign-button__sign{border-color:#fd496d}.opal-sign-button[sign=minus] .opal-sign-button__control:hover .opal-sign-button__sign::before,.opal-sign-button[sign=minus] .opal-sign-button__control:hover .opal-sign-button__sign::after,.opal-sign-button[sign=minus] .opal-sign-button__control:active .opal-sign-button__sign::before,.opal-sign-button[sign=minus] .opal-sign-button__control:active .opal-sign-button__sign::after{background:#fd496d}.opal-sign-button .opal-sign-button__control:focus{outline:none}body:not(._no-focus-highlight) .opal-sign-button .opal-sign-button__control:focus::after{position:absolute;top:-1px;right:0;bottom:1px;left:0;border:1px solid #33a0ff;border-radius:3px;content:'';pointer-events:none}.opal-sign-button .opal-sign-button__control:active .opal-sign-button__sign,.opal-sign-button[checked] .opal-sign-button__control .opal-sign-button__sign{top:0}.opal-sign-button[disabled]{opacity:.5;pointer-events:none}.opal-sign-button[disabled] .opal-sign-button__control{cursor:default}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nbutton/control (tabindex={_tabIndex}) {\nspan/sign\n' '\nrt-content/content\n}\n}"

/***/ }),
/* 14 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(5);
__webpack_require__(15);
var template = __webpack_require__(16);
var nextTick = cellx_1.Utils.nextTick;
var OpalTextInput = (function (_super) {
    __extends(OpalTextInput, _super);
    function OpalTextInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTextInput.prototype.initialize = function () {
        cellx_1.define(this, {
            _textFieldValue: function () {
                return this.input.value;
            },
            isControlIconShown: function () {
                return !this.isBtnClearShown && !this.input.loading;
            },
            isBtnClearShown: function () {
                return !!this._textFieldValue && !this.input.loading;
            }
        });
    };
    OpalTextInput.prototype.ready = function () {
        var input = this.input;
        var textField = this.textField = this.$('text-field');
        if (this._textFieldValue) {
            textField.value = this._textFieldValue;
        }
        else {
            var storeKey = input.storeKey;
            if (storeKey) {
                this._textFieldValue = textField.value = localStorage.getItem(storeKey) || '';
            }
        }
        this._prevValue = this.value;
        if (input.multiline && input.autoHeight) {
            var offsetHeight = textField.offsetHeight;
            if (offsetHeight) {
                this._initialHeight = offsetHeight + textField.scrollHeight - textField.clientHeight;
                this._fixHeight();
            }
            else {
                this._initialHeight = parseInt(getComputedStyle(textField).lineHeight, 10) * this.input.rows +
                    parseInt(getComputedStyle(textField).borderTop, 10) +
                    parseInt(getComputedStyle(textField).borderBottom, 10) +
                    parseInt(getComputedStyle(textField).paddingTop, 10) +
                    parseInt(getComputedStyle(textField).paddingBottom, 10);
                textField.style.height = this._initialHeight + 'px';
            }
        }
        if (input.focused) {
            this.focus();
        }
    };
    OpalTextInput.prototype.elementAttached = function () {
        this.listenTo(this, {
            'input-value-change': this._onInputValueChange,
            'input-focused-change': this._onInputFocusedChange
        });
        this.listenTo('text-field', {
            focus: this._onTextFieldFocus,
            blur: this._onTextFieldBlur,
            input: this._onTextFieldInput,
            change: this._onTextFieldChange,
            keydown: this._onTextFieldKeyDown,
            keypress: this._onTextFieldKeyPress,
            keyup: this._onTextFieldKeyUp
        });
    };
    OpalTextInput.prototype._onInputValueChange = function (evt) {
        if (this.textField.value != evt.value) {
            this.textField.value = evt.value;
        }
    };
    OpalTextInput.prototype._onInputFocusedChange = function (evt) {
        this[evt.value ? 'focus' : 'blur']();
    };
    OpalTextInput.prototype._onTextFieldFocus = function (evt) {
        var _this = this;
        nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.input.focused = true;
                _this.emit('focus');
            }
        });
    };
    OpalTextInput.prototype._onTextFieldBlur = function () {
        this.input.focused = false;
        this.emit('blur');
    };
    OpalTextInput.prototype._onTextFieldInput = function (evt) {
        this._textFieldValue = this.textField.value;
        this.emit({ type: 'input', initialEvent: evt });
    };
    OpalTextInput.prototype._onTextFieldChange = function (evt) {
        if (this.value === this._prevValue) {
            return;
        }
        this._prevValue = this.value;
        var storeKey = this.input.storeKey;
        if (storeKey) {
            localStorage.setItem(storeKey, this.textField.value);
        }
        this.emit({ type: 'change', initialEvent: evt });
    };
    OpalTextInput.prototype._onTextFieldKeyDown = function (evt) {
        var _this = this;
        if (this.input.multiline && this.input.autoHeight) {
            setTimeout(function () {
                _this._fixHeight();
            }, 1);
        }
        this.emit({ type: 'keydown', initialEvent: evt });
    };
    OpalTextInput.prototype._onTextFieldKeyPress = function (evt) {
        if (evt.which == 13 /* Enter */) {
            this.emit('confirm');
        }
        this.emit({ type: 'keypress', initialEvent: evt });
    };
    OpalTextInput.prototype._onTextFieldKeyUp = function (evt) {
        if (this.input.multiline && this.input.autoHeight) {
            this._fixHeight();
        }
        this.emit({ type: 'keyup', initialEvent: evt });
    };
    OpalTextInput.prototype._fixHeight = function () {
        var textField = this.textField;
        var lineHeight = parseInt(getComputedStyle(textField).lineHeight, 10);
        textField.style.height = this._initialHeight - lineHeight + 'px';
        textField.style.height = textField.offsetHeight + textField.scrollHeight - textField.clientHeight +
            lineHeight + 'px';
    };
    Object.defineProperty(OpalTextInput.prototype, "value", {
        get: function () {
            return this.textField.value.trim() || null;
        },
        set: function (value) {
            this._textFieldValue = this.textField.value = value || '';
        },
        enumerable: true,
        configurable: true
    });
    OpalTextInput.prototype.clear = function () {
        this.value = null;
        return this;
    };
    OpalTextInput.prototype.focus = function () {
        this.textField.focus();
        return this;
    };
    OpalTextInput.prototype.blur = function () {
        this.textField.blur();
        return this;
    };
    OpalTextInput.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalTextInput.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    OpalTextInput = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-text-input',
            input: {
                inputType: 'text',
                size: 'm',
                multiline: false,
                rows: 5,
                autoHeight: true,
                inputName: String,
                value: '',
                storeKey: String,
                placeholder: String,
                clearable: false,
                loading: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template,
            domEvents: {
                'btn-clear': {
                    click: function (evt) {
                        this.value = null;
                        this.textField.focus();
                        this.emit('clear');
                        this.emit('change');
                    }
                }
            }
        })
    ], OpalTextInput);
    return OpalTextInput;
}(rionite_1.Component));
exports.OpalTextInput = OpalTextInput;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-text-input{position:relative;display:inline-block;width:400px;vertical-align:middle}.opal-text-input .opal-text-input__text-field{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 32px 6px 11px;width:100%;border:1px solid #adadad;border-top-color:#a8a8a8;border-bottom-color:#c7c7c7;border-radius:3px;background:#fff;-webkit-box-shadow:inset 0 1px rgba(0,0,0,.1);box-shadow:inset 0 1px rgba(0,0,0,.1);color:#000;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-transition:border-color .1s linear;-o-transition:border-color .1s linear;transition:border-color .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-text-input .opal-text-input__btn-clear{position:absolute;top:0;right:9px;bottom:0;display:none;margin:auto;padding:5px;width:24px;height:24px;border:0;background:0 0;color:#666;cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear}.opal-text-input .opal-text-input__btn-clear-icon{display:block;margin:auto;width:14px;height:14px}.opal-text-input .opal-text-input__btn-clear[shown]{display:block}.opal-text-input .opal-text-input__btn-clear:hover{color:#000}.opal-text-input .opal-text-input__btn-clear:focus{outline:none}body:not(._no-focus-highlight) .opal-text-input .opal-text-input__btn-clear:focus{border-color:#33a0ff}.opal-text-input .opal-text-input__btn-clear:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.opal-text-input .opal-text-input__loader,.opal-text-input .opal-text-input__loader[size=s]{position:absolute;top:0;right:12px;bottom:0;margin:auto;border:0;pointer-events:none}.opal-text-input .opal-text-input__control-icon{position:absolute;top:0;right:12px;bottom:0;display:none;margin:auto;width:18px;height:18px;fill:gray}.opal-text-input .opal-text-input__control-icon-container[shown] .opal-text-input__control-icon{display:block}.opal-text-input:hover .opal-text-input__text-field{border-color:#949494;border-top-color:#8f8f8f;border-bottom-color:#adadad}.opal-text-input .opal-text-input__text-field:focus{outline:none;border-color:#33a0ff}.opal-text-input[multiline]:not([auto-height=no]) .opal-text-input__text-field{overflow-y:hidden}.opal-text-input[valid] .opal-text-input__text-field{border-color:#0ab80a}.opal-text-input[valid=no] .opal-text-input__text-field{border-color:#f50000}.opal-text-input[disabled]{opacity:.5;pointer-events:none}.opal-text-input[disabled] .opal-text-input__text-field{background:#e6e6e6}.opal-group .opal-group__content>.opal-text-input:not(:first-child),.opal-group .opal-group__content>:not(:first-child) .opal-text-input{margin-right:-1px}.opal-group__content .opal-text-input:not(:first-child) .opal-text-input__text-field,.opal-group__content :not(:first-child) .opal-text-input .opal-text-input__text-field{border-top-left-radius:0;border-bottom-left-radius:0}.opal-group__content .opal-text-input:not(:last-child) .opal-text-input__text-field,.opal-group__content :not(:last-child) .opal-text-input .opal-text-input__text-field{border-top-right-radius:0;border-bottom-right-radius:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\n@if-then (if=input.multiline) {\ntextarea/, text-field (\nrows={input.rows},\nname={input.inputName},\nplaceholder={input.placeholder},\ntabindex={input.tabIndex},\ndisabled={input.disabled}\n)\n}\n@if-else (if=input.multiline) {\ninput/, text-field (\ntype={input.inputType},\nname={input.inputName},\nplaceholder={input.placeholder},\ntabindex={input.tabIndex},\ndisabled={input.disabled}\n)\n}\nrt-content/control-icon-container (select=.opal-text-input__control-icon, shown={isControlIconShown})\n@if-then (if=input.clearable, rt-silent) {\nbutton/btn-clear (shown={isBtnClearShown}) {\nsvg/btn-clear-icon (viewBox=0 0 28 28) { use (xlink:href=#opal-components__icon-cross) }\n}\n}\n@if-then (if=input.loading, rt-silent) {\nopal-loader/loader (size=s, shown)\n}\n}"

/***/ }),
/* 17 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var opal_input_mask_definition_1 = __webpack_require__(18);
exports.OpalInputMaskDefinition = opal_input_mask_definition_1.OpalInputMaskDefinition;
var nextTick = cellx_1.Utils.nextTick;
var forEach = Array.prototype.forEach;
var iPhone = /iphone/i.test(navigator.userAgent);
var ie11 = !(window.ActiveXObject) && 'ActiveXObject' in window;
var OpalInputMask = (function (_super) {
    __extends(OpalInputMask, _super);
    function OpalInputMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalInputMask_1 = OpalInputMask;
    OpalInputMask.prototype.initialize = function () {
        this._definitions = Object.create(this.constructor.defaultDefinitions);
    };
    OpalInputMask.prototype.ready = function () {
        this._textField = this.$('text-input').textField;
        var definitions = this._definitions;
        forEach.call(this.element.querySelectorAll('opal-input-mask-definition'), function (inputMaskDefinition) {
            var input = inputMaskDefinition.$component.input;
            definitions[input.maskChar] = input.regex;
        });
        cellx_1.define(this, {
            _mask: function () {
                return this.input.mask.split('').filter(function (chr) { return chr != '?'; });
            },
            _partialIndex: function () {
                var mask = this.input.mask;
                var index = mask.indexOf('?');
                return index == -1 ? mask.length : index;
            },
            _tests: function () {
                return this._mask.map(function (chr) { return definitions[chr] || null; });
            },
            _firstTestIndex: function () {
                return this._tests.findIndex(function (test) { return test; });
            }
        });
        this._initBuffer();
    };
    OpalInputMask.prototype.elementAttached = function () {
        this.listenTo(this, 'change:_mask', this._onMaskChange);
        this.listenTo(this._textField, {
            focus: this._onTextFieldFocus,
            blur: this._onTextFieldBlur,
            keydown: this._onTextFieldKeyDown,
            keypress: this._onTextFieldKeyPress,
            input: this._onTextFieldInput
        });
        if (!ie11) {
            this._checkValue(false);
        }
    };
    OpalInputMask.prototype._onMaskChange = function () {
        var _this = this;
        this._initBuffer();
        cellx_1.Cell.afterRelease(function () {
            _this._checkValue(false);
        });
    };
    OpalInputMask.prototype._onTextFieldFocus = function () {
        var _this = this;
        nextTick(function () {
            if (document.activeElement == _this._textField) {
                _this._setTextFieldSelection(0, _this._checkValue(false));
                _this._textOnFocus = _this._textField.value;
                _this._writeBuffer();
            }
        });
    };
    OpalInputMask.prototype._onTextFieldBlur = function () {
        this._checkValue(false);
        if (this._textField.value != this._textOnFocus) {
            this.$('text-input').emit('change');
        }
    };
    OpalInputMask.prototype._onTextFieldKeyDown = function (evt) {
        var textField = this._textField;
        var key = evt.which;
        // Backspace, delete, and escape get special treatment
        if (key == 8 || key == 46 || iPhone && key == 127) {
            evt.preventDefault();
            var start = textField.selectionStart;
            var end = textField.selectionEnd;
            if (start == end) {
                if (key == 46) {
                    start = this._nextTestIndex(start - 1);
                    end = this._nextTestIndex(start);
                }
                else {
                    start = this._prevTestIndex(start);
                }
            }
            var value = textField.value;
            this._clearBuffer(start, end);
            this._shiftLeft(start, end - 1);
            if (value != textField.value) {
                this.$('text-input')._onTextFieldInput(evt);
            }
        }
        else if (key == 27) {
            evt.preventDefault();
            if (textField.value != this._textOnFocus) {
                textField.value = this._textOnFocus;
                this._setTextFieldSelection(0, this._checkValue(false));
                this.$('text-input')._onTextFieldInput(evt);
            }
        }
    };
    OpalInputMask.prototype._onTextFieldKeyPress = function (evt) {
        var tests = this._tests;
        var bufferLen = this._buffer.length;
        var textField = this._textField;
        var start = textField.selectionStart;
        var end = textField.selectionEnd;
        var key = evt.which;
        if (evt.ctrlKey || evt.altKey || evt.metaKey || key < 32) {
            return;
        }
        if (key) {
            evt.preventDefault();
            if (start != end) {
                this._clearBuffer(start, end);
                this._shiftLeft(start, end - 1);
            }
            var index = this._nextTestIndex(start - 1);
            if (index < bufferLen) {
                var chr = String.fromCharCode(key);
                if (tests[index].test(chr)) {
                    this._shiftRight(index);
                    this._buffer[index] = chr;
                    this._writeBuffer();
                    index = this._nextTestIndex(index);
                    this._setTextFieldSelection(index, index);
                    this.$('text-input')._onTextFieldInput(evt);
                    if (index >= bufferLen) {
                        this.emit('complete');
                    }
                }
                else if (start != end) {
                    this.$('text-input')._onTextFieldInput(evt);
                }
            }
        }
    };
    OpalInputMask.prototype._onTextFieldInput = function () {
        if (ie11) {
            return;
        }
        this._setTextFieldSelection(this._checkValue(true));
    };
    OpalInputMask.prototype._initBuffer = function () {
        var definitions = this._definitions;
        this._buffer = this._mask.map(function (chr) { return definitions[chr] ? null : chr; });
    };
    OpalInputMask.prototype._checkValue = function (allowNotCompleted) {
        var partialIndex = this._partialIndex;
        var tests = this._tests;
        var buffer = this._buffer;
        var bufferLen = buffer.length;
        var value = this._textField.value;
        var valueLen = value.length;
        var index = 0;
        var lastMatchIndex = -1;
        for (var j = 0; index < bufferLen; index++) {
            if (tests[index]) {
                buffer[index] = null;
                while (j++ < valueLen) {
                    var chr = value.charAt(j - 1);
                    if (tests[index].test(chr)) {
                        buffer[index] = chr;
                        lastMatchIndex = index;
                        break;
                    }
                }
                if (j > valueLen) {
                    this._clearBuffer(index + 1, bufferLen);
                    break;
                }
            }
            else {
                if (buffer[index] == value.charAt(j)) {
                    j++;
                }
                if (index < partialIndex) {
                    lastMatchIndex = index;
                }
            }
        }
        if (allowNotCompleted) {
            this._writeBuffer();
        }
        else {
            if (lastMatchIndex + 1 < partialIndex) {
                this._clearBuffer(0, bufferLen);
                this.$('text-input').value = '';
            }
            else {
                this.$('text-input').value = buffer.slice(0, lastMatchIndex + 1).join('');
            }
            cellx_1.Cell.forceRelease();
        }
        return index;
    };
    OpalInputMask.prototype._shiftLeft = function (start, end) {
        if (start < 0) {
            return;
        }
        var tests = this._tests;
        var buffer = this._buffer;
        for (var i = start, j = this._nextTestIndex(end), l = buffer.length; i < l; i++) {
            var test = tests[i];
            if (test) {
                var chr = void 0;
                if (j < l && (chr = buffer[j]) && test.test(chr)) {
                    buffer[i] = chr;
                    buffer[j] = null;
                    j = this._nextTestIndex(j);
                }
                else {
                    break;
                }
            }
        }
        this._writeBuffer();
        this._setTextFieldSelection(Math.max(this._firstTestIndex, start));
    };
    OpalInputMask.prototype._shiftRight = function (index) {
        var tests = this._tests;
        var buffer = this._buffer;
        var chr = null;
        for (var l = buffer.length; index < l; index++) {
            if (tests[index]) {
                var nextChr = buffer[index];
                buffer[index] = chr;
                var j = this._nextTestIndex(index);
                if (j < l && nextChr && tests[j].test(nextChr)) {
                    chr = nextChr;
                }
                else {
                    break;
                }
            }
        }
    };
    OpalInputMask.prototype._nextTestIndex = function (index) {
        var tests = this._tests;
        for (var l = tests.length; ++index < l && !tests[index];) { }
        return index;
    };
    OpalInputMask.prototype._prevTestIndex = function (index) {
        var tests = this._tests;
        while (--index >= 0 && !tests[index]) { }
        return index;
    };
    OpalInputMask.prototype._writeBuffer = function () {
        var buffer = this._buffer;
        var toIndex = buffer.indexOf(null);
        this.$('text-input').value = (toIndex == -1 ? buffer : buffer.slice(0, toIndex)).join('');
        cellx_1.Cell.forceRelease();
    };
    OpalInputMask.prototype._clearBuffer = function (start, end) {
        var tests = this._tests;
        var buffer = this._buffer;
        if (end > buffer.length) {
            end = buffer.length;
        }
        for (var i = start; i < end; i++) {
            if (tests[i]) {
                buffer[i] = null;
            }
        }
    };
    OpalInputMask.prototype._setTextFieldSelection = function (start, end) {
        if (end === void 0) { end = start; }
        this._textField.setSelectionRange(start, end);
    };
    OpalInputMask.OpalInputMaskDefinition = opal_input_mask_definition_1.OpalInputMaskDefinition;
    OpalInputMask.defaultDefinitions = {
        __proto__: null,
        9: /\d/,
        z: /[a-zA-Z]/,
        '*': /[0-9a-zA-Z]/
    };
    OpalInputMask = OpalInputMask_1 = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-input-mask',
            input: {
                mask: { type: String, required: true }
            },
            template: '@section/inner { rt-content/content }'
        })
    ], OpalInputMask);
    return OpalInputMask;
    var OpalInputMask_1;
}(rionite_1.Component));
exports.OpalInputMask = OpalInputMask;


/***/ }),
/* 18 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
__webpack_require__(19);
var OpalInputMaskDefinition = (function (_super) {
    __extends(OpalInputMaskDefinition, _super);
    function OpalInputMaskDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalInputMaskDefinition = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-input-mask-definition',
            input: {
                maskChar: { type: String, required: true, readonly: true },
                regex: { type: eval, required: true, readonly: true }
            }
        })
    ], OpalInputMaskDefinition);
    return OpalInputMaskDefinition;
}(rionite_1.Component));
exports.OpalInputMaskDefinition = OpalInputMaskDefinition;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-input-mask-definition{display:none}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 20 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
__webpack_require__(21);
var OpalGroup = (function (_super) {
    __extends(OpalGroup, _super);
    function OpalGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalGroup = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-group',
            template: '@section/inner { rt-content/content }'
        })
    ], OpalGroup);
    return OpalGroup;
}(rionite_1.Component));
exports.OpalGroup = OpalGroup;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-group{position:relative;display:inline-block;vertical-align:middle;white-space:nowrap;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 22 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(23);
var template = __webpack_require__(24);
var nextTick = cellx_1.Utils.nextTick;
var OpalCheckbox = (function (_super) {
    __extends(OpalCheckbox, _super);
    function OpalCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalCheckbox.prototype.initialize = function () {
        cellx_1.define(this, {
            _tabIndex: function () {
                return this.input.disabled ? -1 : this.input.tabIndex;
            }
        });
    };
    OpalCheckbox.prototype.elementAttached = function () {
        this.listenTo(this, {
            'input-checked-change': this._onInputCheckedChange,
            'input-indeterminate-change': this._onInputIndeterminateChange,
            'input-focused-change': this._onInputFocusedChange
        });
        this.listenTo('input', 'change', this._onInputChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur
        });
    };
    OpalCheckbox.prototype.ready = function () {
        var input = this.input;
        if (input.checked) {
            input.indeterminate = false;
            this.$('input').checked = true;
        }
        if (input.focused) {
            this.focus();
        }
    };
    OpalCheckbox.prototype._onInputCheckedChange = function (evt) {
        if (evt.value) {
            this.input.indeterminate = false;
        }
        this.$('input').checked = evt.value;
    };
    OpalCheckbox.prototype._onInputIndeterminateChange = function (evt) {
        if (evt.value) {
            this.input.checked = false;
        }
    };
    OpalCheckbox.prototype._onInputFocusedChange = function (evt) {
        if (evt.value) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this.focus();
        }
        else {
            this._documentKeyDownListening.stop();
            this.blur();
        }
    };
    OpalCheckbox.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
            evt.preventDefault();
            var input = this.input;
            if (!input.disabled) {
                this.emit((input.checked = !input.checked) ? 'check' : 'uncheck');
                this.emit('change');
            }
        }
    };
    OpalCheckbox.prototype._onInputChange = function (evt) {
        this.emit((this.input.checked = evt.target.checked) ? 'check' : 'uncheck');
        this.emit('change');
    };
    OpalCheckbox.prototype._onControlFocus = function (evt) {
        var _this = this;
        nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.input.focused = true;
                _this.emit('focus');
            }
        });
    };
    OpalCheckbox.prototype._onControlBlur = function () {
        this.input.focused = false;
        this.emit('blur');
    };
    Object.defineProperty(OpalCheckbox.prototype, "checked", {
        get: function () {
            return this.input.checked;
        },
        set: function (checked) {
            this.input.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    OpalCheckbox.prototype.check = function () {
        if (!this.input.checked) {
            this.input.checked = true;
            return true;
        }
        return false;
    };
    OpalCheckbox.prototype.uncheck = function () {
        if (this.input.checked) {
            this.input.checked = false;
            return true;
        }
        return false;
    };
    OpalCheckbox.prototype.toggle = function (value) {
        return (this.input.checked = value === undefined ? !this.input.checked : value);
    };
    OpalCheckbox.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalCheckbox.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalCheckbox.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalCheckbox.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    OpalCheckbox = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-checkbox',
            input: {
                checked: false,
                indeterminate: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template
        })
    ], OpalCheckbox);
    return OpalCheckbox;
}(rionite_1.Component));
exports.OpalCheckbox = OpalCheckbox;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-checkbox{position:relative;display:inline-block}.opal-checkbox .opal-checkbox__input{display:none}.opal-checkbox .opal-checkbox__control{position:relative;top:-1px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:3px;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-checkbox .opal-checkbox__label:hover .opal-checkbox__control{border-color:#8a8a8a}.opal-checkbox .opal-checkbox__control:focus,.opal-checkbox .opal-checkbox__label:hover .opal-checkbox__control:focus{outline:none;border-color:#33a0ff}.opal-checkbox[checked] .opal-checkbox__control::before{position:absolute;top:1px;left:6px;width:5px;height:10px;border:solid #000;border-width:0 2px 2px 0;content:'';-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.opal-checkbox[indeterminate] .opal-checkbox__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#000;content:''}.opal-checkbox[disabled]{opacity:.5;pointer-events:none}.opal-checkbox[disabled] .opal-checkbox__control{background:#e6e6e6}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nlabel/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex})\n' '\nrt-content/content\n}\n}"

/***/ }),
/* 25 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
var opal_radio_button_1 = __webpack_require__(26);
exports.OpalRadioButton = opal_radio_button_1.OpalRadioButton;
var forEach = Array.prototype.forEach;
var OpalRadioGroup = (function (_super) {
    __extends(OpalRadioGroup, _super);
    function OpalRadioGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalRadioGroup.prototype.ready = function () {
        this.buttonElements = this.element.getElementsByClassName('opal-radio-button');
    };
    OpalRadioGroup.prototype.elementAttached = function () {
        this.listenTo(this, {
            '<opal-radio-button>check': this._onCheck,
            '<opal-radio-button>uncheck': this._onUncheck
        });
    };
    OpalRadioGroup.prototype._onCheck = function (evt) {
        var checkedButton = evt.target;
        forEach.call(this.buttonElements, function (btnEl) {
            if (btnEl.$component != checkedButton) {
                btnEl.$component.uncheck();
            }
        });
    };
    OpalRadioGroup.prototype._onUncheck = function (evt) {
        evt.target.check();
    };
    OpalRadioGroup.OpalRadioButton = opal_radio_button_1.OpalRadioButton;
    OpalRadioGroup = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-radio-group'
        })
    ], OpalRadioGroup);
    return OpalRadioGroup;
}(rionite_1.Component));
exports.OpalRadioGroup = OpalRadioGroup;


/***/ }),
/* 26 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(27);
var template = __webpack_require__(28);
var nextTick = cellx_1.Utils.nextTick;
var OpalRadioButton = (function (_super) {
    __extends(OpalRadioButton, _super);
    function OpalRadioButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalRadioButton.prototype.initialize = function () {
        cellx_1.define(this, {
            _tabIndex: function () {
                return this.input.disabled ? -1 : this.input.tabIndex;
            }
        });
    };
    OpalRadioButton.prototype.ready = function () {
        if (this.input.checked) {
            this.$('input').checked = true;
        }
        if (this.input.focused) {
            this.focus();
        }
    };
    OpalRadioButton.prototype.elementAttached = function () {
        this.listenTo(this, {
            'input-checked-change': this._onInputCheckedChange,
            'input-focused-change': this._onInputFocusedChange
        });
        this.listenTo('input', 'change', this._onInputChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur
        });
    };
    OpalRadioButton.prototype._onInputCheckedChange = function (evt) {
        this.$('input').checked = evt.value;
    };
    OpalRadioButton.prototype._onInputFocusedChange = function (evt) {
        if (evt.value) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this.focus();
        }
        else {
            this._documentKeyDownListening.stop();
            this.blur();
        }
    };
    OpalRadioButton.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
            evt.preventDefault();
            var input = this.input;
            if (!input.disabled) {
                this.emit((input.checked = !input.checked) ? 'check' : 'uncheck');
                this.emit('change');
            }
        }
    };
    OpalRadioButton.prototype._onInputChange = function (evt) {
        this.emit((this.input.checked = evt.target.checked) ? 'check' : 'uncheck');
        this.emit('change');
    };
    OpalRadioButton.prototype._onControlFocus = function (evt) {
        var _this = this;
        nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.input.focused = true;
                _this.emit('focus');
            }
        });
    };
    OpalRadioButton.prototype._onControlBlur = function () {
        this.input.focused = false;
        this.emit('blur');
    };
    Object.defineProperty(OpalRadioButton.prototype, "checked", {
        get: function () {
            return this.input.checked;
        },
        set: function (checked) {
            this.input.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    OpalRadioButton.prototype.check = function () {
        if (!this.input.checked) {
            this.input.checked = true;
            return true;
        }
        return false;
    };
    OpalRadioButton.prototype.uncheck = function () {
        if (this.input.checked) {
            this.input.checked = false;
            return true;
        }
        return false;
    };
    OpalRadioButton.prototype.toggle = function (value) {
        return (this.input.checked = value === undefined ? !this.input.checked : value);
    };
    OpalRadioButton.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalRadioButton.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalRadioButton.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalRadioButton.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    OpalRadioButton = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-radio-button',
            input: {
                checked: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template
        })
    ], OpalRadioButton);
    return OpalRadioButton;
}(rionite_1.Component));
exports.OpalRadioButton = OpalRadioButton;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-radio-button{position:relative;display:inline-block}.opal-radio-button .opal-radio-button__input{display:none}.opal-radio-button .opal-radio-button__control{position:relative;top:-1px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:50%;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-radio-button .opal-radio-button__label:hover .opal-radio-button__control{border-color:#8a8a8a}.opal-radio-button .opal-radio-button__control:focus,.opal-radio-button .opal-radio-button__label:hover .opal-radio-button__control:focus{outline:none;border-color:#33a0ff}.opal-radio-button[checked] .opal-radio-button__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:10px;height:10px;border-radius:50%;background:#000;content:''}.opal-radio-button[disabled]{opacity:.5;pointer-events:none}.opal-radio-button[disabled] .opal-radio-button__control{background:#e6e6e6}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nlabel/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex})\n' '\nrt-content/content\n}\n}"

/***/ }),
/* 29 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(30);
var template = __webpack_require__(31);
var nextTick = cellx_1.Utils.nextTick;
var OpalSwitch = (function (_super) {
    __extends(OpalSwitch, _super);
    function OpalSwitch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalSwitch.prototype.initialize = function () {
        cellx_1.define(this, {
            _tabIndex: function () {
                return this.input.disabled ? -1 : this.input.tabIndex;
            }
        });
    };
    OpalSwitch.prototype.ready = function () {
        if (this.input.checked) {
            this.$('input').checked = true;
        }
        if (this.input.focused) {
            this.focus();
        }
    };
    OpalSwitch.prototype.elementAttached = function () {
        this.listenTo(this, {
            'input-checked-change': this._onInputCheckedChange,
            'input-focused-change': this._onInputFocusedChange
        });
        this.listenTo('input', 'change', this._onInputChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur
        });
    };
    OpalSwitch.prototype._onInputCheckedChange = function (evt) {
        this.$('input').checked = evt.value;
    };
    OpalSwitch.prototype._onInputFocusedChange = function (evt) {
        if (evt.value) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this.focus();
        }
        else {
            this._documentKeyDownListening.stop();
            this.blur();
        }
    };
    OpalSwitch.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
            evt.preventDefault();
            var input = this.input;
            if (!input.disabled) {
                this.emit((input.checked = !input.checked) ? 'check' : 'uncheck');
                this.emit('change');
            }
        }
    };
    OpalSwitch.prototype._onInputChange = function (evt) {
        this.emit((this.input.checked = evt.target.checked) ? 'check' : 'uncheck');
        this.emit('change');
    };
    OpalSwitch.prototype._onControlFocus = function (evt) {
        var _this = this;
        nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.input.focused = true;
                _this.emit('focus');
            }
        });
    };
    OpalSwitch.prototype._onControlBlur = function () {
        this.input.focused = false;
        this.emit('blur');
    };
    Object.defineProperty(OpalSwitch.prototype, "checked", {
        get: function () {
            return this.input.checked;
        },
        set: function (checked) {
            this.input.checked = checked;
        },
        enumerable: true,
        configurable: true
    });
    OpalSwitch.prototype.check = function () {
        if (!this.input.checked) {
            this.input.checked = true;
            return true;
        }
        return false;
    };
    OpalSwitch.prototype.uncheck = function () {
        if (this.input.checked) {
            this.input.checked = false;
            return true;
        }
        return false;
    };
    OpalSwitch.prototype.toggle = function (value) {
        return (this.input.checked = value === undefined ? !this.input.checked : value);
    };
    OpalSwitch.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalSwitch.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalSwitch.prototype.enable = function () {
        this.input.disabled = false;
        return this;
    };
    OpalSwitch.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    OpalSwitch = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-switch',
            input: {
                checked: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template
        })
    ], OpalSwitch);
    return OpalSwitch;
}(rionite_1.Component));
exports.OpalSwitch = OpalSwitch;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-switch{position:relative;display:inline-block}.opal-switch .opal-switch__input{display:none}.opal-switch .opal-switch__control{position:relative;top:-1px;display:inline-block;margin:3px;width:30px;height:14px;border-radius:7px;background:#d6d6d6;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-switch .opal-switch__thumb{position:absolute;top:-3px;left:-3px;width:20px;height:20px;border-radius:50%;background:#546778;-webkit-transition:background .1s linear,-webkit-transform .1s linear;transition:background .1s linear,-webkit-transform .1s linear;-o-transition:background .1s linear,transform .1s linear;transition:background .1s linear,transform .1s linear;transition:background .1s linear,transform .1s linear,-webkit-transform .1s linear}.opal-switch .opal-switch__label:hover .opal-switch__thumb{background:#597791}.opal-switch .opal-switch__control:focus{outline:none}body:not(._no-focus-highlight) .opal-switch .opal-switch__control:focus .opal-switch__thumb::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:50%;content:''}.opal-switch[checked] .opal-switch__thumb{background:#1b91f8;-webkit-transform:translateX(16px);-ms-transform:translateX(16px);transform:translateX(16px)}.opal-switch[checked] .opal-switch__label:hover .opal-switch__thumb{background:#33a0ff}.opal-switch[disabled]{opacity:.5;pointer-events:none}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nlabel/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex}) { span/thumb }\n' '\nrt-content/content\n}\n}"

/***/ }),
/* 32 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(33);
var template = __webpack_require__(34);
var OpalSlider = (function (_super) {
    __extends(OpalSlider, _super);
    function OpalSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalSlider.prototype.initialize = function () {
        var input = this.input;
        var range = input.range;
        if (range) {
            cellx_1.define(this, {
                _firstInputValue: range[0],
                _secondInputValue: range[1],
                _firstInputWidth: function () {
                    var min = input.min;
                    var all = input.max - min;
                    return Math.round((((this._firstInputValue - min) / all + (this._secondInputValue - min) / all) / 2) * 1e5) / 1e3;
                }
            });
        }
    };
    OpalSlider.prototype.elementAttached = function () {
        if (this.input.range) {
            this.listenTo('first-input', 'input', this._onFirstInputInput);
            this.listenTo('second-input', 'input', this._onSecondInputInput);
        }
    };
    OpalSlider.prototype._onFirstInputInput = function (evt) {
        var secondInput = this.$('second-input');
        var value = this._firstInputValue = +evt.target.value;
        if (+secondInput.value < value) {
            secondInput.value = this._secondInputValue = value;
        }
    };
    OpalSlider.prototype._onSecondInputInput = function (evt) {
        var firstInput = this.$('first-input');
        var value = this._secondInputValue = +evt.target.value;
        if (+firstInput.value > value) {
            firstInput.value = this._firstInputValue = value;
        }
    };
    Object.defineProperty(OpalSlider.prototype, "value", {
        get: function () {
            return this.input.range ?
                [this._firstInputValue, this._secondInputValue] :
                +this.$('input').value;
        },
        set: function (value) {
            if (this.input.range) {
                this.$('first-input').value = this._firstInputValue = value[0];
                this.$('second-input').value = this._secondInputValue = value[1];
            }
            else {
                this.$('input').value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    OpalSlider = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-slider',
            input: {
                min: 0,
                max: 100,
                step: 1,
                value: 0,
                range: eval
            },
            template: template
        })
    ], OpalSlider);
    return OpalSlider;
}(rionite_1.Component));
exports.OpalSlider = OpalSlider;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-slider{position:relative;top:-1px;display:inline-block;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-slider::before{position:absolute;top:3px;right:3px;left:3px;z-index:0;height:14px;border-radius:7px;background:#d6d6d6;content:''}.opal-slider .opal-slider__first-input-wrapper3{position:absolute;top:0;right:10px;left:10px;z-index:2}.opal-slider .opal-slider__first-input-wrapper2{position:relative}.opal-slider .opal-slider__first-input-wrapper{position:absolute;top:0;right:0;left:-10px;overflow:hidden}.opal-slider .opal-slider__first-input,.opal-slider .opal-slider__second-input{display:block;margin:0;padding:0;width:200px;height:20px;background:0 0;-webkit-appearance:none}.opal-slider .opal-slider__second-input{position:relative;z-index:1}.opal-slider .opal-slider__first-input::-moz-focus-outer{border:none}.opal-slider .opal-slider__first-input::-moz-range-track{border:none;background:0 0}.opal-slider .opal-slider__first-input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.opal-slider .opal-slider__first-input::-ms-fill-lower{background:0 0}.opal-slider .opal-slider__first-input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.opal-slider .opal-slider__first-input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-slider .opal-slider__first-input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-slider .opal-slider__second-input::-moz-focus-outer{border:none}.opal-slider .opal-slider__second-input::-moz-range-track{border:none;background:0 0}.opal-slider .opal-slider__second-input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.opal-slider .opal-slider__second-input::-ms-fill-lower{background:0 0}.opal-slider .opal-slider__second-input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.opal-slider .opal-slider__second-input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-slider .opal-slider__second-input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-slider .opal-slider__input{position:relative;z-index:1;display:block;margin:0;padding:0;width:200px;height:20px;background:0 0;-webkit-appearance:none}.opal-slider .opal-slider__input::-moz-focus-outer{border:none}.opal-slider .opal-slider__input::-moz-range-track{border:none;background:0 0}.opal-slider .opal-slider__input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.opal-slider .opal-slider__input::-ms-fill-lower{background:0 0}.opal-slider .opal-slider__input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.opal-slider .opal-slider__input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-slider .opal-slider__input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-slider .opal-slider__first-input:hover::-webkit-slider-thumb{background:#597791}.opal-slider .opal-slider__first-input:hover::-moz-range-thumb{background:#597791}.opal-slider .opal-slider__first-input:hover::-ms-thumb{background:#597791}.opal-slider .opal-slider__second-input:hover::-webkit-slider-thumb{background:#33a0ff}.opal-slider .opal-slider__second-input:hover::-moz-range-thumb{background:#33a0ff}.opal-slider .opal-slider__second-input:hover::-ms-thumb{background:#33a0ff}.opal-slider .opal-slider__input:hover::-webkit-slider-thumb{background:#597791}.opal-slider .opal-slider__input:hover::-moz-range-thumb{background:#597791}.opal-slider .opal-slider__input:hover::-ms-thumb{background:#597791}.opal-slider .opal-slider__first-input:focus,.opal-slider .opal-slider__second-input:focus,.opal-slider .opal-slider__input:focus{outline:none}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__first-input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__second-input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .opal-slider .opal-slider__input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\n@if-then (if=input.range) {\ndiv/first-input-wrapper3 {\ndiv/first-input-wrapper2 (style=width: {_firstInputWidth}%) {\ndiv/first-input-wrapper {\ninput/first-input (\ntype=range,\nmin={input.min},\nmax={input.max},\nstep={input.step},\nvalue={input.range.0}\n)\n}\n}\n}\ndiv/second-input-wrapper {\ninput/second-input (type=range, min={input.min}, max={input.max}, step={input.step}, value={input.range.1})\n}\n}\n@if-else (if=input.range) {\ninput/input (type=range, min={input.min}, max={input.max}, step={input.step}, value={input.value})\n}\n}"

/***/ }),
/* 35 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
__webpack_require__(36);
var forEach = Array.prototype.forEach;
var find = Array.prototype.find;
var OpalSwitchMenu = (function (_super) {
    __extends(OpalSwitchMenu, _super);
    function OpalSwitchMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalSwitchMenu.prototype, "checkedButton", {
        get: function () {
            if (this._checkedButton !== undefined) {
                return this._checkedButton;
            }
            return (this._checkedButton = find.call(this.buttonElements, function (btnEl) { return btnEl.$component.checked; }) || null);
        },
        set: function (checkedButton) {
            if (checkedButton === this._checkedButton) {
                return;
            }
            forEach.call(this.buttonElements, function (btnEl) {
                var btn = btnEl.$component;
                if (btn === checkedButton) {
                    btn.check();
                }
                else {
                    btn.uncheck();
                }
            });
            this._checkedButton = checkedButton;
            this.emit('change');
        },
        enumerable: true,
        configurable: true
    });
    OpalSwitchMenu.prototype.ready = function () {
        this.buttonElements = this.element.getElementsByClassName('opal-button');
    };
    OpalSwitchMenu.prototype.elementAttached = function () {
        this.listenTo(this, {
            '<opal-button>check': this._onButtonCheck,
            '<opal-button>uncheck': this._onButtonUncheck
        });
    };
    OpalSwitchMenu.prototype._onButtonCheck = function (evt) {
        var checkedButton = evt.target;
        forEach.call(this.buttonElements, function (btnEl) {
            if (btnEl.$component != checkedButton) {
                btnEl.$component.uncheck();
            }
        });
        this._checkedButton = checkedButton;
        this.emit('change');
    };
    OpalSwitchMenu.prototype._onButtonUncheck = function (evt) {
        evt.target.check();
    };
    OpalSwitchMenu.prototype.clear = function () {
        var checkedButton = this._checkedButton;
        if (checkedButton) {
            checkedButton.uncheck();
            this._checkedButton = null;
        }
    };
    OpalSwitchMenu = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-switch-menu',
            template: '@section/inner { rt-content/content }'
        })
    ], OpalSwitchMenu);
    return OpalSwitchMenu;
}(rionite_1.Component));
exports.OpalSwitchMenu = OpalSwitchMenu;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-switch-menu{position:relative;display:inline-block;vertical-align:middle;white-space:nowrap;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 37 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
__webpack_require__(38);
var opal_tab_list_1 = __webpack_require__(39);
exports.OpalTabList = opal_tab_list_1.OpalTabList;
var opal_tab_1 = __webpack_require__(6);
exports.OpalTab = opal_tab_1.OpalTab;
var opal_tab_panel_1 = __webpack_require__(43);
exports.OpalTabPanel = opal_tab_panel_1.OpalTabPanel;
var template = __webpack_require__(45);
var indexOf = Array.prototype.indexOf;
var forEach = Array.prototype.forEach;
var OpalTabs = (function (_super) {
    __extends(OpalTabs, _super);
    function OpalTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectedTab = null;
        return _this;
    }
    OpalTabs.prototype.ready = function () {
        var _this = this;
        var tabs = this.tabs = this.element.getElementsByClassName('opal-tab');
        var tabPanels = this.tabPanels = this.element.getElementsByClassName('opal-tab-panel');
        var selectedTab;
        var selectedTabIndex;
        forEach.call(tabs, function (tabEl, index) {
            var tab = tabEl.$component;
            if (tab.selected) {
                if (selectedTab) {
                    tab.deselect();
                }
                else {
                    selectedTab = _this._selectedTab = tab;
                    selectedTabIndex = index;
                }
            }
        });
        if (!selectedTab) {
            selectedTab = this._selectedTab = tabs[0].$component;
            selectedTabIndex = 0;
            selectedTab.select();
        }
        tabPanels[selectedTabIndex].$component.input.shown = true;
    };
    OpalTabs.prototype.elementAttached = function () {
        this.listenTo(this.element.getElementsByClassName('opal-tab-list')[0].$component, {
            '<opal-tab>select': this._onTabListSelect,
            '<opal-tab>deselect': this._onTabListDeselect
        });
    };
    OpalTabs.prototype._onTabListSelect = function (evt) {
        var tab = evt.target;
        var selectedTab = this._selectedTab;
        if (selectedTab) {
            this.tabPanels[indexOf.call(this.tabs, selectedTab.element)].$component.input.shown = false;
            selectedTab.deselect();
        }
        this.tabPanels[indexOf.call(this.tabs, tab.element)].$component.input.shown = true;
        this._selectedTab = tab;
    };
    OpalTabs.prototype._onTabListDeselect = function (evt) {
        evt.target.select();
    };
    OpalTabs.OpalTabList = opal_tab_list_1.OpalTabList;
    OpalTabs.OpalTabPanel = opal_tab_panel_1.OpalTabPanel;
    OpalTabs = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tabs',
            template: template
        })
    ], OpalTabs);
    return OpalTabs;
}(rionite_1.Component));
exports.OpalTabs = OpalTabs;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tabs{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 39 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
__webpack_require__(40);
var opal_tab_1 = __webpack_require__(6);
exports.OpalTab = opal_tab_1.OpalTab;
var OpalTabList = (function (_super) {
    __extends(OpalTabList, _super);
    function OpalTabList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTabList.OpalTab = opal_tab_1.OpalTab;
    OpalTabList = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tab-list',
            template: '@section/inner { rt-content/content }'
        })
    ], OpalTabList);
    return OpalTabList;
}(rionite_1.Component));
exports.OpalTabList = OpalTabList;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tab-list{display:block;padding:0 30px;border-bottom:1px solid #dbdbdb;white-space:nowrap;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tab{display:inline-block}.opal-tab .opal-tab__control{position:relative;display:block;padding:5px 22px;border:0;border-top-left-radius:3px;border-top-right-radius:3px;background:#fff;color:#000;text-align:center;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-tab .opal-tab__content{position:relative;display:block}.opal-tab .opal-tab__control:hover{background:#e6e6e6}.opal-tab .opal-tab__control:focus{outline:none}body:not(._no-focus-highlight) .opal-tab .opal-tab__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px #33a0ff;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-tab .opal-tab__control:active{background:#ccc}.opal-tab[selected] .opal-tab__control{-webkit-box-shadow:0 3px #1b91f8;box-shadow:0 3px #1b91f8}.opal-tab[disabled]{opacity:.5;pointer-events:none}.opal-tab[disabled] .opal-tab__control{cursor:default}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nbutton/control (tabindex={_tabIndex}) {\nrt-content/content\n}\n}"

/***/ }),
/* 43 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
__webpack_require__(44);
var OpalTabPanel = (function (_super) {
    __extends(OpalTabPanel, _super);
    function OpalTabPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTabPanel = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tab-panel',
            input: {
                shown: false
            },
            template: '@section/inner { rt-content/content }'
        })
    ], OpalTabPanel);
    return OpalTabPanel;
}(rionite_1.Component));
exports.OpalTabPanel = OpalTabPanel;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tab-panel{position:relative;display:none;padding:30px}.opal-tab-panel[shown]{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nrt-content/tab-list-container (select=opal-tab-list) {\nopal-tab-list/tab-list {\nrt-content/tabs (select=opal-tab)\n}\n}\nrt-content/panels (select=opal-tab-panel)\n}"

/***/ }),
/* 46 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(47);
var openedDropdowns = [];
var OpalDropdown = (function (_super) {
    __extends(OpalDropdown, _super);
    function OpalDropdown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalDropdown.prototype.ready = function () {
        if (this.input.opened) {
            this._open();
        }
    };
    OpalDropdown.prototype.elementAttached = function () {
        this.listenTo(this, 'input-opened-change', this._onInputOpenedChange);
    };
    OpalDropdown.prototype._onInputOpenedChange = function (evt) {
        this[evt.value ? '_open' : '_close']();
    };
    OpalDropdown.prototype.open = function () {
        if (this.input.opened) {
            return false;
        }
        this.input.opened = true;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalDropdown.prototype.close = function () {
        if (!this.input.opened) {
            return false;
        }
        this.input.opened = false;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalDropdown.prototype.toggle = function (value) {
        var opened = this.input.opened = value === undefined ? !this.input.opened : value;
        cellx_1.Cell.forceRelease();
        return opened;
    };
    OpalDropdown.prototype._open = function () {
        var _this = this;
        openedDropdowns.push(this);
        var el = this.element;
        var elStyle = el.style;
        elStyle.top = '100%';
        elStyle.right = 'auto';
        elStyle.bottom = 'auto';
        elStyle.left = '0';
        elStyle.maxHeight = 'none';
        var docElClientWidth = document.documentElement.clientWidth;
        var containerClientRect = el.offsetParent.getBoundingClientRect();
        var elClientRect = el.getBoundingClientRect();
        if (elClientRect.right > docElClientWidth) {
            if (containerClientRect.right - el.offsetWidth >= 0) {
                elStyle.right = '0';
                elStyle.left = 'auto';
            }
            else {
                elStyle.left = Math.max(-containerClientRect.left, docElClientWidth - elClientRect.right) + 'px';
            }
        }
        var margin = elClientRect.top - containerClientRect.bottom;
        var excess = elClientRect.bottom + margin - document.documentElement.clientHeight;
        if (excess > 0) {
            var diff = containerClientRect.top - (document.documentElement.clientHeight - containerClientRect.bottom);
            if (this.input.autoHeight) {
                if (diff > 0) {
                    elStyle.top = 'auto';
                    elStyle.bottom = '100%';
                    excess -= diff;
                    if (excess > 0) {
                        elStyle.maxHeight = el.offsetHeight - excess + 'px';
                    }
                }
                else {
                    elStyle.maxHeight = el.offsetHeight - excess + 'px';
                }
            }
            else if (diff > 0 && excess - diff <= document.body.scrollTop) {
                elStyle.top = 'auto';
                elStyle.bottom = '100%';
            }
        }
        if (this.input.autoClosing) {
            setTimeout(function () {
                if (_this.input.opened) {
                    _this._documentClickListening = _this.listenTo(document, 'click', _this._onDocumentClick);
                }
            }, 1);
        }
    };
    OpalDropdown.prototype._close = function () {
        openedDropdowns.splice(openedDropdowns.indexOf(this), 1);
        if (this._documentClickListening) {
            this._documentClickListening.stop();
        }
    };
    OpalDropdown.prototype._onDocumentClick = function (evt) {
        var docEl = document.documentElement;
        var componentEl = this.element;
        for (var el = evt.target; el != componentEl;) {
            if (el == docEl || el.tagName == 'A') {
                this.close();
                this.emit('close');
                break;
            }
            el = el.parentNode;
            if (!el) {
                break;
            }
        }
    };
    OpalDropdown = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-dropdown',
            input: {
                autoHeight: true,
                autoClosing: false,
                opened: false
            },
            template: '@section/inner { rt-content/content }'
        })
    ], OpalDropdown);
    return OpalDropdown;
}(rionite_1.Component));
exports.OpalDropdown = OpalDropdown;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-dropdown{position:absolute;top:100%;left:0;z-index:100;display:none;overflow-x:hidden;overflow-y:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:2px 0;padding:6px 0;min-width:100%;border:1px solid #ccc;border-radius:3px;background:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:1.5;cursor:default}.opal-dropdown .opal-dropdown__content{position:relative;display:block}.opal-dropdown[opened]{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 48 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(49);
var template = __webpack_require__(50);
var OpalPopover = (function (_super) {
    __extends(OpalPopover, _super);
    function OpalPopover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalPopover.prototype.ready = function () {
        if (this.input.opened) {
            this._open();
        }
    };
    OpalPopover.prototype.elementAttached = function () {
        this.listenTo(this, 'input-opened-change', this._onInputOpenedChange);
    };
    OpalPopover.prototype._onInputOpenedChange = function (evt) {
        this[evt.value ? '_open' : '_close']();
    };
    OpalPopover.prototype.open = function () {
        if (this.input.opened) {
            return false;
        }
        this.input.opened = true;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalPopover.prototype.close = function () {
        if (!this.input.opened) {
            return false;
        }
        this.input.opened = false;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalPopover.prototype.toggle = function (value) {
        var opened = this.input.opened = value === undefined ? !this.input.opened : value;
        cellx_1.Cell.forceRelease();
        return opened;
    };
    OpalPopover.prototype._open = function () {
        var _this = this;
        if (this.input.autoDirection) {
            var to = this.input.to;
            this._toOnOpen = to;
            var docEl = document.documentElement;
            var containerClientRect = this.element.offsetParent.getBoundingClientRect();
            var elClientRect = this.element.getBoundingClientRect();
            switch (to) {
                case 'left': {
                    if (elClientRect.left + document.body.scrollLeft < 0 || (elClientRect.left < 0 &&
                        containerClientRect.left < docEl.clientWidth - containerClientRect.right)) {
                        this.input.to = 'right';
                    }
                    break;
                }
                case 'top': {
                    if (elClientRect.top + document.body.scrollTop < 0 || (elClientRect.top < 0 &&
                        containerClientRect.top < docEl.clientHeight - containerClientRect.bottom)) {
                        this.input.to = 'bottom';
                    }
                    break;
                }
                case 'right': {
                    if (elClientRect.right > docEl.clientWidth &&
                        containerClientRect.left > docEl.clientWidth - containerClientRect.right &&
                        containerClientRect.left + document.body.scrollLeft >=
                            elClientRect.right - containerClientRect.right) {
                        this.input.to = 'left';
                    }
                    break;
                }
                case 'bottom': {
                    if (elClientRect.bottom > docEl.clientHeight &&
                        containerClientRect.top > docEl.clientHeight - containerClientRect.bottom &&
                        containerClientRect.top + document.body.scrollTop >=
                            elClientRect.bottom - containerClientRect.bottom) {
                        this.input.to = 'top';
                    }
                    break;
                }
            }
        }
        if (this.input.autoClosing) {
            setTimeout(function () {
                if (_this.input.opened) {
                    _this._documentClickListening = _this.listenTo(document, 'click', _this._onDocumentClick);
                }
            }, 1);
        }
    };
    OpalPopover.prototype._close = function () {
        if (this.input.autoDirection) {
            this.input.to = this._toOnOpen;
        }
        if (this._documentClickListening) {
            this._documentClickListening.stop();
        }
    };
    OpalPopover.prototype._onDocumentClick = function (evt) {
        var docEl = document.documentElement;
        var componentEl = this.element;
        for (var el = evt.target; el != componentEl;) {
            if (el == docEl || el.tagName == 'A') {
                this.close();
                this.emit('close');
                break;
            }
            el = el.parentNode;
            if (!el) {
                break;
            }
        }
    };
    OpalPopover = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-popover',
            input: {
                to: 'right',
                autoDirection: true,
                autoClosing: false,
                opened: false
            },
            template: template
        })
    ], OpalPopover);
    return OpalPopover;
}(rionite_1.Component));
exports.OpalPopover = OpalPopover;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-popover{position:absolute;z-index:100;display:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px;border:1px solid #ccc;border-radius:6px;background:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:1.5;cursor:default}.opal-popover .opal-popover__arrow{position:absolute;z-index:1;width:0;height:0}.opal-popover .opal-popover__arrow::before,.opal-popover .opal-popover__arrow::after{position:absolute;width:0;height:0;border:10px solid transparent;content:''}.opal-popover .opal-popover__arrow::after{border:8px solid transparent}.opal-popover .opal-popover__content{position:relative;display:block}.opal-popover[to=top]{bottom:100%;left:50%;margin-bottom:15px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[to=top] .opal-popover__arrow{top:100%;left:50%}.opal-popover[to=top] .opal-popover__arrow::before,.opal-popover[to=top] .opal-popover__arrow::after{border-top-color:#ccc;border-bottom-width:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[to=top] .opal-popover__arrow::after{border-top-color:#fff}.opal-popover[to=right]{top:50%;left:100%;margin-left:15px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[to=right] .opal-popover__arrow{top:50%;right:100%}.opal-popover[to=right] .opal-popover__arrow::before,.opal-popover[to=right] .opal-popover__arrow::after{right:0;border-right-color:#ccc;border-left-width:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[to=right] .opal-popover__arrow::after{border-right-color:#fff}.opal-popover[to=bottom]{top:100%;left:50%;margin-top:15px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[to=bottom] .opal-popover__arrow{bottom:100%;left:50%}.opal-popover[to=bottom] .opal-popover__arrow::before,.opal-popover[to=bottom] .opal-popover__arrow::after{bottom:0;border-top-width:0;border-bottom-color:#ccc;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.opal-popover[to=bottom] .opal-popover__arrow::after{border-bottom-color:#fff}.opal-popover[to=left]{top:50%;right:100%;margin-right:15px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[to=left] .opal-popover__arrow{top:50%;left:100%}.opal-popover[to=left] .opal-popover__arrow::before,.opal-popover[to=left] .opal-popover__arrow::after{left:0;border-right-width:0;border-left-color:#ccc;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.opal-popover[to=left] .opal-popover__arrow::after{border-left-color:#fff}.opal-popover[opened]{display:block;-webkit-animation:opal-popover-fade-in-animation .1s linear;animation:opal-popover-fade-in-animation .1s linear}@-webkit-keyframes opal-popover-fade-in-animation{0%{opacity:0}to{opacity:1}}@keyframes opal-popover-fade-in-animation{0%{opacity:0}to{opacity:1}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nspan/arrow\nrt-content/content\n}"

/***/ }),
/* 51 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
var isFocusable_1 = __webpack_require__(2);
__webpack_require__(52);
var template = __webpack_require__(53);
var openedModals = [];
var documentFocusListening;
var documentKeyUpListening;
function onDocumentFocus(evt) {
    if (!isFocusable_1.isFocusable(evt.target)) {
        return;
    }
    if (!openedModals[0].element.contains(evt.target.parentNode)) {
        openedModals[0].$('btn-close').focus();
    }
}
function onDocumentKeyUp(evt) {
    if (evt.keyCode == 27 /* Esc */) {
        evt.preventDefault();
        openedModals[0].close();
    }
}
var OpalModal = (function (_super) {
    __extends(OpalModal, _super);
    function OpalModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalModal.prototype.ready = function () {
        if (this.input.opened) {
            this._open();
        }
    };
    OpalModal.prototype.elementAttached = function () {
        this.listenTo(this, 'input-opened-change', this._onInputOpenedChange);
        this.listenTo(this.element, 'click', this._onElementClick);
    };
    OpalModal.prototype.elementDetached = function () {
        this.close();
    };
    OpalModal.prototype._onInputOpenedChange = function (evt) {
        this[evt.value ? '_open' : '_close']();
    };
    OpalModal.prototype._onElementClick = function (evt) {
        var componentEl = this.element;
        var windowEl = this.$('window');
        for (var el = evt.target; el != windowEl;) {
            if (el == componentEl) {
                this.close();
                this.emit('close');
                break;
            }
            el = el.parentNode;
            if (!el) {
                break;
            }
        }
    };
    OpalModal.prototype.open = function () {
        if (this.input.opened) {
            return false;
        }
        this.input.opened = true;
        return true;
    };
    OpalModal.prototype.close = function () {
        if (!this.input.opened) {
            return false;
        }
        this.input.opened = false;
        return true;
    };
    OpalModal.prototype.toggle = function (value) {
        return (this.input.opened = value === undefined ? !this.input.opened : value);
    };
    OpalModal.prototype._open = function () {
        if (openedModals.length) {
            openedModals[0].element.classList.add('_overlapped');
        }
        else {
            documentFocusListening = this.listenTo(document, 'focus', onDocumentFocus, document, true);
            documentKeyUpListening = this.listenTo(document, 'keyup', onDocumentKeyUp, document);
            var body = document.body;
            var initialBodyWidth = body.offsetWidth;
            body.style.overflow = 'hidden';
            if (initialBodyWidth < body.offsetWidth) {
                body.style.marginRight = body.offsetWidth - initialBodyWidth + 'px';
            }
        }
        this.input.opened = true;
        openedModals.unshift(this);
        this.focus();
    };
    OpalModal.prototype._close = function () {
        var index = openedModals.indexOf(this);
        if (index) {
            openedModals[index - 1].close();
        }
        this.input.opened = false;
        openedModals.shift();
        if (openedModals.length) {
            openedModals[0].element.classList.remove('_overlapped');
            openedModals[0].focus();
        }
        else {
            documentFocusListening.stop();
            documentKeyUpListening.stop();
            var bodyStyle = document.body.style;
            bodyStyle.overflow = '';
            bodyStyle.marginRight = '';
        }
    };
    OpalModal.prototype.focus = function () {
        if (this == openedModals[0]) {
            document.body.classList.remove('_no-focus-highlight');
            (this.$('focus') || this.$('btn-close')).focus();
        }
        return this;
    };
    OpalModal = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-modal',
            input: {
                opened: false
            },
            template: template,
            domEvents: {
                'btn-close': {
                    click: function () {
                        this.input.opened = false;
                        this.emit('close');
                    }
                }
            }
        })
    ], OpalModal);
    return OpalModal;
}(rionite_1.Component));
exports.OpalModal = OpalModal;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-modal{position:fixed;top:0;left:0;z-index:1000;display:none;overflow:auto;-webkit-box-sizing:border-box;box-sizing:border-box;padding:65px 20px;width:100%;height:100%;background:rgba(0,0,0,.6);text-align:center;white-space:nowrap;cursor:default}.opal-modal::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.opal-modal .opal-modal__window{display:inline-block;padding:30px;border-radius:3px;background:#fff;-webkit-box-shadow:0 0 20px rgba(0,0,0,.3);box-shadow:0 0 20px rgba(0,0,0,.3);vertical-align:middle;text-align:left;white-space:normal}.opal-modal .opal-modal__btn-close-wrapper{position:absolute;top:10px;right:10px;width:45px}.opal-modal .opal-modal__btn-close{position:fixed;top:10px;-webkit-box-sizing:content-box;box-sizing:content-box;padding:10px;width:25px;height:25px;border:0;background:0 0;cursor:pointer}.opal-modal .opal-modal__btn-close::before,.opal-modal .opal-modal__btn-close::after{position:absolute;top:21px;left:10px;width:25px;height:3px;border-radius:2px;background:#e6e6e6;content:'';-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.opal-modal .opal-modal__btn-close::after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.opal-modal .opal-modal__window:hover .opal-modal__btn-close::before,.opal-modal .opal-modal__window:hover .opal-modal__btn-close::after{background:#ccc}.opal-modal .opal-modal__btn-close:hover::before,.opal-modal .opal-modal__btn-close:hover::after,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:hover::before,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:hover::after{background:#fff}.opal-modal .opal-modal__btn-close:active::before,.opal-modal .opal-modal__btn-close:active::after,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:active::before,.opal-modal .opal-modal__window:hover .opal-modal__btn-close:active::after{background:#b3b3b3}.opal-modal .opal-modal__content{position:relative;display:block}.opal-modal[opened]{display:block}.opal-modal._overlapped{left:100%;overflow:visible}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\ndiv/window {\nspan/btn-close-wrapper {\nbutton/btn-close\n}\nrt-content/content\n}\n}"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 18\" id=\"opal-components__icon-chevron-down\"><path stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" fill=\"none\" d=\"M2 2l14 14L30 2\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-select{position:relative;display:inline-block;vertical-align:middle}.opal-select .opal-select__button{display:block;min-width:100%}.opal-select .opal-select__icon-chevron-down{display:inline-block;margin-left:.25em;width:14px;height:14px;vertical-align:middle;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;-o-transition:transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear;fill:currentColor}.opal-select .opal-select__button[size=s] .opal-select__icon-chevron-down{width:12px;height:12px}.opal-select .opal-select__button[checked] .opal-select__icon-chevron-down{-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}.opal-select .opal-select__new-item-input{display:block;margin:6px 10px 4px;width:auto}.opal-select .opal-popover{padding:6px 0;min-width:140px}.opal-select .opal-popover .opal-popover__content{overflow:auto;max-height:380px}.opal-select .opal-filtered-list .opal-filtered-list__query-input{margin:4px 10px 6px}.opal-select .opal-loaded-list{height:304px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 56 */
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
/* 57 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(58);
__webpack_require__(59);
var template = __webpack_require__(60);
var nextTick = cellx_1.Utils.nextTick;
var OpalSelectOption = (function (_super) {
    __extends(OpalSelectOption, _super);
    function OpalSelectOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalSelectOption.prototype.initialize = function () {
        cellx_1.define(this, {
            _tabIndex: function () {
                return this.input.disabled ? -1 : this.input.tabIndex;
            }
        });
    };
    OpalSelectOption.prototype.elementAttached = function () {
        this.listenTo(this, 'input-focused-change', this._onInputFocusedChange);
    };
    OpalSelectOption.prototype._onInputFocusedChange = function (evt) {
        this[evt.value ? 'focus' : 'blur']();
    };
    OpalSelectOption.prototype.click = function () {
        this.emit(this.toggle() ? 'select' : 'deselect');
        return this;
    };
    Object.defineProperty(OpalSelectOption.prototype, "value", {
        get: function () {
            var input = this.input;
            return input.value === null ? input.text : input.value;
        },
        set: function (value) {
            this.input.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelectOption.prototype, "text", {
        get: function () {
            return this.input.text.trim() || ' ';
        },
        set: function (text) {
            this.input.text = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelectOption.prototype, "selected", {
        get: function () {
            return this.input.selected;
        },
        set: function (selected) {
            this.input.selected = selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSelectOption.prototype, "disabled", {
        get: function () {
            return this.input.disabled;
        },
        set: function (disabled) {
            this.input.disabled = disabled;
        },
        enumerable: true,
        configurable: true
    });
    OpalSelectOption.prototype.select = function () {
        if (!this.input.selected) {
            this.input.selected = true;
            return true;
        }
        return false;
    };
    OpalSelectOption.prototype.deselect = function () {
        if (this.input.selected) {
            this.input.selected = false;
            return true;
        }
        return false;
    };
    OpalSelectOption.prototype.toggle = function (value) {
        return (this.input.selected = value === undefined ? !this.input.selected : value);
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
        this.input.disabled = false;
        return this;
    };
    OpalSelectOption.prototype.disable = function () {
        this.input.disabled = true;
        return this;
    };
    OpalSelectOption = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-select-option',
            input: {
                value: String,
                text: { type: String, required: true },
                selected: false,
                tabIndex: 0,
                focused: false,
                disabled: false
            },
            template: template,
            oevents: {
                control: {
                    focus: function (evt) {
                        var _this = this;
                        nextTick(function () {
                            if (document.activeElement == evt.target) {
                                _this.input.focused = true;
                            }
                        });
                    },
                    blur: function () {
                        this.input.focused = false;
                    },
                    click: function (evt) {
                        evt.preventDefault();
                        if (!this.input.disabled) {
                            this.click();
                        }
                    }
                }
            }
        })
    ], OpalSelectOption);
    return OpalSelectOption;
}(rionite_1.Component));
exports.OpalSelectOption = OpalSelectOption;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 24\" id=\"opal-components__icon-check\"><path stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" fill=\"none\" d=\"M2 14l8 8L30 2\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-select-option{display:block}.opal-select-option .opal-select-option__control{position:relative;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:7px 38px 7px 22px;width:100%;border:0;background:#fff;color:#000;text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-select-option .opal-select-option__content{position:relative;display:block;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.opal-select-option .opal-select-option__icon-check{position:absolute;top:0;right:14px;bottom:0;display:none;margin:auto;width:16px;height:16px;color:#333}.opal-select-option .opal-select-option__control:hover{background:#e6e6e6}.opal-select-option .opal-select-option__control:focus{outline:none}.opal-select-option .opal-select-option__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;-webkit-box-shadow:inset 0 0 0 1px #33a0ff;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-select-option .opal-select-option__control:active{background:#ccc}.opal-select-option[selected] .opal-select-option__control{color:#0d87f2}.opal-select-option[selected] .opal-select-option__icon-check{display:block}.opal-select-option[disabled]{opacity:.5;pointer-events:none}.opal-select-option[disabled] .opal-select-option__control{cursor:default}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nbutton/control (tabindex={_tabIndex}) {\nrt-content/content { '{input.text}' }\nsvg/icon-check (viewBox=0 0 32 24) { use (xlink:href=#opal-components__icon-check) }\n}\n}"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nrt-content (select=.opal-select__button) {\nopal-button/button (\nview-type={input.viewType},\nsize={input.size},\ncheckable,\ntab-index={input.tabIndex},\ndisabled={input.disabled}\n) {\n@if-then (if=input.text, rt-silent) { '{input.text}' }\n@if-else (if=input.text, rt-silent) { '{text}' }\n' '\nsvg/icon-chevron-down (viewBox=0 0 32 18) { use (xlink:href=#opal-components__icon-chevron-down) }\n}\n}\nrt-content (select=.opal-select__menu) {\nopal-dropdown/menu (auto-closing) {\nrt-content (select=.opal-select__menu-content) {\n@if-then (if=input.datalistKeypath) {\ndiv/, menu-content {\n@if-then (if=dataList.length) {\n@repeat (for=item of dataList) {\nopal-select-option/option (\nvalue='{item |key(_dataListItemValueFieldName) }',\ntext='{item |key(_dataListItemTextFieldName) }',\ndisabled='{item |key(_dataListItemDisabledFieldName) }'\n)\n}\nrt-content/new-item-input-container // доопределяется ниже\n}\n@if-else (if=dataList.length, rt-silent) {\nopal-loader/menu-loader (shown)\n}\n}\n}\n@if-else (if=input.datalistKeypath) {\ndiv/, menu-content {\nrt-content/options (select=opal-select-option)\nrt-content/new-item-input-container (select=.opal-select__new-item-input)\n}\n}\n}\n}\n}\n}"

/***/ }),
/* 62 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(5);
var opal_select_1 = __webpack_require__(3);
__webpack_require__(63);
var template = __webpack_require__(64);
var OpalMultiselect = (function (_super) {
    __extends(OpalMultiselect, _super);
    function OpalMultiselect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalMultiselect.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        var input = this.input;
        var dataProvider = input.dataprovider;
        if (!dataProvider && input.dataproviderKeypath) {
            dataProvider = Function("return this." + input.dataproviderKeypath + ";")
                .call(this.ownerComponent || window);
            if (!dataProvider) {
                throw new TypeError('"dataProvider" is not defined');
            }
        }
        this.dataProvider = dataProvider;
        cellx_1.define(this, {
            isNothingSelectedShown: function () {
                return !this.viewModel.length;
            }
        });
    };
    OpalMultiselect.prototype._onBtnDeselectItemClick = function (evt, btn) {
        this.viewModel.remove(this.viewModel.get(btn.dataset.itemValue, this._viewModelItemValueFieldName));
    };
    OpalMultiselect = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-multiselect',
            i18n: {
                queryInputPlaceholder: rionite_1.getText.t('Поиск'),
                nothingSelected: rionite_1.getText.t('Ничего не выбрано')
            },
            input: {
                multiple: true,
                dataprovider: { type: Object, readonly: true },
                dataproviderKeypath: { type: String, readonly: true }
            },
            template: opal_select_1.OpalSelect.template.extend(template),
            oevents: {
                'query-input': {
                    input: function (evt) {
                        this.$('loaded-list').input.query = evt.target.value;
                    },
                    clear: function () {
                        this.$('loaded-list').input.query = '';
                    }
                }
            }
        })
    ], OpalMultiselect);
    return OpalMultiselect;
}(opal_select_1.OpalSelect));
exports.OpalMultiselect = OpalMultiselect;


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-multiselect.opal-select .opal-select__menu{padding:0;width:600px}.opal-multiselect.opal-select .opal-select__menu-header{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 10px;border-bottom:1px solid #ccc;font-size:0;line-height:60px}.opal-multiselect.opal-select .opal-select__query-input{width:279px}.opal-multiselect.opal-select .opal-select__menu-selected{float:right;overflow:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:299px;height:304px;border-left:1px solid #ccc}.opal-multiselect.opal-select .opal-select__selected-item{position:relative;overflow:hidden;padding:7px 38px 7px 22px;background:#fff;color:#000;text-align:left;-o-text-overflow:ellipsis;text-overflow:ellipsis;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-multiselect.opal-select .opal-select__btn-deselect-item{position:absolute;top:0;right:9px;bottom:0;display:none;-webkit-box-sizing:border-box;box-sizing:border-box;margin:auto;padding:5px;width:24px;height:24px;color:#666;cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear}.opal-multiselect.opal-select .opal-select__btn-deselect-item-icon{display:block;margin:auto;width:14px;height:14px}.opal-multiselect.opal-select .opal-select__selected-item:hover .opal-select__btn-deselect-item{display:block}.opal-multiselect.opal-select .opal-select__btn-deselect-item:hover{color:#000}.opal-multiselect.opal-select .opal-select__btn-deselect-item:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.opal-multiselect.opal-select .opal-select__nothing-selected{display:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px;height:100%;text-align:center;white-space:nowrap}.opal-multiselect.opal-select .opal-select__nothing-selected::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.opal-multiselect.opal-select .opal-select__nothing-selected-message{display:inline-block;vertical-align:middle;opacity:.6}.opal-multiselect.opal-select .opal-select__nothing-selected[shown]{display:block}.opal-multiselect.opal-select .opal-select__menu-content{width:299px;height:304px}.opal-multiselect.opal-select .opal-select__menu-footer{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 10px;width:100%;border-top:1px solid #ccc;text-align:right;font-size:0;line-height:60px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "/menu (auto-height=no, auto-closing) {\ndiv/menu-header {\nopal-text-input/query-input (\nclass=opal-select__focus,\nclearable,\nplaceholder={constructor.i18n.queryInputPlaceholder}\n)\n}\ndiv/menu-selected {\n@repeat (for=item of viewModel) {\ndiv/selected-item {\n'{item |key(_viewModelItemTextFieldName) }'\ndiv/btn-deselect-item (\ndata-item-value='{item |key(_viewModelItemValueFieldName) }',\non-click=_onBtnDeselectItemClick\n) {\nsvg/btn-deselect-item-icon (viewBox=0 0 28 28) { use (xlink:href=#opal-components__icon-cross) }\n}\n}\n}\ndiv/nothing-selected (shown={isNothingSelectedShown}) {\nspan/nothing-selected-message { '{constructor.i18n.nothingSelected}' }\n}\n}\ndiv/menu-content {\nopal-loaded-list/loaded-list (dataprovider-keypath=dataProvider) {\nopal-select-option/option (value={$item.value}, text={$item.text})\n}\n}\ndiv/menu-footer {\nopal-button/btn-close { 'Закрыть' }\n}\n}"

/***/ }),
/* 65 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(66);
var opal_input_validator_rule_1 = __webpack_require__(67);
exports.OpalInputValidatorRule = opal_input_validator_rule_1.OpalInputValidatorRule;
var map = Array.prototype.map;
var OpalInputValidator = (function (_super) {
    __extends(OpalInputValidator, _super);
    function OpalInputValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalInputValidator.prototype.initialize = function () {
        cellx_1.define(this, {
            failedRule: null,
            valid: function () {
                return !this.failedRule;
            }
        });
    };
    OpalInputValidator.prototype.ready = function () {
        this._rules = map.call(this.element.getElementsByClassName('opal-input-validator-rule'), function (ruleEl) { return ruleEl.$component; });
    };
    OpalInputValidator.prototype.validate = function () {
        return this._validate(this._rules);
    };
    OpalInputValidator.prototype._validate = function (rules) {
        var _this = this;
        var value = this.$('text-input').value;
        var failedRule;
        rules.forEach(function (rule) {
            var ruleInput = rule.input;
            if (!failedRule && (value ?
                ruleInput.minLength && value.length < ruleInput.minLength ||
                    ruleInput.regex && !ruleInput.regex.test(value) ||
                    ruleInput.test &&
                        !_this.ownerComponent[ruleInput.test](value) :
                ruleInput.required)) {
                failedRule = rule;
                rule.showMessage();
            }
            else {
                rule.hideMessage();
            }
        });
        var oldFailedRule = this.failedRule;
        this.failedRule = failedRule || null;
        if (+!!failedRule ^ +!!oldFailedRule) {
            if (failedRule) {
                this.element.setAttribute('valid', 'no');
                this.emit('input-validation-error');
            }
            else {
                this.element.removeAttribute('valid');
                this.emit('input-validation-valid');
            }
        }
        return !failedRule;
    };
    OpalInputValidator.OpalInputValidatorRule = opal_input_validator_rule_1.OpalInputValidatorRule;
    OpalInputValidator = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-input-validator',
            template: '@section/inner { rt-content/content }',
            oevents: {
                'text-input': {
                    input: function () {
                        if (this.failedRule) {
                            this._validate([this.failedRule]);
                        }
                    },
                    change: function () {
                        this.validate();
                    }
                }
            }
        })
    ], OpalInputValidator);
    return OpalInputValidator;
}(rionite_1.Component));
exports.OpalInputValidator = OpalInputValidator;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-input-validator{position:relative;display:inline-block;vertical-align:middle}.opal-input-validator .opal-input-validator__text-input{display:block}.opal-input-validator[valid=no] .opal-input-validator__text-input .opal-text-input__text-field{border-color:#f50000}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 67 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
__webpack_require__(68);
var template = __webpack_require__(69);
var OpalInputValidatorRule = (function (_super) {
    __extends(OpalInputValidatorRule, _super);
    function OpalInputValidatorRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalInputValidatorRule.prototype.showMessage = function () {
        this.$('popover').open();
    };
    OpalInputValidatorRule.prototype.hideMessage = function () {
        this.$('popover').close();
    };
    OpalInputValidatorRule = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-input-validator-rule',
            input: {
                required: { default: false, readonly: true },
                minLength: { type: Number, readonly: true },
                regex: { type: eval, readonly: true },
                test: { type: String, readonly: true },
                popoverTo: 'right'
            },
            template: template
        })
    ], OpalInputValidatorRule);
    return OpalInputValidatorRule;
}(rionite_1.Component));
exports.OpalInputValidatorRule = OpalInputValidatorRule;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-input-validator-rule{display:block}.opal-input-validator-rule .opal-input-validator-rule__content{display:block;width:240px;text-align:center}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nopal-popover/popover (to={input.popoverTo}) {\nrt-content/content\n}\n}"

/***/ }),
/* 70 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(71);
var formatDate_1 = __webpack_require__(72);
__webpack_require__(73);
var parseDate_1 = __webpack_require__(74);
var template = __webpack_require__(75);
var nextTick = cellx_1.Utils.nextTick;
function getTodayDate() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
var OpalCalendar = (function (_super) {
    __extends(OpalCalendar, _super);
    function OpalCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalCalendar_1 = OpalCalendar;
    OpalCalendar.prototype.initialize = function () {
        var i18n = this.constructor.i18n;
        var sundayFirst = i18n.sundayFirst;
        this.weekDays = sundayFirst ? i18n.weekDays : i18n.weekDays.slice(1).concat(i18n.weekDays[0]);
        this.weekDaysShort = sundayFirst ?
            i18n.weekDaysShort :
            i18n.weekDaysShort.slice(1).concat(i18n.weekDaysShort[0]);
        cellx_1.define(this, {
            fromDate: function () {
                var fromDate = this.input.fromDate;
                if (fromDate) {
                    return fromDate == 'today' ? getTodayDate() : parseDate_1.parseDate(fromDate);
                }
                var toDate = this.input.toDate;
                var date = toDate && toDate != 'today' ? parseDate_1.parseDate(toDate) : new Date();
                return new Date(date.getFullYear() - 100, date.getMonth(), date.getDate());
            },
            toDate: function () {
                var toDate = this.input.toDate;
                if (toDate) {
                    return toDate == 'today' ? getTodayDate() : parseDate_1.parseDate(toDate);
                }
                var fromDate = this.input.fromDate;
                var date = fromDate && fromDate != 'today' ? parseDate_1.parseDate(fromDate) : new Date();
                return new Date(date.getFullYear() + 100, date.getMonth(), date.getDate());
            },
            fromYear: function () {
                return this.fromDate.getFullYear();
            },
            toYear: function () {
                return this.toDate.getFullYear();
            },
            years: function () {
                var years = [];
                for (var year = this.fromYear, toYear = this.toYear; year <= toYear; year++) {
                    years.push(year);
                }
                return years;
            },
            value: function () {
                var value = this.input.value;
                return value ? parseDate_1.parseDate(value) : null;
            }
        });
        var fromDate = this.fromDate;
        var toDate = this.toDate;
        if (fromDate > toDate) {
            throw new TypeError('"fromDate" must be less than or equal to "toDate"');
        }
        var value = this.value;
        var shownDate;
        if (value) {
            if (isNaN(+value)) {
                throw new TypeError('Invalid "value"');
            }
            shownDate = value;
        }
        else {
            var today = getTodayDate();
            shownDate = today < fromDate ? fromDate : (today > toDate ? toDate : today);
        }
        cellx_1.define(this, {
            shownYear: shownDate.getFullYear(),
            shownMonth: shownDate.getMonth(),
            isBtnPrevMonthDisabled: function () {
                return this.shownYear == this.fromYear && !this.shownMonth;
            },
            isBtnNextMonthDisabled: function () {
                return this.shownYear == this.toYear && this.shownMonth == 11;
            },
            days: function (cell, oldDays) {
                var dateDelimiter = this.input.dateDelimiter;
                var fromDate = this.fromDate;
                var toDate = this.toDate;
                var value = this.value;
                var shownYear = this.shownYear;
                var shownMonth = this.shownMonth;
                if (this._currentlyDateSelection) {
                    this._currentlyDateSelection = false;
                    return oldDays;
                }
                var now = new Date();
                var nowYear = now.getFullYear();
                var nowMonth = now.getMonth();
                var nowDay = now.getDate();
                var selectedYear;
                var selectedMonth;
                var selectedDay;
                if (value) {
                    selectedYear = value.getFullYear();
                    selectedMonth = value.getMonth();
                    selectedDay = value.getDate();
                }
                var lastPrevMonthDay = new Date(shownYear, shownMonth, 0).getDate();
                var lastMonthDay = new Date(shownYear, shownMonth + 1, 0).getDate();
                var firstMonthDayWeekDayIndex = new Date(shownYear, shownMonth, 1).getDay();
                if (!sundayFirst) {
                    firstMonthDayWeekDayIndex = (firstMonthDayWeekDayIndex || 7) - 1;
                }
                var weekDays = [];
                var days = [weekDays];
                function pushDay(year, month, day, notInCurrentMonth) {
                    var date = new Date(year, month, day);
                    var disabled = date < fromDate || date > toDate;
                    weekDays.push({
                        date: formatDate_1.formatDate(year, month, day, dateDelimiter),
                        value: day,
                        weekDay: [
                            'sunday',
                            'monday',
                            'tuesday',
                            'wednesday',
                            'thursday',
                            'friday',
                            'saturday'
                        ][date.getDay()],
                        today: year == nowYear && month == nowMonth && day == nowDay,
                        selected: !!value && year == selectedYear && month == selectedMonth &&
                            day == selectedDay,
                        notInCurrentMonth: notInCurrentMonth,
                        disabled: disabled,
                        tabIndex: disabled ? null : 0
                    });
                }
                for (var i = firstMonthDayWeekDayIndex; i;) {
                    pushDay(shownYear - +!shownMonth, shownMonth ? shownMonth - 1 : 11, lastPrevMonthDay - (--i), true);
                }
                for (var i = 0; i < lastMonthDay;) {
                    pushDay(shownYear, shownMonth, ++i, false);
                    if (!((i + firstMonthDayWeekDayIndex) % 7) && i < lastMonthDay) {
                        days.push((weekDays = []));
                    }
                }
                for (var i = 0, l = 7 - weekDays.length; i < l;) {
                    pushDay(shownYear + +(shownMonth == 11), (shownMonth + 1) % 12, ++i, true);
                }
                return days;
            }
        });
    };
    OpalCalendar.prototype.elementAttached = function () {
        this.listenTo('days', {
            focus: function (evt) {
                var _this = this;
                if (evt.target.classList.contains('opal-calendar__day')) {
                    nextTick(function () {
                        if (document.activeElement == evt.target && !_this._documentKeyDownListening) {
                            _this._documentKeyDownListening = _this.listenTo(document, 'keydown', _this._onDocumentKeyDown);
                        }
                    });
                }
            },
            blur: function () {
                var _this = this;
                setTimeout(function () {
                    if (!document.activeElement.classList.contains('opal-calendar__day')) {
                        _this._documentKeyDownListening.stop();
                        _this._documentKeyDownListening = null;
                    }
                }, 1);
            }
        }, this, true);
    };
    OpalCalendar.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */) {
            evt.preventDefault();
            this._click(document.activeElement);
        }
    };
    OpalCalendar.prototype._click = function (dayEl) {
        if (dayEl.hasAttribute('selected') || dayEl.hasAttribute('disabled')) {
            return;
        }
        var selectedDayEl = this.$('days').querySelector('[selected]');
        if (selectedDayEl) {
            selectedDayEl.removeAttribute('selected');
        }
        dayEl.setAttribute('selected', '');
        this._currentlyDateSelection = true;
        this.input.value = dayEl.dataset.date;
        this.emit('change');
    };
    OpalCalendar = OpalCalendar_1 = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-calendar',
            input: {
                fromDate: String,
                toDate: String,
                value: String,
                dateDelimiter: { default: '/', readonly: true }
            },
            i18n: {
                previousMonth: 'Предыдущий месяц',
                nextMonth: 'Следующий месяц',
                months: [
                    'Январь', 'Февраль', 'Март', 'Апрель',
                    'Май', 'Июнь', 'Июль', 'Август',
                    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
                ],
                weekDays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                weekDaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                sundayFirst: false
            },
            template: template,
            oevents: {
                'btn-prev-month': {
                    click: function () {
                        if (this.shownMonth) {
                            this.shownMonth--;
                        }
                        else {
                            this.shownYear--;
                            this.shownMonth = 11;
                        }
                    }
                },
                'btn-next-month': {
                    click: function () {
                        if (this.shownMonth == 11) {
                            this.shownYear++;
                            this.shownMonth = 0;
                        }
                        else {
                            this.shownMonth++;
                        }
                    }
                },
                's-month': {
                    '<opal-select-option>select': function (evt) {
                        this.shownMonth = +evt.target.value;
                    }
                },
                's-year': {
                    '<opal-select-option>select': function (evt) {
                        this.shownYear = +evt.target.value;
                    }
                }
            },
            domEvents: {
                day: {
                    click: function (evt) {
                        this._click(evt.target);
                    }
                }
            }
        })
    ], OpalCalendar);
    return OpalCalendar;
    var OpalCalendar_1;
}(rionite_1.Component));
exports.OpalCalendar = OpalCalendar;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 28\" id=\"opal-components__icon-arrow-left\"><path stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" fill=\"none\" d=\"M14 2L2 14l12 12M2 14h28\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function formatDate(year, month, day, delimiter) {
    if (delimiter === void 0) { delimiter = '/'; }
    return ('0' + day).slice(-2) + delimiter + ('0' + (month + 1)).slice(-2) + delimiter + ('000' + year).slice(-4);
}
exports.formatDate = formatDate;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-calendar{display:block;width:300px;border:1px solid #dbdbdb;border-radius:3px;background:#fff;color:#000;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400}.opal-calendar .opal-calendar__header{position:relative;padding:8px 44px;text-align:center}.opal-calendar .opal-calendar__btn-prev-month,.opal-calendar .opal-calendar__btn-next-month{position:absolute;top:0;bottom:0;margin:auto;padding:0;width:30px;height:30px;border:0;border-radius:50%;background:0 0;cursor:pointer}.opal-calendar .opal-calendar__btn-prev-month{left:8px}.opal-calendar .opal-calendar__btn-next-month{right:8px}.opal-calendar .opal-calendar__btn-prev-month:hover,.opal-calendar .opal-calendar__btn-next-month:hover{background:#e6e6e6}.opal-calendar .opal-calendar__btn-prev-month:focus,.opal-calendar .opal-calendar__btn-next-month:focus{outline:none}body:not(._no-focus-highlight) .opal-calendar .opal-calendar__btn-prev-month:focus::after,body:not(._no-focus-highlight) .opal-calendar .opal-calendar__btn-next-month:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px #33a0ff;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-calendar .opal-calendar__btn-prev-month:active,.opal-calendar .opal-calendar__btn-next-month:active{background:#ccc}.opal-calendar .opal-calendar__btn-prev-month[disabled],.opal-calendar .opal-calendar__btn-next-month[disabled]{background:0 0;color:#000;opacity:.3;cursor:default}.opal-calendar .opal-calendar__btn-prev-month-icon,.opal-calendar .opal-calendar__btn-next-month-icon{display:block;margin:auto;width:16px;height:16px;fill:currentColor}.opal-calendar .opal-calendar__btn-next-month-icon{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1)}.opal-calendar .opal-calendar__body{padding:0 8px 8px;text-align:center;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-calendar .opal-calendar__week-days,.opal-calendar .opal-calendar__days{width:100%;border-spacing:0;border-collapse:separate}.opal-calendar .opal-calendar__week-day,.opal-calendar .opal-calendar__day{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 7px;width:14.2857%;border:1px solid transparent}.opal-calendar .opal-calendar__day{position:relative;border-radius:3px;cursor:pointer}.opal-calendar .opal-calendar__day:hover{background:#e6e6e6}.opal-calendar .opal-calendar__day:focus{outline:none}body:not(._no-focus-highlight) .opal-calendar .opal-calendar__day:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px #33a0ff;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-calendar .opal-calendar__day:active{background:#ccc}.opal-calendar .opal-calendar__day[today]{text-decoration:underline}.opal-calendar .opal-calendar__day[not-in-current-month]{opacity:.45}.opal-calendar .opal-calendar__day[disabled]{background:0 0;opacity:.15;cursor:default}.opal-calendar .opal-calendar__day[selected]{color:#0d87f2;opacity:1}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function parseDate(date) {
    var d = date.match(/\d+/g);
    return new Date(+d[2], +d[1] - 1, +d[0]);
}
exports.parseDate = parseDate;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nheader/header {\nbutton/btn-prev-month (disabled={isBtnPrevMonthDisabled}) {\nsvg/btn-prev-month-icon (viewBox=0 0 32 28) { use (xlink:href=#opal-components__icon-arrow-left) }\n}\nopal-select/s-month (size=s, value=['{shownMonth}']) {\n@repeat (class=opal-select__menu-content, for=month of constructor.i18n.months, rt-silent) {\nopal-select-option (value={$index}, text={month})\n}\n}\n' '\nopal-select/s-year (size=s, value=['{shownYear}']) {\n@repeat (class=opal-select__menu-content, for=year of years, rt-silent) {\nopal-select-option (value={year}, text={year})\n}\n}\nbutton/btn-next-month (disabled={isBtnNextMonthDisabled}) {\nsvg/btn-next-month-icon (viewBox=0 0 32 28) { use (xlink:href=#opal-components__icon-arrow-left) }\n}\n}\ndiv/body {\ndiv/week-days {\ndiv/week-days-row {\n@repeat (for=weekDay of weekDaysShort, rt-silent) {\nspan/week-day { '{weekDay}' }\n}\n}\n}\ndiv/days {\n@repeat (for=weekDays of days, rt-silent) {\ndiv/days-row {\n@repeat (for=day of weekDays, rt-silent) {\nspan/day (\nweek-day={day.weekDay},\ntoday={day.today},\nselected={day.selected},\nnot-in-current-month={day.notInCurrentMonth},\ndisabled={day.disabled},\ntabindex={day.tabIndex},\ndata-date={day.date}\n) { '{day.value}' }\n}\n}\n}\n}\n}\n}"

/***/ }),
/* 76 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var date_exists_1 = __webpack_require__(77);
var rionite_1 = __webpack_require__(0);
var isFocusable_1 = __webpack_require__(2);
__webpack_require__(78);
var template = __webpack_require__(79);
function pad(num) {
    return (num < 10 ? '0' : '') + num;
}
var OpalDateInput = (function (_super) {
    __extends(OpalDateInput, _super);
    function OpalDateInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dateExists = date_exists_1.default;
        return _this;
    }
    OpalDateInput.prototype.dateInRange = function (date) {
        var calendar = this.$('calendar');
        var match = date.match(/\d+/g);
        var day = +match[0];
        var month = +match[1] - 1;
        var year = +match[2];
        if (year < 100) {
            year += year < 50 ? 2000 : 1900;
        }
        var d = new Date(year, month, day);
        return d >= calendar.fromDate && d <= calendar.toDate;
    };
    OpalDateInput.prototype.elementAttached = function () {
        this.listenTo(this.$('text-input').element, 'click', this._onTextInputClick);
    };
    OpalDateInput.prototype._onTextInputClick = function () {
        this.$('calendar-menu').open();
    };
    OpalDateInput.prototype._onDocumentFocus = function (evt) {
        if (!isFocusable_1.isFocusable(evt.target)) {
            return;
        }
        if (!this.element.contains(evt.target.parentNode)) {
            this.$('calendar-menu').close();
        }
    };
    OpalDateInput.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 27 /* Esc */) {
            evt.preventDefault();
            this.$('calendar-menu').close();
        }
    };
    OpalDateInput.prototype._onDocumentClick = function (evt) {
        if (!this.element.contains(evt.target)) {
            this.$('calendar-menu').close();
        }
    };
    Object.defineProperty(OpalDateInput.prototype, "value", {
        get: function () {
            return this.$('calendar').value;
        },
        enumerable: true,
        configurable: true
    });
    OpalDateInput.prototype.getISOValue = function (h, m, s, ms) {
        var date = this.value;
        if (!date) {
            return null;
        }
        date = new Date(date);
        if (h) {
            date.setHours(h);
        }
        if (m) {
            date.setMinutes(m);
        }
        if (s) {
            date.setSeconds(s);
        }
        if (ms) {
            date.setMilliseconds(ms);
        }
        return ('000' + date.getUTCFullYear()).slice(-4) + '-' +
            pad(date.getUTCMonth() + 1) + '-' +
            pad(date.getUTCDate()) + 'T' +
            pad(date.getUTCHours()) + ':' +
            pad(date.getUTCMinutes()) + ':' +
            pad(date.getUTCSeconds()) + '.' +
            ('00' + date.getUTCMilliseconds()).slice(-3) + 'Z';
    };
    OpalDateInput.prototype.validate = function () {
        return this.$('input-validator').validate();
    };
    OpalDateInput = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-date-input',
            input: {
                fromDate: String,
                toDate: String,
                value: String,
                placeholder: 'dd.mm.yyyy',
                mask: '99.99.9999',
                required: { default: false, readonly: true },
                popoverTo: 'right'
            },
            i18n: {
                isRequiredField: rionite_1.getText.t('Поле обязательно для заполнения'),
                nonExistentDate: rionite_1.getText.t('Несуществующая дата'),
                invalidDateRange: rionite_1.getText.t('Дата вне допустимого диапазона')
            },
            template: template,
            oevents: {
                'text-input': {
                    change: function (evt) {
                        if (this.$('input-validator').valid) {
                            this.$('calendar').input.value = evt.target.value;
                        }
                    }
                },
                'calendar-menu': {
                    'input-opened-change': function (evt) {
                        if (evt.value) {
                            this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
                            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
                            this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
                        }
                        else {
                            this._documentFocusListening.stop();
                            this._documentKeyDownListening.stop();
                            this._documentClickListening.stop();
                        }
                    }
                },
                calendar: {
                    change: function (evt) {
                        this.$('calendar-menu').close();
                        var textInput = this.$('text-input');
                        textInput.value = evt.target.input.value;
                        textInput.focus();
                    }
                }
            }
        })
    ], OpalDateInput);
    return OpalDateInput;
}(rionite_1.Component));
exports.OpalDateInput = OpalDateInput;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function dateExists(date) {
    var match = date.match(/\d+/g);
    if (!match) {
        return false;
    }
    var day = +match[0];
    var month = +match[1] - 1;
    var year = +match[2];
    if (year < 100) {
        year += year < 50 ? 2000 : 1900;
    }
    var d = new Date(year, month, day);
    return day == d.getDate() && month == d.getMonth() && year == d.getFullYear();
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dateExists;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-date-input{position:relative;display:inline-block;vertical-align:middle}.opal-date-input .opal-date-input__text-input{display:block}.opal-date-input .opal-date-input__calendar-menu{overflow:visible;padding:0;min-width:auto}.opal-date-input .opal-date-input__calendar{border:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nopal-input-validator/input-validator {\n@if-then (if=input.required, rt-silent) {\nopal-input-validator-rule/input-validator-rule-required (required, popover-to={input.popoverTo}) {\n'{constructor.i18n.isRequiredField}'\n}\n}\nopal-input-validator-rule/input-validator-rule-date-exists (test=dateExists, popover-to={input.popoverTo}) {\n'{constructor.i18n.nonExistentDate}'\n}\nopal-input-validator-rule/input-validator-rule-date-in-range (test=dateInRange, popover-to={input.popoverTo}) {\n'{constructor.i18n.invalidDateRange}'\n}\nopal-input-mask/input-mask (mask={input.mask}) {\nopal-text-input/text-input (\nclass=opal-input-validator__text-input opal-input-mask__text-input,\nvalue={input.value},\nplaceholder={input.placeholder},\nclearable\n)\n}\n}\nopal-dropdown/calendar-menu (auto-height=no) {\nopal-calendar/calendar (from-date={input.fromDate}, to-date={input.toDate}, value={input.value}, date-delimiter=.)\n}\n}"

/***/ }),
/* 80 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
__webpack_require__(81);
var OpalLoader = (function (_super) {
    __extends(OpalLoader, _super);
    function OpalLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalLoader = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-loader',
            input: {
                size: 'm',
                shown: false
            }
        })
    ], OpalLoader);
    return OpalLoader;
}(rionite_1.Component));
exports.OpalLoader = OpalLoader;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-loader{position:relative;display:none;margin:auto;width:38px;height:38px;border:15px solid transparent;background:rgba(255,255,255,.5)}.opal-loader::before,.opal-loader::after{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin:auto;width:100%;height:100%;border:3px solid #1b91f8;border-top-color:transparent;border-radius:50%;content:'';-webkit-animation:opal-loader-animation 1.2s infinite linear;animation:opal-loader-animation 1.2s infinite linear}.opal-loader::after{width:26px;height:26px;border-color:#f63159;border-bottom-color:transparent;-webkit-animation-direction:reverse;animation-direction:reverse}.opal-loader[size=s]{width:18px;height:18px;border-width:6px}.opal-loader[size=s]::before{border-width:2px}.opal-loader[size=s]::after{content:none}.opal-loader[shown]{display:block}@-webkit-keyframes opal-loader-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes opal-loader-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 82 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(83);
var template = __webpack_require__(84);
var mixin = cellx_1.Utils.mixin;
var OpalLoadedList = (function (_super) {
    __extends(OpalLoadedList, _super);
    function OpalLoadedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._scrolling = false;
        return _this;
    }
    OpalLoadedList.prototype.initialize = function () {
        var input = this.input;
        var dataProvider = input.dataprovider;
        if (dataProvider || input.dataproviderKeypath) {
            if (!dataProvider) {
                dataProvider = Function("return this." + input.dataproviderKeypath + ";")
                    .call(this.ownerComponent || window);
                if (!dataProvider) {
                    throw new TypeError('"dataProvider" is not defined');
                }
            }
            this.dataProvider = dataProvider;
        }
        else {
            throw new TypeError('Property "dataprovider" is required');
        }
        cellx_1.define(this, {
            list: new cellx_1.ObservableList(),
            total: undefined,
            _isLoadingCheckPlanned: false,
            loading: false,
            empty: function () {
                return !this.list.length;
            },
            isLoaderShown: function () {
                return this.total === undefined || this.list.length < this.total || this.loading;
            },
            isNothingFoundShown: function () {
                return this.total === 0 && !this._isLoadingCheckPlanned && !this.loading;
            }
        });
    };
    OpalLoadedList.prototype.elementAttached = function () {
        this.listenTo(this, 'input-query-change', this._onInputQueryChange);
        this.listenTo(this.element, 'scroll', this._onElementScroll);
        if (this.input.preloading) {
            this._load();
        }
        else {
            this.checkLoading();
        }
    };
    OpalLoadedList.prototype._onInputQueryChange = function () {
        var _this = this;
        if (this.loading) {
            this._requestCallback.cancel();
            this.loading = false;
        }
        this.list.clear();
        this.total = undefined;
        if (this._isLoadingCheckPlanned) {
            this._loadingCheckTimeout.clear();
        }
        else {
            this._isLoadingCheckPlanned = true;
        }
        this._loadingCheckTimeout = this.setTimeout(function () {
            _this._scrolling = false;
            _this._isLoadingCheckPlanned = false;
            _this.checkLoading();
        }, 300);
    };
    OpalLoadedList.prototype._onElementScroll = function () {
        var _this = this;
        if (this._scrolling) {
            return;
        }
        this._scrolling = true;
        if (this._isLoadingCheckPlanned) {
            this._loadingCheckTimeout.clear();
        }
        else {
            this._isLoadingCheckPlanned = true;
        }
        this._loadingCheckTimeout = this.setTimeout(function () {
            _this._scrolling = false;
            _this._isLoadingCheckPlanned = false;
            _this.checkLoading();
        }, 150);
    };
    OpalLoadedList.prototype.checkLoading = function () {
        if (this.input.query === this._lastRequestedQuery &&
            (this.loading || this.total !== undefined && this.list.length == this.total)) {
            return;
        }
        var elRect = this.element.getBoundingClientRect();
        if (!elRect.height || elRect.bottom < this.$('loader').element.getBoundingClientRect().top) {
            return;
        }
        this._load();
    };
    OpalLoadedList.prototype._load = function () {
        if (this.loading) {
            this._requestCallback.cancel();
        }
        var query = this._lastRequestedQuery = this.input.query;
        var dataProvider = this.dataProvider;
        var infinite = dataProvider.getItems.length >= 2;
        var args = [query];
        if (infinite) {
            args.unshift(this.input.count, this.list.length ? this.list.get(-1).value : undefined);
        }
        this.loading = true;
        dataProvider.getItems.apply(dataProvider, args).then(this._requestCallback = this.registerCallback(function (data) {
            var _this = this;
            this.loading = false;
            var items = data.items;
            this.total = infinite && data.total !== undefined ? data.total : items.length;
            if (query === this._lastLoadedQuery) {
                this.list.addRange(items);
            }
            else {
                this.list.clear().addRange(items);
                this._lastLoadedQuery = query;
            }
            cellx_1.Cell.forceRelease();
            this.emit('loaded');
            setTimeout(function () {
                _this.checkLoading();
            }, 1);
        }));
    };
    OpalLoadedList.prototype._getListItemContext = function (context, content) {
        return mixin(Object.create(context), content.input.$context);
    };
    OpalLoadedList = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-loaded-list',
            input: {
                dataprovider: { type: Object, readonly: true },
                dataproviderKeypath: { type: String, readonly: true },
                count: 100,
                query: String,
                itemAs: { default: '$item', readonly: true },
                preloading: { default: false, readonly: true }
            },
            i18n: {
                nothingFound: rionite_1.getText.t('Ничего не найдено')
            },
            template: template
        })
    ], OpalLoadedList);
    return OpalLoadedList;
}(rionite_1.Component));
exports.OpalLoadedList = OpalLoadedList;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-loaded-list{position:relative;display:block;overflow-x:hidden;overflow-y:auto;height:500px}.opal-loaded-list .opal-loaded-list__list-item{display:block}.opal-loaded-list .opal-loaded-list__loader[align-center]{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}.opal-loaded-list .opal-loaded-list__nothing-found{display:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;height:100%;text-align:center;white-space:nowrap}.opal-loaded-list .opal-loaded-list__nothing-found::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.opal-loaded-list .opal-loaded-list__nothing-found-message{display:inline-block;vertical-align:middle;opacity:.6}.opal-loaded-list .opal-loaded-list__nothing-found[shown]{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\ndiv/list {\n@repeat (for={input.itemAs} of list) {\nrt-content/list-item (clone, get-context=_getListItemContext)\n}\n}\nopal-loader/loader (shown={isLoaderShown}, align-center={empty})\ndiv/nothing-found (shown={isNothingFoundShown}) {\nspan/nothing-found-message { '{constructor.i18n.nothingFound}' }\n}\n}"

/***/ }),
/* 85 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
__webpack_require__(86);
var template = __webpack_require__(87);
var OpalFilteredList = (function (_super) {
    __extends(OpalFilteredList, _super);
    function OpalFilteredList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalFilteredList.prototype.focus = function () {
        var queryInput = this.$('query-input');
        if (queryInput) {
            queryInput.focus();
        }
    };
    OpalFilteredList = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-filtered-list',
            i18n: {
                queryInputPlaceholder: rionite_1.getText.t('Поиск')
            },
            template: template,
            oevents: {
                'query-input': {
                    input: function (evt) {
                        this.$('loaded-list').input.query = evt.target.value;
                    }
                }
            }
        })
    ], OpalFilteredList);
    return OpalFilteredList;
}(rionite_1.Component));
exports.OpalFilteredList = OpalFilteredList;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-filtered-list .opal-filtered-list__query-input-container{display:block}.opal-filtered-list .opal-filtered-list__query-input{display:block;margin-bottom:15px;width:auto}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nrt-content (select=.opal-filtered-list__query-input-container) {\nrt-content/query-input-container (select=.opal-filtered-list__query-input) {\nopal-text-input/query-input (placeholder={constructor.i18n.queryInputPlaceholder})\n}\n}\nrt-content/loaded-list-container (select=.opal-filtered-list__loaded-list)\n}"

/***/ }),
/* 88 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var isFocusable_1 = __webpack_require__(2);
__webpack_require__(89);
var template = __webpack_require__(90);
function toComparable(str) {
    return str.replace(/\s+/g, ' ').toLowerCase();
}
var OpalAutosuggest = (function (_super) {
    __extends(OpalAutosuggest, _super);
    function OpalAutosuggest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isNotInputConfirmed = false;
        return _this;
    }
    OpalAutosuggest.prototype.initialize = function () {
        var input = this.input;
        var dataProvider = input.dataprovider;
        if (dataProvider || input.dataproviderKeypath) {
            if (!dataProvider) {
                dataProvider = Function("return this." + input.dataproviderKeypath + ";")
                    .call(this.ownerComponent || window);
                if (!dataProvider) {
                    throw new TypeError('"dataProvider" is not defined');
                }
            }
            this.dataProvider = dataProvider;
        }
        else {
            throw new TypeError('Property "dataprovider" is required');
        }
        cellx_1.define(this, {
            list: new cellx_1.ObservableList(),
            _isLoadingPlanned: false,
            loading: false,
            isLoaderShown: function () {
                return this._isLoadingPlanned || this.loading;
            },
            selectedItem: input.selectedItem
        });
    };
    OpalAutosuggest.prototype.elementAttached = function () {
        this.listenTo(this, 'input-selected-item-change', this._onInputSelectedItemChange);
        this.listenTo('text-input', {
            focus: this._onTextInputFocus,
            blur: this._onTextInputBlur,
            input: this._onTextInputInput,
            change: this._onTextInputChange
        });
        this.listenTo(this.$('text-input').textField, 'click', this._onTextFieldClick);
        this.listenTo('menu', 'input-opened-change', this._onMenuInputOpenedChange);
        this.listenTo(this.$('menu').element, 'mouseover', this._onMenuElementMouseOver);
        this.listenTo(this.list, 'change', this._onListChange);
        this.listenTo(this, 'change:isLoaderShown', this._onIsLoaderShownChange);
    };
    OpalAutosuggest.prototype.ready = function () {
        if (this.selectedItem) {
            this.$('text-input').value = this.selectedItem.text;
        }
    };
    OpalAutosuggest.prototype._onInputSelectedItemChange = function (evt) {
        var value = evt.value;
        this._clearList();
        this.selectedItem = value;
        this.$('text-input').value = value ? value.text : '';
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
        if (!this.$('menu').input.opened) {
            this._setSelectedItemOfList();
        }
    };
    OpalAutosuggest.prototype._onTextInputInput = function (evt) {
        var _this = this;
        this._isNotInputConfirmed = true;
        this._clearList();
        if ((evt.target.value || '').length >= this.input.minQueryLength) {
            this._isLoadingPlanned = true;
            this._loadingTimeout = this.setTimeout(function () {
                _this._isLoadingPlanned = false;
                _this._load();
            }, 300);
        }
    };
    OpalAutosuggest.prototype._onTextInputChange = function (evt) {
        if (!evt.target.value) {
            this._clearList();
            if (this.selectedItem) {
                this.selectedItem = null;
                this.emit('change');
            }
        }
    };
    OpalAutosuggest.prototype._onTextFieldClick = function () {
        this.openMenu();
    };
    OpalAutosuggest.prototype._onMenuInputOpenedChange = function (evt) {
        if (evt.value) {
            this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
        }
        else {
            this._documentFocusListening.stop();
            this._documentKeyDownListening.stop();
            this._documentClickListening.stop();
        }
    };
    OpalAutosuggest.prototype._onMenuElementMouseOver = function (evt) {
        var menu = this.$('menu').element;
        var el = evt.target;
        for (; !el.classList.contains('opal-autosuggest__list-item'); el = el.parentNode) {
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
    OpalAutosuggest.prototype._onListChange = function () {
        this.openMenu();
    };
    OpalAutosuggest.prototype._onIsLoaderShownChange = function (evt) {
        this.$('text-input').input.loading = evt.value;
    };
    OpalAutosuggest.prototype._onDocumentFocus = function (evt) {
        if (!isFocusable_1.isFocusable(evt.target)) {
            return;
        }
        if (!this.element.contains(evt.target.parentNode)) {
            this.closeMenu();
            this._setSelectedItemOfList();
        }
    };
    OpalAutosuggest.prototype._onDocumentKeyDown = function (evt) {
        switch (evt.which) {
            case 38 /* Up */:
            case 40 /* Bottom */: {
                evt.preventDefault();
                var focusedListItem = this._focusedListItem;
                if (focusedListItem) {
                    var listItems = this.$$('list-item');
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
                evt.preventDefault();
                var focusedListItem = this._focusedListItem;
                if (focusedListItem) {
                    var focusedListItemDataSet = focusedListItem.dataset;
                    this.$('text-input').value = focusedListItemDataSet.text;
                    this._clearList();
                    this._setSelectedItem({
                        value: focusedListItemDataSet.value,
                        text: focusedListItemDataSet.text
                    });
                }
                break;
            }
            case 27 /* Esc */: {
                evt.preventDefault();
                this.closeMenu();
                this._setSelectedItemOfList();
                break;
            }
        }
    };
    OpalAutosuggest.prototype._onDocumentClick = function (evt) {
        if (!this.element.contains(evt.target)) {
            this.closeMenu();
            this._setSelectedItemOfList();
        }
    };
    OpalAutosuggest.prototype._load = function () {
        this.loading = true;
        var dataProvider = this.dataProvider;
        var args = [this.$('text-input').value];
        if (dataProvider.getItems.length >= 2) {
            args.unshift(this.input.count);
        }
        dataProvider.getItems.apply(dataProvider, args)
            .then(this._requestCallback = this.registerCallback(this._itemsRequestCallback));
    };
    OpalAutosuggest.prototype._itemsRequestCallback = function (data) {
        var _this = this;
        this.loading = false;
        var items = data.items;
        if (items.length) {
            this.list.addRange(items);
            cellx_1.Cell.afterRelease(function () {
                var focusedListItem = _this.$('list-item');
                _this._focusedListItem = focusedListItem;
                focusedListItem.setAttribute('focused', '');
            });
        }
        else if (this.input.openMenuOnNothingFound) {
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
        if (force || this.list.length) {
            this.$('menu').open();
        }
        return this;
    };
    OpalAutosuggest.prototype.closeMenu = function () {
        this.$('menu').close();
        return this;
    };
    OpalAutosuggest.prototype._setSelectedItemOfList = function () {
        if (this._isNotInputConfirmed) {
            var comparableQuery_1 = toComparable(this.$('text-input').value || '');
            var selectedItem = this.list.find(function (item) { return toComparable(item.text) == comparableQuery_1; }) || null;
            if (selectedItem && this.list.length > 1) {
                this._clearList();
            }
            this._setSelectedItem(selectedItem);
        }
    };
    OpalAutosuggest.prototype._setSelectedItem = function (selectedItem) {
        if (selectedItem) {
            this._isNotInputConfirmed = false;
            if (this.selectedItem && this.selectedItem.value == selectedItem.value) {
                return;
            }
        }
        else if (!this.selectedItem) {
            return;
        }
        this.selectedItem = selectedItem;
        this.emit('change');
    };
    OpalAutosuggest.prototype.clear = function () {
        this._clearList();
        if (this.selectedItem) {
            this.selectedItem = null;
        }
        this.$('text-input').clear();
    };
    OpalAutosuggest.prototype._clearList = function () {
        this._cancelLoading();
        this.closeMenu();
        this.list.clear();
        this._focusedListItem = null;
    };
    OpalAutosuggest = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-autosuggest',
            input: {
                dataprovider: { type: Object, readonly: true },
                dataproviderKeypath: { type: String, readonly: true },
                selectedItem: eval,
                minQueryLength: 3,
                count: 5,
                openMenuOnNothingFound: false
            },
            i18n: {
                textInputPlaceholder: rionite_1.getText.t('Начните вводить для поиска'),
                nothingFound: rionite_1.getText.t('Ничего не найдено')
            },
            template: template,
            domEvents: {
                'list-item': {
                    click: function (_, listItem) {
                        var textInput = this.$('text-input');
                        var listItemDataSet = listItem.dataset;
                        textInput.value = listItemDataSet.text;
                        textInput.focus();
                        this._clearList();
                        this._setSelectedItem({
                            value: listItemDataSet.value,
                            text: listItemDataSet.text
                        });
                    }
                }
            }
        })
    ], OpalAutosuggest);
    return OpalAutosuggest;
}(rionite_1.Component));
exports.OpalAutosuggest = OpalAutosuggest;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-autosuggest{position:relative;display:inline-block;vertical-align:middle}.opal-autosuggest .opal-autosuggest__text-input{display:block}.opal-autosuggest .opal-autosuggest__list-item{position:relative;padding:7px 22px;background:#fff;color:#000;text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-autosuggest .opal-autosuggest__list-item:hover,.opal-autosuggest .opal-autosuggest__list-item[focused]{background:#e6e6e6}.opal-autosuggest .opal-autosuggest__list-item:active{background:#ccc}.opal-autosuggest .opal-autosuggest__nothing-found-message{display:none;padding:10px;text-align:center;white-space:nowrap;opacity:.6}.opal-autosuggest .opal-autosuggest__nothing-found-message[shown]{display:block}.opal-input-validator .opal-autosuggest{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nrt-content (select=.opal-autosuggest__text-input) {\nopal-text-input/text-input (\nvalue={input.selectedItem.text},\nplaceholder={constructor.i18n.textInputPlaceholder},\nloading={isLoaderShown}\n)\n}\nopal-dropdown/menu {\ndiv/list {\n@repeat (for=item of list, rt-silent) {\ndiv/list-item (data-value={item.value}, data-text={item.text}) {\n'{item.text}'\n}\n}\n}\nspan/nothing-found-message (shown={list.length |not }) { '{constructor.i18n.nothingFound}' }\n}\n}"

/***/ }),
/* 91 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var cellx_indexed_collections_1 = __webpack_require__(4);
var rionite_1 = __webpack_require__(0);
var opal_select_1 = __webpack_require__(3);
__webpack_require__(92);
var template = __webpack_require__(93);
var defaultDataListItemSchema = opal_select_1.OpalSelect.defaultDataListItemSchema;
var defaultVMItemSchema = opal_select_1.OpalSelect.defaultVMItemSchema;
var OpalTagSelect = (function (_super) {
    __extends(OpalTagSelect, _super);
    function OpalTagSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTagSelect.prototype.initialize = function () {
        var input = this.input;
        if (input.datalistKeypath) {
            var context_1 = this.ownerComponent || window;
            var getDataList_1 = Function("return this." + input.datalistKeypath + ";");
            cellx_1.define(this, 'dataList', function () {
                return getDataList_1.call(context_1);
            });
            var dataListItemSchema = input.datalistItemSchema;
            this._dataListItemValueFieldName = dataListItemSchema.value || defaultDataListItemSchema.value;
            this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
            this._dataListItemDisabledFieldName = dataListItemSchema.disabled || defaultDataListItemSchema.disabled;
            this.dataProvider = null;
            this._dataListKeypathParam = 'dataList';
        }
        else {
            this.dataList = null;
            var dataProvider = input.dataprovider;
            if (!dataProvider && input.dataproviderKeypath) {
                dataProvider = Function("return this." + input.dataproviderKeypath + ";")
                    .call(this.ownerComponent || window);
                if (!dataProvider) {
                    throw new TypeError('"dataProvider" is not defined');
                }
            }
            this.dataProvider = dataProvider;
            this._dataListKeypathParam = null;
        }
        if (input.addNewItemKeypath) {
            var addNewItem = this._addNewItem = Function("return this." + input.addNewItemKeypath + ";")
                .call(this.ownerComponent || window);
            if (!addNewItem) {
                throw new TypeError('"addNewItem" is not defined');
            }
        }
        var vmItemSchema = input.viewModelItemSchema;
        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
        this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;
        var vm;
        if (input.viewModelKeypath) {
            vm = Function("return this." + input.viewModelKeypath + ";").call(this.ownerComponent || window);
            if (!vm) {
                throw new TypeError('"viewModel" is not defined');
            }
        }
        else {
            vm = new cellx_indexed_collections_1.IndexedList(undefined, { indexes: [this._viewModelItemValueFieldName] });
        }
        cellx_1.define(this, {
            viewModel: vm,
            isPlaceholderShown: function () {
                return !!this.input.placeholder && !this.viewModel.length;
            }
        });
    };
    OpalTagSelect.prototype._onBtnRemoveTagClick = function (evt, btn) {
        this.viewModel.remove(this.viewModel.get(btn.dataset.tagValue, this._viewModelItemValueFieldName));
        this.emit('change');
    };
    OpalTagSelect = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-tag-select',
            input: {
                viewType: String,
                datalistKeypath: { type: String, readonly: true },
                datalistItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
                // необязательный, так как может указываться на передаваемом opal-loaded-list
                dataprovider: { type: Object, readonly: true },
                dataproviderKeypath: { type: String, readonly: true },
                addNewItemKeypath: { type: String, readonly: true },
                value: eval,
                viewModelKeypath: { type: String, readonly: true },
                viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
                placeholder: rionite_1.getText.t('Не выбрано'),
                popoverTo: 'bottom',
                disabled: false
            },
            template: template,
            oevents: {
                control: {
                    click: function (evt) {
                        var select = this.$('select');
                        var selectEl = select.element;
                        var node = evt.target;
                        if (node != selectEl) {
                            var control = this.$('control');
                            do {
                                if (node == control) {
                                    select.toggle();
                                    break;
                                }
                                node = node.parentNode;
                            } while (node != selectEl);
                        }
                    }
                },
                select: {
                    input: function () {
                        this.$('select').close();
                    },
                    // не соединять on-select и on-deselect в on-change,
                    // тк on-change на opal-select[multiple] генерируется только при закрытии
                    '<opal-select-option>select': function () {
                        this.$('select').close();
                    },
                    '<opal-select-option>deselect': function () {
                        this.$('select').close();
                    }
                }
            }
        })
    ], OpalTagSelect);
    return OpalTagSelect;
}(rionite_1.Component));
exports.OpalTagSelect = OpalTagSelect;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-tag-select{display:inline-block}.opal-tag-select .opal-tag-select__tag{position:relative;top:-1px;display:inline-block;margin:2px 35px 2px 0;padding:0 10px 0 16px;border-top-left-radius:16px;border-bottom-left-radius:16px;background:#5b7d9a;color:#fff;vertical-align:middle;text-decoration:none;text-shadow:none;font:16px/32px Verdana,Geneva,sans-serif;font-weight:400}.opal-tag-select .opal-tag-select__btn-remove-tag{position:absolute;top:0;bottom:0;left:100%;display:block;padding:0;width:32px;border:0;border-top-right-radius:16px;border-bottom-right-radius:16px;background:#516270;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4);cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.opal-tag-select .opal-tag-select__btn-remove-tag::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#fff;content:''}.opal-tag-select .opal-tag-select__btn-remove-tag:hover{background:#5b7d9a}.opal-tag-select .opal-tag-select__btn-remove-tag:focus{outline:none}body:not(._no-focus-highlight) .opal-tag-select .opal-tag-select__btn-remove-tag:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.opal-tag-select .opal-tag-select__btn-remove-tag:active{background:#43484c}.opal-tag-select .opal-tag-select__tag[disabled]{margin-right:3px;padding-right:16px;border-top-right-radius:16px;border-bottom-right-radius:16px}.opal-tag-select .opal-tag-select__tag[disabled] .opal-tag-select__btn-remove-tag{display:none}.opal-tag-select .opal-tag-select__control{display:inline-block;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-tag-select[view-type=primary] .opal-tag-select__tag{background:#0083f5}.opal-tag-select[view-type=primary] .opal-tag-select__btn-remove-tag{background:#0a67b8}.opal-tag-select[view-type=primary] .opal-tag-select__btn-remove-tag:hover{background:#0083f5}.opal-tag-select[view-type=primary] .opal-tag-select__btn-remove-tag:active{background:#0e4b81}.opal-tag-select[view-type=danger] .opal-tag-select__tag{background:#fa0f3e}.opal-tag-select[view-type=danger] .opal-tag-select__btn-remove-tag{background:#c70f34}.opal-tag-select[view-type=danger] .opal-tag-select__btn-remove-tag:hover{background:#fa0f3e}.opal-tag-select[view-type=danger] .opal-tag-select__btn-remove-tag:active{background:#90142c}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nspan/tags {\n@if-then (if=viewModel.length, rt-silent) {\n@repeat (for=tag of viewModel, track-by={_viewModelItemValueFieldName}, rt-silent) {\nspan/tag (\ndata-value='{tag |key(_viewModelItemValueFieldName) }',\ndisabled='{tag |key(_viewModelItemDisabledFieldName) }'\n) {\n'{tag |key(_viewModelItemTextFieldName) }'\nbutton/btn-remove-tag (\ndata-tag-value='{tag |key(_viewModelItemValueFieldName) }',\non-click=_onBtnRemoveTagClick\n)\n}\n' '\n}\n}\n}\nspan/control {\n@if-then (if=isPlaceholderShown, rt-silent) {\nspan/placeholder { '{input.placeholder} ' }\n}\nopal-select/select (\nmultiple,\ndatalist-keypath={_dataListKeypathParam},\ndatalist-item-schema={input.datalistItemSchema |json },\nadd-new-item-keypath=_addNewItem,\nvalue={input.value},\nview-model-keypath=viewModel,\nview-model-item-schema={input.viewModelItemSchema |json }\n) {\nopal-sign-button/button (class=opal-select__button, sign=plus, checkable)\nopal-popover/menu (class=opal-select__menu, to={input.popoverTo}, auto-closing) {\nrt-content (select='.opal-select__menu-content') {\n@if-then (if=input.datalistKeypath) {\ndiv (class=opal-select__menu-content) {\n@if-then (if=dataList.length) {\n@repeat (for=item of dataList) {\nopal-select-option/select-option-of-datalist, select-option (\nvalue='{item |key(_dataListItemValueFieldName) }',\ntext='{item |key(_dataListItemTextFieldName) }',\ndisabled='{item |key(_dataListItemDisabledFieldName) }'\n)\n}\nrt-content (\nclass=opal-select__new-item-input-container,\nselect='.opal-select__new-item-input'\n)\n}\n@if-else (if=dataList.length, rt-silent) {\nopal-loader/menu-loader (shown)\n}\n}\n}\n@if-else (if=input.datalistKeypath) {\nopal-filtered-list/menu-filtered-list (class=opal-select__menu-content opal-select__filtered-list) {\nrt-content (\nclass=opal-filtered-list__query-input-container,\nselect=.opal-filtered-list__query-input\n)\nopal-loaded-list/menu-loaded-list (\nclass=opal-select__loaded-list opal-filtered-list__loaded-list,\ndataprovider-keypath=dataProvider\n) {\nopal-select-option/select-option-of-loaded-list, select-option (\nvalue={$item.value},\ntext={$item.text}\n)\n}\n}\n}\n}\n}\n}\n}\n}"

/***/ }),
/* 94 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_1 = __webpack_require__(1);
var cellx_indexed_collections_1 = __webpack_require__(4);
var rionite_1 = __webpack_require__(0);
__webpack_require__(95);
var opal_multirow_row_1 = __webpack_require__(96);
exports.OpalMultirowRow = opal_multirow_row_1.OpalMultirowRow;
var template = __webpack_require__(99);
var nextUID = cellx_1.Utils.nextUID;
var filter = Array.prototype.filter;
var OpalMultirow = (function (_super) {
    __extends(OpalMultirow, _super);
    function OpalMultirow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalMultirow.prototype.initialize = function () {
        cellx_1.define(this, {
            _presetRowCount: 0,
            _newRows: new cellx_indexed_collections_1.IndexedList(undefined, { indexes: ['key'] }),
            _notHaveNewRows: function () {
                return !this._newRows.length;
            },
            _notSingleRow: function () {
                return this._presetRowCount + this._newRows.length != 1;
            }
        });
    };
    OpalMultirow.prototype.ready = function () {
        var presetRowCount = this._presetRowCount = filter.call(this.element.getElementsByClassName('opal-multirow-row'), function (rowEl) { return rowEl.$component.input.preset; }).length;
        if (!presetRowCount) {
            this._newRows.add({ key: nextUID() });
        }
    };
    OpalMultirow.prototype.elementAttached = function () {
        this.listenTo(this, {
            '<opal-multirow-row>remove-row-click': this._onRemoveRowClick,
            '<opal-multirow-row>add-row-click': this._onAddRowClick
        });
    };
    OpalMultirow.prototype._onRemoveRowClick = function (evt) {
        var _this = this;
        var row = evt.target;
        if (row.input.preset) {
            this.$('preset-rows-container').element.removeChild(row.element);
            this._presetRowCount--;
        }
        else {
            this._newRows.remove(this._newRows.get(row.parentComponent.element.dataset.key, 'key'));
        }
        setTimeout(function () {
            _this.emit('remove-row');
            _this.emit('change');
        }, 1);
    };
    OpalMultirow.prototype._onAddRowClick = function () {
        var _this = this;
        this._newRows.add({ key: nextUID() });
        setTimeout(function () {
            _this.emit('add-row');
            _this.emit('change');
        }, 1);
    };
    OpalMultirow.OpalMultirowRow = opal_multirow_row_1.OpalMultirowRow;
    OpalMultirow = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-multirow',
            template: template
        })
    ], OpalMultirow);
    return OpalMultirow;
}(rionite_1.Component));
exports.OpalMultirow = OpalMultirow;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-multirow{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 96 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
__webpack_require__(97);
var template = __webpack_require__(98);
var OpalMultirowRow = (function (_super) {
    __extends(OpalMultirowRow, _super);
    function OpalMultirowRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalMultirowRow = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-multirow-row',
            input: {
                preset: { default: false, readonly: true }
            },
            template: template,
            events: {
                'btn-remove-row': {
                    click: function () {
                        this.emit('remove-row-click');
                    }
                },
                'btn-add-row': {
                    click: function () {
                        this.emit('add-row-click');
                    }
                }
            }
        })
    ], OpalMultirowRow);
    return OpalMultirowRow;
}(rionite_1.Component));
exports.OpalMultirowRow = OpalMultirowRow;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-multirow-row{display:block;white-space:nowrap}.opal-multirow-row::after{display:table;clear:both;content:''}.opal-multirow-row .opal-multirow-row__content{display:inline-block;margin-bottom:20px;padding-right:6px}.opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow-row .opal-multirow-row__btn-add-row{position:relative;top:1px;display:none}.opal-multirow__preset-rows-container[not-have-new-rows] .opal-multirow-row:last-child .opal-multirow-row__content,.opal-multirow__new-rows rt-content:last-child .opal-multirow-row .opal-multirow-row__content{margin-bottom:0}.opal-multirow__preset-rows-container[not-single-row] .opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow__new-rows[not-single-row] .opal-multirow-row .opal-multirow-row__btn-remove-row,.opal-multirow__preset-rows-container[not-have-new-rows] .opal-multirow-row:last-child .opal-multirow-row__btn-add-row,.opal-multirow__new-rows rt-content:last-child .opal-multirow-row .opal-multirow-row__btn-add-row{display:inline-block}.opal-multirow-row .opal-popover{white-space:normal}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nrt-content/content\n' '\nopal-sign-button/btn-remove-row (sign=minus)\n' '\nopal-sign-button/btn-add-row (sign=plus)\n}"

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "@section/inner {\nrt-content/preset-rows-container (\nselect='opal-multirow-row[preset], .opal-multirow__preset-rows',\nnot-have-new-rows={_notHaveNewRows},\nnot-single-row={_notSingleRow}\n)\ndiv/new-rows (not-single-row={_notSingleRow}) {\n@repeat (for=row of _newRows, track-by=key, rt-silent) {\nrt-content/new-row-container (select='opal-multirow-row:not([preset])', clone, data-key={row.key})\n}\n}\n}"

/***/ }),
/* 100 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var created_browser_history_1 = __webpack_require__(101);
var rionite_1 = __webpack_require__(0);
var escapeRegExp_1 = __webpack_require__(102);
__webpack_require__(103);
var opal_route_1 = __webpack_require__(104);
exports.OpalRoute = opal_route_1.OpalRoute;
var parsePath_1 = __webpack_require__(105);
var PathNodeType_1 = __webpack_require__(7);
var hyphenize = rionite_1.Utils.hyphenize;
var escapeHTML = rionite_1.Utils.escapeHTML;
var forEach = Array.prototype.forEach;
function isReadonlyProperty(propConfig) {
    return propConfig && typeof propConfig == 'object' &&
        (propConfig.type !== undefined || propConfig.default !== undefined) && propConfig.readonly;
}
function valueToAttributeValue(value) {
    return "" + (value === false ? 'no' : (value === true ? 'yes' : escapeHTML(value)));
}
var OpalRouter = (function (_super) {
    __extends(OpalRouter, _super);
    function OpalRouter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._route = null;
        _this._state = null;
        _this._componentElement = null;
        return _this;
    }
    OpalRouter.prototype.initialize = function () {
        this._routes = [];
    };
    OpalRouter.prototype.ready = function () {
        var routes = this._routes;
        forEach.call(this.element.querySelectorAll('opal-route'), function (routeEl) {
            var path = routeEl.$component.input.path;
            var rePath = [];
            var props = [];
            (function processPath(path) {
                for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
                    var node = path_1[_i];
                    switch (node.type) {
                        case PathNodeType_1.PathNodeType.SIMPLE: {
                            rePath.push(escapeRegExp_1.escapeRegExp(node.value).replace('\\*', '.*?'));
                            break;
                        }
                        case PathNodeType_1.PathNodeType.OPTIONAL: {
                            if (node.name) {
                                rePath.push('(');
                                props.push({ name: node.name, optional: true });
                            }
                            else {
                                rePath.push('(?:');
                            }
                            processPath(node.childNodes);
                            rePath.push(')?');
                            break;
                        }
                        case PathNodeType_1.PathNodeType.INSERT: {
                            rePath.push('([^\\/]+)');
                            props.push({ name: node.name, optional: false });
                            break;
                        }
                    }
                }
            })(parsePath_1.parsePath(path));
            rePath = rePath.join('');
            routes.push({
                path: path,
                rePath: RegExp("^" + rePath + (rePath.charAt(rePath.length - 1) == '\/' ? '?' : '\/?') + "$"),
                properties: props,
                componentName: routeEl.$component.input.component
            });
        });
    };
    OpalRouter.prototype.elementAttached = function () {
        var _this = this;
        this.listenTo(this, '<*>refresh-router', this._onRefreshRouter);
        this._update(location.hash);
        this._historyListening = {
            unlisten: created_browser_history_1.history.listen(function (location) {
                _this._onWindowPopState(location);
            })
        };
    };
    OpalRouter.prototype.elementDetached = function () {
        this._historyListening.unlisten();
        this._clear();
    };
    OpalRouter.prototype._onRefreshRouter = function () {
        this.refresh();
        return false;
    };
    OpalRouter.prototype._onWindowPopState = function (location) {
        this._update(location.hash);
    };
    OpalRouter.prototype._update = function (hash) {
        var path = hash.slice(1) || '/';
        var _loop_1 = function (route) {
            var match = path.match(route.rePath);
            if (!match) {
                return "continue";
            }
            var state = route.properties.reduce(function (state, prop, index) {
                if (prop.optional) {
                    state[prop.name] = !!match[index + 1];
                }
                else {
                    var value = match[index + 1];
                    state[prop.name] = value && decodeURIComponent(value);
                }
                return state;
            }, Object.create(null));
            if (route === this_1._route) {
                var prevState_1 = this_1._state;
                var stateKeys = Object.keys(state);
                if (stateKeys.length == Object.keys(prevState_1).length &&
                    stateKeys.every(function (name) { return state[name] === prevState_1[name]; })) {
                    return { value: void 0 };
                }
                var componentEl_1 = this_1._componentElement;
                var inputConfig = componentEl_1.$component.constructor.input;
                var attrs = componentEl_1.attributes;
                var writable = true;
                if (inputConfig) {
                    for (var i = attrs.length; i;) {
                        var name_1 = attrs.item(--i).name;
                        if (name_1 != 'class' && !(name_1 in state) && isReadonlyProperty(inputConfig[name_1])) {
                            writable = false;
                            break;
                        }
                    }
                    if (writable) {
                        for (var name_2 in state) {
                            if (componentEl_1.getAttribute(hyphenize(name_2)) !== valueToAttributeValue(state[name_2]) &&
                                isReadonlyProperty(inputConfig[name_2])) {
                                writable = false;
                                break;
                            }
                        }
                    }
                }
                if (writable) {
                    for (var i = attrs.length; i;) {
                        var name_3 = attrs.item(--i).name;
                        if (name_3 != 'class' && !(name_3 in state)) {
                            componentEl_1.removeAttribute(name_3);
                        }
                    }
                    this_1._state = state;
                    this_1._applyState();
                    if (this_1.input.scrollTopOnChange) {
                        document.body.scrollTop = 0;
                    }
                    this_1.emit('change');
                    return { value: void 0 };
                }
            }
            if (this_1._componentElement) {
                this_1.element.removeChild(this_1._componentElement);
            }
            this_1._route = route;
            this_1._state = state;
            var componentEl = this_1._componentElement = document.createElement(route.componentName);
            this_1._applyState();
            componentEl.$component.ownerComponent = this_1;
            this_1.element.appendChild(componentEl);
            if (this_1.input.scrollTopOnChange || this_1.input.scrollTopOnChangeComponent) {
                document.body.scrollTop = 0;
            }
            this_1.emit('change');
            return { value: void 0 };
        };
        var this_1 = this;
        for (var _i = 0, _a = this._routes; _i < _a.length; _i++) {
            var route = _a[_i];
            var state_1 = _loop_1(route);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        if (this._route) {
            this.emit('change');
            this._clear();
        }
    };
    OpalRouter.prototype._applyState = function () {
        var state = this._state;
        var componentEl = this._componentElement;
        for (var name_4 in state) {
            componentEl.setAttribute(hyphenize(name_4), valueToAttributeValue(state[name_4]));
        }
    };
    OpalRouter.prototype._clear = function () {
        if (this._route) {
            this._route = null;
            this._state = null;
            this.element.removeChild(this._componentElement);
            this._componentElement = null;
        }
    };
    OpalRouter.prototype.refresh = function () {
        var route = this._route;
        if (route) {
            this.element.removeChild(this._componentElement);
            var componentEl = this._componentElement = document.createElement(route.componentName);
            this._applyState();
            componentEl.$component.ownerComponent = this;
            this.element.appendChild(componentEl);
            if (this.input.scrollTopOnChange || this.input.scrollTopOnChangeComponent) {
                document.body.scrollTop = 0;
            }
        }
    };
    OpalRouter.OpalRoute = opal_route_1.OpalRoute;
    OpalRouter = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-router',
            input: {
                scrollTopOnChange: true,
                scrollTopOnChangeComponent: true
            }
        })
    ], OpalRouter);
    return OpalRouter;
}(rionite_1.Component));
exports.OpalRouter = OpalRouter;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_101__;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;
function escapeRegExp(str) {
    return str.replace(reEscapableChars, '\\$1');
}
exports.escapeRegExp = escapeRegExp;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".opal-router{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 104 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
var OpalRoute = (function (_super) {
    __extends(OpalRoute, _super);
    function OpalRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalRoute = __decorate([
        rionite_1.d.Component({
            elementIs: 'opal-route',
            input: {
                path: { type: String, required: true, readonly: true },
                component: { type: String, required: true, readonly: true }
            }
        })
    ], OpalRoute);
    return OpalRoute;
}(rionite_1.Component));
exports.OpalRoute = OpalRoute;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PathNodeType_1 = __webpack_require__(7);
var reName = /[a-z][0-9a-z]*/i;
function parsePath(path) {
    var ctx = PathNodeType_1.PathNodeType.SIMPLE;
    var at = 0;
    var chr = path[0];
    return readPath();
    function next(c) {
        if (c && c != chr) {
            throw {
                name: 'SyntaxError',
                message: "Expected \"" + c + "\" instead of \"" + chr + "\"",
                at: at,
                path: path
            };
        }
        chr = path[++at];
        return chr;
    }
    function readPath() {
        var path = [];
        while (chr) {
            if (chr == '(') {
                path.push(readOptionalNode());
            }
            else if (chr == '[') {
                path.push(readInsert());
            }
            else {
                path.push(readSimpleNode());
            }
        }
        return path;
    }
    function readSimpleNode() {
        var value = chr;
        while (next()) {
            if (chr == '(' || chr == '[' || ctx == PathNodeType_1.PathNodeType.OPTIONAL && chr == ')') {
                break;
            }
            value += chr;
        }
        return {
            type: PathNodeType_1.PathNodeType.SIMPLE,
            value: value
        };
    }
    function readOptionalNode() {
        var optionalNodeAt = at;
        next('(');
        var name;
        if (chr == ':') {
            name = readOptionalNodeName();
        }
        var childNodes = [];
        var prevCtx = ctx;
        ctx = PathNodeType_1.PathNodeType.OPTIONAL;
        while (chr) {
            if (chr == ')') {
                next();
                ctx = prevCtx;
                return {
                    type: PathNodeType_1.PathNodeType.OPTIONAL,
                    name: name || null,
                    childNodes: childNodes
                };
            }
            else if (chr == '(') {
                childNodes.push(readOptionalNode());
            }
            else if (chr == '[') {
                childNodes.push(readInsert());
            }
            else {
                childNodes.push(readSimpleNode());
            }
        }
        throw {
            name: 'SyntaxError',
            message: 'Missing ")" in compound statement',
            at: optionalNodeAt,
            path: path
        };
    }
    function readOptionalNodeName() {
        next(':');
        var optionalNodeNameAt = at;
        var name = '';
        while (chr) {
            if (chr == ':') {
                if (!reName.test(name) || name == 'class') {
                    throw {
                        name: 'SyntaxError',
                        message: "Invalid name \"" + name + "\"",
                        at: optionalNodeNameAt,
                        path: path
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
            at: optionalNodeNameAt,
            path: path
        };
    }
    function readInsert() {
        var insertAt = at;
        next('[');
        var name = '';
        var prevCtx = ctx;
        ctx = PathNodeType_1.PathNodeType.INSERT;
        while (chr) {
            if (chr == ']') {
                if (!reName.test(name) || name == 'class') {
                    throw {
                        name: 'SyntaxError',
                        message: "Invalid name \"" + name + "\"",
                        at: insertAt + 1,
                        path: path
                    };
                }
                next();
                ctx = prevCtx;
                return {
                    type: PathNodeType_1.PathNodeType.INSERT,
                    name: name
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
            at: insertAt,
            path: path
        };
    }
}
exports.parsePath = parsePath;


/***/ })
/******/ ]);
});