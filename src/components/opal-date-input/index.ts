import { getText } from '@riim/gettext';
import { IEvent } from 'cellx';
import { dateExists } from 'date-exists';
import { Component, IDisposableListening, Param } from 'rionite';
import { isFocusable } from '../../utils/isFocusable';
import { OpalCalendar } from '../opal-calendar';
import { parseDate } from '../opal-calendar/parseDate';
import { OpalDropdown } from '../opal-dropdown';
import { OpalTextInput } from '../opal-text-input';
import { OpalTextInputValidator } from '../opal-text-input-validator';
import './index.css';
import template from './template.nelm';

function pad(num: number): string {
	return (num < 10 ? '0' : '') + num;
}

@Component.Config({
	elementIs: 'OpalDateInput',
	i18n: {
		isRequiredField: getText.t('Поле обязательно для заполнения'),
		nonExistentDate: getText.t('Несуществующая дата'),
		invalidDateRange: getText.t('Дата вне допустимого диапазона')
	},

	template,

	events: {
		calendar: {
			change(evt: IEvent<OpalCalendar>) {
				this.$<OpalDropdown>('calendar-menu')!.close();

				let textInput = this.$<OpalTextInput>('text-input')!;

				textInput.value = evt.target.stringValue;
				textInput.focus();

				this.$<OpalTextInputValidator>('text-input-validator')!.validate();
			}
		}
	}
})
export class OpalDateInput extends Component {
	@Param paramFromDate: string;
	@Param paramToDate: string;
	@Param paramValue: string;
	@Param paramPlaceholder = 'dd.mm.yyyy';
	@Param paramMask = '99.99.9999';
	@Param({ readonly: true })
	paramRequired = false;
	@Param paramPopoverPosition = 'right';

	dateExists = dateExists;

	isDateInRange(date: string): boolean {
		let calendar = this.$<OpalCalendar>('calendar')!;
		let match = date.match(/\d+/g)!;
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

		return d >= parseDate(this.paramFromDate) && d <= parseDate(this.paramToDate);
	}

	_documentFocusListening: IDisposableListening;
	_documentKeyDownListening: IDisposableListening;
	_documentClickListening: IDisposableListening;

	elementAttached() {
		this.listenTo('text-input', 'change', this._onTextInputChange);
		this.listenTo(
			this.$<Component>('text-input')!.element,
			'click',
			this._onTextInputElementClick
		);
		this.listenTo('calendar-menu', 'change:paramOpened', this._onCalendarMenuParamOpenedChange);
	}

	_onTextInputChange(evt: IEvent<OpalTextInput>) {
		if (this.$<OpalTextInputValidator>('text-input-validator')!.valid) {
			this.$<OpalCalendar>('calendar')!.stringValue = evt.target.value;
		}
	}

	_onTextInputElementClick() {
		this.$<OpalDropdown>('calendar-menu')!.open();
	}

	_onCalendarMenuParamOpenedChange(evt: IEvent) {
		if (evt.data.value) {
			this._documentFocusListening = this.listenTo(
				document,
				'focus',
				this._onDocumentFocus,
				this,
				true
			);
			this._documentKeyDownListening = this.listenTo(
				document,
				'keydown',
				this._onDocumentKeyDown
			);
			this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
		} else {
			this._documentFocusListening.stop();
			this._documentKeyDownListening.stop();
			this._documentClickListening.stop();
		}
	}

	_onDocumentFocus(evt: Event) {
		if (!isFocusable(evt.target as HTMLElement)) {
			return;
		}

		if (!this.element.contains((evt.target as Node).parentNode!)) {
			this.$<OpalDropdown>('calendar-menu')!.close();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 27 /* Esc */) {
			evt.preventDefault();
			this.$<OpalDropdown>('calendar-menu')!.close();
		}
	}

	_onDocumentClick(evt: Event) {
		if (!this.element.contains(evt.target as HTMLElement)) {
			this.$<OpalDropdown>('calendar-menu')!.close();
		}
	}

	get value(): Date | null {
		let calendar = this.$<OpalCalendar>('calendar');

		if (calendar) {
			return calendar.value;
		}

		return this.paramValue ? parseDate(this.paramValue) : null;
	}

	getISOValue(h?: number, m?: number, s?: number, ms?: number): string | null {
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

		return (
			('000' + date.getUTCFullYear()).slice(-4) +
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
			'Z'
		);
	}

	validate(): boolean {
		return this.$<OpalTextInputValidator>('text-input-validator')!.validate();
	}
}
