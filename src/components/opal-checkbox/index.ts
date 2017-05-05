import './index.css';

import { IEvent, define, Utils } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';
import template = require('./index.beml');

let nextTick = Utils.nextTick;

@d.Component<OpalCheckbox>({
	elementIs: 'opal-checkbox',

	props: {
		checked: false,
		indeterminate: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template,

	events: {
		':component': {
			'property-checked-change'(evt: IEvent) {
				if (evt.value) {
					this.props.indeterminate = false;
				}

				(this.$('input') as HTMLInputElement).checked = evt.value;
			},

			'property-indeterminate-change'(evt: IEvent) {
				if (evt.value) {
					this.props.checked = false;
				}
			},

			'property-focused-change'( evt: IEvent) {
				if (evt.value) {
					this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
					this.focus();
				} else {
					this._documentKeyDownListening.stop();
					this.blur();
				}
			}
		},

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
export default class OpalCheckbox extends Component {
	_tabIndex: number;

	_documentKeyDownListening: IDisposableListening;

	initialize() {
		define(this, {
			_tabIndex(this: OpalCheckbox): number {
				return this.props.disabled ? -1 : this.props.tabIndex;
			}
		});
	}

	ready() {
		let props = this.props;

		if (props.checked) {
			props.indeterminate = false;
			(this.$('input') as HTMLInputElement).checked = true;
		}

		if (props.focused) {
			this.focus();
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

	focus(): OpalCheckbox {
		(this.$('control') as HTMLElement).focus();
		return this;
	}

	blur(): OpalCheckbox {
		(this.$('control') as HTMLElement).blur();
		return this;
	}

	enable(): OpalCheckbox {
		this.props.disabled = false;
		return this;
	}

	disable(): OpalCheckbox {
		this.props.disabled = true;
		return this;
	}
}
