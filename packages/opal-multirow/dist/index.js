(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cellx"), require("@riim/next-uid"), require("@riim/opal-sign-button"), require("cellx-collections"), require("rionite"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["cellx", "@riim/next-uid", "@riim/opal-sign-button", "cellx-collections", "rionite", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-multirow"] = factory(require("cellx"), require("@riim/next-uid"), require("@riim/opal-sign-button"), require("cellx-collections"), require("rionite"), require("cellx-decorators"));
	else
		root["@riim/opal-multirow"] = factory(root["cellx"], root["@riim/next-uid"], root["@riim/opal-sign-button"], root["cellx-collections"], root["rionite"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_P7z7__, __WEBPACK_EXTERNAL_MODULE_cIp5__, __WEBPACK_EXTERNAL_MODULE_ej3F__, __WEBPACK_EXTERNAL_MODULE_oHAe__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "YZ1O");
/******/ })
/************************************************************************/
/******/ ({

/***/ "44dc":
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

/***/ "81BU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"RnSlot",["presetRowsSlot"],[,[[,"for","presetRows"],[,"notHaveNewRows","{_notHaveNewRows}"],[,"notSingleRow","{_notSingleRow}"]]],[[1,,"RnSlot",["presetRows"],[,[[,"for","presetRow"]]],]]],[1,,"div",["newRows"],[,[[,"notSingleRow","{_notSingleRow}"]]],[[1,1,"repeat",,[,[[,"for","row in _newRows"],[,"trackBy","key"]]],[[1,,"RnSlot",["newRowSlot"],[,[[,"cloneContent",""],[,"data-key","{row.key}"]]],]]]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "Nocu":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalMultirowRow{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:20px;white-space:nowrap;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.OpalMultirowRow .OpalMultirowRow__contentSlot{display:inline-block;margin-right:14px}.OpalMultirowRow .OpalMultirowRow__btnRemoveRow,.OpalMultirowRow .OpalMultirowRow__btnAddRow{position:relative;top:1px;display:none;-ms-flex-item-align:center;align-self:center}.OpalMultirowRow .OpalMultirowRow__btnRemoveRow{margin-right:8px}.OpalMultirow__presetRowsSlot[not_have_new_rows] .OpalMultirowRow:last-child,.OpalMultirow__newRows rn-slot:last-child .OpalMultirowRow{margin-bottom:0}.OpalMultirow__presetRowsSlot[not_single_row] .OpalMultirowRow .OpalMultirowRow__btnRemoveRow,.OpalMultirow__newRows[not_single_row] .OpalMultirowRow .OpalMultirowRow__btnRemoveRow,.OpalMultirow__presetRowsSlot[not_have_new_rows] .OpalMultirowRow:last-child .OpalMultirowRow__btnAddRow,.OpalMultirow__newRows rn-slot:last-child .OpalMultirowRow .OpalMultirowRow__btnAddRow{display:inline-block}.OpalMultirowRow .OpalPopover{white-space:normal}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "P7z7":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_P7z7__;

/***/ }),

/***/ "YZ1O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("ej3F");
__exportStar(__webpack_require__("gyyP"), exports);


/***/ }),

/***/ "c/Q9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalMultirowRow_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalMultirowRow = void 0;
const opal_sign_button_1 = __webpack_require__("ej3F");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("Nocu");
const template_rnt_1 = __webpack_require__("q+MW");
let OpalMultirowRow = OpalMultirowRow_1 = class OpalMultirowRow extends rionite_1.BaseComponent {
};
OpalMultirowRow.EVENT_ADD_ROW_CLICK = Symbol('add-row-click');
OpalMultirowRow.EVENT_REMOVE_ROW_CLICK = Symbol('remove-row-click');
OpalMultirowRow = OpalMultirowRow_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalMultirowRow',
        template: template_rnt_1.default,
        events: {
            btnRemoveRow: {
                [opal_sign_button_1.OpalSignButton.EVENT_CLICK]() {
                    this.emit(OpalMultirowRow_1.EVENT_REMOVE_ROW_CLICK);
                }
            },
            btnAddRow: {
                [opal_sign_button_1.OpalSignButton.EVENT_CLICK]() {
                    this.emit(OpalMultirowRow_1.EVENT_ADD_ROW_CLICK);
                }
            }
        }
    })
], OpalMultirowRow);
exports.OpalMultirowRow = OpalMultirowRow;


