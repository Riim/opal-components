(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx-decorators"), require("cellx"), require("@riim/next-tick"), require("@riim/gettext"), require("@riim/mixin"), require("reflect-metadata"), require("@riim/object-assign-polyfill"), require("@riim/map-set-polyfill"), require("date-exists"), require("@riim/debounce-throttle"), require("@riim/next-uid"), require("@riim/hyphenize"), require("created-browser-history"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx-decorators", "cellx", "@riim/next-tick", "@riim/gettext", "@riim/mixin", "reflect-metadata", "@riim/object-assign-polyfill", "@riim/map-set-polyfill", "date-exists", "@riim/debounce-throttle", "@riim/next-uid", "@riim/hyphenize", "created-browser-history"], factory);
	else if(typeof exports === 'object')
		exports["OpalComponents"] = factory(require("rionite"), require("cellx-decorators"), require("cellx"), require("@riim/next-tick"), require("@riim/gettext"), require("@riim/mixin"), require("reflect-metadata"), require("@riim/object-assign-polyfill"), require("@riim/map-set-polyfill"), require("date-exists"), require("@riim/debounce-throttle"), require("@riim/next-uid"), require("@riim/hyphenize"), require("created-browser-history"));
	else
		root["OpalComponents"] = factory(root["rionite"], root["cellx-decorators"], root["cellx"], root["@riim/next-tick"], root["@riim/gettext"], root["@riim/mixin"], root["reflect-metadata"], root["@riim/object-assign-polyfill"], root["@riim/map-set-polyfill"], root["date-exists"], root["@riim/debounce-throttle"], root["@riim/next-uid"], root["@riim/hyphenize"], root["created-browser-history"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_146__, __WEBPACK_EXTERNAL_MODULE_162__, __WEBPACK_EXTERNAL_MODULE_171__, __WEBPACK_EXTERNAL_MODULE_201__, __WEBPACK_EXTERNAL_MODULE_209__, __WEBPACK_EXTERNAL_MODULE_210__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(149);
var OpalInputValidatorRule_1 = __webpack_require__(150);
exports.OpalInputValidatorRule = OpalInputValidatorRule_1.OpalInputValidatorRule;
var template_nelm_1 = __webpack_require__(153);
var OpalInputValidator = /** @class */ (function (_super) {
    __extends(OpalInputValidator, _super);
    function OpalInputValidator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.failedRule = null;
        return _this;
    }
    Object.defineProperty(OpalInputValidator.prototype, "valid", {
        get: function () {
            return !this.failedRule;
        },
        enumerable: true,
        configurable: true
    });
    OpalInputValidator.prototype.ready = function () {
        this.rules = Array.prototype.map.call(this.element.getElementsByClassName('OpalInputValidatorRule'), function (ruleEl) { return ruleEl.$component; });
    };
    OpalInputValidator.prototype.elementAttached = function () {
        this.listenTo(this.target, 'change', this._onTargetChange);
    };
    OpalInputValidator.prototype._onTargetChange = function () {
        this.validate();
    };
    OpalInputValidator.prototype.validate = function () {
        return this._validate(this.rules);
    };
    OpalInputValidator.prototype._validate = function (rules) {
        var _this = this;
        var failedRule;
        rules.forEach(function (rule) {
            if (failedRule || _this._checkValue(rule)) {
                rule.hideMessage();
            }
            else {
                failedRule = rule;
                rule.showMessage();
            }
        });
        var prevFailedRule = this.failedRule;
        this.failedRule = failedRule || null;
        if (+!!failedRule ^ +!!prevFailedRule) {
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
    OpalInputValidator.prototype._checkValue = function (rule) {
        return false;
    };
    OpalInputValidator.prototype.focusTarget = function () {
        this.target.focus();
        return this;
    };
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalInputValidator.prototype, "failedRule", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalInputValidator.prototype, "valid", null);
    OpalInputValidator = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalInputValidator);
    return OpalInputValidator;
}(rionite_1.BaseComponent));
exports.OpalInputValidator = OpalInputValidator;


/***/ }),
/* 7 */
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
var gettext_1 = __webpack_require__(4);
var next_tick_1 = __webpack_require__(3);
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var isFocusable_1 = __webpack_require__(5);
__webpack_require__(178);
var isEqualArray_1 = __webpack_require__(179);
var OpalSelectOption_1 = __webpack_require__(180);
exports.OpalSelectOption = OpalSelectOption_1.OpalSelectOption;
var template_nelm_1 = __webpack_require__(183);
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
        else if (this.$specifiedParams.has('dataList')) {
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var closestComponent_1 = __webpack_require__(20);
exports.closestComponent = closestComponent_1.closestComponent;
var isFocusable_1 = __webpack_require__(5);
exports.isFocusable = isFocusable_1.isFocusable;


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
Object.defineProperty(exports, "__esModule", { value: true });
var object_assign_polyfill_1 = __webpack_require__(21);
var cellx_1 = __webpack_require__(2);
var INDEXPATH_EMPTY_ERROR_MESSAGE = 'Indexpath cannot be empty';
function fixParent(items, parent) {
    if (parent === void 0) { parent = null; }
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        item.parent = parent;
        fixParent(item.children, item);
    }
    return items;
}
exports.fixParent = fixParent;
var ObservableTreeList = /** @class */ (function (_super) {
    __extends(ObservableTreeList, _super);
    function ObservableTreeList(items) {
        var _this = _super.call(this) || this;
        _this._items = items
            ? fixParent(items.map(function _(item) {
                return object_assign_polyfill_1.assign(object_assign_polyfill_1.assign({}, item), {
                    children: item.children ? item.children.map(_) : []
                });
            }))
            : [];
        return _this;
    }
    Object.defineProperty(ObservableTreeList.prototype, "length", {
        get: function () {
            return this._items.length;
        },
        enumerable: true,
        configurable: true
    });
    ObservableTreeList.prototype.get = function (indexpath) {
        var indexpathLength = indexpath.length;
        if (!indexpathLength) {
            throw new TypeError(INDEXPATH_EMPTY_ERROR_MESSAGE);
        }
        var items = this._items;
        var item;
        for (var i = 0, l = indexpathLength - 1; i < l; i++) {
            item = items[indexpath[i]];
            if (!item) {
                return;
            }
            items = item.children;
            if (!items) {
                return;
            }
        }
        return items[indexpath[indexpathLength - 1]];
    };
    ObservableTreeList.prototype.set = function (indexpath, item) {
        var indexpathLength = indexpath.length;
        if (!indexpathLength) {
            throw new TypeError(INDEXPATH_EMPTY_ERROR_MESSAGE);
        }
        var items;
        if (indexpathLength == 1) {
            items = this._items;
        }
        else {
            var parent_1 = this.get(indexpath.slice(0, -1));
            if (!parent_1) {
                throw new TypeError("Item by indexpath \"[" + indexpath.slice(0, -1).join(',') + "]\" is not exist");
            }
            items = parent_1.children;
            item.parent = parent_1;
        }
        var lastIndexValue = indexpath[indexpathLength - 1];
        if (item !== items[lastIndexValue]) {
            items[lastIndexValue] = item;
            this.emit('change');
        }
        return this;
    };
    ObservableTreeList.prototype.forEach = function (callback, context) { };
    ObservableTreeList.prototype.map = function (callback, context) {
        return [];
    };
    ObservableTreeList.prototype.filter = function (callback, context) {
        return [];
    };
    ObservableTreeList.prototype.every = function (callback, context) {
        return false;
    };
    ObservableTreeList.prototype.some = function (callback, context) {
        return false;
    };
    ObservableTreeList.prototype.reduce = function (callback, initialValue) {
        return undefined;
    };
    ObservableTreeList.prototype.reduceRight = function (callback, initialValue) {
        return undefined;
    };
    return ObservableTreeList;
}(cellx_1.EventEmitter));
exports.ObservableTreeList = ObservableTreeList;
['forEach', 'map', 'filter', 'every', 'some'].forEach(function (name) {
    ObservableTreeList.prototype[name] = function (callback, context) {
        return this._items[name](function (item, index) {
            return callback.call(context, item, index, this);
        }, this);
    };
});
['reduce', 'reduceRight'].forEach(function (name) {
    ObservableTreeList.prototype[name] = function (callback, initialValue) {
        var items = this._items;
        var list = this;
        function wrapper(accumulator, item, index) {
            return callback(accumulator, item, index, list);
        }
        return arguments.length >= 2 ? items[name](wrapper, initialValue) : items[name](wrapper);
    };
});


/***/ }),
/* 10 */
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
__webpack_require__(127);
var OpalTab_1 = __webpack_require__(128);
exports.OpalTab = OpalTab_1.OpalTab;
var template_nelm_1 = __webpack_require__(131);
var OpalTabList = /** @class */ (function (_super) {
    __extends(OpalTabList, _super);
    function OpalTabList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTabList = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalTabList);
    return OpalTabList;
}(rionite_1.BaseComponent));
exports.OpalTabList = OpalTabList;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function parseDate(date) {
    var d = date.match(/\d+/g);
    return new Date(+d[2], +d[1] - 1, +d[0]);
}
exports.parseDate = parseDate;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
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
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var ObservableTreeList_1 = __webpack_require__(9);
var utils_1 = __webpack_require__(8);
var _getListItemContext_1 = __webpack_require__(14);
__webpack_require__(174);
var OpalTreeListItem_1 = __webpack_require__(15);
exports.OpalTreeListItem = OpalTreeListItem_1.OpalTreeListItem;
__webpack_require__(15);
var template_nelm_1 = __webpack_require__(177);
var defaultDataTreeListItemSchema = Object.freeze({ value: 'id', text: 'name' });
var defaultVMItemSchema = Object.freeze({ value: 'id', text: 'name' });
function toComparable(str) {
    return (str &&
        str
            .trim()
            .replace(/\s+/g, ' ')
            .toLowerCase());
}
var OpalTreeList = /** @class */ (function (_super) {
    __extends(OpalTreeList, _super);
    function OpalTreeList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTreeList_1 = OpalTreeList;
    Object.defineProperty(OpalTreeList.prototype, "filteredDataTreeList", {
        get: function () {
            var query = toComparable(this.paramQuery);
            if (!query) {
                return this.dataTreeList;
            }
            var dataTreeListItemValueFieldName = this._dataTreeListItemValueFieldName;
            var dataTreeListItemTextFieldName = this._dataTreeListItemTextFieldName;
            return new ObservableTreeList_1.ObservableTreeList(ObservableTreeList_1.fixParent(this.dataTreeList.reduce(function _(filteredDataTreeList, item) {
                if (item.children.length) {
                    var filteredChildren = item.children.reduce(_, []);
                    if (filteredChildren.length ||
                        toComparable(item[dataTreeListItemTextFieldName]).indexOf(query) != -1) {
                        filteredDataTreeList.push((_a = {
                                $original: item
                            },
                            _a[dataTreeListItemValueFieldName] = item[dataTreeListItemValueFieldName],
                            _a[dataTreeListItemTextFieldName] = item[dataTreeListItemTextFieldName],
                            _a.children = filteredChildren,
                            _a));
                    }
                }
                else if (toComparable(item[dataTreeListItemTextFieldName]).indexOf(query) != -1) {
                    filteredDataTreeList.push((_b = {
                            $original: item
                        },
                        _b[dataTreeListItemValueFieldName] = item[dataTreeListItemValueFieldName],
                        _b[dataTreeListItemTextFieldName] = item[dataTreeListItemTextFieldName],
                        _b.children = [],
                        _b));
                }
                return filteredDataTreeList;
                var _a, _b;
            }, [])));
        },
        enumerable: true,
        configurable: true
    });
    OpalTreeList.prototype.initialize = function () {
        var _this = this;
        if (this.paramDataTreeListKeypath) {
            cellx_1.define(this, 'dataTreeList', new cellx_1.Cell(Function("return this." + this.paramDataTreeListKeypath + ";"), {
                context: this.ownerComponent || window
            }));
        }
        else {
            if (!this.$specifiedParams.has('dataTreeList')) {
                throw new TypeError('Parameter "dataTreeList" is required');
            }
            cellx_1.define(this, 'dataTreeList', function () { return _this.paramDataTreeList; });
        }
        var dataTreeListItemSchema = this.paramDataTreeListItemSchema;
        var defaultDataTreeListItemSchema = this.constructor
            .defaultDataTreeListItemSchema;
        this._dataTreeListItemValueFieldName =
            dataTreeListItemSchema.value || defaultDataTreeListItemSchema.value;
        this._dataTreeListItemTextFieldName =
            dataTreeListItemSchema.text || defaultDataTreeListItemSchema.text;
        this.viewModel = this.paramViewModel || new cellx_1.ObservableList();
        var vmItemSchema = this.paramViewModelItemSchema;
        var defaultVMItemSchema = this.constructor
            .defaultViewModelItemSchema;
        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
    };
    OpalTreeList.prototype.elementAttached = function () {
        this.listenTo(this, '<*>change', this._onChange);
    };
    OpalTreeList.prototype._onChange = function (evt) {
        var component = evt.target;
        if (component.element.classList.contains('OpalTreeList__selection-control')) {
            var dataTreeListItemValueFieldName_1 = this._dataTreeListItemValueFieldName;
            var dataTreeListItemTextFieldName_1 = this._dataTreeListItemTextFieldName;
            var vm_1 = this.viewModel;
            var viewModelItemValueFieldName_1 = this._viewModelItemValueFieldName;
            var viewModelItemTextFieldName_1 = this._viewModelItemTextFieldName;
            var item_1 = utils_1.closestComponent(component.parentComponent, OpalTreeListItem_1.OpalTreeListItem).$context.$item;
            if (component.selected) {
                for (var parent_1; (parent_1 = item_1.parent) &&
                    parent_1.children.every(function (child) {
                        return child == item_1 ||
                            !!vm_1.find(function (vmItem) {
                                return vmItem[viewModelItemValueFieldName_1] ==
                                    child[dataTreeListItemValueFieldName_1];
                            });
                    });) {
                    item_1 = parent_1;
                }
                item_1.children.forEach(function _(child) {
                    var childIndex = vm_1.findIndex(function (vmItem) {
                        return vmItem[viewModelItemValueFieldName_1] ==
                            child[dataTreeListItemValueFieldName_1];
                    });
                    if (childIndex != -1) {
                        vm_1.removeAt(childIndex);
                    }
                    child.children.forEach(_);
                });
                vm_1.add((_a = {},
                    _a[viewModelItemValueFieldName_1] = item_1[dataTreeListItemValueFieldName_1],
                    _a[viewModelItemTextFieldName_1] = item_1[dataTreeListItemTextFieldName_1],
                    _a));
            }
            else {
                var itemIndex = vm_1.findIndex(function (vmItem) {
                    return vmItem[viewModelItemValueFieldName_1] == item_1[dataTreeListItemValueFieldName_1];
                });
                if (itemIndex != -1) {
                    vm_1.removeAt(itemIndex);
                }
                else {
                    var parent_2 = item_1.parent;
                    for (;;) {
                        var parentIndex = vm_1.findIndex(function (vmItem) {
                            return vmItem[viewModelItemValueFieldName_1] ==
                                parent_2[dataTreeListItemValueFieldName_1];
                        });
                        vm_1.addRange(parent_2.children.filter(function (child) { return child != item_1; }).map(function (child) {
                            return (_a = {},
                                _a[viewModelItemValueFieldName_1] = child[dataTreeListItemValueFieldName_1],
                                _a[viewModelItemTextFieldName_1] = child[dataTreeListItemTextFieldName_1],
                                _a);
                            var _a;
                        }));
                        if (parentIndex != -1) {
                            vm_1.removeAt(parentIndex);
                            break;
                        }
                        item_1 = parent_2;
                        parent_2 = item_1.parent;
                    }
                }
            }
        }
        var _a;
    };
    OpalTreeList.defaultDataTreeListItemSchema = defaultDataTreeListItemSchema;
    OpalTreeList.defaultViewModelItemSchema = defaultVMItemSchema;
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTreeList.prototype, "paramDataTreeList", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", String)
    ], OpalTreeList.prototype, "paramDataTreeListKeypath", void 0);
    __decorate([
        rionite_1.Param({
            type: eval,
            default: defaultDataTreeListItemSchema,
            readonly: true
        }),
        __metadata("design:type", Object)
    ], OpalTreeList.prototype, "paramDataTreeListItemSchema", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTreeList.prototype, "paramViewModel", void 0);
    __decorate([
        rionite_1.Param({ type: eval, default: defaultVMItemSchema, readonly: true }),
        __metadata("design:type", Object)
    ], OpalTreeList.prototype, "paramViewModelItemSchema", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTreeList.prototype, "paramQuery", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], OpalTreeList.prototype, "filteredDataTreeList", null);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalTreeList.prototype, "viewModel", void 0);
    OpalTreeList = OpalTreeList_1 = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalTreeList);
    return OpalTreeList;
    var OpalTreeList_1;
}(rionite_1.BaseComponent));
exports.OpalTreeList = OpalTreeList;
OpalTreeList.prototype._getListItemContext = _getListItemContext_1.default;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mixin_1 = __webpack_require__(12);
var cellx_1 = __webpack_require__(2);
function isSelectedItem(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) {
    do {
        if (vm.find(function (vmItem) {
            return vmItem[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName];
        })) {
            return true;
        }
    } while ((item = item.parent));
    return false;
}
function isIndeterminateItem(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) {
    return (!!item.children.length &&
        !isSelectedItem(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) &&
        item.children.some(function (child) {
            return !!vm.find(function (vmItem) {
                return vmItem[viewModelItemValueFieldName] == child[dataTreeListItemValueFieldName];
            }) ||
                isIndeterminateItem(child, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName);
        }));
}
function _getListItemContext(context, content) {
    var $item = content.$context.$item;
    return cellx_1.define(mixin_1.mixin(Object.create(context), content.$context, ['$component']), {
        $selected: new cellx_1.Cell(function () {
            this.dataTreeList;
            return isSelectedItem($item.$original || $item, this.viewModel, this._dataTreeListItemValueFieldName, this._viewModelItemValueFieldName);
        }, { context: this }),
        $indeterminate: new cellx_1.Cell(function () {
            this.dataTreeList;
            return isIndeterminateItem($item.$original || $item, this.viewModel, this._dataTreeListItemValueFieldName, this._viewModelItemValueFieldName);
        }, { context: this })
    });
}
exports.default = _getListItemContext;


/***/ }),
/* 15 */
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
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var _getListItemContext_1 = __webpack_require__(14);
__webpack_require__(175);
var template_nelm_1 = __webpack_require__(176);
var OpalTreeListItem = /** @class */ (function (_super) {
    __extends(OpalTreeListItem, _super);
    function OpalTreeListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramOpened = false;
        return _this;
    }
    Object.defineProperty(OpalTreeListItem.prototype, "dataTreeList", {
        get: function () {
            return this.paramDataTreeList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTreeListItem.prototype, "viewModel", {
        get: function () {
            return this.paramViewModel;
        },
        enumerable: true,
        configurable: true
    });
    OpalTreeListItem.prototype.initialize = function () {
        this.dataTreeListItem = this.paramFilteredDataTreeList.get(this.paramIndexpath);
        this._dataTreeListItemValueFieldName = this.paramDataTreeListItemValueFieldName;
        this._dataTreeListItemTextFieldName = this.paramDataTreeListItemTextFieldName;
        this._viewModelItemValueFieldName = this.paramViewModelItemValueFieldName;
        this._viewModelItemTextFieldName = this.paramViewModelItemTextFieldName;
    };
    __decorate([
        rionite_1.Param({ required: true }),
        __metadata("design:type", Object)
    ], OpalTreeListItem.prototype, "paramDataTreeList", void 0);
    __decorate([
        rionite_1.Param({ required: true }),
        __metadata("design:type", Object)
    ], OpalTreeListItem.prototype, "paramFilteredDataTreeList", void 0);
    __decorate([
        rionite_1.Param({ required: true, readonly: true }),
        __metadata("design:type", String)
    ], OpalTreeListItem.prototype, "paramDataTreeListItemValueFieldName", void 0);
    __decorate([
        rionite_1.Param({ required: true, readonly: true }),
        __metadata("design:type", String)
    ], OpalTreeListItem.prototype, "paramDataTreeListItemTextFieldName", void 0);
    __decorate([
        rionite_1.Param({ required: true }),
        __metadata("design:type", Object)
    ], OpalTreeListItem.prototype, "paramViewModel", void 0);
    __decorate([
        rionite_1.Param({ required: true, readonly: true }),
        __metadata("design:type", String)
    ], OpalTreeListItem.prototype, "paramViewModelItemValueFieldName", void 0);
    __decorate([
        rionite_1.Param({ required: true, readonly: true }),
        __metadata("design:type", String)
    ], OpalTreeListItem.prototype, "paramViewModelItemTextFieldName", void 0);
    __decorate([
        rionite_1.Param({ type: eval, required: true, readonly: true }),
        __metadata("design:type", Array)
    ], OpalTreeListItem.prototype, "paramIndexpath", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTreeListItem.prototype, "paramQuery", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTreeListItem.prototype, "paramOpened", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], OpalTreeListItem.prototype, "dataTreeList", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], OpalTreeListItem.prototype, "viewModel", null);
    OpalTreeListItem = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default,
            events: {
                'btn-toggle-children': {
                    change: function (evt) {
                        this.paramOpened = evt.target.checked;
                    }
                }
            }
        })
    ], OpalTreeListItem);
    return OpalTreeListItem;
}(rionite_1.BaseComponent));
exports.OpalTreeListItem = OpalTreeListItem;
OpalTreeListItem.prototype._getListItemContext = _getListItemContext_1.default;


