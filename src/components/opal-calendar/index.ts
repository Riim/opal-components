import { nextTick } from '@riim/next-tick';
import { Cell } from 'cellx';
import { computed, observable } from 'cellx-decorators';
import { Component, ComponentConfig, IDisposableListening } from 'rionite';
import { OpalSelect } from '../opal-select';
import { formatDate } from './formatDate';
import './index.css';
import { parseDate } from './parseDate';
import template from './template.nelm';

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

@ComponentConfig<OpalCalendar>({
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
			'Январь',
			'Февраль',
			'Март',
			'Апрель',
			'Май',
			'Июнь',
			'Июль',
			'Август',
			'Сентябрь',
			'Октябрь',
			'Ноябрь',
			'Декабрь'
		],
		weekDays: [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота'
		],
		weekDaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		sundayFirst: false
	},

	template,

	events: {
		'month-select': {
			select(evt) {
				if (!(evt.target instanceof OpalSelect)) {
					return;
				}

				this.shownMonth = +evt.target.viewModel.get(0)!.value;
			}
		},

		'year-select': {
			select(evt) {
				if (!(evt.target instanceof OpalSelect)) {
					return;
				}

				this.shownYear = +evt.target.viewModel.get(0)!.value;
			}
		}
	},

	domEvents: {
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

		day: {
			click(evt, dayEl: HTMLElement) {
				this._click(dayEl);
			}
		}
	}
})
export class OpalCalendar extends Component {
	weekDays: Array<string>;
	weekDaysShort: Array<string>;

	@computed
	get fromDate(): Date {
		let fromDate: string | null = this.input.fromDate;

		if (fromDate) {
			return fromDate == 'today' ? getTodayDate() : parseDate(fromDate);
		}

		let toDate: string | null = this.input.toDate;
		let date = toDate && toDate != 'today' ? parseDate(toDate) : new Date();
		return new Date(date.getFullYear() - 100, date.getMonth(), date.getDate());
	}

	@computed
	get toDate(): Date {
		let toDate: string | undefined = this.input.toDate;

		if (toDate) {
			return toDate == 'today' ? getTodayDate() : parseDate(toDate);
		}

		let fromDate: string | undefined = this.input.fromDate;
		let date = fromDate && fromDate != 'today' ? parseDate(fromDate) : new Date();
		return new Date(date.getFullYear() + 100, date.getMonth(), date.getDate());
	}

	@computed
	get fromYear(): number {
		return this.fromDate.getFullYear();
	}

	@computed
	get toYear(): number {
		return this.toDate.getFullYear();
	}

	@computed
	get years(): Array<number> {
		let years: Array<number> = [];

		for (let year = this.fromYear, toYear = this.toYear; year <= toYear; year++) {
			years.push(year);
		}

		return years;
	}

	stringValueCell: Cell<string | null>;
	@computed
	get stringValue(): string | null {
		return this.input.value;
	}
	set stringValue(value: string | null) {
		this.stringValueCell.set(value);
	}

	@computed
	get value(): Date | null {
		let value = this.stringValue;
		return value ? parseDate(value) : null;
	}

	@observable shownYear: number;
	@observable shownMonth: number;

	@computed
	get isBtnPrevMonthDisabled(): boolean {
		return this.shownYear == this.fromYear && !this.shownMonth;
	}

	@computed
	get isBtnNextMonthDisabled(): boolean {
		return this.shownYear == this.toYear && this.shownMonth == 11;
	}

	@computed
	days: TDays = function(this: OpalCalendar, _: any, next: TDays | undefined): TDays {
		let dateDelimiter = this.input.dateDelimiter;

		let fromDate = this.fromDate;
		let toDate = this.toDate;

		let value = this.value;

		let shownYear = this.shownYear;
		let shownMonth = this.shownMonth;

		if (this._currentlyDateSelection) {
			this._currentlyDateSelection = false;
			return next!;
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

		if (!(this.constructor as typeof OpalCalendar).i18n!.sundayFirst) {
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
				selected:
					!!value && year == selectedYear && month == selectedMonth && day == selectedDay,
				notInCurrentMonth,
				disabled,
				tabIndex: disabled ? null : 0
			});
		}

		for (let i = firstMonthDayWeekDayIndex; i; ) {
			pushDay(
				shownYear - +!shownMonth,
				shownMonth ? shownMonth - 1 : 11,
				lastPrevMonthDay - --i,
				true
			);
		}

		for (let i = 0; i < lastMonthDay; ) {
			pushDay(shownYear, shownMonth, ++i, false);

			if (!((i + firstMonthDayWeekDayIndex) % 7) && i < lastMonthDay) {
				days.push((weekDays = []));
			}
		}

		for (let i = 0, l = 7 - weekDays.length; i < l; ) {
			pushDay(shownYear + +(shownMonth == 11), (shownMonth + 1) % 12, ++i, true);
		}

		return days;
	} as any;

	_currentlyDateSelection: boolean;

	_documentKeyDownListening: IDisposableListening | null | undefined;

	initialize() {
		let i18n = (this.constructor as typeof OpalCalendar).i18n!;

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
		let shownDate: Date;

		if (value) {
			if (isNaN(+value)) {
				throw new TypeError('Invalid "value"');
			}

			shownDate = value;
		} else {
			let today = getTodayDate();
			shownDate = today < fromDate ? fromDate : today > toDate ? toDate : today;
		}

		this.shownYear = shownDate.getFullYear();
		this.shownMonth = shownDate.getMonth();
	}

	elementAttached() {
		this.listenTo(
			'days',
			{
				focus: this._onDaysFocus,
				blur: this._onDaysBlur
			},
			this,
			true
		);
	}

	_onDaysFocus(evt: Event) {
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
	}

	_onDaysBlur() {
		setTimeout(() => {
			if (!document.activeElement.classList.contains('opal-calendar__day')) {
				this._documentKeyDownListening!.stop();
				this._documentKeyDownListening = null;
			}
		}, 1);
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13 /* Enter */) {
			evt.preventDefault();
			this._click(document.activeElement as HTMLElement);
		}
	}

	_click(dayEl: HTMLElement) {
		if (dayEl.hasAttribute('selected') || dayEl.hasAttribute('disabled')) {
			return;
		}

		let selectedDayEl = this.$<HTMLElement>('days')!.querySelector('[selected]');

		if (selectedDayEl) {
			selectedDayEl.removeAttribute('selected');
		}

		dayEl.setAttribute('selected', '');

		this._currentlyDateSelection = true;
		this.stringValue = dayEl.dataset.date as string;

		this.emit('change');
	}
}
