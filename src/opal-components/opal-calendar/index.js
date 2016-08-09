require('./index.css');
require('./opal-calendar__icon-arrow-left.svg');

let cellx = require('cellx');
let { Component, template } = require('rionite');
let parseDate = require('./parseDate');
let formatDate = require('./formatDate');

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
			months: [
				'Январь', 'Февраль', 'Март', 'Апрель',
				'Май', 'Июнь', 'Июль', 'Август',
				'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
			],
			weekDays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
			weekDaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
			sundayFirst: false
		},

		template: template(require('./index.html')),

		assets: {
			btnPrevMonth: {
				'on-click'() {
					if (this.shownMonth) {
						this.shownMonth--;
					} else {
						this.shownYear--;
						this.shownMonth = 11;
					}
				}
			},

			btnNextMonth: {
				'on-click'() {
					if (this.shownMonth == 11) {
						this.shownYear++;
						this.shownMonth = 0;
					} else {
						this.shownMonth++;
					}
				}
			},

			sMonth: {
				'on-select'(evt) {
					this.shownMonth = +evt.target.value;
				}
			},

			sYear: {
				'on-select'(evt) {
					this.shownYear = +evt.target.value;
				}
			},

			days: {
				'on-focusin'() {
					if (document.activeElement.dataset.date && !this._documentKeyDownListening) {
						this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
					}
				},

				'on-focusout'() {
					setTimeout(() => {
						if (!document.activeElement.classList.contains('opal-calendar__day')) {
							this._documentKeyDownListening.stop();
							this._documentKeyDownListening = null;
						}
					}, 1);
				}
			}
		}
	},

	initialize() {
		let i18n = this.constructor.i18n;
		let sundayFirst = i18n.sundayFirst;

		this.weekDays = sundayFirst ? i18n.weekDays : i18n.weekDays.slice(1).concat(i18n.weekDays[0]);
		this.weekDaysShort = sundayFirst ?
			i18n.weekDaysShort :
			i18n.weekDaysShort.slice(1).concat(i18n.weekDaysShort[0]);

		cellx.define(this, {
			fromDate() {
				let fromDate = this.props.fromDate;

				if (fromDate) {
					return parseDate(fromDate);
				}

				fromDate = new Date();
				return new Date(fromDate.getFullYear() - 100, fromDate.getMonth(), fromDate.getDate());
			},

			toDate() {
				let toDate = this.props.toDate;

				if (toDate) {
					return parseDate(toDate);
				}

				toDate = new Date();
				return new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());
			},

			fromYear() {
				return this.fromDate.getFullYear();
			},

			toYear() {
				return this.toDate.getFullYear();
			},

			years() {
				let years = [];

				for (let year = this.fromYear, toYear = this.toYear; year <= toYear; year++) {
					years.push(year);
				}

				return years;
			}
		});

		let fromDate = this.fromDate;
		let toDate = this.toDate;

		if (fromDate > toDate) {
			throw new TypeError('fromDate must be less than or equal to toDate');
		}

		let selectedDate = this.props.selectedDate;
		let shownDate;

		if (selectedDate) {
			shownDate = parseDate(selectedDate);

			if (shownDate < fromDate || shownDate > toDate) {
				throw new RangeError(
					`shownDate must be ${ shownDate < fromDate ? 'greater' : 'less' } than or equal to ${
						shownDate < fromDate ? 'fromDate' : 'toDate' }`
				);
			}
		} else {
			shownDate = toDate;
		}

		cellx.define(this, {
			shownYear: shownDate.getFullYear(),
			shownMonth: shownDate.getMonth(),

			btnPrevMonthDisabled() {
				return this.shownYear == this.fromYear && !this.shownMonth;
			},

			btnNextMonthDisabled() {
				return this.shownYear == this.toYear && this.shownMonth == 11;
			},

			selectedDate() {
				let selectedDate = this.props.selectedDate;
				return selectedDate ? parseDate(selectedDate) : null;
			},

			days(push, fail, oldDays) {
				let fromDate = this.fromDate;
				let toDate = this.toDate;

				let shownYear = this.shownYear;
				let shownMonth = this.shownMonth;

				let selectedDate = this.selectedDate;

				if (this._currentlyDateSelect) {
					this._currentlyDateSelect = false;
					return oldDays;
				}

				let now = new Date();
				let currentYear = now.getFullYear();
				let currentMonth = now.getMonth();
				let currentDay = now.getDate();

				let lastPrevMonthDay = new Date(shownYear, shownMonth, 0).getDate();
				let lastMonthDay = new Date(shownYear, shownMonth + 1, 0).getDate();
				let firstMonthDayWeekDayIndex = new Date(shownYear, shownMonth, 1).getDay();

				if (!sundayFirst) {
					firstMonthDayWeekDayIndex = (firstMonthDayWeekDayIndex || 7) - 1;
				}

				let selectedYear;
				let selectedMonth;
				let selectedDay;

				if (selectedDate) {
					selectedYear = selectedDate.getFullYear();
					selectedMonth = selectedDate.getMonth();
					selectedDay = selectedDate.getDate();
				}

				let index = firstMonthDayWeekDayIndex;
				let weekDays = [];
				let days = [weekDays];

				function pushDay(year, month, day, notInCurrentMonth) {
					let date = new Date(year, month, day);
					let disabled = date < fromDate || date > toDate;

					weekDays.push({
						date: formatDate(year, month, day),
						value: day,
						notInCurrentMonth,
						today: year == currentYear && month == currentMonth && day == currentDay,
						selected: !!selectedDate && year == selectedYear && month == selectedMonth &&
							day == selectedDay,
						disabled,
						tabIndex: disabled ? null : 0
					});
				}

				while (index) {
					pushDay(
						shownYear - !shownMonth,
						shownMonth ? shownMonth - 1 : 11,
						lastPrevMonthDay - (--index),
						true
					);
				}

				for (let i = 0; i < lastMonthDay;) {
					pushDay(shownYear, shownMonth, ++i, false);

					if (!((i + firstMonthDayWeekDayIndex) % 7) && i < lastMonthDay) {
						days.push((weekDays = []));
					}
				}

				for (let i = 1, l = 8 - weekDays.length; i < l; i++) {
					pushDay(shownYear + (shownMonth == 11), shownMonth == 11 ? 0 : shownMonth + 1, i, true);
				}

				return days;
			}
		});
	},

	_onDocumentKeyDown(evt) {
		if (evt.which == 13/* Enter */ || evt.which == 32/* Space */) {
			evt.preventDefault();
			this._click(document.activeElement);
		}
	},

	_onDayClick(evt) {
		this._click(evt.target);
	},

	_click(dayEl) {
		if (dayEl.hasAttribute('selected') || dayEl.hasAttribute('disabled')) {
			return;
		}

		let selectedDayEl = this.assets.days.querySelector('[selected]');

		if (selectedDayEl) {
			selectedDayEl.removeAttribute('selected');
		}

		dayEl.setAttribute('selected', '');

		this._currentlyDateSelect = true;

		this.props.selectedDate = dayEl.dataset.date;
	}
});
