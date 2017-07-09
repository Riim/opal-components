import { define, IEvent, Utils } from 'cellx';
import { Component, d } from 'rionite';
import '../../../assets/icons/opal-components__icon-check.svg';
import './index.css';
import template = require('./index.nelm');

let nextTick = Utils.nextTick;

@d.Component<OpalSelectOption>({
	elementIs: 'opal-select-option',

	input: {
		value: String,
		text: { type: String, required: true },
		selected: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template,

	oevents: {
		control: {
			focus(evt: Event) {
				nextTick(() => {
					if (document.activeElement == evt.target) {
						this.input.focused = true;
					}
				});
			},

			blur() {
				this.input.focused = false;
			},

			click(evt: Event) {
				evt.preventDefault();

				if (!this.input.disabled) {
					this.click();
				}
			}
		}
	}
})
export class OpalSelectOption extends Component {
	_tabIndex: number;

	initialize() {
		define(this, {
			_tabIndex(this: OpalSelectOption): number {
				return this.input.disabled ? -1 : this.input.tabIndex;
			}
		});
	}

	elementAttached() {
		this.listenTo(this, 'input-focused-change', this._onInputFocusedChange);
	}

	_onInputFocusedChange(evt: IEvent) {
		this[evt.value ? 'focus' : 'blur']();
	}

	click(): OpalSelectOption {
		this.emit(this.toggle() ? 'select' : 'deselect');
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
		(this.$('control') as HTMLElement).focus();
		return this;
	}

	blur(): OpalSelectOption {
		(this.$('control') as HTMLElement).blur();
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