/***/ }),
/* 16 */
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
var gettext_1 = __webpack_require__(4);
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(187);
var template_nelm_1 = __webpack_require__(188);
var defaultDataListItemSchema = Object.freeze({
    value: 'id',
    text: 'name',
    subtext: 'parent',
    disabled: 'disabled'
});
var defaultVMItemSchema = Object.freeze({ value: 'id', text: 'name', disabled: 'disabled' });
var OpalTagSelect = /** @class */ (function (_super) {
    __extends(OpalTagSelect, _super);
    function OpalTagSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramPlaceholder = gettext_1.getText.t('Не выбрано');
        _this.paramPopoverPosition = 'bottom';
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        return _this;
    }
    Object.defineProperty(OpalTagSelect.prototype, "value", {
        get: function () {
            var _this = this;
            return this.viewModel.map(function (item) { return item[_this._viewModelItemValueFieldName]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTagSelect.prototype, "isPlaceholderShown", {
        get: function () {
            return !!this.paramPlaceholder && !this.viewModel.length;
        },
        enumerable: true,
        configurable: true
    });
    OpalTagSelect.prototype.initialize = function () {
        var _this = this;
        var dataListKeypath = this.paramDataListKeypath;
        if (dataListKeypath || this.$specifiedParams.has('dataList')) {
            cellx_1.define(this, 'dataList', dataListKeypath
                ? new cellx_1.Cell(Function("return this." + dataListKeypath + ";"), {
                    context: this.ownerComponent || window
                })
                : function () { return _this.paramDataList; });
            this.dataProvider = null;
            this._dataListKeypathParam = 'dataList';
        }
        else {
            this.dataList = null;
            this.dataProvider = this.paramDataProvider;
            this._dataListKeypathParam = null;
        }
        var dataListItemSchema = this.paramDataListItemSchema;
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
        this._viewModelItemDisabledFieldName =
            vmItemSchema.disabled || defaultVMItemSchema.disabled;
    };
    OpalTagSelect.prototype.elementAttached = function () {
        this.listenTo('control', 'click', this._onControlClick);
        this.listenTo('select', {
            input: this._onSelectInput,
            change: this._onSelectChange,
            select: this._onSelectSelect,
            deselect: this._onSelectDeselect
        });
    };
    OpalTagSelect.prototype._onControlClick = function (evt) {
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
    };
    OpalTagSelect.prototype._onSelectInput = function () {
        this.$('select').close();
        this.emit('input');
        return false;
    };
    OpalTagSelect.prototype._onSelectChange = function () {
        this.emit('change');
        return false;
    };
    OpalTagSelect.prototype._onSelectSelect = function () {
        this.$('select').close();
        return false;
    };
    OpalTagSelect.prototype._onSelectDeselect = function () {
        this.$('select').close();
        return false;
    };
    // helpers
    OpalTagSelect.prototype._isItemDisabled = function (item) {
        return this.paramDisabled || item[this._viewModelItemDisabledFieldName];
    };
    OpalTagSelect.defaultDataListItemSchema = defaultDataListItemSchema;
    OpalTagSelect.defaultViewModelItemSchema = defaultVMItemSchema;
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTagSelect.prototype, "paramViewType", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTagSelect.prototype, "paramDataList", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", String)
    ], OpalTagSelect.prototype, "paramDataListKeypath", void 0);
    __decorate([
        rionite_1.Param({ type: eval, default: defaultDataListItemSchema, readonly: true }),
        __metadata("design:type", Object)
    ], OpalTagSelect.prototype, "paramDataListItemSchema", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalTagSelect.prototype, "paramDataProvider", void 0);
    __decorate([
        rionite_1.Param({ type: eval }),
        __metadata("design:type", Array)
    ], OpalTagSelect.prototype, "paramValue", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalTagSelect.prototype, "paramViewModel", void 0);
    __decorate([
        rionite_1.Param({ type: eval, default: defaultVMItemSchema, readonly: true }),
        __metadata("design:type", Object)
    ], OpalTagSelect.prototype, "paramViewModelItemSchema", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Function)
    ], OpalTagSelect.prototype, "paramAddNewItem", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTagSelect.prototype, "paramPlaceholder", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTagSelect.prototype, "paramPopoverPosition", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTagSelect.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTagSelect.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTagSelect.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalTagSelect.prototype, "viewModel", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], OpalTagSelect.prototype, "value", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalTagSelect.prototype, "isPlaceholderShown", null);
    OpalTagSelect = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default,
            domEvents: {
                'btn-remove-tag': {
                    click: function (evt, btn) {
                        var vmItemValueFieldName = this._viewModelItemValueFieldName;
                        var tagValue = btn.dataset.tagValue;
                        this.viewModel.removeAt(this.viewModel.findIndex(function (tag) { return tag[vmItemValueFieldName] == tagValue; }));
                        this.emit('change');
                    }
                }
            }
        })
    ], OpalTagSelect);
    return OpalTagSelect;
}(rionite_1.BaseComponent));
exports.OpalTagSelect = OpalTagSelect;


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(19);
var Utils = __webpack_require__(8);
exports.Utils = Utils;
var ObservableTreeList_1 = __webpack_require__(9);
exports.ObservableTreeList = ObservableTreeList_1.ObservableTreeList;
var OpalIcon_1 = __webpack_require__(22);
exports.OpalIcon = OpalIcon_1.OpalIcon;
var OpalButton_1 = __webpack_require__(91);
exports.OpalButton = OpalButton_1.OpalButton;
var OpalSignButton_1 = __webpack_require__(93);
exports.OpalSignButton = OpalSignButton_1.OpalSignButton;
var OpalTextInput_1 = __webpack_require__(96);
exports.OpalTextInput = OpalTextInput_1.OpalTextInput;
var OpalEditableText_1 = __webpack_require__(99);
exports.OpalEditableText = OpalEditableText_1.OpalEditableText;
var OpalInputMask_1 = __webpack_require__(102);
exports.OpalInputMaskDefinition = OpalInputMask_1.OpalInputMaskDefinition;
exports.OpalInputMask = OpalInputMask_1.OpalInputMask;
var OpalGroup_1 = __webpack_require__(106);
exports.OpalGroup = OpalGroup_1.OpalGroup;
var OpalCheckbox_1 = __webpack_require__(109);
exports.OpalCheckbox = OpalCheckbox_1.OpalCheckbox;
var OpalRadioGroup_1 = __webpack_require__(112);
exports.OpalRadioButton = OpalRadioGroup_1.OpalRadioButton;
exports.OpalRadioGroup = OpalRadioGroup_1.OpalRadioGroup;
var OpalSwitch_1 = __webpack_require__(116);
exports.OpalSwitch = OpalSwitch_1.OpalSwitch;
var OpalSlider_1 = __webpack_require__(119);
exports.OpalSlider = OpalSlider_1.OpalSlider;
var OpalSwitchMenu_1 = __webpack_require__(122);
exports.OpalSwitchMenu = OpalSwitchMenu_1.OpalSwitchMenu;
var OpalTabs_1 = __webpack_require__(125);
exports.OpalTab = OpalTabs_1.OpalTab;
exports.OpalTabList = OpalTabs_1.OpalTabList;
exports.OpalTabPanel = OpalTabs_1.OpalTabPanel;
exports.OpalTabs = OpalTabs_1.OpalTabs;
var OpalDropdown_1 = __webpack_require__(136);
exports.OpalDropdown = OpalDropdown_1.OpalDropdown;
var OpalPopover_1 = __webpack_require__(139);
exports.OpalPopover = OpalPopover_1.OpalPopover;
var OpalModal_1 = __webpack_require__(142);
exports.OpalModal = OpalModal_1.OpalModal;
var OpalNotification_1 = __webpack_require__(145);
exports.OpalNotification = OpalNotification_1.OpalNotification;
var OpalInputValidator_1 = __webpack_require__(6);
exports.OpalInputValidatorRule = OpalInputValidator_1.OpalInputValidatorRule;
exports.OpalInputValidator = OpalInputValidator_1.OpalInputValidator;
var OpalTextInputValidator_1 = __webpack_require__(154);
exports.OpalTextInputValidatorRule = OpalTextInputValidator_1.OpalTextInputValidatorRule;
exports.OpalTextInputValidator = OpalTextInputValidator_1.OpalTextInputValidator;
var OpalCalendar_1 = __webpack_require__(157);
exports.OpalCalendar = OpalCalendar_1.OpalCalendar;
var OpalDateInput_1 = __webpack_require__(161);
exports.OpalDateInput = OpalDateInput_1.OpalDateInput;
var OpalLoader_1 = __webpack_require__(165);
exports.OpalLoader = OpalLoader_1.OpalLoader;
var OpalLoadedList_1 = __webpack_require__(167);
exports.OpalLoadedList = OpalLoadedList_1.OpalLoadedList;
var OpalFilteredList_1 = __webpack_require__(170);
exports.OpalFilteredList = OpalFilteredList_1.OpalFilteredList;
var OpalTreeList_1 = __webpack_require__(13);
exports.OpalTreeListItem = OpalTreeList_1.OpalTreeListItem;
exports.OpalTreeList = OpalTreeList_1.OpalTreeList;
var OpalSelect_1 = __webpack_require__(7);
exports.OpalSelectOption = OpalSelect_1.OpalSelectOption;
exports.OpalSelect = OpalSelect_1.OpalSelect;
var OpalMultiselect_1 = __webpack_require__(184);
exports.OpalMultiselect = OpalMultiselect_1.OpalMultiselect;
var OpalTagSelect_1 = __webpack_require__(16);
exports.OpalTagSelect = OpalTagSelect_1.OpalTagSelect;
var OpalTreeSelect_1 = __webpack_require__(189);
exports.OpalTreeSelect = OpalTreeSelect_1.OpalTreeSelect;
var OpalTreeTagSelect_1 = __webpack_require__(192);
exports.OpalTreeTagSelect = OpalTreeTagSelect_1.OpalTreeTagSelect;
var OpalSelectValidator_1 = __webpack_require__(194);
exports.OpalSelectValidatorRule = OpalSelectValidator_1.OpalSelectValidatorRule;
exports.OpalSelectValidator = OpalSelectValidator_1.OpalSelectValidator;
var OpalAutosuggest_1 = __webpack_require__(197);
exports.OpalAutosuggest = OpalAutosuggest_1.OpalAutosuggest;
var OpalMultirow_1 = __webpack_require__(200);
exports.OpalMultirowRow = OpalMultirow_1.OpalMultirowRow;
exports.OpalMultirow = OpalMultirow_1.OpalMultirow;
var OpalRouter_1 = __webpack_require__(207);
exports.OpalRoute = OpalRouter_1.OpalRoute;
exports.OpalRouter = OpalRouter_1.OpalRouter;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function closestComponent(component, componentClass) {
    var c = component;
    while (!(c instanceof componentClass) && (c = c.parentComponent)) { }
    return c;
}
exports.closestComponent = closestComponent;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(0);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(39);
__webpack_require__(40);
__webpack_require__(41);
__webpack_require__(42);
__webpack_require__(43);
__webpack_require__(44);
__webpack_require__(45);
__webpack_require__(46);
__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(49);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(52);
__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(58);
__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(63);
__webpack_require__(64);
__webpack_require__(65);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(68);
__webpack_require__(69);
__webpack_require__(70);
__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(73);
__webpack_require__(74);
__webpack_require__(75);
__webpack_require__(76);
__webpack_require__(77);
__webpack_require__(78);
__webpack_require__(79);
__webpack_require__(80);
__webpack_require__(81);
__webpack_require__(82);
__webpack_require__(83);
__webpack_require__(84);
__webpack_require__(85);
__webpack_require__(86);
__webpack_require__(87);
__webpack_require__(88);
__webpack_require__(89);
__webpack_require__(90);
var OpalIcon = /** @class */ (function (_super) {
    __extends(OpalIcon, _super);
    function OpalIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramSize = 'm';
        _this.paramStrokeWidth = 3;
        _this.paramFilled = false;
        return _this;
    }
    OpalIcon.prototype.ready = function () {
        var name = this.paramName;
        this.element.innerHTML = "<svg class=\"OpalIcon__svg\" stroke-width=\"" + this.paramStrokeWidth + "px\"><use xlink:href=\"#OpalIcon__icon" + (name.charAt(0).toUpperCase() +
            name.slice(1)) + "\"/></svg>";
    };
    __decorate([
        rionite_1.Param({ required: true, readonly: true }),
        __metadata("design:type", String)
    ], OpalIcon.prototype, "paramName", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalIcon.prototype, "paramSize", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalIcon.prototype, "paramStrokeWidth", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalIcon.prototype, "paramFilled", void 0);
    OpalIcon = __decorate([
        rionite_1.Component()
    ], OpalIcon);
    return OpalIcon;
}(rionite_1.BaseComponent));
exports.OpalIcon = OpalIcon;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalIcon{display:inline-block;width:26px;height:26px;vertical-align:middle}.OpalIcon .OpalIcon__svg{display:block;width:100%;height:100%;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;fill:none}.OpalIcon[size=s]{width:22px;height:22px}.OpalIcon[size=xs]{width:18px;height:18px}.OpalIcon[size=xxs]{width:14px;height:14px}.OpalIcon[size=l]{width:30px;height:30px}.OpalIcon[size=xl]{width:34px;height:34px}.OpalIcon[size=xxl]{width:38px;height:38px}.OpalIcon[filled] .OpalIcon__svg{fill:currentColor}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 24 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconAlert\"><path d=\"M16 3l14 26H2zm0 9v7m0 4v2\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 25 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArchive\"><path d=\"M2 4h28v6H2zm2 6v18h24V10m-16 5h8\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 26 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArrowBottom\"><path d=\"M16 2v28M6 20l10 10 10-10\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 27 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArrowLeft\"><path d=\"M2 16h28M12 6L2 16l10 10\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 28 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArrowRight\"><path d=\"M2 16h28M20 6l10 10-10 10\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 29 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArrowTop\"><path d=\"M16 2v28M6 12L16 2l10 10\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 30 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconBan\"><circle cx=\"16\" cy=\"16\" r=\"14\" xmlns=\"http://www.w3.org/2000/svg\"/><path d=\"M6 6l20 20\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 31 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconBell\"><path d=\"M7 17c0-5 1-13 9-13s9 8 9 13 5 8 5 8H2s5-3 5-8m5 8s0 4 4 4 4-4 4-4\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 32 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconBookmark\"><path d=\"M6 2h20v28L16 20 6 30z\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 33 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCalendar\"><path d=\"M2 6v24h28V6zm0 9h28M7 3v6m6-6v6m6-6v6m6-6v6\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 34 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCart\"><path d=\"M2 2h3l5 21h17M6 6h24l-3 13H9\" xmlns=\"http://www.w3.org/2000/svg\"/><circle cx=\"25\" cy=\"28\" r=\"2\"/><circle cx=\"12\" cy=\"28\" r=\"2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 35 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCheckmark\"><path d=\"M2 20l10 8L30 4\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 36 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconChevronBottom\"><path d=\"M2 9l14 14L30 9\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 37 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconChevronLeft\"><path d=\"M23 2L9 16l14 14\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 38 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconChevronRight\"><path d=\"M9 2l14 14L9 30\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 39 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconChevronTop\"><path d=\"M2 23L16 9l14 14\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 40 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconClipboard\"><path d=\"M12 2h8v4h-8zm0 2H6v26h20V4h-6\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 41 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconClock\"><circle cx=\"16\" cy=\"16\" r=\"14\" xmlns=\"http://www.w3.org/2000/svg\"/><path d=\"M16 8v8l4 4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 42 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCode\"><path d=\"M10 9l-7 8 7 8m8-18l-4 20m8-18l7 8-7 8\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 43 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCompose\"><path d=\"M16 5H2v25h25V16M26 2l4 4-16 16-6 2 2-6zm-4 4l4 4m-16 8l4 4\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 44 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCreditcard\"><path d=\"M2 7h28v19H2zm5 10h5m-5 4h7\" xmlns=\"http://www.w3.org/2000/svg\"/><path d=\"M2 11h28v1H2z\" fill=\"currentColor\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 45 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCross\"><path d=\"M2 2l28 28m0-28L2 30\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 46 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconDesktop\"><path d=\"M2 6h28v17H2zm8 23s0-5 6-5 6 5 6 5z\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 47 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconDownload\"><path d=\"M9 22c-9 1-9-10 0-9C6 2 23 2 22 10c10-2 10 13 1 12m-7-8v16m-5-5l5 5 5-5\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 48 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconEdit\"><path d=\"M25 2l5 5-20 20-7 2 2-7zm-4 4l5 5M5 22l5 5\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 49 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconEllipsisHorizontal\"><circle cx=\"7\" cy=\"16\" r=\"2\" xmlns=\"http://www.w3.org/2000/svg\"/><circle cx=\"16\" cy=\"16\" r=\"2\"/><circle cx=\"25\" cy=\"16\" r=\"2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 50 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconEllipsisVertical\"><circle cx=\"16\" cy=\"7\" r=\"2\" xmlns=\"http://www.w3.org/2000/svg\"/><circle cx=\"16\" cy=\"16\" r=\"2\"/><circle cx=\"16\" cy=\"25\" r=\"2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 51 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconExport\"><path d=\"M4 22v8h24v-8M16 4v20M8 12l8-8 8 8\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 52 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconExternal\"><path d=\"M14 9H3v20h20V18m5-14L14 18m4-14h10v10\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 53 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconEye\"><circle cx=\"17\" cy=\"15\" r=\"1\" xmlns=\"http://www.w3.org/2000/svg\"/><circle cx=\"16\" cy=\"16\" r=\"6\"/><path d=\"M2 16S7 6 16 6s14 10 14 10-5 10-14 10S2 16 2 16\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 54 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFileCross\"><path d=\"M18 2H6v28h20V10l-8-8v8h8m-13 7l6 6m0-6l-6 6\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 55 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFileMinus\"><path d=\"M18 2H6v28h20V10l-8-8v8h8M12 20h8\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 56 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFilePlus\"><path d=\"M18 2H6v28h20V10l-8-8v8h8m-10 6v8m-4-4h8\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 57 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFile\"><path d=\"M18 2H6v28h20V10l-8-8v8h8\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 58 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFlag\"><path d=\"M6 2v28M6 6h20l-6 6 6 6H6\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 59 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFolder\"><path d=\"M2 4h8l4 3h16v19H2zm0 8h28\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 60 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconHeart\"><path d=\"M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12-12 12-12 12-9-8-12-12z\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 61 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconHome\"><path d=\"M16 2l12 10v18h-8V20h-8v10H4V12z\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 62 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconImport\"><path d=\"M4 24v6h24v-6M16 4v20m-8-8l8 8 8-8\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 63 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconInfo\"><path d=\"M16 9v2m0 4v8\" xmlns=\"http://www.w3.org/2000/svg\"/><circle cx=\"16\" cy=\"16\" r=\"14\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 64 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLink\"><path d=\"M18 8s6-6 9-3 2 7-3 11-8 5-10 1m4-2c-2-4-5-3-10 1s-6 8-3 11 9-3 9-3\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 65 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLocation\"><path d=\"M8 15C5 8 10 2 16 2s11 6 8 13-8 15-8 15-5-8-8-15z\" xmlns=\"http://www.w3.org/2000/svg\"/><circle cx=\"16\" cy=\"11\" r=\"4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 66 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLock\"><path d=\"M9 15C9 9 9 5 16 5s7 4 7 10M5 15h22v15H5zm11 5v3\" xmlns=\"http://www.w3.org/2000/svg\"/><circle cx=\"16\" cy=\"24\" r=\"1\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 67 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLogIn\"><path d=\"M20 4h10v24H20M4 16h16m-6-6l6 6-6 6\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 68 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLogOut\"><path d=\"M12 4H2v24h10m0-12h16m-6-6l6 6-6 6\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 69 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMail\"><path d=\"M2 6h28v20H2zm0 0l14 10L30 6\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 70 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMenu\"><path d=\"M4 8h24M4 16h24M4 24h24\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 71 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMessage\"><path d=\"M2 4h28v18H16l-8 7v-7H2z\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 72 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMinus\"><path d=\"M2 16h28\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 73 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMobile\"><path d=\"M9 4c0-1 1-2 2-2h10c1 0 2 1 2 2v24c0 1-1 2-2 2H11c-1 0-2-1-2-2zm0 1h14M9 27h14\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 74 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMove\"><path d=\"M3 16h26M16 3v26M12 7l4-4 4 4m5 5l4 4-4 4m-13 5l4 4 4-4M7 12l-4 4 4 4\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 75 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconOptions\"><path d=\"M4 6h24M4 16h24M4 26h24M24 3v6M8 13v6m12 4v6\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 76 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconPaperclip\"><path d=\"M10 9v15c0 4 3 6 6 6s6-2 6-6V6c0-3-2-4-4-4s-4 1-4 4v17c0 1 1 2 2 2s2-1 2-2V9\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 77 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconPhoto\"><path d=\"M2 2h28v28H2zm0 24l10-10 8 8m-4-4l6-6 8 8\" xmlns=\"http://www.w3.org/2000/svg\"/><circle cx=\"10\" cy=\"9\" r=\"3\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 78 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconPlus\"><path d=\"M16 2v28M2 16h28\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 79 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconPrint\"><path d=\"M7 9V2h18v7M7 25H2V9h28v16h-5M7 19h18v11H7zm15-5h3\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 80 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconReload\"><path d=\"M29 16c0 6-5 13-13 13S3 22 3 16 8 3 16 3c5 0 9 3 11 6m1-7l-1 7-7 1\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 81 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconReply\"><path d=\"M11 6l-8 8 8 8m-8-8h15c8 0 12 4 12 12\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 82 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconSearch\"><circle cx=\"14\" cy=\"14\" r=\"11\" xmlns=\"http://www.w3.org/2000/svg\"/><path d=\"M22 22l8 8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 83 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconSend\"><path d=\"M2 16L30 2 16 30l-4-10zM30 2L12 20\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 84 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconSettings\"><path d=\"M13 2h6v4l2 1 3-3 4 4-3 3 1 2h4v6h-4l-1 2 3 3-4 4-3-3-2 1v4h-6v-4l-2-1-3 3-4-4 3-3-1-2H2v-6h4l1-2-3-3 4-4 3 3 2-1z\" xmlns=\"http://www.w3.org/2000/svg\"/><circle cx=\"16\" cy=\"16\" r=\"4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 85 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconStar\"><path d=\"M16 2l4 10h10l-8 7 3 11-9-7-9 7 3-11-8-7h10z\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 86 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconTag\"><path d=\"M18 2h12v12L14 30 2 18z\" xmlns=\"http://www.w3.org/2000/svg\"/><circle cx=\"24\" cy=\"8\" r=\"2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 87 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconTrash\"><path d=\"M4 6h2l2 24h16l2-24h2M6 6h20M12 6l1-4h6l1 4m-9 6l1 12m4-12v12m5-12l-1 12\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 88 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconUnlock\"><path d=\"M9 15C9 7 9 3 16 3s7 5 7 6M5 15h22v15H5zm11 5v3\" xmlns=\"http://www.w3.org/2000/svg\"/><circle cx=\"16\" cy=\"24\" r=\"1\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 89 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconUpload\"><path d=\"M9 22c-9 1-9-10 0-9C6 2 23 2 22 10c10-2 10 13 1 12m-7-8v16m-5-11l5-5 5 5\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 90 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 32\" id=\"OpalIcon__iconUser\"><circle cx=\"16\" cy=\"9\" r=\"6\" xmlns=\"http://www.w3.org/2000/svg\"/><path d=\"M4 29c0-9 6-10 12-10s12 1 12 10z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(92);
var OpalButton = /** @class */ (function (_super) {
    __extends(OpalButton, _super);
    function OpalButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramViewType = 'default';
        _this.paramSize = 'm';
        _this.paramCheckable = false;
        _this.paramChecked = false;
        _this.paramLoading = false;
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        return _this;
    }
    Object.defineProperty(OpalButton.prototype, "_tabIndex", {
        get: function () {
            return this.paramDisabled ? -1 : this.paramTabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalButton.prototype.ready = function () {
        if (this.paramFocused) {
            this.element.tabIndex = this._tabIndex;
            this.focus();
        }
    };
    OpalButton.prototype.elementAttached = function () {
        this.listenTo(this, {
            'change:paramFocused': this._onParamFocusedChange,
            'change:_tabIndex': this._onTabIndexChange
        });
        this.listenTo(this.element, {
            focus: this._onElementFocus,
            blur: this._onElementBlur,
            click: this._onElementClick
        });
        this.element.tabIndex = this._tabIndex;
    };
    OpalButton.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalButton.prototype._onTabIndexChange = function () {
        this.element.tabIndex = this._tabIndex;
    };
    OpalButton.prototype._onElementFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement != _this.element) {
                return;
            }
            if (_this.element.tagName.indexOf('-', 1) != -1) {
                _this._documentKeyDownListening = _this.listenTo(document, 'keydown', _this._onDocumentKeyDown);
            }
            _this.paramFocused = true;
            _this.emit('focus');
        });
    };
    OpalButton.prototype._onElementBlur = function () {
        if (this._documentKeyDownListening) {
            this._documentKeyDownListening.stop();
        }
        this.paramFocused = false;
        this.emit('blur');
    };
    OpalButton.prototype._onElementClick = function () {
        if (!this.paramDisabled) {
            this.click();
        }
    };
    OpalButton.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */) {
            evt.preventDefault();
            if (!this.paramDisabled) {
                this.click();
            }
        }
    };
    OpalButton.prototype.click = function () {
        if (this.paramCheckable) {
            this.emit(this.toggle() ? 'check' : 'uncheck');
            this.emit('change');
        }
        this.emit('click');
        return this;
    };
    Object.defineProperty(OpalButton.prototype, "checked", {
        get: function () {
            return this.paramChecked;
        },
        set: function (checked) {
            this.paramChecked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalButton.prototype, "selected", {
        get: function () {
            return this.checked;
        },
        set: function (selected) {
            this.checked = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalButton.prototype.check = function () {
        if (!this.paramChecked) {
            this.paramChecked = true;
            return true;
        }
        return false;
    };
    OpalButton.prototype.uncheck = function () {
        if (this.paramChecked) {
            this.paramChecked = false;
            return true;
        }
        return false;
    };
    OpalButton.prototype.toggle = function (value) {
        return (this.paramChecked = value === undefined ? !this.paramChecked : value);
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
        this.paramDisabled = false;
        return this;
    };
    OpalButton.prototype.disable = function () {
        this.paramDisabled = true;
        return this;
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramViewType", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramSize", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramCheckable", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramChecked", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramLoading", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalButton.prototype, "_tabIndex", null);
    OpalButton = __decorate([
        rionite_1.Component()
    ], OpalButton);
    return OpalButton;
}(rionite_1.BaseComponent));
exports.OpalButton = OpalButton;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalButton{padding:0;border:0;background:0 0;color:inherit;font:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalButton:not([view-type=clean]){position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:7px 23px;border-radius:3px;background:#546778;color:#fff;vertical-align:middle;text-align:center;text-decoration:none;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalButton:not([view-type=clean])::-moz-focus-inner{padding:0;border:0}.OpalButton:not([view-type=clean])[size=s]{padding:4px 14px;font-size:14px;line-height:21px}.OpalButton:not([view-type=clean]):hover{background:#597791}.OpalButton:not([view-type=clean]):focus{outline:0}body:not(._no-focus-highlight) .OpalButton:not([view-type=clean]):focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.OpalButton:not([view-type=clean]):active,.OpalButton:not([view-type=clean])[checked]{background:#43484c}.OpalButton:not([view-type=clean])[loading]{background-image:-o-linear-gradient(315deg,rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.35) 50%,rgba(255,255,255,.35) 75%,transparent 75%,transparent 100%);background-image:linear-gradient(135deg,rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.35) 50%,rgba(255,255,255,.35) 75%,transparent 75%,transparent 100%);background-size:30px 30px;-webkit-animation:OpalButton__loading-animation 3s linear infinite;animation:OpalButton__loading-animation 3s linear infinite}.OpalButton:not([view-type=clean])[disabled]{opacity:.5;pointer-events:none}.OpalGroup .OpalGroup__content-slot>.OpalButton:not([view-type=clean]):not(:first-child),.OpalGroup .OpalGroup__content-slot>:not(:first-child) .OpalButton:not([view-type=clean]){border-top-left-radius:0;border-bottom-left-radius:0;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4)}.OpalGroup .OpalGroup__content-slot>.OpalButton:not([view-type=clean]):not(:last-child),.OpalGroup .OpalGroup__content-slot>:not(:last-child) .OpalButton:not([view-type=clean]){border-top-right-radius:0;border-bottom-right-radius:0}.OpalSwitchMenu .OpalButton:not([view-type=clean]):not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4)}.OpalSwitchMenu .OpalButton:not([view-type=clean]):not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.OpalButton[view-type=primary]{background:#1b91f8}.OpalButton[view-type=primary]:hover{background-color:#33a0ff}.OpalButton[view-type=primary]:active,.OpalButton[view-type=primary][checked]{background-color:#1371c3}.OpalButton[view-type=danger]{background:#f63159}.OpalButton[view-type=danger]:hover{background-color:#fd496d}.OpalButton[view-type=danger]:active,.OpalButton[view-type=danger][checked]{background-color:#d3173d}@-webkit-keyframes OpalButton__loading-animation{0%{background-position:0 0}to{background-position:60px 0}}@keyframes OpalButton__loading-animation{0%{background-position:0 0}to{background-position:60px 0}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 93 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(94);
var template_nelm_1 = __webpack_require__(95);
var OpalSignButton = /** @class */ (function (_super) {
    __extends(OpalSignButton, _super);
    function OpalSignButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramCheckable = false;
        _this.paramChecked = false;
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        return _this;
    }
    Object.defineProperty(OpalSignButton.prototype, "_tabIndex", {
        get: function () {
            return this.paramDisabled ? -1 : this.paramTabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalSignButton.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramFocused', this._onParamFocusedChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur,
            click: this._onControlClick
        });
    };
    OpalSignButton.prototype.ready = function () {
        if (this.paramFocused) {
            this.focus();
        }
    };
    OpalSignButton.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalSignButton.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.paramFocused = true;
                _this.emit('focus');
            }
        });
    };
    OpalSignButton.prototype._onControlBlur = function () {
        this.paramFocused = false;
        this.emit('blur');
    };
    OpalSignButton.prototype._onControlClick = function (evt) {
        evt.preventDefault();
        if (!this.paramDisabled) {
            this.click();
        }
    };
    OpalSignButton.prototype.click = function () {
        if (this.paramCheckable) {
            this.emit(this.toggle() ? 'check' : 'uncheck');
        }
        this.emit('click');
        return this;
    };
    Object.defineProperty(OpalSignButton.prototype, "checked", {
        get: function () {
            return this.paramChecked;
        },
        set: function (checked) {
            this.paramChecked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSignButton.prototype, "selected", {
        get: function () {
            return this.checked;
        },
        set: function (selected) {
            this.checked = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalSignButton.prototype.check = function () {
        if (!this.paramChecked) {
            this.paramChecked = true;
            return true;
        }
        return false;
    };
    OpalSignButton.prototype.uncheck = function () {
        if (this.paramChecked) {
            this.paramChecked = false;
            return true;
        }
        return false;
    };
    OpalSignButton.prototype.toggle = function (value) {
        return (this.paramChecked = value === undefined ? !this.paramChecked : value);
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
        this.paramDisabled = false;
        return this;
    };
    OpalSignButton.prototype.disable = function () {
        this.paramDisabled = true;
        return this;
    };
    __decorate([
        rionite_1.Param({ required: true }),
        __metadata("design:type", String)
    ], OpalSignButton.prototype, "paramSign", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSignButton.prototype, "paramCheckable", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSignButton.prototype, "paramChecked", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSignButton.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSignButton.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSignButton.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalSignButton.prototype, "_tabIndex", null);
    OpalSignButton = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalSignButton);
    return OpalSignButton;
}(rionite_1.BaseComponent));
exports.OpalSignButton = OpalSignButton;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSignButton{display:inline-block;line-height:0}.OpalSignButton .OpalSignButton__control{position:relative;padding:0;border:0;background:0 0;color:inherit;white-space:nowrap;font:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalSignButton .OpalSignButton__control:focus{outline:0}body:not(._no-focus-highlight) .OpalSignButton .OpalSignButton__control:focus::after{position:absolute;top:-1px;right:0;bottom:1px;left:0;border:1px solid #1b91f8;border-radius:3px;content:'';pointer-events:none}.OpalSignButton .OpalSignButton__control:active{top:1px}.OpalSignButton .OpalSignButton__sign{position:relative;top:-1px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;margin:3px;width:28px;height:28px;border:2px solid;border-radius:50%;vertical-align:middle;-webkit-transition:border-color .1s linear;-o-transition:border-color .1s linear;transition:border-color .1s linear}.OpalSignButton .OpalSignButton__sign::before,.OpalSignButton .OpalSignButton__sign::after{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSignButton .OpalSignButton__sign::after{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.OpalSignButton[sign=plus] .OpalSignButton__control:hover .OpalSignButton__sign,.OpalSignButton[sign=plus] .OpalSignButton__control:active .OpalSignButton__sign{border-color:#33a0ff}.OpalSignButton[sign=plus] .OpalSignButton__control:hover .OpalSignButton__sign::before,.OpalSignButton[sign=plus] .OpalSignButton__control:hover .OpalSignButton__sign::after,.OpalSignButton[sign=plus] .OpalSignButton__control:active .OpalSignButton__sign::before,.OpalSignButton[sign=plus] .OpalSignButton__control:active .OpalSignButton__sign::after{background:#33a0ff}.OpalSignButton[sign=plus] .OpalSignButton__sign{border-color:#107cda}.OpalSignButton[sign=plus] .OpalSignButton__sign::before,.OpalSignButton[sign=plus] .OpalSignButton__sign::after{background:#107cda;content:''}.OpalSignButton[sign=minus] .OpalSignButton__control:hover .OpalSignButton__sign,.OpalSignButton[sign=minus] .OpalSignButton__control:active .OpalSignButton__sign{border-color:#fd496d}.OpalSignButton[sign=minus] .OpalSignButton__control:hover .OpalSignButton__sign::before,.OpalSignButton[sign=minus] .OpalSignButton__control:hover .OpalSignButton__sign::after,.OpalSignButton[sign=minus] .OpalSignButton__control:active .OpalSignButton__sign::before,.OpalSignButton[sign=minus] .OpalSignButton__control:active .OpalSignButton__sign::after{background:#fd496d}.OpalSignButton[sign=minus] .OpalSignButton__sign{border-color:#eb143f}.OpalSignButton[sign=minus] .OpalSignButton__sign::before{background:#eb143f;content:''}.OpalSignButton[checked] .OpalSignButton__control{top:1px}.OpalSignButton[disabled]{opacity:.5;pointer-events:none}.OpalSignButton[disabled] .OpalSignButton__control{cursor:default}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nbutton/control (tabindex={_tabIndex}) {\nspan/sign\n' '\nRtSlot/content-slot\n}\n}");

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(97);
var template_nelm_1 = __webpack_require__(98);
var OpalTextInput = /** @class */ (function (_super) {
    __extends(OpalTextInput, _super);
    function OpalTextInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramInputType = 'text';
        _this.paramSize = 'm';
        _this.paramMultiline = false;
        _this.paramRows = 5;
        _this.paramAutoHeight = true;
        _this.paramValue = '';
        _this.paramClearable = false;
        _this.paramLoading = false;
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        return _this;
    }
    Object.defineProperty(OpalTextInput.prototype, "_textFieldValue", {
        get: function () {
            return this.paramValue;
        },
        set: function (value) {
            this._textFieldValueCell.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTextInput.prototype, "value", {
        get: function () {
            return this._textFieldValue.trim() || null;
        },
        set: function (value) {
            this._textFieldValue = this.textField.value = value || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTextInput.prototype, "isControlIconShown", {
        get: function () {
            return !this.isBtnClearShown && !this.paramLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTextInput.prototype, "isBtnClearShown", {
        get: function () {
            return !!this._textFieldValue && !this.paramLoading;
        },
        enumerable: true,
        configurable: true
    });
    OpalTextInput.prototype.ready = function () {
        var textField = (this.textField = this.$('text-field'));
        if (this._textFieldValue) {
            textField.value = this._textFieldValue;
        }
        else if (this.paramStoreKey) {
            this._textFieldValue = textField.value = localStorage.getItem(this.paramStoreKey) || '';
        }
        this._prevValue = this.value;
        if (this.paramMultiline && this.paramAutoHeight) {
            var offsetHeight = textField.offsetHeight;
            if (offsetHeight) {
                this._initialHeight =
                    offsetHeight + textField.scrollHeight - textField.clientHeight;
                this._fixHeight();
            }
            else {
                this._initialHeight =
                    parseInt(getComputedStyle(textField).lineHeight, 10) * this.paramRows +
                        parseInt(getComputedStyle(textField).borderTop, 10) +
                        parseInt(getComputedStyle(textField).borderBottom, 10) +
                        parseInt(getComputedStyle(textField).paddingTop, 10) +
                        parseInt(getComputedStyle(textField).paddingBottom, 10);
                textField.style.height = this._initialHeight + 'px';
            }
        }
        if (this.paramFocused) {
            this.focus();
        }
    };
    OpalTextInput.prototype.elementAttached = function () {
        this.listenTo(this, {
            'change:paramValue': this._onParamValueChange,
            'change:paramFocused': this._onParamFocusedChange
        });
        this.listenTo(this.textField, {
            focus: this._onTextFieldFocus,
            blur: this._onTextFieldBlur,
            input: this._onTextFieldInput,
            change: this._onTextFieldChange,
            keydown: this._onTextFieldKeyDown,
            keypress: this._onTextFieldKeyPress,
            keyup: this._onTextFieldKeyUp
        });
    };
    OpalTextInput.prototype._onParamValueChange = function (evt) {
        if (this.textField.value != evt.data.value) {
            this.textField.value = evt.data.value;
        }
    };
    OpalTextInput.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalTextInput.prototype._onTextFieldFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == _this.textField) {
                _this.paramFocused = true;
                _this.emit('focus');
            }
        });
    };
    OpalTextInput.prototype._onTextFieldBlur = function () {
        this.paramFocused = false;
        this.emit('blur');
    };
    OpalTextInput.prototype._onTextFieldInput = function (evt) {
        this._textFieldValue = this.textField.value;
        this.emit('input', {
            initialEvent: evt
        });
    };
    OpalTextInput.prototype._onTextFieldChange = function (evt) {
        if (this.value === this._prevValue) {
            return;
        }
        this._prevValue = this.value;
        if (this.paramStoreKey) {
            localStorage.setItem(this.paramStoreKey, this.textField.value);
        }
        this.emit({
            type: 'change',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._onTextFieldKeyDown = function (evt) {
        var _this = this;
        if (this.paramMultiline && this.paramAutoHeight) {
            setTimeout(function () {
                _this._fixHeight();
            }, 1);
        }
        this.emit({
            type: 'keydown',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._onTextFieldKeyPress = function (evt) {
        if (evt.which == 13 /* Enter */ && this.value) {
            this.emit('confirm');
        }
        this.emit({
            type: 'keypress',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._onTextFieldKeyUp = function (evt) {
        if (this.paramMultiline && this.paramAutoHeight) {
            this._fixHeight();
        }
        this.emit({
            type: 'keyup',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._fixHeight = function () {
        var textField = this.textField;
        var lineHeight = parseInt(getComputedStyle(textField).lineHeight, 10);
        textField.style.height = this._initialHeight - lineHeight + 'px';
        textField.style.height =
            textField.offsetHeight +
                textField.scrollHeight -
                textField.clientHeight +
                lineHeight +
                'px';
    };
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
        this.paramDisabled = false;
        return this;
    };
    OpalTextInput.prototype.disable = function () {
        this.paramDisabled = true;
        return this;
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramInputType", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramSize", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramMultiline", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramRows", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramAutoHeight", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTextInput.prototype, "paramInputName", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramValue", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTextInput.prototype, "paramStoreKey", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTextInput.prototype, "paramPlaceholder", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramClearable", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramLoading", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], OpalTextInput.prototype, "_textFieldValue", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalTextInput.prototype, "isControlIconShown", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalTextInput.prototype, "isBtnClearShown", null);
    OpalTextInput = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default,
            domEvents: {
                'btn-clear': {
                    click: function () {
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
}(rionite_1.BaseComponent));
exports.OpalTextInput = OpalTextInput;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTextInput{position:relative;display:inline-block;width:400px;vertical-align:middle}.OpalTextInput .OpalTextInput__text-field{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 34px 6px 11px;width:100%;border:1px solid #adadad;border-top-color:#a8a8a8;border-bottom-color:#c7c7c7;border-radius:3px;background:#fff;-webkit-box-shadow:inset 0 1px rgba(0,0,0,.1);box-shadow:inset 0 1px rgba(0,0,0,.1);color:#000;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-transition:border-color .1s linear;-o-transition:border-color .1s linear;transition:border-color .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalTextInput .OpalTextInput__control-icon-slot{display:none}.OpalTextInput .OpalTextInput__control-icon-slot[shown]{display:block}.OpalTextInput .OpalTextInput__control-icon{position:absolute;top:0;right:12px;bottom:0;display:block;margin:auto;width:18px;height:18px;color:gray}.OpalTextInput .OpalTextInput__btn-clear{position:absolute;top:0;right:9px;bottom:0;display:none;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:gray;cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear}.OpalTextInput .OpalTextInput__btn-clear[shown]{display:block}.OpalTextInput .OpalTextInput__btn-clear:hover{color:#000}.OpalTextInput .OpalTextInput__btn-clear:focus{outline:0}body:not(._no-focus-highlight) .OpalTextInput .OpalTextInput__btn-clear:focus{outline:1px solid #1b91f8}.OpalTextInput .OpalTextInput__btn-clear:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalTextInput .OpalTextInput__btn-clear-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px}.OpalTextInput .OpalTextInput__loader{position:absolute;top:0;right:12px;bottom:0;margin:auto;border:0;pointer-events:none}.OpalTextInput:hover .OpalTextInput__text-field{border-color:#949494;border-top-color:#8f8f8f;border-bottom-color:#adadad}.OpalTextInput .OpalTextInput__text-field:focus{outline:0;border-color:#1b91f8}.OpalTextInput[multiline]:not([auto-height=no]) .OpalTextInput__text-field{overflow-y:hidden}.OpalTextInput[valid] .OpalTextInput__text-field,.OpalTextInput[valid] .OpalTextInput__text-field:focus{border-color:#18b461}.OpalTextInput[valid=no] .OpalTextInput__text-field,.OpalTextInput[valid=no] .OpalTextInput__text-field:focus{border-color:#f63159}.OpalTextInput[disabled]{opacity:.5;pointer-events:none}.OpalTextInput[disabled] .OpalTextInput__text-field{background:#e6e6e6}.OpalGroup .OpalGroup__content-slot>.OpalTextInput:not(:first-child),.OpalGroup .OpalGroup__content-slot>:not(:first-child) .OpalTextInput{margin-right:-1px}.OpalGroup__content-slot .OpalTextInput:not(:first-child) .OpalTextInput__text-field,.OpalGroup__content-slot :not(:first-child) .OpalTextInput .OpalTextInput__text-field{border-top-left-radius:0;border-bottom-left-radius:0}.OpalGroup__content-slot .OpalTextInput:not(:last-child) .OpalTextInput__text-field,.OpalGroup__content-slot :not(:last-child) .OpalTextInput .OpalTextInput__text-field{border-top-right-radius:0;border-bottom-right-radius:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\n@IfThen (if=paramMultiline) {\ntextarea/, text-field (\nrows={paramRows},\nname={paramInputName},\nplaceholder={paramPlaceholder},\ntabindex={paramTabIndex},\ndisabled={paramDisabled}\n)\n}\n@IfElse (if=paramMultiline) {\ninput/, text-field (\ntype={paramInputType},\nname={paramInputName},\nplaceholder={paramPlaceholder},\ntabindex={paramTabIndex},\ndisabled={paramDisabled}\n)\n}\nRtSlot/control-icon-slot (for=control-icon, shown={isControlIconShown})\n@IfThen (if=paramClearable) {\nbutton/btn-clear (shown={isBtnClearShown}) {\nOpalIcon/btn-clear-icon (name=cross)\n}\n}\n@IfThen (if=paramLoading) {\nOpalLoader/loader (size=s, shown)\n}\n}");

/***/ }),
/* 99 */
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
__webpack_require__(100);
var template_nelm_1 = __webpack_require__(101);
var OpalEditableText = /** @class */ (function (_super) {
    __extends(OpalEditableText, _super);
    function OpalEditableText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalEditableText.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = this._fixedValue = (value && value.trim()) || null;
            this._textNode.nodeValue = value || '';
        },
        enumerable: true,
        configurable: true
    });
    OpalEditableText.prototype.ready = function () {
        var contentSlotEl = this.$('content-slot').element;
        var firstChild = contentSlotEl.firstChild;
        if (!firstChild || firstChild.nodeType != Node.TEXT_NODE) {
            throw new TypeError('Content must be text node');
        }
        this._textNode = firstChild;
        this._value = this._fixedValue = contentSlotEl.textContent.trim() || null;
    };
    OpalEditableText.prototype.elementAttached = function () {
        this.listenTo(this.element, 'click', this._onElementClick);
        this.listenTo(this.$('content-slot').element, {
            focus: this._onContentSlotElementFocus,
            blur: this._onContentSlotElementBlur,
            input: this._onContentSlotElementInput
        });
    };
    OpalEditableText.prototype._onElementClick = function (evt) {
        if (evt.target == this.element) {
            this.focus();
        }
    };
    OpalEditableText.prototype._onContentSlotElementFocus = function () {
        this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
    };
    OpalEditableText.prototype._onContentSlotElementBlur = function () {
        this._documentKeyDownListening.stop();
        if (this._fixedValue != this._value) {
            this._fixedValue = this._value;
            this.emit('change');
        }
    };
    OpalEditableText.prototype._onContentSlotElementInput = function () {
        var contentSlotEl = this.$('content-slot').element;
        var text = contentSlotEl.textContent;
        if (contentSlotEl.innerHTML != text) {
            while (contentSlotEl.lastChild) {
                contentSlotEl.removeChild(contentSlotEl.lastChild);
            }
            var textNode = this._textNode;
            textNode.nodeValue = text;
            contentSlotEl.appendChild(textNode);
            var sel = window.getSelection();
            var rng = document.createRange();
            rng.setStart(textNode, text.length);
            sel.removeAllRanges();
            sel.addRange(rng);
        }
        else if (!contentSlotEl.firstChild) {
            this._textNode.nodeValue = '';
            contentSlotEl.appendChild(this._textNode);
        }
        this._value = text.trim() || null;
        this.emit('input');
    };
    OpalEditableText.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13) {
            evt.preventDefault();
        }
    };
    OpalEditableText.prototype.focus = function (selectAll) {
        var textNode = this._textNode;
        var sel = window.getSelection();
        var rng = document.createRange();
        if (selectAll) {
            rng.selectNode(textNode);
        }
        else {
            rng.setStart(textNode, textNode.nodeValue.length);
        }
        sel.removeAllRanges();
        sel.addRange(rng);
    };
    OpalEditableText = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default,
            domEvents: {
                'icon-edit': {
                    click: function () {
                        this.focus(true);
                    }
                }
            }
        })
    ], OpalEditableText);
    return OpalEditableText;
}(rionite_1.BaseComponent));
exports.OpalEditableText = OpalEditableText;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalEditableText{display:block;cursor:text}.OpalEditableText .OpalEditableText__content-wrapper{position:relative;display:inline-block;padding-right:24px}.OpalEditableText .OpalEditableText__content-slot{display:inline-block;padding-right:2px}.OpalEditableText .OpalEditableText__content-slot:focus{outline:solid 1px #000}.OpalEditableText .OpalEditableText__icon-edit{position:absolute;top:0;right:0;display:block;width:16px;height:16px;border:solid 2px transparent;border-left-width:6px;color:#107cda;cursor:pointer}.OpalEditableText .OpalEditableText__icon-edit:hover,.OpalEditableText .OpalEditableText__icon-edit:active{stroke:#33a0ff}.OpalEditableText .OpalEditableText__icon-edit:active{top:1px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nspan/content-wrapper {\nRtSlot/content-slot (contenteditable, spellcheck=false)\nOpalIcon/icon-edit (name=compose, stroke-width=3)\n}\n}");

/***/ }),
/* 102 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var OpalInputMaskDefinition_1 = __webpack_require__(103);
exports.OpalInputMaskDefinition = OpalInputMaskDefinition_1.OpalInputMaskDefinition;
var template_nelm_1 = __webpack_require__(105);
var forEach = Array.prototype.forEach;
var iPhone = /iphone/i.test(navigator.userAgent);
var ie11 = !window.ActiveXObject && 'ActiveXObject' in window;
var OpalInputMask = /** @class */ (function (_super) {
    __extends(OpalInputMask, _super);
    function OpalInputMask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalInputMask_1 = OpalInputMask;
    Object.defineProperty(OpalInputMask.prototype, "_mask", {
        get: function () {
            return this.paramMask.split('').filter(function (chr) { return chr != '?'; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalInputMask.prototype, "_partialIndex", {
        get: function () {
            var index = this.paramMask.indexOf('?');
            return index == -1 ? this.paramMask.length : index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalInputMask.prototype, "_tests", {
        get: function () {
            var _this = this;
            return this._mask.map(function (chr) { return _this._definitions[chr] || null; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalInputMask.prototype, "_firstTestIndex", {
        get: function () {
            return this._tests.findIndex(function (test) { return !!test; });
        },
        enumerable: true,
        configurable: true
    });
    OpalInputMask.prototype.initialize = function () {
        this._definitions = Object.create(this.constructor.defaultDefinitions);
    };
    OpalInputMask.prototype.ready = function () {
        this.textField = this.$('text-input').textField;
        var definitions = this._definitions;
        forEach.call(this.element.getElementsByTagName('opal-input-mask-definition'), function (inputMaskDefinition) {
            definitions[inputMaskDefinition.$component.paramMaskChar] = inputMaskDefinition.$component.paramRegex;
        });
        this._initBuffer();
    };
    OpalInputMask.prototype.elementAttached = function () {
        this.listenTo(this, 'change:_mask', this._onMaskChange);
        this.listenTo(this.textField, {
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
        this._initBuffer();
        this._checkValue(false);
    };
    OpalInputMask.prototype._onTextFieldFocus = function () {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == _this.textField) {
                _this._setTextFieldSelection(0, _this._checkValue(false));
                _this._textOnFocus = _this.textField.value;
                _this._writeBuffer();
            }
        });
    };
    OpalInputMask.prototype._onTextFieldBlur = function () {
        this._checkValue(false);
        if (this.textField.value != this._textOnFocus) {
            this.$('text-input').emit('change');
        }
    };
    OpalInputMask.prototype._onTextFieldKeyDown = function (evt) {
        var textField = this.textField;
        var key = evt.which;
        // Backspace, delete, and escape get special treatment
        if (key == 8 || key == 46 || (iPhone && key == 127)) {
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
        else if (key == 27 /* Escape */) {
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
        var textField = this.textField;
        var start = textField.selectionStart;
        var end = textField.selectionEnd;
        var key = evt.which;
        if (evt.ctrlKey || evt.altKey || evt.metaKey || key < 32 /* Ignore */) {
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
        this._buffer = this._mask.map(function (chr) { return (definitions[chr] ? null : chr); });
    };
    OpalInputMask.prototype._checkValue = function (allowNotCompleted) {
        var partialIndex = this._partialIndex;
        var tests = this._tests;
        var buffer = this._buffer;
        var bufferLen = buffer.length;
        var value = this.textField.value;
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
                this.$('text-input').value = buffer
                    .slice(0, lastMatchIndex + 1)
                    .join('');
            }
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
        this.$('text-input').value = (toIndex == -1
            ? buffer
            : buffer.slice(0, toIndex)).join('');
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
        this.textField.setSelectionRange(start, end);
    };
    OpalInputMask.defaultDefinitions = {
        __proto__: null,
        9: /\d/,
        z: /[a-zA-Z]/,
        '*': /[0-9a-zA-Z]/
    };
    __decorate([
        rionite_1.Param({ required: true }),
        __metadata("design:type", String)
    ], OpalInputMask.prototype, "paramMask", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], OpalInputMask.prototype, "_mask", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalInputMask.prototype, "_partialIndex", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], OpalInputMask.prototype, "_tests", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalInputMask.prototype, "_firstTestIndex", null);
    OpalInputMask = OpalInputMask_1 = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalInputMask);
    return OpalInputMask;
    var OpalInputMask_1;
}(rionite_1.BaseComponent));
exports.OpalInputMask = OpalInputMask;


/***/ }),
/* 103 */
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(104);
var OpalInputMaskDefinition = /** @class */ (function (_super) {
    __extends(OpalInputMaskDefinition, _super);
    function OpalInputMaskDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        rionite_1.Param({ required: true, readonly: true }),
        __metadata("design:type", String)
    ], OpalInputMaskDefinition.prototype, "paramMaskChar", void 0);
    __decorate([
        rionite_1.Param({ type: eval, required: true, readonly: true }),
        __metadata("design:type", RegExp)
    ], OpalInputMaskDefinition.prototype, "paramRegex", void 0);
    OpalInputMaskDefinition = __decorate([
        rionite_1.Component()
    ], OpalInputMaskDefinition);
    return OpalInputMaskDefinition;
}(rionite_1.BaseComponent));
exports.OpalInputMaskDefinition = OpalInputMaskDefinition;


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalInputMaskDefinition{display:none}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot/content-slot\n}");

/***/ }),
/* 106 */
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
__webpack_require__(107);
var template_nelm_1 = __webpack_require__(108);
var OpalGroup = /** @class */ (function (_super) {
    __extends(OpalGroup, _super);
    function OpalGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalGroup = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalGroup);
    return OpalGroup;
}(rionite_1.BaseComponent));
exports.OpalGroup = OpalGroup;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalGroup{position:relative;display:inline-block;vertical-align:middle;white-space:nowrap;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot/content-slot\n}");

/***/ }),
/* 109 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(110);
var template_nelm_1 = __webpack_require__(111);
var OpalCheckbox = /** @class */ (function (_super) {
    __extends(OpalCheckbox, _super);
    function OpalCheckbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramChecked = false;
        _this.paramIndeterminate = false;
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        return _this;
    }
    Object.defineProperty(OpalCheckbox.prototype, "_tabIndex", {
        get: function () {
            return this.paramDisabled ? -1 : this.paramTabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalCheckbox.prototype.elementAttached = function () {
        this.listenTo(this, {
            'change:paramChecked': this._onParamCheckedChange,
            'change:paramIndeterminate': this._onParamIndeterminateChange,
            'change:paramFocused': this._onParamFocusedChange
        });
        this.listenTo('input', 'change', this._onInputChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur
        });
    };
    OpalCheckbox.prototype.ready = function () {
        if (this.paramChecked) {
            this.paramIndeterminate = false;
            this.$('input').checked = true;
        }
        if (this.paramFocused) {
            this.focus();
        }
    };
    OpalCheckbox.prototype._onParamCheckedChange = function (evt) {
        if (evt.data.value) {
            this.paramIndeterminate = false;
        }
        this.$('input').checked = evt.data.value;
    };
    OpalCheckbox.prototype._onParamIndeterminateChange = function (evt) {
        if (evt.data.value) {
            this.paramChecked = false;
        }
    };
    OpalCheckbox.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
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
            if (!this.paramDisabled) {
                this.emit((this.paramChecked = !this.paramChecked) ? 'check' : 'uncheck');
                this.emit('change');
            }
        }
    };
    OpalCheckbox.prototype._onInputChange = function (evt) {
        this.emit((this.paramChecked = evt.target.checked) ? 'check' : 'uncheck');
        this.emit('change');
    };
    OpalCheckbox.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.paramFocused = true;
                _this.emit('focus');
            }
        });
    };
    OpalCheckbox.prototype._onControlBlur = function () {
        this.paramFocused = false;
        this.emit('blur');
    };
    Object.defineProperty(OpalCheckbox.prototype, "checked", {
        get: function () {
            return this.paramChecked;
        },
        set: function (checked) {
            this.paramChecked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCheckbox.prototype, "selected", {
        get: function () {
            return this.checked;
        },
        set: function (selected) {
            this.checked = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalCheckbox.prototype.check = function () {
        if (!this.paramChecked) {
            this.paramChecked = true;
            return true;
        }
        return false;
    };
    OpalCheckbox.prototype.uncheck = function () {
        if (this.paramChecked) {
            this.paramChecked = false;
            return true;
        }
        return false;
    };
    OpalCheckbox.prototype.toggle = function (value) {
        return (this.paramChecked = value === undefined ? !this.paramChecked : value);
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
        this.paramDisabled = false;
        return this;
    };
    OpalCheckbox.prototype.disable = function () {
        this.paramDisabled = true;
        return this;
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalCheckbox.prototype, "paramChecked", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalCheckbox.prototype, "paramIndeterminate", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalCheckbox.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalCheckbox.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalCheckbox.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalCheckbox.prototype, "_tabIndex", null);
    OpalCheckbox = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalCheckbox);
    return OpalCheckbox;
}(rionite_1.BaseComponent));
exports.OpalCheckbox = OpalCheckbox;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalCheckbox{position:relative;display:inline-block}.OpalCheckbox .OpalCheckbox__label:hover .OpalCheckbox__control{border-color:#8a8a8a}.OpalCheckbox .OpalCheckbox__label:hover .OpalCheckbox__control:focus{border-color:#33a0ff}.OpalCheckbox .OpalCheckbox__input{display:none}.OpalCheckbox .OpalCheckbox__control{position:relative;top:-1px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:3px;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalCheckbox .OpalCheckbox__control:focus{outline:0;border-color:#33a0ff}.OpalCheckbox[checked] .OpalCheckbox__control::before{position:absolute;top:1px;left:6px;width:5px;height:10px;border:solid #000;border-width:0 2px 2px 0;content:'';-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.OpalCheckbox[indeterminate] .OpalCheckbox__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#000;content:''}.OpalCheckbox[disabled]{opacity:.5;pointer-events:none}.OpalCheckbox[disabled] .OpalCheckbox__control{background:#e6e6e6}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nlabel/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex})\n' '\nRtSlot/content-slot\n}\n}");

/***/ }),
/* 112 */
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
var OpalRadioButton_1 = __webpack_require__(113);
exports.OpalRadioButton = OpalRadioButton_1.OpalRadioButton;
var forEach = Array.prototype.forEach;
var OpalRadioGroup = /** @class */ (function (_super) {
    __extends(OpalRadioGroup, _super);
    function OpalRadioGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalRadioGroup.prototype.ready = function () {
        this.buttonElements = this.element.getElementsByClassName('OpalRadioButton');
    };
    OpalRadioGroup.prototype.elementAttached = function () {
        this.listenTo(this, {
            '<OpalRadioButton>check': this._onCheck,
            '<OpalRadioButton>uncheck': this._onUncheck
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
    OpalRadioGroup = __decorate([
        rionite_1.Component()
    ], OpalRadioGroup);
    return OpalRadioGroup;
}(rionite_1.BaseComponent));
exports.OpalRadioGroup = OpalRadioGroup;


/***/ }),
/* 113 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(114);
var template_nelm_1 = __webpack_require__(115);
var OpalRadioButton = /** @class */ (function (_super) {
    __extends(OpalRadioButton, _super);
    function OpalRadioButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramChecked = false;
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        return _this;
    }
    Object.defineProperty(OpalRadioButton.prototype, "_tabIndex", {
        get: function () {
            return this.paramDisabled ? -1 : this.paramTabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalRadioButton.prototype.ready = function () {
        if (this.paramChecked) {
            this.$('input').checked = true;
        }
        if (this.paramFocused) {
            this.focus();
        }
    };
    OpalRadioButton.prototype.elementAttached = function () {
        this.listenTo(this, {
            'change:paramChecked': this._onParamCheckedChange,
            'change:paramFocused': this._onParamFocusedChange
        });
        this.listenTo('input', 'change', this._onInputChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur
        });
    };
    OpalRadioButton.prototype._onParamCheckedChange = function (evt) {
        this.$('input').checked = evt.data.value;
    };
    OpalRadioButton.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
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
            if (!this.paramDisabled) {
                this.emit((this.paramChecked = !this.paramChecked) ? 'check' : 'uncheck');
                this.emit('change');
            }
        }
    };
    OpalRadioButton.prototype._onInputChange = function (evt) {
        this.emit((this.paramChecked = evt.target.checked) ? 'check' : 'uncheck');
        this.emit('change');
    };
    OpalRadioButton.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.paramFocused = true;
                _this.emit('focus');
            }
        });
    };
    OpalRadioButton.prototype._onControlBlur = function () {
        this.paramFocused = false;
        this.emit('blur');
    };
    Object.defineProperty(OpalRadioButton.prototype, "checked", {
        get: function () {
            return this.paramChecked;
        },
        set: function (checked) {
            this.paramChecked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalRadioButton.prototype, "selected", {
        get: function () {
            return this.checked;
        },
        set: function (selected) {
            this.checked = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalRadioButton.prototype.check = function () {
        if (!this.paramChecked) {
            this.paramChecked = true;
            return true;
        }
        return false;
    };
    OpalRadioButton.prototype.uncheck = function () {
        if (this.paramChecked) {
            this.paramChecked = false;
            return true;
        }
        return false;
    };
    OpalRadioButton.prototype.toggle = function (value) {
        return (this.paramChecked = value === undefined ? !this.paramChecked : value);
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
        this.paramDisabled = false;
        return this;
    };
    OpalRadioButton.prototype.disable = function () {
        this.paramDisabled = true;
        return this;
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalRadioButton.prototype, "paramChecked", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalRadioButton.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalRadioButton.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalRadioButton.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalRadioButton.prototype, "_tabIndex", null);
    OpalRadioButton = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalRadioButton);
    return OpalRadioButton;
}(rionite_1.BaseComponent));
exports.OpalRadioButton = OpalRadioButton;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalRadioButton{position:relative;display:inline-block}.OpalRadioButton .OpalRadioButton__label:hover .OpalRadioButton__control{border-color:#8a8a8a}.OpalRadioButton .OpalRadioButton__label:hover .OpalRadioButton__control:focus{border-color:#33a0ff}.OpalRadioButton .OpalRadioButton__input{display:none}.OpalRadioButton .OpalRadioButton__control{position:relative;top:-1px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:50%;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalRadioButton .OpalRadioButton__control:focus{outline:0;border-color:#33a0ff}.OpalRadioButton[checked] .OpalRadioButton__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:10px;height:10px;border-radius:50%;background:#000;content:''}.OpalRadioButton[disabled]{opacity:.5;pointer-events:none}.OpalRadioButton[disabled] .OpalRadioButton__control{background:#e6e6e6}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nlabel/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex})\n' '\nRtSlot/content-slot\n}\n}");

/***/ }),
/* 116 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(117);
var template_nelm_1 = __webpack_require__(118);
var OpalSwitch = /** @class */ (function (_super) {
    __extends(OpalSwitch, _super);
    function OpalSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramChecked = false;
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        return _this;
    }
    OpalSwitch.prototype._tabIndex = function () {
        return this.paramDisabled ? -1 : this.paramTabIndex;
    };
    OpalSwitch.prototype.ready = function () {
        if (this.paramChecked) {
            this.$('input').checked = true;
        }
        if (this.paramFocused) {
            this.focus();
        }
    };
    OpalSwitch.prototype.elementAttached = function () {
        this.listenTo(this, {
            'change:paramChecked': this._onParamCheckedChange,
            'change:paramFocused': this._onParamFocusedChange
        });
        this.listenTo('input', 'change', this._onInputChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur
        });
    };
    OpalSwitch.prototype._onParamCheckedChange = function (evt) {
        this.$('input').checked = evt.data.value;
    };
    OpalSwitch.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
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
            if (!this.paramDisabled) {
                this.emit((this.paramChecked = !this.paramChecked) ? 'check' : 'uncheck');
                this.emit('change');
            }
        }
    };
    OpalSwitch.prototype._onInputChange = function (evt) {
        this.emit((this.paramChecked = evt.target.checked) ? 'check' : 'uncheck');
        this.emit('change');
    };
    OpalSwitch.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.paramFocused = true;
                _this.emit('focus');
            }
        });
    };
    OpalSwitch.prototype._onControlBlur = function () {
        this.paramFocused = false;
        this.emit('blur');
    };
    Object.defineProperty(OpalSwitch.prototype, "checked", {
        get: function () {
            return this.paramChecked;
        },
        set: function (checked) {
            this.paramChecked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalSwitch.prototype, "selected", {
        get: function () {
            return this.checked;
        },
        set: function (selected) {
            this.checked = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalSwitch.prototype.check = function () {
        if (!this.paramChecked) {
            this.paramChecked = true;
            return true;
        }
        return false;
    };
    OpalSwitch.prototype.uncheck = function () {
        if (this.paramChecked) {
            this.paramChecked = false;
            return true;
        }
        return false;
    };
    OpalSwitch.prototype.toggle = function (value) {
        return (this.paramChecked = value === undefined ? !this.paramChecked : value);
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
        this.paramDisabled = false;
        return this;
    };
    OpalSwitch.prototype.disable = function () {
        this.paramDisabled = true;
        return this;
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSwitch.prototype, "paramChecked", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSwitch.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSwitch.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSwitch.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], OpalSwitch.prototype, "_tabIndex", null);
    OpalSwitch = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalSwitch);
    return OpalSwitch;
}(rionite_1.BaseComponent));
exports.OpalSwitch = OpalSwitch;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSwitch{position:relative;display:inline-block}.OpalSwitch .OpalSwitch__label:hover .OpalSwitch__thumb{background:#597791}.OpalSwitch .OpalSwitch__input{display:none}.OpalSwitch .OpalSwitch__control{position:relative;top:-1px;display:inline-block;margin:3px;width:30px;height:14px;border-radius:7px;background:#d6d6d6;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalSwitch .OpalSwitch__control:focus{outline:0}body:not(._no-focus-highlight) .OpalSwitch .OpalSwitch__control:focus .OpalSwitch__thumb::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:50%;content:''}.OpalSwitch .OpalSwitch__thumb{position:absolute;top:-3px;left:-3px;width:20px;height:20px;border-radius:50%;background:#546778;-webkit-transition:background .1s linear,-webkit-transform .1s linear;transition:background .1s linear,-webkit-transform .1s linear;-o-transition:background .1s linear,transform .1s linear;transition:background .1s linear,transform .1s linear;transition:background .1s linear,transform .1s linear,-webkit-transform .1s linear}.OpalSwitch[checked] .OpalSwitch__label:hover .OpalSwitch__thumb{background:#33a0ff}.OpalSwitch[checked] .OpalSwitch__thumb{background:#1b91f8;-webkit-transform:translateX(16px);-ms-transform:translateX(16px);transform:translateX(16px)}.OpalSwitch[disabled]{opacity:.5;pointer-events:none}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nlabel/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex}) {\nspan/thumb\n}\n' '\nRtSlot/content-slot\n}\n}");

/***/ }),
/* 119 */
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
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(120);
var template_nelm_1 = __webpack_require__(121);
var OpalSlider = /** @class */ (function (_super) {
    __extends(OpalSlider, _super);
    function OpalSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramMin = 0;
        _this.paramMax = 100;
        _this.paramStep = 1;
        _this.paramValue = 0;
        return _this;
    }
    Object.defineProperty(OpalSlider.prototype, "_firstInputWidth", {
        get: function () {
            var min = this.paramMin;
            var all = this.paramMax - min;
            return (Math.round(((this._firstInputValue - min) / all + (this._secondInputValue - min) / all) /
                2 *
                1e5) / 1e3);
        },
        enumerable: true,
        configurable: true
    });
    OpalSlider.prototype.initialize = function () {
        var range = this.paramRange;
        if (range) {
            this._firstInputValue = range[0];
            this._secondInputValue = range[1];
        }
    };
    OpalSlider.prototype.elementAttached = function () {
        if (this.paramRange) {
            this.listenTo('first-input', 'input', this._onFirstInputInput);
            this.listenTo('second-input', 'input', this._onSecondInputInput);
        }
    };
    OpalSlider.prototype._onFirstInputInput = function (evt) {
        var secondInput = this.$('second-input');
        var value = (this._firstInputValue = +evt.target.value);
        if (+secondInput.value < value) {
            secondInput.value = this._secondInputValue = value;
        }
    };
    OpalSlider.prototype._onSecondInputInput = function (evt) {
        var firstInput = this.$('first-input');
        var value = (this._secondInputValue = +evt.target.value);
        if (+firstInput.value > value) {
            firstInput.value = this._firstInputValue = value;
        }
    };
    Object.defineProperty(OpalSlider.prototype, "value", {
        get: function () {
            return this.paramRange
                ? [this._firstInputValue, this._secondInputValue]
                : +this.$('input').value;
        },
        set: function (value) {
            if (this.paramRange) {
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
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSlider.prototype, "paramMin", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSlider.prototype, "paramMax", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSlider.prototype, "paramStep", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalSlider.prototype, "paramValue", void 0);
    __decorate([
        rionite_1.Param({ type: eval }),
        __metadata("design:type", Array)
    ], OpalSlider.prototype, "paramRange", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Number)
    ], OpalSlider.prototype, "_firstInputValue", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Number)
    ], OpalSlider.prototype, "_secondInputValue", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalSlider.prototype, "_firstInputWidth", null);
    OpalSlider = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalSlider);
    return OpalSlider;
}(rionite_1.BaseComponent));
exports.OpalSlider = OpalSlider;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSlider{position:relative;top:-1px;display:inline-block;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalSlider::before{position:absolute;top:3px;right:3px;left:3px;z-index:0;height:14px;border-radius:7px;background:#d6d6d6;content:''}.OpalSlider .OpalSlider__first-input-wrapper3{position:absolute;top:0;right:10px;left:10px;z-index:2}.OpalSlider .OpalSlider__first-input-wrapper2{position:relative}.OpalSlider .OpalSlider__first-input-wrapper{position:absolute;top:0;right:0;left:-10px;overflow:hidden}.OpalSlider .OpalSlider__first-input,.OpalSlider .OpalSlider__second-input{display:block;margin:0;padding:0;width:200px;height:20px;background:0 0;-webkit-appearance:none}.OpalSlider .OpalSlider__first-input::-moz-focus-outer{border:0}.OpalSlider .OpalSlider__first-input::-moz-range-track{border:0;background:0 0}.OpalSlider .OpalSlider__first-input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.OpalSlider .OpalSlider__first-input::-ms-fill-lower{background:0 0}.OpalSlider .OpalSlider__first-input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.OpalSlider .OpalSlider__first-input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__first-input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__second-input{position:relative;z-index:1}.OpalSlider .OpalSlider__second-input::-moz-focus-outer{border:0}.OpalSlider .OpalSlider__second-input::-moz-range-track{border:0;background:0 0}.OpalSlider .OpalSlider__second-input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.OpalSlider .OpalSlider__second-input::-ms-fill-lower{background:0 0}.OpalSlider .OpalSlider__second-input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.OpalSlider .OpalSlider__second-input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__second-input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#1b91f8;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__input{position:relative;z-index:1;display:block;margin:0;padding:0;width:200px;height:20px;background:0 0;-webkit-appearance:none}.OpalSlider .OpalSlider__input::-moz-focus-outer{border:0}.OpalSlider .OpalSlider__input::-moz-range-track{border:0;background:0 0}.OpalSlider .OpalSlider__input::-ms-track{border-width:6px 0;border-color:transparent;background:0 0;color:transparent}.OpalSlider .OpalSlider__input::-ms-fill-lower{background:0 0}.OpalSlider .OpalSlider__input::-webkit-slider-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-appearance:none}.OpalSlider .OpalSlider__input::-moz-range-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__input::-ms-thumb{position:relative;width:20px;height:20px;border:0;border-radius:50%;background:#546778;cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalSlider .OpalSlider__first-input:hover::-webkit-slider-thumb{background:#597791}.OpalSlider .OpalSlider__first-input:hover::-moz-range-thumb{background:#597791}.OpalSlider .OpalSlider__first-input:hover::-ms-thumb{background:#597791}.OpalSlider .OpalSlider__second-input:hover::-webkit-slider-thumb{background:#33a0ff}.OpalSlider .OpalSlider__second-input:hover::-moz-range-thumb{background:#33a0ff}.OpalSlider .OpalSlider__second-input:hover::-ms-thumb{background:#33a0ff}.OpalSlider .OpalSlider__input:hover::-webkit-slider-thumb{background:#597791}.OpalSlider .OpalSlider__input:hover::-moz-range-thumb{background:#597791}.OpalSlider .OpalSlider__input:hover::-ms-thumb{background:#597791}.OpalSlider .OpalSlider__first-input:focus,.OpalSlider .OpalSlider__second-input:focus,.OpalSlider .OpalSlider__input:focus{outline:0}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__first-input:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__second-input:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__input:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__first-input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__second-input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__input:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__first-input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__second-input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #1b91f8 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__input:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #546778 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__first-input:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__second-input:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__input:hover:focus::-webkit-slider-thumb{-webkit-box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8);box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__first-input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__second-input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__input:hover:focus::-moz-range-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__first-input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__second-input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #33a0ff ,inset 0 0 0 3px rgba(255,255,255,.8)}body:not(._no-focus-highlight) .OpalSlider .OpalSlider__input:hover:focus::-ms-thumb{box-shadow:inset 0 0 0 2px #597791 ,inset 0 0 0 3px rgba(255,255,255,.8)}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\n@IfThen (if=paramRange) {\ndiv/first-input-wrapper3 {\ndiv/first-input-wrapper2 (style=width: {_firstInputWidth}%) {\ndiv/first-input-wrapper {\ninput/first-input (\ntype=range,\nmin={paramMin},\nmax={paramMax},\nstep={paramStep},\nvalue={paramRange.0}\n)\n}\n}\n}\ndiv/second-input-wrapper {\ninput/second-input (\ntype=range,\nmin={paramMin},\nmax={paramMax},\nstep={paramStep},\nvalue={paramRange.1}\n)\n}\n}\n@IfElse (if=paramRange) {\ninput/input (\ntype=range,\nmin={paramMin},\nmax={paramMax},\nstep={paramStep},\nvalue={paramValue}\n)\n}\n}");

/***/ }),
/* 122 */
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
__webpack_require__(123);
var template_nelm_1 = __webpack_require__(124);
var forEach = Array.prototype.forEach;
var find = Array.prototype.find;
var OpalSwitchMenu = /** @class */ (function (_super) {
    __extends(OpalSwitchMenu, _super);
    function OpalSwitchMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OpalSwitchMenu.prototype, "checkedButton", {
        get: function () {
            if (this._checkedButton !== undefined) {
                return this._checkedButton;
            }
            return (this._checkedButton =
                find.call(this.buttonElements, function (btnEl) { return btnEl.$component.checked; }) || null);
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
        this.buttonElements = this.element.getElementsByClassName('OpalButton');
    };
    OpalSwitchMenu.prototype.elementAttached = function () {
        this.listenTo(this, {
            '<OpalButton>check': this._onButtonCheck,
            '<OpalButton>uncheck': this._onButtonUncheck
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
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalSwitchMenu);
    return OpalSwitchMenu;
}(rionite_1.BaseComponent));
exports.OpalSwitchMenu = OpalSwitchMenu;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSwitchMenu{position:relative;display:inline-block;vertical-align:middle;white-space:nowrap;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot/content-slot\n}");

/***/ }),
/* 125 */
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
__webpack_require__(126);
var OpalTabList_1 = __webpack_require__(10);
exports.OpalTab = OpalTabList_1.OpalTab;
var OpalTabPanel_1 = __webpack_require__(132);
exports.OpalTabPanel = OpalTabPanel_1.OpalTabPanel;
var template_nelm_1 = __webpack_require__(135);
var OpalTabList_2 = __webpack_require__(10);
exports.OpalTabList = OpalTabList_2.OpalTabList;
var indexOf = Array.prototype.indexOf;
var forEach = Array.prototype.forEach;
var find = Array.prototype.find;
var OpalTabs = /** @class */ (function (_super) {
    __extends(OpalTabs, _super);
    function OpalTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectedTab = null;
        return _this;
    }
    OpalTabs.prototype.ready = function () {
        var _this = this;
        var tabs = (this.tabs = this.element.getElementsByClassName('OpalTab'));
        var tabPanels = (this.tabPanels = this.element.getElementsByClassName('OpalTabPanel'));
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
        tabPanels[selectedTabIndex].$component.paramShown = true;
    };
    OpalTabs.prototype.elementAttached = function () {
        this.listenTo(this.element.getElementsByClassName('OpalTabList')[0].$component, {
            '<OpalTab>select': this._onTabListSelect,
            '<OpalTab>deselect': this._onTabListDeselect
        });
    };
    OpalTabs.prototype._onTabListSelect = function (evt) {
        this._selectTab(evt.target);
    };
    OpalTabs.prototype._onTabListDeselect = function (evt) {
        evt.target.select();
    };
    OpalTabs.prototype.goToTab = function (label) {
        if (this._selectedTab && this._selectedTab.paramLabel === label) {
            return true;
        }
        var tab = find.call(this.tabs, function (tab) { return tab.$component.paramLabel == label; });
        if (tab) {
            this._selectTab(tab.$component);
            return true;
        }
        return false;
    };
    OpalTabs.prototype._selectTab = function (tab) {
        var selectedTab = this._selectedTab;
        if (selectedTab) {
            this.tabPanels[indexOf.call(this.tabs, selectedTab.element)].$component.paramShown = false;
            selectedTab.deselect();
        }
        this.tabPanels[indexOf.call(this.tabs, tab.element)].$component.paramShown = true;
        tab.select();
        this._selectedTab = tab;
    };
    OpalTabs = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalTabs);
    return OpalTabs;
}(rionite_1.BaseComponent));
exports.OpalTabs = OpalTabs;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTabs{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTabList{display:block;padding:0 30px;border-bottom:1px solid #dbdbdb;white-space:nowrap;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 128 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(129);
var template_nelm_1 = __webpack_require__(130);
var OpalTab = /** @class */ (function (_super) {
    __extends(OpalTab, _super);
    function OpalTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramSelected = false;
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        return _this;
    }
    Object.defineProperty(OpalTab.prototype, "_tabIndex", {
        get: function () {
            return this.paramDisabled ? -1 : this.paramTabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalTab.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramFocused', this._onParamFocusedChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur,
            click: this._onControlClick
        });
    };
    OpalTab.prototype.ready = function () {
        if (this.paramFocused) {
            this.focus();
        }
    };
    OpalTab.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalTab.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.paramFocused = true;
            }
        });
    };
    OpalTab.prototype._onControlBlur = function () {
        this.paramFocused = false;
    };
    OpalTab.prototype._onControlClick = function (evt) {
        evt.preventDefault();
        if (!this.paramDisabled) {
            this.click();
        }
    };
    OpalTab.prototype.click = function () {
        this.emit(this.toggle() ? 'select' : 'deselect');
        return this;
    };
    Object.defineProperty(OpalTab.prototype, "selected", {
        get: function () {
            return this.paramSelected;
        },
        set: function (selected) {
            this.paramSelected = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalTab.prototype.select = function () {
        if (!this.paramSelected) {
            this.paramSelected = true;
            return true;
        }
        return false;
    };
    OpalTab.prototype.deselect = function () {
        if (this.paramSelected) {
            this.paramSelected = false;
            return true;
        }
        return false;
    };
    OpalTab.prototype.toggle = function (value) {
        return (this.paramSelected = value === undefined ? !this.paramSelected : value);
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
        this.paramDisabled = false;
        return this;
    };
    OpalTab.prototype.disable = function () {
        this.paramDisabled = true;
        return this;
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTab.prototype, "paramLabel", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTab.prototype, "paramSelected", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTab.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTab.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTab.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalTab.prototype, "_tabIndex", null);
    OpalTab = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalTab);
    return OpalTab;
}(rionite_1.BaseComponent));
exports.OpalTab = OpalTab;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTab{display:inline-block}.OpalTab .OpalTab__control{position:relative;display:block;padding:5px 22px;border:0;border-radius:0;border-top-left-radius:3px;border-top-right-radius:3px;background:#fff;color:#000;text-align:center;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalTab .OpalTab__control:hover{background:#e6e6e6}.OpalTab .OpalTab__control:focus{outline:0}body:not(._no-focus-highlight) .OpalTab .OpalTab__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px #1b91f8;box-shadow:inset 0 0 0 1px #1b91f8;content:'';pointer-events:none}.OpalTab .OpalTab__control:active{background:#ccc}.OpalTab .OpalTab__content-slot{position:relative;display:block}.OpalTab[selected] .OpalTab__control{-webkit-box-shadow:0 3px #1b91f8;box-shadow:0 3px #1b91f8}.OpalTab[disabled]{opacity:.5;pointer-events:none}.OpalTab[disabled] .OpalTab__control{cursor:default}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nbutton/control (tabindex={_tabIndex}) {\nRtSlot/content-slot\n}\n}");

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot/content-slot\n}");

