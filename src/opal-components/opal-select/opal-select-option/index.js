require('./index.css');

let cellx = require('cellx');
let { Component } = require('rionite');

module.exports = Component.extend('opal-select-option', {
	Static: {
		props: {
			value: String,
			text: { type: String, required: true },
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
		cellx.define(this, {
			_tabIndex() {
				return this.props.disabled ? -1 : this.props.tabIndex;
			}
		});
	},

	ready() {
		let props = this.props;

		if (props.value === void 0) {
			props.value = props.text;
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
		return this.props.text.trim() || ' ';
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
		return (this.props.selected = value === void 0 ? !this.props.selected : value);
	},

	/**
	 * @typesign () -> OpalComponents.OpalSelectOption;
	 */
	focus() {
		if (!this._focused) {
			this._focused = true;

			this.assets.control.focus();
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

			this.assets.control.blur();
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
