(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-icon"] = factory(require("reflect-metadata"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-icon"] = factory(root["reflect-metadata"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__) {
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
__export(__webpack_require__(2));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
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
const cellx_decorators_1 = __webpack_require__(3);
const rionite_1 = __webpack_require__(4);
__webpack_require__(5);
const template_rnt_1 = __webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(20);
__webpack_require__(21);
__webpack_require__(22);
__webpack_require__(23);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(39);
__webpack_require__(40);
__webpack_require__(41);
__webpack_require__(42);
__webpack_require__(43);
__webpack_require__(44);
__webpack_require__(45);
__webpack_require__(46);
__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(49);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(52);
__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(58);
__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(63);
__webpack_require__(64);
__webpack_require__(65);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(68);
__webpack_require__(69);
__webpack_require__(70);
__webpack_require__(71);
__webpack_require__(72);
__webpack_require__(73);
let OpalIcon = class OpalIcon extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.size = 'm';
        this.strokeWidth = 3;
        this.filled = false;
    }
    get xlinkHref() {
        let name = this.name;
        return '#OpalIcon__icon' + name.charAt(0).toUpperCase() + name.slice(1);
    }
};
__decorate([
    rionite_1.Param({
        required: true,
        readonly: true
    }),
    __metadata("design:type", String)
], OpalIcon.prototype, "name", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalIcon.prototype, "size", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalIcon.prototype, "strokeWidth", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalIcon.prototype, "filled", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], OpalIcon.prototype, "xlinkHref", null);
OpalIcon = __decorate([
    rionite_1.Component({
        elementIs: 'OpalIcon',
        template: template_rnt_1.default
    })
], OpalIcon);
exports.OpalIcon = OpalIcon;


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

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalIcon{display:inline-block;width:26px;height:26px;vertical-align:middle}.OpalIcon .OpalIcon__svg{display:block;width:100%;height:100%;stroke:currentColor;stroke-linecap:butt;stroke-linejoin:miter;fill:none}.OpalIcon[size=s]{width:22px;height:22px}.OpalIcon[size=xs]{width:18px;height:18px}.OpalIcon[size=xxs]{width:14px;height:14px}.OpalIcon[size=l]{width:30px;height:30px}.OpalIcon[size=xl]{width:34px;height:34px}.OpalIcon[size=xxl]{width:38px;height:38px}.OpalIcon[filled] .OpalIcon__svg{fill:currentColor}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("svg:svg (stroke-width={strokeWidth}) {\nuse (xlink:href={xlinkHref})\n}");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol id=\"OpalIcon__iconAlert\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M2 29L16 3l14 26zm14-17v7m0 4v2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArchive\"><path d=\"M2 4h28v6H2zm2 6v18h24V10m-16 5h8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArrowDown\"><path d=\"M16 2v28M6 20l10 10 10-10\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArrowLeft\"><path d=\"M2 16h28M12 6L2 16l10 10\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArrowRight\"><path d=\"M2 16h28M20 6l10 10-10 10\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArrowUp\"><path d=\"M16 2v28M6 12L16 2l10 10\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 13 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconBan\"><circle cx=\"16\" cy=\"16\" r=\"14\"/><path d=\"M6 6l20 20\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 14 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconBell\"><path d=\"M7 17c0-5 1-13 9-13s9 8 9 13 4 8 4 8H3s4-3 4-8zm5 8s0 4 4 4 4-4 4-4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 15 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconBookmark\"><path d=\"M6 2h20v28L16 20 6 30z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 16 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCalendar\"><path d=\"M2 6v24h28V6zm0 9h28M7 3v6m6-6v6m6-6v6m6-6v6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 17 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCart\"><path d=\"M2 2h3l5 21h17M6 6h24l-3 13H9\"/><circle cx=\"25\" cy=\"28\" r=\"2\"/><circle cx=\"12\" cy=\"28\" r=\"2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 18 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCheckmark\"><path d=\"M2 18l8 8L30 6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 19 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconChevronDown\"><path d=\"M2 9l14 14L30 9\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 20 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconChevronLeft\"><path d=\"M23 2L9 16l14 14\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 21 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconChevronRight\"><path d=\"M9 2l14 14L9 30\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 22 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconChevronUp\"><path d=\"M2 23L16 9l14 14\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 23 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconClipboard\"><path d=\"M12 2h8v4h-8zm0 2H6v26h20V4h-6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 24 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconClock\"><circle cx=\"16\" cy=\"16\" r=\"14\"/><path d=\"M16 8v8l4 4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 25 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCode\"><path d=\"M10 9l-7 8 7 8m8-18l-4 20m8-18l7 8-7 8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 26 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCompose\"><path d=\"M16 5H2v25h25V16M26 2l4 4-16 16-6 2 2-6zm-4 4l4 4m-16 8l4 4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 27 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCreditcard\"><path d=\"M2 7h28v19H2zm5 10h5m-5 4h7\"/><path d=\"M2 11h28v1H2z\" fill=\"currentColor\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 28 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCross\"><path d=\"M2 2l28 28m0-28L2 30\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 29 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconDesktop\"><path d=\"M2 6h28v17H2zm8 23s0-5 6-5 6 5 6 5z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 30 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconDownload\"><path d=\"M9 22c-9 1-9-10 0-9C6 2 23 2 22 10c10-2 10 13 1 12m-7-8v16m-5-5l5 5 5-5\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 31 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconEdit\"><path d=\"M25 2l5 5-20 20-7 2 2-7zm-4 4l5 5M5 22l5 5\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 32 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconEllipsisHorizontal\"><circle cx=\"7\" cy=\"16\" r=\"2\"/><circle cx=\"16\" cy=\"16\" r=\"2\"/><circle cx=\"25\" cy=\"16\" r=\"2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 33 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconEllipsisVertical\"><circle cx=\"16\" cy=\"7\" r=\"2\"/><circle cx=\"16\" cy=\"16\" r=\"2\"/><circle cx=\"16\" cy=\"25\" r=\"2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 34 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconExport\"><path d=\"M4 22v8h24v-8M16 4v20M8 12l8-8 8 8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 35 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconExternal\"><path d=\"M14 9H3v20h20V18m5-14L14 18m4-14h10v10\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 36 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconEye\"><path d=\"M2 16S7 6 16 6s14 10 14 10-5 10-14 10S2 16 2 16z\"/><circle cx=\"16\" cy=\"16\" r=\"6\"/><circle cx=\"17\" cy=\"15\" r=\"1\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 37 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFileCross\"><path d=\"M6 2h12l8 8v20H6zm12 0v8h8m-13 7l6 6m0-6l-6 6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 38 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFileMinus\"><path d=\"M6 2h12l8 8v20H6zm12 0v8h8M12 20h8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 39 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFilePlus\"><path d=\"M6 2h12l8 8v20H6zm12 0v8h8m-10 6v8m-4-4h8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 40 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFile\"><path d=\"M6 2h12l8 8v20H6zm12 0v8h8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 41 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFlag\"><path d=\"M6 2v28M6 6h20l-6 6 6 6H6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 42 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFolder\"><path d=\"M2 4h8l4 3h16v19H2zm0 8h28\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 43 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconHeart\"><path d=\"M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12-12 12-12 12-9-8-12-12z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 44 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconHome\"><path d=\"M16 2l12 10v18h-8V20h-8v10H4V12z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 45 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconImport\"><path d=\"M4 24v6h24v-6M16 4v20m-8-8l8 8 8-8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 46 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconInfo\"><path d=\"M16 9v2m0 4v8\"/><circle cx=\"16\" cy=\"16\" r=\"14\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 47 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLink\"><path d=\"M18 8s6-6 9-3 2 7-3 11-8 5-10 1m4-2c-2-4-5-3-10 1s-6 8-3 11 9-3 9-3\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 48 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLocation\"><path d=\"M8 15C5 8 10 2 16 2s11 6 8 13-8 15-8 15-5-8-8-15z\"/><circle cx=\"16\" cy=\"11\" r=\"4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 49 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLock\"><path d=\"M9 15C9 9 9 5 16 5s7 4 7 10M5 15h22v15H5zm11 5v3\"/><circle cx=\"16\" cy=\"24\" r=\"1\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 50 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLogIn\"><path d=\"M20 4h10v24H20M4 16h16m-6-6l6 6-6 6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 51 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLogOut\"><path d=\"M12 4H2v24h10m0-12h16m-6-6l6 6-6 6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 52 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMail\"><path d=\"M2 6h28v20H2zm0 0l14 10L30 6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 53 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMenu\"><path d=\"M4 8h24M4 16h24M4 24h24\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 54 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMessage\"><path d=\"M2 4h28v18H16l-8 7v-7H2z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 55 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMinus\"><path d=\"M2 16h28\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 56 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMobile\"><path d=\"M9 4c0-1 1-2 2-2h10c1 0 2 1 2 2v24c0 1-1 2-2 2H11c-1 0-2-1-2-2zm0 1h14M9 27h14\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 57 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMove\"><path d=\"M3 16h26M16 3v26M12 7l4-4 4 4m5 5l4 4-4 4m-13 5l4 4 4-4M7 12l-4 4 4 4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 58 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconOptions\"><path d=\"M4 6h24M4 16h24M4 26h24M24 3v6M8 13v6m12 4v6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 59 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconPaperclip\"><path d=\"M10 9v15c0 4 3 6 6 6s6-2 6-6V6c0-3-2-4-4-4s-4 1-4 4v17c0 1 1 2 2 2s2-1 2-2V9\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 60 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconPhoto\"><path d=\"M2 2h28v28H2zm0 24l10-10 8 8m-4-4l6-6 8 8\"/><circle cx=\"10\" cy=\"9\" r=\"3\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 61 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconPlus\"><path d=\"M16 2v28M2 16h28\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 62 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconPrint\"><path d=\"M7 9V2h18v7M7 25H2V9h28v16h-5m-3-11h3M7 19h18v11H7z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 63 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconReload\"><path d=\"M29 16c0 6-5 13-13 13S3 22 3 16 8 3 16 3c5 0 9 3 11 6m1-7l-1 7-7 1\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 64 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconReply\"><path d=\"M11 6l-8 8 8 8m-8-8h15c8 0 12 4 12 12\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 65 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconSearch\"><circle cx=\"14\" cy=\"14\" r=\"11\"/><path d=\"M22 22l8 8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 66 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconSend\"><path d=\"M2 16L30 2 16 30l-4-10zM30 2L12 20\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 67 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconSettings\"><path d=\"M13 2h6v4l2 1 3-3 4 4-3 3 1 2h4v6h-4l-1 2 3 3-4 4-3-3-2 1v4h-6v-4l-2-1-3 3-4-4 3-3-1-2H2v-6h4l1-2-3-3 4-4 3 3 2-1z\"/><circle cx=\"16\" cy=\"16\" r=\"4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 68 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconStar\"><path d=\"M16 2l4 10h10l-8 7 3 11-9-7-9 7 3-11-8-7h10z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 69 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconTag\"><path d=\"M18 2h12v12L14 30 2 18z\"/><circle cx=\"24\" cy=\"8\" r=\"2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 70 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconTrash\"><path d=\"M4 6h2l2 24h16l2-24h2M6 6h20M12 6l1-4h6l1 4m-9 6l1 12m4-12v12m5-12l-1 12\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 71 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconUnlock\"><path d=\"M9 15C9 7 9 3 16 3s7 5 7 6M5 15h22v15H5zm11 5v3\"/><circle cx=\"16\" cy=\"24\" r=\"1\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 72 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconUpload\"><path d=\"M9 22c-9 1-9-10 0-9C6 2 23 2 22 10c10-2 10 13 1 12m-7-8v16m-5-11l5-5 5 5\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),
/* 73 */
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconUser\"><circle cx=\"16\" cy=\"9\" r=\"6\"/><path d=\"M4 29c0-9 6-10 12-10s12 1 12 10z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ })
/******/ ]);
});