/***/ }),
/* 132 */
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
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(133);
var template_nelm_1 = __webpack_require__(134);
var OpalTabPanel = /** @class */ (function (_super) {
    __extends(OpalTabPanel, _super);
    function OpalTabPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramShown = false;
        _this.isContentRendered = false;
        return _this;
    }
    OpalTabPanel.prototype.initialize = function () {
        this.listenTo(this, 'change:paramShown', this._onParamShownChange);
    };
    OpalTabPanel.prototype._onParamShownChange = function (evt) {
        if (evt.data.value) {
            this.isContentRendered = true;
        }
    };
    OpalTabPanel.prototype.renderContent = function () {
        this.isContentRendered = true;
        cellx_1.Cell.forceRelease();
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTabPanel.prototype, "paramShown", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalTabPanel.prototype, "isContentRendered", void 0);
    OpalTabPanel = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalTabPanel);
    return OpalTabPanel;
}(rionite_1.BaseComponent));
exports.OpalTabPanel = OpalTabPanel;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTabPanel{position:relative;display:none;padding:30px}.OpalTabPanel[shown]{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\n@IfThen (if=isContentRendered) {\nRtSlot/content-slot\n}\n}");

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot/tab-list-slot (for-tag=opal-tab-list) {\nOpalTabList/tab-list {\nRtSlot/tabs, tabs (for-tag=opal-tab)\n}\n}\nRtSlot/tab-panels, tab-panels (for-tag=opal-tab-panel)\n}");

