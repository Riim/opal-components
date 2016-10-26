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

		events: {
			input: {
				change(evt) {
					this.emit((this.props.checked = evt.target.checked) ? 'check' : 'uncheck');
					this.emit('change');
				}
			},

			control: {
				focusin() {
					this.props.focused = true;
					this.emit('focusin');
				},

				focusout() {
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
		let props = this.props;

		if (props.checked) {
			props.indeterminate = false;
			this.$('input').checked = true;
		}

		if (props.focused) {
			this.focus();
		}
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'checked') {
			if (value) {
				this.props.indeterminate = false;
			}

			this.$('input').checked = value;
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
		return (this.props.checked = value === void 0 ? !this.props.checked : value);
	},

	/**
	 * @typesign () -> OpalComponents.OpalCheckbox;
	 */
	focus() {
		if (!this._focused) {
			this._focused = true;

			this.$('control').focus();
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

			this.$('control').blur();
			this._documentKeyDownListening.stop();
		}

		return this;
	},

	_onDocumentKeyDown(evt) {
		if (evt.which == 13/* Enter */ || evt.which == 32/* Space */) {
			evt.preventDefault();

			let props = this.props;

			if (!props.disabled) {
				this.emit((props.checked = !props.checked) ? 'check' : 'uncheck');
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
