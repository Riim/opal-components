import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalCheckbox>({
	elementIs: 'opal-checkbox',

	params: {
		checked: false,
		indeterminate: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template
})
export class OpalCheckbox extends Component {
	@computed
	get _tabIndex(): number {
		return this.params.disabled ? -1 : this.params.tabIndex;
	}

	_documentKeyDownListening: IDisposableListening;

	elementAttached() {
		this.listenTo(this, {
			'param-checked-change': this._onParamCheckedChange,
			'param-indeterminate-change': this._onParamIndeterminateChange,
			'param-focused-change': this._onParamFocusedChange
		});

		this.listenTo('input', 'change', this._onInputChange);

		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur
		});
	}

	ready() {
		let params = this.params;

		if (params.checked) {
			params.indeterminate = false;
			this.$<HTMLInputElement>('input')!.checked = true;
		}

		if (params.focused) {
			this.focus();
		}
	}

	_onParamCheckedChange(evt: IEvent) {
		if (evt.data.value) {
			this.params.indeterminate = false;
		}

		this.$<HTMLInputElement>('input')!.checked = evt.data.value;
	}

	_onParamIndeterminateChange(evt: IEvent) {
		if (evt.data.value) {
			this.params.checked = false;
		}
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

	focus(): OpalCheckbox {
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur(): OpalCheckbox {
		this.$<HTMLElement>('control')!.blur();
		return this;
	}

	enable(): OpalCheckbox {
		this.params.disabled = false;
		return this;
	}

	disable(): OpalCheckbox {
		this.params.disabled = true;
		return this;
	}
}
