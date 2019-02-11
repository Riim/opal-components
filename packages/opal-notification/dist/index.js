(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-icon"), require("reflect-metadata"), require("cellx"), require("rionite"), require("@riim/map-set-polyfill"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-icon", "reflect-metadata", "cellx", "rionite", "@riim/map-set-polyfill"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-notification"] = factory(require("@riim/opal-icon"), require("reflect-metadata"), require("cellx"), require("rionite"), require("@riim/map-set-polyfill"));
	else
		root["@riim/opal-notification"] = factory(root["@riim/opal-icon"], root["reflect-metadata"], root["cellx"], root["rionite"], root["@riim/map-set-polyfill"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__191__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 189);
/******/ })
/************************************************************************/
/******/ ({

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(2);
__webpack_require__(4);
__export(__webpack_require__(190));


/***/ }),

/***/ 190:
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var map_set_polyfill_1 = __webpack_require__(191);
var cellx_1 = __webpack_require__(7);
var rionite_1 = __webpack_require__(9);
__webpack_require__(192);
var template = __webpack_require__(193);
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
        _this.paramIconSize = 'xs';
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
        if (this.paramShown) {
            this._show();
        }
    };
    OpalNotification.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramShown', this._onParamShownChange);
        this.listenTo('btnHide', 'click', this._onBtnHideClick);
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
            // для анимации
            _this.bar.setAttribute('shown', '');
            if (_this.paramTimeout) {
                _this._closingTimeoutId = setTimeout(function () {
                    _this.hide();
                    _this.emit('hide');
                    _this.emit('close');
                }, _this.paramTimeout);
            }
        }, 100);
    };
    OpalNotification.prototype._hide = function () {
        if (this._closingTimeoutId) {
            clearTimeout(this._closingTimeoutId);
            this._closingTimeoutId = null;
        }
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
        __metadata("design:type", String)
    ], OpalNotification.prototype, "paramIcon", void 0);
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
            elementIs: 'OpalNotification',
            template: template
        })
    ], OpalNotification);
    return OpalNotification;
}(rionite_1.BaseComponent));
exports.OpalNotification = OpalNotification;


/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__191__;

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalNotification__container{position:fixed;top:10px;right:20px;z-index:300;width:400px}.OpalNotification__container .OpalNotification__bar{position:relative;right:-200px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:10px 0;padding:10px 40px 10px 20px;width:400px;border-radius:3px;background:#546778;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.3);box-shadow:0 2px 4px rgba(0,0,0,.3);color:#fff;opacity:0;-webkit-transition:right .2s linear,opacity .2s linear;-o-transition:right .2s linear,opacity .2s linear;transition:right .2s linear,opacity .2s linear}.OpalNotification__container .OpalNotification__bar[view_type=primary]{background:#1b91f8}.OpalNotification__container .OpalNotification__bar[view_type=success]{background:#18b461}.OpalNotification__container .OpalNotification__bar[view_type=danger]{background:#f63159}.OpalNotification__container .OpalNotification__bar[has_icon][icon_size=xs]{padding-left:48px}.OpalNotification__container .OpalNotification__bar[has_icon][icon_size=s]{padding-left:52px}.OpalNotification__container .OpalNotification__bar[has_icon][icon_size=m]{padding-left:56px}.OpalNotification__container .OpalNotification__bar[shown]{right:0;opacity:1}.OpalNotification__container .OpalNotification__icon{position:absolute;top:0;bottom:0;left:16px;margin:auto}.OpalNotification__container .OpalNotification__btnHide{position:absolute;top:0;right:10px;bottom:0;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:#fff;opacity:.7;cursor:pointer;-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;transition:opacity .1s linear}.OpalNotification__container .OpalNotification__btnHide:hover{opacity:1}.OpalNotification__container .OpalNotification__btnHide:focus{outline:0}body:not(._noFocusHighlight) .OpalNotification__container .OpalNotification__btnHide:focus{outline:1px solid #1b91f8}.OpalNotification__container .OpalNotification__btnHide:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalNotification__container .OpalNotification__btnHide[hide]{display:none}.OpalNotification__container .OpalNotification__btnHideIcon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "div/bar (\nviewType={paramViewType},\nhasIcon={paramIcon |notnot },\niconSize={paramIconSize},\nbuttonHide={paramButtonHide}\n) {\n@IfThen (paramIcon) {\nOpalIcon/icon (name={paramIcon}, size={paramIconSize})\n}\n@Slot/contentSlot\nbutton/btnHide (hide={paramButtonHide |not }) {\nOpalIcon/btnHideIcon (name=cross)\n}\n}"

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ })

/******/ });
});