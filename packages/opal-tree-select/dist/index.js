(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cellx"), require("@riim/opal-button"), require("@riim/opal-filtered-list"), require("@riim/opal-select"), require("@riim/opal-tree-list"), require("rionite"), require("reflect-metadata"), require("@riim/opal-modal"));
	else if(typeof define === 'function' && define.amd)
		define(["cellx", "@riim/opal-button", "@riim/opal-filtered-list", "@riim/opal-select", "@riim/opal-tree-list", "rionite", "reflect-metadata", "@riim/opal-modal"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-tree-select"] = factory(require("cellx"), require("@riim/opal-button"), require("@riim/opal-filtered-list"), require("@riim/opal-select"), require("@riim/opal-tree-list"), require("rionite"), require("reflect-metadata"), require("@riim/opal-modal"));
	else
		root["@riim/opal-tree-select"] = factory(root["cellx"], root["@riim/opal-button"], root["@riim/opal-filtered-list"], root["@riim/opal-select"], root["@riim/opal-tree-list"], root["rionite"], root["reflect-metadata"], root["@riim/opal-modal"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_P7z7__, __WEBPACK_EXTERNAL_MODULE_X6DG__, __WEBPACK_EXTERNAL_MODULE_Y1_I__, __WEBPACK_EXTERNAL_MODULE_jL6t__, __WEBPACK_EXTERNAL_MODULE_qhWZ__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_vA_G__, __WEBPACK_EXTERNAL_MODULE_y39J__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "e8xJ");
/******/ })
/************************************************************************/
/******/ ({

/***/ "L9Xs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("OpalModal:menu {\nRnSlot (for=menuHeaderSlot) {\nRnSlot:menuHeaderSlot (for=menuHeader)\n}\nOpalFilteredList:filteredList {\nOpalTreeList:treeList (\nclass=OpalFilteredList__list,\ndataTreeList={dataTreeList},\ndataTreeListItemSchema={dataTreeListItemSchema |dump },\nviewModel={viewModel},\nviewModelItemSchema={viewModelItemSchema |dump },\nquery={query}\n) {\nOpalSelectOption:option (\nclass=OpalTreeList__selectionControl,\ntext={$item.name},\nselected={$selected},\nindeterminate={$indeterminate}\n)\n}\n}\ndiv:footer {\nOpalButton:btnClose {\n// ;;; подтверждение выбора триселекта\n// ;;; https://yadi.sk/i/j9g1w-7xj9Xsew\n'{\"Готово\" |pt(\"OpalTreeSelect__btnClose\") }'\n}\n}\n}");

/***/ }),

/***/ "P7z7":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_P7z7__;

/***/ }),

/***/ "X6DG":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_X6DG__;

/***/ }),

/***/ "Y1+I":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Y1_I__;

/***/ }),

/***/ "e8xJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("X6DG");
__webpack_require__("Y1+I");
__webpack_require__("y39J");
__webpack_require__("jL6t");
__webpack_require__("qhWZ");
__webpack_require__("vA/G");
__export(__webpack_require__("gqAp"));


/***/ }),

/***/ "gqAp":
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
const opal_tree_list_1 = __webpack_require__("qhWZ");
const cellx_1 = __webpack_require__("P7z7");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("q8hm");
const template_rnt_1 = __webpack_require__("L9Xs");
let OpalTreeSelect = class OpalTreeSelect extends opal_select_1.OpalSelect {
    constructor() {
        super(...arguments);
        this.multiple = true;
        this.openOnClick = true;
    }
    initialize() {
        super.initialize();
        if (this.dataTreeListKeypath) {
            cellx_1.define(this, 'dataTreeList', new cellx_1.Cell(Function(`return this.${this.dataTreeListKeypath};`), {
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
], OpalTreeSelect.prototype, "multiple", void 0);
__decorate([
    rionite_1.Param('dataTreeList'),
    __metadata("design:type", Object)
], OpalTreeSelect.prototype, "paramDataTreeList", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", String)
], OpalTreeSelect.prototype, "dataTreeListKeypath", void 0);
__decorate([
    rionite_1.Param({
        type: eval,
        default: opal_tree_list_1.OpalTreeList.defaultDataTreeListItemSchema,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalTreeSelect.prototype, "dataTreeListItemSchema", void 0);
__decorate([
    rionite_1.Param({
        type: eval,
        default: opal_tree_list_1.OpalTreeList.defaultViewModelItemSchema,
        readonly: true
    }),
    __metadata("design:type", Object)
], OpalTreeSelect.prototype, "viewModelItemSchema", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTreeSelect.prototype, "query", void 0);
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
                [opal_button_1.OpalButton.EVENT_CLICK]() {
                    this.$('menu').close();
                }
            }
        }
    })
], OpalTreeSelect);
exports.OpalTreeSelect = OpalTreeSelect;


/***/ }),

/***/ "jL6t":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jL6t__;

/***/ }),

/***/ "q8hm":
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

/***/ "qhWZ":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_qhWZ__;

/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "vA/G":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vA_G__;

/***/ }),

/***/ "y39J":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_y39J__;

/***/ })

/******/ });
});