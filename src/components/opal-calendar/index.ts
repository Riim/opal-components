import './index.css';
import '../../assets/icons/opal-components__icon-arrow-left.svg';

import { IEvent, define } from 'cellx';
import { IDisposableListening, Component, d, ComponentTemplate } from 'rionite';
import { OpalSelectOption } from '../opal-select';
import parseDate from './parseDate';
import formatDate from './formatDate';
import template = require('./index.html');

export interface IDay {
	date: string;
	value: number;
	notInCurrentMonth: boolean;
	today: boolean;
	selected: boolean;
	disabled: boolean;
	tabIndex: number | null;
}

export type TWeekDays = Array<IDay>;

export type TDays = Array<TWeekDays>;

@d.Component<OpalCalendar>({
	elementIs: 'opal-calendar',

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

	template: new ComponentTemplate(template),

	events: {
		'btn-prev-month': {
			click() {
				if (this.shownMonth) {
					this.shownMonth--;
				} else {
					this.shownYear--;
					this.shownMonth = 11;
				}
			}
		},

		'btn-next-month': {
			click() {
				if (this.shownMonth == 11) {
					this.shownYear++;
					this.shownMonth = 0;
				} else {
					this.shownMonth++;
				}
			}
		},

		's-month': {
			select(evt: IEvent) {
				this.shownMonth = +(evt.target as OpalSelectOption).value;
			}
		},

		's-year': {
			select(evt: IEvent) {
				this.shownYear = +(evt.target as OpalSelectOption).value;
			}
		},

		days: {
			focusin() {
				if ((document.activeElement as HTMLElement).dataset['date'] && !this._documentKeyDownListening) {
					this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
				}
			},

			focusout() {
				setTimeout(() => {
					if (!document.activeElement.classList.contains('opal-calendar__day')) {
						(this._documentKeyDownListening as IDisposableListening).stop();
						this._documentKeyDownListening = null;
					}
				}, 1);
			}
		}
	}
})
export default class OpalCalendar extends Component {
	weekDays: Array<string>;
	weekDaysShort: Array<string>;

	fromDate: Date;
	toDate: Date;

	fromYear: number;
	toYear: number;
	years: Array<number>;

	selectedDate: Date | null;

	shownYear: number;
	shownMonth: number;

	btnPrevMonthDisabled: boolean;
	btnNextMonthDisabled: boolean;

	days: TDays;

	_currentlyDateSelect: boolean;

	_documentKeyDownListening: IDisposableListening | null;

