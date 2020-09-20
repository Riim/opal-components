(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@riim/opal-icon"), require("@riim/gettext"), require("@riim/opal-select"), require("rionite"), require("cellx-decorators"));
	else if(typeof define === 'function' && define.amd)
		define(["@riim/opal-icon", "@riim/gettext", "@riim/opal-select", "rionite", "cellx-decorators"], factory);
	else if(typeof exports === 'object')
		exports["@riim/opal-calendar"] = factory(require("@riim/opal-icon"), require("@riim/gettext"), require("@riim/opal-select"), require("rionite"), require("cellx-decorators"));
	else
		root["@riim/opal-calendar"] = factory(root["@riim/opal-icon"], root["@riim/gettext"], root["@riim/opal-select"], root["rionite"], root["cellx-decorators"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_Y0hN__, __WEBPACK_EXTERNAL_MODULE_eaeG__, __WEBPACK_EXTERNAL_MODULE_jL6t__, __WEBPACK_EXTERNAL_MODULE_u4yd__, __WEBPACK_EXTERNAL_MODULE_yOaX__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "ODf5");
/******/ })
/************************************************************************/
/******/ ({

/***/ "KvHp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const template = [[1,["header"],,,"header",,[[1,["btnPrevMonth"],,,"button",[,[[,"type","button"],[,"disabled","{btnPrevMonthDisabled}"]]],[[1,["btnPrevMonthIcon"],,,"OpalIcon",[,[[,"name","chevronLeft"]]],]]],[1,["monthSelect"],,,"OpalSelect",[,[[,"size","s"],[,"value","['{shownMonth}']"]]],[[1,,,1,"repeat",[,[[,"class","OpalSelect__menuContent"],[,"for","month in constructor.i18n.months"]]],[[1,,,,"OpalSelectOption",[,[[,"value","{=$index}"],[,"text","{=month}"]]],]]]]],[3," "],[1,["yearSelect"],,,"OpalSelect",[,[[,"size","s"],[,"value","['{shownYear}']"]]],[[1,,,1,"repeat",[,[[,"class","OpalSelect__menuContent"],[,"for","year in years"]]],[[1,,,,"OpalSelectOption",[,[[,"text","{=year}"]]],]]]]],[1,["btnNextMonth"],,,"button",[,[[,"type","button"],[,"disabled","{btnNextMonthDisabled}"]]],[[1,["btnNextMonthIcon"],,,"OpalIcon",[,[[,"name","chevronRight"]]],]]]]],[1,["body"],,,"div",,[[1,["weekDays"],,,"div",,[[1,["weekDaysRow"],,,"div",,[[1,["weekDay"],,,"span",[,[[1,"for","weekDay in weekDaysShort"]]],[[3,"{=weekDay}"]]]]]]],[1,["days"],,,"div",,[[1,["daysRow"],,,"div",[,[[1,"for","weekDays in days"]]],[[1,["day"],,,"span",[,[[1,"for","day in weekDays"],[,"weekDay","{=day.weekDay}"],[,"today","{=day.today}"],[,"selected","{=day.selected}"],[,"notInCurrentMonth","{=day.notInCurrentMonth}"],[,"disabled","{=day.disabled}"],[,"tabindex","{=day.tabIndex}"],[,"data-date","{=day.date}"]]],[[3,"{=day.value}"]]]]]]]]]];
/* harmony default export */ __webpack_exports__["default"] = (template);

/***/ }),

/***/ "ODf5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("Y0hN");
__webpack_require__("jL6t");
__exportStar(__webpack_require__("q1vq"), exports);


/***/ }),