/***/ }),
/* 136 */
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
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(137);
var template_nelm_1 = __webpack_require__(138);
var openedDropdowns = [];
var OpalDropdown = /** @class */ (function (_super) {
    __extends(OpalDropdown, _super);
    function OpalDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramAutoHeight = true;
        _this.paramAutoClosing = false;
        _this.paramOpened = false;
        _this.isContentRendered = false;
        return _this;
    }
    OpalDropdown.prototype.ready = function () {
        if (this.paramOpened) {
            this._open();
        }
    };
    OpalDropdown.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramOpened', this._onParamOpenedChange);
    };
    OpalDropdown.prototype._onParamOpenedChange = function (evt) {
        if (evt.data.value) {
            this._open();
        }
        else {
            this._close();
        }
    };
    OpalDropdown.prototype.renderContent = function () {
        this.isContentRendered = true;
        cellx_1.Cell.forceRelease();
    };
    OpalDropdown.prototype.open = function () {
        if (this.paramOpened) {
            return false;
        }
        this.paramOpened = true;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalDropdown.prototype.close = function () {
        if (!this.paramOpened) {
            return false;
        }
        this.paramOpened = false;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalDropdown.prototype.toggle = function (value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
    };
    OpalDropdown.prototype._open = function () {
        openedDropdowns.push(this);
        if (this.isContentRendered) {
            this._open$();
        }
        else {
            this.isContentRendered = true;
            cellx_1.Cell.forceRelease();
            this._open$();
        }
    };
    OpalDropdown.prototype._open$ = function () {
        var _this = this;
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
                elStyle.left =
                    Math.max(-containerClientRect.left, docElClientWidth - elClientRect.right) +
                        'px';
            }
        }
        var margin = elClientRect.top - containerClientRect.bottom;
        var excess = elClientRect.bottom + margin - document.documentElement.clientHeight;
        if (excess > 0) {
            var diff = containerClientRect.top -
                (document.documentElement.clientHeight - containerClientRect.bottom);
            if (this.paramAutoHeight) {
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
        if (this.paramAutoClosing) {
            setTimeout(function () {
                if (_this.paramOpened) {
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
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalDropdown.prototype, "paramAutoHeight", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalDropdown.prototype, "paramAutoClosing", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalDropdown.prototype, "paramOpened", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalDropdown.prototype, "isContentRendered", void 0);
    OpalDropdown = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalDropdown);
    return OpalDropdown;
}(rionite_1.BaseComponent));
exports.OpalDropdown = OpalDropdown;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalDropdown{position:absolute;top:100%;left:0;z-index:600;display:none;overflow-x:hidden;overflow-y:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:2px 0;padding:6px 0;min-width:100%;border:1px solid #ccc;border-radius:3px;background:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:1.5;cursor:default}.OpalDropdown .OpalDropdown__content-slot{position:relative;display:block}.OpalDropdown[opened]{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\n@IfThen (if=isContentRendered) {\nRtSlot/content-slot\n}\n}");

/***/ }),
/* 139 */
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
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(140);
var template_nelm_1 = __webpack_require__(141);
var OpalPopover = /** @class */ (function (_super) {
    __extends(OpalPopover, _super);
    function OpalPopover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramPosition = 'right';
        _this.paramAutoDirection = true;
        _this.paramAutoClosing = false;
        _this.paramOpened = false;
        _this.isContentRendered = false;
        return _this;
    }
    OpalPopover.prototype.ready = function () {
        if (this.paramOpened) {
            this._open();
        }
    };
    OpalPopover.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramOpened', this._onParamOpenedChange);
    };
    OpalPopover.prototype._onParamOpenedChange = function (evt) {
        if (evt.data.value) {
            this._open();
        }
        else {
            this._close();
        }
    };
    OpalPopover.prototype.renderContent = function () {
        this.isContentRendered = true;
        cellx_1.Cell.forceRelease();
    };
    OpalPopover.prototype.open = function () {
        if (this.paramOpened) {
            return false;
        }
        this.paramOpened = true;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalPopover.prototype.close = function () {
        if (!this.paramOpened) {
            return false;
        }
        this.paramOpened = false;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalPopover.prototype.toggle = function (value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
    };
    OpalPopover.prototype._open = function () {
        if (this.isContentRendered) {
            this._open$();
        }
        else {
            this.isContentRendered = true;
            cellx_1.Cell.forceRelease();
            this._open$();
        }
    };
    OpalPopover.prototype._open$ = function () {
        var _this = this;
        var el = this.element;
        if (this.paramAutoDirection) {
            var docEl = document.documentElement;
            var containerClientRect = el.offsetParent.getBoundingClientRect();
            var elClientRect = el.getBoundingClientRect();
            var position_1 = (this._positionOnOpen = this.paramPosition).split('-');
            switch (position_1[0]) {
                case 'left': {
                    if (elClientRect.left + document.body.scrollLeft < 0 ||
                        (elClientRect.left < 0 &&
                            containerClientRect.left <
                                docEl.clientWidth - containerClientRect.right)) {
                        this.paramPosition =
                            'right' + (position_1.length == 2 ? '-' + position_1[1] : '');
                    }
                    break;
                }
                case 'top': {
                    if (elClientRect.top + document.body.scrollTop < 0 ||
                        (elClientRect.top < 0 &&
                            containerClientRect.top <
                                docEl.clientHeight - containerClientRect.bottom)) {
                        this.paramPosition =
                            'bottom' + (position_1.length == 2 ? '-' + position_1[1] : '');
                    }
                    break;
                }
                case 'right': {
                    if (elClientRect.right > docEl.clientWidth &&
                        containerClientRect.left > docEl.clientWidth - containerClientRect.right &&
                        containerClientRect.left + document.body.scrollLeft >=
                            elClientRect.right - containerClientRect.right) {
                        this.paramPosition =
                            'left' + (position_1.length == 2 ? '-' + position_1[1] : '');
                    }
                    break;
                }
                case 'bottom': {
                    if (elClientRect.bottom > docEl.clientHeight &&
                        containerClientRect.top > docEl.clientHeight - containerClientRect.bottom &&
                        containerClientRect.top + document.body.scrollTop >=
                            elClientRect.bottom - containerClientRect.bottom) {
                        this.paramPosition =
                            'top' + (position_1.length == 2 ? '-' + position_1[1] : '');
                    }
                    break;
                }
            }
        }
        var position = this.paramPosition.split('-');
        var arrowStyle = this.$('arrow').style;
        arrowStyle.top = arrowStyle.right = arrowStyle.bottom = arrowStyle.left = '';
        if (position.length == 2) {
            arrowStyle[position[1]] =
                el.offsetParent[position[1] == 'left' || position[1] == 'right' ? 'clientWidth' : 'clientHeight'] /
                    2 +
                    'px';
        }
        if (this.paramAutoClosing) {
            setTimeout(function () {
                if (_this.paramOpened) {
                    _this._documentClickListening = _this.listenTo(document, 'click', _this._onDocumentClick);
                }
            }, 1);
        }
    };
    OpalPopover.prototype._close = function () {
        if (this.paramAutoDirection) {
            this.paramPosition = this._positionOnOpen;
        }
        if (this._documentClickListening) {
            this._documentClickListening.stop();
            this._documentClickListening = null;
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
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalPopover.prototype, "paramPosition", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalPopover.prototype, "paramAutoDirection", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalPopover.prototype, "paramAutoClosing", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalPopover.prototype, "paramOpened", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalPopover.prototype, "isContentRendered", void 0);
    OpalPopover = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalPopover);
    return OpalPopover;
}(rionite_1.BaseComponent));
exports.OpalPopover = OpalPopover;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalPopover{position:absolute;z-index:600;display:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:15px;border:1px solid #ccc;border-radius:6px;background:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:1.5;cursor:default}.OpalPopover .OpalPopover__arrow{position:absolute;width:0;height:0}.OpalPopover .OpalPopover__arrow::before,.OpalPopover .OpalPopover__arrow::after{position:absolute;width:0;height:0;border:10px solid transparent;content:''}.OpalPopover .OpalPopover__arrow::after{border:8px solid transparent}.OpalPopover .OpalPopover__content-slot{position:relative;display:block}.OpalPopover[position=top],.OpalPopover[position=top-left],.OpalPopover[position=top-right]{bottom:100%;margin-bottom:15px}.OpalPopover[position=top] .OpalPopover__arrow,.OpalPopover[position=top-left] .OpalPopover__arrow,.OpalPopover[position=top-right] .OpalPopover__arrow{top:100%}.OpalPopover[position=top] .OpalPopover__arrow::before,.OpalPopover[position=top] .OpalPopover__arrow::after,.OpalPopover[position=top-left] .OpalPopover__arrow::before,.OpalPopover[position=top-left] .OpalPopover__arrow::after,.OpalPopover[position=top-right] .OpalPopover__arrow::before,.OpalPopover[position=top-right] .OpalPopover__arrow::after{border-top-color:#ccc;border-bottom-width:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.OpalPopover[position=top] .OpalPopover__arrow::after,.OpalPopover[position=top-left] .OpalPopover__arrow::after,.OpalPopover[position=top-right] .OpalPopover__arrow::after{border-top-color:#fff}.OpalPopover[position=top]{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.OpalPopover[position=top] .OpalPopover__arrow{left:50%}.OpalPopover[position=top-left]{left:0}.OpalPopover[position=top-left] .OpalPopover__arrow{-webkit-transform:translateX(-1px);-ms-transform:translateX(-1px);transform:translateX(-1px)}.OpalPopover[position=top-right]{right:0}.OpalPopover[position=top-right] .OpalPopover__arrow{-webkit-transform:translateX(1px);-ms-transform:translateX(1px);transform:translateX(1px)}.OpalPopover[position=right],.OpalPopover[position=right-top],.OpalPopover[position=right-bottom]{left:100%;margin-left:15px}.OpalPopover[position=right] .OpalPopover__arrow,.OpalPopover[position=right-top] .OpalPopover__arrow,.OpalPopover[position=right-bottom] .OpalPopover__arrow{right:100%}.OpalPopover[position=right] .OpalPopover__arrow::before,.OpalPopover[position=right] .OpalPopover__arrow::after,.OpalPopover[position=right-top] .OpalPopover__arrow::before,.OpalPopover[position=right-top] .OpalPopover__arrow::after,.OpalPopover[position=right-bottom] .OpalPopover__arrow::before,.OpalPopover[position=right-bottom] .OpalPopover__arrow::after{right:0;border-right-color:#ccc;border-left-width:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.OpalPopover[position=right] .OpalPopover__arrow::after,.OpalPopover[position=right-top] .OpalPopover__arrow::after,.OpalPopover[position=right-bottom] .OpalPopover__arrow::after{border-right-color:#fff}.OpalPopover[position=right]{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.OpalPopover[position=right] .OpalPopover__arrow{top:50%}.OpalPopover[position=right-top]{top:0}.OpalPopover[position=right-top] .OpalPopover__arrow{-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px)}.OpalPopover[position=right-bottom]{bottom:0}.OpalPopover[position=right-bottom] .OpalPopover__arrow{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalPopover[position=bottom],.OpalPopover[position=bottom-left],.OpalPopover[position=bottom-right]{top:100%;margin-top:15px}.OpalPopover[position=bottom] .OpalPopover__arrow,.OpalPopover[position=bottom-left] .OpalPopover__arrow,.OpalPopover[position=bottom-right] .OpalPopover__arrow{bottom:100%}.OpalPopover[position=bottom] .OpalPopover__arrow::before,.OpalPopover[position=bottom] .OpalPopover__arrow::after,.OpalPopover[position=bottom-left] .OpalPopover__arrow::before,.OpalPopover[position=bottom-left] .OpalPopover__arrow::after,.OpalPopover[position=bottom-right] .OpalPopover__arrow::before,.OpalPopover[position=bottom-right] .OpalPopover__arrow::after{bottom:0;border-top-width:0;border-bottom-color:#ccc;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.OpalPopover[position=bottom] .OpalPopover__arrow::after,.OpalPopover[position=bottom-left] .OpalPopover__arrow::after,.OpalPopover[position=bottom-right] .OpalPopover__arrow::after{border-bottom-color:#fff}.OpalPopover[position=bottom]{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.OpalPopover[position=bottom] .OpalPopover__arrow{left:50%}.OpalPopover[position=bottom-left]{left:0}.OpalPopover[position=bottom-left] .OpalPopover__arrow{-webkit-transform:translateX(-1px);-ms-transform:translateX(-1px);transform:translateX(-1px)}.OpalPopover[position=bottom-right]{right:0}.OpalPopover[position=bottom-right] .OpalPopover__arrow{-webkit-transform:translateX(1px);-ms-transform:translateX(1px);transform:translateX(1px)}.OpalPopover[position=left],.OpalPopover[position=left-top],.OpalPopover[position=left-bottom]{right:100%;margin-right:15px}.OpalPopover[position=left] .OpalPopover__arrow,.OpalPopover[position=left-top] .OpalPopover__arrow,.OpalPopover[position=left-bottom] .OpalPopover__arrow{left:100%}.OpalPopover[position=left] .OpalPopover__arrow::before,.OpalPopover[position=left] .OpalPopover__arrow::after,.OpalPopover[position=left-top] .OpalPopover__arrow::before,.OpalPopover[position=left-top] .OpalPopover__arrow::after,.OpalPopover[position=left-bottom] .OpalPopover__arrow::before,.OpalPopover[position=left-bottom] .OpalPopover__arrow::after{left:0;border-right-width:0;border-left-color:#ccc;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.OpalPopover[position=left] .OpalPopover__arrow::after,.OpalPopover[position=left-top] .OpalPopover__arrow::after,.OpalPopover[position=left-bottom] .OpalPopover__arrow::after{border-left-color:#fff}.OpalPopover[position=left]{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.OpalPopover[position=left] .OpalPopover__arrow{top:50%}.OpalPopover[position=left-top]{top:0}.OpalPopover[position=left-top] .OpalPopover__arrow{-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px)}.OpalPopover[position=left-bottom]{bottom:0}.OpalPopover[position=left-bottom] .OpalPopover__arrow{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalPopover[opened]{display:block;-webkit-animation:OpalPopover__fade-in-animation .1s linear;animation:OpalPopover__fade-in-animation .1s linear}@-webkit-keyframes OpalPopover__fade-in-animation{0%{opacity:0}to{opacity:1}}@keyframes OpalPopover__fade-in-animation{0%{opacity:0}to{opacity:1}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nspan/arrow\n@IfThen (if=isContentRendered) {\nRtSlot/content-slot\n}\n}");

/***/ }),
/* 142 */
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
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var isFocusable_1 = __webpack_require__(5);
__webpack_require__(143);
var template_nelm_1 = __webpack_require__(144);
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
var OpalModal = /** @class */ (function (_super) {
    __extends(OpalModal, _super);
    function OpalModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramOpened = false;
        _this.isContentRendered = false;
        return _this;
    }
    OpalModal.prototype.ready = function () {
        if (this.paramOpened) {
            this._open();
        }
    };
    OpalModal.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramOpened', this._onParamOpenedChange);
        this.listenTo(this.element, 'click', this._onElementClick);
    };
    OpalModal.prototype.elementDetached = function () {
        this.close();
    };
    OpalModal.prototype._onParamOpenedChange = function (evt) {
        if (evt.data.value) {
            this._open();
        }
        else {
            this._close();
        }
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
    OpalModal.prototype.renderContent = function () {
        this.isContentRendered = true;
        cellx_1.Cell.forceRelease();
    };
    OpalModal.prototype.open = function () {
        if (this.paramOpened) {
            return false;
        }
        this.paramOpened = true;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalModal.prototype.close = function () {
        if (!this.paramOpened) {
            return false;
        }
        this.paramOpened = false;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalModal.prototype.toggle = function (value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
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
        openedModals.unshift(this);
        this.isContentRendered = true;
        cellx_1.Cell.forceRelease();
        this.focus();
    };
    OpalModal.prototype._close = function () {
        var index = openedModals.indexOf(this);
        if (index) {
            openedModals[index - 1].close();
        }
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
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalModal.prototype, "paramOpened", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalModal.prototype, "isContentRendered", void 0);
    OpalModal = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default,
            domEvents: {
                'btn-close': {
                    click: function () {
                        this.close();
                        this.emit('close');
                    }
                }
            }
        })
    ], OpalModal);
    return OpalModal;
}(rionite_1.BaseComponent));
exports.OpalModal = OpalModal;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalModal{position:fixed;top:0;left:0;z-index:1000;display:none;overflow:auto;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px;width:100%;height:100%;background:rgba(0,0,0,.6);text-align:center;white-space:nowrap;cursor:pointer}.OpalModal::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.OpalModal .OpalModal__window{position:relative;display:inline-block;padding:30px;border-radius:3px;background:#fff;-webkit-box-shadow:0 0 20px rgba(0,0,0,.3);box-shadow:0 0 20px rgba(0,0,0,.3);vertical-align:middle;text-align:left;white-space:normal;cursor:default}.OpalModal .OpalModal__window:hover .OpalModal__btn-close::before,.OpalModal .OpalModal__window:hover .OpalModal__btn-close::after{background:#ccc}.OpalModal .OpalModal__window:hover .OpalModal__btn-close:hover::before,.OpalModal .OpalModal__window:hover .OpalModal__btn-close:hover::after{background:#fff}.OpalModal .OpalModal__window:hover .OpalModal__btn-close:active::before,.OpalModal .OpalModal__window:hover .OpalModal__btn-close:active::after{background:#999}.OpalModal .OpalModal__btn-close-wrapper{position:absolute;top:-10px;left:100%;padding:0 10px;pointer-events:none}.OpalModal .OpalModal__btn-close{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;padding:10px;width:25px;height:25px;border:0;background:0 0;cursor:pointer;pointer-events:auto}.OpalModal .OpalModal__btn-close::before,.OpalModal .OpalModal__btn-close::after{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:25px;height:3px;border-radius:2px;background:#fff;content:'';-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.OpalModal .OpalModal__btn-close::after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.OpalModal .OpalModal__btn-close:hover::before,.OpalModal .OpalModal__btn-close:hover::after{background:#fff}.OpalModal .OpalModal__btn-close:active::before,.OpalModal .OpalModal__btn-close:active::after{background:#999}.OpalModal .OpalModal__content-slot{position:relative;display:block}.OpalModal[opened]{display:block}.OpalModal._overlapped{left:100%;overflow:visible}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\ndiv/window {\ndiv/btn-close-wrapper {\nbutton/btn-close\n}\n@IfThen (if=isContentRendered) {\nRtSlot/content-slot\n}\n}\n}");

/***/ }),
/* 145 */
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
var map_set_polyfill_1 = __webpack_require__(146);
var cellx_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
__webpack_require__(147);
var template_nelm_1 = __webpack_require__(148);
var container;
var shownNotifications = new map_set_polyfill_1.Set();
function initContainer(notification) {
    if (!container) {
        container = document.createElement('div');
        container.className =
            notification.constructor._elementBlockNames.join('__container ') + '__container';
        document.body.appendChild(container);
    }
    return container;
}
var OpalNotification = /** @class */ (function (_super) {
    __extends(OpalNotification, _super);
    function OpalNotification() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramViewType = 'default';
        _this.paramIconSize = 'm';
        _this.paramButtonHide = true;
        _this.paramTimeout = 0;
        _this.paramShown = false;
        return _this;
    }
    OpalNotification.prototype.$ = function (name, container) {
        if (container === void 0) { container = this.bar; }
        return _super.prototype.$.call(this, name, container);
    };
    OpalNotification.prototype.ready = function () {
        initContainer(this);
        var bar = (this.bar = this.$('bar', this));
        this.element.removeChild(bar);
        if (this.$('icon')) {
            bar.setAttribute('has-icon', '');
        }
        if (this.paramShown) {
            this._show();
        }
    };
    OpalNotification.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramShown', this._onParamShownChange);
        this.listenTo('btn-hide', 'click', this._onBtnHideClick);
    };
    OpalNotification.prototype.elementDetached = function () {
        this.hide();
    };
    OpalNotification.prototype._onParamShownChange = function (evt) {
        if (evt.data.value) {
            this._show();
        }
        else {
            this._hide();
        }
    };
    OpalNotification.prototype._onBtnHideClick = function () {
        this.hide();
        this.emit('hide');
        this.emit('close');
    };
    OpalNotification.prototype.show = function () {
        if (this.paramShown) {
            return false;
        }
        this.paramShown = true;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalNotification.prototype.hide = function () {
        if (!this.paramShown) {
            return false;
        }
        this.paramShown = false;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalNotification.prototype.open = function () {
        return this.show();
    };
    OpalNotification.prototype.close = function () {
        return this.hide();
    };
    OpalNotification.prototype.toggle = function (value) {
        if (value !== undefined) {
            return value ? this.show() : !this.hide();
        }
        return this.show() || !this.hide();
    };
    OpalNotification.prototype._show = function () {
        var _this = this;
        shownNotifications.add(this);
        container.appendChild(this.bar);
        setTimeout(function () {
            _this.bar.setAttribute('shown', '');
            if (_this.paramTimeout) {
                setTimeout(function () {
                    _this.hide();
                }, _this.paramTimeout);
            }
        }, 100);
    };
    OpalNotification.prototype._hide = function () {
        shownNotifications.delete(this);
        container.removeChild(this.bar);
        this.bar.removeAttribute('shown');
    };
    OpalNotification.prototype.focus = function () {
        var focusEl = this.$('focus');
        if (focusEl) {
            document.body.classList.remove('_no-focus-highlight');
            focusEl.focus();
        }
        return this;
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalNotification.prototype, "paramViewType", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalNotification.prototype, "paramIconSize", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalNotification.prototype, "paramButtonHide", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalNotification.prototype, "paramTimeout", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalNotification.prototype, "paramShown", void 0);
    OpalNotification = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalNotification);
    return OpalNotification;
}(rionite_1.BaseComponent));
exports.OpalNotification = OpalNotification;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_146__;

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalNotification__container{position:fixed;top:10px;right:20px;z-index:300;width:400px}.OpalNotification__container .OpalNotification__bar{position:relative;right:-200px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:10px 0;padding:10px 40px 10px 20px;width:400px;border-radius:3px;background:#546778;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.3);box-shadow:0 2px 4px rgba(0,0,0,.3);color:#fff;opacity:0;-webkit-transition:right .2s linear,opacity .2s linear;-o-transition:right .2s linear,opacity .2s linear;transition:right .2s linear,opacity .2s linear}.OpalNotification__container .OpalNotification__bar[view-type=primary]{background:#1b91f8}.OpalNotification__container .OpalNotification__bar[view-type=success]{background:#18b461}.OpalNotification__container .OpalNotification__bar[view-type=danger]{background:#f63159}.OpalNotification__container .OpalNotification__bar[has-icon]{padding-left:48px}.OpalNotification__container .OpalNotification__bar[shown]{right:0;opacity:1}.OpalNotification__container .OpalNotification__icon{position:absolute;top:0;bottom:0;left:16px;margin:auto}.OpalNotification__container svg.OpalNotification__icon{display:block;width:18px;height:18px;stroke-width:3px;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;fill:none}.OpalNotification__container .OpalNotification__btn-hide{position:absolute;top:0;right:10px;bottom:0;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:#fff;opacity:.7;cursor:pointer;-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;transition:opacity .1s linear}.OpalNotification__container .OpalNotification__btn-hide:hover{opacity:1}.OpalNotification__container .OpalNotification__btn-hide:focus{outline:0}body:not(._no-focus-highlight) .OpalNotification__container .OpalNotification__btn-hide:focus{outline:1px solid #1b91f8}.OpalNotification__container .OpalNotification__btn-hide:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalNotification__container .OpalNotification__btn-hide[hide]{display:none}.OpalNotification__container .OpalNotification__btn-hide-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\ndiv/bar (view-type={paramViewType}, icon-size={paramIconSize}, button-hide={paramButtonHide}) {\nRtSlot/icon-slot (for=icon)\nRtSlot/content-slot\nbutton/btn-hide (hide={paramButtonHide |not }) {\nOpalIcon/btn-hide-icon (name=cross)\n}\n}\n}");

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalInputValidator{position:relative;display:inline-block;vertical-align:middle}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 150 */
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(151);
var template_nelm_1 = __webpack_require__(152);
var OpalInputValidatorRule = /** @class */ (function (_super) {
    __extends(OpalInputValidatorRule, _super);
    function OpalInputValidatorRule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramRequired = false;
        _this.paramPopoverPosition = 'right';
        return _this;
    }
    OpalInputValidatorRule.prototype.showMessage = function () {
        this.$('popover').open();
    };
    OpalInputValidatorRule.prototype.hideMessage = function () {
        this.$('popover').close();
    };
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalInputValidatorRule.prototype, "paramRequired", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Function)
    ], OpalInputValidatorRule.prototype, "paramTest", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalInputValidatorRule.prototype, "paramPopoverPosition", void 0);
    OpalInputValidatorRule = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalInputValidatorRule);
    return OpalInputValidatorRule;
}(rionite_1.BaseComponent));
exports.OpalInputValidatorRule = OpalInputValidatorRule;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalInputValidatorRule{display:block}.OpalInputValidatorRule .OpalInputValidatorRule__content-slot{display:block;width:240px;text-align:center}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nOpalPopover/popover (position={paramPopoverPosition}) {\nRtSlot/content-slot\n}\n}");

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot/content-slot\n}");

