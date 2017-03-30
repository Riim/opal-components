import './index.css';

import { define, Utils } from 'cellx';
import { Component, d } from 'rionite';
import template = require('./index.beml');

let nextTick = Utils.nextTick;

@d.Component<OpalSelectOption>({
	elementIs: 'opal-select-option',

	props: {
		value: String,
		text: { type: String, required: true },
		selected: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	bemlTemplate: template,

	events: {
		control: {
			focus(evt: Event) {
				nextTick(() => {
					if (document.activeElement == evt.target) {
						this.props['focused'] = true;
					}
				});
			},

			blur() {
				this.props['focused'] = false;
			},

			click(evt: Event) {
				evt.preventDefault();

				if (!this.props['disabled']) {
					this.click();
				}
			}
		}
	}
})
export default class OpalSelectOption extends Component {
	_tabIndex: number;

	initialize() {
		define(this, {
			_tabIndex(this: OpalSelectOption): number {
				return this.props['disabled'] ? -1 : this.props['tabIndex'];
			}
		});
	}

	propertyChanged(name: string, value: any) {
		if (name == 'focused') {
			this[value ? 'focus' : 'blur']();
		}
	}

	click(): OpalSelectOption {
		this.emit(this.toggle() ? 'select' : 'deselect');
		return this;
	}

	get value(): string {
		let props = this.props;
		return props['value'] === null ? props['text'] : props['value'];
	}
	set value(value: string) {
		this.props['value'] = value;
	}

	get text(): string {
		return this.props['text'].trim() || ' ';
	}
	set text(text: string) {
		this.props['text'] = text;
	}

	get selected(): boolean {
		return this.props['selected'];
	}
	set selected(selected: boolean) {
		this.props['selected'] = selected;
	}

	get disabled(): boolean {
		return this.props['disabled'];
	}
	set disabled(disabled: boolean) {
		this.props['disabled'] = disabled;
	}

	select(): boolean {
		if (!this.props['selected']) {
			this.props['selected'] = true;
			return true;
		}

		return false;
	}

	deselect(): boolean {
		if (this.props['selected']) {
			this.props['selected'] = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.props['selected'] = value === undefined ? !this.props['selected'] : value);
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
		this.props['disabled'] = false;
		return this;
	}

	disable(): OpalSelectOption {
		this.props['disabled'] = true;
		return this;
	}
}
