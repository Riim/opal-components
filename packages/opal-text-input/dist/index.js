(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-icon"), require("@riim/opal-loader"), require("reflect-metadata"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-icon", "@riim/opal-loader", "reflect-metadata", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-text-input"] = factory(require("@riim/opal-icon"), require("@riim/opal-loader"), require("reflect-metadata"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/opal-text-input"] = factory(root["@riim/opal-icon"], root["@riim/opal-loader"], root["reflect-metadata"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__) {
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
__webpack_require__(2);
__webpack_require__(3);
__export(__webpack_require__(4));


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
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
var OpalTextInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
const cellx_decorators_1 = __webpack_require__(5);
const rionite_1 = __webpack_require__(6);
__webpack_require__(7);
const template_rnt_1 = __webpack_require__(8);
let OpalTextInput = OpalTextInput_1 = class OpalTextInput extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.inputType = 'text';
        this.size = 'm';
        this.multiline = false;
        this.rows = 5;
        this.autoHeight = true;
        this.clearable = false;
        this.loading = false;
        this.tabIndex = 0;
        this.focused = false;
        this.disabled = false;
    }
    get _inputType() {
        return this.inputType;
    }
    get value() {
        return (this.paramValue && this.paramValue.trim()) || null;
    }
    set value(value) {
        this.paramValue = value || null;
        this.textField.value = value || '';
    }
    get btnClearShown() {
        return this.clearable && !this.loading && !!this.paramValue;
    }
    get endIconShown() {
        return !this.loading && !this.btnClearShown;
    }
    elementAttached() {
        this.textField = this.$('textField');
        if (this.paramValue) {
            this.textField.value = this.paramValue || '';
        }
        else if (this.storeKey) {
            let value = localStorage.getItem(this.storeKey);
            this.paramValue = value || null;
            this.textField.value = value || '';
        }
        this._prevValue = this.value;
        if (this.multiline && this.autoHeight) {
            this._fixMinHeight();
            this._fixHeight();
        }
        if (this.focused) {
            this.focus();
        }
        this.listenTo(this, {
            'change:rows': this._onRowsChange,
            'change:paramValue': this._onParamValueChange
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
    }
    _onRowsChange() {
        if (this.multiline && this.autoHeight) {
            this._fixMinHeight();
        }
    }
    _onParamValueChange(evt) {
        if (this.textField.value != evt.data.value) {
            this.textField.value = evt.data.value;
            if (this.multiline && this.autoHeight) {
                this._fixHeight();
            }
        }
    }
    _onTextFieldFocus() {
        this.focused = true;
        this.emit('focus');
    }
    _onTextFieldBlur() {
        this.focused = false;
        this.emit(OpalTextInput_1.EVENT_BLUR);
    }
    _onTextFieldInput(evt) {
        this.paramValue = this.textField.value || null;
        if (this.multiline && this.autoHeight) {
            this._fixHeight();
        }
        this.emit(OpalTextInput_1.EVENT_INPUT, { initialEvent: evt });
    }
    _onTextFieldChange(evt) {
        if (this.value === this._prevValue) {
            return;
        }
        this._prevValue = this.value;
        if (this.storeKey) {
            localStorage.setItem(this.storeKey, this.textField.value);
        }
        this.emit(OpalTextInput_1.EVENT_CHANGE, { initialEvent: evt });
    }
    _onTextFieldKeyDown(evt) {
        this.emit(OpalTextInput_1.EVENT_KEYDOWN, { initialEvent: evt });
    }
    _onTextFieldKeyPress(evt) {
        if (evt.which == 13 /* Enter */ && this.value) {
            this.emit(OpalTextInput_1.EVENT_CONFIRM);
        }
        this.emit(OpalTextInput_1.EVENT_KEYPRESS, { initialEvent: evt });
    }
    _onTextFieldKeyUp(evt) {
        this.emit(OpalTextInput_1.EVENT_KEYUP, { initialEvent: evt });
    }
    _fixMinHeight() {
        let style = getComputedStyle(this.textField);
        this.$('textareaHeight').style.minHeight =
            parseInt(style.paddingTop, 10) +
                parseInt(style.paddingBottom, 10) +
                parseInt(style.borderTop, 10) +
                parseInt(style.borderBottom, 10) +
                parseInt(style.lineHeight, 10) * this.rows +
                'px';
    }
    _fixHeight() {
        this.$('textareaHeight').innerHTML = this.textField.value + '\n';
    }
    clear() {
        this.value = null;
        return this;
    }
    focus() {
        this.textField.focus();
        return this;
    }
    blur() {
        this.textField.blur();
        return this;
    }
    enable() {
        this.disabled = false;
        return this;
    }
    disable() {
        this.disabled = true;
        return this;
    }
};
OpalTextInput.EVENT_BLUR = Symbol('blur');
OpalTextInput.EVENT_CHANGE = Symbol('change');
OpalTextInput.EVENT_CLEAR = Symbol('clear');
OpalTextInput.EVENT_CONFIRM = Symbol('confirm');
OpalTextInput.EVENT_FOCUS = Symbol('focus');
OpalTextInput.EVENT_INPUT = Symbol('input');
OpalTextInput.EVENT_KEYDOWN = Symbol('keydown');
OpalTextInput.EVENT_KEYPRESS = Symbol('keypress');
OpalTextInput.EVENT_KEYUP = Symbol('keyup');
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTextInput.prototype, "inputType", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTextInput.prototype, "size", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTextInput.prototype, "multiline", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTextInput.prototype, "rows", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTextInput.prototype, "autoHeight", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTextInput.prototype, "inputName", void 0);
__decorate([
    rionite_1.Param('value'),
    __metadata("design:type", String)
], OpalTextInput.prototype, "paramValue", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTextInput.prototype, "storeKey", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTextInput.prototype, "placeholder", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTextInput.prototype, "startIcon", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalTextInput.prototype, "endIcon", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTextInput.prototype, "clearable", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTextInput.prototype, "loading", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTextInput.prototype, "tabIndex", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTextInput.prototype, "focused", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTextInput.prototype, "disabled", void 0);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], OpalTextInput.prototype, "_inputType", null);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], OpalTextInput.prototype, "btnClearShown", null);
__decorate([
    cellx_decorators_1.Computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], OpalTextInput.prototype, "endIconShown", null);
