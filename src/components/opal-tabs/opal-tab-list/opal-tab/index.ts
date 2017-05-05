import './index.css';

import { IEvent, define, Utils } from 'cellx';
import { Component, d } from 'rionite';
import template = require('./index.beml');

let nextTick = Utils.nextTick;

@d.Component<OpalTab>({
	elementIs: 'opal-tab',

	props: {
		selected: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template,

	events: {
		':component': {
			'property-focused-change'(evt: IEvent) {
				this[evt.value ? 'focus' : 'blur']();
			}
		},

		control: {
			focus(evt: Event) {
				nextTick(() => {
					if (document.activeElement == evt.target) {
						this.props.focused = true;
					}
				});
			},

			blur() {
				this.props.focused = false;
			},

			click(evt: Event) {
				evt.preventDefault();

				if (!this.props.disabled) {
					this.click();
				}
			}
		}
	}
})
export default class OpalTab extends Component {
	_tabIndex: number;

	initialize() {
		define(this, {
			_tabIndex(this: OpalTab): number {
				return this.props.disabled ? -1 : this.props.tabIndex;
			}
		});
	}

	ready() {
		if (this.props.focused) {
			this.focus();
		}
	}

	click(): OpalTab {
		this.emit(this.toggle() ? 'select' : 'deselect');
		return this;
	}

	get selected(): boolean {
		return this.props.selected;
	}
	set selected(selected: boolean) {
		this.props.selected = selected;
	}

	select(): boolean {
		if (!this.props.selected) {
			this.props.selected = true;
			return true;
		}

		return false;
	}

	deselect(): boolean {
		if (this.props.selected) {
			this.props.selected = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.props.selected = value === undefined ? !this.props.selected : value);
	}

	focus(): OpalTab {
		(this.$('control') as HTMLElement).focus();
		return this;
	}

	blur(): OpalTab {
		(this.$('control') as HTMLElement).blur();
		return this;
	}

	enable(): OpalTab {
		this.props.disabled = false;
		return this;
	}

	disable(): OpalTab {
		this.props.disabled = true;
		return this;
	}
}
