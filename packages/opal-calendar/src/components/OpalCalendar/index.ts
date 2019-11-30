import { t } from '@riim/gettext';
import { OpalSelect } from '@riim/opal-select';
import { Cell, IEvent } from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Listen,
	Param
	} from 'rionite';
import { formatDate } from './formatDate';
import './index.css';
import { parseDate } from './parseDate';
import template from './template.rnt';

export { formatDate };
export { parseDate };

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

export function getTodayDate() {
	let now = new Date();
	return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function fromDate(this: OpalCalendar) {
	let fromDate = this.paramFromDate;

	if (fromDate) {
		return fromDate == 'today' ? getTodayDate() : parseDate(fromDate);
	}

	let toDate = this.paramToDate;
	let date = toDate && toDate != 'today' ? parseDate(toDate) : new Date();

	return new Date(date.getFullYear() - 100, date.getMonth(), date.getDate());
}

export function toDate(this: OpalCalendar) {
	let toDate = this.paramToDate;

	if (toDate) {
		return toDate == 'today' ? getTodayDate() : parseDate(toDate);
	}

	let fromDate = this.paramFromDate;
	let date = fromDate && fromDate != 'today' ? parseDate(fromDate) : new Date();

	return new Date(date.getFullYear() + 100, date.getMonth(), date.getDate());
}

@Component<OpalCalendar>({
	elementIs: 'OpalCalendar',

	i18n: {
		previousMonth: t('Предыдущий месяц'),
		nextMonth: t('Следующий месяц'),
		months: [
			t('Январь'),
			t('Февраль'),
			t('Март'),
			t('Апрель'),
			t('Май'),
			t('Июнь'),
			t('Июль'),
			t('Август'),
			t('Сентябрь'),
			t('Октябрь'),
			t('Ноябрь'),
			t('Декабрь')
		],
		weekDays: [
			t('Воскресенье'),
			t('Понедельник'),
			t('Вторник'),
			t('Среда'),
			t('Четверг'),
			t('Пятница'),
			t('Суббота')
		],
		weekDaysShort: [
			// ;;; сокр. от Воскресенье
			t('Вс'),
			// ;;; сокр. от Понедельник
			t('Пн'),
			// ;;; сокр. от Вторник
			t('Вт'),
			// ;;; сокр. от Среда
			t('Ср'),
			// ;;; сокр. от Четверг
			t('Чт'),
			// ;;; сокр. от Пятница
			t('Пт'),
			// ;;; сокр. от Суббота
			t('Сб')
		],
		sundayFirst: false
	},

	template,

	events: {
		monthSelect: {
			[OpalSelect.EVENT_SELECT](evt: IEvent<OpalSelect>) {
				this.shownMonth = +evt.target.viewModel.get(0)!.value;
			}
		},

		yearSelect: {
			[OpalSelect.EVENT_SELECT](evt: IEvent<OpalSelect>) {
				this.shownYear = +evt.target.viewModel.get(0)!.value;
			}
		}
	},

	domEvents: {
		btnPrevMonth: {
			click() {
				if (this.shownMonth) {
					this.shownMonth--;
				} else {
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
				} else {
					this.shownMonth++;
				}
			}
		},

		day: {
			click(_evt, _context, dayEl: HTMLElement) {
				this._click(dayEl);
			}
		}
	}
})
export class OpalCalendar extends BaseComponent {
	static EVENT_CHANGE = Symbol('change');

	@Param('fromDate', String)
	paramFromDate: string | null;
	@Param('toDate', String)
	paramToDate: string | null;
	@Param('value', String)
	paramValue: string | null;
	@Param({ default: '/' })
	dateDelimiter: string;

	weekDays: Array<string>;
	weekDaysShort: Array<string>;

	@Computed
	fromDate: Date = fromDate as any;
	@Computed
	toDate: Date = toDate as any;

	@Computed
	get fromYear(): number {
		return this.fromDate.getFullYear();
	}

	@Computed
	get toYear(): number {
		return this.toDate.getFullYear();
	}

	@Computed
	get years(): Array<number> {
		let years: Array<number> = [];

		for (let year = this.fromYear, toYear = this.toYear; year <= toYear; year++) {
			years.push(year);
		}

		return years;
	}

	stringValueCell: Cell<string | null>;
	@Computed
	get stringValue(): string | null {
		return this.paramValue;
	}
	set stringValue(value: string | null) {
		this.stringValueCell.set(value);
	}

	@Computed
	get value(): Date | null {
		let value = this.stringValue;
		return value ? parseDate(value) : null;
	}

	@Observable
	shownYear: number;
	@Observable
	shownMonth: number;

	@Computed
	get btnPrevMonthDisabled(): boolean {
		return this.shownYear == this.fromYear && !this.shownMonth;
	}

	@Computed
	get btnNextMonthDisabled(): boolean {
		return this.shownYear == this.toYear && this.shownMonth == 11;
	}

	@Computed
	days: TDays = function(this: OpalCalendar, _cell: any, next: TDays | undefined): TDays {
		let dateDelimiter = this.dateDelimiter;

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

	@Listen('focus', 'days', true)
	_onDaysFocus(evt: Event) {
		if (
			!this._documentKeyDownListening &&
			(evt.target as HTMLElement).classList.contains('OpalCalendar__day')
		) {
			this._documentKeyDownListening = this.listenTo(
				document,
				'keydown',
				this._onDocumentKeyDown
			);
		}
	}

	@Listen('blur', 'days', true)
	_onDaysBlur() {
		if (!document.activeElement!.classList.contains('OpalCalendar__day')) {
			this._documentKeyDownListening!.stop();
			this._documentKeyDownListening = null;
		}
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
		this.stringValue = dayEl.dataset.date!;

		this.emit(OpalCalendar.EVENT_CHANGE);
	}
}
