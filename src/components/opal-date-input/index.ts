import { IEvent } from 'cellx';
import dateExists from 'date-exists';
import {
	Component,
	d,
	getText,
	IDisposableListening
	} from 'rionite';
import { isFocusable } from '../../Utils/isFocusable';
import { OpalCalendar } from '../opal-calendar';
import { OpalDropdown } from '../opal-dropdown';
import { OpalInputValidator } from '../opal-input-validator';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import template = require('./index.nelm');

function pad(num: number): string {
	return (num < 10 ? '0' : '') + num;
}

@d.Component<OpalDateInput>({
	elementIs: 'opal-date-input',

	input: {
		fromDate: String,
		toDate: String,
		value: String,
		placeholder: 'dd.mm.yyyy',
		mask: '99.99.9999',
		required: { default: false, readonly: true },
		popoverTo: 'right'
	},

	i18n: {
		isRequiredField: getText.t('Поле обязательно для заполнения'),
		nonExistentDate: getText.t('Несуществующая дата'),
		invalidDateRange: getText.t('Дата вне допустимого диапазона')
	},

	template
})
export class OpalDateInput extends Component {
	dateExists = dateExists;

	dateInRange(date: string): boolean {
		let calendar = this.$<OpalCalendar>('calendar');
		let match = date.match(/\d+/g) as RegExpMatchArray;
		let day = +match[0];
		let month = +match[1] - 1;
		let year = +match[2];

		if (year < 100) {
			year += year < 50 ? 2000 : 1900;
		}

		let d = new Date(year, month, day);
		return d >= calendar.fromDate && d <= calendar.toDate;
	}

	_documentFocusListening: IDisposableListening;
	_documentKeyDownListening: IDisposableListening;
	_documentClickListening: IDisposableListening;

	elementAttached() {
		this.listenTo('text-input', 'change', this._onTextInputChange);
		this.listenTo(this.$<Component>('text-input').element, 'click', this._onTextInputElementClick);
		this.listenTo('calendar-menu', 'input-opened-change', this._onCalendarMenuInputOpenedChange);
		this.listenTo('calendar', 'change', this._onCalendarChange);
	}

	_onTextInputChange(evt: IEvent<OpalTextInput>) {
		if (this.$<OpalInputValidator>('input-validator').valid) {
			this.$<OpalCalendar>('calendar').input.value = evt.target.value;
		}
	}

	_onTextInputElementClick() {
		this.$<OpalDropdown>('calendar-menu').open();
	}

	_onCalendarMenuInputOpenedChange(evt: IEvent) {
		if (evt.value) {
			this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
			this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
			this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
		} else {
			this._documentFocusListening.stop();
			this._documentKeyDownListening.stop();
			this._documentClickListening.stop();
		}
	}

	_onCalendarChange(evt: IEvent<OpalCalendar>) {
		this.$<OpalDropdown>('calendar-menu').close();

		let textInput = this.$<OpalTextInput>('text-input');

		textInput.value = evt.target.input.value;
		textInput.focus();
	}

	_onDocumentFocus(evt: Event) {
		if (!isFocusable(evt.target as HTMLElement)) {
			return;
		}

		if (!this.element.contains((evt.target as Node).parentNode as Node)) {
			this.$<OpalDropdown>('calendar-menu').close();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 27 /* Esc */) {
			evt.preventDefault();
			this.$<OpalDropdown>('calendar-menu').close();
		}
	}

	_onDocumentClick(evt: Event) {
		if (!this.element.contains(evt.target as HTMLElement)) {
			this.$<OpalDropdown>('calendar-menu').close();
		}
	}

	get value(): Date | null {
		return this.$<OpalCalendar>('calendar').value;
	}

	getISOValue(h?: number, m?: number, s?: number, ms?: number): string | null {
		let date = this.value;

		if (!date) {
			return null;
		}

		date = new Date(date);

		if (h) { date.setHours(h); }
		if (m) { date.setMinutes(m); }
		if (s) { date.setSeconds(s); }
		if (ms) { date.setMilliseconds(ms); }

		return ('000' + date.getUTCFullYear()).slice(-4) + '-' +
			pad(date.getUTCMonth() + 1) + '-' +
			pad(date.getUTCDate()) + 'T' +
			pad(date.getUTCHours()) + ':' +
			pad(date.getUTCMinutes()) + ':' +
			pad(date.getUTCSeconds()) + '.' +
			('00' + date.getUTCMilliseconds()).slice(-3) + 'Z';
	}

	validate(): boolean {
		return this.$<OpalInputValidator>('input-validator').validate();
	}
}
