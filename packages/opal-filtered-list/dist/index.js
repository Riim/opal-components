(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-icon"), require("@riim/opal-text-input"), require("reflect-metadata"), require("rionite"), require("@riim/opal-loaded-list"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-icon", "@riim/opal-text-input", "reflect-metadata", "rionite", "@riim/opal-loaded-list"], factory);
	else if(typeof exports === 'object')
		exports["@riim/packages/opal-filtered-list/src/index.ts"] = factory(require("@riim/opal-icon"), require("@riim/opal-text-input"), require("reflect-metadata"), require("rionite"), require("@riim/opal-loaded-list"));
	else
		root["@riim/packages/opal-filtered-list/src/index.ts"] = factory(root["@riim/opal-icon"], root["@riim/opal-text-input"], root["reflect-metadata"], root["rionite"], root["@riim/opal-loaded-list"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__44__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
__webpack_require__(44);
__webpack_require__(3);
__webpack_require__(4);
__export(__webpack_require__(45));


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__44__;

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
__webpack_require__(46);
var template = __webpack_require__(47);
var OpalFilteredList = /** @class */ (function (_super) {
    __extends(OpalFilteredList, _super);
    function OpalFilteredList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalFilteredList.prototype.elementAttached = function () {
        var queryInput = this.$('queryInput');
        if (queryInput) {
            this.listenTo(queryInput, 'input', this._onQueryInputInput);
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
            return true;
        }
        return false;
    };
    OpalFilteredList = __decorate([
        rionite_1.Component({
            elementIs: 'OpalFilteredList',
            template: template
        })
    ], OpalFilteredList);
    return OpalFilteredList;
}(rionite_1.BaseComponent));
exports.OpalFilteredList = OpalFilteredList;


/***/ }),

/***/ 46:
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

/***/ 47:
/***/ (function(module, exports) {

module.exports = "@Slot (for=queryInputSlot) {\n@Slot/queryInputSlot (for=queryInput) {\nOpalTextInput/queryInput (placeholder=Поиск, clearable) {\nOpalIcon/queryInputEndIcon (class=OpalTextInput__endIcon, name=search)\n}\n}\n}\n@Slot/listSlot (for=list)"

/***/ })

/******/ });
});