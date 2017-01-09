(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-tag-select"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-tag-select"] = factory(root["rionite"], root["cellx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	__webpack_require__(75);
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var template = __webpack_require__(29);
	var defaultVMItemSchema = { value: 'value', text: 'text', disabled: 'disabled' };
	var OpalTagSelect = (function (_super) {
	    __extends(OpalTagSelect, _super);
	    function OpalTagSelect() {
	        return _super.apply(this, arguments) || this;
	    }
	    OpalTagSelect.prototype.initialize = function () {
	        var props = this.props;
	        var dataList = props['datalist'];
	        var dataProvider = props['dataprovider'];
	        var vm = props['viewModel'];
	        this._dataListParam = (dataList && 'dataList');
	        this._dataProviderParam = (dataProvider && 'dataProvider');
	        this._viewModelParam = (vm && 'viewModel');
	        var getDataList;
	        if (dataList) {
	            getDataList = Function("return this." + dataList + ";");
	        }
	        var context = this.ownerComponent || window;
	        cellx_1.define(this, {
	            dataList: dataList && function () { return getDataList.call(context); },
	            dataProvider: dataProvider && Function("return this." + dataProvider + ";").call(context),
	            viewModel: vm && Function("return this." + vm + ";").call(context),
	            placeholderShown: function () {
	                return !!this.props['placeholder'] && (!this.viewModel || !this.viewModel.length);
	            }
	        });
	        var vmItemSchema = props['viewModelItemSchema'];
	        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
	        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
	        this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;
	    };
	    OpalTagSelect.prototype.ready = function () {
	        var select = this.$('select');
	        this.dataList = select.dataList;
	        this.viewModel = select.viewModel;
	    };
	    OpalTagSelect.prototype._onBtnRemoveTagClick = function (evt, btn) {
	        this.viewModel.remove(this.viewModel.get(btn.dataset['tagValue'], this._viewModelItemValueFieldName));
	        this.emit('change');
	    };
	    return OpalTagSelect;
	}(rionite_1.Component));
	OpalTagSelect = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-tag-select',
	        props: {
	            type: String,
	            datalist: { type: String, readonly: true },
	            // необязательный, так как может указываться на передаваемом opal-loaded-list
	            dataprovider: { type: String, readonly: true },
	            value: Object,
	            viewModel: { type: String, readonly: true },
	            viewModelItemSchema: { default: defaultVMItemSchema, readonly: true },
	            placeholder: rionite_1.getText.t('Не выбрано'),
	            allowInput: false,
	            popoverTo: 'bottom',
	            disabled: false
	        },
	        template: new rionite_1.ComponentTemplate(template),
	        events: {
	            control: {
	                click: function (evt, control) {
	                    var select = this.$('select');
	                    var selectEl = select.element;
	                    for (var node = evt.target; node != selectEl; node = node.parentNode) {
	                        if (node == control) {
	                            select.toggle();
	                            break;
	                        }
	                    }
	                }
	            },
	            select: {
	                confirminput: function () {
	                    var select = this.$('select');
	                    if (select.props['allowInput']) {
	                        select.close();
	                    }
	                },
	                // не соединять on-select и on-deselect в on-change,
	                // тк on-change на opal-select[multiple] генерируется только при закрытии
	                select: function () {
	                    this.$('select').close();
	                },
	                deselect: function () {
	                    this.$('select').close();
	                }
	            }
	        }
	    })
	], OpalTagSelect);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = OpalTagSelect;


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 29:
/***/ function(module, exports) {

	module.exports = "<span class=\"opal-tag-select__tags\"> <template is=\"rt-if-then\" if=\"viewModel.length\" rt-silent=\"\"> <template is=\"rt-repeat\" for=\"tag of viewModel\" track-by=\"{_viewModelItemValueFieldName}\" rt-silent=\"\"> <span class=\"opal-tag-select__tag\" data-value=\"{tag |key(_viewModelItemValueFieldName) }\" disabled=\"{tag |key(_viewModelItemDisabledFieldName) }\">{ tag |key(_viewModelItemTextFieldName) }<button class=\"opal-tag-select__btn-remove-tag\" data-tag-value=\"{tag |key(_viewModelItemValueFieldName) }\" rt-click=\"_onBtnRemoveTagClick\"></button></span> </template> </template> </span> <span class=\"opal-tag-select__control\"> <template is=\"rt-if-then\" if=\"placeholderShown\" rt-silent=\"\"> <span class=\"opal-tag-select__placeholder\">{props.placeholder}</span> </template> {{block select }} <opal-select class=\"opal-tag-select__select\" datalist=\"{_dataListParam}\" value=\"{props.value}\" view-model=\"{_viewModelParam}\" view-model-item-schema=\"{props.viewModelItemSchema |json }\" multiple=\"\" allow-input=\"{props.allowInput}\"> {{block select_button }} <opal-sign-button class=\"opal-tag-select__select-button opal-select__button\" sign=\"plus\" checkable=\"\"></opal-sign-button> {{/block}} {{block select_menu }} <opal-popover class=\"opal-select__menu\" to=\"{props.popoverTo}\" auto-closing=\"\"> <rt-content select=\".opal-tag-select__menu-content\"> <template is=\"rt-if-then\" if=\"props.datalist\"> <div class=\"opal-select__menu-content\"> <template is=\"rt-if-then\" if=\"dataList.length\"> <template is=\"rt-repeat\" for=\"item of dataList\"> {{block select_option }} <opal-select-option value=\"{item.value}\" text=\"{item.text}\"></opal-select-option> {{/block}} </template> {{block select_new }} <rt-content class=\"opal-select__new-input-container\" select=\".opal-select__new-input\">{{block new_input }}{{/block}}</rt-content> {{/block}} </template> <template is=\"rt-if-else\" if=\"dataList.length\" rt-silent=\"\"> {{block select_loader }} <opal-loader shown=\"\"></opal-loader> {{/block}} </template> </div> </template> <template is=\"rt-if-else\" if=\"props.datalist\"> <opal-filtered-list class=\"opal-tag-select__menu-content opal-select__filtered-list\"> <opal-loaded-list class=\"opal-select__loaded-list opal-filtered-list__loaded-list\" dataprovider=\"{_dataProviderParam}\"> <opal-select-option value=\"{$item.value}\" text=\"{$item.text}\"></opal-select-option> </opal-loaded-list> </opal-filtered-list> </template> </rt-content> </opal-popover> {{/block}} </opal-select> {{/block}} </span>"

/***/ },