/***/ }),
/* 154 */
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
var OpalInputValidator_1 = __webpack_require__(6);
__webpack_require__(155);
var OpalTextInputValidatorRule_1 = __webpack_require__(156);
exports.OpalTextInputValidatorRule = OpalTextInputValidatorRule_1.OpalTextInputValidatorRule;
var OpalTextInputValidator = /** @class */ (function (_super) {
    __extends(OpalTextInputValidator, _super);
    function OpalTextInputValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTextInputValidator.prototype.ready = function () {
        _super.prototype.ready.call(this);
        this.target = this.textInput = this.$('text-input');
    };
    OpalTextInputValidator.prototype.elementAttached = function () {
        _super.prototype.elementAttached.call(this);
        this.listenTo(this.textInput, 'input', this._onTextInputInput);
    };
    OpalTextInputValidator.prototype._onTextInputInput = function () {
        if (this.failedRule) {
            this._validate([this.failedRule]);
        }
    };
    OpalTextInputValidator.prototype._checkValue = function (rule) {
        var value = this.textInput.value;
        return !(value
            ? (rule.paramMinLength && value.length < rule.paramMinLength) ||
                (rule.paramRegex && !rule.paramRegex.test(value)) ||
                (rule.paramTest && !rule.paramTest.call(this.ownerComponent, value))
            : rule.paramRequired);
    };
    OpalTextInputValidator = __decorate([
        rionite_1.Component()
    ], OpalTextInputValidator);
    return OpalTextInputValidator;
}(OpalInputValidator_1.OpalInputValidator));
exports.OpalTextInputValidator = OpalTextInputValidator;


