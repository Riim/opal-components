(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cellx"), require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["cellx", "rionite", "reflect-metadata", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-popover"] = factory(require("cellx"), require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else
		root["@riim/opal-popover"] = factory(root["cellx"], root["rionite"], root["reflect-metadata"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_P7z7__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_vA_G__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "Bdbb");
/******/ })
/************************************************************************/
/******/ ({

/***/ "Bdbb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("vA/G");
__export(__webpack_require__("WwGH"));


/***/ }),

/***/ "P7z7":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_P7z7__;

/***/ }),

/***/ "UFjE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"span",["arrow"],,],[1,,"RnSlot",["contentSlot"],[,[[1,"if","contentRendered"]]],]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "WwGH":
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
var OpalPopover_1;
Object.defineProperty(exports, "__esModule", { value: true });
const cellx_1 = __webpack_require__("P7z7");
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("fDbg");
const template_rnt_1 = __webpack_require__("UFjE");
let OpalPopover = OpalPopover_1 = class OpalPopover extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.position = 'right';
        this.positionOffset = 0;
        this.autoDirection = true;
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
        this.renderContent();
        let el = this.element;
        if (this.autoDirection) {
            let docEl = document.documentElement;
            let containerClientRect = el.offsetParent.getBoundingClientRect();
            let elClientRect = el.getBoundingClientRect();
            let position = (this._positionAtOpening = this.position).split('-');
            switch (position[0]) {
                case 'left': {
                    if (elClientRect.left + window.pageXOffset < 0 ||
                        (elClientRect.left < 0 &&
                            containerClientRect.left <
                                docEl.clientWidth - containerClientRect.right)) {
                        this.position = ('right' +
                            (position.length == 2 ? '-' + position[1] : ''));
                    }
                    break;
                }
                case 'top': {
                    if (elClientRect.top + window.pageYOffset < 0 ||
                        (elClientRect.top < 0 &&
                            containerClientRect.top <
                                docEl.clientHeight - containerClientRect.bottom)) {
                        this.position = ('bottom' +
                            (position.length == 2 ? '-' + position[1] : ''));
                    }
                    break;
                }
                case 'right': {
                    if (elClientRect.right > docEl.clientWidth &&
                        containerClientRect.left > docEl.clientWidth - containerClientRect.right &&
                        containerClientRect.left + window.pageXOffset >=
                            elClientRect.right - containerClientRect.right) {
                        this.position = ('left' +
                            (position.length == 2 ? '-' + position[1] : ''));
                    }
                    break;
                }
                case 'bottom': {
                    if (elClientRect.bottom > docEl.clientHeight &&
                        containerClientRect.top > docEl.clientHeight - containerClientRect.bottom &&
                        containerClientRect.top + window.pageYOffset >=
                            elClientRect.bottom - containerClientRect.bottom) {
                        this.position = ('top' +
                            (position.length == 2 ? '-' + position[1] : ''));
                    }
                    break;
                }
            }
        }
        let position = this.position.split('-');
        let arrowStyle = this.$('arrow').style;
        arrowStyle.top = arrowStyle.right = arrowStyle.bottom = arrowStyle.left = '';
        if (position.length == 2) {
            el.style[position[1]] = this.positionOffset + 'px';
            arrowStyle[position[1]] =
                el.offsetParent[position[1] == 'left' || position[1] == 'right' ? 'clientWidth' : 'clientHeight'] /
                    2 -
                    this.positionOffset +
                    'px';
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
        if (this.autoDirection) {
            this.position = this._positionAtOpening;
        }
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
                this.emit(OpalPopover_1.EVENT_CLOSE);
                break;
            }
            el = el.parentElement;
            if (!el) {
                break;
            }
        }
    }
};
OpalPopover.EVENT_CLOSE = Symbol('close');
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalPopover.prototype, "position", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalPopover.prototype, "positionOffset", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalPopover.prototype, "autoDirection", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalPopover.prototype, "closeOn", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalPopover.prototype, "opened", void 0);
__decorate([
    cellx_decorators_1.Observable,
    __metadata("design:type", Object)
], OpalPopover.prototype, "contentRendered", void 0);
__decorate([
    rionite_1.Listen('change:opened'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpalPopover.prototype, "_onOpenedChange", null);
OpalPopover = OpalPopover_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalPopover',
        template: template_rnt_1.default
    })
], OpalPopover);
exports.OpalPopover = OpalPopover;


/***/ }),

