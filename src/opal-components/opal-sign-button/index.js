require('./index.css');

let cellx = require('cellx');
let { Component } = require('rionite');

module.exports = Component.extend('opal-sign-button', {
	Static: {
		props: {
			sign: String,
			focused: false,
			tabIndex: 0,
			disabled: false
		},

		template: require('./index.html'),

		assets: {
			control: {
				'on-focusin'() {
					this.props.focused = true;
					this.emit('focusin');
				},

				'on-focusout'() {
					this.props.focused = false;
					this.emit('focusout');
				},

				'on-click'() {
					if (!this.props.disabled) {
						this.emit('click');
					}
				}
			}
		}
	},

	initialize() {
		if (!this.props.sign) {
			throw new TypeError('Property "sign" is required');
		}

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
	 * @typesign () -> OpalComponents.OpalSignButton;
	 */
	focus() {
		this.assets.control.focus();
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalSignButton;
	 */
	blur() {
		this.assets.control.blur();
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
