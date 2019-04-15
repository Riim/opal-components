(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-filtered-list"), require("@riim/opal-loaded-list"), require("@riim/opal-loader"), require("@riim/opal-popover"), require("@riim/opal-select"), require("@riim/opal-sign-button"), require("reflect-metadata"), require("@riim/gettext"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-filtered-list", "@riim/opal-loaded-list", "@riim/opal-loader", "@riim/opal-popover", "@riim/opal-select", "@riim/opal-sign-button", "reflect-metadata", "@riim/gettext", "cellx", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-tag-select"] = factory(require("@riim/opal-filtered-list"), require("@riim/opal-loaded-list"), require("@riim/opal-loader"), require("@riim/opal-popover"), require("@riim/opal-select"), require("@riim/opal-sign-button"), require("reflect-metadata"), require("@riim/gettext"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-tag-select"] = factory(root["@riim/opal-filtered-list"], root["@riim/opal-loaded-list"], root["@riim/opal-loader"], root["@riim/opal-popover"], root["@riim/opal-select"], root["@riim/opal-sign-button"], root["reflect-metadata"], root["@riim/gettext"], root["cellx"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__12__) {
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
__export(__webpack_require__(8));


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
const gettext_1 = __webpack_require__(9);
const cellx_1 = __webpack_require__(10);
const cellx_decorators_1 = __webpack_require__(11);
const rionite_1 = __webpack_require__(12);
__webpack_require__(13);
const template_rnt_1 = __webpack_require__(14);
const defaultDataListItemSchema = Object.freeze({
    value: 'id',
    text: 'name',
    subtext: 'parent',
    disabled: 'disabled'
});
const defaultVMItemSchema = Object.freeze({
    value: 'id',
    text: 'name',
    disabled: 'disabled'
});
let OpalTagSelect = class OpalTagSelect extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        // ;;; Плейсхолдер тегселекта.
        // ;;; Можно перевести как призыв к выбору -- Select (англ.).
        this.paramPlaceholder = gettext_1.pt('OpalTagSelect#paramPlaceholder', 'Не выбрано');
        this.paramPopoverPosition = 'bottom';
        this.paramTabIndex = 0;
        this.paramFocused = false;
        this.paramDisabled = false;
    }
    get value() {
        return this.viewModel.map(item => item[this._viewModelItemValueFieldName]);
    }
    get placeholderShown() {
        return !!this.paramPlaceholder && !this.viewModel.length;
    }
    _isItemDisabled(item) {
        return this.paramDisabled || item[this._viewModelItemDisabledFieldName];
    }
    initialize() {
        let dataListKeypath = this.paramDataListKeypath;
        if (dataListKeypath || (this.$specifiedParams && this.$specifiedParams.has('dataList'))) {
            cellx_1.define(this, 'dataList', dataListKeypath
                ? new cellx_1.Cell(Function(`return this.${dataListKeypath};`), {
                    context: this.ownerComponent || window
                })
                : () => this.paramDataList);
            this.dataProvider = null;
            this._dataListKeypathParam = 'dataList';
        }
        else {
            this.dataList = null;
            this.dataProvider = this.paramDataProvider;
            this._dataListKeypathParam = null;
        }
        let dataListItemSchema = this.paramDataListItemSchema;
        this._dataListItemValueFieldName =
            dataListItemSchema.value || defaultDataListItemSchema.value;
        this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
        this._dataListItemSubtextFieldName =
            dataListItemSchema.subtext || defaultDataListItemSchema.subtext;
        this._dataListItemDisabledFieldName =
            dataListItemSchema.disabled || defaultDataListItemSchema.disabled;
        this.viewModel = this.paramViewModel || new cellx_1.ObservableList();
        let vmItemSchema = this.paramViewModelItemSchema;
        let defaultVMItemSchema = this.constructor
            .defaultViewModelItemSchema;
        this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
        this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
        this._viewModelItemDisabledFieldName =
            vmItemSchema.disabled || defaultVMItemSchema.disabled;
    }
    ready() {
        this.select = this.$('select');
    }
    elementAttached() {
        this.listenTo(this, 'change:paramDisabled', this._onParamDisabledChange);
        this.listenTo('control', 'click', this._onControlClick);
        this.listenTo(this.select, {
            input: this._onSelectInput,
            change: this._onSelectChange,
            select: this._onSelectSelect,
            deselect: this._onSelectDeselect
        });
    }
    _onParamDisabledChange(evt) {
        if (evt.data.value) {
            this.close();
        }
    }
    _onControlClick(evt) {
        if (this.paramDisabled) {
            return;
        }
        let selectEl = this.select.element;
        let el = evt.target;
        if (el != selectEl) {
            let control = this.$('control');
            do {
                if (el == control) {
                    this.select.toggle();
                    break;
                }
                el = el.parentElement;
            } while (el && el != selectEl);
        }
    }
    _onSelectInput() {
        this.select.close();
        this.emit('input');
        return false;
    }
    _onSelectChange() {
        this.emit('change');
        return false;
    }
    _onSelectSelect() {
        this.select.close();
        return false;
    }
    _onSelectDeselect() {
        this.select.close();
        return false;
    }
    open() {
        return this.select.open();
    }
    close() {
        return this.select.close();
    }
    toggle() {
        return this.select.toggle();
    }
    focus() {
        this.select.focus();
        return this;
    }
    blur() {
        this.select.blur();
        return this;
    }
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
    rionite_1.Param({
        type: eval,
        default: defaultDataListItemSchema,
        readonly: true
    }),
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
    rionite_1.Param({
        type: eval,
        default: defaultVMItemSchema,
        readonly: true
    }),
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
], OpalTagSelect.prototype, "placeholderShown", null);
OpalTagSelect = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTagSelect',
        template: template_rnt_1.default,
        domEvents: {
            tag: {
                click(evt, context, tag) {
                    if (tag != evt.target) {
                        return;
                    }
                    this.emit('tag-click', {
                        value: context.tag[this._viewModelItemValueFieldName]
                    });
                }
            },
            btnRemoveTag: {
                click(_evt, context) {
                    this.viewModel.remove(context.tag);
                    this.emit('change');
                }
            }
        }
    })
], OpalTagSelect);
exports.OpalTagSelect = OpalTagSelect;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

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

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTagSelect{display:inline}.OpalTagSelect .OpalTagSelect__tag{position:relative;top:-1px;display:inline-block;margin:2px 40px 2px 0;padding:0 10px 0 18px;border-top-left-radius:16px;border-bottom-left-radius:16px;background:#5b7d9a;color:#fff;vertical-align:middle;text-decoration:none;text-shadow:none;font:16px/32px Verdana,Geneva,sans-serif;font-weight:400;cursor:default}.OpalTagSelect .OpalTagSelect__tag[disabled]{margin-right:8px;padding-right:18px;border-top-right-radius:16px;border-bottom-right-radius:16px}.OpalTagSelect .OpalTagSelect__tag[disabled] .OpalTagSelect__btnRemoveTag{display:none}.OpalTagSelect .OpalTagSelect__btnRemoveTag{position:absolute;top:0;bottom:0;left:100%;display:block;padding:0;width:32px;border:0;border-radius:0;border-top-right-radius:16px;border-bottom-right-radius:16px;background:#516270;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4);cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalTagSelect .OpalTagSelect__btnRemoveTag::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#fff;content:''}.OpalTagSelect .OpalTagSelect__btnRemoveTag:hover{background:#5b7d9a}.OpalTagSelect .OpalTagSelect__btnRemoveTag:focus{outline:0}body:not(._noFocusHighlight) .OpalTagSelect .OpalTagSelect__btnRemoveTag:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.OpalTagSelect .OpalTagSelect__btnRemoveTag:active{background:#43484c}.OpalTagSelect .OpalTagSelect__control{display:inline-block;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalTagSelect .OpalTagSelect__placeholder{margin-right:8px}.OpalTagSelect .OpalTagSelect__button{margin:1px 0}.OpalTagSelect[view_type=primary] .OpalTagSelect__tag{background:#0083f5}.OpalTagSelect[view_type=primary] .OpalTagSelect__btnRemoveTag{background:#0a67b8}.OpalTagSelect[view_type=primary] .OpalTagSelect__btnRemoveTag:hover{background:#0083f5}.OpalTagSelect[view_type=primary] .OpalTagSelect__btnRemoveTag:active{background:#0e4b81}.OpalTagSelect[view_type=danger] .OpalTagSelect__tag{background:#fa0f3e}.OpalTagSelect[view_type=danger] .OpalTagSelect__btnRemoveTag{background:#c70f34}.OpalTagSelect[view_type=danger] .OpalTagSelect__btnRemoveTag:hover{background:#fa0f3e}.OpalTagSelect[view_type=danger] .OpalTagSelect__btnRemoveTag:active{background:#90142c}.OpalTagSelect[disabled]{pointer-events:none}.OpalTagSelect[disabled] .OpalTagSelect__placeholder{opacity:.5}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span/tags {\n@Repeat (for=tag in viewModel, trackBy={_viewModelItemValueFieldName}) {\nspan/tag (disabled='{tag |_isItemDisabled }') {\n'{tag |key(_viewModelItemTextFieldName) }'\nbutton/btnRemoveTag\n}\n}\n}\nspan/control {\n@IfThen (placeholderShown) {\nspan/placeholder {\n'{paramPlaceholder}'\n}\n}\nOpalSelect/select (\nviewType=clean,\nmultiple,\ndataListKeypath={_dataListKeypathParam},\ndataListItemSchema={paramDataListItemSchema |dump },\nvalue={paramValue},\nviewModel={viewModel},\nviewModelItemSchema={paramViewModelItemSchema |dump },\naddNewItem={paramAddNewItem},\nfocused={paramFocused}\n) {\nOpalSignButton/button (\nclass=OpalSelect__button,\nsign=plus,\nviewType={paramViewType},\ncheckable,\ntabIndex={paramTabIndex},\ndisabled={paramDisabled}\n)\n@Slot (class=OpalSelect__menuSlot, for=OpalSelect__menu) {\nOpalPopover/menu (\nclass=OpalSelect__menu,\nposition={paramPopoverPosition},\ncloseOn=mousedown\n) {\n@Slot (for=OpalSelect__menuHeader)\n@Slot (for=OpalSelect__menuContent) {\n@IfThen (_dataListKeypathParam) {\ndiv (class=OpalSelect__menuContent) {\n@IfThen (dataList) {\n@Repeat (\nfor=item in dataList,\ntrackBy={_dataListItemValueFieldName}\n) {\nOpalSelectOption/dataListSelectOption, selectOption (\nvalue='{item |key(_dataListItemValueFieldName) }',\ntext='{item |key(_dataListItemTextFieldName) }',\nsubtext='{item |key(_dataListItemSubtextFieldName) }',\ndisabled='{item |key(_dataListItemDisabledFieldName) }'\n)\n}\n@Slot (\nclass=OpalSelect__newItemInputSlot,\nfor=OpalSelect__newItemInput\n)\n}\n@IfElse (if=dataList, withUndefined) {\nOpalLoader/menuLoader (shown)\n}\n}\n}\n@IfElse (_dataListKeypathParam) {\nOpalFilteredList/menuFilteredList (\nclass=OpalSelect__menuContent OpalSelect__filteredList\n) {\n@Slot (\nclass=OpalFilteredList__queryInputSlot,\nfor=OpalFilteredList__queryInput\n)\nOpalLoadedList/menuLoadedList (\nclass=OpalSelect__loadedList OpalFilteredList__list,\ndataProvider={dataProvider}\n) {\nOpalSelectOption/loadedListSelectOption, selectOption (\nclass=OpalLoadedList__listItem,\nvalue='{$item |key(_dataListItemValueFieldName) }',\ntext='{$item |key(_dataListItemTextFieldName) }',\nsubtext='{$item |key(_dataListItemSubtextFieldName) }'\n)\n}\n}\n}\n}\n@Slot (for=OpalSelect__menuFooter)\n}\n}\n}\n}");

/***/ })
/******/ ]);
});