/***/ "fDbg":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = "opal-popover{display:none}.OpalPopover{position:absolute;z-index:600;display:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px;border:1px solid var(--grayColor800, hsl(0,0%,80%));border-radius:6px;background:#fff;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.2);box-shadow:0 1px 3px rgba(0,0,0,.2);line-height:1.5;cursor:default}.OpalPopover::before{position:absolute;content:''}.OpalPopover .OpalPopover__arrow{position:absolute;width:0;height:0}.OpalPopover .OpalPopover__arrow::before,.OpalPopover .OpalPopover__arrow::after{position:absolute;width:0;height:0;border:10px solid transparent;content:''}.OpalPopover .OpalPopover__arrow::after{border:8px solid transparent}.OpalPopover .OpalPopover__contentSlot{position:relative;display:block}.OpalPopover[view_type=primary] .OpalPopover__contentSlot,.OpalPopover[view_type=success] .OpalPopover__contentSlot,.OpalPopover[view_type=danger] .OpalPopover__contentSlot{margin:-16px;padding:15px;border-radius:4px}.OpalPopover[view_type=primary] .OpalPopover__contentSlot{border:1px solid var(--primaryColor500, hsl(208,93%,50%))}.OpalPopover[view_type=success] .OpalPopover__contentSlot{border:1px solid var(--successColor500, hsl(123,40%,48%))}.OpalPopover[view_type=danger] .OpalPopover__contentSlot{border:1px solid var(--dangerColor400, hsl(5,90%,48.4%))}.OpalPopover[position=top],.OpalPopover[position=top-left],.OpalPopover[position=top-right]{bottom:100%;margin-bottom:15px}.OpalPopover[position=top]::before,.OpalPopover[position=top-left]::before,.OpalPopover[position=top-right]::before{top:100%;right:0;left:0;height:16px}.OpalPopover[position=top] .OpalPopover__arrow,.OpalPopover[position=top-left] .OpalPopover__arrow,.OpalPopover[position=top-right] .OpalPopover__arrow{top:100%}.OpalPopover[position=top] .OpalPopover__arrow::before,.OpalPopover[position=top] .OpalPopover__arrow::after,.OpalPopover[position=top-left] .OpalPopover__arrow::before,.OpalPopover[position=top-left] .OpalPopover__arrow::after,.OpalPopover[position=top-right] .OpalPopover__arrow::before,.OpalPopover[position=top-right] .OpalPopover__arrow::after{border-top-color:var(--grayColor800, hsl(0,0%,80%));border-bottom-width:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.OpalPopover[position=top] .OpalPopover__arrow::after,.OpalPopover[position=top-left] .OpalPopover__arrow::after,.OpalPopover[position=top-right] .OpalPopover__arrow::after{border-top-color:#fff}.OpalPopover[position=top]{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.OpalPopover[position=top] .OpalPopover__arrow{left:50%}.OpalPopover[position=top-left]{left:0}.OpalPopover[position=top-left] .OpalPopover__arrow{-webkit-transform:translateX(-1px);-ms-transform:translateX(-1px);transform:translateX(-1px)}.OpalPopover[position=top-right]{right:0}.OpalPopover[position=top-right] .OpalPopover__arrow{-webkit-transform:translateX(1px);-ms-transform:translateX(1px);transform:translateX(1px)}.OpalPopover[position=right],.OpalPopover[position=right-top],.OpalPopover[position=right-bottom]{left:100%;margin-left:15px}.OpalPopover[position=right]::before,.OpalPopover[position=right-top]::before,.OpalPopover[position=right-bottom]::before{top:0;right:100%;bottom:0;width:16px}.OpalPopover[position=right] .OpalPopover__arrow,.OpalPopover[position=right-top] .OpalPopover__arrow,.OpalPopover[position=right-bottom] .OpalPopover__arrow{right:100%}.OpalPopover[position=right] .OpalPopover__arrow::before,.OpalPopover[position=right] .OpalPopover__arrow::after,.OpalPopover[position=right-top] .OpalPopover__arrow::before,.OpalPopover[position=right-top] .OpalPopover__arrow::after,.OpalPopover[position=right-bottom] .OpalPopover__arrow::before,.OpalPopover[position=right-bottom] .OpalPopover__arrow::after{right:0;border-right-color:var(--grayColor800, hsl(0,0%,80%));border-left-width:0;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.OpalPopover[position=right] .OpalPopover__arrow::after,.OpalPopover[position=right-top] .OpalPopover__arrow::after,.OpalPopover[position=right-bottom] .OpalPopover__arrow::after{border-right-color:#fff}.OpalPopover[position=right]{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.OpalPopover[position=right] .OpalPopover__arrow{top:50%}.OpalPopover[position=right-top]{top:0}.OpalPopover[position=right-top] .OpalPopover__arrow{-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px)}.OpalPopover[position=right-bottom]{bottom:0}.OpalPopover[position=right-bottom] .OpalPopover__arrow{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalPopover[position=bottom],.OpalPopover[position=bottom-left],.OpalPopover[position=bottom-right]{top:100%;margin-top:15px}.OpalPopover[position=bottom]::before,.OpalPopover[position=bottom-left]::before,.OpalPopover[position=bottom-right]::before{right:0;bottom:100%;left:0;height:16px}.OpalPopover[position=bottom] .OpalPopover__arrow,.OpalPopover[position=bottom-left] .OpalPopover__arrow,.OpalPopover[position=bottom-right] .OpalPopover__arrow{bottom:100%}.OpalPopover[position=bottom] .OpalPopover__arrow::before,.OpalPopover[position=bottom] .OpalPopover__arrow::after,.OpalPopover[position=bottom-left] .OpalPopover__arrow::before,.OpalPopover[position=bottom-left] .OpalPopover__arrow::after,.OpalPopover[position=bottom-right] .OpalPopover__arrow::before,.OpalPopover[position=bottom-right] .OpalPopover__arrow::after{bottom:0;border-top-width:0;border-bottom-color:var(--grayColor800, hsl(0,0%,80%));-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.OpalPopover[position=bottom] .OpalPopover__arrow::after,.OpalPopover[position=bottom-left] .OpalPopover__arrow::after,.OpalPopover[position=bottom-right] .OpalPopover__arrow::after{border-bottom-color:#fff}.OpalPopover[position=bottom]{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.OpalPopover[position=bottom] .OpalPopover__arrow{left:50%}.OpalPopover[position=bottom-left]{left:0}.OpalPopover[position=bottom-left] .OpalPopover__arrow{-webkit-transform:translateX(-1px);-ms-transform:translateX(-1px);transform:translateX(-1px)}.OpalPopover[position=bottom-right]{right:0}.OpalPopover[position=bottom-right] .OpalPopover__arrow{-webkit-transform:translateX(1px);-ms-transform:translateX(1px);transform:translateX(1px)}.OpalPopover[position=left],.OpalPopover[position=left-top],.OpalPopover[position=left-bottom]{right:100%;margin-right:15px}.OpalPopover[position=left]::before,.OpalPopover[position=left-top]::before,.OpalPopover[position=left-bottom]::before{top:0;right:100%;bottom:0;width:16px}.OpalPopover[position=left] .OpalPopover__arrow,.OpalPopover[position=left-top] .OpalPopover__arrow,.OpalPopover[position=left-bottom] .OpalPopover__arrow{left:100%}.OpalPopover[position=left] .OpalPopover__arrow::before,.OpalPopover[position=left] .OpalPopover__arrow::after,.OpalPopover[position=left-top] .OpalPopover__arrow::before,.OpalPopover[position=left-top] .OpalPopover__arrow::after,.OpalPopover[position=left-bottom] .OpalPopover__arrow::before,.OpalPopover[position=left-bottom] .OpalPopover__arrow::after{left:0;border-right-width:0;border-left-color:var(--grayColor800, hsl(0,0%,80%));-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.OpalPopover[position=left] .OpalPopover__arrow::after,.OpalPopover[position=left-top] .OpalPopover__arrow::after,.OpalPopover[position=left-bottom] .OpalPopover__arrow::after{border-left-color:#fff}.OpalPopover[position=left]{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.OpalPopover[position=left] .OpalPopover__arrow{top:50%}.OpalPopover[position=left-top]{top:0}.OpalPopover[position=left-top] .OpalPopover__arrow{-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px)}.OpalPopover[position=left-bottom]{bottom:0}.OpalPopover[position=left-bottom] .OpalPopover__arrow{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalPopover[opened]{display:block;-webkit-animation:OpalPopover__fadeInAnimation .1s linear;animation:OpalPopover__fadeInAnimation .1s linear}@-webkit-keyframes OpalPopover__fadeInAnimation{0%{opacity:0}to{opacity:1}}@keyframes OpalPopover__fadeInAnimation{0%{opacity:0}to{opacity:1}}";
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

/***/ "vA/G":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vA_G__;

/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ })

/******/ });
});