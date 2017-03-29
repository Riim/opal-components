import './index.css';

import { define } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';

@d.Component<OpalButton>({
	elementIs: 'opal-button',

	props: {
		viewType: 'default',
		size: 'm',
		checkable: false,
		checked: false,
		loading: false,
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	events: {
		':component': {
			'change:_tabIndex'() {
				this.element.tabIndex = this._tabIndex;
			}
		},

		':element': {
			focus(evt: Event) {
				if (this.element.tagName.indexOf('-') > -1) {
					this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
				}

				this.props['focused'] = true;
				this.emit({ type: 'focus', originalEvent: evt });
			},

			blur(evt: Event) {
				if (this._documentKeyDownListening) {
					this._documentKeyDownListening.stop();
				}

				this.props['focused'] = false;
				this.emit({ type: 'blur', originalEvent: evt });
			},

			click(evt: Event) {
				if (!this.props['disabled']) {
					this.click(evt);
				}
			}
		}
	}
})
export default class OpalButton extends Component {
	_tabIndex: number;

	_documentKeyDownListening: IDisposableListening | undefined;

	initialize() {
		define(this, {
			_tabIndex(this: OpalButton): number {
				return this.props['disabled'] ? -1 : this.props['tabIndex'];
			}
		});
	}

	ready() {
		if (this.props['focused']) {
			this.element.tabIndex = this._tabIndex;
			this.focus();
		}
	}

	elementAttached() {
		this.element.tabIndex = this._tabIndex;
	}

	propertyChanged(name: string, value: any) {
		if (name == 'focused') {
			this[value ? 'focus' : 'blur']();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13/* Enter */ && !this.props['disabled']) {
			this.click(evt);
		}
	}

	click(originalEvent?: Event): OpalButton {
		if (this.props['checkable']) {
			this.emit(this.toggle() ? 'check' : 'uncheck');
		}

		this.emit({ type: 'click', originalEvent });

		return this;
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

	focus(): OpalButton {
		this.element.focus();
		return this;
	}

	blur(): OpalButton {
		this.element.blur();
		return this;
	}

	enable(): OpalButton {
		this.props['disabled'] = false;
		return this;
	}

	disable(): OpalButton {
		this.props['disabled'] = true;
		return this;
	}
}
