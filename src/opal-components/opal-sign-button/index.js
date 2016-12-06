require('./index.css');

let cellx = require('cellx');
let { Component } = require('rionite');

module.exports = Component.extend('opal-sign-button', {
	Static: {
		props: {
			sign: { type: String, required: true },
			checkable: false,
			checked: false,
			focused: false,
			tabIndex: 0,
			disabled: false
		},

		template: require('./index.html'),

		events: {
			control: {
				focusin(evt) {
					this.props.focused = true;
					this.emit({ type: 'focusin', originalEvent: evt });
				},

				focusout(evt) {
					this.props.focused = false;
					this.emit({ type: 'focusout', originalEvent: evt });
				},

				click(evt) {
					if (!this.props.disabled) {
						if (this.props.checkable) {
							this.emit(this.toggle() ? 'check' : 'uncheck');
						}

						this.emit({ type: 'click', originalEvent: evt });
					}
				}
			}
		}
	},

	initialize() {
		cellx.define(this, {
			_tabIndex() {
				return this.props.disabled ? -1 : this.props.tabIndex;
			}
		});
	},

	ready() {
		if (this.props.focused) {
			this.focus();
		}
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'focused') {
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
		return (this.props.checked = value === undefined ? !this.props.checked : value);
	},

	/**
	 * @typesign () -> OpalComponents.OpalSignButton;
	 */
	focus() {
		this.$('control').focus();
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalSignButton;
	 */
	blur() {
		this.$('control').blur();
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalSignButton;
	 */
	enable() {
		this.props.disabled = false;
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalSignButton;
	 */
	disable() {
		this.props.disabled = true;
		return this;
	}
});
