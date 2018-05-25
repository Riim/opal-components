(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("@riim/gettext"), require("cellx"), require("cellx-decorators"), require("rionite"), require("@riim/opal-select"), require("@riim/opal-loaded-list"), require("@riim/opal-popover"), require("@riim/opal-loader"), require("@riim/opal-sign-button"), require("@riim/opal-filtered-list"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "@riim/gettext", "cellx", "cellx-decorators", "rionite", "@riim/opal-select", "@riim/opal-loaded-list", "@riim/opal-popover", "@riim/opal-loader", "@riim/opal-sign-button", "@riim/opal-filtered-list"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-tag-select"] = factory(require("reflect-metadata"), require("@riim/gettext"), require("cellx"), require("cellx-decorators"), require("rionite"), require("@riim/opal-select"), require("@riim/opal-loaded-list"), require("@riim/opal-popover"), require("@riim/opal-loader"), require("@riim/opal-sign-button"), require("@riim/opal-filtered-list"));
	else
		root["@riim/opal-tag-select"] = factory(root["reflect-metadata"], root["@riim/gettext"], root["cellx"], root["cellx-decorators"], root["rionite"], root["@riim/opal-select"], root["@riim/opal-loaded-list"], root["@riim/opal-popover"], root["@riim/opal-loader"], root["@riim/opal-sign-button"], root["@riim/opal-filtered-list"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__18__, __WEBPACK_EXTERNAL_MODULE__45__, __WEBPACK_EXTERNAL_MODULE__132__, __WEBPACK_EXTERNAL_MODULE__140__, __WEBPACK_EXTERNAL_MODULE__153__, __WEBPACK_EXTERNAL_MODULE__197__) {
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 234);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__132__;

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__140__;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__153__;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__197__;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(197);
__webpack_require__(45);
__webpack_require__(140);
__webpack_require__(132);
__webpack_require__(18);
__webpack_require__(153);
__webpack_require__(4);
__export(__webpack_require__(235));


/***/ }),

/***/ 235:
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
var cellx_1 = __webpack_require__(9);
var cellx_decorators_1 = __webpack_require__(10);
var rionite_1 = __webpack_require__(11);
__webpack_require__(236);
var template_nelm_1 = __webpack_require__(237);
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
    OpalTagSelect.prototype._isItemDisabled = function (item) {
        return this.paramDisabled || item[this._viewModelItemDisabledFieldName];
    };
    OpalTagSelect.prototype.initialize = function () {
        var _this = this;
        var dataListKeypath = this.paramDataListKeypath;
        if (dataListKeypath || (this.$specifiedParams && this.$specifiedParams.has('dataList'))) {
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
    OpalTagSelect.prototype.ready = function () {
        this.select = this.$('select');
    };
    OpalTagSelect.prototype.elementAttached = function () {
        this.listenTo('control', 'click', this._onControlClick);
        this.listenTo(this.select, {
            input: this._onSelectInput,
            change: this._onSelectChange,
            select: this._onSelectSelect,
            deselect: this._onSelectDeselect
        });
    };
    OpalTagSelect.prototype._onControlClick = function (evt) {
        var selectEl = this.select.element;
        var node = evt.target;
        if (node != selectEl) {
            var control = this.$('control');
            do {
                if (node == control) {
                    this.select.toggle();
                    break;
                }
                node = node.parentNode;
            } while (node != selectEl);
        }
    };
    OpalTagSelect.prototype._onSelectInput = function () {
        this.select.close();
        this.emit('input');
        return false;
    };
    OpalTagSelect.prototype._onSelectChange = function () {
        this.emit('change');
        return false;
    };
    OpalTagSelect.prototype._onSelectSelect = function () {
        this.select.close();
        return false;
    };
    OpalTagSelect.prototype._onSelectDeselect = function () {
        this.select.close();
        return false;
    };
    OpalTagSelect.prototype.open = function () {
        return this.select.open();
    };
    OpalTagSelect.prototype.close = function () {
        return this.select.close();
    };
    OpalTagSelect.prototype.toggle = function () {
        return this.select.toggle();
    };
    OpalTagSelect.prototype.focus = function () {
        this.select.focus();
        return this;
    };
    OpalTagSelect.prototype.blur = function () {
        this.select.blur();
        return this;
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
            elementIs: 'OpalTagSelect',
            template: template_nelm_1.default,
            domEvents: {
                tag: {
                    click: function (evt, context, tag) {
                        if (tag != evt.target) {
                            return;
                        }
                        this.emit('tag-click', {
                            value: context.tag[this._viewModelItemValueFieldName]
                        });
                    }
                },
                btnRemoveTag: {
                    click: function (evt, context) {
                        this.viewModel.remove(context.tag);
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

/***/ 236:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTagSelect{display:inline}.OpalTagSelect .OpalTagSelect__tag{position:relative;top:-1px;display:inline-block;margin:2px 40px 2px 0;padding:0 10px 0 18px;border-top-left-radius:16px;border-bottom-left-radius:16px;background:#5b7d9a;color:#fff;vertical-align:middle;text-decoration:none;text-shadow:none;font:16px/32px Verdana,Geneva,sans-serif;font-weight:400;cursor:default}.OpalTagSelect .OpalTagSelect__tag[disabled]{margin-right:8px;padding-right:18px;border-top-right-radius:16px;border-bottom-right-radius:16px}.OpalTagSelect .OpalTagSelect__tag[disabled] .OpalTagSelect__btnRemoveTag{display:none}.OpalTagSelect .OpalTagSelect__btnRemoveTag{position:absolute;top:0;bottom:0;left:100%;display:block;padding:0;width:32px;border:0;border-radius:0;border-top-right-radius:16px;border-bottom-right-radius:16px;background:#516270;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4);cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalTagSelect .OpalTagSelect__btnRemoveTag::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#fff;content:''}.OpalTagSelect .OpalTagSelect__btnRemoveTag:hover{background:#5b7d9a}.OpalTagSelect .OpalTagSelect__btnRemoveTag:focus{outline:0}body:not(._noFocusHighlight) .OpalTagSelect .OpalTagSelect__btnRemoveTag:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.OpalTagSelect .OpalTagSelect__btnRemoveTag:active{background:#43484c}.OpalTagSelect .OpalTagSelect__control{display:inline-block;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalTagSelect .OpalTagSelect__placeholder{margin-right:8px}.OpalTagSelect .OpalTagSelect__button{margin:1px 0}.OpalTagSelect[view_type=primary] .OpalTagSelect__tag{background:#0083f5}.OpalTagSelect[view_type=primary] .OpalTagSelect__btnRemoveTag{background:#0a67b8}.OpalTagSelect[view_type=primary] .OpalTagSelect__btnRemoveTag:hover{background:#0083f5}.OpalTagSelect[view_type=primary] .OpalTagSelect__btnRemoveTag:active{background:#0e4b81}.OpalTagSelect[view_type=danger] .OpalTagSelect__tag{background:#fa0f3e}.OpalTagSelect[view_type=danger] .OpalTagSelect__btnRemoveTag{background:#c70f34}.OpalTagSelect[view_type=danger] .OpalTagSelect__btnRemoveTag:hover{background:#fa0f3e}.OpalTagSelect[view_type=danger] .OpalTagSelect__btnRemoveTag:active{background:#90142c}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nspan/tags {\n@Repeat (for=tag in viewModel, trackBy={_viewModelItemValueFieldName}) {\nspan/tag (disabled='{tag |_isItemDisabled }') {\n'{tag |key(_viewModelItemTextFieldName) }'\nbutton/btnRemoveTag\n}\n}\n}\nspan/control {\n@IfThen (isPlaceholderShown) {\nspan/placeholder {\n'{paramPlaceholder}'\n}\n}\nOpalSelect/select (\nviewType=clean,\nmultiple,\ndataListKeypath={_dataListKeypathParam},\ndataListItemSchema={paramDataListItemSchema |dump },\nvalue={paramValue},\nviewModel={viewModel},\nviewModelItemSchema={paramViewModelItemSchema |dump },\naddNewItem={paramAddNewItem},\nfocused={paramFocused}\n) {\nOpalSignButton/button (\nclass=OpalSelect__button,\nsign=plus,\nviewType={paramViewType},\ncheckable,\ntabIndex={paramTabIndex},\ndisabled={paramDisabled}\n)\nRnSlot (class=OpalSelect__menuSlot, for=OpalSelect__menu) {\nOpalPopover/menu (\nclass=OpalSelect__menu,\nposition={paramPopoverPosition},\nautoClosing\n) {\nRnSlot (for=OpalSelect__menuHeader)\nRnSlot (for=OpalSelect__menuContent) {\n@IfThen (_dataListKeypathParam) {\ndiv (class=OpalSelect__menuContent) {\n@IfThen (dataList) {\n@Repeat (\nfor=item in dataList,\ntrackBy={_dataListItemValueFieldName}\n) {\nOpalSelectOption/dataListSelectOption, selectOption (\nvalue='{item |key(_dataListItemValueFieldName) }',\ntext='{item |key(_dataListItemTextFieldName) }',\nsubtext='{item |key(_dataListItemSubtextFieldName) }',\ndisabled='{item |key(_dataListItemDisabledFieldName) }'\n)\n}\nRnSlot (\nclass=OpalSelect__newItemInputSlot,\nfor=OpalSelect__newItemInput\n)\n}\n@IfElse (dataList) {\nOpalLoader/menuLoader (shown)\n}\n}\n}\n@IfElse (_dataListKeypathParam) {\nOpalFilteredList/menuFilteredList (\nclass=OpalSelect__menuContent OpalSelect__filteredList\n) {\nRnSlot (\nclass=OpalFilteredList__queryInputSlot,\nfor=OpalFilteredList__queryInput\n)\nOpalLoadedList/menuLoadedList (\nclass=OpalSelect__loadedList OpalFilteredList__list,\ndataProvider={dataProvider}\n) {\nOpalSelectOption/loadedListSelectOption, selectOption (\nclass=OpalLoadedList__listItem,\nvalue='{$item |key(_dataListItemValueFieldName) }',\ntext='{$item |key(_dataListItemTextFieldName) }',\nsubtext='{$item |key(_dataListItemSubtextFieldName) }'\n)\n}\n}\n}\n}\nRnSlot (for=OpalSelect__menuFooter)\n}\n}\n}\n}\n}");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__45__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ })

/******/ });
});