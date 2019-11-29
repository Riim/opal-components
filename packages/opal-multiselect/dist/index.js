(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/platform"), require("@riim/opal-button"), require("@riim/opal-icon"), require("@riim/opal-text-input"), require("@riim/opal-loaded-list"), require("@riim/opal-select"), require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/platform", "@riim/opal-button", "@riim/opal-icon", "@riim/opal-text-input", "@riim/opal-loaded-list", "@riim/opal-select", "rionite", "reflect-metadata", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-multiselect"] = factory(require("@riim/platform"), require("@riim/opal-button"), require("@riim/opal-icon"), require("@riim/opal-text-input"), require("@riim/opal-loaded-list"), require("@riim/opal-select"), require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else
		root["@riim/opal-multiselect"] = factory(root["@riim/platform"], root["@riim/opal-button"], root["@riim/opal-icon"], root["@riim/opal-text-input"], root["@riim/opal-loaded-list"], root["@riim/opal-select"], root["rionite"], root["reflect-metadata"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4C_D__, __WEBPACK_EXTERNAL_MODULE_X6DG__, __WEBPACK_EXTERNAL_MODULE_Y0hN__, __WEBPACK_EXTERNAL_MODULE_hl6F__, __WEBPACK_EXTERNAL_MODULE_ioIi__, __WEBPACK_EXTERNAL_MODULE_jL6t__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_vA_G__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fCsG");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Yv1":
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
const opal_button_1 = __webpack_require__("X6DG");
const opal_select_1 = __webpack_require__("jL6t");
const opal_text_input_1 = __webpack_require__("hl6F");
const platform_1 = __webpack_require__("4C+D");
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("bJSy");
const template_rnt_1 = __webpack_require__("b1cT");
let OpalMultiselect = class OpalMultiselect extends opal_select_1.OpalSelect {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "multiple", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "dataProvider", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_queryInputClass", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    get nothingSelectedShown() {
        return !this.viewModel.length;
    }
    initialize() {
        super.initialize();
        if (!this.$specifiedParams || !this.$specifiedParams.has('dataProvider')) {
            throw new TypeError('Parameter "dataProvider" is required');
        }
        if (!this.dataProvider) {
            throw new TypeError('"dataProvider" is not defined');
        }
        if (!platform_1.isMobile) {
            this._queryInputClass = 'OpalSelect__focus';
        }
    }
};
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalMultiselect.prototype, "multiple", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalMultiselect.prototype, "dataProvider", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], OpalMultiselect.prototype, "nothingSelectedShown", null);
OpalMultiselect = __decorate([
    rionite_1.Component({
        elementIs: 'OpalMultiselect',
        template: opal_select_1.OpalSelect.template.extend(template_rnt_1.default),
        events: {
            queryInput: {
                [opal_text_input_1.OpalTextInput.EVENT_INPUT](evt) {
                    this.$('loadedList').query = evt.target.value;
                },
                [opal_text_input_1.OpalTextInput.EVENT_CLEAR]() {
                    this.$('loadedList').query = '';
                }
            },
            btnClose: {
                [opal_button_1.OpalButton.EVENT_CLICK]() {
                    this.close();
                    this.focus();
                }
            }
        },
        domEvents: {
            btnDeselectItem: {
                click(_evt, context) {
                    this.viewModel.remove(context.item);
                }
            }
        }
    })
], OpalMultiselect);
exports.OpalMultiselect = OpalMultiselect;


/***/ }),

/***/ "4C+D":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4C_D__;

/***/ }),

/***/ "X6DG":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X6DG__;

/***/ }),

/***/ "Y0hN":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Y0hN__;

/***/ }),

