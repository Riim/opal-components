import './index.css';

import { define } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';
import template = require('./index.beml');

@d.Component({
	elementIs: 'opal-checkbox',

	props: {
		checked: false,
		indeterminate: false,
		focused: false,
		tabIndex: 0,
		disabled: false
	},

	bemlTemplate: template,

	events: {
		input: {
			change(evt: Event) {
				this.emit((this.props['checked'] = (evt.target as HTMLInputElement).checked) ? 'check' : 'uncheck');
				this.emit('change');
			}
		},

		control: {
			focusin() {
				this.props['focused'] = true;
				this.emit('focusin');
			},

			focusout() {
				this.props['focused'] = false;
				this.emit('focusout');
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
				return this.props['disabled'] ? -1 : this.props['tabIndex'];
			}
		});
	}

	ready() {
		let props = this.props;

		if (props['checked']) {
			props['indeterminate'] = false;
			(this.$('input') as HTMLInputElement).checked = true;
		}

		if (props['focused']) {
			this.focus();
		}
	}

	propertyChanged(name: string, value: any) {
		if (name == 'checked') {
			if (value) {
				this.props['indeterminate'] = false;
			}

			(this.$('input') as HTMLInputElement).checked = value;
		} else if (name == 'indeterminate') {
			if (value) {
				this.props['checked'] = false;
			}
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

	get checked(): boolean {
		return this.props['checked'];
	}
	set checked(checked: boolean) {
		this.props['checked'] = checked;
	}

	check(): boolean {
		if (!this.props['checked']) {
			this.props['checked'] = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.props['checked']) {
			this.props['checked'] = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.props['checked'] = value === undefined ? !this.props['checked'] : value);
	}

	focus(): OpalCheckbox {
		(this.$('control') as HTMLElement).focus();
		return this;
	}

	blur(): OpalCheckbox {
		(this.$('control') as HTMLElement).blur();
		return this;
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13/* Enter */ || evt.which == 32/* Space */) {
			evt.preventDefault();

			let props = this.props;

			if (!props['disabled']) {
				this.emit((props['checked'] = !props['checked']) ? 'check' : 'uncheck');
				this.emit('change');
			}
		}
	}

	enable(): OpalCheckbox {
		this.props['disabled'] = false;
		return this;
	}

	disable(): OpalCheckbox {
		this.props['disabled'] = true;
		return this;
	}
}
