(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-loader"), require("@riim/opal-icon"), require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-loader", "@riim/opal-icon", "rionite", "reflect-metadata", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-text-input"] = factory(require("@riim/opal-loader"), require("@riim/opal-icon"), require("rionite"), require("reflect-metadata"), require("cellx-decorators"));
	else
		root["@riim/opal-text-input"] = factory(root["@riim/opal-loader"], root["@riim/opal-icon"], root["rionite"], root["reflect-metadata"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_BLMt__, __WEBPACK_EXTERNAL_MODULE_Y0hN__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_vA_G__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "/nJx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/nJx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("Y0hN");
__webpack_require__("BLMt");
__webpack_require__("vA/G");
__export(__webpack_require__("LsaU"));


/***/ }),

/***/ "0uS9":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalTextInput{position:relative;display:inline-block;width:400px;vertical-align:middle}.OpalTextInput .OpalTextInput__textField,.OpalTextInput .OpalTextInput__textareaHeight{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 36px 6px 12px;width:100%;border:1px solid var(--grayColor700, hsl(0,0%,70%));border-top-color:var(--grayColor650, hsl(0,0%,65%));border-bottom-color:var(--grayColor800, hsl(0,0%,80%));border-radius:3px;background:#fff;-webkit-box-shadow:inset 0 1px rgba(0,0,0,.1);box-shadow:inset 0 1px rgba(0,0,0,.1);color:var(--textColor50, hsl(208,10%,5%));text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400;-webkit-transition:border-color .1s linear;-o-transition:border-color .1s linear;transition:border-color .1s linear;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}.OpalTextInput .OpalTextInput__textField::-webkit-input-placeholder,.OpalTextInput .OpalTextInput__textareaHeight::-webkit-input-placeholder{color:var(--textColor650, hsl(208,10%,65%));-webkit-transition:color .1s linear;transition:color .1s linear}.OpalTextInput .OpalTextInput__textField::-moz-placeholder,.OpalTextInput .OpalTextInput__textareaHeight::-moz-placeholder{color:var(--textColor650, hsl(208,10%,65%));-moz-transition:color .1s linear;transition:color .1s linear}.OpalTextInput .OpalTextInput__textField:-ms-input-placeholder,.OpalTextInput .OpalTextInput__textareaHeight:-ms-input-placeholder{color:var(--textColor650, hsl(208,10%,65%));-ms-transition:color .1s linear;transition:color .1s linear}.OpalTextInput .OpalTextInput__textField:hover::-webkit-input-placeholder,.OpalTextInput .OpalTextInput__textField[disabled]::-webkit-input-placeholder,.OpalTextInput .OpalTextInput__textareaHeight:hover::-webkit-input-placeholder,.OpalTextInput .OpalTextInput__textareaHeight[disabled]::-webkit-input-placeholder{color:var(--textColor400, hsl(208,10%,40%))}.OpalTextInput .OpalTextInput__textField:hover::-moz-placeholder,.OpalTextInput .OpalTextInput__textField[disabled]::-moz-placeholder,.OpalTextInput .OpalTextInput__textareaHeight:hover::-moz-placeholder,.OpalTextInput .OpalTextInput__textareaHeight[disabled]::-moz-placeholder{color:var(--textColor400, hsl(208,10%,40%))}.OpalTextInput .OpalTextInput__textField:hover:-ms-input-placeholder,.OpalTextInput .OpalTextInput__textField[disabled]:-ms-input-placeholder,.OpalTextInput .OpalTextInput__textareaHeight:hover:-ms-input-placeholder,.OpalTextInput .OpalTextInput__textareaHeight[disabled]:-ms-input-placeholder{color:var(--textColor400, hsl(208,10%,40%))}.OpalTextInput .OpalTextInput__textField:focus::-webkit-input-placeholder,.OpalTextInput .OpalTextInput__textareaHeight:focus::-webkit-input-placeholder{color:var(--textColor400, hsl(208,10%,40%))}.OpalTextInput .OpalTextInput__textField:focus::-moz-placeholder,.OpalTextInput .OpalTextInput__textareaHeight:focus::-moz-placeholder{color:var(--textColor400, hsl(208,10%,40%))}.OpalTextInput .OpalTextInput__textField:focus:-ms-input-placeholder,.OpalTextInput .OpalTextInput__textareaHeight:focus:-ms-input-placeholder{color:var(--textColor400, hsl(208,10%,40%))}.OpalTextInput .OpalTextInput__textareaContainer{position:relative}.OpalTextInput .OpalTextInput__textarea{position:absolute;top:0;right:0;left:0;height:100%;white-space:normal;resize:none}.OpalTextInput .OpalTextInput__textareaHeight{visibility:hidden;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word}.OpalTextInput .OpalTextInput__startIcon,.OpalTextInput .OpalTextInput__endIcon{position:absolute;top:0;bottom:0;display:block;margin:auto;width:18px;height:18px;color:var(--grayColor500, hsl(0,0%,50%))}.OpalTextInput .OpalTextInput__startIcon{left:12px}.OpalTextInput .OpalTextInput__endIconSlot{display:none}.OpalTextInput .OpalTextInput__endIconSlot[shown]{display:block}.OpalTextInput .OpalTextInput__endIcon{right:12px}.OpalTextInput .OpalTextInput__btnClear{position:absolute;top:0;right:9px;bottom:0;display:none;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:var(--grayColor500, hsl(0,0%,50%));cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear}.OpalTextInput .OpalTextInput__btnClear[shown]{display:block}.OpalTextInput .OpalTextInput__btnClear:hover{color:var(--textColor50, hsl(208,10%,5%))}.OpalTextInput .OpalTextInput__btnClear:focus{outline:0}body:not(._noFocusHighlight) .OpalTextInput .OpalTextInput__btnClear:focus{outline:1px solid var(--primaryColor500, hsl(208,93%,50%))}.OpalTextInput .OpalTextInput__btnClear:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalTextInput .OpalTextInput__btnClearIcon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:16px;height:16px}.OpalTextInput .OpalTextInput__loader{position:absolute;top:0;right:12px;bottom:0;margin:auto;border:0;pointer-events:none}.OpalTextInput .OpalTextInput__btnShowPassword{position:absolute;top:0;right:9px;bottom:0;display:block;margin:auto;padding:0;width:24px;height:24px;border:0;background:0 0;color:var(--grayColor500, hsl(0,0%,50%));cursor:pointer;-webkit-transition:color .1s linear;-o-transition:color .1s linear;transition:color .1s linear;pointer-events:none}.OpalTextInput .OpalTextInput__btnShowPassword:hover{color:var(--textColor50, hsl(208,10%,5%))}.OpalTextInput .OpalTextInput__btnShowPassword:focus{outline:0}body:not(._noFocusHighlight) .OpalTextInput .OpalTextInput__btnShowPassword:focus{outline:1px solid var(--primaryColor500, hsl(208,93%,50%))}.OpalTextInput .OpalTextInput__btnShowPassword:active{-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px)}.OpalTextInput .OpalTextInput__btnShowPasswordIcon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:22px;height:22px}.OpalTextInput:hover .OpalTextInput__textField{border-color:var(--grayColor600, hsl(0,0%,60%));border-top-color:var(--grayColor550, hsl(0,0%,55%));border-bottom-color:var(--grayColor700, hsl(0,0%,70%))}.OpalTextInput .OpalTextInput__textField:focus{outline:0;border-color:var(--primaryColor500, hsl(208,93%,50%))}.OpalTextInput[input_type=password] .OpalTextInput__textField,.OpalTextInput[input_type=password] .OpalTextInput__textareaHeight{padding-right:64px}.OpalTextInput[input_type=password] .OpalTextInput__endIcon{right:40px}.OpalTextInput[input_type=password] .OpalTextInput__btnClear{right:37px}.OpalTextInput[input_type=password] .OpalTextInput__loader{right:40px}.OpalTextInput[multiline]:not([auto_height=no]) .OpalTextInput__textField{overflow-y:hidden}.OpalTextInput[value] .OpalTextInput__btnShowPassword{pointer-events:auto}.OpalTextInput[start_icon] .OpalTextInput__textField{padding-left:36px}.OpalTextInput[valid] .OpalTextInput__textField,.OpalTextInput[valid] .OpalTextInput__textField:focus{border-color:var(--successColor500, hsl(123,40%,48%))}.OpalTextInput[valid=no] .OpalTextInput__textField,.OpalTextInput[valid=no] .OpalTextInput__textField:focus{border-color:var(--dangerColor400, hsl(5,90%,48.4%))}.OpalTextInput[disabled]{opacity:.5;pointer-events:none}.OpalTextInput[disabled] .OpalTextInput__textField{background:var(--grayColor900, hsl(0,0%,90%))}.OpalGroup>.OpalTextInput:not(:first-child),.OpalGroup>:not(:first-child) .OpalTextInput{margin-right:-1px}.OpalGroup>.OpalTextInput:not(:first-child) .OpalTextInput__textField,.OpalGroup>:not(:first-child) .OpalTextInput .OpalTextInput__textField{border-top-left-radius:0;border-bottom-left-radius:0}.OpalGroup>.OpalTextInput:not(:last-child) .OpalTextInput__textField,.OpalGroup>:not(:last-child) .OpalTextInput .OpalTextInput__textField{border-top-right-radius:0;border-bottom-right-radius:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "BLMt":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_BLMt__;

/***/ }),

