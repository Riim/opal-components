(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("@riim/next-tick"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "@riim/next-tick", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-button"] = factory(require("reflect-metadata"), require("@riim/next-tick"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-button"] = factory(root["reflect-metadata"], root["@riim/next-tick"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__8__, __WEBPACK_EXTERNAL_MODULE__9__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(4);
__export(__webpack_require__(13));


/***/ }),
/* 13 */
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
var next_tick_1 = __webpack_require__(6);
var cellx_decorators_1 = __webpack_require__(8);
var rionite_1 = __webpack_require__(9);
__webpack_require__(14);
var OpalButton = /** @class */ (function (_super) {
    __extends(OpalButton, _super);
    function OpalButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramViewType = 'default';
        _this.paramSize = 'm';
        _this.paramCheckable = false;
        _this.paramChecked = false;
        _this.paramLoading = false;
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        return _this;
    }
    Object.defineProperty(OpalButton.prototype, "_tabIndex", {
        get: function () {
            return this.paramDisabled ? -1 : this.paramTabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalButton.prototype.ready = function () {
        if (this.paramFocused) {
            this.element.tabIndex = this._tabIndex;
            this.focus();
        }
    };
    OpalButton.prototype.elementAttached = function () {
        this.listenTo(this, {
            'change:paramFocused': this._onParamFocusedChange,
            'change:_tabIndex': this._onTabIndexChange
        });
        this.listenTo(this.element, {
            focus: this._onElementFocus,
            blur: this._onElementBlur,
            click: this._onElementClick
        });
        this.element.tabIndex = this._tabIndex;
    };
    OpalButton.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalButton.prototype._onTabIndexChange = function () {
        this.element.tabIndex = this._tabIndex;
    };
    OpalButton.prototype._onElementFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement != _this.element) {
                return;
            }
            if (_this.element.tagName.indexOf('-', 1) != -1) {
                _this._documentKeyDownListening = _this.listenTo(document, 'keydown', _this._onDocumentKeyDown);
            }
            _this.paramFocused = true;
            _this.emit('focus');
        });
    };
    OpalButton.prototype._onElementBlur = function () {
        if (this._documentKeyDownListening) {
            this._documentKeyDownListening.stop();
        }
        this.paramFocused = false;
        this.emit('blur');
    };
    OpalButton.prototype._onElementClick = function () {
        if (!this.paramDisabled) {
            this.click();
        }
    };
    OpalButton.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */) {
            evt.preventDefault();
            if (!this.paramDisabled) {
                this.click();
            }
        }
    };
    OpalButton.prototype.click = function () {
        if (!this.emit('click').defaultPrevented && this.paramCheckable) {
            this.emit(this.toggle() ? 'check' : 'uncheck');
            this.emit('change');
        }
        return this;
    };
    Object.defineProperty(OpalButton.prototype, "checked", {
        get: function () {
            return this.paramChecked;
        },
        set: function (checked) {
            this.paramChecked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalButton.prototype, "selected", {
        get: function () {
            return this.checked;
        },
        set: function (selected) {
            this.checked = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalButton.prototype.check = function () {
        if (!this.paramChecked) {
            this.paramChecked = true;
            return true;
        }
        return false;
    };
    OpalButton.prototype.uncheck = function () {
        if (this.paramChecked) {
            this.paramChecked = false;
            return true;
        }
        return false;
    };
    OpalButton.prototype.toggle = function (value) {
        return (this.paramChecked = value === undefined ? !this.paramChecked : value);
    };
    OpalButton.prototype.focus = function () {
        this.element.focus();
        return this;
    };
    OpalButton.prototype.blur = function () {
        this.element.blur();
        return this;
    };
    OpalButton.prototype.enable = function () {
        this.paramDisabled = false;
        return this;
    };
    OpalButton.prototype.disable = function () {
        this.paramDisabled = true;
        return this;
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramViewType", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramSize", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramCheckable", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramChecked", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramLoading", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalButton.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalButton.prototype, "_tabIndex", null);
    OpalButton = __decorate([
        rionite_1.Component({
            elementIs: 'OpalButton'
        })
    ], OpalButton);
    return OpalButton;
}(rionite_1.BaseComponent));
exports.OpalButton = OpalButton;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalButton{padding:0;border:0;background:0 0;color:inherit;font:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalButton:not([view_type=clean]){position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:7px 23px;border-radius:3px;background:#546778;color:#fff;vertical-align:middle;text-align:center;text-decoration:none;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-transition:background .1s linear;-o-transition:background .1s linear;transition:background .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalButton:not([view_type=clean])::-moz-focus-inner{padding:0;border:0}.OpalButton:not([view_type=clean])[size=s]{padding:4px 14px;font-size:14px;line-height:21px}.OpalButton:not([view_type=clean]):hover{background:#597791}.OpalButton:not([view_type=clean]):focus{outline:0}body:not(._noFocusHighlight) .OpalButton:not([view_type=clean]):focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border:1px solid rgba(255,255,255,.8);border-radius:inherit;content:'';pointer-events:none}.OpalButton:not([view_type=clean]):active,.OpalButton:not([view_type=clean])[checked]{background:#43484c}.OpalButton:not([view_type=clean])[loading]{background-image:-o-linear-gradient(315deg,rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.35) 50%,rgba(255,255,255,.35) 75%,transparent 75%,transparent 100%);background-image:linear-gradient(135deg,rgba(255,255,255,.35) 0,rgba(255,255,255,.35) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.35) 50%,rgba(255,255,255,.35) 75%,transparent 75%,transparent 100%);background-size:30px 30px;-webkit-animation:OpalButton__loadingAnimation 3s linear infinite;animation:OpalButton__loadingAnimation 3s linear infinite}.OpalButton:not([view_type=clean])[disabled]{opacity:.5;pointer-events:none}.OpalGroup>.OpalButton:not([view_type=clean]):not(:first-child),.OpalGroup>:not(:first-child) .OpalButton:not([view_type=clean]){border-top-left-radius:0;border-bottom-left-radius:0;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4)}.OpalGroup>.OpalButton:not([view_type=clean]):not(:last-child),.OpalGroup>:not(:last-child) .OpalButton:not([view_type=clean]){border-top-right-radius:0;border-bottom-right-radius:0}.OpalSwitchMenu .OpalButton:not([view_type=clean]):not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;-webkit-box-shadow:inset 1px 0 rgba(0,0,0,.4);box-shadow:inset 1px 0 rgba(0,0,0,.4)}.OpalSwitchMenu .OpalButton:not([view_type=clean]):not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.OpalButton[view_type=primary]{background:#1b91f8}.OpalButton[view_type=primary]:hover{background-color:#33a0ff}.OpalButton[view_type=primary]:active,.OpalButton[view_type=primary][checked]{background-color:#1371c3}.OpalButton[view_type=danger]{background:#f63159}.OpalButton[view_type=danger]:hover{background-color:#fd496d}.OpalButton[view_type=danger]:active,.OpalButton[view_type=danger][checked]{background-color:#d3173d}@-webkit-keyframes OpalButton__loadingAnimation{0%{background-position:0 0}to{background-position:60px 0}}@keyframes OpalButton__loadingAnimation{0%{background-position:0 0}to{background-position:60px 0}}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ })
/******/ ]);
});