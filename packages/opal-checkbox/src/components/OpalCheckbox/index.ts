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
	elementIs: 'OpalCheckbox',
	template
})
export class OpalCheckbox extends BaseComponent {
	static EVENT_BLUR = Symbol('blur');
	static EVENT_CHANGE = Symbol('change');
	static EVENT_CHECK = Symbol('check');
	static EVENT_FOCUS = Symbol('focus');
	static EVENT_UNCHECK = Symbol('uncheck');

	@Param
	checked = false;
	@Param
	indeterminate = false;
	@Param
	tabIndex = 0;
	@Param
	focused = false;
	@Param
	disabled = false;

	@Computed
	get _tabIndex(): number {
		return this.disabled ? -1 : this.tabIndex;
	}

	_documentKeyDownListening: IDisposableListening;

	ready() {
		if (this.checked) {
			this.indeterminate = false;
			this.$<HTMLInputElement>('input')!.checked = true;
		}

		if (this.focused) {
			this.focus();
		}
	}

	@Listen('change:checked')
	_onCheckedChange(evt: IEvent) {
		if (evt.data.value) {
			this.indeterminate = false;
		}

		this.$<HTMLInputElement>('input')!.checked = evt.data.value;
	}

	@Listen('change:indeterminate')
	_onIndeterminateChange(evt: IEvent) {
		if (evt.data.value) {
			this.checked = false;
		}
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
						? OpalCheckbox.EVENT_CHECK
						: OpalCheckbox.EVENT_UNCHECK
				);
				this.emit(OpalCheckbox.EVENT_CHANGE);
			}
		}
	}

	@Listen('change', 'input')
	_onInputChange(evt: Event) {
		this.emit(
			(this.checked = (evt.target as HTMLInputElement).checked)
				? OpalCheckbox.EVENT_CHECK
				: OpalCheckbox.EVENT_UNCHECK
		);
		this.emit(OpalCheckbox.EVENT_CHANGE);
	}

	@Listen('focus', 'control')
	_onControlFocus() {
		this.focused = true;
		this.emit(OpalCheckbox.EVENT_FOCUS);
	}

	@Listen('blur', 'control')
	_onControlBlur() {
		this.focused = false;
		this.emit(OpalCheckbox.EVENT_BLUR);
	}

	get selected(): boolean {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
	}

	check(): boolean {
		if (!this.checked) {
			this.checked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.checked) {
			this.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.checked = value === undefined ? !this.checked : value);
	}

	focus(): this {
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur(): this {
		this.$<HTMLElement>('control')!.blur();
		return this;
	}

	enable(): this {
		this.disabled = false;
		return this;
	}

	disable(): this {
		this.disabled = true;
		return this;
	}
}
