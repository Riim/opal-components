(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("reflect-metadata"), require("@riim/opal-icon"), require("@riim/opal-text-input"), require("@riim/gettext"), require("@riim/opal-utils"), require("@riim/opal-dropdown"), require("@riim/opal-calendar"), require("@riim/opal-input-mask"), require("@riim/opal-text-input-validator"), require("date-exists"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "reflect-metadata", "@riim/opal-icon", "@riim/opal-text-input", "@riim/gettext", "@riim/opal-utils", "@riim/opal-dropdown", "@riim/opal-calendar", "@riim/opal-input-mask", "@riim/opal-text-input-validator", "date-exists"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-date-input"] = factory(require("rionite"), require("reflect-metadata"), require("@riim/opal-icon"), require("@riim/opal-text-input"), require("@riim/gettext"), require("@riim/opal-utils"), require("@riim/opal-dropdown"), require("@riim/opal-calendar"), require("@riim/opal-input-mask"), require("@riim/opal-text-input-validator"), require("date-exists"));
	else
		root["@riim/opal-date-input"] = factory(root["rionite"], root["reflect-metadata"], root["@riim/opal-icon"], root["@riim/opal-text-input"], root["@riim/gettext"], root["@riim/opal-utils"], root["@riim/opal-dropdown"], root["@riim/opal-calendar"], root["@riim/opal-input-mask"], root["@riim/opal-text-input-validator"], root["date-exists"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_48__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(19);
__webpack_require__(14);
__webpack_require__(5);
__webpack_require__(45);
__webpack_require__(6);
__webpack_require__(46);
__webpack_require__(1);
__export(__webpack_require__(47));


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_46__;

/***/ }),
/* 47 */
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
var gettext_1 = __webpack_require__(7);
var opal_calendar_1 = __webpack_require__(19);
var opal_utils_1 = __webpack_require__(9);
var date_exists_1 = __webpack_require__(48);
var rionite_1 = __webpack_require__(0);
__webpack_require__(49);
var template_nelm_1 = __webpack_require__(50);
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
    OpalDateInput.prototype.isDateInRange = function (date) {
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
        return d >= opal_calendar_1.parseDate(this.paramFromDate) && d <= opal_calendar_1.parseDate(this.paramToDate);
    };
    OpalDateInput.prototype.elementAttached = function () {
        this.listenTo('text-input', 'change', this._onTextInputChange);
        this.listenTo(this.$('text-input').element, 'click', this._onTextInputElementClick);
        this.listenTo('calendar-menu', 'change:paramOpened', this._onCalendarMenuParamOpenedChange);
    };
    OpalDateInput.prototype._onTextInputChange = function (evt) {
        if (this.$('text-input-validator').valid) {
            this.$('calendar').stringValue = evt.target.value;
        }
    };
    OpalDateInput.prototype._onTextInputElementClick = function () {
        this.$('calendar-menu').open();
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
        if (!opal_utils_1.isFocusable(evt.target)) {
            return;
        }
        if (!this.element.contains(evt.target.parentNode)) {
            this.$('calendar-menu').close();
        }
    };
    OpalDateInput.prototype._onDocumentKeyDown = function (evt) {
        if (evt.which == 27 /* Esc */) {
            evt.preventDefault();
            this.$('calendar-menu').close();
        }
    };
    OpalDateInput.prototype._onDocumentClick = function (evt) {
        if (!this.element.contains(evt.target)) {
            this.$('calendar-menu').close();
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
            'Z');
    };
    OpalDateInput.prototype.validate = function () {
        return this.$('text-input-validator').validate();
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
            i18n: {
                isRequiredField: gettext_1.getText.t('Поле обязательно для заполнения'),
                nonExistentDate: gettext_1.getText.t('Несуществующая дата'),
                invalidDateRange: gettext_1.getText.t('Дата вне допустимого диапазона')
            },
            template: template_nelm_1.default,
            events: {
                calendar: {
                    change: function (evt) {
                        this.$('calendar-menu').close();
                        var textInput = this.$('text-input');
                        textInput.value = evt.target.stringValue;
                        textInput.focus();
                        this.$('text-input-validator').validate();
                    }
                }
            }
        })
    ], OpalDateInput);
    return OpalDateInput;
}(rionite_1.BaseComponent));
exports.OpalDateInput = OpalDateInput;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalDateInput{position:relative;display:inline-block;vertical-align:middle}.OpalDateInput .OpalDateInput__text-input{display:block}.OpalDateInput .OpalDateInput__calendar-menu{overflow:visible;padding:0;min-width:auto}.OpalDateInput .OpalDateInput__calendar{border:0}";
            head.appendChild(style);
            return style;
        }
        return null;
    })(document);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ("@section/inner {\nOpalTextInputValidator/text-input-validator {\nOpalInputMask/input-mask (mask={paramMask}) {\nOpalTextInput/text-input (\nclass=OpalInputValidator__text-input OpalInputMask__text-input,\nvalue={paramValue},\nplaceholder={paramPlaceholder},\nclearable\n) {\nOpalIcon/text-input-control-icon (class=OpalTextInput__control-icon, name=calendar)\n}\n}\n@IfThen (if=paramRequired) {\nOpalTextInputValidatorRule/text-input-validator-rule-required (\nrequired,\npopover-position={paramPopoverPosition}\n) {\n'{constructor.i18n.isRequiredField}'\n}\n}\nOpalTextInputValidatorRule/text-input-validator-rule-date-exists (\ntest={dateExists},\npopover-position={paramPopoverPosition}\n) {\n'{constructor.i18n.nonExistentDate}'\n}\nOpalTextInputValidatorRule/text-input-validator-rule-date-in-range (\ntest={isDateInRange},\npopover-position={paramPopoverPosition}\n) {\n'{constructor.i18n.invalidDateRange}'\n}\n}\nOpalDropdown/calendar-menu (auto-height=no) {\nOpalCalendar/calendar (\nfrom-date={paramFromDate},\nto-date={paramToDate},\nvalue={paramValue},\ndate-delimiter=.\n)\n}\n}");

/***/ })
/******/ ]);
});