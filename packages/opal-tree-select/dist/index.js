(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("cellx"), require("@riim/opal-select"), require("@riim/opal-button"), require("@riim/opal-filtered-list"), require("@riim/opal-tree-list"), require("@riim/opal-modal"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "cellx", "@riim/opal-select", "@riim/opal-button", "@riim/opal-filtered-list", "@riim/opal-tree-list", "@riim/opal-modal"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-tree-select"] = factory(require("rionite"), require("reflect-metadata"), require("cellx"), require("@riim/opal-select"), require("@riim/opal-button"), require("@riim/opal-filtered-list"), require("@riim/opal-tree-list"), require("@riim/opal-modal"));
	else
		root["@riim/opal-tree-select"] = factory(root["rionite"], root["reflect-metadata"], root["cellx"], root["@riim/opal-select"], root["@riim/opal-button"], root["@riim/opal-filtered-list"], root["@riim/opal-tree-list"], root["@riim/opal-modal"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_258__) {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 257);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(11);
__webpack_require__(16);
__webpack_require__(258);
__webpack_require__(8);
__webpack_require__(25);
__webpack_require__(1);
__export(__webpack_require__(259));


/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_258__;

/***/ }),

/***/ 259:
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
var opal_select_1 = __webpack_require__(8);
var opal_tree_list_1 = __webpack_require__(25);
var cellx_1 = __webpack_require__(3);
var rionite_1 = __webpack_require__(0);
__webpack_require__(260);
var template_nelm_1 = __webpack_require__(261);
var OpalTreeSelect = /** @class */ (function (_super) {
    __extends(OpalTreeSelect, _super);
    function OpalTreeSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramMultiple = true;
        return _this;
    }
    OpalTreeSelect.prototype.initialize = function () {
        var _this = this;
        _super.prototype.initialize.call(this);
        if (this.paramDataTreeListKeypath) {
            cellx_1.define(this, 'dataTreeList', new cellx_1.Cell(Function("return this." + this.paramDataTreeListKeypath + ";"), {
                context: this.ownerComponent || window
            }));
        }
        else {
            if (!this.$specifiedParams || !this.$specifiedParams.has('dataTreeList')) {
                throw new TypeError('Parameter "dataTreeList" is required');
            }
            cellx_1.define(this, 'dataTreeList', function () { return _this.paramDataTreeList; });
        }
    };
    OpalTreeSelect.prototype._onMenuSelectOptionSelect = function () {
        return false;
    };
    OpalTreeSelect.prototype._onMenuSelectOptionDeselect = function () {
        return false;
    };
    OpalTreeSelect.prototype._onMenuChange = function () {
        return false;
    };
    OpalTreeSelect.prototype._updateOptions = function () { };
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
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTreeSelect.prototype, "paramViewModel", void 0);
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
    OpalTreeSelect = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default,
            events: {
                btnClose: {
                    click: function () {
                        this.$('menu').close();
                    }
                }
            }
        })
    ], OpalTreeSelect);
    return OpalTreeSelect;
}(opal_select_1.OpalSelect));
exports.OpalTreeSelect = OpalTreeSelect;


/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTreeSelect.OpalSelect .OpalModal__window{-webkit-box-sizing:border-box;box-sizing:border-box;width:80%}.OpalTreeSelect.OpalSelect .OpalSelect__treeList{overflow:auto;height:410px}.OpalTreeSelect.OpalSelect .OpalSelect__footer{padding-top:10px}.OpalTreeSelect.OpalSelect .OpalSelect__btnClose{float:right}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("OpalModal/menu {\nOpalFilteredList/filteredList {\nOpalTreeList/treeList (\nclass=OpalFilteredList__list,\ndata-tree-list={dataTreeList},\ndata-tree-list-item-schema={paramDataTreeListItemSchema},\nview-model={viewModel},\nview-model-item-schema={paramViewModelItemSchema},\nquery={paramQuery}\n) {\nOpalSelectOption/option (\nclass=OpalTreeList__selectionControl,\ntext={$item.name},\nselected={$selected}\n)\n}\n}\ndiv/footer {\nOpalButton/btnClose {\n'Готово'\n}\n}\n}");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ })

/******/ });
});