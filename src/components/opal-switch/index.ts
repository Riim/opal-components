import './index.css';

import { define, Utils } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';
import template = require('./index.beml');

let nextTick = Utils.nextTick;

@d.Component({
	elementIs: 'opal-switch',

	props: {
		checked: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	bemlTemplate: template,

	events: {
		input: {
			change(evt: Event) {
				this.emit((this.props.checked = (evt.target as HTMLInputElement).checked) ? 'check' : 'uncheck');
				this.emit('change');
			}
		},

		control: {
			focus(evt: Event) {
				nextTick(() => {
					if (document.activeElement == evt.target) {
						this.props.focused = true;
						this.emit('focus');
					}
				});
			},

			blur() {
				this.props.focused = false;
				this.emit('blur');
			}
		}
	}
})
export default class OpalSwitch extends Component {
	_tabIndex: number;

	_documentKeyDownListening: IDisposableListening;

	initialize() {
		define(this, {
			_tabIndex(this: OpalSwitch): number {
				return this.props.disabled ? -1 : this.props.tabIndex;
			}
		});
	}

	ready() {
		if (this.props.checked) {
			(this.$('input') as HTMLInputElement).checked = true;
		}

		if (this.props.focused) {
			this.focus();
		}
	}

	propertyChanged(name: string, value: any) {
		if (name == 'checked') {
			(this.$('input') as HTMLInputElement).checked = value;
		} else if (name == 'focused') {
			if (value) {
				this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
				this.focus();
			} else {
				this._documentKeyDownListening.stop();
				this.blur();
			}
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13/* Enter */ || evt.which == 32/* Space */) {
			evt.preventDefault();

			let props = this.props;

			if (!props.disabled) {
				this.emit((props.checked = !props.checked) ? 'check' : 'uncheck');
				this.emit('change');
			}
		}
	}

	get checked(): boolean {
		return this.props.checked;
	}
	set checked(checked: boolean) {
		this.props.checked = checked;
	}

	check(): boolean {
		if (!this.props.checked) {
			this.props.checked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.props.checked) {
			this.props.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.props.checked = value === undefined ? !this.props.checked : value);
	}

	focus(): OpalSwitch {
		(this.$('control') as HTMLElement).focus();
		return this;
	}

	blur(): OpalSwitch {
		(this.$('control') as HTMLElement).blur();
		return this;
	}

	enable(): OpalSwitch {
		this.props.disabled = false;
		return this;
	}

	disable(): OpalSwitch {
		this.props.disabled = true;
		return this;
	}
}
