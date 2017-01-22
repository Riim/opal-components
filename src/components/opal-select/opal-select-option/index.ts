import './index.css';

import { define } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';
import template = require('./index.beml');

@d.Component<OpalSelectOption>({
	elementIs: 'opal-select-option',

	props: {
		value: String,
		text: { type: String, required: true },
		selected: false,
		focused: false,
		tabIndex: 0,
		disabled: false
	},

	bemlTemplate: template,

	events: {
		control: {
			focusin() {
				this.props['focused'] = true;
			},

			focusout() {
				this.props['focused'] = false;
			},

			click() {
				this._click();
			}
		}
	}
})
export default class OpalSelectOption extends Component {
	_tabIndex: number;

	_documentKeyDownListening: IDisposableListening;

	initialize() {
		define(this, {
			_tabIndex(this: OpalSelectOption): number {
				return this.props['disabled'] ? -1 : this.props['tabIndex'];
			}
		});
	}

	ready() {
		let props = this.props;

		if (props['value'] === null) {
			props['value'] = props['text'];
		}
	}

	propertyChanged(name: string, value: any) {
		if (name == 'focused') {
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

			if (!this.props['disabled']) {
				this._click();
			}
		}
	}

	_click() {
		this.emit(this.toggle() ? 'select' : 'deselect');
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
