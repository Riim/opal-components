import './index.css';

import { define } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';
import template = require('./index.beml');

@d.Component<OpalTab>({
	elementIs: 'opal-tab',

	props: {
		selected: false,
		focused: false,
		tabIndex: 0,
		disabled: false
	},

	bemlTemplate: template,

	events: {
		button: {
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
export default class OpalTab extends Component {
	_tabIndex: number;

	_documentKeyDownListening: IDisposableListening;

	initialize() {
		define(this, {
			_tabIndex(this: OpalTab): number {
				return this.props['disabled'] ? -1 : this.props['tabIndex'];
			}
		});
	}

	ready() {
		if (this.props['focused']) {
			this.focus();
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

	get selected(): boolean {
		return this.props['selected'];
	}
	set selected(selected: boolean) {
		this.props['selected'] = selected;
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

	focus(): OpalTab {
		(this.$('button') as HTMLElement).focus();
		return this;
	}

	blur(): OpalTab {
		(this.$('button') as HTMLElement).blur();
		return this;
	}

	enable(): OpalTab {
		this.props['disabled'] = false;
		return this;
	}

	disable(): OpalTab {
		this.props['disabled'] = true;
		return this;
	}
}
