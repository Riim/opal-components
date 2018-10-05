(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "cellx", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/packages/opal-dropdown/src/index.ts"] = factory(require("reflect-metadata"), require("cellx"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/packages/opal-dropdown/src/index.ts"] = factory(root["reflect-metadata"], root["cellx"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(4);
__export(__webpack_require__(36));


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
var cellx_1 = __webpack_require__(8);
var cellx_decorators_1 = __webpack_require__(9);
var rionite_1 = __webpack_require__(10);
__webpack_require__(37);
var template_nelm_1 = __webpack_require__(38);
var openedDropdowns = [];
var OpalDropdown = /** @class */ (function (_super) {
    __extends(OpalDropdown, _super);
    function OpalDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramAutoHeight = true;
        _this.paramOpened = false;
        _this.contentRendered = false;
        return _this;
    }
    OpalDropdown.prototype.ready = function () {
        if (this.paramOpened) {
            this._open();
        }
    };
    OpalDropdown.prototype.elementAttached = function () {
        this.listenTo(this, 'change:paramOpened', this._onParamOpenedChange);
    };
    OpalDropdown.prototype._onParamOpenedChange = function (evt) {
        if (evt.data.value) {
            this._open();
        }
        else {
            this._close();
        }
    };
    OpalDropdown.prototype.renderContent = function () {
        this.contentRendered = true;
        cellx_1.Cell.forceRelease();
    };
    OpalDropdown.prototype.open = function () {
        if (this.paramOpened) {
            return false;
        }
        this.paramOpened = true;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalDropdown.prototype.close = function () {
        if (!this.paramOpened) {
            return false;
        }
        this.paramOpened = false;
        cellx_1.Cell.forceRelease();
        return true;
    };
    OpalDropdown.prototype.toggle = function (value) {
        if (value !== undefined) {
            return value ? this.open() : !this.close();
        }
        return this.open() || !this.close();
    };
    OpalDropdown.prototype._open = function () {
        openedDropdowns.push(this);
        if (this.contentRendered) {
            this._open$();
        }
        else {
            this.contentRendered = true;
            cellx_1.Cell.forceRelease();
            this._open$();
        }
    };
    OpalDropdown.prototype._open$ = function () {
        var _this = this;
        var el = this.element;
        var elStyle = el.style;
        elStyle.top = '100%';
        elStyle.right = 'auto';
        elStyle.bottom = 'auto';
        elStyle.left = '0';
        elStyle.maxHeight = 'none';
        var containerClientRect = el.offsetParent.getBoundingClientRect();
        var elClientRect = el.getBoundingClientRect();
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
        var margin = elClientRect.top - containerClientRect.bottom;
        var excess = elClientRect.bottom + margin - document.documentElement.clientHeight;
        if (excess > 0) {
            var diff = containerClientRect.top -
                (document.documentElement.clientHeight - containerClientRect.bottom);
            if (this.paramAutoHeight) {
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
        if (this.paramCloseOn) {
            setTimeout(function () {
                if (_this.paramOpened) {
                    _this._closingEventListening = _this.listenTo(document, _this.paramCloseOn, _this._onClosingEvent);
                }
            }, 1);
        }
    };
    OpalDropdown.prototype._close = function () {
        openedDropdowns.splice(openedDropdowns.indexOf(this), 1);
        if (this._closingEventListening) {
            this._closingEventListening.stop();
            this._closingEventListening = null;
        }
    };
    OpalDropdown.prototype._onClosingEvent = function (evt) {
        var docEl = document.documentElement;
        var componentEl = this.element;
        for (var el = evt.target; el != componentEl;) {
            if (el == docEl || el.tagName == 'A') {
                this.close();
                this.emit('close');
                break;
            }
            el = el.parentElement;
            if (!el) {
                break;
            }
        }
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalDropdown.prototype, "paramAutoHeight", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalDropdown.prototype, "paramCloseOn", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalDropdown.prototype, "paramOpened", void 0);
    __decorate([
        cellx_decorators_1.Observable,
        __metadata("design:type", Object)
    ], OpalDropdown.prototype, "contentRendered", void 0);
    OpalDropdown = __decorate([
        rionite_1.Component({
            elementIs: 'OpalDropdown',
            template: template_nelm_1.default
        })
    ], OpalDropdown);
    return OpalDropdown;
}(rionite_1.BaseComponent));
exports.OpalDropdown = OpalDropdown;


/***/ }),

/***/ 37:
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

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@IfThen (contentRendered) {\n@Slot/contentSlot\n}");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ })

/******/ });
});