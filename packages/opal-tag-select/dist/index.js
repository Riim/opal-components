(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-popover"), require("@riim/opal-loader"), require("cellx"), require("@riim/opal-filtered-list"), require("@riim/gettext"), require("@riim/opal-sign-button"), require("@riim/opal-loaded-list"), require("@riim/opal-select"), require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-popover", "@riim/opal-loader", "cellx", "@riim/opal-filtered-list", "@riim/gettext", "@riim/opal-sign-button", "@riim/opal-loaded-list", "@riim/opal-select", "rionite", "reflect-metadata", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-tag-select"] = factory(require("@riim/opal-popover"), require("@riim/opal-loader"), require("cellx"), require("@riim/opal-filtered-list"), require("@riim/gettext"), require("@riim/opal-sign-button"), require("@riim/opal-loaded-list"), require("@riim/opal-select"), require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else
		root["@riim/opal-tag-select"] = factory(root["@riim/opal-popover"], root["@riim/opal-loader"], root["cellx"], root["@riim/opal-filtered-list"], root["@riim/gettext"], root["@riim/opal-sign-button"], root["@riim/opal-loaded-list"], root["@riim/opal-select"], root["rionite"], root["reflect-metadata"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2L3N__, __WEBPACK_EXTERNAL_MODULE_BLMt__, __WEBPACK_EXTERNAL_MODULE_P7z7__, __WEBPACK_EXTERNAL_MODULE_Y1_I__, __WEBPACK_EXTERNAL_MODULE_eaeG__, __WEBPACK_EXTERNAL_MODULE_ej3F__, __WEBPACK_EXTERNAL_MODULE_ioIi__, __WEBPACK_EXTERNAL_MODULE_jL6t__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_vA_G__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "tHGz");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2L3N":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2L3N__;

/***/ }),

/***/ "BLMt":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_BLMt__;

/***/ }),

/***/ "P7z7":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_P7z7__;

/***/ }),

/***/ "Y1+I":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Y1_I__;

/***/ }),