/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTextInputValidator.OpalInputValidator .OpalInputValidator__text-input{display:block}.OpalTextInputValidator.OpalInputValidator[valid=no] .OpalInputValidator__text-input .OpalTextInput__text-field{border-color:#f63159}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 156 */
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
var rionite_1 = __webpack_require__(0);
var OpalInputValidator_1 = __webpack_require__(6);
var OpalTextInputValidatorRule = /** @class */ (function (_super) {
    __extends(OpalTextInputValidatorRule, _super);
    function OpalTextInputValidatorRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Number)
    ], OpalTextInputValidatorRule.prototype, "paramMinLength", void 0);
    __decorate([
        rionite_1.Param({ type: eval, readonly: true }),
        __metadata("design:type", RegExp)
    ], OpalTextInputValidatorRule.prototype, "paramRegex", void 0);
    OpalTextInputValidatorRule = __decorate([
        rionite_1.Component()
    ], OpalTextInputValidatorRule);
    return OpalTextInputValidatorRule;
}(OpalInputValidator_1.OpalInputValidatorRule));
exports.OpalTextInputValidatorRule = OpalTextInputValidatorRule;


/***/ }),
/* 157 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var formatDate_1 = __webpack_require__(158);
__webpack_require__(159);
var parseDate_1 = __webpack_require__(11);
var template_nelm_1 = __webpack_require__(160);
function getTodayDate() {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
var OpalCalendar = /** @class */ (function (_super) {
    __extends(OpalCalendar, _super);
    function OpalCalendar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramDateDelimiter = '/';
        _this.days = function (_, next) {
            var dateDelimiter = this.paramDateDelimiter;
            var fromDate = this.fromDate;
            var toDate = this.toDate;
            var value = this.value;
            var shownYear = this.shownYear;
            var shownMonth = this.shownMonth;
            if (this._currentlyDateSelection) {
                this._currentlyDateSelection = false;
                return next;
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
            if (!this.constructor.i18n.sundayFirst) {
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
                    selected: !!value && year == selectedYear && month == selectedMonth && day == selectedDay,
                    notInCurrentMonth: notInCurrentMonth,
                    disabled: disabled,
                    tabIndex: disabled ? null : 0
                });
            }
            for (var i = firstMonthDayWeekDayIndex; i;) {
                pushDay(shownYear - +!shownMonth, shownMonth ? shownMonth - 1 : 11, lastPrevMonthDay - --i, true);
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
        };
        return _this;
    }
    OpalCalendar_1 = OpalCalendar;
    Object.defineProperty(OpalCalendar.prototype, "fromDate", {
        get: function () {
            var fromDate = this.paramFromDate;
            if (fromDate) {
                return fromDate == 'today' ? getTodayDate() : parseDate_1.parseDate(fromDate);
            }
            var toDate = this.paramToDate;
            var date = toDate && toDate != 'today' ? parseDate_1.parseDate(toDate) : new Date();
            return new Date(date.getFullYear() - 100, date.getMonth(), date.getDate());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "toDate", {
        get: function () {
            var toDate = this.paramToDate;
            if (toDate) {
                return toDate == 'today' ? getTodayDate() : parseDate_1.parseDate(toDate);
            }
            var fromDate = this.paramFromDate;
            var date = fromDate && fromDate != 'today' ? parseDate_1.parseDate(fromDate) : new Date();
            return new Date(date.getFullYear() + 100, date.getMonth(), date.getDate());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "fromYear", {
        get: function () {
            return this.fromDate.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "toYear", {
        get: function () {
            return this.toDate.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "years", {
        get: function () {
            var years = [];
            for (var year = this.fromYear, toYear = this.toYear; year <= toYear; year++) {
                years.push(year);
            }
            return years;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "stringValue", {
        get: function () {
            return this.paramValue;
        },
        set: function (value) {
            this.stringValueCell.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "value", {
        get: function () {
            var value = this.stringValue;
            return value ? parseDate_1.parseDate(value) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "isBtnPrevMonthDisabled", {
        get: function () {
            return this.shownYear == this.fromYear && !this.shownMonth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalCalendar.prototype, "isBtnNextMonthDisabled", {
        get: function () {
            return this.shownYear == this.toYear && this.shownMonth == 11;
        },
        enumerable: true,
        configurable: true
    });
    OpalCalendar.prototype.initialize = function () {
        var i18n = this.constructor.i18n;
        this.weekDays = i18n.sundayFirst
            ? i18n.weekDays
            : i18n.weekDays.slice(1).concat(i18n.weekDays[0]);
        this.weekDaysShort = i18n.sundayFirst
            ? i18n.weekDaysShort
            : i18n.weekDaysShort.slice(1).concat(i18n.weekDaysShort[0]);
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
            shownDate = today < fromDate ? fromDate : today > toDate ? toDate : today;
        }
        this.shownYear = shownDate.getFullYear();
        this.shownMonth = shownDate.getMonth();
    };
    OpalCalendar.prototype.elementAttached = function () {
        this.listenTo('days', {
            focus: this._onDaysFocus,
            blur: this._onDaysBlur
        }, this, true);
    };
    OpalCalendar.prototype._onDaysFocus = function (evt) {
        var _this = this;
        if (evt.target.classList.contains('OpalCalendar__day')) {
            next_tick_1.nextTick(function () {
                if (document.activeElement == evt.target && !_this._documentKeyDownListening) {
                    _this._documentKeyDownListening = _this.listenTo(document, 'keydown', _this._onDocumentKeyDown);
                }
            });
        }
    };
    OpalCalendar.prototype._onDaysBlur = function () {
        var _this = this;
        setTimeout(function () {
            if (!document.activeElement.classList.contains('OpalCalendar__day')) {
                _this._documentKeyDownListening.stop();
                _this._documentKeyDownListening = null;
            }
        }, 1);
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
        this.stringValue = dayEl.dataset.date;
        this.emit('change');
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalCalendar.prototype, "paramFromDate", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalCalendar.prototype, "paramToDate", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalCalendar.prototype, "paramValue", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalCalendar.prototype, "paramDateDelimiter", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [])
    ], OpalCalendar.prototype, "fromDate", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [])
    ], OpalCalendar.prototype, "toDate", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalCalendar.prototype, "fromYear", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalCalendar.prototype, "toYear", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [])
    ], OpalCalendar.prototype, "years", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], OpalCalendar.prototype, "stringValue", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], OpalCalendar.prototype, "value", null);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Number)
    ], OpalCalendar.prototype, "shownYear", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Number)
    ], OpalCalendar.prototype, "shownMonth", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalCalendar.prototype, "isBtnPrevMonthDisabled", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalCalendar.prototype, "isBtnNextMonthDisabled", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Array)
    ], OpalCalendar.prototype, "days", void 0);
    OpalCalendar = OpalCalendar_1 = __decorate([
        rionite_1.Component({
            i18n: {
                previousMonth: 'Предыдущий месяц',
                nextMonth: 'Следующий месяц',
                months: [
                    'Январь',
                    'Февраль',
                    'Март',
                    'Апрель',
                    'Май',
                    'Июнь',
                    'Июль',
                    'Август',
                    'Сентябрь',
                    'Октябрь',
                    'Ноябрь',
                    'Декабрь'
                ],
                weekDays: [
                    'Воскресенье',
                    'Понедельник',
                    'Вторник',
                    'Среда',
                    'Четверг',
                    'Пятница',
                    'Суббота'
                ],
                weekDaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                sundayFirst: false
            },
            template: template_nelm_1.default,
            events: {
                'month-select': {
                    select: function (evt) {
                        this.shownMonth = +evt.target.viewModel.get(0).value;
                    }
                },
                'year-select': {
                    select: function (evt) {
                        this.shownYear = +evt.target.viewModel.get(0).value;
                    }
                }
            },
            domEvents: {
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
                day: {
                    click: function (evt, dayEl) {
                        this._click(dayEl);
                    }
                }
            }
        })
    ], OpalCalendar);
    return OpalCalendar;
    var OpalCalendar_1;
}(rionite_1.BaseComponent));
exports.OpalCalendar = OpalCalendar;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function formatDate(year, month, day, delimiter) {
    if (delimiter === void 0) { delimiter = '/'; }
    return (('0' + day).slice(-2) +
        delimiter +
        ('0' + (month + 1)).slice(-2) +
        delimiter +
        ('000' + year).slice(-4));
}
exports.formatDate = formatDate;


/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalCalendar{display:block;width:300px;border:1px solid #dbdbdb;border-radius:3px;background:#fff;color:#000;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400}.OpalCalendar .OpalCalendar__header{position:relative;padding:8px 44px;text-align:center}.OpalCalendar .OpalCalendar__btn-prev-month,.OpalCalendar .OpalCalendar__btn-next-month{position:absolute;top:0;bottom:0;margin:auto;padding:0;width:30px;height:30px;border:0;border-radius:50%;background:0 0;color:gray;cursor:pointer}.OpalCalendar .OpalCalendar__btn-prev-month:hover,.OpalCalendar .OpalCalendar__btn-next-month:hover{background:#e6e6e6;color:#000}.OpalCalendar .OpalCalendar__btn-prev-month:focus,.OpalCalendar .OpalCalendar__btn-next-month:focus{outline:0}body:not(._no-focus-highlight) .OpalCalendar .OpalCalendar__btn-prev-month:focus::after,body:not(._no-focus-highlight) .OpalCalendar .OpalCalendar__btn-next-month:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px #1b91f8;box-shadow:inset 0 0 0 1px #1b91f8;content:'';pointer-events:none}.OpalCalendar .OpalCalendar__btn-prev-month:active,.OpalCalendar .OpalCalendar__btn-next-month:active{background:#ccc}.OpalCalendar .OpalCalendar__btn-prev-month[disabled],.OpalCalendar .OpalCalendar__btn-next-month[disabled]{background:0 0;color:#000;opacity:.3;pointer-events:none}.OpalCalendar .OpalCalendar__btn-prev-month{left:8px}.OpalCalendar .OpalCalendar__btn-next-month{right:8px}.OpalCalendar .OpalCalendar__btn-prev-month-icon,.OpalCalendar .OpalCalendar__btn-next-month-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:18px;height:18px}.OpalCalendar .OpalCalendar__body{padding:0 8px 8px;text-align:center;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalCalendar .OpalCalendar__week-days,.OpalCalendar .OpalCalendar__days{width:100%;border-spacing:0;border-collapse:separate}.OpalCalendar .OpalCalendar__week-day,.OpalCalendar .OpalCalendar__day{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 7px;width:14.2857%;border:1px solid transparent}.OpalCalendar .OpalCalendar__day{position:relative;border-radius:3px;cursor:pointer}.OpalCalendar .OpalCalendar__day:hover{background:#e6e6e6}.OpalCalendar .OpalCalendar__day:focus{outline:0}body:not(._no-focus-highlight) .OpalCalendar .OpalCalendar__day:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px #1b91f8;box-shadow:inset 0 0 0 1px #1b91f8;content:'';pointer-events:none}.OpalCalendar .OpalCalendar__day:active{background:#ccc}.OpalCalendar .OpalCalendar__day[today]{text-decoration:underline}.OpalCalendar .OpalCalendar__day[not-in-current-month]{opacity:.45}.OpalCalendar .OpalCalendar__day[disabled]{background:0 0;opacity:.15;cursor:default}.OpalCalendar .OpalCalendar__day[selected]{color:#0d87f2;opacity:1}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nheader/header {\nbutton/btn-prev-month (disabled={isBtnPrevMonthDisabled}) {\nOpalIcon/btn-prev-month-icon (name=chevronLeft)\n}\nOpalSelect/month-select (size=s, value=['{shownMonth}']) {\n@Repeat (class=OpalSelect__menu-content, for=month of constructor.i18n.months) {\nOpalSelectOption (value={$index}, text={month})\n}\n}\n' '\nOpalSelect/year-select (size=s, value=['{shownYear}']) {\n@Repeat (class=OpalSelect__menu-content, for=year of years) {\nOpalSelectOption (value={year}, text={year})\n}\n}\nbutton/btn-next-month (disabled={isBtnNextMonthDisabled}) {\nOpalIcon/btn-next-month-icon (name=chevronRight)\n}\n}\ndiv/body {\ndiv/week-days {\ndiv/week-days-row {\n@Repeat (for=weekDay of weekDaysShort) {\nspan/week-day {\n'{weekDay}'\n}\n}\n}\n}\ndiv/days {\n@Repeat (for=weekDays of days) {\ndiv/days-row {\n@Repeat (for=day of weekDays) {\nspan/day (\nweek-day={day.weekDay},\ntoday={day.today},\nselected={day.selected},\nnot-in-current-month={day.notInCurrentMonth},\ndisabled={day.disabled},\ntabindex={day.tabIndex},\ndata-date={day.date}\n) {\n'{day.value}'\n}\n}\n}\n}\n}\n}\n}");

/***/ }),
/* 161 */
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
var gettext_1 = __webpack_require__(4);
var date_exists_1 = __webpack_require__(162);
var rionite_1 = __webpack_require__(0);
var isFocusable_1 = __webpack_require__(5);
var parseDate_1 = __webpack_require__(11);
__webpack_require__(163);
var template_nelm_1 = __webpack_require__(164);
function pad(num) {
    return (num < 10 ? '0' : '') + num;
}
var OpalDateInput = /** @class */ (function (_super) {
    __extends(OpalDateInput, _super);
    function OpalDateInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramPlaceholder = 'dd.mm.yyyy';
        _this.paramMask = '99.99.9999';
        _this.paramRequired = false;
        _this.paramPopoverPosition = 'right';
        _this.dateExists = date_exists_1.dateExists;
        return _this;
    }
    OpalDateInput.prototype.isDateInRange = function (date) {
        var calendar = this.$('calendar');
        var match = date.match(/\d+/g);
        var day = +match[0];
        var month = +match[1] - 1;
        var year = +match[2];
        if (year < 100) {
            year += year < 50 ? 2000 : 1900;
        }
        var d = new Date(year, month, day);
        if (calendar) {
            return d >= calendar.fromDate && d <= calendar.toDate;
        }
        return d >= parseDate_1.parseDate(this.paramFromDate) && d <= parseDate_1.parseDate(this.paramToDate);
    };
    OpalDateInput.prototype.elementAttached = function () {
        this.listenTo('text-input', 'change', this._onTextInputChange);
        this.listenTo(this.$('text-input').element, 'click', this._onTextInputElementClick);
        this.listenTo('calendar-menu', 'change:paramOpened', this._onCalendarMenuParamOpenedChange);
    };
    OpalDateInput.prototype._onTextInputChange = function (evt) {
        if (this.$('text-input-validator').valid) {
            this.$('calendar').stringValue = evt.target.value;
        }
    };
    OpalDateInput.prototype._onTextInputElementClick = function () {
        this.$('calendar-menu').open();
    };
    OpalDateInput.prototype._onCalendarMenuParamOpenedChange = function (evt) {
        if (evt.data.value) {
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
            var calendar = this.$('calendar');
            if (calendar) {
                return calendar.value;
            }
            return this.paramValue ? parseDate_1.parseDate(this.paramValue) : null;
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
        return (('000' + date.getUTCFullYear()).slice(-4) +
            '-' +
            pad(date.getUTCMonth() + 1) +
            '-' +
            pad(date.getUTCDate()) +
            'T' +
            pad(date.getUTCHours()) +
            ':' +
            pad(date.getUTCMinutes()) +
            ':' +
            pad(date.getUTCSeconds()) +
            '.' +
            ('00' + date.getUTCMilliseconds()).slice(-3) +
            'Z');
    };
    OpalDateInput.prototype.validate = function () {
        return this.$('text-input-validator').validate();
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalDateInput.prototype, "paramFromDate", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalDateInput.prototype, "paramToDate", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalDateInput.prototype, "paramValue", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalDateInput.prototype, "paramPlaceholder", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalDateInput.prototype, "paramMask", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalDateInput.prototype, "paramRequired", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalDateInput.prototype, "paramPopoverPosition", void 0);
    OpalDateInput = __decorate([
        rionite_1.Component({
            i18n: {
                isRequiredField: gettext_1.getText.t('Поле обязательно для заполнения'),
                nonExistentDate: gettext_1.getText.t('Несуществующая дата'),
                invalidDateRange: gettext_1.getText.t('Дата вне допустимого диапазона')
            },
            template: template_nelm_1.default,
            events: {
                calendar: {
                    change: function (evt) {
                        this.$('calendar-menu').close();
                        var textInput = this.$('text-input');
                        textInput.value = evt.target.stringValue;
                        textInput.focus();
                        this.$('text-input-validator').validate();
                    }
                }
            }
        })
    ], OpalDateInput);
    return OpalDateInput;
}(rionite_1.BaseComponent));
exports.OpalDateInput = OpalDateInput;


