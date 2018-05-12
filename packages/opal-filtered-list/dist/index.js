(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-icon"), require("@riim/opal-text-input"), require("reflect-metadata"), require("@riim/gettext"), require("rionite"), require("@riim/opal-loaded-list"), require("@riim/debounce-throttle"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-icon", "@riim/opal-text-input", "reflect-metadata", "@riim/gettext", "rionite", "@riim/opal-loaded-list", "@riim/debounce-throttle"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-filtered-list"] = factory(require("@riim/opal-icon"), require("@riim/opal-text-input"), require("reflect-metadata"), require("@riim/gettext"), require("rionite"), require("@riim/opal-loaded-list"), require("@riim/debounce-throttle"));
	else
		root["@riim/opal-filtered-list"] = factory(root["@riim/opal-icon"], root["@riim/opal-text-input"], root["reflect-metadata"], root["@riim/gettext"], root["rionite"], root["@riim/opal-loaded-list"], root["@riim/debounce-throttle"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__45__, __WEBPACK_EXTERNAL_MODULE__47__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
__webpack_require__(45);
__webpack_require__(3);
__webpack_require__(4);
__export(__webpack_require__(46));


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__45__;

/***/ }),

/***/ 46:
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
var debounce_throttle_1 = __webpack_require__(47);
var gettext_1 = __webpack_require__(6);
var rionite_1 = __webpack_require__(11);
__webpack_require__(48);
var template_nelm_1 = __webpack_require__(49);
var OpalFilteredList = /** @class */ (function (_super) {
    __extends(OpalFilteredList, _super);
    function OpalFilteredList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalFilteredList.prototype.elementAttached = function () {
        var queryInput = this.$('queryInput');
        if (queryInput) {
            this.listenTo(queryInput, 'input', debounce_throttle_1.debounce(150, this._onQueryInputInput));
            this.listenTo(queryInput, 'change', this._onQueryInputChange);
        }
    };
    OpalFilteredList.prototype._onQueryInputInput = function (evt) {
        this._setListQuery(evt.target.value);
    };
    OpalFilteredList.prototype._onQueryInputChange = function (evt) {
        this._setListQuery(evt.target.value);
    };
    OpalFilteredList.prototype._setListQuery = function (query) {
        this.$('list').paramQuery = query;
    };
    OpalFilteredList.prototype.focus = function () {
        var queryInput = this.$('queryInput');
        if (queryInput) {
            queryInput.focus();
        }
    };
    OpalFilteredList = __decorate([
        rionite_1.Component({
            elementIs: 'OpalFilteredList',
            i18n: {
                queryInputPlaceholder: gettext_1.getText.t('Поиск')
            },
            template: template_nelm_1.default
        })
    ], OpalFilteredList);
    return OpalFilteredList;
}(rionite_1.BaseComponent));
exports.OpalFilteredList = OpalFilteredList;


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__47__;

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalFilteredList{display:block}.OpalFilteredList .OpalFilteredList__queryInputSlot{display:block}.OpalFilteredList .OpalFilteredList__queryInput{display:block;margin-bottom:15px;width:auto}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nRnSlot (for=queryInputSlot) {\nRnSlot/queryInputSlot (for=queryInput) {\nOpalTextInput/queryInput (placeholder={constructor.i18n.queryInputPlaceholder}, clearable) {\nOpalIcon/queryInputEndIcon (class=OpalTextInput__endIcon, name=search)\n}\n}\n}\nRnSlot/listSlot (for=list)\n}");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ })

/******/ });
});