/***/ 75:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-tag-select{display:inline-block}.opal-tag-select .opal-tag-select__tag{position:relative;top:-1px;display:inline-block;margin:2px 35px 2px 0;padding:0 10px 0 16px;border-top-left-radius:16px;border-bottom-left-radius:16px;background:#5b7d9a;color:#fff;vertical-align:middle;text-decoration:none;text-shadow:none;font:16px/32px Verdana,Geneva,sans-serif;font-weight:400}.opal-tag-select .opal-tag-select__btn-remove-tag{position:absolute;top:0;bottom:0;left:100%;display:block;padding:0;width:32px;border:0;border-top-right-radius:16px;border-bottom-right-radius:16px;background:#516270;box-shadow:inset 1px 0 rgba(0,0,0,.4);cursor:pointer;transition:background .1s}.opal-tag-select .opal-tag-select__btn-remove-tag::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#fff;content:''}.opal-tag-select .opal-tag-select__btn-remove-tag:hover{background:#5b7d9a}.opal-tag-select .opal-tag-select__btn-remove-tag:focus{outline:none}body:not(._no-focus-highlight) .opal-tag-select .opal-tag-select__btn-remove-tag:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.opal-tag-select .opal-tag-select__btn-remove-tag:active{background:#43484c}.opal-tag-select .opal-tag-select__tag[disabled]{margin-right:3px;padding-right:16px;border-top-right-radius:16px;border-bottom-right-radius:16px}.opal-tag-select .opal-tag-select__tag[disabled] .opal-tag-select__btn-remove-tag{display:none}.opal-tag-select .opal-tag-select__control{display:inline-block;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-tag-select[type=action] .opal-tag-select__tag{background:#0083f5}.opal-tag-select[type=action] .opal-tag-select__btn-remove-tag{background:#0a67b8}.opal-tag-select[type=action] .opal-tag-select__btn-remove-tag:hover{background:#0083f5}.opal-tag-select[type=action] .opal-tag-select__btn-remove-tag:active{background:#0e4b81}.opal-tag-select[type=danger] .opal-tag-select__tag{background:#fa0f3e}.opal-tag-select[type=danger] .opal-tag-select__btn-remove-tag{background:#c70f34}.opal-tag-select[type=danger] .opal-tag-select__btn-remove-tag:hover{background:#fa0f3e}.opal-tag-select[type=danger] .opal-tag-select__btn-remove-tag:active{background:#90142c}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ }

/******/ })
});
;