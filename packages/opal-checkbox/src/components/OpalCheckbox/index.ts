import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { Computed } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableListening,
	Param
	} from 'rionite';
import './index.css';
import template = require('./template.nelm');

@Component({
	elementIs: 'OpalCheckbox',
	template
})
export class OpalCheckbox extends BaseComponent {
	@Param
	paramChecked = false;
	@Param
	paramIndeterminate = false;
	@Param
	paramTabIndex = 0;
	@Param
	paramFocused = false;
	@Param
	paramDisabled = false;

	@Computed
	get _tabIndex(): number {
		return this.paramDisabled ? -1 : this.paramTabIndex;
	}

	_documentKeyDownListening: IDisposableListening;

	elementAttached() {
		this.listenTo(this, {
			'change:paramChecked': this._onParamCheckedChange,
			'change:paramIndeterminate': this._onParamIndeterminateChange,
			'change:paramFocused': this._onParamFocusedChange
		});
		this.listenTo('input', 'change', this._onInputChange);
		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur
		});
	}

	ready() {
		if (this.paramChecked) {
			this.paramIndeterminate = false;
			this.$<HTMLInputElement>('input')!.checked = true;
		}

		if (this.paramFocused) {
			this.focus();
		}
	}

	_onParamCheckedChange(evt: IEvent) {
		if (evt.data.value) {
			this.paramIndeterminate = false;
		}

		this.$<HTMLInputElement>('input')!.checked = evt.data.value;
	}

	_onParamIndeterminateChange(evt: IEvent) {
		if (evt.data.value) {
			this.paramChecked = false;
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

			if (!this.paramDisabled) {
				this.emit((this.paramChecked = !this.paramChecked) ? 'check' : 'uncheck');
				this.emit('change');
			}
		}
	}

	_onInputChange(evt: Event) {
		this.emit(
			(this.paramChecked = (evt.target as HTMLInputElement).checked) ? 'check' : 'uncheck'
		);
		this.emit('change');
	}

	_onControlFocus(evt: Event) {
		nextTick(() => {
			if (document.activeElement == evt.target) {
				this.paramFocused = true;
				this.emit('focus');
			}
		});
	}

	_onControlBlur() {
		this.paramFocused = false;
		this.emit('blur');
	}

	get checked(): boolean {
		return this.paramChecked;
	}
	set checked(checked: boolean) {
		this.paramChecked = checked;
	}

	get selected(): boolean {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
	}

	check(): boolean {
		if (!this.paramChecked) {
			this.paramChecked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.paramChecked) {
			this.paramChecked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.paramChecked = value === undefined ? !this.paramChecked : value);
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
		this.paramDisabled = false;
		return this;
	}

	disable(): this {
		this.paramDisabled = true;
		return this;
	}
}