OpalTextInput = OpalTextInput_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalTextInput',
        template: template_rnt_1.default,
        domEvents: {
            btnClear: {
                click(evt) {
                    evt.preventDefault();
                    this.value = null;
                    this.textField.focus();
                    this.emit(OpalTextInput_1.EVENT_CLEAR);
                    this.emit(OpalTextInput_1.EVENT_CHANGE);
                }
            },
            btnShowPassword: {
                mousedown() {
                    let listening = this.listenTo(document, 'mouseup', () => {
                        listening.stop();
                        this._inputTypeCell.pull();
                    });
                    this._inputTypeCell.set('text');
                },
                click(evt) {
                    evt.preventDefault();
                }
            }
        }
    })
], OpalTextInput);
exports.OpalTextInput = OpalTextInput;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTextInput{position:relative;display:inline-block;width:400px;vertical-align:middle}.OpalTextInput .OpalTextInput__textField,.OpalTextInput .OpalTextInput__textareaHeight{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 36px 6px 12px;width:100%;border:1px solid #adadad;border-top-color:#a8a8a8;border-bottom-color:#c7c7c7;border-radius:3px;background:#fff;-webkit-box-shadow:inset 0 1px rgba(0,0,0,.1);box-shadow:inset 0 1px rgba(0,0,0,.1);color:#000;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-transition:border-color .1s linear;-o-transition:border-color .1s linear;transition:border-color .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalTextInput .OpalTextInput__textareaContainer{position:relative}.OpalTextInput .OpalTextInput__textarea{position:absolute;top:0;right:0;left:0;height:100%;white-space:normal;resize:none}.OpalTextInput .OpalTextInput__textareaHeight{visibility:hidden;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word}.OpalTextInput .OpalTextInput__startIcon,.OpalTextInput .OpalTextInput__endIcon{position:absolute;top:0;bottom:0;display:block;margin:auto;width:18px;height:18px;color:gray}.OpalTextInput .OpalTextInput__startIcon{left:12px}.OpalTextInput .OpalTextInput__endIconSlot{display:none}.OpalTextInput .OpalTextInput__endIconSlot[shown]{display:block}.OpalTextInput .OpalTextInput__endIcon{right:12px}.OpalTextInput .OpalTextInput__btnClear{position:absolute;top:0;right:9px;bottom:0;display:none;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:gray;cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear}.OpalTextInput .OpalTextInput__btnClear[shown]{display:block}.OpalTextInput .OpalTextInput__btnClear:hover{color:#000}.OpalTextInput .OpalTextInput__btnClear:focus{outline:0}body:not(._noFocusHighlight) .OpalTextInput .OpalTextInput__btnClear:focus{outline:1px solid #1b91f8}.OpalTextInput .OpalTextInput__btnClear:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalTextInput .OpalTextInput__btnClearIcon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px}.OpalTextInput .OpalTextInput__loader{position:absolute;top:0;right:12px;bottom:0;margin:auto;border:0;pointer-events:none}.OpalTextInput .OpalTextInput__btnShowPassword{position:absolute;top:0;right:9px;bottom:0;display:block;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:gray;cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear;pointer-events:none}.OpalTextInput .OpalTextInput__btnShowPassword:hover{color:#000}.OpalTextInput .OpalTextInput__btnShowPassword:focus{outline:0}body:not(._noFocusHighlight) .OpalTextInput .OpalTextInput__btnShowPassword:focus{outline:1px solid #1b91f8}.OpalTextInput .OpalTextInput__btnShowPassword:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalTextInput .OpalTextInput__btnShowPasswordIcon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:22px;height:22px}.OpalTextInput:hover .OpalTextInput__textField{border-color:#949494;border-top-color:#8f8f8f;border-bottom-color:#adadad}.OpalTextInput .OpalTextInput__textField:focus{outline:0;border-color:#1b91f8}.OpalTextInput[input_type=password] .OpalTextInput__textField,.OpalTextInput[input_type=password] .OpalTextInput__textareaHeight{padding-right:64px}.OpalTextInput[input_type=password] .OpalTextInput__endIcon{right:40px}.OpalTextInput[input_type=password] .OpalTextInput__btnClear{right:37px}.OpalTextInput[input_type=password] .OpalTextInput__loader{right:40px}.OpalTextInput[multiline]:not([auto_height=no]) .OpalTextInput__textField{overflow-y:hidden}.OpalTextInput[value] .OpalTextInput__btnShowPassword{pointer-events:auto}.OpalTextInput[start_icon] .OpalTextInput__textField{padding-left:36px}.OpalTextInput[valid] .OpalTextInput__textField,.OpalTextInput[valid] .OpalTextInput__textField:focus{border-color:#18b461}.OpalTextInput[valid=no] .OpalTextInput__textField,.OpalTextInput[valid=no] .OpalTextInput__textField:focus{border-color:#f63159}.OpalTextInput[disabled]{opacity:.5;pointer-events:none}.OpalTextInput[disabled] .OpalTextInput__textField{background:#e6e6e6}.OpalGroup>.OpalTextInput:not(:first-child),.OpalGroup>:not(:first-child) .OpalTextInput{margin-right:-1px}.OpalGroup>.OpalTextInput:not(:first-child) .OpalTextInput__textField,.OpalGroup>:not(:first-child) .OpalTextInput .OpalTextInput__textField{border-top-left-radius:0;border-bottom-left-radius:0}.OpalGroup>.OpalTextInput:not(:last-child) .OpalTextInput__textField,.OpalGroup>:not(:last-child) .OpalTextInput .OpalTextInput__textField{border-top-right-radius:0;border-bottom-right-radius:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div:textareaContainer (@if=multiline) {\ntextarea:textarea:textField (\nrows={rows},\nname={inputName},\nplaceholder={placeholder},\ntabindex={tabIndex},\ndisabled={disabled}\n)\ndiv:textareaHeight\n}\ninput:input:textField (\n@unless=multiline,\ntype={_inputType},\nname={inputName},\nplaceholder={placeholder},\ntabindex={tabIndex},\ndisabled={disabled}\n)\nOpalIcon:startIcon (@if=startIcon, name={startIcon})\nRnSlot:endIconSlot (for=endIcon, shown={endIconShown}) {\nOpalIcon:endIcon (@if=endIcon, name={endIcon})\n}\nbutton:btnClear (@if=clearable, type=button, shown={btnClearShown}) {\nOpalIcon:btnClearIcon (name=cross)\n}\nOpalLoader:loader (@if=loading, size=s, shown)\nbutton:btnShowPassword (@if='inputType |eq(\"password\")', type=button) {\nOpalIcon:btnShowPasswordIcon (name=eye, strokeWidth=2)\n}");

/***/ })
/******/ ]);
});