/***/ "Wk+9":
/***/ (function(module, exports) {

module.exports = (function(d) {
        var head = d.head || d.getElementsByTagName('head')[0];
        if (head) {
            var style = d.createElement('style');
            style.type = 'text/css';
            style.textContent = ".OpalCalendar{display:block;width:300px;border:1px solid var(--grayColor850, hsl(0,0%,85%));border-radius:3px;background:#fff;color:var(--textColor50, hsl(208,10%,5%));text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400}.OpalCalendar .OpalCalendar__header{position:relative;padding:8px 44px;text-align:center}.OpalCalendar .OpalCalendar__btnPrevMonth,.OpalCalendar .OpalCalendar__btnNextMonth{position:absolute;top:0;bottom:0;margin:auto;padding:0;width:30px;height:30px;border:0;border-radius:50%;background:0 0;color:var(--grayColor500, hsl(0,0%,50%));cursor:pointer}.OpalCalendar .OpalCalendar__btnPrevMonth:hover,.OpalCalendar .OpalCalendar__btnNextMonth:hover{background:var(--grayColor900, hsl(0,0%,90%));color:var(--textColor50, hsl(208,10%,5%))}.OpalCalendar .OpalCalendar__btnPrevMonth:focus,.OpalCalendar .OpalCalendar__btnNextMonth:focus{outline:0}body:not(._noFocusHighlight) .OpalCalendar .OpalCalendar__btnPrevMonth:focus::after,body:not(._noFocusHighlight) .OpalCalendar .OpalCalendar__btnNextMonth:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px var(--primaryColor500, hsl(208,93%,50%));box-shadow:inset 0 0 0 1px var(--primaryColor500, hsl(208,93%,50%));content:'';pointer-events:none}.OpalCalendar .OpalCalendar__btnPrevMonth:active,.OpalCalendar .OpalCalendar__btnNextMonth:active{background:var(--grayColor800, hsl(0,0%,80%))}.OpalCalendar .OpalCalendar__btnPrevMonth[disabled],.OpalCalendar .OpalCalendar__btnNextMonth[disabled]{background:0 0;color:var(--textColor50, hsl(208,10%,5%));opacity:.3;pointer-events:none}.OpalCalendar .OpalCalendar__btnPrevMonth{left:8px}.OpalCalendar .OpalCalendar__btnNextMonth{right:8px}.OpalCalendar .OpalCalendar__btnPrevMonthIcon,.OpalCalendar .OpalCalendar__btnNextMonthIcon{position:absolute;top:0;right:0;bottom:0;left:0;display:block;margin:auto;width:18px;height:18px}.OpalCalendar .OpalCalendar__body{padding:0 8px 8px;text-align:center;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OpalCalendar .OpalCalendar__weekDays,.OpalCalendar .OpalCalendar__days{width:100%;border-spacing:0;border-collapse:separate}.OpalCalendar .OpalCalendar__weekDay,.OpalCalendar .OpalCalendar__day{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 7px;width:14.2857%;border:1px solid transparent}.OpalCalendar .OpalCalendar__day{position:relative;border-radius:3px;cursor:pointer}.OpalCalendar .OpalCalendar__day:hover{background:var(--grayColor900, hsl(0,0%,90%))}.OpalCalendar .OpalCalendar__day:focus{outline:0}body:not(._noFocusHighlight) .OpalCalendar .OpalCalendar__day:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;-webkit-box-shadow:inset 0 0 0 1px var(--primaryColor500, hsl(208,93%,50%));box-shadow:inset 0 0 0 1px var(--primaryColor500, hsl(208,93%,50%));content:'';pointer-events:none}.OpalCalendar .OpalCalendar__day:active{background:var(--grayColor800, hsl(0,0%,80%))}.OpalCalendar .OpalCalendar__day[today]{text-decoration:underline}.OpalCalendar .OpalCalendar__day[not_in_current_month]{opacity:.45}.OpalCalendar .OpalCalendar__day[disabled]{background:0 0;opacity:.15;cursor:default}.OpalCalendar .OpalCalendar__day[selected]{color:var(--primaryColor450, hsl(208,93%,45%));opacity:1}";
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

/***/ "eaeG":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_eaeG__;

/***/ }),

/***/ "j+lJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
function formatDate(year, month, day, delimiter = '/') {
    return (('0' + day).slice(-2) +
        delimiter +
        ('0' + (month + 1)).slice(-2) +
        delimiter +
        ('000' + year).slice(-4));
}
exports.formatDate = formatDate;


/***/ }),

/***/ "jL6t":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jL6t__;

/***/ }),

