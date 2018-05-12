(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-loader"] = factory(require("reflect-metadata"), require("rionite"));
	else
		root["@riim/opal-loader"] = factory(root["reflect-metadata"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__11__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 145);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(4);
__export(__webpack_require__(146));


/***/ }),

/***/ 146:
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
var rionite_1 = __webpack_require__(11);
__webpack_require__(147);
var OpalLoader = /** @class */ (function (_super) {
    __extends(OpalLoader, _super);
    function OpalLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramSize = 'm';
        _this.paramShown = false;
        return _this;
    }
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalLoader.prototype, "paramSize", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalLoader.prototype, "paramShown", void 0);
    OpalLoader = __decorate([
        rionite_1.Component({
            elementIs: 'OpalLoader'
        })
    ], OpalLoader);
    return OpalLoader;
}(rionite_1.BaseComponent));
exports.OpalLoader = OpalLoader;


/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalLoader{position:relative;display:none;margin:auto;width:38px;height:38px;border:15px solid transparent;background:rgba(255,255,255,.5)}.OpalLoader::before,.OpalLoader::after{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin:auto;width:100%;height:100%;border:3px solid #1b91f8;border-top-color:transparent;border-radius:50%;content:'';-webkit-animation:OpalLoader__animation 1.2s infinite linear;animation:OpalLoader__animation 1.2s infinite linear}.OpalLoader::after{width:26px;height:26px;border-color:#f63159;border-bottom-color:transparent;animation-direction:reverse}.OpalLoader[size=s]{width:18px;height:18px;border-width:6px}.OpalLoader[size=s]::before{border-width:2px}.OpalLoader[size=s]::after{content:none}.OpalLoader[shown]{display:block}@-webkit-keyframes OpalLoader__animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes OpalLoader__animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ })

/******/ });
});