/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_162__;

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalDateInput{position:relative;display:inline-block;vertical-align:middle}.OpalDateInput .OpalDateInput__text-input{display:block}.OpalDateInput .OpalDateInput__calendar-menu{overflow:visible;padding:0;min-width:auto}.OpalDateInput .OpalDateInput__calendar{border:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nOpalTextInputValidator/text-input-validator {\nOpalInputMask/input-mask (mask={paramMask}) {\nOpalTextInput/text-input (\nclass=OpalInputValidator__text-input OpalInputMask__text-input,\nvalue={paramValue},\nplaceholder={paramPlaceholder},\nclearable\n) {\nOpalIcon/text-input-control-icon (class=OpalTextInput__control-icon, name=calendar)\n}\n}\n@IfThen (if=paramRequired) {\nOpalTextInputValidatorRule/text-input-validator-rule-required (\nrequired,\npopover-position={paramPopoverPosition}\n) {\n'{constructor.i18n.isRequiredField}'\n}\n}\nOpalTextInputValidatorRule/text-input-validator-rule-date-exists (\ntest={dateExists},\npopover-position={paramPopoverPosition}\n) {\n'{constructor.i18n.nonExistentDate}'\n}\nOpalTextInputValidatorRule/text-input-validator-rule-date-in-range (\ntest={isDateInRange},\npopover-position={paramPopoverPosition}\n) {\n'{constructor.i18n.invalidDateRange}'\n}\n}\nOpalDropdown/calendar-menu (auto-height=no) {\nOpalCalendar/calendar (\nfrom-date={paramFromDate},\nto-date={paramToDate},\nvalue={paramValue},\ndate-delimiter=.\n)\n}\n}");

/***/ }),
/* 165 */
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
var rionite_1 = __webpack_require__(0);
__webpack_require__(166);
var OpalLoader = /** @class */ (function (_super) {
    __extends(OpalLoader, _super);
    function OpalLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramSize = 'm';
        _this.paramShown = false;
        return _this;
    }
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalLoader.prototype, "paramSize", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalLoader.prototype, "paramShown", void 0);
    OpalLoader = __decorate([
        rionite_1.Component()
    ], OpalLoader);
    return OpalLoader;
}(rionite_1.BaseComponent));
exports.OpalLoader = OpalLoader;


/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalLoader{position:relative;display:none;margin:auto;width:38px;height:38px;border:15px solid transparent;background:rgba(255,255,255,.5)}.OpalLoader::before,.OpalLoader::after{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin:auto;width:100%;height:100%;border:3px solid #1b91f8;border-top-color:transparent;border-radius:50%;content:'';-webkit-animation:OpalLoader__animation 1.2s infinite linear;animation:OpalLoader__animation 1.2s infinite linear}.OpalLoader::after{width:26px;height:26px;border-color:#f63159;border-bottom-color:transparent;animation-direction:reverse}.OpalLoader[size=s]{width:18px;height:18px;border-width:6px}.OpalLoader[size=s]::before{border-width:2px}.OpalLoader[size=s]::after{content:none}.OpalLoader[shown]{display:block}@-webkit-keyframes OpalLoader__animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes OpalLoader__animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 167 */
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
var gettext_1 = __webpack_require__(4);
var mixin_1 = __webpack_require__(12);
var next_tick_1 = __webpack_require__(3);
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(168);
var template_nelm_1 = __webpack_require__(169);
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
        if (!this.$specifiedParams.has('dataProvider')) {
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
                    this.constructor.defaultDataListItemSchema
                        .value]
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
/* 168 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalLoadedList{position:relative;display:block;overflow-x:hidden;overflow-y:auto;height:500px}.OpalLoadedList .OpalLoadedList__list-item{display:block}.OpalLoadedList .OpalLoadedList__loader[align-center]{position:absolute;top:0;right:0;bottom:0;left:0}.OpalLoadedList .OpalLoadedList__nothing-found-slot{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;height:100%;text-align:center;white-space:nowrap}.OpalLoadedList .OpalLoadedList__nothing-found-slot::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.OpalLoadedList .OpalLoadedList__nothing-found{display:inline-block;vertical-align:middle}.OpalLoadedList .OpalLoadedList__nothing-found-message{opacity:.6}.OpalLoadedList .OpalLoadedList__nothing-found-message+.OpalSelect__btn-add-new-item{margin-top:18px}.OpalSelect .OpalLoadedList .OpalSelect__btn-add-new-item{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\ndiv/list {\n@Repeat (for=$item of dataList) {\nRtSlot/list-item-slot (for=list-item, clone-content, get-context={_getListItemContext}) {\nspan/list-item {\n'{$item |key(_dataListItemTextFieldName) }'\n}\n}\n}\n}\nOpalLoader/loader (shown={isLoaderShown}, align-center={empty})\n@IfThen (if=isNothingFoundShown) {\nRtSlot/nothing-found-slot (for=nothing-found, get-context={_getListItemContext}) {\nspan/nothing-found {\nspan/nothing-found-message {\n'{constructor.i18n.nothingFound}'\n}\n}\n}\n}\n}");

/***/ }),
/* 170 */
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
var debounce_throttle_1 = __webpack_require__(171);
var gettext_1 = __webpack_require__(4);
var rionite_1 = __webpack_require__(0);
__webpack_require__(172);
var template_nelm_1 = __webpack_require__(173);
var OpalFilteredList = /** @class */ (function (_super) {
    __extends(OpalFilteredList, _super);
    function OpalFilteredList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalFilteredList.prototype.elementAttached = function () {
        var queryInput = this.$('query-input');
        if (queryInput) {
            this.listenTo(queryInput, 'input', debounce_throttle_1.debounce(150, this._onQueryInputInput));
            this.listenTo(queryInput, 'change', this._onQueryInputChange);
        }
    };
    OpalFilteredList.prototype._onQueryInputInput = function (evt) {
        this._setListQuery(evt.target.value);
    };
    OpalFilteredList.prototype._onQueryInputChange = function (evt) {
        this._setListQuery(evt.target.value);
    };
    OpalFilteredList.prototype._setListQuery = function (query) {
        this.$('list').paramQuery = query;
    };
    OpalFilteredList.prototype.focus = function () {
        var queryInput = this.$('query-input');
        if (queryInput) {
            queryInput.focus();
        }
    };
    OpalFilteredList = __decorate([
        rionite_1.Component({
            i18n: {
                queryInputPlaceholder: gettext_1.getText.t('Поиск')
            },
            template: template_nelm_1.default
        })
    ], OpalFilteredList);
    return OpalFilteredList;
}(rionite_1.BaseComponent));
exports.OpalFilteredList = OpalFilteredList;


/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_171__;

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalFilteredList{display:block}.OpalFilteredList .OpalFilteredList__query-input-slot{display:block}.OpalFilteredList .OpalFilteredList__query-input{display:block;margin-bottom:15px;width:auto}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot (for=query-input-slot) {\nRtSlot/query-input-slot (for=query-input) {\nOpalTextInput/query-input (\nplaceholder={constructor.i18n.queryInputPlaceholder},\nclearable\n) {\nOpalIcon/query-input-control-icon (class=OpalTextInput__control-icon, name=search)\n}\n}\n}\nRtSlot/list-slot (for=list)\n}");

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTreeList{position:relative;display:block}.OpalTreeList .OpalTreeList__nothing-found{-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;height:100%;text-align:center;white-space:nowrap}.OpalTreeList .OpalTreeList__nothing-found::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.OpalTreeList .OpalTreeList__nothing-found-message{display:inline-block;vertical-align:middle;opacity:.6}.OpalTreeList .OpalTreeList__loader{position:absolute;top:0;right:0;bottom:0;left:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTreeListItem{display:block}.OpalTreeListItem .OpalTreeListItem__head{display:table}.OpalTreeListItem .OpalTreeListItem__btn-toggle-children{position:relative;display:table-cell;visibility:hidden;padding-right:6px;padding-left:2px;vertical-align:middle;text-align:center}.OpalTreeListItem .OpalTreeListItem__btn-toggle-children:focus{outline:0}body:not(._no-focus-highlight) .OpalTreeListItem .OpalTreeListItem__btn-toggle-children:focus::after{position:absolute;top:1px;right:4px;bottom:1px;left:0;border-radius:2px;-webkit-box-shadow:inset 0 0 0 1px #1b91f8;box-shadow:inset 0 0 0 1px #1b91f8;content:'';pointer-events:none}.OpalTreeListItem .OpalTreeListItem__btn-toggle-children[checked] .OpalTreeListItem__btn-toggle-children-icon{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.OpalTreeListItem .OpalTreeListItem__btn-toggle-children-icon{display:block;width:14px;height:14px;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;-o-transition:transform .1s linear;transition:transform .1s linear;transition:transform .1s linear,-webkit-transform .1s linear;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}.OpalTreeListItem .OpalTreeListItem__content-slot-wrapper{display:table-cell;width:100%}.OpalTreeListItem .OpalTreeListItem__children{display:none;padding-left:24px}.OpalTreeListItem[opened]>.OpalTreeListItem__children{display:block}.OpalTreeListItem[nesting-level='0']{font-weight:700}.OpalTreeListItem[nesting-level='1']{font-weight:400}.OpalTreeListItem[has-children]>.OpalTreeListItem__head .OpalTreeListItem__btn-toggle-children{visibility:visible}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("div/head {\nOpalButton/btn-toggle-children (view-type=clean, checkable, checked={paramOpened}) {\nOpalIcon/btn-toggle-children-icon (name=chevronRight)\n}\nspan/content-slot-wrapper {\nRtSlot/content-slot (clone-content)\n}\n}\n@IfThen (if=dataTreeListItem.children.length) {\ndiv/children {\n@Repeat (for=$item of dataTreeListItem.children) {\nOpalTreeListItem/item (\ndata-tree-list={paramDataTreeList},\nfiltered-data-tree-list={paramFilteredDataTreeList},\ndata-tree-list-item-value-field-name={_dataTreeListItemValueFieldName},\ndata-tree-list-item-text-field-name={_dataTreeListItemTextFieldName},\nview-model={viewModel},\nview-model-item-value-field-name={_viewModelItemValueFieldName},\nview-model-item-text-field-name={_viewModelItemTextFieldName},\nindexpath='[{paramIndexpath},{$index}]',\nquery={paramQuery},\nopened={paramQuery |not |not },\nnesting-level={paramIndexpath.length},\nhas-children='{$item.children.length |gt(0) }'\n) {\nRtSlot (clone-content, get-context={_getListItemContext})\n}\n}\n}\n}");

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@IfThen (if=dataTreeList) {\n@IfThen (if=filteredDataTreeList.length) {\n@Repeat (for=$item of filteredDataTreeList) {\nOpalTreeListItem/item (\ndata-tree-list={dataTreeList},\nfiltered-data-tree-list={filteredDataTreeList},\ndata-tree-list-item-value-field-name={_dataTreeListItemValueFieldName},\ndata-tree-list-item-text-field-name={_dataTreeListItemTextFieldName},\nview-model={viewModel},\nview-model-item-value-field-name={_viewModelItemValueFieldName},\nview-model-item-text-field-name={_viewModelItemTextFieldName},\nindexpath=[{$index}],\nquery={paramQuery},\nopened={paramQuery |not |not },\nnesting-level=0,\nhas-children='{$item.children.length |gt(0) }'\n) {\nRtSlot (clone-content, get-context={_getListItemContext}) {\nOpalCheckbox/selection-control (\nchecked={$selected},\nindeterminate={$indeterminate}\n) {\n'{$item |key(_dataTreeListItemTextFieldName) }'\n}\n}\n}\n}\n}\n@IfElse (if=filteredDataTreeList.length) {\ndiv/nothing-found {\nspan/nothing-found-message {\n'Ничего не найдено'\n}\n}\n}\n}\n@IfElse (if=dataTreeList) {\nOpalLoader/loader (shown)\n}");

/***/ }),
/* 178 */
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
/* 179 */
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
/* 180 */
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
var next_tick_1 = __webpack_require__(3);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(181);
var template_nelm_1 = __webpack_require__(182);
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
/* 181 */
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
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nbutton/control (tabindex={_tabIndex}) {\nRtSlot/content-slot {\n'{paramText}'\n@IfThen (if=paramSubtext) {\nsub {\n'{paramSubtext}'\n}\n}\n}\nOpalIcon/icon-check (name=checkmark)\n}\n}");

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot (for=button) {\nOpalButton/button (\nview-type={paramViewType},\nsize={paramSize},\ncheckable,\ntab-index={paramTabIndex},\ndisabled={paramDisabled}\n) {\n@IfThen (if=paramText) {\n'{paramText}'\n}\n@IfElse (if=paramText) {\n'{_buttonText}'\n}\nOpalIcon/button-icon (name=chevronBottom)\n}\n}\nRtSlot (for=menu-slot) {\nRtSlot/menu-slot (for=menu) {\nOpalDropdown/menu (auto-closing) {\nRtSlot (for=menu-content) {\n@IfThen (if=_isParamDataListSpecified) {\ndiv/, menu-content {\n@IfThen (if=dataList) {\n@Repeat (for=item of dataList, track-by={_dataListItemValueFieldName}) {\nOpalSelectOption/option (\nvalue='{item |key(_dataListItemValueFieldName) }',\ntext='{item |key(_dataListItemTextFieldName) }',\nsubtext='{item |key(_dataListItemSubtextFieldName) }',\ndisabled='{item |key(_dataListItemDisabledFieldName) }'\n)\n}\nRtSlot/new-item-input-slot // ...\n}\n@IfElse (if=dataList) {\nOpalLoader/menu-loader (shown)\n}\n}\n}\n@IfElse (if=_isParamDataListSpecified) {\ndiv/, menu-content {\nRtSlot/options (for-tag=opal-select-option)\nRtSlot (for=new-item-input-slot) {\nRtSlot/new-item-input-slot (for=new-item-input)\n}\n}\n}\n}\n}\n}\n}\n}");

/***/ }),
/* 184 */
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
var gettext_1 = __webpack_require__(4);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var OpalSelect_1 = __webpack_require__(7);
__webpack_require__(185);
var template_nelm_1 = __webpack_require__(186);
var OpalMultiselect = /** @class */ (function (_super) {
    __extends(OpalMultiselect, _super);
    function OpalMultiselect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramMultiple = true;
        return _this;
    }
    Object.defineProperty(OpalMultiselect.prototype, "isNothingSelectedShown", {
        get: function () {
            return !this.viewModel.length;
        },
        enumerable: true,
        configurable: true
    });
    OpalMultiselect.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        if (!this.$specifiedParams.has('dataProvider')) {
            throw new TypeError('Parameter "dataProvider" is required');
        }
        this.dataProvider = this.paramDataProvider;
        if (!this.dataProvider) {
            throw new TypeError('"dataProvider" is not defined');
        }
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalMultiselect.prototype, "paramMultiple", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalMultiselect.prototype, "paramDataProvider", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalMultiselect.prototype, "isNothingSelectedShown", null);
    OpalMultiselect = __decorate([
        rionite_1.Component({
            i18n: {
                queryInputPlaceholder: gettext_1.getText.t('Поиск'),
                nothingSelected: gettext_1.getText.t('Ничего не выбрано')
            },
            template: OpalSelect_1.OpalSelect.template.extend(template_nelm_1.default),
            events: {
                'query-input': {
                    input: function (evt) {
                        this.$('loaded-list').paramQuery = evt.target.value;
                    },
                    clear: function () {
                        this.$('loaded-list').paramQuery = '';
                    }
                },
                'btn-close': {
                    click: function () {
                        this.close();
                        this.focus();
                    }
                }
            },
            domEvents: {
                'btn-deselect-item': {
                    click: function (evt, btn) {
                        var vmItemValueFieldName = this._viewModelItemValueFieldName;
                        var itemValue = btn.dataset.itemValue;
                        this.viewModel.removeAt(this.viewModel.findIndex(function (item) { return item[vmItemValueFieldName] == itemValue; }));
                    }
                }
            }
        })
    ], OpalMultiselect);
    return OpalMultiselect;
}(OpalSelect_1.OpalSelect));
exports.OpalMultiselect = OpalMultiselect;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalMultiselect.OpalSelect .OpalSelect__menu{padding:0;width:600px}.OpalMultiselect.OpalSelect .OpalSelect__menu-header{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 10px;border-bottom:1px solid #ccc;font-size:0;line-height:60px}.OpalMultiselect.OpalSelect .OpalSelect__query-input{width:279px}.OpalMultiselect.OpalSelect .OpalSelect__menu-selected{float:right;overflow:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:299px;height:304px;border-left:1px solid #ccc}.OpalMultiselect.OpalSelect .OpalSelect__selected-item{position:relative;overflow:hidden;padding:7px 38px 7px 22px;background:#fff;color:#000;text-align:left;-o-text-overflow:ellipsis;text-overflow:ellipsis;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalMultiselect.OpalSelect .OpalSelect__selected-item:hover .OpalSelect__btn-deselect-item{display:block}.OpalMultiselect.OpalSelect .OpalSelect__btn-deselect-item{position:absolute;top:0;right:9px;bottom:0;display:none;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:gray;cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear}.OpalMultiselect.OpalSelect .OpalSelect__btn-deselect-item:hover{color:#000}.OpalMultiselect.OpalSelect .OpalSelect__btn-deselect-item:focus{outline:0}.OpalMultiselect.OpalSelect .OpalSelect__btn-deselect-item:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalMultiselect.OpalSelect .OpalSelect__btn-deselect-item-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px}.OpalMultiselect.OpalSelect .OpalSelect__nothing-selected{display:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px;height:100%;text-align:center;white-space:nowrap}.OpalMultiselect.OpalSelect .OpalSelect__nothing-selected::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.OpalMultiselect.OpalSelect .OpalSelect__nothing-selected[shown]{display:block}.OpalMultiselect.OpalSelect .OpalSelect__nothing-selected-message{display:inline-block;vertical-align:middle;opacity:.6}.OpalMultiselect.OpalSelect .OpalSelect__menu-list{width:299px;height:304px}.OpalMultiselect.OpalSelect .OpalSelect__menu-footer{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 10px;width:100%;border-top:1px solid #ccc;text-align:right;font-size:0;line-height:60px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("/menu (auto-height=no, auto-closing) {\ndiv/menu-header {\nOpalTextInput/query-input (\nclass=OpalSelect__focus,\nclearable,\nplaceholder={constructor.i18n.queryInputPlaceholder}\n) {\nOpalIcon/query-input-control-icon (class=OpalTextInput__control-icon, name=search)\n}\n}\ndiv/menu-selected {\n@Repeat (for=item of viewModel) {\ndiv/selected-item {\n'{item |key(_viewModelItemTextFieldName) }'\nbutton/btn-deselect-item (\ntabindex=-1,\ndata-item-value='{item |key(_viewModelItemValueFieldName) }'\n) {\nOpalIcon/btn-deselect-item-icon (name=cross)\n}\n}\n}\ndiv/nothing-selected (shown={isNothingSelectedShown}) {\nspan/nothing-selected-message {\n'{constructor.i18n.nothingSelected}'\n}\n}\n}\ndiv/menu-list {\nOpalLoadedList/loaded-list (\ndata-provider={dataProvider},\ndata-list-item-value-name={_dataListItemValueFieldName}\n) {\nOpalSelectOption/option (\nclass=OpalLoadedList__list-item,\nvalue='{$item |key(_dataListItemValueFieldName) }',\ntext='{$item |key(_dataListItemTextFieldName) }',\nsubtext='{$item |key(_dataListItemSubtextFieldName) }'\n)\n}\n}\ndiv/menu-footer {\nOpalButton/btn-close {\n'Закрыть'\n}\n}\n}");

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTagSelect{display:inline-block}.OpalTagSelect .OpalTagSelect__tag{position:relative;top:-1px;display:inline-block;margin:2px 38px 2px 0;padding:0 10px 0 18px;border-top-left-radius:16px;border-bottom-left-radius:16px;background:#5b7d9a;color:#fff;vertical-align:middle;text-decoration:none;text-shadow:none;font:16px/32px Verdana,Geneva,sans-serif;font-weight:400}.OpalTagSelect .OpalTagSelect__tag[disabled]{margin-right:6px;padding-right:18px;border-top-right-radius:16px;border-bottom-right-radius:16px}.OpalTagSelect .OpalTagSelect__tag[disabled] .OpalTagSelect__btn-remove-tag{display:none}.OpalTagSelect .OpalTagSelect__btn-remove-tag{position:absolute;top:0;bottom:0;left:100%;display:block;padding:0;width:32px;border:0;border-radius:0;border-top-right-radius:16px;border-bottom-right-radius:16px;background:#516270;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4);cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalTagSelect .OpalTagSelect__btn-remove-tag::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#fff;content:''}.OpalTagSelect .OpalTagSelect__btn-remove-tag:hover{background:#5b7d9a}.OpalTagSelect .OpalTagSelect__btn-remove-tag:focus{outline:0}body:not(._no-focus-highlight) .OpalTagSelect .OpalTagSelect__btn-remove-tag:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.OpalTagSelect .OpalTagSelect__btn-remove-tag:active{background:#43484c}.OpalTagSelect .OpalTagSelect__control{display:inline-block;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalTagSelect .OpalTagSelect__button{margin:1px 0}.OpalTagSelect[view-type=primary] .OpalTagSelect__tag{background:#0083f5}.OpalTagSelect[view-type=primary] .OpalTagSelect__btn-remove-tag{background:#0a67b8}.OpalTagSelect[view-type=primary] .OpalTagSelect__btn-remove-tag:hover{background:#0083f5}.OpalTagSelect[view-type=primary] .OpalTagSelect__btn-remove-tag:active{background:#0e4b81}.OpalTagSelect[view-type=danger] .OpalTagSelect__tag{background:#fa0f3e}.OpalTagSelect[view-type=danger] .OpalTagSelect__btn-remove-tag{background:#c70f34}.OpalTagSelect[view-type=danger] .OpalTagSelect__btn-remove-tag:hover{background:#fa0f3e}.OpalTagSelect[view-type=danger] .OpalTagSelect__btn-remove-tag:active{background:#90142c}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nspan/tags {\n@Repeat (for=tag of viewModel, track-by={_viewModelItemValueFieldName}) {\nspan/tag (\ndata-value='{tag |key(_viewModelItemValueFieldName) }',\ndisabled='{tag |_isItemDisabled }'\n) {\n'{tag |key(_viewModelItemTextFieldName) }'\nbutton/btn-remove-tag (data-tag-value='{tag |key(_viewModelItemValueFieldName) }')\n}\n}\n}\nspan/control {\n@IfThen (if=isPlaceholderShown) {\nspan/placeholder {\n'{paramPlaceholder} '\n}\n}\nOpalSelect/select (\nview-type=clean,\nmultiple,\ndata-list-keypath={_dataListKeypathParam},\ndata-list-item-schema={paramDataListItemSchema |json },\nvalue={paramValue},\nview-model={viewModel},\nview-model-item-schema={paramViewModelItemSchema |json },\nadd-new-item={paramAddNewItem},\nfocused={paramFocused}\n) {\nOpalSignButton/button (\nclass=OpalSelect__button,\nsign=plus,\ncheckable,\ntab-index={paramTabIndex},\ndisabled={paramDisabled}\n)\nRtSlot (class=OpalSelect__menu-slot, for=OpalSelect__menu) {\nOpalPopover/menu (\nclass=OpalSelect__menu,\nposition={paramPopoverPosition},\nauto-closing\n) {\nRtContent (select='.OpalSelect__menu-content') {\n@IfThen (if=_dataListKeypathParam) {\ndiv (class=OpalSelect__menu-content) {\n@IfThen (if=dataList) {\n@Repeat (for=item of dataList) {\nOpalSelectOption/data-list-select-option, select-option (\nvalue='{item |key(_dataListItemValueFieldName) }',\ntext='{item |key(_dataListItemTextFieldName) }',\nsubtext='{item |key(_dataListItemSubtextFieldName) }',\ndisabled='{item |key(_dataListItemDisabledFieldName) }'\n)\n}\nRtSlot (\nclass=OpalSelect__new-item-input-slot,\nfor=OpalSelect__new-item-input\n)\n}\n@IfElse (if=dataList) {\nOpalLoader/menu-loader (shown)\n}\n}\n}\n@IfElse (if=_dataListKeypathParam) {\nOpalFilteredList/menu-filtered-list (\nclass=OpalSelect__menu-content OpalSelect__filtered-list\n) {\nRtSlot (\nclass=OpalFilteredList__query-input-slot,\nfor=OpalFilteredList__query-input\n)\nOpalLoadedList/menu-loaded-list (\nclass=OpalSelect__loaded-list OpalFilteredList__list,\ndata-provider={dataProvider}\n) {\nOpalSelectOption/loaded-list-select-option, select-option (\nclass=OpalLoadedList__list-item,\nvalue='{$item |key(_dataListItemValueFieldName) }',\ntext='{$item |key(_dataListItemTextFieldName) }',\nsubtext='{$item |key(_dataListItemSubtextFieldName) }'\n)\n}\n}\n}\n}\n}\n}\n}\n}\n}");

/***/ }),
/* 189 */
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
var cellx_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
var OpalSelect_1 = __webpack_require__(7);
var OpalTreeList_1 = __webpack_require__(13);
__webpack_require__(190);
var template_nelm_1 = __webpack_require__(191);
var OpalTreeSelect = /** @class */ (function (_super) {
    __extends(OpalTreeSelect, _super);
    function OpalTreeSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramMultiple = true;
        return _this;
    }
    OpalTreeSelect.prototype.initialize = function () {
        var _this = this;
        _super.prototype.initialize.call(this);
        if (this.paramDataTreeListKeypath) {
            cellx_1.define(this, 'dataTreeList', new cellx_1.Cell(Function("return this." + this.paramDataTreeListKeypath + ";"), {
                context: this.ownerComponent || window
            }));
        }
        else {
            if (!this.$specifiedParams.has('dataTreeList')) {
                throw new TypeError('Parameter "dataTreeList" is required');
            }
            cellx_1.define(this, 'dataTreeList', function () { return _this.paramDataTreeList; });
        }
    };
    OpalTreeSelect.prototype._onMenuSelectOptionSelect = function () {
        return false;
    };
    OpalTreeSelect.prototype._onMenuSelectOptionDeselect = function () {
        return false;
    };
    OpalTreeSelect.prototype._onMenuChange = function () {
        return false;
    };
    OpalTreeSelect.prototype._updateOptions = function () { };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTreeSelect.prototype, "paramMultiple", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTreeSelect.prototype, "paramDataTreeList", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", String)
    ], OpalTreeSelect.prototype, "paramDataTreeListKeypath", void 0);
    __decorate([
        rionite_1.Param({
            type: eval,
            default: OpalTreeList_1.OpalTreeList.defaultDataTreeListItemSchema,
            readonly: true
        }),
        __metadata("design:type", Object)
    ], OpalTreeSelect.prototype, "paramDataTreeListItemSchema", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTreeSelect.prototype, "paramViewModel", void 0);
    __decorate([
        rionite_1.Param({
            type: eval,
            default: OpalTreeList_1.OpalTreeList.defaultViewModelItemSchema,
            readonly: true
        }),
        __metadata("design:type", Object)
    ], OpalTreeSelect.prototype, "paramViewModelItemSchema", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTreeSelect.prototype, "paramQuery", void 0);
    OpalTreeSelect = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default,
            events: {
                'btn-close': {
                    click: function () {
                        this.$('menu').close();
                    }
                }
            }
        })
    ], OpalTreeSelect);
    return OpalTreeSelect;
}(OpalSelect_1.OpalSelect));
exports.OpalTreeSelect = OpalTreeSelect;


