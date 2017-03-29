(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rionite"), require("cellx"));
	else if(typeof define === 'function' && define.amd)
		define(["rionite", "cellx"], factory);
	else if(typeof exports === 'object')
		exports["opal-calendar"] = factory(require("rionite"), require("cellx"));
	else
		root["opal-calendar"] = factory(root["rionite"], root["cellx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

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
	Object.defineProperty(exports, "__esModule", { value: true });
	__webpack_require__(45);
	__webpack_require__(76);
	var cellx_1 = __webpack_require__(2);
	var rionite_1 = __webpack_require__(1);
	var parseDate_1 = __webpack_require__(15);
	var formatDate_1 = __webpack_require__(14);
	var template = __webpack_require__(23);
	function getTodayDate() {
	    var now = new Date();
	    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
	}
	var OpalCalendar = OpalCalendar_1 = (function (_super) {
	    __extends(OpalCalendar, _super);
	    function OpalCalendar() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    OpalCalendar.prototype.initialize = function () {
	        var i18n = this.constructor.i18n;
	        var sundayFirst = i18n['sundayFirst'];
	        this.weekDays = sundayFirst ? i18n['weekDays'] : i18n['weekDays'].slice(1).concat(i18n['weekDays'][0]);
	        this.weekDaysShort = sundayFirst ?
	            i18n['weekDaysShort'] :
	            i18n['weekDaysShort'].slice(1).concat(i18n['weekDaysShort'][0]);
	        cellx_1.define(this, {
	            fromDate: function () {
	                var fromDate = this.props['fromDate'];
	                if (fromDate) {
	                    return fromDate == 'today' ? getTodayDate() : parseDate_1.default(fromDate);
	                }
	                var toDate = this.props['toDate'];
	                var date = toDate && toDate != 'today' ? parseDate_1.default(toDate) : new Date();
	                return new Date(date.getFullYear() - 100, date.getMonth(), date.getDate());
	            },
	            toDate: function () {
	                var toDate = this.props['toDate'];
	                if (toDate) {
	                    return toDate == 'today' ? getTodayDate() : parseDate_1.default(toDate);
	                }
	                var fromDate = this.props['fromDate'];
	                var date = fromDate && fromDate != 'today' ? parseDate_1.default(fromDate) : new Date();
	                return new Date(date.getFullYear() + 100, date.getMonth(), date.getDate());
	            },
	            fromYear: function () {
	                return this.fromDate.getFullYear();
	            },
	            toYear: function () {
	                return this.toDate.getFullYear();
	            },
	            years: function () {
	                var years = [];
	                for (var year = this.fromYear, toYear = this.toYear; year <= toYear; year++) {
	                    years.push(year);
	                }
	                return years;
	            },
	            value: function () {
	                var value = this.props['value'];
	                return value ? parseDate_1.default(value) : null;
	            }
	        });
	        var fromDate = this.fromDate;
	        var toDate = this.toDate;
	        if (fromDate > toDate) {
	            throw new TypeError('"fromDate" must be less than or equal to "toDate"');
	        }
	        var value = this.value;
	        var shownDate;
	        if (value) {
	            if (isNaN(+value)) {
	                throw new TypeError('Invalid "value"');
	            }
	            shownDate = value;
	        }
	        else {
	            var today = getTodayDate();
	            shownDate = today < fromDate ? fromDate : (today > toDate ? toDate : today);
	        }
	        cellx_1.define(this, {
	            shownYear: shownDate.getFullYear(),
	            shownMonth: shownDate.getMonth(),
	            btnPrevMonthDisabled: function () {
	                return this.shownYear == this.fromYear && !this.shownMonth;
	            },
	            btnNextMonthDisabled: function () {
	                return this.shownYear == this.toYear && this.shownMonth == 11;
	            },
	            days: function (push, fail, oldDays) {
	                var dateDelimiter = this.props['dateDelimiter'];
	                var fromDate = this.fromDate;
	                var toDate = this.toDate;
	                var value = this.value;
	                var shownYear = this.shownYear;
	                var shownMonth = this.shownMonth;
	                if (this._currentlyDateSelect) {
	                    this._currentlyDateSelect = false;
	                    return oldDays;
	                }
	                var now = new Date();
	                var nowYear = now.getFullYear();
	                var nowMonth = now.getMonth();
	                var nowDay = now.getDate();
	                var selectedYear;
	                var selectedMonth;
	                var selectedDay;
	                if (value) {
	                    selectedYear = value.getFullYear();
	                    selectedMonth = value.getMonth();
	                    selectedDay = value.getDate();
	                }
	                var lastPrevMonthDay = new Date(shownYear, shownMonth, 0).getDate();
	                var lastMonthDay = new Date(shownYear, shownMonth + 1, 0).getDate();
	                var firstMonthDayWeekDayIndex = new Date(shownYear, shownMonth, 1).getDay();
	                if (!sundayFirst) {
	                    firstMonthDayWeekDayIndex = (firstMonthDayWeekDayIndex || 7) - 1;
	                }
	                var weekDays = [];
	                var days = [weekDays];
	                function pushDay(year, month, day, notInCurrentMonth) {
	                    var date = new Date(year, month, day);
	                    var disabled = date < fromDate || date > toDate;
	                    weekDays.push({
	                        date: formatDate_1.default(year, month, day, dateDelimiter),
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
	                        selected: !!value && year == selectedYear && month == selectedMonth &&
	                            day == selectedDay,
	                        notInCurrentMonth: notInCurrentMonth,
	                        disabled: disabled,
	                        tabIndex: disabled ? null : 0
	                    });
	                }
	                for (var i = firstMonthDayWeekDayIndex; i;) {
	                    pushDay(shownYear - +!shownMonth, shownMonth ? shownMonth - 1 : 11, lastPrevMonthDay - (--i), true);
	                }
	                for (var i = 0; i < lastMonthDay;) {
	                    pushDay(shownYear, shownMonth, ++i, false);
	                    if (!((i + firstMonthDayWeekDayIndex) % 7) && i < lastMonthDay) {
	                        days.push((weekDays = []));
	                    }
	                }
	                for (var i = 0, l = 7 - weekDays.length; i < l;) {
	                    pushDay(shownYear + +(shownMonth == 11), (shownMonth + 1) % 12, ++i, true);
	                }
	                return days;
	            }
	        });
	    };
	    OpalCalendar.prototype._onDocumentKeyDown = function (evt) {
	        if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
	            evt.preventDefault();
	            this._click(document.activeElement);
	        }
	    };
	    OpalCalendar.prototype._onDayClick = function (evt) {
	        this._click(evt.target);
	    };
	    OpalCalendar.prototype._click = function (dayEl) {
	        if (dayEl.hasAttribute('selected') || dayEl.hasAttribute('disabled')) {
	            return;
	        }
	        var selectedDayEl = this.$('days').querySelector('[selected]');
	        if (selectedDayEl) {
	            selectedDayEl.removeAttribute('selected');
	        }
	        dayEl.setAttribute('selected', '');
	        this._currentlyDateSelect = true;
	        this.props['value'] = dayEl.dataset['date'];
	        this.emit('change');
	    };
	    return OpalCalendar;
	}(rionite_1.Component));
	OpalCalendar = OpalCalendar_1 = __decorate([
	    rionite_1.d.Component({
	        elementIs: 'opal-calendar',
	        props: {
	            fromDate: String,
	            toDate: String,
	            value: String,
	            dateDelimiter: { default: '/', readonly: true }
	        },
	        i18n: {
	            previousMonth: 'Предыдущий месяц',
	            nextMonth: 'Следующий месяц',
	            months: [
	                'Январь', 'Февраль', 'Март', 'Апрель',
	                'Май', 'Июнь', 'Июль', 'Август',
	                'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
	            ],
	            weekDays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
	            weekDaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	            sundayFirst: false
	        },
	        bemlTemplate: template,
	        events: {
	            'btn-prev-month': {
	                click: function () {
	                    if (this.shownMonth) {
	                        this.shownMonth--;
	                    }
	                    else {
	                        this.shownYear--;
	                        this.shownMonth = 11;
	                    }
	                }
	            },
	            'btn-next-month': {
	                click: function () {
	                    if (this.shownMonth == 11) {
	                        this.shownYear++;
	                        this.shownMonth = 0;
	                    }
	                    else {
	                        this.shownMonth++;
	                    }
	                }
	            },
	            's-month': {
	                '<opal-select-option>select': function (evt) {
	                    this.shownMonth = +evt.target.value;
	                }
	            },
	            's-year': {
	                '<opal-select-option>select': function (evt) {
	                    this.shownYear = +evt.target.value;
	                }
	            },
	            days: {
	                focus: function () {
	                    if (document.activeElement.dataset['date'] && !this._documentKeyDownListening) {
	                        this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
	                    }
	                },
	                blur: function () {
	                    var _this = this;
	                    setTimeout(function () {
	                        if (!document.activeElement.classList.contains('opal-calendar__day')) {
	                            _this._documentKeyDownListening.stop();
	                            _this._documentKeyDownListening = null;
	                        }
	                    }, 1);
	                }
	            }
	        }
	    })
	], OpalCalendar);
	exports.default = OpalCalendar;
	var OpalCalendar_1;


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 14:
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function formatDate(year, month, day, delimiter) {
	    if (delimiter === void 0) { delimiter = '/'; }
	    return ('0' + day).slice(-2) + delimiter + ('0' + (month + 1)).slice(-2) + delimiter + ('000' + year).slice(-4);
	}
	exports.default = formatDate;


/***/ },

/***/ 15:
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	function parseDate(date) {
	    var d = date.match(/\d+/g);
	    return new Date(+d[2], +d[1] - 1, +d[0]);
	}
	exports.default = parseDate;


/***/ },

