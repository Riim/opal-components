require('./index.css');

let cellx = require('cellx');
let { Component } = require('rionite');

module.exports = Component.extend('opal-checkbox', {
	Static: {
		props: {
			checked: false,
			indeterminate: false,
			focused: false,
			tabIndex: 0,
			disabled: false
		},

		template: require('./index.html'),

		assets: {
			input: {
				'on-change'(evt) {
					this.emit((this.props.checked = evt.target.checked) ? 'check' : 'uncheck');
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
			this.props.indeterminate = false;
			this.assets.input.checked = true;
		}

		if (this.props.focused) {
			this.focus();
		}
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'checked') {
			if (value) {
				this.props.indeterminate = false;
			}

			this.assets.input.checked = value;
		} else if (name == 'indeterminate') {
			if (value) {
				this.props.checked = false;
			}
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
	 * @typesign () -> OpalComponents.OpalCheckbox;
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
	 * @typesign () -> OpalComponents.OpalCheckbox;
	 */
	blur() {
		if (this._focused) {
			this._focused = false;

			this.assets.control.blur();
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
	 * @typesign () -> OpalComponents.OpalCheckbox;
	 */
	enable() {
		this.props.disabled = false;
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalCheckbox;
	 */
	disable() {
		this.props.disabled = true;
		return this;
	}
});
