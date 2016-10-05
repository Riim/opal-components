require('./index.css');

let cellx = require('cellx');
let { Component } = require('rionite');

module.exports = Component.extend('opal-text-input', {
	Static: {
		props: {
			inputType: 'text',
			multiline: false,
			size: 'm',
			rows: 5,
			autoHeight: true,
			value: '',
			storeKey: String,
			placeholder: '',
			clearable: false,
			loading: false,
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
					this.value = evt.target.value;
					this.emit({ type: 'input', initialEvent: evt });
				},

				'on-change'(evt) {
					let storeKey = this.props.storeKey;

					if (storeKey) {
						localStorage.setItem(storeKey, evt.target.value);
					}

					this.emit({ type: 'change', initialEvent: evt });
				},

				'on-keydown'(evt) {
					if (this.props.multiline && this.props.autoHeight) {
						setTimeout(() => {
							this._fixHeight();
						}, 10);
					}

					this.emit({ type: 'keydown', initialEvent: evt });
				},

				'on-keypress'(evt) {
					if (evt.which == 13/* Enter */) {
						this.emit('confirminput');
					}

					this.emit({ type: 'keypress', initialEvent: evt });
				},

				'on-keyup'(evt) {
					if (this.props.multiline && this.props.autoHeight) {
						this._fixHeight();
					}

					this.emit({ type: 'keyup', initialEvent: evt });
				}
			},

			btnClear: {
				'on-click'(evt) {
					this.value = '';
					this.assets.input.focus();

					this.emit({ type: 'change', initialEvent: evt });
				}
			}
		}
	},

	initialize() {
		cellx.define(this, {
			btnClearShown() {
				return !!this.props.value && !this.props.loading;
			}
		});
	},

	ready() {
		let props = this.props;
		let value = props.value;

		if (value) {
			this.assets.input.value = value;
		} else {
			let storeKey = props.storeKey;

			if (storeKey) {
				props.value = localStorage.getItem(storeKey) || '';
			}
		}

		if (props.focused) {
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

	_fixHeight() {
		let input = this.assets.input;

		if (input.scrollHeight > input.clientHeight) {
			input.style.height = input.offsetHeight + input.scrollHeight - input.clientHeight + 'px';
		}
	},

	/**
	 * @type {string}
	 */
	get value() {
		return this.props.value;
	},
	set value(value) {
		this.props.value = value;
	},

	/**
	 * @typesign () -> OpalComponents.OpalTextInput;
	 */
	clear() {
		this.value = '';
		return this;
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
