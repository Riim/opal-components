(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-calendar"), require("@riim/opal-dropdown"), require("@riim/opal-icon"), require("@riim/opal-input-mask"), require("@riim/opal-text-input"), require("@riim/opal-text-input-validator"), require("reflect-metadata"), require("date-exists"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-calendar", "@riim/opal-dropdown", "@riim/opal-icon", "@riim/opal-input-mask", "@riim/opal-text-input", "@riim/opal-text-input-validator", "reflect-metadata", "date-exists", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-date-input"] = factory(require("@riim/opal-calendar"), require("@riim/opal-dropdown"), require("@riim/opal-icon"), require("@riim/opal-input-mask"), require("@riim/opal-text-input"), require("@riim/opal-text-input-validator"), require("reflect-metadata"), require("date-exists"), require("rionite"));
	else
		root["@riim/opal-date-input"] = factory(root["@riim/opal-calendar"], root["@riim/opal-dropdown"], root["@riim/opal-icon"], root["@riim/opal-input-mask"], root["@riim/opal-text-input"], root["@riim/opal-text-input-validator"], root["reflect-metadata"], root["date-exists"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__10__) {
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
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__export(__webpack_require__(8));


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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

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

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
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
Object.defineProperty(exports, "__esModule", { value: true });
const opal_calendar_1 = __webpack_require__(1);
const opal_text_input_1 = __webpack_require__(5);
const date_exists_1 = __webpack_require__(9);
const rionite_1 = __webpack_require__(10);
__webpack_require__(11);
const template_rnt_1 = __webpack_require__(12);
function pad(num) {
    return (num < 10 ? '0' : '') + num;
}
let OpalDateInput = class OpalDateInput extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.placeholder = 'dd.mm.yyyy';
        this.mask = '99.99.9999';
        this.required = false;
        this.popoverPosition = 'right';
        this.dateExists = date_exists_1.dateExists;
    }
    _isDateInRange(date) {
        let calendar = this.$('calendar');
        let match = date.match(/\d+/g);
        let day = +match[0];
        let month = +match[1] - 1;
        let year = +match[2];
        if (year < 100) {
            year += year < 50 ? 2000 : 1900;
        }
        let d = new Date(year, month, day);
        if (calendar) {
            return d >= calendar.fromDate && d <= calendar.toDate;
        }
        return d >= opal_calendar_1.fromDate.call(this) && d <= opal_calendar_1.toDate.call(this);
    }
    _onTextInputChange(evt) {
        if (this.$('textInputValidator').valid) {
            this.$('calendar').stringValue = evt.target.value;
        }
    }
    _onTextInputElementClick() {
        this.$('calendarMenu').open();
    }
    _onCalendarMenuOpenedChange(evt) {
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
    }
    _onDocumentFocus(evt) {
        if (!this.element.contains(evt.target.parentElement)) {
            this.$('calendarMenu').close();
        }
    }
    _onDocumentKeyDown(evt) {
        if (evt.which == 27 /* Esc */) {
            evt.preventDefault();
            this.$('calendarMenu').close();
        }
    }
    _onDocumentClick(evt) {
        if (!this.element.contains(evt.target)) {
            this.$('calendarMenu').close();
        }
    }
    get value() {
        let calendar = this.$('calendar');
        if (calendar) {
            return calendar.value;
        }
        return this.paramValue ? opal_calendar_1.parseDate(this.paramValue) : null;
    }
    getISOValue(h, m, s, ms) {
        let date = this.value;
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
        let tsOffset = new Date().getTimezoneOffset() / 60;
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
    }
    validate() {
        return this.$('textInputValidator').validate();
    }
};
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalDateInput.prototype, "fromDate", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", String)
], OpalDateInput.prototype, "toDate", void 0);
__decorate([
    rionite_1.Param('value'),
    __metadata("design:type", String)
], OpalDateInput.prototype, "paramValue", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalDateInput.prototype, "placeholder", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalDateInput.prototype, "mask", void 0);
__decorate([
    rionite_1.Param({ readonly: true }),
    __metadata("design:type", Object)
], OpalDateInput.prototype, "required", void 0);
__decorate([
    rionite_1.Param,
    __metadata("design:type", Object)
], OpalDateInput.prototype, "popoverPosition", void 0);
__decorate([
    rionite_1.Listen(opal_text_input_1.OpalTextInput.EVENT_CHANGE, 'textInput'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpalDateInput.prototype, "_onTextInputChange", null);
__decorate([
    rionite_1.Listen('click', self => self.$('textInput').element),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpalDateInput.prototype, "_onTextInputElementClick", null);
__decorate([
    rionite_1.Listen('change:opened', 'calendarMenu'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpalDateInput.prototype, "_onCalendarMenuOpenedChange", null);
OpalDateInput = __decorate([
    rionite_1.Component({
        elementIs: 'OpalDateInput',
        template: template_rnt_1.default,
        events: {
            calendar: {
                [opal_calendar_1.OpalCalendar.EVENT_CHANGE](evt) {
                    this.$('calendarMenu').close();
                    let textInput = this.$('textInput');
                    textInput.value = evt.target.stringValue;
                    textInput.focus();
                    this.$('textInputValidator').validate();
                }
            }
        }
    })
], OpalDateInput);
exports.OpalDateInput = OpalDateInput;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("OpalTextInputValidator:textInputValidator {\nOpalInputMask:inputMask (mask={mask}) {\nOpalTextInput:textInput (\nclass=OpalInputValidator__textInput OpalInputMask__textInput,\nvalue={paramValue},\nplaceholder={placeholder},\nclearable\n) {\nOpalIcon:textInputEndIcon (class=OpalTextInput__endIcon, name=calendar)\n}\n}\nOpalTextInputValidatorRule:textInputValidatorRuleRequired (\n@if=required,\nrequired,\npopoverPosition={popoverPosition}\n) {\n'{\"Поле обязательно для заполнения\" |t }'\n}\nOpalTextInputValidatorRule:textInputValidatorRuleDateExists (\ntest={dateExists},\npopoverPosition={popoverPosition}\n) {\n'{\"Несуществующая дата\" |t }'\n}\nOpalTextInputValidatorRule:textInputValidatorRuleDateInRange (\ntest={_isDateInRange},\npopoverPosition={popoverPosition}\n) {\n'{\"Дата вне допустимого диапазона\" |t }'\n}\n}\nOpalDropdown:calendarMenu (autoHeight=no) {\nOpalCalendar:calendar (\nfromDate={fromDate},\ntoDate={toDate},\nvalue={paramValue},\ndateDelimiter=.\n)\n}");

/***/ })
/******/ ]);
});