	initialize() {
		let i18n = (this.constructor as typeof OpalCalendar).i18n;
		let sundayFirst = i18n['sundayFirst'];

		this.weekDays = sundayFirst ? i18n['weekDays'] : i18n['weekDays'].slice(1).concat(i18n['weekDays'][0]);
		this.weekDaysShort = sundayFirst ?
			i18n['weekDaysShort'] :
			i18n['weekDaysShort'].slice(1).concat(i18n['weekDaysShort'][0]);

		define(this, {
			fromDate(this: OpalCalendar) {
				let fromDate: string | undefined = this.props['from-date'];

				if (fromDate) {
					return parseDate(fromDate);
				}

				let now = new Date();
				return new Date(now.getFullYear() - 100, now.getMonth(), now.getDate());
			},

			toDate(this: OpalCalendar) {
				let toDate: string | undefined = this.props['to-date'];

				if (toDate) {
					return parseDate(toDate);
				}

				let now = new Date();
				return new Date(now.getFullYear(), now.getMonth(), now.getDate());
			},

			fromYear(this: OpalCalendar) {
				return this.fromDate.getFullYear();
			},

			toYear(this: OpalCalendar) {
				return this.toDate.getFullYear();
			},

			years(this: OpalCalendar) {
				let years: Array<number> = [];

				for (let year = this.fromYear, toYear = this.toYear; year <= toYear; year++) {
					years.push(year);
				}

				return years;
			},

			selectedDate(this: OpalCalendar) {
				let selectedDate = this.props['selected-date'];
				return selectedDate ? parseDate(selectedDate) : null;
			}
		});

		let fromDate = this.fromDate;
		let toDate = this.toDate;

		if (fromDate > toDate) {
			throw new TypeError('"fromDate" must be less than or equal to "toDate"');
		}

		let selectedDate = this.selectedDate;
		let shownDate: Date;

		if (selectedDate) {
			if (isNaN(+selectedDate)) {
				throw new TypeError('Invalid "selectedDate"');
			}

			shownDate = selectedDate;

			if (shownDate < fromDate || shownDate > toDate) {
				throw new RangeError(
					`"shownDate" must be ${ shownDate < fromDate ? 'greater' : 'less' } than or equal to "${
						shownDate < fromDate ? 'fromDate' : 'toDate' }"`
				);
			}
		} else {
			shownDate = toDate;
		}

		define(this, {
			shownYear: shownDate.getFullYear(),
			shownMonth: shownDate.getMonth(),

			btnPrevMonthDisabled(this: OpalCalendar) {
				return this.shownYear == this.fromYear && !this.shownMonth;
			},

			btnNextMonthDisabled(this: OpalCalendar) {
				return this.shownYear == this.toYear && this.shownMonth == 11;
			},

			days(this: OpalCalendar, push: any, fail: any, oldDays: TDays | undefined): TDays {
				let fromDate = this.fromDate;
				let toDate = this.toDate;

				let selectedDate = this.selectedDate;

				let shownYear = this.shownYear;
				let shownMonth = this.shownMonth;

				if (this._currentlyDateSelect) {
					this._currentlyDateSelect = false;
					return oldDays as TDays;
				}

				let now = new Date();
				let nowYear = now.getFullYear();
				let nowMonth = now.getMonth();
				let nowDay = now.getDate();

				let selectedYear: number;
				let selectedMonth: number;
				let selectedDay: number;

				if (selectedDate) {
					selectedYear = selectedDate.getFullYear();
					selectedMonth = selectedDate.getMonth();
					selectedDay = selectedDate.getDate();
				}

				let lastPrevMonthDay = new Date(shownYear, shownMonth, 0).getDate();
				let lastMonthDay = new Date(shownYear, shownMonth + 1, 0).getDate();
				let firstMonthDayWeekDayIndex = new Date(shownYear, shownMonth, 1).getDay();

				if (!sundayFirst) {
					firstMonthDayWeekDayIndex = (firstMonthDayWeekDayIndex || 7) - 1;
				}

				let weekDays: TWeekDays = [];
				let days = [weekDays];

				function pushDay(year: number, month: number, day: number, notInCurrentMonth: boolean) {
					let date = new Date(year, month, day);
					let disabled = date < fromDate || date > toDate;

					weekDays.push({
						date: formatDate(year, month, day),
						value: day,
						today: year == nowYear && month == nowMonth && day == nowDay,
						selected: !!selectedDate && year == selectedYear && month == selectedMonth &&
							day == selectedDay,
						notInCurrentMonth,
						disabled,
						tabIndex: disabled ? null : 0
					});
				}

				for (let index = firstMonthDayWeekDayIndex; index;) {
					pushDay(
						shownYear - +!shownMonth,
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

				for (let i = 0, l = 7 - weekDays.length; i < l;) {
					pushDay(shownYear + +(shownMonth == 11), (shownMonth + 1) % 12, ++i, true);
				}

				return days;
			}
		});
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13/* Enter */ || evt.which == 32/* Space */) {
			evt.preventDefault();
			this._click(document.activeElement as HTMLElement);
		}
	}

	_onDayClick(evt: MouseEvent) {
		this._click(evt.target as HTMLElement);
	}

	_click(dayEl: HTMLElement) {
		if (dayEl.hasAttribute('selected') || dayEl.hasAttribute('disabled')) {
			return;
		}

		let selectedDayEl = (this.$('days') as HTMLElement).querySelector('[selected]');

		if (selectedDayEl) {
			selectedDayEl.removeAttribute('selected');
		}

		dayEl.setAttribute('selected', '');

		this._currentlyDateSelect = true;
		this.props['selected-date'] = dayEl.dataset['date'];
	}
}
