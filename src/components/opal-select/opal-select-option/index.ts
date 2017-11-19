import { nextTick } from '@riim/next-tick';
import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalSelectOption>({
	elementIs: 'OpalSelectOption',

	params: {
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
		return this.params.disabled ? -1 : this.params.tabIndex;
	}

	elementAttached() {
		this.listenTo(this, 'param-focused-change', this._onParamFocusedChange);

		this.listenTo('control', {
			focus: this._onControlFocus,
			blur: this._onControlBlur,
			click: this._onControlClick
		});
	}

	_onParamFocusedChange(evt: IEvent) {
		if (evt.data.value) {
			this.focus();
		} else {
			this.blur();
		}
	}

	_onControlFocus(evt: Event) {
		nextTick(() => {
			if (document.activeElement == evt.target) {
				this.params.focused = true;
			}
		});
	}

	_onControlBlur() {
		this.params.focused = false;
	}

	_onControlClick(evt: Event) {
		evt.preventDefault();

		if (!this.params.disabled) {
			this.click();
		}
	}

	click(): OpalSelectOption {
		this.emit(this.toggle() ? 'select' : 'deselect');
		this.emit('change');
		return this;
	}

	get value(): string {
		let params = this.params;
		return params.value === null ? params.text : params.value;
	}
	set value(value: string) {
		this.params.value = value;
	}

	get text(): string {
		return this.params.text.trim() || ' ';
	}
	set text(text: string) {
		this.params.text = text;
	}

	get selected(): boolean {
		return this.params.selected;
	}
	set selected(selected: boolean) {
		this.params.selected = selected;
	}

	get disabled(): boolean {
		return this.params.disabled;
	}
	set disabled(disabled: boolean) {
		this.params.disabled = disabled;
	}

	select(): boolean {
		if (!this.params.selected) {
			this.params.selected = true;
			return true;
		}

		return false;
	}

	deselect(): boolean {
		if (this.params.selected) {
			this.params.selected = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.params.selected = value === undefined ? !this.params.selected : value);
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
		this.params.disabled = false;
		return this;
	}

	disable(): OpalSelectOption {
		this.params.disabled = true;
		return this;
	}
}
