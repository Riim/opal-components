(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("reflect-metadata"), require("@riim/next-tick"), require("cellx-decorators"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["reflect-metadata", "@riim/next-tick", "cellx-decorators", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/packages/opal-radio-group/src/index.ts"] = factory(require("reflect-metadata"), require("@riim/next-tick"), require("cellx-decorators"), require("rionite"));
	else
		root["@riim/packages/opal-radio-group/src/index.ts"] = factory(root["reflect-metadata"], root["@riim/next-tick"], root["cellx-decorators"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 173);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(4);
__export(__webpack_require__(174));


/***/ }),

/***/ 174:
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
Object.defineProperty(exports, "__esModule", { value: true });
var rionite_1 = __webpack_require__(10);
var OpalRadioButton_1 = __webpack_require__(175);
exports.OpalRadioButton = OpalRadioButton_1.OpalRadioButton;
var forEach = Array.prototype.forEach;
var OpalRadioGroup = /** @class */ (function (_super) {
    __extends(OpalRadioGroup, _super);
    function OpalRadioGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpalRadioGroup.prototype.ready = function () {
        this.buttonElements = this.element.getElementsByClassName('OpalRadioButton');
    };
    OpalRadioGroup.prototype.elementAttached = function () {
        this.listenTo(this, {
            '<OpalRadioButton>check': this._onCheck,
            '<OpalRadioButton>uncheck': this._onUncheck
        });
    };
    OpalRadioGroup.prototype._onCheck = function (evt) {
        var checkedButton = evt.target;
        forEach.call(this.buttonElements, function (btnEl) {
            if (btnEl.$component != checkedButton) {
                btnEl.$component.uncheck();
            }
        });
    };
    OpalRadioGroup.prototype._onUncheck = function (evt) {
        evt.target.check();
    };
    OpalRadioGroup = __decorate([
        rionite_1.Component({
            elementIs: 'OpalRadioGroup'
        })
    ], OpalRadioGroup);
    return OpalRadioGroup;
}(rionite_1.BaseComponent));
exports.OpalRadioGroup = OpalRadioGroup;


/***/ }),

/***/ 175:
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
var cellx_decorators_1 = __webpack_require__(9);
var rionite_1 = __webpack_require__(10);
__webpack_require__(176);
var template = __webpack_require__(177);
var OpalRadioButton = /** @class */ (function (_super) {
    __extends(OpalRadioButton, _super);
    function OpalRadioButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramChecked = false;
        _this.paramTabIndex = 0;
        _this.paramFocused = false;
        _this.paramDisabled = false;
        return _this;
    }
    Object.defineProperty(OpalRadioButton.prototype, "_tabIndex", {
        get: function () {
            return this.paramDisabled ? -1 : this.paramTabIndex;
        },
        enumerable: true,
        configurable: true
    });
    OpalRadioButton.prototype.ready = function () {
        if (this.paramChecked) {
            this.$('input').checked = true;
        }
        if (this.paramFocused) {
            this.focus();
        }
    };
    OpalRadioButton.prototype.elementAttached = function () {
        this.listenTo(this, {
            'change:paramChecked': this._onParamCheckedChange,
            'change:paramFocused': this._onParamFocusedChange
        });
        this.listenTo('input', 'change', this._onInputChange);
        this.listenTo('control', {
            focus: this._onControlFocus,
            blur: this._onControlBlur
        });
    };
    OpalRadioButton.prototype._onParamCheckedChange = function (evt) {
        this.$('input').checked = evt.data.value;
    };
    OpalRadioButton.prototype._onParamFocusedChange = function (evt) {
        if (evt.data.value) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this.focus();
        }
        else {
            this._documentKeyDownListening.stop();
            this.blur();
        }
    };
    OpalRadioButton.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
            evt.preventDefault();
            if (!this.paramDisabled) {
                this.emit((this.paramChecked = !this.paramChecked) ? 'check' : 'uncheck');
                this.emit('change');
            }
        }
    };
    OpalRadioButton.prototype._onInputChange = function (evt) {
        this.emit((this.paramChecked = evt.target.checked) ? 'check' : 'uncheck');
        this.emit('change');
    };
    OpalRadioButton.prototype._onControlFocus = function (evt) {
        var _this = this;
        next_tick_1.nextTick(function () {
            if (document.activeElement == evt.target) {
                _this.paramFocused = true;
                _this.emit('focus');
            }
        });
    };
    OpalRadioButton.prototype._onControlBlur = function () {
        this.paramFocused = false;
        this.emit('blur');
    };
    Object.defineProperty(OpalRadioButton.prototype, "checked", {
        get: function () {
            return this.paramChecked;
        },
        set: function (checked) {
            this.paramChecked = checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OpalRadioButton.prototype, "selected", {
        get: function () {
            return this.checked;
        },
        set: function (selected) {
            this.checked = selected;
        },
        enumerable: true,
        configurable: true
    });
    OpalRadioButton.prototype.check = function () {
        if (!this.paramChecked) {
            this.paramChecked = true;
            return true;
        }
        return false;
    };
    OpalRadioButton.prototype.uncheck = function () {
        if (this.paramChecked) {
            this.paramChecked = false;
            return true;
        }
        return false;
    };
    OpalRadioButton.prototype.toggle = function (value) {
        return (this.paramChecked = value === undefined ? !this.paramChecked : value);
    };
    OpalRadioButton.prototype.focus = function () {
        this.$('control').focus();
        return this;
    };
    OpalRadioButton.prototype.blur = function () {
        this.$('control').blur();
        return this;
    };
    OpalRadioButton.prototype.enable = function () {
        this.paramDisabled = false;
        return this;
    };
    OpalRadioButton.prototype.disable = function () {
        this.paramDisabled = true;
        return this;
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalRadioButton.prototype, "paramChecked", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalRadioButton.prototype, "paramTabIndex", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalRadioButton.prototype, "paramFocused", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalRadioButton.prototype, "paramDisabled", void 0);
    __decorate([
        cellx_decorators_1.Computed,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], OpalRadioButton.prototype, "_tabIndex", null);
    OpalRadioButton = __decorate([
        rionite_1.Component({
            elementIs: 'OpalRadioButton',
            template: template
        })
    ], OpalRadioButton);
    return OpalRadioButton;
}(rionite_1.BaseComponent));
exports.OpalRadioButton = OpalRadioButton;


/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalRadioButton{position:relative;display:inline-block}.OpalRadioButton .OpalRadioButton__label:hover .OpalRadioButton__control{border-color:#8a8a8a}.OpalRadioButton .OpalRadioButton__label:hover .OpalRadioButton__control:focus{border-color:#33a0ff}.OpalRadioButton .OpalRadioButton__input{display:none}.OpalRadioButton .OpalRadioButton__control{position:relative;top:-2px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:22px;height:22px;border:2px solid #a3a3a3;border-radius:50%;background:#fff;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalRadioButton .OpalRadioButton__control:focus{outline:0;border-color:#33a0ff}.OpalRadioButton[checked] .OpalRadioButton__control::before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:10px;height:10px;border-radius:50%;background:#000;content:''}.OpalRadioButton[disabled]{opacity:.5;pointer-events:none}.OpalRadioButton[disabled] .OpalRadioButton__control{background:#e6e6e6}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "label/label {\ninput/input (type=checkbox)\nspan/control (tabindex={_tabIndex})\n' '\n@Slot/contentSlot\n}"

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ })

/******/ });
});