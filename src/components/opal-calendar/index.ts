import './index.css';
import '../../assets/icons/opal-components__icon-arrow-left.svg';

import { IEvent, define, Utils } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';
import { OpalSelectOption } from '../opal-select';
import parseDate from './parseDate';
import formatDate from './formatDate';
import template = require('./index.nelm');

let nextTick = Utils.nextTick;

export interface IDay {
	date: string;
	value: number;
	weekDay: string;
	today: boolean;
	selected: boolean;
	notInCurrentMonth: boolean;
	disabled: boolean;
	tabIndex: number | null;
}

export type TWeekDays = Array<IDay>;

export type TDays = Array<TWeekDays>;

function getTodayDate() {
	let now = new Date();
	return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

@d.Component<OpalCalendar>({
	elementIs: 'opal-calendar',

	input: {
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

	template,

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
			'<opal-select-option>select'(evt: IEvent) {
				this.shownMonth = +(evt.target as OpalSelectOption).value;
			}
		},

		's-year': {
			'<opal-select-option>select'(evt: IEvent) {
				this.shownYear = +(evt.target as OpalSelectOption).value;
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

	value: Date | null;

	shownYear: number;
	shownMonth: number;

	btnPrevMonthDisabled: boolean;
	btnNextMonthDisabled: boolean;

	days: TDays;

	_currentlyDateSelect: boolean;

	_documentKeyDownListening: IDisposableListening | null | undefined;

	initialize() {
		let i18n = (this.constructor as typeof OpalCalendar).i18n as any;
		let sundayFirst = i18n.sundayFirst;

		this.weekDays = sundayFirst ? i18n.weekDays : i18n.weekDays.slice(1).concat(i18n.weekDays[0]);
		this.weekDaysShort = sundayFirst ?
			i18n.weekDaysShort :
			i18n.weekDaysShort.slice(1).concat(i18n.weekDaysShort[0]);

		define(this, {
			fromDate(this: OpalCalendar) {
				let fromDate: string | undefined = this.input.fromDate;

				if (fromDate) {
					return fromDate == 'today' ? getTodayDate() : parseDate(fromDate);
				}

				let toDate: string | undefined = this.input.toDate;
				let date = toDate && toDate != 'today' ? parseDate(toDate) : new Date();
				return new Date(date.getFullYear() - 100, date.getMonth(), date.getDate());
			},

			toDate(this: OpalCalendar) {
				let toDate: string | undefined = this.input.toDate;

				if (toDate) {
					return toDate == 'today' ? getTodayDate() : parseDate(toDate);
				}

				let fromDate: string | undefined = this.input.fromDate;
				let date = fromDate && fromDate != 'today' ? parseDate(fromDate) : new Date();
				return new Date(date.getFullYear() + 100, date.getMonth(), date.getDate());
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

			value(this: OpalCalendar) {
				let value = this.input.value;
				return value ? parseDate(value) : null;
			}
		});

		let fromDate = this.fromDate;
		let toDate = this.toDate;

		if (fromDate > toDate) {
			throw new TypeError('"fromDate" must be less than or equal to "toDate"');
		}

		let value = this.value;
		let shownDate: Date;

		if (value) {
			if (isNaN(+value)) {
				throw new TypeError('Invalid "value"');
			}

			shownDate = value;
		} else {
			let today = getTodayDate();
			shownDate = today < fromDate ? fromDate : (today > toDate ? toDate : today);
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

			days(this: OpalCalendar, cell: any, oldDays: TDays | undefined): TDays {
				let dateDelimiter = this.input.dateDelimiter;

				let fromDate = this.fromDate;
				let toDate = this.toDate;

				let value = this.value;

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

				if (value) {
					selectedYear = value.getFullYear();
					selectedMonth = value.getMonth();
					selectedDay = value.getDate();
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
						date: formatDate(year, month, day, dateDelimiter),
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
						notInCurrentMonth,
						disabled,
						tabIndex: disabled ? null : 0
					});
				}

				for (let i = firstMonthDayWeekDayIndex; i;) {
					pushDay(
						shownYear - +!shownMonth,
						shownMonth ? shownMonth - 1 : 11,
						lastPrevMonthDay - (--i),
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

	elementAttached() {
		this.listenTo(this.$('days') as HTMLElement, {
			focus(evt: Event) {
				if ((evt.target as HTMLElement).classList.contains('opal-calendar__day')) {
					nextTick(() => {
						if (document.activeElement == evt.target && !this._documentKeyDownListening) {
							this._documentKeyDownListening = this.listenTo(
								document,
								'keydown',
								this._onDocumentKeyDown
							);
						}
					});
				}
			},

			blur() {
				setTimeout(() => {
					if (!document.activeElement.classList.contains('opal-calendar__day')) {
						(this._documentKeyDownListening as IDisposableListening).stop();
						this._documentKeyDownListening = null;
					}
				}, 1);
			}
		}, this, true);
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13/* Enter */) {
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
		this.input.value = dayEl.dataset.date;

		this.emit('change');
	}
}
