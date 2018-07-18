(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("cellx"), require("cellx-decorators"), require("rionite"), require("@riim/opal-sign-button"), require("@riim/next-uid"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "cellx", "cellx-decorators", "rionite", "@riim/opal-sign-button", "@riim/next-uid"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-multirow"] = factory(require("reflect-metadata"), require("cellx"), require("cellx-decorators"), require("rionite"), require("@riim/opal-sign-button"), require("@riim/next-uid"));
	else
		root["@riim/opal-multirow"] = factory(root["reflect-metadata"], root["cellx"], root["cellx-decorators"], root["rionite"], root["@riim/opal-sign-button"], root["@riim/next-uid"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__150__, __WEBPACK_EXTERNAL_MODULE__152__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 149);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(150);
__webpack_require__(4);
__export(__webpack_require__(151));


/***/ }),

/***/ 150:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__150__;

/***/ }),

/***/ 151:
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
var next_uid_1 = __webpack_require__(152);
var cellx_1 = __webpack_require__(8);
var cellx_decorators_1 = __webpack_require__(9);
var rionite_1 = __webpack_require__(10);
var OpalMultirowRow_1 = __webpack_require__(153);
exports.OpalMultirowRow = OpalMultirowRow_1.OpalMultirowRow;
__webpack_require__(156);
var template_nelm_1 = __webpack_require__(157);
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
        this._presetRowClassName = elementBlockNames[elementBlockNames.length - 1] + '__presetRow';
    };
    OpalMultirow.prototype.ready = function () {
        var presetRowCount = (this._presetRowCount = this.$$('presetRow').length);
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
        var focusable = this.$('focus', this.$$('newRowSlot').slice(-1)[0]);
        if (focusable) {
            focusable.focus();
        }
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
            elementIs: 'OpalMultirow',
            template: template_nelm_1.default
        })
    ], OpalMultirow);
    return OpalMultirow;
}(rionite_1.BaseComponent));
exports.OpalMultirow = OpalMultirow;


/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__152__;

/***/ }),

/***/ 153:
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
var rionite_1 = __webpack_require__(10);
__webpack_require__(154);
var template_nelm_1 = __webpack_require__(155);
var OpalMultirowRow = /** @class */ (function (_super) {
    __extends(OpalMultirowRow, _super);
    function OpalMultirowRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalMultirowRow = __decorate([
        rionite_1.Component({
            elementIs: 'OpalMultirowRow',
            template: template_nelm_1.default,
            events: {
                btnRemoveRow: {
                    click: function () {
                        this.emit('remove-row-click');
                    }
                },
                btnAddRow: {
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

/***/ 154:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalMultirowRow{display:block;white-space:nowrap}.OpalMultirowRow::after{display:table;clear:both;content:''}.OpalMultirowRow .OpalMultirowRow__contentSlot{display:inline-block;margin:0 12px 20px 0}.OpalMultirowRow .OpalMultirowRow__btnRemoveRow,.OpalMultirowRow .OpalMultirowRow__btnAddRow{position:relative;top:1px;display:none}.OpalMultirowRow .OpalMultirowRow__btnRemoveRow{margin-right:9px}.OpalMultirow__presetRowsSlot[not_have_new_rows] .OpalMultirowRow:nth-last-child(2) .OpalMultirowRow__contentSlot,.OpalMultirow__newRows rn-slot:nth-last-child(2) .OpalMultirowRow .OpalMultirowRow__contentSlot{margin-bottom:0}.OpalMultirow__presetRowsSlot[not_single_row] .OpalMultirowRow .OpalMultirowRow__btnRemoveRow,.OpalMultirow__newRows[not_single_row] .OpalMultirowRow .OpalMultirowRow__btnRemoveRow,.OpalMultirow__presetRowsSlot[not_have_new_rows] .OpalMultirowRow:nth-last-child(2) .OpalMultirowRow__btnAddRow,.OpalMultirow__newRows rn-slot:nth-last-child(2) .OpalMultirowRow .OpalMultirowRow__btnAddRow{display:inline-block}.OpalMultirowRow .OpalPopover{white-space:normal}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@Slot/contentSlot\nOpalSignButton/btnRemoveRow (sign=minus)\nOpalSignButton/btnAddRow (sign=plus)");

/***/ }),

/***/ 156:
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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@Slot/presetRowsSlot (\nfor=presetRows,\nnotHaveNewRows={_notHaveNewRows},\nnotSingleRow={_notSingleRow}\n) {\n@Slot/presetRows (for=presetRow)\n}\ndiv/newRows (notSingleRow={_notSingleRow}) {\n@Repeat (for=row in _newRows, trackBy=key) {\n@Slot/newRowSlot (cloneContent, data-key={row.key})\n}\n}");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ })

/******/ });
});