/***/ "b1cT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,,["menu"],[1,[[,"autoHeight","no"]]],[[1,,"div",["menuHeader"],,[[1,,"div",["menuHeaderLeftPart"],,[[1,,"OpalTextInput",["queryInput"],[,[[,"class","{_queryInputClass}"],[,"clearable",""],[,"placeholder","{'Поиск' |t }"]]],[[1,,"OpalIcon",["queryInputEndIcon"],[,[[,"class","OpalTextInput__endIcon"],[,"name","search"]]],]]]]],[1,,"div",["menuHeaderRightPart"],,[[1,,"RnSlot",["menuHeaderContentSlot"],[,[[,"for","menuHeaderContent"]]],[[1,,"span",["selectedCount"],[,[[1,"if","viewModel.length"]]],[[3,"{\"выбрано {n}\" |t(viewModel.length) }"]]]]]]]]],[1,,"div",["menuList"],,[[1,,"OpalLoadedList",["loadedList"],[,[[,"dataProvider","{dataProvider}"],[,"dataListItemValueName","{_dataListItemValueFieldName}"]]],[[1,,"OpalSelectOption",["option"],[,[[,"class","OpalLoadedList__listItem"],[,"value","{$item |key(_dataListItemValueFieldName) }"],[,"text","{$item |key(_dataListItemTextFieldName) }"],[,"subtext","{$item |key(_dataListItemSubtextFieldName) }"]]],]]]]],[1,,"div",["menuSelected"],,[[1,,"div",["selectedItem"],[,[[1,"for","item in viewModel"]]],[[3,"{item |key(_viewModelItemTextFieldName) }"],[1,,"button",["btnDeselectItem"],[,[[,"type","button"],[,"tabindex","-1"]]],[[1,,"OpalIcon",["btnDeselectItemIcon"],[,[[,"name","cross"]]],]]]]],[1,,"RnSlot",["nothingSelectedSlot"],[,[[1,"if","nothingSelectedShown"],[,"for","nothingSelected"]]],[[1,,"span",["nothingSelected"],,[[1,,"span",["nothingSelectedMessage"],,[[3,"{\"Ничего не выбрано\" |t }"]]]]]]]]],[1,,"div",["menuFooter"],,[[1,,"div",["menuFooterLeftPart"],,[[1,,"RnSlot",["menuFooterContentSlot"],[,[[,"for","menuFooterContent"]]],]]],[1,,"div",["menuFooterRightPart"],,[[1,,"OpalButton",["btnClose"],,[[3,"{\"Закрыть\" |t }"]]]]]]]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "bJSy":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalMultiselect.OpalSelect .OpalSelect__menu{padding:0;width:600px}.OpalMultiselect.OpalSelect .OpalSelect__menuHeader{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;border-bottom:1px solid var(--grayColor800, hsl(0,0%,80%));line-height:60px}.OpalMultiselect.OpalSelect .OpalSelect__menuHeaderLeftPart,.OpalMultiselect.OpalSelect .OpalSelect__menuHeaderRightPart{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 10px;width:299px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.OpalMultiselect.OpalSelect .OpalSelect__menuHeaderLeftPart{font-size:0}.OpalMultiselect.OpalSelect .OpalSelect__queryInput{width:100%}.OpalMultiselect.OpalSelect .OpalSelect__menuHeaderRightPart{padding-right:22px;text-align:right}.OpalMultiselect.OpalSelect .OpalSelect__menuList{float:left;width:299px;height:304px}.OpalMultiselect.OpalSelect .OpalSelect__menuSelected{float:right;overflow:auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:299px;height:304px;border-left:1px solid var(--grayColor800, hsl(0,0%,80%))}.OpalMultiselect.OpalSelect .OpalSelect__selectedItem{position:relative;overflow:hidden;padding:7px 38px 7px 22px;background:#fff;color:var(--textColor50, hsl(208,10%,5%));text-align:left;-o-text-overflow:ellipsis;text-overflow:ellipsis;text-shadow:none;white-space:nowrap;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalMultiselect.OpalSelect .OpalSelect__selectedItem:hover .OpalSelect__btnDeselectItem{display:block}.OpalMultiselect.OpalSelect .OpalSelect__btnDeselectItem{position:absolute;top:0;right:9px;bottom:0;display:none;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:var(--grayColor500, hsl(0,0%,50%));cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear}.OpalMultiselect.OpalSelect .OpalSelect__btnDeselectItem:hover{color:var(--textColor50, hsl(208,10%,5%))}.OpalMultiselect.OpalSelect .OpalSelect__btnDeselectItem:focus{outline:0}.OpalMultiselect.OpalSelect .OpalSelect__btnDeselectItem:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalMultiselect.OpalSelect .OpalSelect__btnDeselectItemIcon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px}.OpalMultiselect.OpalSelect .OpalSelect__nothingSelectedSlot{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:12px;height:100%;text-align:center;white-space:nowrap}.OpalMultiselect.OpalSelect .OpalSelect__nothingSelectedSlot::before{display:inline-block;width:0;height:100%;content:'';vertical-align:middle}.OpalMultiselect.OpalSelect .OpalSelect__nothingSelected{display:inline-block;vertical-align:middle;white-space:normal}.OpalMultiselect.OpalSelect .OpalSelect__nothingSelectedMessage{white-space:nowrap;opacity:.6}.OpalMultiselect.OpalSelect .OpalSelect__menuFooter{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;border-top:1px solid var(--grayColor800, hsl(0,0%,80%));line-height:60px}.OpalMultiselect.OpalSelect .OpalSelect__menuFooterLeftPart,.OpalMultiselect.OpalSelect .OpalSelect__menuFooterRightPart{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 10px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.OpalMultiselect.OpalSelect .OpalSelect__menuFooterLeftPart{padding-left:22px}.OpalMultiselect.OpalSelect .OpalSelect__menuFooterRightPart{text-align:right;font-size:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "fCsG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("X6DG");
__webpack_require__("Y0hN");
__webpack_require__("ioIi");
__webpack_require__("jL6t");
__webpack_require__("hl6F");
__webpack_require__("vA/G");
__export(__webpack_require__("/Yv1"));


/***/ }),

/***/ "hl6F":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hl6F__;

/***/ }),

/***/ "ioIi":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ioIi__;

/***/ }),

/***/ "jL6t":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jL6t__;

/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "vA/G":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vA_G__;

/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ })

/******/ });
});