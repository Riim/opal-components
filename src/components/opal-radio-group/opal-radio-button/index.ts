import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalRadioButton>({
	elementIs: 'OpalRadioButton',

	params: {
		checked: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template
})
export class OpalRadioButton extends Component {
	@computed
	get _tabIndex(): number {
		return this.params.disabled ? -1 : this.params.tabIndex;
	}

	_documentKeyDownListening: IDisposableListening;

	ready() {
		if (this.params.checked) {
			this.$<HTMLInputElement>('input')!.checked = true;
		}

		if (this.params.focused) {
			this.focus();
		}
	}

	elementAttached() {
		this.listenTo(this, {
			'param-checked-change': this._onParamCheckedChange,
			'param-focused-change': this._onParamFocusedChange
		});

		this.listenTo('input', 'change', this._onInputChange);

		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur
		});
	}

	_onParamCheckedChange(evt: IEvent) {
		this.$<HTMLInputElement>('input')!.checked = evt.data.value;
	}

	_onParamFocusedChange(evt: IEvent) {
		if (evt.data.value) {
			this._documentKeyDownListening = this.listenTo(
				document,
				'keydown',
				this._onDocumentKeyDown
			);
			this.focus();
		} else {
			this._documentKeyDownListening.stop();
			this.blur();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13 /* Enter */ || evt.which == 32 /* Space */) {
			evt.preventDefault();

			let params = this.params;

			if (!params.disabled) {
				this.emit((params.checked = !params.checked) ? 'check' : 'uncheck');
				this.emit('change');
			}
		}
	}

	_onInputChange(evt: Event) {
		this.emit(
			(this.params.checked = (evt.target as HTMLInputElement).checked) ? 'check' : 'uncheck'
		);
		this.emit('change');
	}

	_onControlFocus(evt: Event) {
		nextTick(() => {
			if (document.activeElement == evt.target) {
				this.params.focused = true;
				this.emit('focus');
			}
		});
	}

	_onControlBlur() {
		this.params.focused = false;
		this.emit('blur');
	}

	get checked(): boolean {
		return this.params.checked;
	}
	set checked(checked: boolean) {
		this.params.checked = checked;
	}

	get selected(): boolean {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
	}

	check(): boolean {
		if (!this.params.checked) {
			this.params.checked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.params.checked) {
			this.params.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.params.checked = value === undefined ? !this.params.checked : value);
	}

	focus(): OpalRadioButton {
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur(): OpalRadioButton {
		this.$<HTMLElement>('control')!.blur();
		return this;
	}

	enable(): OpalRadioButton {
		this.params.disabled = false;
		return this;
	}

	disable(): OpalRadioButton {
		this.params.disabled = true;
		return this;
	}
}