/***/ 23:
/***/ function(module, exports) {

	module.exports = "header/header {\nbutton/btn-prev-month (disabled={btnPrevMonthDisabled}) {\nsvg/btn-prev-month-icon (viewBox=0 0 32 28) { use (xlink:href=#opal-components__icon-arrow-left) }\n}\nopal-select/s-month (size=s, value=['{shownMonth}']) {\ntemplate (class=opal-select__menu-content, is=rt-repeat, for=month of constructor.i18n.months, rt-silent) {\nopal-select-option (value={$index}, text={month})\n}\n}\n' '\nopal-select/s-year (size=s, value=['{shownYear}']) {\ntemplate (class=opal-select__menu-content, is=rt-repeat, for=year of years, rt-silent) {\nopal-select-option (value={year}, text={year})\n}\n}\nbutton/btn-next-month (disabled={btnNextMonthDisabled}) {\nsvg/btn-next-month-icon (viewBox=0 0 32 28) { use (xlink:href=#opal-components__icon-arrow-left) }\n}\n}\ndiv/body {\ntable/week-days {\ntr/week-days-row {\ntemplate (is=rt-repeat, for=weekDay of weekDaysShort, rt-silent) {\ntd/week-day { '{weekDay}' }\n}\n}\n}\ntable/days {\ntemplate (is=rt-repeat, for=weekDays of days, rt-silent) {\ntr/days-row {\ntemplate (is=rt-repeat, for=day of weekDays, rt-silent) {\ntd/day (\nweek-day={day.weekDay},\ntoday={day.today},\nselected={day.selected},\nnot-in-current-month={day.notInCurrentMonth},\ndisabled={day.disabled},\ntabindex={day.tabIndex},\ndata-date={day.date},\nrt-click=_onDayClick\n) { '{day.value}' }\n}\n}\n}\n}\n}"

/***/ },

