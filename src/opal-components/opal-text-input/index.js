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
			inputName: String,
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

		events: {
			input: {
				focusin() {
					this.props.focused = true;
					this.emit('focusin');
				},

				focusout() {
					this.props.focused = false;
					this.emit('focusout');
				},

				input(evt) {
					this.value = evt.target.value;
					this.emit({ type: 'input', initialEvent: evt });
				},

				change(evt) {
					let storeKey = this.props.storeKey;

					if (storeKey) {
						localStorage.setItem(storeKey, evt.target.value);
					}

					this.emit({ type: 'change', initialEvent: evt });
				},

				keydown(evt) {
					if (this.props.multiline && this.props.autoHeight) {
						setTimeout(() => {
							this._fixHeight();
						}, 1);
					}

					this.emit({ type: 'keydown', initialEvent: evt });
				},

				keypress(evt) {
					if (evt.which == 13/* Enter */) {
						this.emit('confirminput');
					}

					this.emit({ type: 'keypress', initialEvent: evt });
				},

				keyup(evt) {
					this.emit({ type: 'keyup', initialEvent: evt });
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
		let input = this.$('input');

		this._initialHeight = input.offsetHeight + input.scrollHeight - input.clientHeight;

		if (value) {
			input.value = value;
		} else {
			let storeKey = props.storeKey;

			if (storeKey) {
				props.value = localStorage.getItem(storeKey) || '';
			}
		}

		this._fixHeight();

		if (props.focused) {
			this.focus();
		}
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'value') {
			let input = this.$('input');

			if (input.value != value) {
				input.value = value;
			}
		} else if (name == 'focused') {
			this[value ? 'focus' : 'blur']();
		}
	},

	_onBtnClearClick(evt) {
		evt.preventDefault();

		this.value = '';
		this.$('input').focus();

		this.emit({ type: 'change', initialEvent: evt });
	},

	_fixHeight() {
		let input = this.$('input');
		let lineHeight = parseInt(getComputedStyle(input).lineHeight, 10);

		input.style.height = this._initialHeight - lineHeight + 'px';
		input.style.height = input.offsetHeight + input.scrollHeight - input.clientHeight + lineHeight + 'px';
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
		this.$('input').focus();
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalTextInput;
	 */
	blur() {
		this.$('input').blur();
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