/***/ }),

/***/ "cIp5":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cIp5__;

/***/ }),

/***/ "ej3F":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ej3F__;

/***/ }),

/***/ "gyyP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalMultirow_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalMultirow = exports.OpalMultirowRow = void 0;
const next_uid_1 = __webpack_require__("cIp5");
const cellx_1 = __webpack_require__("P7z7");
const cellx_collections_1 = __webpack_require__("oHAe");
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
const OpalMultirowRow_1 = __webpack_require__("c/Q9");
Object.defineProperty(exports, "OpalMultirowRow", { enumerable: true, get: function () { return OpalMultirowRow_1.OpalMultirowRow; } });
__webpack_require__("44dc");
const template_rnt_1 = __webpack_require__("81BU");
let OpalMultirow = OpalMultirow_1 = class OpalMultirow extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this._presetRowCount = 0;
        this._newRows = new cellx_collections_1.ObservableList();
    }
    get _notHaveNewRows() {
        return !this._newRows.length;
    }
    get _notSingleRow() {
        return this._presetRowCount + this._newRows.length != 1;
    }
    initialize() {
        let elementBlockNames = this.constructor._elementBlockNames;
        this._presetRowClassName = elementBlockNames[elementBlockNames.length - 1] + '__presetRow';
    }
    ready() {
        let presetRowCount = (this._presetRowCount = this.$$('presetRow').length);
        if (!presetRowCount) {
            this._newRows.add({ key: next_uid_1.nextUID() });
        }
    }
    _onRowRemoveRowClick(evt) {
        let rowEl = evt.target.element;
        if (rowEl.classList.contains(this._presetRowClassName)) {
            rowEl.parentElement.removeChild(rowEl);
            this._presetRowCount--;
        }
        else {
            let key = evt.target.parentComponent.element.dataset.key;
            this._newRows.removeAt(this._newRows.findIndex((row) => row.key == key));
        }
        cellx_1.Cell.release();
        this.emit(OpalMultirow_1.EVENT_REMOVE_ROW);
        this.emit(OpalMultirow_1.EVENT_CHANGE);
    }
    _onRowAddRowClick() {
        this._newRows.add({ key: next_uid_1.nextUID() });
        cellx_1.Cell.release();
        let focusable = this.$('focus', this.$$('newRowSlot').slice(-1)[0]);
        if (focusable) {
            focusable.focus();
        }
        this.emit(OpalMultirow_1.EVENT_ADD_ROW);
        this.emit(OpalMultirow_1.EVENT_CHANGE);
    }
};
OpalMultirow.EVENT_ADD_ROW = Symbol('add-row');
OpalMultirow.EVENT_CHANGE = Symbol('change');
OpalMultirow.EVENT_REMOVE_ROW = Symbol('remove-row');
__decorate([
    cellx_decorators_1.Observable
], OpalMultirow.prototype, "_presetRowCount", void 0);
__decorate([
    cellx_decorators_1.Observable
], OpalMultirow.prototype, "_newRows", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalMultirow.prototype, "_notHaveNewRows", null);
__decorate([
    cellx_decorators_1.Computed
], OpalMultirow.prototype, "_notSingleRow", null);
__decorate([
    rionite_1.Listen(OpalMultirowRow_1.OpalMultirowRow.EVENT_REMOVE_ROW_CLICK)
], OpalMultirow.prototype, "_onRowRemoveRowClick", null);
__decorate([
    rionite_1.Listen(OpalMultirowRow_1.OpalMultirowRow.EVENT_ADD_ROW_CLICK)
], OpalMultirow.prototype, "_onRowAddRowClick", null);
OpalMultirow = OpalMultirow_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalMultirow',
        template: template_rnt_1.default
    })
], OpalMultirow);
exports.OpalMultirow = OpalMultirow;


/***/ }),

/***/ "oHAe":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_oHAe__;

/***/ }),

/***/ "q+MW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"RnSlot",["contentSlot"],,],[1,,"OpalSignButton",["btnRemoveRow"],[,[[,"sign","minus"]]],],[1,,"OpalSignButton",["btnAddRow"],[,[[,"sign","plus"]]],]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ })

/******/ });
});