/***/ "aUKo":
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
var OpalTagSelect_1;
Object.defineProperty(exports, "__esModule", { value: true });
const gettext_1 = __webpack_require__("eaeG");
const opal_select_1 = __webpack_require__("jL6t");
const cellx_1 = __webpack_require__("P7z7");
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("eG1m");
const template_rnt_1 = __webpack_require__("vy6a");
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
let OpalTagSelect = OpalTagSelect_1 = class OpalTagSelect extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.viewModel = new cellx_1.ObservableList();
        // ;;; Плейсхолдер тегселекта.
        // ;;; Можно перевести как призыв к выбору -- Select (англ.).
        this.placeholder = gettext_1.pt('OpalTagSelect#placeholder', 'Не выбрано');
        this.popoverPosition = 'bottom';
        this.tabIndex = 0;
        this.focused = false;
        this.disabled = false;
        this.validator = null;
    }
    get value() {
        return this.viewModel.map(item => item[this._viewModelItemValueFieldName]);
    }
    get placeholderShown() {
        return !!this.placeholder && !this.viewModel.length;
    }
    _isItemDisabled(item) {
        return this.disabled || item[this._viewModelItemDisabledFieldName];
    }
    initialize() {
        let dataListKeypath = this.dataListKeypath;
        if (dataListKeypath || (this.$specifiedParams && this.$specifiedParams.has('dataList'))) {
            cellx_1.define(this, 'dataList', dataListKeypath
                ? new cellx_1.Cell(Function(`return this.${dataListKeypath};`), {
                    context: this.ownerComponent || window
                })
                : () => this.paramDataList);
            this._selectDataListKeypath = 'dataList';
        }
        else {
            this.dataList = null;
            this._selectDataListKeypath = null;
        }
        let dataListItemSchema = this.dataListItemSchema;
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
        this._viewModelItemDisabledFieldName =
            vmItemSchema.disabled || defaultVMItemSchema.disabled;
    }
    ready() {
        this.select = this.$('select');
    }
    _onDisabledChange(evt) {
        if (evt.data.value) {
            this.close();
        }
    }
    _onSelectInput() {
        this.select.close();
        this.emit(OpalTagSelect_1.EVENT_INPUT);
        return false;
    }
    _onSelectChange() {
        this.emit(OpalTagSelect_1.EVENT_CHANGE);
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
OpalTagSelect.EVENT_CHANGE = Symbol('change');
OpalTagSelect.EVENT_INPUT = Symbol('input');
OpalTagSelect.EVENT_TAG_CLICK = Symbol('tag-click');
OpalTagSelect.defaultDataListItemSchema = defaultDataListItemSchema;
OpalTagSelect.defaultViewModelItemSchema = defaultVMItemSchema;
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTagSelect.prototype, "viewType", void 0);
__decorate([
    rionite_1.Param('dataList'),
    __metadata("design:type", Object)
], OpalTagSelect.prototype, "paramDataList", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", String)
], OpalTagSelect.prototype, "dataListKeypath", void 0);
__decorate([
    rionite_1.Param({
        type: eval,
        default: defaultDataListItemSchema,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalTagSelect.prototype, "dataListItemSchema", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalTagSelect.prototype, "dataProvider", void 0);
__decorate([
    rionite_1.Param('value', { type: eval }),
    __metadata("design:type", Array)
], OpalTagSelect.prototype, "paramValue", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalTagSelect.prototype, "viewModel", void 0);
__decorate([
    rionite_1.Param({
        type: eval,
        default: defaultVMItemSchema,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalTagSelect.prototype, "viewModelItemSchema", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Function)
], OpalTagSelect.prototype, "addNewItem", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTagSelect.prototype, "placeholder", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTagSelect.prototype, "popoverPosition", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTagSelect.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTagSelect.prototype, "focused", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTagSelect.prototype, "disabled", void 0);
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
__decorate([
    rionite_1.Listen('change:disabled'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpalTagSelect.prototype, "_onDisabledChange", null);
__decorate([
    rionite_1.Listen(opal_select_1.OpalSelect.EVENT_INPUT, '@select'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], OpalTagSelect.prototype, "_onSelectInput", null);
__decorate([
    rionite_1.Listen(opal_select_1.OpalSelect.EVENT_CHANGE, '@select'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], OpalTagSelect.prototype, "_onSelectChange", null);
__decorate([
    rionite_1.Listen(opal_select_1.OpalSelect.EVENT_SELECT, '@select'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], OpalTagSelect.prototype, "_onSelectSelect", null);
__decorate([
    rionite_1.Listen(opal_select_1.OpalSelect.EVENT_DESELECT, '@select'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], OpalTagSelect.prototype, "_onSelectDeselect", null);
OpalTagSelect = OpalTagSelect_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTagSelect',
        template: template_rnt_1.default,
        domEvents: {
            tag: {
                click(evt, context, tag) {
                    if (tag != evt.target) {
                        return;
                    }
                    this.emit(OpalTagSelect_1.EVENT_TAG_CLICK, {
                        value: context.tag[this._viewModelItemValueFieldName]
                    });
                }
            },
            btnRemoveTag: {
                click(_evt, context) {
                    this.viewModel.remove(context.tag);
                    this.emit(OpalTagSelect_1.EVENT_CHANGE);
                }
            },
            control: {
                click(evt) {
                    if (this.disabled) {
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
            }
        }
    })
], OpalTagSelect);
exports.OpalTagSelect = OpalTagSelect;


/***/ }),

/***/ "eG1m":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTagSelect{display:inline}.OpalTagSelect .OpalTagSelect__tag{position:relative;top:-1px;display:inline-block;margin:2px 40px 2px 0;padding:0 10px 0 18px;border-top-left-radius:16px;border-bottom-left-radius:16px;background:#62798d;color:#fff;vertical-align:middle;text-decoration:none;text-shadow:none;font:16px/32px Verdana,Geneva,sans-serif;font-weight:400;cursor:default}.OpalTagSelect .OpalTagSelect__tag[disabled]{margin-right:8px;padding-right:18px;border-top-right-radius:16px;border-bottom-right-radius:16px}.OpalTagSelect .OpalTagSelect__tag[disabled] .OpalTagSelect__btnRemoveTag{display:none}.OpalTagSelect .OpalTagSelect__btnRemoveTag{position:absolute;top:0;bottom:0;left:100%;display:block;padding:0;width:32px;border:0;border-radius:0;border-top-right-radius:16px;border-bottom-right-radius:16px;background:#4b5d6c;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4);cursor:pointer;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear}.OpalTagSelect .OpalTagSelect__btnRemoveTag::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:12px;height:2px;background:#fff;content:''}.OpalTagSelect .OpalTagSelect__btnRemoveTag:hover{background:#62798d}.OpalTagSelect .OpalTagSelect__btnRemoveTag:focus{outline:0}body:not(._noFocusHighlight) .OpalTagSelect .OpalTagSelect__btnRemoveTag:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.OpalTagSelect .OpalTagSelect__btnRemoveTag:active{background:#3d4b57}.OpalTagSelect .OpalTagSelect__control{display:inline-block;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalTagSelect .OpalTagSelect__placeholder{margin-right:8px}.OpalTagSelect .OpalTagSelect__button{margin:1px 0}.OpalTagSelect .OpalTagSelect__menuLoader{border-top-width:70px;border-bottom-width:70px}.OpalTagSelect[view_type=primary] .OpalTagSelect__tag{background:#52abfa}.OpalTagSelect[view_type=primary] .OpalTagSelect__btnRemoveTag{background:#0887f7}.OpalTagSelect[view_type=primary] .OpalTagSelect__btnRemoveTag:hover{background:#52abfa}.OpalTagSelect[view_type=primary] .OpalTagSelect__btnRemoveTag:active{background:#066cc6}.OpalTagSelect[view_type=danger] .OpalTagSelect__tag{background:#f87b72}.OpalTagSelect[view_type=danger] .OpalTagSelect__btnRemoveTag{background:#f44034}.OpalTagSelect[view_type=danger] .OpalTagSelect__btnRemoveTag:hover{background:#f87b72}.OpalTagSelect[view_type=danger] .OpalTagSelect__btnRemoveTag:active{background:#a51309}.OpalTagSelect[disabled]{pointer-events:none}.OpalTagSelect[disabled] .OpalTagSelect__placeholder{opacity:.5}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "eaeG":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_eaeG__;

/***/ }),

/***/ "ej3F":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ej3F__;

/***/ }),

/***/ "ioIi":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ioIi__;

/***/ }),

/***/ "jL6t":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jL6t__;

/***/ }),

