(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-button"), require("@riim/opal-filtered-list"), require("@riim/opal-modal"), require("@riim/opal-select"), require("@riim/opal-tree-list"), require("reflect-metadata"), require("cellx"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-button", "@riim/opal-filtered-list", "@riim/opal-modal", "@riim/opal-select", "@riim/opal-tree-list", "reflect-metadata", "cellx", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-tree-select"] = factory(require("@riim/opal-button"), require("@riim/opal-filtered-list"), require("@riim/opal-modal"), require("@riim/opal-select"), require("@riim/opal-tree-list"), require("reflect-metadata"), require("cellx"), require("rionite"));
	else
		root["@riim/opal-tree-select"] = factory(root["@riim/opal-button"], root["@riim/opal-filtered-list"], root["@riim/opal-modal"], root["@riim/opal-select"], root["@riim/opal-tree-list"], root["reflect-metadata"], root["cellx"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__) {
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
__export(__webpack_require__(7));


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
const opal_select_1 = __webpack_require__(4);
const opal_tree_list_1 = __webpack_require__(5);
const cellx_1 = __webpack_require__(8);
const rionite_1 = __webpack_require__(9);
__webpack_require__(10);
const template_rnt_1 = __webpack_require__(11);
let OpalTreeSelect = class OpalTreeSelect extends opal_select_1.OpalSelect {
    constructor() {
        super(...arguments);
        this.paramMultiple = true;
        this.openOnClick = true;
    }
    initialize() {
        super.initialize();
        if (this.paramDataTreeListKeypath) {
            cellx_1.define(this, 'dataTreeList', new cellx_1.Cell(Function(`return this.${this.paramDataTreeListKeypath};`), {
                context: this.ownerComponent || window
            }));
        }
        else {
            if (!this.$specifiedParams || !this.$specifiedParams.has('dataTreeList')) {
                throw new TypeError('Parameter "dataTreeList" is required');
            }
            cellx_1.define(this, 'dataTreeList', () => this.paramDataTreeList);
        }
    }
    _onMenuSelectOptionSelect() {
        return false;
    }
    _onMenuSelectOptionDeselect() {
        return false;
    }
    _onMenuChange() {
        return false;
    }
    _updateOptions() { }
};
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
        default: opal_tree_list_1.OpalTreeList.defaultDataTreeListItemSchema,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalTreeSelect.prototype, "paramDataTreeListItemSchema", void 0);
__decorate([
    rionite_1.Param({
        type: eval,
        default: opal_tree_list_1.OpalTreeList.defaultViewModelItemSchema,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalTreeSelect.prototype, "paramViewModelItemSchema", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTreeSelect.prototype, "paramQuery", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalTreeSelect.prototype, "openOnClick", void 0);
OpalTreeSelect = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTreeSelect',
        template: template_rnt_1.default,
        events: {
            btnClose: {
                click() {
                    this.$('menu').close();
                }
            }
        }
    })
], OpalTreeSelect);
exports.OpalTreeSelect = OpalTreeSelect;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTreeSelect.OpalSelect .OpalModal__window{-webkit-box-sizing:border-box;box-sizing:border-box;width:80%}.OpalTreeSelect.OpalSelect .OpalSelect__menuHeader{font-size:1.5em;margin-bottom:.8em}.OpalTreeSelect.OpalSelect .OpalSelect__treeList{overflow:auto;height:410px}.OpalTreeSelect.OpalSelect .OpalSelect__footer{padding-top:10px}.OpalTreeSelect.OpalSelect .OpalSelect__btnClose{float:right}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("OpalModal:menu {\nRnSlot (for=menuHeaderSlot) {\nRnSlot:menuHeaderSlot (for=menuHeader)\n}\nOpalFilteredList:filteredList {\nOpalTreeList:treeList (\nclass=OpalFilteredList__list,\ndataTreeList={dataTreeList},\ndataTreeListItemSchema={paramDataTreeListItemSchema |dump },\nviewModel={viewModel},\nviewModelItemSchema={paramViewModelItemSchema |dump },\nquery={paramQuery}\n) {\nOpalSelectOption:option (\nclass=OpalTreeList__selectionControl,\ntext={$item.name},\nselected={$selected},\nindeterminate={$indeterminate}\n)\n}\n}\ndiv:footer {\nOpalButton:btnClose {\n// ;;; подтверждение выбора триселекта\n// ;;; https://yadi.sk/i/j9g1w-7xj9Xsew\n'{\"Готово\" |pt(\"OpalTreeSelect__btnClose\") }'\n}\n}\n}");

/***/ })
/******/ ]);
});