/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTreeSelect.OpalSelect .OpalModal__window{-webkit-box-sizing:border-box;box-sizing:border-box;width:80%}.OpalTreeSelect.OpalSelect .OpalSelect__tree-list{overflow:auto;height:410px}.OpalTreeSelect.OpalSelect .OpalSelect__footer{padding-top:10px}.OpalTreeSelect.OpalSelect .OpalSelect__btn-close{float:right}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("OpalModal/menu {\nOpalFilteredList/filtered-list {\nOpalTreeList/tree-list (\nclass=OpalFilteredList__list,\ndata-tree-list={dataTreeList},\ndata-tree-list-item-schema={paramDataTreeListItemSchema},\nview-model={viewModel},\nview-model-item-schema={paramViewModelItemSchema},\nquery={paramQuery}\n) {\nOpalSelectOption/option (\nclass=OpalTreeList__selection-control,\ntext={$item.name},\nselected={$selected}\n)\n}\n}\ndiv/footer {\nOpalButton/btn-close {\n'Готово'\n}\n}\n}");

/***/ }),
/* 192 */
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
var OpalTagSelect_1 = __webpack_require__(16);
var template_nelm_1 = __webpack_require__(193);
var OpalTreeTagSelect = /** @class */ (function (_super) {
    __extends(OpalTreeTagSelect, _super);
    function OpalTreeTagSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalTreeTagSelect.prototype._onSelectSelect = function () {
        return false;
    };
    OpalTreeTagSelect.prototype._onSelectDeselect = function () {
        return false;
    };
    OpalTreeTagSelect = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalTreeTagSelect);
    return OpalTreeTagSelect;
}(OpalTagSelect_1.OpalTagSelect));
exports.OpalTreeTagSelect = OpalTreeTagSelect;


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("OpalTreeSelect/select (\nview-type=clean,\ndata-tree-list-keypath={_dataListKeypathParam},\ndata-tree-list-item-schema={paramDataListItemSchema |json },\nvalue={paramValue},\nview-model={viewModel},\nview-model-item-schema={paramViewModelItemSchema |json },\nadd-new-item={paramAddNewItem},\nfocused={paramFocused}\n) {\nOpalSignButton/button (\nclass=OpalSelect__button,\nsign=plus,\ncheckable,\ntab-index={paramTabIndex},\ndisabled={paramDisabled}\n)\n}");

/***/ }),
/* 194 */
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
var OpalInputValidator_1 = __webpack_require__(6);
__webpack_require__(195);
var OpalSelectValidatorRule_1 = __webpack_require__(196);
exports.OpalSelectValidatorRule = OpalSelectValidatorRule_1.OpalSelectValidatorRule;
var OpalSelectValidator = /** @class */ (function (_super) {
    __extends(OpalSelectValidator, _super);
    function OpalSelectValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalSelectValidator.prototype.ready = function () {
        _super.prototype.ready.call(this);
        this.target = this.select = this.$('select');
    };
    OpalSelectValidator.prototype._checkValue = function (rule) {
        var vm = this.select.viewModel;
        return !(vm.length
            ? (rule.paramMinCount && vm.length < rule.paramMinCount) ||
                (rule.paramTest && !rule.paramTest.call(this.ownerComponent, vm))
            : rule.paramRequired);
    };
    OpalSelectValidator = __decorate([
        rionite_1.Component()
    ], OpalSelectValidator);
    return OpalSelectValidator;
}(OpalInputValidator_1.OpalInputValidator));
exports.OpalSelectValidator = OpalSelectValidator;


/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalSelectValidator.OpalInputValidator .OpalInputValidator__select{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 196 */
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
var rionite_1 = __webpack_require__(0);
var OpalInputValidator_1 = __webpack_require__(6);
var OpalSelectValidatorRule = /** @class */ (function (_super) {
    __extends(OpalSelectValidatorRule, _super);
    function OpalSelectValidatorRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Number)
    ], OpalSelectValidatorRule.prototype, "paramMinCount", void 0);
    OpalSelectValidatorRule = __decorate([
        rionite_1.Component()
    ], OpalSelectValidatorRule);
    return OpalSelectValidatorRule;
}(OpalInputValidator_1.OpalInputValidatorRule));
exports.OpalSelectValidatorRule = OpalSelectValidatorRule;


/***/ }),
/* 197 */
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
var gettext_1 = __webpack_require__(4);
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
var isFocusable_1 = __webpack_require__(5);
__webpack_require__(198);
var template_nelm_1 = __webpack_require__(199);
function toComparable(str) {
    return str.replace(/\s+/g, ' ').toLowerCase();
}
var defaultDataListItemSchema = Object.freeze({ value: 'id', text: 'name' });
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
        if (!this.$specifiedParams.has('dataProvider')) {
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
        this.listenTo('text-input', {
            focus: this._onTextInputFocus,
            blur: this._onTextInputBlur,
            input: this._onTextInputInput,
            change: this._onTextInputChange
        });
        this.listenTo(this.$('text-input').textField, 'click', this._onTextFieldClick);
        this.listenTo('menu', 'change:paramOpened', this._onMenuParamOpenedChange);
        this.listenTo(this.$('menu').element, 'mouseover', this._onMenuElementMouseOver);
    };
    OpalAutosuggest.prototype.ready = function () {
        if (this.value) {
            this.$('text-input').value = this.value[this._dataListItemTextFieldName];
        }
    };
    OpalAutosuggest.prototype._onParamValueChange = function (evt) {
        var item = evt.data.value;
        this._clearDataList();
        this.value = item;
        this.$('text-input').value = item
            ? item[this._dataListItemTextFieldName]
            : '';
    };
    OpalAutosuggest.prototype._onIsLoaderShownChange = function (evt) {
        this.$('text-input').paramLoading = evt.data.value;
    };
    OpalAutosuggest.prototype._onDataListChange = function () {
        this.openMenu();
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
        for (; !el.classList.contains('OpalAutosuggest__list-item'); el = el.parentNode) {
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
        if (!isFocusable_1.isFocusable(evt.target)) {
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
                    this._clearDataList();
                    this._selectItem((_a = {},
                        _a[this._dataListItemValueFieldName] = focusedListItemDataSet.value,
                        _a[this._dataListItemTextFieldName] = focusedListItemDataSet.text,
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
        var args = [this.$('text-input').value];
        if (this.dataProvider.getItems.length >= 2) {
            args.unshift(this.paramCount);
        }
        this.dataProvider.getItems
            .apply(this.dataProvider, args)
            .then((this._requestCallback = this.registerCallback(this._itemsRequestCallback)));
    };
    OpalAutosuggest.prototype._itemsRequestCallback = function (data) {
        this.loading = false;
        var items = data.items;
        if (items.length) {
            this.dataList.addRange(items);
            cellx_1.Cell.forceRelease();
            var focusedListItem = this.$('list-item');
            this._focusedListItem = focusedListItem;
            focusedListItem.setAttribute('focused', '');
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
                var query_1 = this.$('text-input').value;
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
        this.$('text-input').clear();
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
                'list-item': {
                    click: function (evt, listItem) {
                        var textInput = this.$('text-input');
                        var listItemDataSet = listItem.dataset;
                        textInput.value = listItemDataSet.text;
                        textInput.focus();
                        this._clearDataList();
                        this._selectItem((_a = {},
                            _a[this._dataListItemValueFieldName] = listItemDataSet.value,
                            _a[this._dataListItemTextFieldName] = listItemDataSet.text,
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
/* 198 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalAutosuggest{position:relative;display:inline-block;vertical-align:middle}.OpalAutosuggest .OpalAutosuggest__text-input{display:block}.OpalAutosuggest .OpalAutosuggest__list-item{position:relative;padding:7px 22px;background:#fff;color:#000;text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalAutosuggest .OpalAutosuggest__list-item:hover,.OpalAutosuggest .OpalAutosuggest__list-item[focused]{background:#e6e6e6}.OpalAutosuggest .OpalAutosuggest__list-item:active{background:#ccc}.OpalAutosuggest .OpalAutosuggest__nothing-found-message{display:none;padding:10px;text-align:center;white-space:nowrap;opacity:.6}.OpalAutosuggest .OpalAutosuggest__nothing-found-message[shown]{display:block}.OpalTextInputValidator .OpalAutosuggest{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot (for=text-input) {\nOpalTextInput/text-input (\nvalue='{paramValue |key(_dataListItemTextFieldName) }',\nplaceholder={constructor.i18n.textInputPlaceholder},\nclearable\n) {\nOpalIcon (class=OpalTextInput__control-icon, name=search)\n}\n}\nOpalDropdown/menu {\ndiv/list {\n@Repeat (for=item of dataList) {\ndiv/list-item (\ndata-value='{item |key(_dataListItemValueFieldName) }',\ndata-text='{item |key(_dataListItemTextFieldName) }'\n) {\n'{item |key(_dataListItemTextFieldName) }'\n}\n}\n}\nspan/nothing-found-message (shown={dataList.length |not }) {\n'{constructor.i18n.nothingFound}'\n}\n}\n}");

/***/ }),
/* 200 */
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
var next_uid_1 = __webpack_require__(201);
var cellx_1 = __webpack_require__(2);
var cellx_decorators_1 = __webpack_require__(1);
var rionite_1 = __webpack_require__(0);
__webpack_require__(202);
var OpalMultirowRow_1 = __webpack_require__(203);
exports.OpalMultirowRow = OpalMultirowRow_1.OpalMultirowRow;
var template_nelm_1 = __webpack_require__(206);
var OpalMultirow = /** @class */ (function (_super) {
    __extends(OpalMultirow, _super);
    function OpalMultirow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._presetRowCount = 0;
        _this._newRows = new cellx_1.ObservableList();
        return _this;
    }
    OpalMultirow.prototype._notHaveNewRows = function () {
        return !this._newRows.length;
    };
    OpalMultirow.prototype._notSingleRow = function () {
        return this._presetRowCount + this._newRows.length != 1;
    };
    OpalMultirow.prototype.initialize = function () {
        var elementBlockNames = this.constructor._elementBlockNames;
        this._presetRowClassName = elementBlockNames[elementBlockNames.length - 1] + '__preset-row';
    };
    OpalMultirow.prototype.ready = function () {
        var presetRowCount = (this._presetRowCount = this.$$('preset-row').length);
        if (!presetRowCount) {
            this._newRows.add({ key: next_uid_1.nextUID() });
        }
    };
    OpalMultirow.prototype.elementAttached = function () {
        this.listenTo(this, {
            '<OpalMultirowRow>remove-row-click': this._onRemoveRowClick,
            '<OpalMultirowRow>add-row-click': this._onAddRowClick
        });
    };
    OpalMultirow.prototype._onRemoveRowClick = function (evt) {
        var rowEl = evt.target.element;
        if (rowEl.classList.contains(this._presetRowClassName)) {
            rowEl.parentNode.removeChild(rowEl);
            this._presetRowCount--;
        }
        else {
            var key_1 = evt.target.parentComponent.element.dataset.key;
            this._newRows.removeAt(this._newRows.findIndex(function (row) { return row.key == key_1; }));
        }
        cellx_1.Cell.forceRelease();
        this.emit('remove-row');
        this.emit('change');
    };
    OpalMultirow.prototype._onAddRowClick = function () {
        this._newRows.add({ key: next_uid_1.nextUID() });
        cellx_1.Cell.forceRelease();
        this.emit('add-row');
        this.emit('change');
    };
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalMultirow.prototype, "_presetRowCount", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalMultirow.prototype, "_newRows", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], OpalMultirow.prototype, "_notHaveNewRows", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], OpalMultirow.prototype, "_notSingleRow", null);
    OpalMultirow = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalMultirow);
    return OpalMultirow;
}(rionite_1.BaseComponent));
exports.OpalMultirow = OpalMultirow;


/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_201__;

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalMultirow{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 203 */
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
__webpack_require__(204);
var template_nelm_1 = __webpack_require__(205);
var OpalMultirowRow = /** @class */ (function (_super) {
    __extends(OpalMultirowRow, _super);
    function OpalMultirowRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalMultirowRow = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default,
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
}(rionite_1.BaseComponent));
exports.OpalMultirowRow = OpalMultirowRow;


/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalMultirowRow{display:block;white-space:nowrap}.OpalMultirowRow::after{display:table;clear:both;content:''}.OpalMultirowRow .OpalMultirowRow__content-slot{display:inline-block;margin-bottom:20px;padding-right:6px}.OpalMultirowRow .OpalMultirowRow__btn-remove-row,.OpalMultirowRow .OpalMultirowRow__btn-add-row{position:relative;top:1px;display:none}.OpalMultirow__preset-rows-slot[not-have-new-rows] .OpalMultirowRow:last-child .OpalMultirowRow__content-slot,.OpalMultirow__new-rows rt-slot:last-child .OpalMultirowRow .OpalMultirowRow__content-slot{margin-bottom:0}.OpalMultirow__preset-rows-slot[not-single-row] .OpalMultirowRow .OpalMultirowRow__btn-remove-row,.OpalMultirow__new-rows[not-single-row] .OpalMultirowRow .OpalMultirowRow__btn-remove-row,.OpalMultirow__preset-rows-slot[not-have-new-rows] .OpalMultirowRow:last-child .OpalMultirowRow__btn-add-row,.OpalMultirow__new-rows rt-slot:last-child .OpalMultirowRow .OpalMultirowRow__btn-add-row{display:inline-block}.OpalMultirowRow .OpalPopover{white-space:normal}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot/content-slot\n' '\nOpalSignButton/btn-remove-row (sign=minus)\n' '\nOpalSignButton/btn-add-row (sign=plus)\n}");

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRtSlot/preset-rows-slot (\nfor=preset-rows,\nnot-have-new-rows={_notHaveNewRows},\nnot-single-row={_notSingleRow}\n) {\nRtSlot/preset-rows (for=preset-row)\n}\ndiv/new-rows (not-single-row={_notSingleRow}) {\n@Repeat (for=row of _newRows, track-by=key) {\nRtSlot/new-row-slot (clone-content, data-key={row.key})\n}\n}\n}");

/***/ }),
/* 207 */
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
var camelize_1 = __webpack_require__(208);
var hyphenize_1 = __webpack_require__(209);
var created_browser_history_1 = __webpack_require__(210);
var rionite_1 = __webpack_require__(0);
var escapeRegExp_1 = __webpack_require__(211);
__webpack_require__(212);
var OpalRoute_1 = __webpack_require__(213);
exports.OpalRoute = OpalRoute_1.OpalRoute;
var parsePath_1 = __webpack_require__(214);
var PathNodeType_1 = __webpack_require__(17);
var forEach = Array.prototype.forEach;
function isReadonlyProperty(propConfig) {
    return !!(propConfig &&
        typeof propConfig == 'object' &&
        (propConfig.type !== undefined || propConfig.default !== undefined) &&
        propConfig.readonly);
}
function valueToAttributeValue(value) {
    return value === false ? 'no' : value === true ? 'yes' : value;
}
var OpalRouter = /** @class */ (function (_super) {
    __extends(OpalRouter, _super);
    function OpalRouter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramScrollTopOnChange = true;
        _this.paramScrollTopOnChangeComponent = true;
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
        forEach.call(this.element.getElementsByTagName('opal-route'), function (routeEl) {
            var path = routeEl.$component.paramPath;
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
                rePath: RegExp("^" + rePath + (rePath.charAt(rePath.length - 1) == '/' ? '?' : '/?') + "$"),
                properties: props,
                componentName: routeEl.$component.paramComponent
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
                var paramsConfig = componentEl_1.$component.constructor
                    .params;
                var attrs = componentEl_1.attributes;
                var writable = true;
                if (paramsConfig) {
                    for (var i = attrs.length; i;) {
                        var name_1 = camelize_1.camelize(attrs.item(--i).name, true);
                        if (name_1 != 'class' &&
                            !(name_1 in state) &&
                            isReadonlyProperty(paramsConfig[name_1])) {
                            writable = false;
                            break;
                        }
                    }
                    if (writable) {
                        for (var name_2 in state) {
                            if (componentEl_1.getAttribute(hyphenize_1.hyphenize(name_2, true)) !==
                                valueToAttributeValue(state[name_2]) &&
                                isReadonlyProperty(paramsConfig[name_2])) {
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
                    if (this_1.paramScrollTopOnChange) {
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
            var componentEl = (this_1._componentElement = document.createElement(route.componentName));
            this_1._applyState();
            componentEl.$component.ownerComponent = this_1;
            this_1.element.appendChild(componentEl);
            if (this_1.paramScrollTopOnChange || this_1.paramScrollTopOnChangeComponent) {
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
            componentEl.setAttribute(hyphenize_1.hyphenize(name_4, true), valueToAttributeValue(state[name_4]));
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
            var componentEl = (this._componentElement = document.createElement(route.componentName));
            this._applyState();
            componentEl.$component.ownerComponent = this;
            this.element.appendChild(componentEl);
            if (this.paramScrollTopOnChange || this.paramScrollTopOnChangeComponent) {
                document.body.scrollTop = 0;
            }
        }
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalRouter.prototype, "paramScrollTopOnChange", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalRouter.prototype, "paramScrollTopOnChangeComponent", void 0);
    OpalRouter = __decorate([
        rionite_1.Component()
    ], OpalRouter);
    return OpalRouter;
}(rionite_1.BaseComponent));
exports.OpalRouter = OpalRouter;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reHyphen = /[-_]+([a-z])/g;
var cache = Object.create(null);
function camelize(str, useCache) {
    str = String(str);
    var value;
    return ((useCache && cache[str]) ||
        ((value = str.replace(reHyphen, function (match, chr) { return chr.toUpperCase(); })),
            useCache ? (cache[str] = value) : value));
}
exports.camelize = camelize;


/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_209__;

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_210__;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;
function escapeRegExp(str) {
    return str.replace(reEscapableChars, '\\$1');
}
exports.escapeRegExp = escapeRegExp;


/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalRouter{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 213 */
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
var rionite_1 = __webpack_require__(0);
var OpalRoute = /** @class */ (function (_super) {
    __extends(OpalRoute, _super);
    function OpalRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        rionite_1.Param({ required: true, readonly: true }),
        __metadata("design:type", String)
    ], OpalRoute.prototype, "paramPath", void 0);
    __decorate([
        rionite_1.Param({ required: true, readonly: true }),
        __metadata("design:type", String)
    ], OpalRoute.prototype, "paramComponent", void 0);
    OpalRoute = __decorate([
        rionite_1.Component()
    ], OpalRoute);
    return OpalRoute;
}(rionite_1.BaseComponent));
exports.OpalRoute = OpalRoute;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PathNodeType_1 = __webpack_require__(17);
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
            if (chr == '(' || chr == '[' || (ctx == PathNodeType_1.PathNodeType.OPTIONAL && chr == ')')) {
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
        if (chr == '|') {
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
        next('|');
        var optionalNodeNameAt = at;
        var name = '';
        while (chr) {
            if (chr == '|') {
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