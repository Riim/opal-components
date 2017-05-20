import './index.css';

import { IEvent, define, Utils } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';

let nextTick = Utils.nextTick;

@d.Component<OpalButton>({
	elementIs: 'opal-button',

	input: {
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
			'input-focused-change'(evt: IEvent) {
				this[evt.value ? 'focus' : 'blur']();
			},

			'change:_tabIndex'() {
				this.element.tabIndex = this._tabIndex;
			}
		},

		':element': {
			focus(evt: Event) {
				nextTick(() => {
					if (document.activeElement != this.element) {
						return;
					}

					if (this.element.tagName.indexOf('-', 1) != -1) {
						this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
					}

					this.input.focused = true;
					this.emit('focus');
				});
			},

			blur() {
				if (this._documentKeyDownListening) {
					this._documentKeyDownListening.stop();
				}

				this.input.focused = false;
				this.emit('blur');
			},

			click() {
				if (!this.input.disabled) {
					this.click();
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
				return this.input.disabled ? -1 : this.input.tabIndex;
			}
		});
	}

	ready() {
		if (this.input.focused) {
			this.element.tabIndex = this._tabIndex;
			this.focus();
		}
	}

	elementAttached() {
		this.element.tabIndex = this._tabIndex;
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13/* Enter */) {
			evt.preventDefault();

			if (!this.input.disabled) {
				this.click();
			}
		}
	}

	click(): OpalButton {
		if (this.input.checkable) {
			this.emit(this.toggle() ? 'check' : 'uncheck');
		}

		this.emit('click');

		return this;
	}

	get checked(): boolean {
		return this.input.checked;
	}
	set checked(checked: boolean) {
		this.input.checked = checked;
	}

	check(): boolean {
		if (!this.input.checked) {
			this.input.checked = true;
			return true;
		}

		return false;
	}

	uncheck(): boolean {
		if (this.input.checked) {
			this.input.checked = false;
			return true;
		}

		return false;
	}

	toggle(value?: boolean): boolean {
		return (this.input.checked = value === undefined ? !this.input.checked : value);
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
		this.input.disabled = false;
		return this;
	}

	disable(): OpalButton {
		this.input.disabled = true;
		return this;
	}
}
