require('./index.css');

let cellx = require('cellx');
let { Component } = require('rionite');

module.exports = Component.extend('opal-switch', {
	Static: {
		props: {
			checked: false,
			focused: false,
			tabIndex: 0,
			disabled: false
		},

		template: require('./index.html'),

		assets: {
			input: {
				'on-change'() {
					this.emit((this.props.checked = this.input.checked) ? 'check' : 'uncheck');
					this.emit('change');
				}
			},

			control: {
				'on-focusin'() {
					this.props.focused = true;
					this.emit('focusin');
				},

				'on-focusout'() {
					this.props.focused = false;
					this.emit('focusout');
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
		if (this.props.checked) {
			this.input.checked = true;
		}

		if (this.props.focused) {
			this.focus();
		}
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'checked') {
			this.input.checked = value;
		} else if (name == 'focused') {
			this[value ? 'focus' : 'blur']();
		}
	},

	/**
	 * @type {boolean}
	 */
	get checked() {
		return this.props.checked;
	},
	set checked(checked) {
		this.props.checked = checked;
	},

	/**
	 * @typesign () -> boolean;
	 */
	check() {
		if (!this.props.checked) {
			this.props.checked = true;
			return true;
		}

		return false;
	},

	/**
	 * @typesign () -> boolean;
	 */
	uncheck() {
		if (this.props.checked) {
			this.props.checked = false;
			return true;
		}

		return false;
	},

	/**
	 * @typesign (value?: boolean) -> boolean;
	 */
	toggle(value) {
		if (value !== void 0) {
			return (this.props.checked = !!value);
		}
		return (this.props.checked = !this.props.checked);
	},

	/**
	 * @typesign () -> OpalComponents.OpalSwitch;
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
	 * @typesign () -> OpalComponents.OpalSwitch;
	 */
	blur() {
		if (this._focused) {
			this._focused = false;

			this.control.blur();
			this._documentKeyDownListening.stop();
		}

		return this;
	},

	_onDocumentKeyDown(evt) {
		if (evt.which == 13/* Enter */ || evt.which == 32/* Space */) {
			evt.preventDefault();

			if (!this.props.disabled) {
				this.emit((this.props.checked = !this.props.checked) ? 'check' : 'uncheck');
				this.emit('change');
			}
		}
	},

	/**
	 * @typesign () -> OpalComponents.OpalSwitch;
	 */
	enable() {
		this.props.disabled = false;
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalSwitch;
	 */
	disable() {
		this.props.disabled = true;
		return this;
	}
});
