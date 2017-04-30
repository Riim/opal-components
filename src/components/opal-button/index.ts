import './index.css';

import { IEvent, define, Utils } from 'cellx';
import { IDisposableListening, Component, d } from 'rionite';

let nextTick = Utils.nextTick;

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
			'property-focused-change'(evt: IEvent) {
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

					this.props.focused = true;
					this.emit('focus');
				});
			},

			blur() {
				if (this._documentKeyDownListening) {
					this._documentKeyDownListening.stop();
				}

				this.props.focused = false;
				this.emit('blur');
			},

			click() {
				if (!this.props.disabled) {
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
				return this.props.disabled ? -1 : this.props.tabIndex;
			}
		});
	}

	ready() {
		if (this.props.focused) {
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

			if (!this.props.disabled) {
				this.click();
			}
		}
	}

	click(): OpalButton {
		if (this.props.checkable) {
			this.emit(this.toggle() ? 'check' : 'uncheck');
		}

		this.emit('click');

		return this;
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

	focus(): OpalButton {
		this.element.focus();
		return this;
	}

	blur(): OpalButton {
		this.element.blur();
		return this;
	}

	enable(): OpalButton {
		this.props.disabled = false;
		return this;
	}

	disable(): OpalButton {
		this.props.disabled = true;
		return this;
	}
}
