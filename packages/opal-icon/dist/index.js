(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-icon"] = factory(require("rionite"), require("cellx-decorators"));
	else
		root["@riim/opal-icon"] = factory(root["rionite"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "RfBE");
/******/ })
/************************************************************************/
/******/ ({

/***/ "++SF":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconPlus\"><path d=\"M16 2v28M2 16h28\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "/+7O":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconEllipsisHorizontal\"><circle cx=\"7\" cy=\"16\" r=\"2\"/><circle cx=\"16\" cy=\"16\" r=\"2\"/><circle cx=\"25\" cy=\"16\" r=\"2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "2jda":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconDownload\"><path d=\"M9 22c-9 1-9-10 0-9C6 2 23 2 22 10c10-2 10 13 1 12m-7-8v16m-5-5l5 5 5-5\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "5bFW":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconExport\"><path d=\"M4 22v8h24v-8M16 4v20M8 12l8-8 8 8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "6GZj":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconEllipsisVertical\"><circle cx=\"16\" cy=\"7\" r=\"2\"/><circle cx=\"16\" cy=\"16\" r=\"2\"/><circle cx=\"16\" cy=\"25\" r=\"2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "6Nfk":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLock\"><path d=\"M9 15C9 9 9 5 16 5s7 4 7 10M5 15h22v15H5zm11 5v3\"/><circle cx=\"16\" cy=\"24\" r=\"1\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "AfrY":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconChevronLeft\"><path d=\"M23 2L9 16l14 14\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "FoJy":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCross\"><path d=\"M2 2l28 28m0-28L2 30\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "I/Rf":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconChevronUp\"><path d=\"M2 23L16 9l14 14\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "KClT":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconStar\"><path d=\"M16 2l4 10h10l-8 7 3 11-9-7-9 7 3-11-8-7h10z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "LUVA":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconClipboard\"><path d=\"M12 2h8v4h-8zm0 2H6v26h20V4h-6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "M/KA":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconTag\"><path d=\"M18 2h12v12L14 30 2 18z\"/><circle cx=\"24\" cy=\"8\" r=\"2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "MLQt":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArrowRight\"><path d=\"M2 16h28M20 6l10 10-10 10\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "MVR/":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconHeart\"><path d=\"M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12-12 12-12 12-9-8-12-12z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "MW8g":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconEye\"><path d=\"M2 16S7 6 16 6s14 10 14 10-5 10-14 10S2 16 2 16z\"/><circle cx=\"16\" cy=\"16\" r=\"6\"/><circle cx=\"17\" cy=\"15\" r=\"1\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "MqPj":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconUser\"><circle cx=\"16\" cy=\"9\" r=\"6\"/><path d=\"M4 29c0-9 6-10 12-10s12 1 12 10z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "NPtp":
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

/***/ "OWaT":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArrowDown\"><path d=\"M16 2v28M6 20l10 10 10-10\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "P+XZ":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconPhoto\"><path d=\"M2 2h28v28H2zm0 24l10-10 8 8m-4-4l6-6 8 8\"/><circle cx=\"10\" cy=\"9\" r=\"3\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "Psur":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCode\"><path d=\"M10 9l-7 8 7 8m8-18l-4 20m8-18l7 8-7 8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "REaa":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconClock\"><circle cx=\"16\" cy=\"16\" r=\"13\"/><path d=\"M16 8v8l4 4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "RfBE":
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
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__("jT9T"), exports);


/***/ }),