/***/ 45:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-calendar{display:block;width:300px;border:1px solid #dbdbdb;border-radius:3px;background:#fff;color:#000;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400}.opal-calendar .opal-calendar__header{position:relative;padding:8px 44px;text-align:center}.opal-calendar .opal-calendar__btn-prev-month,.opal-calendar .opal-calendar__btn-next-month{position:absolute;top:0;bottom:0;margin:auto;padding:0;width:30px;height:30px;border:0;border-radius:50%;background:0 0;cursor:pointer}.opal-calendar .opal-calendar__btn-prev-month{left:8px}.opal-calendar .opal-calendar__btn-next-month{right:8px}.opal-calendar .opal-calendar__btn-prev-month:hover,.opal-calendar .opal-calendar__btn-next-month:hover{background:#e6e6e6}.opal-calendar .opal-calendar__btn-prev-month:focus,.opal-calendar .opal-calendar__btn-next-month:focus{outline:none}body:not(._no-focus-highlight) .opal-calendar .opal-calendar__btn-prev-month:focus::after,body:not(._no-focus-highlight) .opal-calendar .opal-calendar__btn-next-month:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-calendar .opal-calendar__btn-prev-month:active,.opal-calendar .opal-calendar__btn-next-month:active{background:#ccc}.opal-calendar .opal-calendar__btn-prev-month[disabled],.opal-calendar .opal-calendar__btn-next-month[disabled]{background:0 0;color:#000;opacity:.3;cursor:default}.opal-calendar .opal-calendar__btn-prev-month-icon,.opal-calendar .opal-calendar__btn-next-month-icon{display:block;margin:auto;width:16px;height:16px;fill:currentColor}.opal-calendar .opal-calendar__btn-next-month-icon{-ms-transform:scaleX(-1);transform:scaleX(-1)}.opal-calendar .opal-calendar__body{padding:0 8px 8px;text-align:center;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-calendar .opal-calendar__week-days,.opal-calendar .opal-calendar__days{width:100%;border-spacing:0;border-collapse:separate}.opal-calendar .opal-calendar__week-day,.opal-calendar .opal-calendar__day{padding:3px 7px;width:14.286%;border:1px solid transparent}.opal-calendar .opal-calendar__day{position:relative;border-radius:3px;cursor:pointer}.opal-calendar .opal-calendar__day:hover{background:#e6e6e6}.opal-calendar .opal-calendar__day:focus{outline:none}body:not(._no-focus-highlight) .opal-calendar .opal-calendar__day:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-calendar .opal-calendar__day:active{background:#ccc}.opal-calendar .opal-calendar__day[today]{text-decoration:underline}.opal-calendar .opal-calendar__day[not-in-current-month]{opacity:.45}.opal-calendar .opal-calendar__day[disabled]{background:0 0;opacity:.15;cursor:default}.opal-calendar .opal-calendar__day[selected]{color:#0d87f2;opacity:1}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 76:
/***/ function(module, exports) {

	(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 28\" id=\"opal-components__icon-arrow-left\"><path stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" fill=\"none\" d=\"M14 2L2 14l12 12M2 14h28\" xmlns=\"http://www.w3.org/2000/svg\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }

/******/ })
});
;