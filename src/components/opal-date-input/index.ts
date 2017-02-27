import './index.css';

import { IDisposableListening, getText, Component, d } from 'rionite';
import OpalTextInput from '../opal-text-input';
import OpalDropdown from '../opal-dropdown';
import OpalInputValidator from '../opal-input-validator';
import OpalCalendar from '../opal-calendar';
import dateExists from 'date-exists';
import template = require('./index.beml');

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
			open() {
				this._documentFocusInListening = this.listenTo(document, 'focusin', this._onDocumentFocusIn);
				this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
				this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
			},

			close() {
				this._documentFocusInListening.stop();
				this._documentKeyDownListening.stop();
				this._documentClickListening.stop();
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

	_documentFocusInListening: IDisposableListening;
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

	_onDocumentFocusIn() {
		if (
			document.activeElement != document.body &&
				!this.element.contains(document.activeElement.parentNode as Node)
		) {
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

	get value() {
		return (this.$('calendar') as OpalCalendar).value;
	}

	getISOValue(h?: number, m?: number, s?: number, ms?: number): string | null {
		let date = this.value;

		if (!date) {
			return null;
		}

		return date.getUTCFullYear() + '-' +
			(date.getUTCMonth() + 1) + '-' +
			('0' + date.getUTCDate()).slice(-2) + 'T' +
			('0' + (h || 0)).slice(-2) + ':' +
			('0' + (m || 0)).slice(-2) + ':' +
			('0' + (s || 0)).slice(-2) + '.' +
			('00' + (ms || 0)).slice(-3) + 'Z';
	}
}