/***/ "tHGz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("Y1+I");
__webpack_require__("ioIi");
__webpack_require__("BLMt");
__webpack_require__("2L3N");
__webpack_require__("jL6t");
__webpack_require__("ej3F");
__webpack_require__("vA/G");
__export(__webpack_require__("aUKo"));


/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "vA/G":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vA_G__;

/***/ }),

/***/ "vy6a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span:tags {\n@Repeat (for=tag in viewModel, trackBy={_viewModelItemValueFieldName}) {\nspan:tag (disabled='{tag |_isItemDisabled }') {\n'{tag |key(_viewModelItemTextFieldName) }'\nbutton:btnRemoveTag (type=button)\n}\n}\n}\nspan:control {\nspan:placeholder (@if=placeholderShown) {\n'{placeholder}'\n}\nOpalSelect:select (\nviewType=clean,\nmultiple,\ndataListKeypath={_selectDataListKeypath},\ndataListItemSchema={dataListItemSchema |dump },\nvalue={paramValue},\nviewModel={viewModel},\nviewModelItemSchema={viewModelItemSchema |dump },\naddNewItem={addNewItem},\nfocused={focused}\n) {\nOpalSignButton:button (\nclass=OpalSelect__button,\nsign=plus,\nviewType={viewType},\ncheckable,\ntabIndex={tabIndex},\ndisabled={disabled}\n)\nRnSlot (class=OpalSelect__menuSlot, for=OpalSelect__menu) {\nOpalPopover:menu (\nclass=OpalSelect__menu,\nposition={popoverPosition},\ncloseOn=mousedown\n) {\nRnSlot (for=OpalSelect__menuHeader)\nRnSlot (for=OpalSelect__menuContent) {\ndiv (@if=_selectDataListKeypath, class=OpalSelect__menuContent) {\n@IfThen (dataList) {\n@Repeat (for=item in dataList, trackBy={_dataListItemValueFieldName}) {\nOpalSelectOption:dataListSelectOption:selectOption (\nvalue='{item |key(_dataListItemValueFieldName) }',\ntext='{item |key(_dataListItemTextFieldName) }',\nsubtext='{item |key(_dataListItemSubtextFieldName) }',\ndisabled='{item |key(_dataListItemDisabledFieldName) }'\n)\n}\nRnSlot (\nclass=OpalSelect__newItemInputSlot,\nfor=OpalSelect__newItemInput\n)\n}\n@IfElse (if=dataList, withUndefined) {\nOpalLoader:menuLoader (shown)\n}\n}\nOpalFilteredList:menuFilteredList (\n@unless=_selectDataListKeypath,\nclass=OpalSelect__menuContent OpalSelect__filteredList\n) {\nRnSlot (\nclass=OpalFilteredList__queryInputSlot,\nfor=OpalFilteredList__queryInput\n)\nOpalLoadedList:menuLoadedList (\nclass=OpalSelect__loadedList OpalFilteredList__list,\ndataProvider={dataProvider}\n) {\nOpalSelectOption:loadedListSelectOption:selectOption (\nclass=OpalLoadedList__listItem,\nvalue='{$item |key(_dataListItemValueFieldName) }',\ntext='{$item |key(_dataListItemTextFieldName) }',\nsubtext='{$item |key(_dataListItemSubtextFieldName) }'\n)\n}\n}\n}\nRnSlot (for=OpalSelect__menuFooter)\n}\n}\n}\n}");

/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ })

/******/ });
});