(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"), require("cellx-indexed-collections"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx", "cellx-indexed-collections"], factory);
	else if(typeof exports === 'object')
		exports["opal-select"] = factory(require("rionite"), require("cellx"), require("cellx-indexed-collections"));
	else
		root["opal-select"] = factory(root["rionite"], root["cellx"], root["cellx-indexed-collections"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

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
	__webpack_require__(64);
	__webpack_require__(77);
	var cellx_1 = __webpack_require__(2);
	var cellx_indexed_collections_1 = __webpack_require__(3);
	var rionite_1 = __webpack_require__(1);
	var opal_select_option_1 = __webpack_require__(10);
	var isEqualArray_1 = __webpack_require__(19);
	var template = __webpack_require__(34);
	var opal_select_option_2 = __webpack_require__(10);
	exports.OpalSelectOption = opal_select_option_2.default;
	var nextUID = cellx_1.Utils.nextUID, nextTick = cellx_1.Utils.nextTick;
	var RtIfThen = rionite_1.Components.RtIfThen, RtRepeat = rionite_1.Components.RtRepeat;
	var map = Array.prototype.map;
	var defaultVMItemSchema = { value: 'value', text: 'text', disabled: 'disabled' };
	var OpalSelect = (function (_super) {
	    __extends(OpalSelect, _super);
	    function OpalSelect() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this._opened = false;
	        _this._focusedAfterLoading = false;
	        return _this;
	    }
	    OpalSelect.prototype.initialize = function () {
	        var props = this.props;
	        var dataList = props['datalist'];
	        if (dataList) {
	            var context_1 = this.ownerComponent || window;
	            var getDataList_1 = Function("return this." + dataList + ";");
	            cellx_1.define(this, 'dataList', function () {
	                return getDataList_1.call(context_1);
	            });
	        }
	        var vm = props['viewModel'];
	        var vmItemSchema = props['viewModelItemSchema'];
	        if (vm) {
	            vm = Function("return this." + vm + ";").call(this.ownerComponent || window);
	            if (!vm) {
	                throw new TypeError('viewModel is not defined');
	            }
	        }
	        else {
	            vm = new cellx_indexed_collections_1.IndexedList(undefined, { indexes: [vmItemSchema.value] });
	        }
	        cellx_1.define(this, 'viewModel', vm);
	        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
	        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
	        this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;
	        cellx_1.define(this, {
	            options: function () {
	                return this.optionElements ?
	                    map.call(this.optionElements, function (option) { return option.$c; }) :
	                    [];
	            },
	            text: function () {
	                var _this = this;
	                return this.viewModel.map(function (item) { return item[_this._viewModelItemTextFieldName]; }).join(', ') ||
	                    this.props['placeholder'];
	            }
	        });
	    };
	    OpalSelect.prototype.ready = function () {
	        var _this = this;
	        this.optionElements = this.element.getElementsByClassName('opal-select-option');
	        var props = this.props;
	        if (props['viewModel']) {
	            this._updateOptions();
	        }
	        else {
	            var value_1 = props['value'];
	            var selectedOptions = void 0;
	            if (value_1) {
	                if (!Array.isArray(value_1)) {
	                    throw new TypeError('value must be an array');
	                }
	                if (value_1.length) {
	                    if (props['multiple']) {
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
	                if (props['multiple']) {
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
	        this.listenTo(this.viewModel, 'change', this._onViewModelChange);
	    };
	    OpalSelect.prototype.propertyChanged = function (name, value) {
	        if (name == 'focused') {
	            if (value) {
	                if (!this._opened) {
	                    this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
	                }
	                this.focus();
	            }
	            else {
	                if (!this._opened) {
	                    this._documentKeyDownListening.stop();
	                }
	                this.blur();
	            }
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
	        this._valueAtOpening = this.viewModel.map(function (item) { return item[_this._viewModelItemValueFieldName]; });
	        this._documentFocusInListening = this.listenTo(document, 'focusin', this._onDocumentFocusIn);
	        if (!this.props['focused']) {
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
	        var filteredList = this.filteredList;
	        if (filteredList === undefined) {
	            filteredList = this.filteredList = this.$('filtered-list');
	        }
	        if (filteredList) {
	            setTimeout(function () {
	                filteredList.focus();
	            }, 1);
	        }
	        else {
	            this._focusOptions();
	        }
	        return true;
	    };
	    OpalSelect.prototype.close = function () {
	        var _this = this;
	        if (!this._opened) {
	            return false;
	        }
	        this._opened = false;
	        this._documentFocusInListening.stop();
	        if (!this.props['focused']) {
	            this._documentKeyDownListening.stop();
	        }
	        this.$('button').uncheck();
	        this.$('menu').close();
	        if (this.props['multiple']) {
	            if (!isEqualArray_1.default(this.viewModel.map(function (item) { return item[_this._viewModelItemValueFieldName]; }), this._valueAtOpening)) {
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
	    OpalSelect.prototype._onDocumentFocusIn = function (evt) {
	        if (!this.element.contains(evt.target.parentNode)) {
	            this.close();
	        }
	    };
	    OpalSelect.prototype.focus = function () {
	        this.$('button').focus();
	        return this;
	    };
	    OpalSelect.prototype.blur = function () {
	        this.$('button').blur();
	        return this;
	    };
	    OpalSelect.prototype._onDocumentKeyDown = function (evt) {
	        switch (evt.which) {
	            case 32 /* Space */: {
	                evt.preventDefault();
	                if (this._opened) {
	                    if (this.props['focused']) {
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
	                            if (options[i].props['focused']) {
	                                do {
	                                    var option = options[--i];
	                                    if (!option.props['disabled']) {
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
	                            if (options[i].props['focused']) {
	                                do {
	                                    var option = options[++i];
	                                    if (!option.props['disabled']) {
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
	            if (!option.props['disabled']) {
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
	    return OpalSelect;
	}(rionite_1.Component));
	OpalSelect.OpalSelectOption = opal_select_option_1.default;
	OpalSelect = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-select',
	        props: {
	            viewType: String,
	            size: 'm',
	            datalist: { type: String, readonly: true },
	            value: Object,
	            viewModel: { type: String, readonly: true },
	            viewModelItemSchema: { default: defaultVMItemSchema, readonly: true },
	            text: String,
	            placeholder: rionite_1.getText.t('Не выбрано'),
	            multiple: { default: false, readonly: true },
	            allowInput: false,
	            tabIndex: 0,
	            focused: false,
	            disabled: false
	        },
	        bemlTemplate: template,
	        events: {
	            ':component': {
	                'property-value-change': function (evt) {
	                    if (evt.target != this) {
	                        return;
	                    }
	                    var vm = this.viewModel;
	                    var value = evt['value'];
	                    if (value) {
	                        if (!Array.isArray(value)) {
	                            throw new TypeError('value must be an array');
	                        }
	                        if (value.length) {
	                            var vmItemValueFieldName_1 = this._viewModelItemValueFieldName;
	                            var vmItemTextFieldName_1 = this._viewModelItemTextFieldName;
	                            if (this.props['multiple']) {
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
	                }
	            },
	            button: {
	                focusin: function () {
	                    this.props['focused'] = true;
	                    this.emit('focusin');
	                },
	                focusout: function () {
	                    this.props['focused'] = false;
	                    this.emit('focusout');
	                },
	                click: function (evt) {
	                    (evt['originalEvent'] || evt).preventDefault();
	                    if (evt.target.checked) {
	                        this.open();
	                    }
	                    else {
	                        this.close();
	                    }
	                }
	            },
	            menu: {
	                close: function () {
	                    this.close();
	                },
	                '<opal-text-input>input-confirm': function (evt) {
	                    if (!this.props['allowInput']) {
	                        return;
	                    }
	                    var textInput = evt.target;
	                    var itemValue = '_' + Math.floor(Math.random() * 1e9) + '_' + nextUID();
	                    var itemText = textInput.value;
	                    var dataList = this.dataList;
	                    if (dataList) {
	                        dataList.add({ value: itemValue, text: itemText });
	                    }
	                    textInput.clear();
	                    var loadedList = this.loadedList;
	                    if (loadedList === undefined) {
	                        loadedList = this.loadedList = this.$('loaded-list');
	                    }
	                    if (loadedList) {
	                        loadedList.props['query'] = '';
	                    }
	                    this.emit('input');
	                    var vm = this.viewModel;
	                    var vmItem = (_a = {},
	                        _a[this._viewModelItemValueFieldName] = itemValue,
	                        _a[this._viewModelItemTextFieldName] = itemText,
	                        _a);
	                    if (this.props['multiple']) {
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
	                '<*>change': function (evt) {
	                    if (!(evt.target instanceof RtIfThen) && !(evt.target instanceof RtRepeat)) {
	                        return;
	                    }
	                    this._options.pull();
	                    this._updateOptions();
	                    return false;
	                },
	                '<opal-select-option>select': function (evt) {
	                    var vm = this.viewModel;
	                    var vmItem = (_a = {},
	                        _a[this._viewModelItemValueFieldName] = evt.target.value,
	                        _a[this._viewModelItemTextFieldName] = evt.target.text,
	                        _a);
	                    if (this.props['multiple']) {
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
	                    if (this.props['multiple']) {
	                        this.viewModel.remove(this.viewModel.get(evt.target.value, this._viewModelItemValueFieldName));
	                    }
	                    else {
	                        evt.target.select();
	                        this.close();
	                        this.focus();
	                    }
	                }
	            },
	            'loaded-list': {
	                loaded: function () {
	                    var _this = this;
	                    if (this._focusedAfterLoading) {
	                        return;
	                    }
	                    this._focusedAfterLoading = true;
	                    setTimeout(function () {
	                        var filteredList = _this.$('filtered-list');
	                        if (filteredList) {
	                            if (document.activeElement == filteredList.$('query-input')
	                                .$('text-field')) {
	                                _this._focusOptions();
	                                filteredList.focus();
	                            }
	                            else {
	                                _this._focusOptions();
	                            }
	                        }
	                        else {
	                            _this._focusOptions();
	                        }
	                    }, 1);
	                }
	            }
	        }
	    })
	], OpalSelect);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalSelect;


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 3:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

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
	__webpack_require__(65);
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(35);
	var OpalSelectOption = (function (_super) {
	    __extends(OpalSelectOption, _super);
	    function OpalSelectOption() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalSelectOption.prototype.initialize = function () {
	        cellx_1.define(this, {
	            _tabIndex: function () {
	                return this.props['disabled'] ? -1 : this.props['tabIndex'];
	            }
	        });
	    };
	    OpalSelectOption.prototype.ready = function () {
	        var props = this.props;
	        if (props['value'] === null) {
	            props['value'] = props['text'];
	        }
	    };
	    OpalSelectOption.prototype.propertyChanged = function (name, value) {
	        if (name == 'focused') {
	            if (value) {
	                this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
	                this.focus();
	            }
	            else {
	                this._documentKeyDownListening.stop();
	                this.blur();
	            }
	        }
	    };
	    OpalSelectOption.prototype._onDocumentKeyDown = function (evt) {
	        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
	            evt.preventDefault();
	            if (!this.props['disabled']) {
	                this._click();
	            }
	        }
	    };
	    OpalSelectOption.prototype._click = function () {
	        this.emit(this.toggle() ? 'select' : 'deselect');
	    };
	    Object.defineProperty(OpalSelectOption.prototype, "value", {
	        get: function () {
	            var props = this.props;
	            return props['value'] === null ? props['text'] : props['value'];
	        },
	        set: function (value) {
	            this.props['value'] = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(OpalSelectOption.prototype, "text", {
	        get: function () {
	            return this.props['text'].trim() || ' ';
	        },
	        set: function (text) {
	            this.props['text'] = text;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(OpalSelectOption.prototype, "selected", {
	        get: function () {
	            return this.props['selected'];
	        },
	        set: function (selected) {
	            this.props['selected'] = selected;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(OpalSelectOption.prototype, "disabled", {
	        get: function () {
	            return this.props['disabled'];
	        },
	        set: function (disabled) {
	            this.props['disabled'] = disabled;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OpalSelectOption.prototype.select = function () {
	        if (!this.props['selected']) {
	            this.props['selected'] = true;
	            return true;
	        }
	        return false;
	    };
	    OpalSelectOption.prototype.deselect = function () {
	        if (this.props['selected']) {
	            this.props['selected'] = false;
	            return true;
	        }
	        return false;
	    };
	    OpalSelectOption.prototype.toggle = function (value) {
	        return (this.props['selected'] = value === undefined ? !this.props['selected'] : value);
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
	        this.props['disabled'] = false;
	        return this;
	    };
	    OpalSelectOption.prototype.disable = function () {
	        this.props['disabled'] = true;
	        return this;
	    };
	    return OpalSelectOption;
	}(rionite_1.Component));
	OpalSelectOption = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-select-option',
	        props: {
	            value: String,
	            text: { type: String, required: true },
	            selected: false,
	            tabIndex: 0,
	            focused: false,
	            disabled: false
	        },
	        bemlTemplate: template,
	        events: {
	            control: {
	                focusin: function () {
	                    this.props['focused'] = true;
	                },
	                focusout: function () {
	                    this.props['focused'] = false;
	                },
	                click: function () {
	                    this._click();
	                }
	            }
	        }
	    })
	], OpalSelectOption);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalSelectOption;


/***/ },

/***/ 19:
/***/ function(module, exports) {

	"use strict";
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
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = isEqualArray;


/***/ },

/***/ 34:
/***/ function(module, exports) {

	module.exports = "rt-content (select=.opal-select__button, cloning=no) {\nopal-button/button (\nview-type={props.viewType},\nsize={props.size},\ncheckable,\ntab-index={props.tabIndex},\ndisabled={props.disabled}\n) {\ntemplate (is=rt-if-then, if=props.text, rt-silent) { '{props.text}' }\ntemplate (is=rt-if-else, if=props.text, rt-silent) { '{text}' }\n' '\nsvg/icon-chevron-down (viewBox=0 0 32 18) { use (xlink:href=#opal-components__icon-chevron-down) }\n}\n}\nrt-content (select=.opal-select__menu, cloning=no) {\nopal-dropdown/menu (auto-closing) {\nrt-content (select=.opal-select__menu-content, cloning=no) {\ntemplate (is=rt-if-then, if=props.datalist) {\ndiv (class=opal-select__menu-content) {\ntemplate (is=rt-if-then, if=dataList.length) {\ntemplate (is=rt-repeat, for=item of dataList) {\nopal-select-option/option (\nvalue='{item |key(_viewModelItemValueFieldName) }',\ntext='{item |key(_viewModelItemTextFieldName) }'\n)\n}\nrt-content/new-input-container (select=.opal-select__new-input)\n}\ntemplate (is=rt-if-else, if=dataList.length, rt-silent) {\nopal-loader/menu-loader (shown)\n}\n}\n}\ntemplate (is=rt-if-else, if=props.datalist) {\ndiv (class=opal-select__menu-content) {\nrt-content/options (select=opal-select-option)\n}\n}\n}\n}\n}"

/***/ },

/***/ 35:
/***/ function(module, exports) {

	module.exports = "span/control (tabindex={_tabIndex}) {\nrt-content/content (cloning=no) { '{props.text}' }\n}"

/***/ },

/***/ 64:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-select{position:relative;display:inline-block;vertical-align:middle}.opal-select .opal-select__button{display:block;min-width:100%}.opal-select .opal-select__icon-chevron-down{display:inline-block;margin-left:.25em;width:14px;height:14px;vertical-align:middle;transition:transform .1s linear;fill:currentColor}.opal-select .opal-select__button[size=s] .opal-select__icon-chevron-down{width:12px;height:12px}.opal-select .opal-select__button[checked] .opal-select__icon-chevron-down{-ms-transform:scaleY(-1);transform:scaleY(-1)}.opal-select .opal-select__new-input{display:block;margin:10px;width:auto}.opal-select .opal-popover{padding:6px 0;min-width:100px}.opal-select .opal-filtered-list .opal-filtered-list__query-input{margin:10px}.opal-select .opal-loaded-list{height:300px}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 65:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-select-option{display:block}.opal-select-option .opal-select-option__control{position:relative;display:block;padding:7px 22px;background:#fff;color:#000;text-align:left;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.opal-select-option .opal-select-option__content{position:relative;display:block}.opal-select-option .opal-select-option__control:hover{background:#e6e6e6}.opal-select-option .opal-select-option__control:focus{outline:none}.opal-select-option .opal-select-option__control:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-select-option .opal-select-option__control:active{background:#ccc}.opal-select-option[selected] .opal-select-option__control{color:#0d87f2}.opal-select-option[disabled]{opacity:.5;pointer-events:none}.opal-select-option[disabled] .opal-select-option__control{cursor:default}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 77:
/***/ function(module, exports) {

	(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 18\" id=\"opal-components__icon-chevron-down\"><path stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" fill=\"none\" d=\"M2 2l14 14L30 2\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }

/******/ })
});
;