/***/ "q1vq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OpalCalendar_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpalCalendar = exports.toDate = exports.fromDate = exports.getTodayDate = exports.parseDate = exports.formatDate = void 0;
const gettext_1 = __webpack_require__("eaeG");
const opal_select_1 = __webpack_require__("jL6t");
const cellx_decorators_1 = __webpack_require__("yOaX");
const rionite_1 = __webpack_require__("u4yd");
const formatDate_1 = __webpack_require__("j+lJ");
Object.defineProperty(exports, "formatDate", { enumerable: true, get: function () { return formatDate_1.formatDate; } });
__webpack_require__("Wk+9");
const parseDate_1 = __webpack_require__("zhfG");
Object.defineProperty(exports, "parseDate", { enumerable: true, get: function () { return parseDate_1.parseDate; } });
const template_rnt_1 = __webpack_require__("KvHp");
function getTodayDate() {
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
exports.getTodayDate = getTodayDate;
function fromDate() {
    let fromDate = this.paramFromDate;
    if (fromDate) {
        return fromDate == 'today' ? getTodayDate() : parseDate_1.parseDate(fromDate);
    }
    let toDate = this.paramToDate;
    let date = toDate && toDate != 'today' ? parseDate_1.parseDate(toDate) : new Date();
    return new Date(date.getFullYear() - 100, date.getMonth(), date.getDate());
}
exports.fromDate = fromDate;
function toDate() {
    let toDate = this.paramToDate;
    if (toDate) {
        return toDate == 'today' ? getTodayDate() : parseDate_1.parseDate(toDate);
    }
    let fromDate = this.paramFromDate;
    let date = fromDate && fromDate != 'today' ? parseDate_1.parseDate(fromDate) : new Date();
    return new Date(date.getFullYear() + 100, date.getMonth(), date.getDate());
}
exports.toDate = toDate;
let OpalCalendar = OpalCalendar_1 = class OpalCalendar extends rionite_1.BaseComponent {
    constructor() {
        super(...arguments);
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.stringValueCell = null;
        this.days = function (_cell, next) {
            let dateDelimiter = this.dateDelimiter;
            let fromDate = this.fromDate;
            let toDate = this.toDate;
            let value = this.value;
            let shownYear = this.shownYear;
            let shownMonth = this.shownMonth;
            if (this._currentlyDateSelection) {
                this._currentlyDateSelection = false;
                return next;
            }
            let now = new Date();
            let nowYear = now.getFullYear();
            let nowMonth = now.getMonth();
            let nowDay = now.getDate();
            let selectedYear;
            let selectedMonth;
            let selectedDay;
            if (value) {
                selectedYear = value.getFullYear();
                selectedMonth = value.getMonth();
                selectedDay = value.getDate();
            }
            let lastPrevMonthDay = new Date(shownYear, shownMonth, 0).getDate();
            let lastMonthDay = new Date(shownYear, shownMonth + 1, 0).getDate();
            let firstMonthDayWeekDayIndex = new Date(shownYear, shownMonth, 1).getDay();
            if (!this.constructor.i18n.sundayFirst) {
                firstMonthDayWeekDayIndex = (firstMonthDayWeekDayIndex || 7) - 1;
            }
            let weekDays = [];
            let days = [weekDays];
            function pushDay(year, month, day, notInCurrentMonth) {
                let date = new Date(year, month, day);
                let disabled = date < fromDate || date > toDate;
                weekDays.push({
                    date: formatDate_1.formatDate(year, month, day, dateDelimiter),
                    value: day,
                    weekDay: [
                        'sunday',
                        'monday',
                        'tuesday',
                        'wednesday',
                        'thursday',
                        'friday',
                        'saturday'
                    ][date.getDay()],
                    today: year == nowYear && month == nowMonth && day == nowDay,
                    selected: !!value && year == selectedYear && month == selectedMonth && day == selectedDay,
                    notInCurrentMonth,
                    disabled,
                    tabIndex: disabled ? null : 0
                });
            }
            for (let i = firstMonthDayWeekDayIndex; i;) {
                pushDay(shownYear - +!shownMonth, shownMonth ? shownMonth - 1 : 11, lastPrevMonthDay - --i, true);
            }
            for (let i = 0; i < lastMonthDay;) {
                pushDay(shownYear, shownMonth, ++i, false);
                if (!((i + firstMonthDayWeekDayIndex) % 7) && i < lastMonthDay) {
                    days.push((weekDays = []));
                }
            }
            for (let i = 0, l = 7 - weekDays.length; i < l;) {
                pushDay(shownYear + +(shownMonth == 11), (shownMonth + 1) % 12, ++i, true);
            }
            return days;
        };
    }
    get fromYear() {
        return this.fromDate.getFullYear();
    }
    get toYear() {
        return this.toDate.getFullYear();
    }
    get years() {
        let years = [];
        for (let year = this.fromYear, toYear = this.toYear; year <= toYear; year++) {
            years.push(year);
        }
        return years;
    }
    get stringValue() {
        return this.paramValue;
    }
    set stringValue(value) {
        this.stringValueCell.set(value);
    }
    get value() {
        let value = this.stringValue;
        return value ? parseDate_1.parseDate(value) : null;
    }
    get btnPrevMonthDisabled() {
        return this.shownYear == this.fromYear && !this.shownMonth;
    }
    get btnNextMonthDisabled() {
        return this.shownYear == this.toYear && this.shownMonth == 11;
    }
    initialize() {
        let i18n = this.constructor.i18n;
        this.weekDays = i18n.sundayFirst
            ? i18n.weekDays
            : i18n.weekDays.slice(1).concat(i18n.weekDays[0]);
        this.weekDaysShort = i18n.sundayFirst
            ? i18n.weekDaysShort
            : i18n.weekDaysShort.slice(1).concat(i18n.weekDaysShort[0]);
        let fromDate = this.fromDate;
        let toDate = this.toDate;
        if (fromDate > toDate) {
            throw new TypeError('"fromDate" must be less than or equal to "toDate"');
        }
        let value = this.value;
        let shownDate;
        if (value) {
            if (isNaN(+value)) {
                throw new TypeError('Invalid "value"');
            }
            shownDate = value;
        }
        else {
            let today = getTodayDate();
            shownDate = today < fromDate ? fromDate : today > toDate ? toDate : today;
        }
        this.shownYear = shownDate.getFullYear();
        this.shownMonth = shownDate.getMonth();
    }
    _onDaysFocus(evt) {
        if (!this._documentKeyDownListening &&
            evt.target.classList.contains('OpalCalendar__day')) {
            this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
        }
    }
    _onDaysBlur() {
        if (!document.activeElement.classList.contains('OpalCalendar__day')) {
            this._documentKeyDownListening.stop();
            this._documentKeyDownListening = null;
        }
    }
    _onDocumentKeyDown(evt) {
        if (evt.which == 13 /* Enter */) {
            evt.preventDefault();
            this._click(document.activeElement);
        }
    }
    _click(dayEl) {
        if (dayEl.hasAttribute('selected') || dayEl.hasAttribute('disabled')) {
            return;
        }
        let selectedDayEl = this.$('days').querySelector('[selected]');
        if (selectedDayEl) {
            selectedDayEl.removeAttribute('selected');
        }
        dayEl.setAttribute('selected', '');
        this._currentlyDateSelection = true;
        this.stringValue = dayEl.dataset.date;
        this.emit(OpalCalendar_1.EVENT_CHANGE);
    }
};
OpalCalendar.EVENT_CHANGE = Symbol('change');
__decorate([
    rionite_1.Param('fromDate', String)
], OpalCalendar.prototype, "paramFromDate", void 0);
__decorate([
    rionite_1.Param('toDate', String)
], OpalCalendar.prototype, "paramToDate", void 0);
__decorate([
    rionite_1.Param('value', String)
], OpalCalendar.prototype, "paramValue", void 0);
__decorate([
    rionite_1.Param({ default: '/' })
], OpalCalendar.prototype, "dateDelimiter", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalCalendar.prototype, "fromDate", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalCalendar.prototype, "toDate", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalCalendar.prototype, "fromYear", null);
__decorate([
    cellx_decorators_1.Computed
], OpalCalendar.prototype, "toYear", null);
__decorate([
    cellx_decorators_1.Computed
], OpalCalendar.prototype, "years", null);
__decorate([
    cellx_decorators_1.Computed
], OpalCalendar.prototype, "stringValue", null);
__decorate([
    cellx_decorators_1.Computed
], OpalCalendar.prototype, "value", null);
__decorate([
    cellx_decorators_1.Observable
], OpalCalendar.prototype, "shownYear", void 0);
__decorate([
    cellx_decorators_1.Observable
], OpalCalendar.prototype, "shownMonth", void 0);
__decorate([
    cellx_decorators_1.Computed
], OpalCalendar.prototype, "btnPrevMonthDisabled", null);
__decorate([
    cellx_decorators_1.Computed
], OpalCalendar.prototype, "btnNextMonthDisabled", null);
__decorate([
    cellx_decorators_1.Computed
], OpalCalendar.prototype, "days", void 0);
__decorate([
    rionite_1.Listen('focus', 'days', true)
], OpalCalendar.prototype, "_onDaysFocus", null);
__decorate([
    rionite_1.Listen('blur', 'days', true)
], OpalCalendar.prototype, "_onDaysBlur", null);
OpalCalendar = OpalCalendar_1 = __decorate([
    rionite_1.Component({
        elementIs: 'OpalCalendar',
        i18n: {
            previousMonth: gettext_1.t('Предыдущий месяц'),
            nextMonth: gettext_1.t('Следующий месяц'),
            months: [
                gettext_1.t('Январь'),
                gettext_1.t('Февраль'),
                gettext_1.t('Март'),
                gettext_1.t('Апрель'),
                gettext_1.t('Май'),
                gettext_1.t('Июнь'),
                gettext_1.t('Июль'),
                gettext_1.t('Август'),
                gettext_1.t('Сентябрь'),
                gettext_1.t('Октябрь'),
                gettext_1.t('Ноябрь'),
                gettext_1.t('Декабрь')
            ],
            weekDays: [
                gettext_1.t('Воскресенье'),
                gettext_1.t('Понедельник'),
                gettext_1.t('Вторник'),
                gettext_1.t('Среда'),
                gettext_1.t('Четверг'),
                gettext_1.t('Пятница'),
                gettext_1.t('Суббота')
            ],
            weekDaysShort: [
                // ;;; сокр. от Воскресенье
                gettext_1.t('Вс'),
                // ;;; сокр. от Понедельник
                gettext_1.t('Пн'),
                // ;;; сокр. от Вторник
                gettext_1.t('Вт'),
                // ;;; сокр. от Среда
                gettext_1.t('Ср'),
                // ;;; сокр. от Четверг
                gettext_1.t('Чт'),
                // ;;; сокр. от Пятница
                gettext_1.t('Пт'),
                // ;;; сокр. от Суббота
                gettext_1.t('Сб')
            ],
            sundayFirst: false
        },
        template: template_rnt_1.default,
        events: {
            monthSelect: {
                [opal_select_1.OpalSelect.EVENT_SELECT](evt) {
                    this.shownMonth = +evt.target.viewModel.get(0).value;
                }
            },
            yearSelect: {
                [opal_select_1.OpalSelect.EVENT_SELECT](evt) {
                    this.shownYear = +evt.target.viewModel.get(0).value;
                }
            }
        },
        domEvents: {
            btnPrevMonth: {
                click() {
                    if (this.shownMonth) {
                        this.shownMonth--;
                    }
                    else {
                        this.shownYear--;
                        this.shownMonth = 11;
                    }
                }
            },
            btnNextMonth: {
                click() {
                    if (this.shownMonth == 11) {
                        this.shownYear++;
                        this.shownMonth = 0;
                    }
                    else {
                        this.shownMonth++;
                    }
                }
            },
            day: {
                click(_evt, _context, dayEl) {
                    this._click(dayEl);
                }
            }
        }
    })
], OpalCalendar);
exports.OpalCalendar = OpalCalendar;


/***/ }),

/***/ "u4yd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_u4yd__;

/***/ }),

/***/ "yOaX":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yOaX__;

/***/ }),

/***/ "zhfG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = void 0;
function parseDate(date) {
    let d = date.match(/\d+/g);
    return new Date(+d[2], +d[1] - 1, +d[0]);
}
exports.parseDate = parseDate;


/***/ })

/******/ });
});