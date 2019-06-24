import { IEvent } from 'cellx';
import { Computed } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalRadioButton',
	template
})
export class OpalRadioButton extends BaseComponent {
	@Param
	checked = false;
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
			this.$<HTMLInputElement>('input')!.checked = true;
		}

		if (this.focused) {
			this.focus();
		}
	}

	elementAttached() {
		this.listenTo(this, {
			'change:checked': this._onCheckedChange,
			'change:focused': this._onFocusedChange
		});
		this.listenTo('input', 'change', this._onInputChange);
		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur
		});
	}

	_onCheckedChange(evt: IEvent) {
		this.$<HTMLInputElement>('input')!.checked = evt.data.value;
	}

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
				this.emit((this.checked = !this.checked) ? 'check' : 'uncheck');
				this.emit('change');
			}
		}
	}

	_onInputChange(evt: Event) {
		this.emit((this.checked = (evt.target as HTMLInputElement).checked) ? 'check' : 'uncheck');
		this.emit('change');
	}

	_onControlFocus() {
		this.focused = true;
		this.emit('focus');
	}

	_onControlBlur() {
		this.focused = false;
		this.emit('blur');
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