/***/ "LsaU":
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
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("0uS9");
const template_rnt_1 = __webpack_require__("idvu");
let OpalTextInput = OpalTextInput_1 = class OpalTextInput extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "inputType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'text'
        });
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'm'
        });
        Object.defineProperty(this, "multiline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "rows", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 5
        });
        Object.defineProperty(this, "autoHeight", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "inputName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "paramValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "storeKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "placeholder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "startIcon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "endIcon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "clearable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "loading", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "tabIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "focused", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "disabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "_inputTypeCell", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "textField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_prevValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "validator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
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
        this.emit(OpalTextInput_1.EVENT_FOCUS);
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
            this.emit(OpalTextInput_1.EVENT_CONFIRM, { initialEvent: evt });
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
    validate() {
        return !this.validator || this.validator.validate();
    }
};
Object.defineProperty(OpalTextInput, "EVENT_BLUR", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Symbol('blur')
});
Object.defineProperty(OpalTextInput, "EVENT_CHANGE", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Symbol('change')
});
Object.defineProperty(OpalTextInput, "EVENT_CLEAR", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Symbol('clear')
});
Object.defineProperty(OpalTextInput, "EVENT_CONFIRM", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Symbol('confirm')
});
Object.defineProperty(OpalTextInput, "EVENT_FOCUS", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Symbol('focus')
});
Object.defineProperty(OpalTextInput, "EVENT_INPUT", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Symbol('input')
});
Object.defineProperty(OpalTextInput, "EVENT_KEYDOWN", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Symbol('keydown')
});
Object.defineProperty(OpalTextInput, "EVENT_KEYPRESS", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Symbol('keypress')
});
Object.defineProperty(OpalTextInput, "EVENT_KEYUP", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: Symbol('keyup')
});
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalTextInput.prototype, "inputType", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
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
__decorate([
    rionite_1.Listen('change:rows'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalTextInput.prototype, "_onRowsChange", null);
__decorate([
    rionite_1.Listen('change:paramValue'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpalTextInput.prototype, "_onParamValueChange", null);
__decorate([
    rionite_1.Listen('focus', '@textField'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalTextInput.prototype, "_onTextFieldFocus", null);
__decorate([
    rionite_1.Listen('blur', '@textField'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalTextInput.prototype, "_onTextFieldBlur", null);
__decorate([
    rionite_1.Listen('input', '@textField'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], OpalTextInput.prototype, "_onTextFieldInput", null);
__decorate([
    rionite_1.Listen('change', '@textField'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], OpalTextInput.prototype, "_onTextFieldChange", null);
__decorate([
    rionite_1.Listen('keydown', '@textField'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], OpalTextInput.prototype, "_onTextFieldKeyDown", null);
__decorate([
    rionite_1.Listen('keypress', '@textField'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], OpalTextInput.prototype, "_onTextFieldKeyPress", null);
__decorate([
    rionite_1.Listen('keyup', '@textField'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], OpalTextInput.prototype, "_onTextFieldKeyUp", null);
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

/***/ "Y0hN":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Y0hN__;

/***/ }),

/***/ "idvu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"div",["textareaContainer"],[,[[1,"if","multiline"]]],[[1,,"textarea",["textarea","textField"],[,[[,"rows","{rows}"],[,"name","{inputName}"],[,"placeholder","{placeholder}"],[,"tabindex","{tabIndex}"],[,"disabled","{disabled}"]]],],[1,,"div",["textareaHeight"],,]]],[1,,"input",["input","textField"],[,[[1,"unless","multiline"],[,"type","{_inputType}"],[,"name","{inputName}"],[,"placeholder","{placeholder}"],[,"tabindex","{tabIndex}"],[,"disabled","{disabled}"]]],],[1,,"OpalIcon",["startIcon"],[,[[1,"if","startIcon"],[,"name","{startIcon}"]]],],[1,,"RnSlot",["endIconSlot"],[,[[,"for","endIcon"],[,"shown","{endIconShown}"]]],[[1,,"OpalIcon",["endIcon"],[,[[1,"if","endIcon"],[,"name","{endIcon}"]]],]]],[1,,"button",["btnClear"],[,[[1,"if","clearable"],[,"type","button"],[,"shown","{btnClearShown}"],[,"tabindex","{disabled |cond(-1, 0) }"]]],[[1,,"OpalIcon",["btnClearIcon"],[,[[,"name","cross"]]],]]],[1,,"OpalLoader",["loader"],[,[[1,"if","loading"],[,"size","s"],[,"shown",""]]],],[1,,"button",["btnShowPassword"],[,[[1,"if","inputType |eq(\"password\")"],[,"type","button"]]],[[1,,"OpalIcon",["btnShowPasswordIcon"],[,[[,"name","eye"],[,"strokeWidth","2"]]],]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

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