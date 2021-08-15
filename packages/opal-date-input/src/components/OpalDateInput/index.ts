import {
	fromDate,
	OpalCalendar,
	parseDate,
	toDate
	} from '@riim/opal-calendar';
import { OpalDropdown } from '@riim/opal-dropdown';
import { OpalPopover } from '@riim/opal-popover';
import { OpalTextInput } from '@riim/opal-text-input';
import { OpalTextInputValidator } from '@riim/opal-text-input-validator';
import { IEvent } from 'cellx';
import { dateExists } from 'date-exists';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Listen,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

function pad(num: number) {
	return (num < 10 ? '0' : '') + num;
}

@Component({
	elementIs: 'OpalDateInput',
	template,

	events: {
		calendar: {
			[OpalCalendar.EVENT_CHANGE](evt: IEvent) {
				this.$<OpalDropdown>('calendarMenu')!.close();

				let textInput = this.$<OpalTextInput>('textInput')!;

				textInput.value = (evt.target as OpalCalendar).stringValue;
				textInput.focus();

				this.$<OpalTextInputValidator>('textInputValidator')!.validate();

				this.emit(OpalDateInput.EVENT_CHANGE);
			}
		}
	}
})
export class OpalDateInput extends BaseComponent {
	static EVENT_CHANGE = Symbol('change');

	@Param(String)
	fromDate: string | null;
	@Param(String)
	toDate: string | null;
	@Param('value', String)
	paramValue: string | null;
	@Param({ default: 'dd.mm.yyyy' })
	placeholder: string;
	@Param({ default: '99.99.9999' })
	mask: string;
	@Param({ type: Boolean, readonly: true })
	required: boolean;
	@Param({ default: 'right' })
	popoverPosition: typeof OpalPopover.prototype.position;

	dateExists = dateExists;

	_isDateInRange(date: string) {
		let calendar = this.$<OpalCalendar>('calendar');
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

		return (
			d >= fromDate.call({ paramFromDate: this.fromDate, paramToDate: this.toDate }) &&
			d <= toDate.call({ paramFromDate: this.fromDate, paramToDate: this.toDate })
		);
	}

	_documentFocusListening: IDisposableListening;
	_documentKeyDownListening: IDisposableListening;
	_documentClickListening: IDisposableListening;

	@Listen(OpalTextInput.EVENT_CHANGE, 'textInput')
	_onTextInputChange(evt: IEvent<OpalTextInput>) {
		if (this.$<OpalTextInputValidator>('textInputValidator')!.valid) {
			this.$<OpalCalendar>('calendar')!.stringValue = evt.target.value;
			this.emit(OpalDateInput.EVENT_CHANGE);
		}
	}

	@Listen('click', (self) => self.$<BaseComponent>('textInput')!.element)
	_onTextInputElementClick() {
		this.$<OpalDropdown>('calendarMenu')!.open();
	}

	@Listen('change:opened', 'calendarMenu')
	_onCalendarMenuOpenedChange(evt: IEvent) {
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
		if (!this.element.contains((evt.target as Node).parentElement!)) {
			this.$<OpalDropdown>('calendarMenu')!.close();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 27 /* Esc */) {
			evt.preventDefault();
			this.$<OpalDropdown>('calendarMenu')!.close();
		}
	}

	_onDocumentClick(evt: Event) {
		if (!this.element.contains(evt.target as HTMLElement)) {
			this.$<OpalDropdown>('calendarMenu')!.close();
		}
	}

	get value() {
		let calendar = this.$<OpalCalendar>('calendar');

		if (calendar) {
			return calendar.value;
		}

		return this.paramValue ? parseDate(this.paramValue) : null;
	}

	getISOValue(h?: number, m?: number, s?: number, ms?: number) {
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

		let tsOffset = new Date().getTimezoneOffset() / 60;

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
			(tsOffset < 0 ? '-' + pad(-tsOffset) : '+' + pad(tsOffset))
		);
	}

	validate() {
		return this.$<OpalTextInputValidator>('textInputValidator')!.validate();
	}
}
