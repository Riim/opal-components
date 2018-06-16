(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-dropdown"), require("@riim/opal-icon"), require("@riim/opal-text-input"), require("reflect-metadata"), require("@riim/opal-utils"), require("rionite"), require("@riim/opal-calendar"), require("@riim/opal-input-mask"), require("@riim/opal-text-input-validator"), require("date-exists"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-dropdown", "@riim/opal-icon", "@riim/opal-text-input", "reflect-metadata", "@riim/opal-utils", "rionite", "@riim/opal-calendar", "@riim/opal-input-mask", "@riim/opal-text-input-validator", "date-exists"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-date-input"] = factory(require("@riim/opal-dropdown"), require("@riim/opal-icon"), require("@riim/opal-text-input"), require("reflect-metadata"), require("@riim/opal-utils"), require("rionite"), require("@riim/opal-calendar"), require("@riim/opal-input-mask"), require("@riim/opal-text-input-validator"), require("date-exists"));
	else
		root["@riim/opal-date-input"] = factory(root["@riim/opal-dropdown"], root["@riim/opal-icon"], root["@riim/opal-text-input"], root["reflect-metadata"], root["@riim/opal-utils"], root["rionite"], root["@riim/opal-calendar"], root["@riim/opal-input-mask"], root["@riim/opal-text-input-validator"], root["date-exists"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__28__, __WEBPACK_EXTERNAL_MODULE__29__, __WEBPACK_EXTERNAL_MODULE__30__, __WEBPACK_EXTERNAL_MODULE__32__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(28);
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(29);
__webpack_require__(3);
__webpack_require__(30);
__webpack_require__(4);
__export(__webpack_require__(31));


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__28__;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__30__;

/***/ }),
/* 31 */
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
var opal_calendar_1 = __webpack_require__(28);
var opal_utils_1 = __webpack_require__(7);
var date_exists_1 = __webpack_require__(32);
var rionite_1 = __webpack_require__(10);
__webpack_require__(33);
var template_nelm_1 = __webpack_require__(34);
function pad(num) {
    return (num < 10 ? '0' : '') + num;
}
var OpalDateInput = /** @class */ (function (_super) {
    __extends(OpalDateInput, _super);
    function OpalDateInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.paramPlaceholder = 'dd.mm.yyyy';
        _this.paramMask = '99.99.9999';
        _this.paramRequired = false;
        _this.paramPopoverPosition = 'right';
        _this.dateExists = date_exists_1.dateExists;
        return _this;
    }
    OpalDateInput.prototype._isDateInRange = function (date) {
        var calendar = this.$('calendar');
        var match = date.match(/\d+/g);
        var day = +match[0];
        var month = +match[1] - 1;
        var year = +match[2];
        if (year < 100) {
            year += year < 50 ? 2000 : 1900;
        }
        var d = new Date(year, month, day);
        if (calendar) {
            return d >= calendar.fromDate && d <= calendar.toDate;
        }
        return d >= opal_calendar_1.fromDate.call(this) && d <= opal_calendar_1.toDate.call(this);
    };
    OpalDateInput.prototype.elementAttached = function () {
        this.listenTo('textInput', 'change', this._onTextInputChange);
        this.listenTo(this.$('textInput').element, 'click', this._onTextInputElementClick);
        this.listenTo('calendarMenu', 'change:paramOpened', this._onCalendarMenuParamOpenedChange);
    };
    OpalDateInput.prototype._onTextInputChange = function (evt) {
        if (this.$('textInputValidator').valid) {
            this.$('calendar').stringValue = evt.target.value;
        }
    };
    OpalDateInput.prototype._onTextInputElementClick = function () {
        this.$('calendarMenu').open();
    };
    OpalDateInput.prototype._onCalendarMenuParamOpenedChange = function (evt) {
        if (evt.data.value) {
            this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
            this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
        }
        else {
            this._documentFocusListening.stop();
            this._documentKeyDownListening.stop();
            this._documentClickListening.stop();
        }
    };
    OpalDateInput.prototype._onDocumentFocus = function (evt) {
        if (opal_utils_1.isFocusable(evt.target) &&
            !this.element.contains(evt.target.parentNode)) {
            this.$('calendarMenu').close();
        }
    };
    OpalDateInput.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 27 /* Esc */) {
            evt.preventDefault();
            this.$('calendarMenu').close();
        }
    };
    OpalDateInput.prototype._onDocumentClick = function (evt) {
        if (!this.element.contains(evt.target)) {
            this.$('calendarMenu').close();
        }
    };
    Object.defineProperty(OpalDateInput.prototype, "value", {
        get: function () {
            var calendar = this.$('calendar');
            if (calendar) {
                return calendar.value;
            }
            return this.paramValue ? opal_calendar_1.parseDate(this.paramValue) : null;
        },
        enumerable: true,
        configurable: true
    });
    OpalDateInput.prototype.getISOValue = function (h, m, s, ms) {
        var date = this.value;
        if (!date) {
            return null;
        }
        date = new Date(date);
        if (h) {
            date.setHours(h);
        }
        if (m) {
            date.setMinutes(m);
        }
        if (s) {
            date.setSeconds(s);
        }
        if (ms) {
            date.setMilliseconds(ms);
        }
        var tsOffset = new Date().getTimezoneOffset() / 60;
        return (('000' + date.getUTCFullYear()).slice(-4) +
            '-' +
            pad(date.getUTCMonth() + 1) +
            '-' +
            pad(date.getUTCDate()) +
            'T' +
            pad(date.getUTCHours()) +
            ':' +
            pad(date.getUTCMinutes()) +
            ':' +
            pad(date.getUTCSeconds()) +
            '.' +
            ('00' + date.getUTCMilliseconds()).slice(-3) +
            (tsOffset < 0 ? '-' + pad(-tsOffset) : '+' + pad(tsOffset)));
    };
    OpalDateInput.prototype.validate = function () {
        return this.$('textInputValidator').validate();
    };
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalDateInput.prototype, "paramFromDate", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalDateInput.prototype, "paramToDate", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", String)
    ], OpalDateInput.prototype, "paramValue", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalDateInput.prototype, "paramPlaceholder", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalDateInput.prototype, "paramMask", void 0);
    __decorate([
        rionite_1.Param({ readonly: true }),
        __metadata("design:type", Object)
    ], OpalDateInput.prototype, "paramRequired", void 0);
    __decorate([
        rionite_1.Param,
        __metadata("design:type", Object)
    ], OpalDateInput.prototype, "paramPopoverPosition", void 0);
    OpalDateInput = __decorate([
        rionite_1.Component({
            elementIs: 'OpalDateInput',
            template: template_nelm_1.default,
            events: {
                calendar: {
                    change: function (evt) {
                        this.$('calendarMenu').close();
                        var textInput = this.$('textInput');
                        textInput.value = evt.target.stringValue;
                        textInput.focus();
                        this.$('textInputValidator').validate();
                    }
                }
            }
        })
    ], OpalDateInput);
    return OpalDateInput;
}(rionite_1.BaseComponent));
exports.OpalDateInput = OpalDateInput;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__32__;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalDateInput{position:relative;display:inline-block;vertical-align:middle}.OpalDateInput .OpalDateInput__textInput{display:block}.OpalDateInput .OpalDateInput__calendarMenu{overflow:visible;padding:0;min-width:auto}.OpalDateInput .OpalDateInput__calendar{border:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("OpalTextInputValidator/textInputValidator {\nOpalInputMask/inputMask (mask={paramMask}) {\nOpalTextInput/textInput (\nclass=OpalInputValidator__textInput OpalInputMask__textInput,\nvalue={paramValue},\nplaceholder={paramPlaceholder},\nclearable\n) {\nOpalIcon/textInputEndIcon (class=OpalTextInput__endIcon, name=calendar)\n}\n}\n@IfThen (paramRequired) {\nOpalTextInputValidatorRule/textInputValidatorRuleRequired (\nrequired,\npopoverPosition={paramPopoverPosition}\n) {\n'Поле обязательно для заполнения'\n}\n}\nOpalTextInputValidatorRule/textInputValidatorRuleDateExists (\ntest={dateExists},\npopoverPosition={paramPopoverPosition}\n) {\n'Несуществующая дата'\n}\nOpalTextInputValidatorRule/textInputValidatorRuleDateInRange (\ntest={_isDateInRange},\npopoverPosition={paramPopoverPosition}\n) {\n'Дата вне допустимого диапазона'\n}\n}\nOpalDropdown/calendarMenu (autoHeight=no) {\nOpalCalendar/calendar (\nfromDate={paramFromDate},\ntoDate={paramToDate},\nvalue={paramValue},\ndateDelimiter=.\n)\n}");

/***/ })
/******/ ]);
});