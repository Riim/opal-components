require('./index.css');

let cellx = require('cellx');
let { Component } = require('rionite');

module.exports = Component.extend('opal-select-option', {
	Static: {
		props: {
			value: String,
			text: String,
			selected: false,
			focused: false,
			tabIndex: 0,
			disabled: false
		},

		template: require('./index.html'),

		assets: {
			control: {
				'on-focusin'() {
					this.props.focused = true;
				},

				'on-focusout'() {
					this.props.focused = false;
				},

				'on-click'() {
					this._click();
				}
			}
		}
	},

	_focused: false,

	initialize() {
		let props = this.props;
		let text = props.text;

		if (text === void 0) {
			throw new TypeError('"text" property is required');
		}

		cellx.define(this, {
			_tabIndex() {
				return props.disabled ? -1 : props.tabIndex;
			}
		});
	},

	ready() {
		if (this.props.value === void 0) {
			this.props.value = this.props.text;
		}
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'focused') {
			this[value ? 'focus' : 'blur']();
		}
	},

	_onDocumentKeyDown(evt) {
		if (evt.which == 13/* Enter */ || evt.which == 32/* Space */) {
			evt.preventDefault();

			if (!this.props.disabled) {
				this._click();
			}
		}
	},

	_click() {
		this.emit(this.toggle() ? 'select' : 'deselect');
	},

	/**
	 * @type {string}
	 */
	get value() {
		let props = this.props;
		return props.value === void 0 ? props.text : props.value;
	},
	set value(value) {
		this.props.value = value;
	},

	/**
	 * @type {string}
	 */
	get text() {
		return this.props.text.trim().replace(',', ' ');
	},
	set text(text) {
		this.props.text = text;
	},

	/**
	 * @type {boolean}
	 */
	get selected() {
		return this.props.selected;
	},
	set selected(selected) {
		this.props.selected = selected;
	},

	/**
	 * @typesign () -> boolean;
	 */
	select() {
		if (!this.props.selected) {
			this.props.selected = true;
			return true;
		}

		return false;
	},

	/**
	 * @typesign () -> boolean;
	 */
	deselect() {
		if (this.props.selected) {
			this.props.selected = false;
			return true;
		}

		return false;
	},

	/**
	 * @typesign (value?: boolean) -> boolean;
	 */
	toggle(value) {
		if (value !== void 0) {
			return (this.props.selected = !!value);
		}
		return (this.props.selected = !this.props.selected);
	},

	/**
	 * @typesign () -> OpalComponents.OpalSelectOption;
	 */
	focus() {
		if (!this._focused) {
			this._focused = true;

			this.control.focus();
			this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
		}

		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalSelectOption;
	 */
	blur() {
		if (this._focused) {
			this._focused = false;

			this.control.blur();
			this._documentKeyDownListening.stop();
		}

		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalSelectOption;
	 */
	enable() {
		this.props.disabled = false;
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalSelectOption;
	 */
	disable() {
		this.props.disabled = true;
		return this;
	}
});
