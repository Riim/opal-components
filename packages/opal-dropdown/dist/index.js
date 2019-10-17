(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cellx"), require("rionite"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["cellx", "rionite", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-dropdown"] = factory(require("cellx"), require("rionite"), require("cellx-decorators"));
	else
		root["@riim/opal-dropdown"] = factory(root["cellx"], root["rionite"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_P7z7__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "V22z");
/******/ })
/************************************************************************/
/******/ ({

/***/ "BALO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("RnSlot:contentSlot (@if=contentRendered)");

/***/ }),

/***/ "P7z7":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_P7z7__;

/***/ }),

/***/ "V22z":
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
var OpalDropdown_1;
Object.defineProperty(exports, "__esModule", { value: true });
const cellx_1 = __webpack_require__("P7z7");
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("WMcl");
const template_rnt_1 = __webpack_require__("BALO");
let OpalDropdown = OpalDropdown_1 = class OpalDropdown extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.autoHeight = true;
        this.opened = false;
        this.contentRendered = false;
    }
    ready() {
        if (this.opened) {
            this._open();
        }
    }
    _onOpenedChange(evt) {
        if (evt.data.value) {
            this._open();
        }
        else {
            this._close();
        }
    }
    renderContent() {
        if (!this.contentRendered) {
            this.contentRendered = true;
            cellx_1.Cell.release();
        }
    }
    open() {
        if (this.opened) {
            return false;
        }
        this.opened = true;
        cellx_1.Cell.release();
        return true;
    }
    close() {
        if (!this.opened) {
            return false;
        }
        this.opened = false;
        cellx_1.Cell.release();
        return true;
    }
    toggle(value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
    }
    _open() {
        let el = this.element;
        let elStyle = el.style;
        elStyle.top = '100%';
        elStyle.right = 'auto';
        elStyle.bottom = 'auto';
        elStyle.left = '0';
        elStyle.maxHeight = 'none';
        this.renderContent();
        let containerClientRect = el.offsetParent.getBoundingClientRect();
        let elClientRect = el.getBoundingClientRect();
        if (elClientRect.right > containerClientRect.right &&
            elClientRect.right > document.documentElement.clientWidth) {
            if (containerClientRect.right - el.offsetWidth >= 0) {
                elStyle.right = '0';
                elStyle.left = 'auto';
            }
            else {
                elStyle.left =
                    Math.max(-containerClientRect.left, document.documentElement.clientWidth - elClientRect.right) + 'px';
            }
        }
        let margin = elClientRect.top - containerClientRect.bottom;
        let excess = elClientRect.bottom + margin - document.documentElement.clientHeight;
        if (excess > 0) {
            let diff = containerClientRect.top -
                (document.documentElement.clientHeight - containerClientRect.bottom);
            if (this.autoHeight) {
                if (diff > 0) {
                    elStyle.top = 'auto';
                    elStyle.bottom = '100%';
                    excess -= diff;
                    if (excess > 0) {
                        elStyle.maxHeight = el.offsetHeight - excess + 'px';
                    }
                }
                else {
                    elStyle.maxHeight = el.offsetHeight - excess + 'px';
                }
            }
            else if (diff > 0 && excess - diff <= window.pageYOffset) {
                elStyle.top = 'auto';
                elStyle.bottom = '100%';
            }
        }
        if (this.closeOn) {
            setTimeout(() => {
                if (this.opened) {
                    this._closingEventListening = this.listenTo(document, this.closeOn, this._onClosingEvent);
                }
            }, 1);
        }
    }
    _close() {
        if (this._closingEventListening) {
            this._closingEventListening.stop();
            this._closingEventListening = null;
        }
    }
    _onClosingEvent(evt) {
        let docEl = document.documentElement;
        let thisEl = this.element;
        for (let el = evt.target; el != thisEl;) {
            if (el == docEl || el.tagName == 'A') {
                this.close();
                this.emit(OpalDropdown_1.EVENT_CLOSE);
                break;
            }
            el = el.parentElement;
            if (!el) {
                break;
            }
        }
    }
};
OpalDropdown.EVENT_CLOSE = Symbol('close');
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalDropdown.prototype, "autoHeight", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalDropdown.prototype, "closeOn", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalDropdown.prototype, "opened", void 0);
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalDropdown.prototype, "contentRendered", void 0);
__decorate([
    rionite_1.Listen('change:opened'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpalDropdown.prototype, "_onOpenedChange", null);
OpalDropdown = OpalDropdown_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalDropdown',
        template: template_rnt_1.default
    })
], OpalDropdown);
exports.OpalDropdown = OpalDropdown;


/***/ }),

/***/ "WMcl":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = "opal-dropdown{display:none}.OpalDropdown{position:absolute;top:100%;left:0;z-index:600;display:none;overflow-x:hidden;overflow-y:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:2px 0;padding:6px 0;min-width:100%;border:1px solid #ccc;border-radius:3px;background:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:1.5;cursor:default}.OpalDropdown .OpalDropdown__contentSlot{position:relative;display:block}.OpalDropdown[opened]{display:block}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


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