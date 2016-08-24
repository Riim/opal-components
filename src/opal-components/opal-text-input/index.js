require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-text-input', {
	Static: {
		props: {
			inputType: 'text',
			multiline: false,
			size: 'm',
			value: '',
			placeholder: '',
			focused: false,
			tabIndex: 0,
			disabled: false
		},

		template: require('./index.html'),

		assets: {
			input: {
				'on-focusin'() {
					this.props.focused = true;
					this.emit('focusin');
				},

				'on-focusout'() {
					this.props.focused = false;
					this.emit('focusout');
				},

				'on-input'(evt) {
					this.props.value = evt.target.value;
					this.emit({ type: 'input', originalEvent: evt });
				},

				'on-change'(evt) {
					this.emit({ type: 'change', originalEvent: evt });
				},

				'on-keydown'(evt) {
					this.emit({ type: 'keydown', originalEvent: evt });
				},

				'on-keypress'(evt) {
					this.emit({ type: 'keypress', originalEvent: evt });
				},

				'on-keyup'(evt) {
					this.emit({ type: 'keyup', originalEvent: evt });
				}
			}
		}
	},

	ready() {
		this.assets.input.value = this.props.value;

		if (this.props.focused) {
			this.focus();
		}
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'value') {
			let input = this.assets.input;

			if (input.value != value) {
				input.value = value;
			}
		} else if (name == 'focused') {
			this[value ? 'focus' : 'blur']();
		}
	},

	/**
	 * @type {string}
	 */
	get value() {
		return this.assets.input.value;
	},
	set value(value) {
		this.assets.input.value = value;
	},

	/**
	 * @typesign () -> OpalComponents.OpalTextInput;
	 */
	focus() {
		this.assets.input.focus();
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalTextInput;
	 */
	blur() {
		this.assets.input.blur();
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalTextInput;
	 */
	enable() {
		this.props.disabled = false;
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalTextInput;
	 */
	disable() {
		this.props.disabled = true;
		return this;
	}
});