/***/ "SDsw":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconReload\"><path d=\"M29 16c0 6-5 13-13 13S3 22 3 16 8 3 16 3c5 0 9 3 11 6m1-7l-1 7-7 1\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "SJML":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMinus\"><path d=\"M2 16h28\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "TjTk":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFileMinus\"><path d=\"M6 2h12l8 8v20H6zm12 0v8h8M12 20h8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "Tjok":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMail\"><path d=\"M2 6h28v20H2zm0 0l14 10L30 6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "UN6g":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLogOut\"><path d=\"M12 4H2v24h10m0-12h16m-6-6l6 6-6 6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "VZ64":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCrossedOutEye\"><path d=\"M2 16S7 6 16 6s14 10 14 10-5 10-14 10S2 16 2 16z\"/><circle cx=\"16\" cy=\"16\" r=\"6\"/><circle cx=\"17\" cy=\"15\" r=\"1\"/><path d=\"M30 2L2 30\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "Vd/8":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMobile\"><path d=\"M9 4c0-1 1-2 2-2h10c1 0 2 1 2 2v24c0 1-1 2-2 2H11c-1 0-2-1-2-2zm0 1h14M9 27h14\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "W8Bn":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconTrash\"><path d=\"M4 6h2l2 24h16l2-24h2M6 6h20M12 6l1-4h6l1 4m-9 6l1 12m4-12v12m5-12l-1 12\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "WBR9":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconEdit\"><path d=\"M25 2l5 5-20 20-7 2 2-7zm-4 4l5 5M5 22l5 5\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "WJZ8":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCheckmark\"><path d=\"M2 18l8 8L30 6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "Ylr5":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCreditcard\"><path d=\"M2 7h28v19H2zm5 10h5m-5 4h7\"/><path d=\"M2 11h28v1H2z\" fill=\"currentColor\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "YxRV":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCircleCross\"><circle cx=\"16\" cy=\"16\" r=\"13\"/><path d=\"M11 11l10 10m0-10L11 21\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "alWY":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCircleCheckmark\"><circle cx=\"16\" cy=\"16\" r=\"13\"/><path d=\"M11 16l4 4 7-7\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "cNPH":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLink\"><path d=\"M18 8s6-6 9-3 2 7-3 11-8 5-10 1m4-2c-2-4-5-3-10 1s-6 8-3 11 9-3 9-3\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "cQ06":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,["svg"],,,"svg",[,[[,"stroke-width","{strokeWidth}"]]],[[1,,,,"use",[,[[,"xlink:href","{xlinkHref}"]]],]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "cWUz":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMove\"><path d=\"M3 16h26M16 3v26M12 7l4-4 4 4m5 5l4 4-4 4m-13 5l4 4 4-4M7 12l-4 4 4 4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "chv/":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconInfo\"><path d=\"M16 9v2m0 4v8\"/><circle cx=\"16\" cy=\"16\" r=\"14\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "cpuk":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconExternal\"><path d=\"M14 9H3v20h20V18m5-14L14 18m4-14h10v10\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "crb1":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFileCross\"><path d=\"M6 2h12l8 8v20H6zm12 0v8h8m-13 7l6 6m0-6l-6 6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "ejX+":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArrowUp\"><path d=\"M16 2v28M6 12L16 2l10 10\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "fTQ0":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFolder\"><path d=\"M2 4h8l4 3h16v19H2zm0 8h28\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "gIIT":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconOptions\"><path d=\"M4 6h24M4 16h24M4 26h24M24 3v6M8 13v6m12 4v6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "hF4h":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCompose\"><path d=\"M16 5H2v25h25V16M26 2l4 4-16 16-6 2 2-6zm-4 4l4 4m-16 8l4 4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "hW4x":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconBookmark\"><path d=\"M6 2h20v28L16 20 6 30z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "hghL":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconBan\"><circle cx=\"16\" cy=\"16\" r=\"14\"/><path d=\"M6 6l20 20\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "hgo5":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCalendar\"><path d=\"M2 6v24h28V6zm0 9h28M7 3v6m6-6v6m6-6v6m6-6v6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "hhN/":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconBell\"><path d=\"M7 17c0-5 1-13 9-13s9 8 9 13 4 8 4 8H3s4-3 4-8zm5 8s0 4 4 4 4-4 4-4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "ilMg":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconUnlock\"><path d=\"M9 15C9 7 9 3 16 3s7 5 7 6M5 15h22v15H5zm11 5v3\"/><circle cx=\"16\" cy=\"24\" r=\"1\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "jI7/":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconSettings\"><path d=\"M13 2h6v4l2 1 3-3 4 4-3 3 1 2h4v6h-4l-1 2 3 3-4 4-3-3-2 1v4h-6v-4l-2-1-3 3-4-4 3-3-1-2H2v-6h4l1-2-3-3 4-4 3 3 2-1z\"/><circle cx=\"16\" cy=\"16\" r=\"4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "jT9T":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalIcon = void 0;
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("NPtp");
const template_rnt_1 = __webpack_require__("cQ06");
__webpack_require__("sjt4");
__webpack_require__("jb1V");
__webpack_require__("OWaT");
__webpack_require__("yNWZ");
__webpack_require__("MLQt");
__webpack_require__("ejX+");
__webpack_require__("hghL");
__webpack_require__("hhN/");
__webpack_require__("hW4x");
__webpack_require__("hgo5");
__webpack_require__("xj1P");
__webpack_require__("WJZ8");
__webpack_require__("yHJS");
__webpack_require__("AfrY");
__webpack_require__("lDSZ");
__webpack_require__("I/Rf");
__webpack_require__("alWY");
__webpack_require__("YxRV");
__webpack_require__("LUVA");
__webpack_require__("REaa");
__webpack_require__("Psur");
__webpack_require__("hF4h");
__webpack_require__("Ylr5");
__webpack_require__("FoJy");
__webpack_require__("VZ64");
__webpack_require__("xZOR");
__webpack_require__("2jda");
__webpack_require__("WBR9");
__webpack_require__("/+7O");
__webpack_require__("6GZj");
__webpack_require__("5bFW");
__webpack_require__("cpuk");
__webpack_require__("MW8g");
__webpack_require__("sSd0");
__webpack_require__("crb1");
__webpack_require__("TjTk");
__webpack_require__("kQhe");
__webpack_require__("kWZL");
__webpack_require__("fTQ0");
__webpack_require__("MVR/");
__webpack_require__("n3X2");
__webpack_require__("tZXY");
__webpack_require__("chv/");
__webpack_require__("cNPH");
__webpack_require__("zvVb");
__webpack_require__("6Nfk");
__webpack_require__("qjOP");
__webpack_require__("UN6g");
__webpack_require__("Tjok");
__webpack_require__("st/j");
__webpack_require__("m4Sp");
__webpack_require__("SJML");
__webpack_require__("Vd/8");
__webpack_require__("cWUz");
__webpack_require__("gIIT");
__webpack_require__("lEP9");
__webpack_require__("P+XZ");
__webpack_require__("++SF");
__webpack_require__("zZAq");
__webpack_require__("SDsw");
__webpack_require__("kDvq");
__webpack_require__("pLkQ");
__webpack_require__("kLPK");
__webpack_require__("jI7/");
__webpack_require__("KClT");
__webpack_require__("M/KA");
__webpack_require__("W8Bn");
__webpack_require__("ilMg");
__webpack_require__("qnwK");
__webpack_require__("MqPj");
let OpalIcon = class OpalIcon extends rionite_1.BaseComponent {
    get xlinkHref() {
        let name = this.name;
        return '#OpalIcon__icon' + name.charAt(0).toUpperCase() + name.slice(1);
    }
};
__decorate([
    rionite_1.Param({ type: String, required: true, readonly: true })
], OpalIcon.prototype, "name", void 0);
__decorate([
    rionite_1.Param({ default: 'm' })
], OpalIcon.prototype, "size", void 0);
__decorate([
    rionite_1.Param({ default: 3, readonly: true })
], OpalIcon.prototype, "strokeWidth", void 0);
__decorate([
    rionite_1.Param(Boolean)
], OpalIcon.prototype, "filled", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalIcon.prototype, "xlinkHref", null);
OpalIcon = __decorate([
    rionite_1.Component({
        elementIs: 'OpalIcon',
        template: template_rnt_1.default
    })
], OpalIcon);
exports.OpalIcon = OpalIcon;


