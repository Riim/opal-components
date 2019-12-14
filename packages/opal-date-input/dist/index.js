(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-text-input-validator"), require("@riim/opal-dropdown"), require("@riim/opal-input-mask"), require("@riim/opal-icon"), require("date-exists"), require("@riim/opal-text-input"), require("@riim/opal-calendar"), require("rionite"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-text-input-validator", "@riim/opal-dropdown", "@riim/opal-input-mask", "@riim/opal-icon", "date-exists", "@riim/opal-text-input", "@riim/opal-calendar", "rionite"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-date-input"] = factory(require("@riim/opal-text-input-validator"), require("@riim/opal-dropdown"), require("@riim/opal-input-mask"), require("@riim/opal-icon"), require("date-exists"), require("@riim/opal-text-input"), require("@riim/opal-calendar"), require("rionite"));
	else
		root["@riim/opal-date-input"] = factory(root["@riim/opal-text-input-validator"], root["@riim/opal-dropdown"], root["@riim/opal-input-mask"], root["@riim/opal-icon"], root["date-exists"], root["@riim/opal-text-input"], root["@riim/opal-calendar"], root["rionite"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__tCi__, __WEBPACK_EXTERNAL_MODULE_A7KY__, __WEBPACK_EXTERNAL_MODULE_JK3___, __WEBPACK_EXTERNAL_MODULE_Y0hN__, __WEBPACK_EXTERNAL_MODULE_aB20__, __WEBPACK_EXTERNAL_MODULE_hl6F__, __WEBPACK_EXTERNAL_MODULE_iMF9__, __WEBPACK_EXTERNAL_MODULE_u4yd__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "9lkO");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/tCi":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__tCi__;

/***/ }),

/***/ "9lkO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("iMF9");
__webpack_require__("A7KY");
__webpack_require__("Y0hN");
__webpack_require__("JK3/");
__webpack_require__("hl6F");
__webpack_require__("/tCi");
__export(__webpack_require__("ZX14"));


/***/ }),

/***/ "A7KY":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_A7KY__;

/***/ }),

/***/ "JK3/":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_JK3___;

/***/ }),

/***/ "Lk27":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,,"OpalTextInputValidator",["textInputValidator"],,[[1,,"OpalInputMask",["inputMask"],[,[[,"mask","{mask}"]]],[[1,,"OpalTextInput",["textInput"],[,[[,"class","OpalInputValidator__textInput OpalInputMask__textInput"],[,"value","{paramValue}"],[,"placeholder","{placeholder}"],[,"clearable",""]]],[[1,,"OpalIcon",["textInputEndIcon"],[,[[,"class","OpalTextInput__endIcon"],[,"name","calendar"]]],]]]]],[1,,"OpalTextInputValidatorRule",["textInputValidatorRuleRequired"],[,[[1,"if","required"],[,"required",""],[,"popoverPosition","{popoverPosition}"]]],[[3,"{\"Поле обязательно для заполнения\" |t }"]]],[1,,"OpalTextInputValidatorRule",["textInputValidatorRuleDateExists"],[,[[,"test","{dateExists}"],[,"popoverPosition","{popoverPosition}"]]],[[3,"{\"Несуществующая дата\" |t }"]]],[1,,"OpalTextInputValidatorRule",["textInputValidatorRuleDateInRange"],[,[[,"test","{_isDateInRange}"],[,"popoverPosition","{popoverPosition}"]]],[[3,"{\"Дата вне допустимого диапазона\" |t }"]]]]],[1,,"OpalDropdown",["calendarMenu"],[,[[,"autoHeight","no"]]],[[1,,"OpalCalendar",["calendar"],[,[[,"fromDate","{fromDate}"],[,"toDate","{toDate}"],[,"value","{paramValue}"],[,"dateDelimiter","."]]],]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "UyUY":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalDateInput{position:relative;display:inline-block}.OpalDateInput .OpalDateInput__textInput{display:block}.OpalDateInput .OpalDateInput__calendarMenu{overflow:visible;padding:0;min-width:auto}.OpalDateInput .OpalDateInput__calendar{border:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),

/***/ "Y0hN":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Y0hN__;

/***/ }),

/***/ "ZX14":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const opal_calendar_1 = __webpack_require__("iMF9");
const opal_text_input_1 = __webpack_require__("hl6F");
const date_exists_1 = __webpack_require__("aB20");
const rionite_1 = __webpack_require__("u4yd");
__webpack_require__("UyUY");
const template_rnt_1 = __webpack_require__("Lk27");
function pad(num) {
    return (num < 10 ? '0' : '') + num;
}
let OpalDateInput = class OpalDateInput extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
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
    rionite_1.Param(String)
], OpalDateInput.prototype, "fromDate", void 0);
__decorate([
    rionite_1.Param(String)
], OpalDateInput.prototype, "toDate", void 0);
__decorate([
    rionite_1.Param('value', String)
], OpalDateInput.prototype, "paramValue", void 0);
__decorate([
    rionite_1.Param({ default: 'dd.mm.yyyy' })
], OpalDateInput.prototype, "placeholder", void 0);
__decorate([
    rionite_1.Param({ default: '99.99.9999' })
], OpalDateInput.prototype, "mask", void 0);
__decorate([
    rionite_1.Param({ type: Boolean, readonly: true })
], OpalDateInput.prototype, "required", void 0);
__decorate([
    rionite_1.Param({ default: 'right' })
], OpalDateInput.prototype, "popoverPosition", void 0);
__decorate([
    rionite_1.Listen(opal_text_input_1.OpalTextInput.EVENT_CHANGE, 'textInput')
], OpalDateInput.prototype, "_onTextInputChange", null);
__decorate([
    rionite_1.Listen('click', self => self.$('textInput').element)
], OpalDateInput.prototype, "_onTextInputElementClick", null);
__decorate([
    rionite_1.Listen('change:opened', 'calendarMenu')
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

/***/ "aB20":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_aB20__;

/***/ }),

/***/ "hl6F":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hl6F__;

/***/ }),

/***/ "iMF9":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_iMF9__;

/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ })

/******/ });
});