import './index.css';

import { IEvent } from 'cellx';
import { IDisposableListening, getText, Component, d } from 'rionite';
import OpalTextInput from '../opal-text-input';
import OpalDropdown from '../opal-dropdown';
import OpalInputValidator from '../opal-input-validator';
import OpalCalendar from '../opal-calendar';
import dateExists from 'date-exists';
import template = require('./index.beml');

function pad(num: number): string {
	return (num < 10 ? '0' : '') + num;
}

@d.Component<OpalDateInput>({
	elementIs: 'opal-date-input',

	props: {
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

	bemlTemplate: template,

	events: {
		'text-input': {
			change(evt) {
				if ((this.$('input-validator') as OpalInputValidator).valid) {
					(this.$('calendar') as OpalCalendar).props['value'] = (evt.target as OpalTextInput).value;
				}
			}
		},

		'calendar-menu': {
			'property-opened-change'(evt: IEvent) {
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
		},

		calendar: {
			change(evt) {
				(this.$('calendar-menu') as OpalDropdown).close();

				let textInput = this.$('text-input') as OpalTextInput;

				textInput.value = (evt.target as OpalCalendar).props['value'];
				textInput.focus();
			}
		}
	}
})
export default class OpalDateInput extends Component {
	dateExists = dateExists;

	dateInRange(date: string): boolean {
		let calendar = this.$('calendar') as OpalCalendar;
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
		this.listenTo(
			(this.$('text-input') as Component).element as HTMLElement,
			'click',
			this._onTextInputClick
		);
	}

	_onTextInputClick() {
		(this.$('calendar-menu') as OpalDropdown).open();
	}

	_onDocumentFocus(evt: Event) {
		if (!this.element.contains((evt.target as Node).parentNode as Node)) {
			(this.$('calendar-menu') as OpalDropdown).close();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 27/* Esc */) {
			evt.preventDefault();
			(this.$('calendar-menu') as OpalDropdown).close();
		}
	}

	_onDocumentClick(evt: Event) {
		if (!this.element.contains(evt.target as HTMLElement)) {
			(this.$('calendar-menu') as OpalDropdown).close();
		}
	}

	get value(): Date | null {
		return (this.$('calendar') as OpalCalendar).value;
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
		return (this.$('input-validator') as OpalInputValidator).validate();
	}
}
