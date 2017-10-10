import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, ComponentConfig } from 'rionite';
import './index.css';
import template from './template.nelm';

@ComponentConfig<OpalSelectOption>({
	elementIs: 'opal-select-option',

	input: {
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
	@computed get _tabIndex(): number {
		return this.input.disabled ? -1 : this.input.tabIndex;
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
				this.input.focused = true;
			}
		});
	}

	_onControlBlur() {
		this.input.focused = false;
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.input.disabled) {
			this.click();
		}
	}

	click(): OpalSelectOption {
		this.emit(this.toggle() ? 'select' : 'deselect');
		this.emit('change');
		return this;
	}

	get value(): string {
		let input = this.input;
		return input.value === null ? input.text : input.value;
	}
	set value(value: string) {
		this.input.value = value;
	}

	get text(): string {
		return this.input.text.trim() || ' ';
	}
	set text(text: string) {
		this.input.text = text;
	}

	get selected(): boolean {
		return this.input.selected;
	}
	set selected(selected: boolean) {
		this.input.selected = selected;
	}

	get disabled(): boolean {
		return this.input.disabled;
	}
	set disabled(disabled: boolean) {
		this.input.disabled = disabled;
	}

	select(): boolean {
		if (!this.input.selected) {
			this.input.selected = true;
			return true;
		}

		return false;
	}

	deselect(): boolean {
		if (this.input.selected) {
			this.input.selected = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.input.selected = value === undefined ? !this.input.selected : value);
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
		this.input.disabled = false;
		return this;
	}

	disable(): OpalSelectOption {
		this.input.disabled = true;
		return this;
	}
}
