(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"), require("@riim/next-tick"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "cellx-decorators", "@riim/next-tick"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-text-input"] = factory(require("rionite"), require("reflect-metadata"), require("cellx-decorators"), require("@riim/next-tick"));
	else
		root["@riim/opal-text-input"] = factory(root["rionite"], root["reflect-metadata"], root["cellx-decorators"], root["@riim/next-tick"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 233);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(1);
__export(__webpack_require__(234));


/***/ }),

/***/ 234:
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
var next_tick_1 = __webpack_require__(4);
var cellx_decorators_1 = __webpack_require__(2);
var rionite_1 = __webpack_require__(0);
__webpack_require__(235);
var template_nelm_1 = __webpack_require__(236);
var OpalTextInput = /** @class */ (function (_super) {
    __extends(OpalTextInput, _super);
    function OpalTextInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramInputType = 'text';
        _this.paramSize = 'm';
        _this.paramMultiline = false;
        _this.paramRows = 5;
        _this.paramAutoHeight = true;
        _this.paramValue = '';
        _this.paramClearable = false;
        _this.paramLoading = false;
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        return _this;
    }
    Object.defineProperty(OpalTextInput.prototype, "_textFieldValue", {
        get: function () {
            return this.paramValue;
        },
        set: function (value) {
            this._textFieldValueCell.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTextInput.prototype, "value", {
        get: function () {
            return this._textFieldValue.trim() || null;
        },
        set: function (value) {
            this._textFieldValue = this.textField.value = value || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTextInput.prototype, "isControlIconShown", {
        get: function () {
            return !this.isBtnClearShown && !this.paramLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalTextInput.prototype, "isBtnClearShown", {
        get: function () {
            return !!this._textFieldValue && !this.paramLoading;
        },
        enumerable: true,
        configurable: true
    });
    OpalTextInput.prototype.ready = function () {
        var textField = (this.textField = this.$('text-field'));
        if (this._textFieldValue) {
            textField.value = this._textFieldValue;
        }
        else if (this.paramStoreKey) {
            this._textFieldValue = textField.value = localStorage.getItem(this.paramStoreKey) || '';
        }
        this._prevValue = this.value;
        if (this.paramMultiline && this.paramAutoHeight) {
            var offsetHeight = textField.offsetHeight;
            if (offsetHeight) {
                this._initialHeight =
                    offsetHeight + textField.scrollHeight - textField.clientHeight;
                this._fixHeight();
            }
            else {
                this._initialHeight =
                    parseInt(getComputedStyle(textField).lineHeight, 10) * this.paramRows +
                        parseInt(getComputedStyle(textField).borderTop, 10) +
                        parseInt(getComputedStyle(textField).borderBottom, 10) +
                        parseInt(getComputedStyle(textField).paddingTop, 10) +
                        parseInt(getComputedStyle(textField).paddingBottom, 10);
                textField.style.height = this._initialHeight + 'px';
            }
        }
        if (this.paramFocused) {
            this.focus();
        }
    };
    OpalTextInput.prototype.elementAttached = function () {
        this.listenTo(this, {
            'change:paramValue': this._onParamValueChange,
            'change:paramFocused': this._onParamFocusedChange
        });
        this.listenTo(this.textField, {
            focus: this._onTextFieldFocus,
            blur: this._onTextFieldBlur,
            input: this._onTextFieldInput,
            change: this._onTextFieldChange,
            keydown: this._onTextFieldKeyDown,
            keypress: this._onTextFieldKeyPress,
            keyup: this._onTextFieldKeyUp
        });
    };
    OpalTextInput.prototype._onParamValueChange = function (evt) {
        if (this.textField.value != evt.data.value) {
            this.textField.value = evt.data.value;
        }
    };
    OpalTextInput.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
            this.focus();
        }
        else {
            this.blur();
        }
    };
    OpalTextInput.prototype._onTextFieldFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == _this.textField) {
                _this.paramFocused = true;
                _this.emit('focus');
            }
        });
    };
    OpalTextInput.prototype._onTextFieldBlur = function () {
        this.paramFocused = false;
        this.emit('blur');
    };
    OpalTextInput.prototype._onTextFieldInput = function (evt) {
        this._textFieldValue = this.textField.value;
        this.emit('input', {
            initialEvent: evt
        });
    };
    OpalTextInput.prototype._onTextFieldChange = function (evt) {
        if (this.value === this._prevValue) {
            return;
        }
        this._prevValue = this.value;
        if (this.paramStoreKey) {
            localStorage.setItem(this.paramStoreKey, this.textField.value);
        }
        this.emit({
            type: 'change',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._onTextFieldKeyDown = function (evt) {
        var _this = this;
        if (this.paramMultiline && this.paramAutoHeight) {
            setTimeout(function () {
                _this._fixHeight();
            }, 1);
        }
        this.emit({
            type: 'keydown',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._onTextFieldKeyPress = function (evt) {
        if (evt.which == 13 /* Enter */ && this.value) {
            this.emit('confirm');
        }
        this.emit({
            type: 'keypress',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._onTextFieldKeyUp = function (evt) {
        if (this.paramMultiline && this.paramAutoHeight) {
            this._fixHeight();
        }
        this.emit({
            type: 'keyup',
            data: {
                initialEvent: evt
            }
        });
    };
    OpalTextInput.prototype._fixHeight = function () {
        var textField = this.textField;
        var lineHeight = parseInt(getComputedStyle(textField).lineHeight, 10);
        textField.style.height = this._initialHeight - lineHeight + 'px';
        textField.style.height =
            textField.offsetHeight +
                textField.scrollHeight -
                textField.clientHeight +
                lineHeight +
                'px';
    };
    OpalTextInput.prototype.clear = function () {
        this.value = null;
        return this;
    };
    OpalTextInput.prototype.focus = function () {
        this.textField.focus();
        return this;
    };
    OpalTextInput.prototype.blur = function () {
        this.textField.blur();
        return this;
    };
    OpalTextInput.prototype.enable = function () {
        this.paramDisabled = false;
        return this;
    };
    OpalTextInput.prototype.disable = function () {
        this.paramDisabled = true;
        return this;
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramInputType", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramSize", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramMultiline", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramRows", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramAutoHeight", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTextInput.prototype, "paramInputName", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramValue", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTextInput.prototype, "paramStoreKey", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalTextInput.prototype, "paramPlaceholder", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramClearable", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramLoading", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalTextInput.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], OpalTextInput.prototype, "_textFieldValue", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalTextInput.prototype, "isControlIconShown", null);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], OpalTextInput.prototype, "isBtnClearShown", null);
    OpalTextInput = __decorate([
        rionite_1.Component({
            template: template_nelm_1.default,
            domEvents: {
                'btn-clear': {
                    click: function () {
                        this.value = null;
                        this.textField.focus();
                        this.emit('clear');
                        this.emit('change');
                    }
                }
            }
        })
    ], OpalTextInput);
    return OpalTextInput;
}(rionite_1.BaseComponent));
exports.OpalTextInput = OpalTextInput;


/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTextInput{position:relative;display:inline-block;width:400px;vertical-align:middle}.OpalTextInput .OpalTextInput__text-field{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 34px 6px 11px;width:100%;border:1px solid #adadad;border-top-color:#a8a8a8;border-bottom-color:#c7c7c7;border-radius:3px;background:#fff;-webkit-box-shadow:inset 0 1px rgba(0,0,0,.1);box-shadow:inset 0 1px rgba(0,0,0,.1);color:#000;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-transition:border-color .1s linear;-o-transition:border-color .1s linear;transition:border-color .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalTextInput .OpalTextInput__control-icon-slot{display:none}.OpalTextInput .OpalTextInput__control-icon-slot[shown]{display:block}.OpalTextInput .OpalTextInput__control-icon{position:absolute;top:0;right:12px;bottom:0;display:block;margin:auto;width:18px;height:18px;color:gray}.OpalTextInput .OpalTextInput__btn-clear{position:absolute;top:0;right:9px;bottom:0;display:none;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:gray;cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear}.OpalTextInput .OpalTextInput__btn-clear[shown]{display:block}.OpalTextInput .OpalTextInput__btn-clear:hover{color:#000}.OpalTextInput .OpalTextInput__btn-clear:focus{outline:0}body:not(._noFocusHighlight) .OpalTextInput .OpalTextInput__btn-clear:focus{outline:1px solid #1b91f8}.OpalTextInput .OpalTextInput__btn-clear:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalTextInput .OpalTextInput__btn-clear-icon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px}.OpalTextInput .OpalTextInput__loader{position:absolute;top:0;right:12px;bottom:0;margin:auto;border:0;pointer-events:none}.OpalTextInput:hover .OpalTextInput__text-field{border-color:#949494;border-top-color:#8f8f8f;border-bottom-color:#adadad}.OpalTextInput .OpalTextInput__text-field:focus{outline:0;border-color:#1b91f8}.OpalTextInput[multiline]:not([auto-height=no]) .OpalTextInput__text-field{overflow-y:hidden}.OpalTextInput[valid] .OpalTextInput__text-field,.OpalTextInput[valid] .OpalTextInput__text-field:focus{border-color:#18b461}.OpalTextInput[valid=no] .OpalTextInput__text-field,.OpalTextInput[valid=no] .OpalTextInput__text-field:focus{border-color:#f63159}.OpalTextInput[disabled]{opacity:.5;pointer-events:none}.OpalTextInput[disabled] .OpalTextInput__text-field{background:#e6e6e6}.OpalGroup .OpalGroup__content-slot>.OpalTextInput:not(:first-child),.OpalGroup .OpalGroup__content-slot>:not(:first-child) .OpalTextInput{margin-right:-1px}.OpalGroup__content-slot .OpalTextInput:not(:first-child) .OpalTextInput__text-field,.OpalGroup__content-slot :not(:first-child) .OpalTextInput .OpalTextInput__text-field{border-top-left-radius:0;border-bottom-left-radius:0}.OpalGroup__content-slot .OpalTextInput:not(:last-child) .OpalTextInput__text-field,.OpalGroup__content-slot :not(:last-child) .OpalTextInput .OpalTextInput__text-field{border-top-right-radius:0;border-bottom-right-radius:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\n@IfThen (if=paramMultiline) {\ntextarea/, text-field (\nrows={paramRows},\nname={paramInputName},\nplaceholder={paramPlaceholder},\ntabindex={paramTabIndex},\ndisabled={paramDisabled}\n)\n}\n@IfElse (if=paramMultiline) {\ninput/, text-field (\ntype={paramInputType},\nname={paramInputName},\nplaceholder={paramPlaceholder},\ntabindex={paramTabIndex},\ndisabled={paramDisabled}\n)\n}\nRtSlot/control-icon-slot (for=control-icon, shown={isControlIconShown})\n@IfThen (if=paramClearable) {\nbutton/btn-clear (shown={isBtnClearShown}) {\nOpalIcon/btn-clear-icon (name=cross)\n}\n}\n@IfThen (if=paramLoading) {\nOpalLoader/loader (size=s, shown)\n}\n}");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })

/******/ });
});