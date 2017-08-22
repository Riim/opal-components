import { define, IEvent, Utils } from 'cellx';
import { Component, d, IDisposableListening } from 'rionite';
import './index.css';

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
	}
})
export class OpalButton extends Component {
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
		this.listenTo(this, {
			'input-focused-change': this._onInputFocusedChange,
			'change:_tabIndex': this._onTabIndexChange
		});

		this.listenTo(this.element, {
			focus: this._onElementFocus,
			blur: this._onElementBlur,
			click: this._onElementClick
		});

		this.element.tabIndex = this._tabIndex;
	}

	_onInputFocusedChange(evt: IEvent) {
		this[evt.value ? 'focus' : 'blur']();
	}

	_onTabIndexChange() {
		this.element.tabIndex = this._tabIndex;
	}

	_onElementFocus(evt: Event) {
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
	}

	_onElementBlur() {
		if (this._documentKeyDownListening) {
			this._documentKeyDownListening.stop();
		}

		this.input.focused = false;
		this.emit('blur');
	}

	_onElementClick() {
		if (!this.input.disabled) {
			this.click();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		if (evt.which == 13 /* Enter */) {
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

	get selected(): boolean {
		return this.checked;
	}
	set selected(selected: boolean) {
		this.checked = selected;
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
