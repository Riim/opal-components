import { IEvent } from 'cellx';
import { Computed } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Listen,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalRadioButton',
	template
})
export class OpalRadioButton extends BaseComponent {
	static EVENT_BLUR = Symbol('blur');
	static EVENT_CHANGE = Symbol('change');
	static EVENT_CHECK = Symbol('check');
	static EVENT_FOCUS = Symbol('focus');
	static EVENT_UNCHECK = Symbol('uncheck');

	@Param(Boolean)
	checked: boolean;
	@Param({ default: 0 })
	tabIndex: number;
	@Param(Boolean)
	focused: boolean;
	@Param(Boolean)
	disabled: boolean;

	@Computed
	get _tabIndex() {
		return this.disabled ? -1 : this.tabIndex;
	}

	_documentKeyDownListening: IDisposableListening;

	ready() {
		if (this.checked) {
			this.$<HTMLInputElement>('input')!.checked = true;
		}

		if (this.focused) {
			this.focus();
		}
	}

	@Listen('change:checked')
	_onCheckedChange(evt: IEvent) {
		this.$<HTMLInputElement>('input')!.checked = evt.data.value;
	}

	@Listen('change:focused')
	_onFocusedChange(evt: IEvent) {
		if (evt.data.value) {
			this._documentKeyDownListening = this.listenTo(
				document,
				'keydown',
				this._onDocumentKeyDown
			);
		} else {
			this._documentKeyDownListening.stop();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
			evt.preventDefault();

			if (!this.disabled) {
				this.emit(
					(this.checked = !this.checked)
						? OpalRadioButton.EVENT_CHECK
						: OpalRadioButton.EVENT_UNCHECK
				);
				this.emit(OpalRadioButton.EVENT_CHANGE);
			}
		}
	}

	@Listen('change', 'input')
	_onInputChange(evt: Event) {
		this.emit(
			(this.checked = (evt.target as HTMLInputElement).checked)
				? OpalRadioButton.EVENT_CHECK
				: OpalRadioButton.EVENT_UNCHECK
		);
		this.emit(OpalRadioButton.EVENT_CHANGE);
	}

	@Listen('focus', 'control')
	_onControlFocus() {
		this.focused = true;
		this.emit(OpalRadioButton.EVENT_FOCUS);
	}

	@Listen('blur', 'control')
	_onControlBlur() {
		this.focused = false;
		this.emit(OpalRadioButton.EVENT_BLUR);
	}

	get selected() {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
	}

	check() {
		if (!this.checked) {
			this.checked = true;
			return true;
		}

		return false;
	}

	uncheck() {
		if (this.checked) {
			this.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean) {
		return (this.checked = value === undefined ? !this.checked : value);
	}

	focus() {
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur() {
		this.$<HTMLElement>('control')!.blur();
		return this;
	}

	enable() {
		this.disabled = false;
		return this;
	}

	disable() {
		this.disabled = true;
		return this;
	}
}
