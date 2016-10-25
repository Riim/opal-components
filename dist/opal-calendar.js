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

	'use strict';

	__webpack_require__(47);
	__webpack_require__(78);

	var cellx = __webpack_require__(2);

	var _require = __webpack_require__(1);

	var ComponentTemplate = _require.ComponentTemplate;
	var Component = _require.Component;

	var parseDate = __webpack_require__(6);
	var formatDate = __webpack_require__(5);

	module.exports = Component.extend('opal-calendar', {
		Static: {
			props: {
				fromDate: String,
				toDate: String,
				selectedDate: String
			},

			i18n: {
				previousMonth: 'Предыдущий месяц',
				nextMonth: 'Следующий месяц',
				months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
				weekDays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
				weekDaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
				sundayFirst: false
			},

			template: new ComponentTemplate(__webpack_require__(24)),

			assets: {
				btnPrevMonth: {
					'on-click': function onClick() {
						if (this.shownMonth) {
							this.shownMonth--;
						} else {
							this.shownYear--;
							this.shownMonth = 11;
						}
					}
				},

				btnNextMonth: {
					'on-click': function onClick() {
						if (this.shownMonth == 11) {
							this.shownYear++;
							this.shownMonth = 0;
						} else {
							this.shownMonth++;
						}
					}
				},

				sMonth: {
					'on-select': function onSelect(evt) {
						this.shownMonth = +evt.target.value;
					}
				},

				sYear: {
					'on-select': function onSelect(evt) {
						this.shownYear = +evt.target.value;
					}
				},

				days: {
					'on-focusin': function onFocusin() {
						if (document.activeElement.dataset.date && !this._documentKeyDownListening) {
							this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
						}
					},
					'on-focusout': function onFocusout() {
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
		},

		initialize: function initialize() {
			var i18n = this.constructor.i18n;
			var sundayFirst = i18n.sundayFirst;

			this.weekDays = sundayFirst ? i18n.weekDays : i18n.weekDays.slice(1).concat(i18n.weekDays[0]);
			this.weekDaysShort = sundayFirst ? i18n.weekDaysShort : i18n.weekDaysShort.slice(1).concat(i18n.weekDaysShort[0]);

			cellx.define(this, {
				fromDate: function fromDate() {
					var fromDate = this.props.fromDate;

					if (fromDate) {
						return parseDate(fromDate);
					}

					fromDate = new Date();
					return new Date(fromDate.getFullYear() - 100, fromDate.getMonth(), fromDate.getDate());
				},
				toDate: function toDate() {
					var toDate = this.props.toDate;

					if (toDate) {
						return parseDate(toDate);
					}

					toDate = new Date();
					return new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());
				},
				fromYear: function fromYear() {
					return this.fromDate.getFullYear();
				},
				toYear: function toYear() {
					return this.toDate.getFullYear();
				},
				years: function years() {
					var years = [];

					for (var year = this.fromYear, toYear = this.toYear; year <= toYear; year++) {
						years.push(year);
					}

					return years;
				}
			});

			var fromDate = this.fromDate;
			var toDate = this.toDate;

			if (fromDate > toDate) {
				throw new TypeError('fromDate must be less than or equal to toDate');
			}

			var selectedDate = this.props.selectedDate;
			var shownDate = void 0;

			if (selectedDate) {
				shownDate = parseDate(selectedDate);

				if (shownDate < fromDate || shownDate > toDate) {
					throw new RangeError('shownDate must be ' + (shownDate < fromDate ? 'greater' : 'less') + ' than or equal to ' + (shownDate < fromDate ? 'fromDate' : 'toDate'));
				}
			} else {
				shownDate = toDate;
			}

			cellx.define(this, {
				shownYear: shownDate.getFullYear(),
				shownMonth: shownDate.getMonth(),

				btnPrevMonthDisabled: function btnPrevMonthDisabled() {
					return this.shownYear == this.fromYear && !this.shownMonth;
				},
				btnNextMonthDisabled: function btnNextMonthDisabled() {
					return this.shownYear == this.toYear && this.shownMonth == 11;
				},
				selectedDate: function selectedDate() {
					var selectedDate = this.props.selectedDate;
					return selectedDate ? parseDate(selectedDate) : null;
				},
				days: function days(push, fail, oldDays) {
					var fromDate = this.fromDate;
					var toDate = this.toDate;

					var shownYear = this.shownYear;
					var shownMonth = this.shownMonth;

					var selectedDate = this.selectedDate;

					if (this._currentlyDateSelect) {
						this._currentlyDateSelect = false;
						return oldDays;
					}

					var now = new Date();
					var currentYear = now.getFullYear();
					var currentMonth = now.getMonth();
					var currentDay = now.getDate();

					var lastPrevMonthDay = new Date(shownYear, shownMonth, 0).getDate();
					var lastMonthDay = new Date(shownYear, shownMonth + 1, 0).getDate();
					var firstMonthDayWeekDayIndex = new Date(shownYear, shownMonth, 1).getDay();

					if (!sundayFirst) {
						firstMonthDayWeekDayIndex = (firstMonthDayWeekDayIndex || 7) - 1;
					}

					var selectedYear = void 0;
					var selectedMonth = void 0;
					var selectedDay = void 0;

					if (selectedDate) {
						selectedYear = selectedDate.getFullYear();
						selectedMonth = selectedDate.getMonth();
						selectedDay = selectedDate.getDate();
					}

					var index = firstMonthDayWeekDayIndex;
					var weekDays = [];
					var days = [weekDays];

					function pushDay(year, month, day, notInCurrentMonth) {
						var date = new Date(year, month, day);
						var disabled = date < fromDate || date > toDate;

						weekDays.push({
							date: formatDate(year, month, day),
							value: day,
							notInCurrentMonth: notInCurrentMonth,
							today: year == currentYear && month == currentMonth && day == currentDay,
							selected: !!selectedDate && year == selectedYear && month == selectedMonth && day == selectedDay,
							disabled: disabled,
							tabIndex: disabled ? null : 0
						});
					}

					while (index) {
						pushDay(shownYear - !shownMonth, shownMonth ? shownMonth - 1 : 11, lastPrevMonthDay - --index, true);
					}

					for (var i = 0; i < lastMonthDay;) {
						pushDay(shownYear, shownMonth, ++i, false);

						if (!((i + firstMonthDayWeekDayIndex) % 7) && i < lastMonthDay) {
							days.push(weekDays = []);
						}
					}

					for (var _i = 1, l = 8 - weekDays.length; _i < l; _i++) {
						pushDay(shownYear + (shownMonth == 11), shownMonth == 11 ? 0 : shownMonth + 1, _i, true);
					}

					return days;
				}
			});
		},
		_onDocumentKeyDown: function _onDocumentKeyDown(evt) {
			if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
					evt.preventDefault();
					this._click(document.activeElement);
				}
		},
		_onDayClick: function _onDayClick(evt) {
			this._click(evt.target);
		},
		_click: function _click(dayEl) {
			if (dayEl.hasAttribute('selected') || dayEl.hasAttribute('disabled')) {
				return;
			}

			var selectedDayEl = this.assets.days.querySelector('[selected]');

			if (selectedDayEl) {
				selectedDayEl.removeAttribute('selected');
			}

			dayEl.setAttribute('selected', '');

			this._currentlyDateSelect = true;

			this.props.selectedDate = dayEl.dataset.date;
		}
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 5:
/***/ function(module, exports) {

	'use strict';

	function formatDate(year, month, day) {
		if (arguments.length == 1) {
			var date = year;

			year = date.getFullYear();
			month = date.getMonth();
			day = date.getDate();
		}

		return ('0' + day).slice(-2) + '/' + ('0' + (month + 1)).slice(-2) + '/' + ('000' + year).slice(-4);
	}

	module.exports = formatDate;

/***/ },

/***/ 6:
/***/ function(module, exports) {

	'use strict';

	function parseDate(date) {
		var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dd/mm/yyyy';

		date = date.match(/\d+/g);

		date = format.match(/d{2}|m{2}|y{4}/g).reduce(function (parsedDate, item, index) {
			parsedDate[item] = +date[index];
			return parsedDate;
		}, {});

		return new Date(date.yyyy, date.mm - 1, date.dd);
	}

	module.exports = parseDate;

/***/ },

/***/ 24:
/***/ function(module, exports) {

	module.exports = "<header class=\"opal-calendar__header\"> <button class=\"opal-calendar__btn-prev-month\" disabled=\"{btnPrevMonthDisabled}\"> <svg viewBox=\"0 0 32 28\" class=\"opal-calendar__icon-arrow-left\"><use xlink:href=\"#opal-calendar__icon-arrow-left\"></use></svg> </button> <opal-select class=\"opal-calendar__s-month\" size=\"s\" value=\"['{shownMonth}']\"> <template is=\"rt-repeat\" class=\"opal-select__menu-content\" for=\"month of constructor.i18n.months\"> <opal-select-option value=\"{$index}\" text=\"{month}\"></opal-select-option> </template> </opal-select> <opal-select class=\"opal-calendar__s-year\" size=\"s\" value=\"['{shownYear}']\"> <template is=\"rt-repeat\" class=\"opal-select__menu-content\" for=\"year of years\"> <opal-select-option value=\"{year}\" text=\"{year}\"></opal-select-option> </template> </opal-select> <button class=\"opal-calendar__btn-next-month\" disabled=\"{btnNextMonthDisabled}\"> <svg viewBox=\"0 0 32 28\" class=\"opal-calendar__icon-arrow-right\"><use xlink:href=\"#opal-calendar__icon-arrow-left\"></use></svg> </button> </header> <div class=\"opal-calendar__body\"> <table class=\"opal-calendar__week-days\"> <tbody><tr class=\"opal-calendar__week-days-row\"> <template is=\"rt-repeat\" for=\"weekDay of weekDaysShort\"> <td class=\"opal-calendar__week-day\">{weekDay}</td> </template> </tr> </tbody></table> <table class=\"opal-calendar__days\"> <template is=\"rt-repeat\" for=\"weekDays of days\"> <tr class=\"opal-calendar__days-row\"> <template is=\"rt-repeat\" for=\"day of weekDays\"> <td class=\"opal-calendar__day\" not-in-current-month=\"{day.notInCurrentMonth}\" today=\"{day.today}\" selected=\"{day.selected}\" disabled=\"{day.disabled}\" tabindex=\"{day.tabIndex}\" data-date=\"{day.date}\" rt-click=\"_onDayClick\">{day.value}</td> </template> </tr> </template> </table> </div>"

/***/ },

/***/ 47:
/***/ function(module, exports) {

	module.exports = (function(d) {
	        var head = d.head || d.getElementsByTagName('head')[0];
	        if (head) {
	            var style = d.createElement('style');
	            style.type = 'text/css';
	            style.textContent = ".opal-calendar{display:block;width:300px;border:1px solid #dbdbdb;border-radius:3px;background:#fff;color:#000;text-shadow:none;font:16px/24px Verdana,Geneva,sans-serif;font-weight:400}.opal-calendar .opal-calendar__header{position:relative;padding:8px 44px;text-align:center}.opal-calendar .opal-calendar__btn-prev-month,.opal-calendar .opal-calendar__btn-next-month{position:absolute;top:0;bottom:0;margin:auto;padding:0;width:30px;height:30px;border:0;border-radius:50%;background:0 0;cursor:pointer}.opal-calendar .opal-calendar__btn-prev-month{left:8px}.opal-calendar .opal-calendar__btn-next-month{right:8px}.opal-calendar .opal-calendar__btn-prev-month:hover,.opal-calendar .opal-calendar__btn-next-month:hover{background:#e6e6e6}.opal-calendar .opal-calendar__btn-prev-month:focus,.opal-calendar .opal-calendar__btn-next-month:focus{outline:none}body:not(._no-focus-highlight) .opal-calendar .opal-calendar__btn-prev-month:focus::after,body:not(._no-focus-highlight) .opal-calendar .opal-calendar__btn-next-month:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-calendar .opal-calendar__btn-prev-month:active,.opal-calendar .opal-calendar__btn-next-month:active{background:#ccc}.opal-calendar .opal-calendar__btn-prev-month[disabled],.opal-calendar .opal-calendar__btn-next-month[disabled]{background:0 0;color:#000;opacity:.3;cursor:default}.opal-calendar .opal-calendar__icon-arrow-left,.opal-calendar .opal-calendar__icon-arrow-right{display:block;margin:auto;width:16px;height:16px;fill:currentColor}.opal-calendar .opal-calendar__icon-arrow-right{-ms-transform:scaleX(-1);transform:scaleX(-1)}.opal-calendar .opal-calendar__body{padding:0 8px 8px;text-align:center;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.opal-calendar .opal-calendar__week-days,.opal-calendar .opal-calendar__days{width:100%;border-spacing:0;border-collapse:separate}.opal-calendar .opal-calendar__week-day,.opal-calendar .opal-calendar__day{padding:3px 7px;width:14.286%;border:1px solid transparent}.opal-calendar .opal-calendar__day{position:relative;border-radius:3px;cursor:pointer}.opal-calendar .opal-calendar__day:hover{background:#e6e6e6}.opal-calendar .opal-calendar__day:focus{outline:none}body:not(._no-focus-highlight) .opal-calendar .opal-calendar__day:focus::after{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:inherit;box-shadow:inset 0 0 0 1px #33a0ff;content:'';pointer-events:none}.opal-calendar .opal-calendar__day:active{background:#ccc}.opal-calendar .opal-calendar__day[not-in-current-month]{color:#a6a6a6}.opal-calendar .opal-calendar__day[today]{text-decoration:underline}.opal-calendar .opal-calendar__day[selected]{color:#0d87f2}.opal-calendar .opal-calendar__day[disabled]{background:0 0;color:#e6e6e6;cursor:default}";
	            head.appendChild(style);
	            return style;
	        }
	        return null;
	    })(document);


/***/ },

/***/ 78:
/***/ function(module, exports) {

	(function _() { if (document.body) { document.body.insertAdjacentHTML('beforeend', "<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none\"><symbol viewBox=\"0 0 32 28\" id=\"opal-calendar__icon-arrow-left\"><path stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" fill=\"none\" d=\"M14 2L2 14l12 12M2 14h28\"/></symbol></svg>"); } else { setTimeout(_, 100); } })();

/***/ }

/******/ })
});
;