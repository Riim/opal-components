import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalSelectOption>({
	elementIs: 'opal-select-option',

	inputs: {
		value: String,
		text: { type: String, required: true },
		subtext: String,
		selected: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template
})
export class OpalSelectOption extends Component {
	@computed
	get _tabIndex(): number {
		return this.inputs.disabled ? -1 : this.inputs.tabIndex;
	}

	elementAttached() {
		this.listenTo(this, 'input-focused-change', this._onInputFocusedChange);

		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur,
			click: this._onControlClick
		});
	}

	_onInputFocusedChange(evt: IEvent) {
		if (evt.data.value) {
			this.focus();
		} else {
			this.blur();
		}
	}

	_onControlFocus(evt: Event) {
		nextTick(() => {
			if (document.activeElement == evt.target) {
				this.inputs.focused = true;
			}
		});
	}

	_onControlBlur() {
		this.inputs.focused = false;
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.inputs.disabled) {
			this.click();
		}
	}

	click(): OpalSelectOption {
		this.emit(this.toggle() ? 'select' : 'deselect');
		this.emit('change');
		return this;
	}

	get value(): string {
		let inputs = this.inputs;
		return inputs.value === null ? inputs.text : inputs.value;
	}
	set value(value: string) {
		this.inputs.value = value;
	}

	get text(): string {
		return this.inputs.text.trim() || ' ';
	}
	set text(text: string) {
		this.inputs.text = text;
	}

	get selected(): boolean {
		return this.inputs.selected;
	}
	set selected(selected: boolean) {
		this.inputs.selected = selected;
	}

	get disabled(): boolean {
		return this.inputs.disabled;
	}
	set disabled(disabled: boolean) {
		this.inputs.disabled = disabled;
	}

	select(): boolean {
		if (!this.inputs.selected) {
			this.inputs.selected = true;
			return true;
		}

		return false;
	}

	deselect(): boolean {
		if (this.inputs.selected) {
			this.inputs.selected = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.inputs.selected = value === undefined ? !this.inputs.selected : value);
	}

	focus(): OpalSelectOption {
		this.$<HTMLElement>('control')!.focus();
		return this;
	}

	blur(): OpalSelectOption {
		this.$<HTMLElement>('control')!.blur();
		return this;
	}

	enable(): OpalSelectOption {
		this.inputs.disabled = false;
		return this;
	}

	disable(): OpalSelectOption {
		this.inputs.disabled = true;
		return this;
	}
}
