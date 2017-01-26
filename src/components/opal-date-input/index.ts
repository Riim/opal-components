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
		mask: '99.99.9999',
		value: String,
		placeholder: 'dd.mm.yyyy',
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
		input: {
			focusin() {
				if (!this._documentMouseUpListening) {
					this._documentMouseUpListening = this.listenTo(document, 'mouseup', this._onDocumentMouseUp);
				}
			},

			change(evt) {
				if ((this.$('input-validator') as OpalInputValidator).valid) {
					(this.$('calendar') as OpalCalendar).props['value'] = (evt.target as OpalTextInput).value;
				}
			}
		},

		'calendar': {
			change(evt) {
				if (!(evt.target as Component).element.classList.contains('opal-date-input__calendar')) {
					return;
				}

				(this.$('input') as OpalTextInput).value = (evt.target as OpalCalendar).props['value'];
				(this.$('calendar-menu') as OpalDropdown).close();
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

	_documentMouseUpListening: IDisposableListening | null;

	_onDocumentMouseUp() {
		(this._documentMouseUpListening as IDisposableListening).stop();
		this._documentMouseUpListening = null;

		if (((this.$('input') as Component).$('text-field') as HTMLElement) == document.activeElement) {
			(this.$('calendar-menu') as OpalDropdown).open();
		}
	}
}