/***/ }),

/***/ "jb1V":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArchive\"><path d=\"M2 4h28v6H2zm2 6v18h24V10m-16 5h8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "kDvq":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconReply\"><path d=\"M11 6l-8 8 8 8m-8-8h15c8 0 12 4 12 12\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "kLPK":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconSend\"><path d=\"M2 16L30 2 16 30l-4-10zM30 2L12 20\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "kQhe":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFilePlus\"><path d=\"M6 2h12l8 8v20H6zm12 0v8h8m-10 6v8m-4-4h8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "kWZL":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFlag\"><path d=\"M6 2v28M6 6h20l-6 6 6 6H6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "lDSZ":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconChevronRight\"><path d=\"M9 2l14 14L9 30\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "lEP9":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconPaperclip\"><path d=\"M10 9v15c0 4 3 6 6 6s6-2 6-6V6c0-3-2-4-4-4s-4 1-4 4v17c0 1 1 2 2 2s2-1 2-2V9\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "m4Sp":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMessage\"><path d=\"M2 4h28v18H16l-8 7v-7H2z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "n3X2":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconHome\"><path d=\"M16 2l12 10v18h-8V20h-8v10H4V12z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "pLkQ":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconSearch\"><circle cx=\"14\" cy=\"14\" r=\"11\"/><path d=\"M22 22l8 8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "qjOP":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLogIn\"><path d=\"M20 4h10v24H20M4 16h16m-6-6l6 6-6 6\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "qnwK":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconUpload\"><path d=\"M9 22c-9 1-9-10 0-9C6 2 23 2 22 10c10-2 10 13 1 12m-7-8v16m-5-11l5-5 5 5\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "sSd0":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconFile\"><path d=\"M6 2h12l8 8v20H6zm12 0v8h8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "sjt4":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol id=\"OpalIcon__iconAlert\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M2 29L16 3l14 26zm14-17v7m0 4v2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "st/j":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconMenu\"><path d=\"M4 8h24M4 16h24M4 24h24\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "tZXY":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconImport\"><path d=\"M4 24v6h24v-6M16 4v20m-8-8l8 8 8-8\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "xZOR":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconDesktop\"><path d=\"M2 6h28v17H2zm8 23s0-5 6-5 6 5 6 5z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "xj1P":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconCart\"><path d=\"M2 2h3l5 21h17M6 6h24l-3 13H9\"/><circle cx=\"25\" cy=\"28\" r=\"2\"/><circle cx=\"12\" cy=\"28\" r=\"2\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "yHJS":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconChevronDown\"><path d=\"M2 9l14 14L30 9\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "yNWZ":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconArrowLeft\"><path d=\"M2 16h28M12 6L2 16l10 10\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ }),

/***/ "zZAq":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconPrint\"><path d=\"M7 9V2h18v7M7 25H2V9h28v16h-5m-3-11h3M7 19h18v11H7z\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }),

/***/ "zvVb":
/***/ (function(module, exports) {

(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"OpalIcon__iconLocation\"><path d=\"M8 15C5 8 10 2 16 2s11 6 8 13-8 15-8 15-5-8-8-15z\"/><circle cx=\"16\" cy=\"11\" r=\"4\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ })

/******/ });
});