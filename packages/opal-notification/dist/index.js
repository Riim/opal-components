(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("cellx"), require("@riim/opal-icon"), require("@riim/map-set-polyfill"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "cellx", "@riim/opal-icon", "@riim/map-set-polyfill"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-notification"] = factory(require("rionite"), require("reflect-metadata"), require("cellx"), require("@riim/opal-icon"), require("@riim/map-set-polyfill"));
	else
		root["@riim/opal-notification"] = factory(root["rionite"], root["reflect-metadata"], root["cellx"], root["@riim/opal-icon"], root["@riim/map-set-polyfill"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_177__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 175);
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

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(5);
__webpack_require__(1);
__export(__webpack_require__(176));


/***/ }),

/***/ 176:
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
var map_set_polyfill_1 = __webpack_require__(177);
var cellx_1 = __webpack_require__(3);
var rionite_1 = __webpack_require__(0);
__webpack_require__(178);
var template_nelm_1 = __webpack_require__(179);
var container;
var shownNotifications = new map_set_polyfill_1.Set();
function initContainer(notification) {
    if (!container) {
        container = document.createElement('div');
        container.className =
            notification.constructor._elementBlockNames.join('__container ') + '__container';
        document.body.appendChild(container);
    }
    return container;
}
var OpalNotification = /** @class */ (function (_super) {
    __extends(OpalNotification, _super);
    function OpalNotification() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramViewType = 'default';
        _this.paramIconSize = 'm';
        _this.paramButtonHide = true;
        _this.paramTimeout = 0;
        _this.paramShown = false;
        return _this;
    }
    OpalNotification.prototype.$ = function (name, container) {
        if (container === void 0) { container = this.bar; }
        return _super.prototype.$.call(this, name, container);
    };
    OpalNotification.prototype.ready = function () {
        initContainer(this);
        var bar = (this.bar = this.$('bar', this));
        this.element.removeChild(bar);
        if (this.$('icon')) {
            bar.setAttribute('has-icon', '');
        }
        if (this.paramShown) {
            this._show();
        }
    };
    OpalNotification.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramShown', this._onParamShownChange);
        this.listenTo('btn-hide', 'click', this._onBtnHideClick);
    };
    OpalNotification.prototype.elementDetached = function () {
        this.hide();
    };
    OpalNotification.prototype._onParamShownChange = function (evt) {
        if (evt.data.value) {
            this._show();
        }
        else {
            this._hide();
        }
    };
    OpalNotification.prototype._onBtnHideClick = function () {
        this.hide();
        this.emit('hide');
        this.emit('close');
    };
    OpalNotification.prototype.show = function () {
        if (this.paramShown) {
            return false;
        }
        this.paramShown = true;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalNotification.prototype.hide = function () {
        if (!this.paramShown) {
            return false;
        }
        this.paramShown = false;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalNotification.prototype.open = function () {
        return this.show();
    };
    OpalNotification.prototype.close = function () {
        return this.hide();
    };
    OpalNotification.prototype.toggle = function (value) {
        if (value !== undefined) {
            return value ? this.show() : !this.hide();
        }
        return this.show() || !this.hide();
    };
    OpalNotification.prototype._show = function () {
        var _this = this;
        shownNotifications.add(this);
        container.appendChild(this.bar);
        setTimeout(function () {
            _this.bar.setAttribute('shown', '');
            if (_this.paramTimeout) {
                setTimeout(function () {
                    _this.hide();
                }, _this.paramTimeout);
            }
        }, 100);
    };
    OpalNotification.prototype._hide = function () {
        shownNotifications.delete(this);
        container.removeChild(this.bar);
        this.bar.removeAttribute('shown');
    };
    OpalNotification.prototype.focus = function () {
        var focusEl = this.$('focus');
        if (focusEl) {
            document.body.classList.remove('_noFocusHighlight');
            focusEl.focus();
        }
        return this;
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalNotification.prototype, "paramViewType", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalNotification.prototype, "paramIconSize", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalNotification.prototype, "paramButtonHide", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalNotification.prototype, "paramTimeout", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalNotification.prototype, "paramShown", void 0);
    OpalNotification = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default
        })
    ], OpalNotification);
    return OpalNotification;
}(rionite_1.BaseComponent));
exports.OpalNotification = OpalNotification;


/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_177__;

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalNotification__container{position:fixed;top:10px;right:20px;z-index:300;width:400px}.OpalNotification__container .OpalNotification__bar{position:relative;right:-200px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:10px 0;padding:10px 40px 10px 20px;width:400px;border-radius:3px;background:#546778;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.3);box-shadow:0 2px 4px rgba(0,0,0,.3);color:#fff;opacity:0;-webkit-transition:right .2s linear,opacity .2s linear;-o-transition:right .2s linear,opacity .2s linear;transition:right .2s linear,opacity .2s linear}.OpalNotification__container .OpalNotification__bar[view-type=primary]{background:#1b91f8}.OpalNotification__container .OpalNotification__bar[view-type=success]{background:#18b461}.OpalNotification__container .OpalNotification__bar[view-type=danger]{background:#f63159}.OpalNotification__container .OpalNotification__bar[has-icon]{padding-left:48px}.OpalNotification__container .OpalNotification__bar[shown]{right:0;opacity:1}.OpalNotification__container .OpalNotification__icon{position:absolute;top:0;bottom:0;left:16px;margin:auto}.OpalNotification__container svg.OpalNotification__icon{display:block;width:18px;height:18px;stroke-width:3px;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;fill:none}.OpalNotification__container .OpalNotification__btn-hide{position:absolute;top:0;right:10px;bottom:0;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:#fff;opacity:.7;cursor:pointer;-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;transition:opacity .1s linear}.OpalNotification__container .OpalNotification__btn-hide:hover{opacity:1}.OpalNotification__container .OpalNotification__btn-hide:focus{outline:0}body:not(._noFocusHighlight) .OpalNotification__container .OpalNotification__btn-hide:focus{outline:1px solid #1b91f8}.OpalNotification__container .OpalNotification__btn-hide:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalNotification__container .OpalNotification__btn-hide[hide]{display:none}.OpalNotification__container .OpalNotification__btn-hide-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\ndiv/bar (view-type={paramViewType}, icon-size={paramIconSize}, button-hide={paramButtonHide}) {\nRtSlot/icon-slot (for=icon)\nRtSlot/content-slot\nbutton/btn-hide (hide={paramButtonHide |not }) {\nOpalIcon/btn-hide-icon (name=cross)\n}\n}\n}");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ })

/******/ });
});