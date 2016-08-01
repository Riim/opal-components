require('./index.css');
require('./opal-select__icon-chevron-down.svg');

let { utils: { nextTick }, cellx } = require('cellx');
let { Component } = require('rionite');
let OpalSelectOption = require('./opal-select-option');
let isEqualArray = require('./isEqualArray');

let map = Array.prototype.map;

module.exports = Component.extend('opal-select', {
	Static: {
		OpalSelectOption,

		props: {
			type: String,
			size: 'm',
			text: String,
			placeholder: '—',
			multiple: false,
			focused: false,
			tabIndex: 0,
			disabled: false
		},

		template: require('./index.html'),

		assets: {
			button: {
				'on-focusin'() {
					this.props.focused = true;
					this.emit('focusin');
				},

				'on-focusout'() {
					this.props.focused = false;
					this.emit('focusout');
				},

				'on-click'() {
					this[this.button.checked ? 'open' : 'close']();
				}
			},

			menu: {
				'on-close'() {
					this.close();
				},

				'on-change'() {
					this._options.pull();
				},

				'on-select'({ target: selectedOption }) {
					if (!this.props.multiple) {
						this.selectedOptions.forEach(option => {
							if (option != selectedOption) {
								option.deselect();
							}
						});

						this.close();
						this.focus();
					}
				},

				'on-deselect'(evt) {
					if (!this.props.multiple) {
						evt.target.select();

						this.close();
						this.focus();
					}
				}
			}
		}
	},

	_opened: false,
	_focused: false,

	initialize() {
		cellx.define(this, {
			options(push, fail, oldOptions) {
				let optionElements = this.optionElements;
				let options = optionElements ? map.call(optionElements, option => option.$c) : [];
				return oldOptions && isEqualArray(options, oldOptions) ? oldOptions : options;
			},

			selectedOptions(push, fail, oldOptions) {
				let options = this.options.filter(option => option.selected);
				return oldOptions && isEqualArray(options, oldOptions) ? oldOptions : options;
			},

			value() {
				let selectedOptions = this.selectedOptions;

				if (this.props.multiple) {
					return selectedOptions.map(option => option.value);
				}
				return selectedOptions.length ? selectedOptions[0].value : void 0;
			},

			selectedOptionsText() {
				return this.selectedOptions.map(option => option.text.trim()).join(', ') || this.props.placeholder;
			}
		});
	},

	ready() {
		this.optionElements = this.element.getElementsByClassName('opal-select-option');

		nextTick(() => {
			this._options.pull();
		});
	},

	elementAttached() {
		this.listenTo(this, 'change:value', this._onValueChange);
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'focused') {
			this[value ? 'focus' : 'blur']();
		}
	},

	_onValueChange(evt) {
		this.emit({
			type: 'change',
			value: evt.value
		});
	},

	/**
	 * @typesign () -> boolean;
	 */
	open() {
		if (!this._opened) {
			this._opened = true;

			this.button.check();
			this.menu.open();

			this._focusOptions();

			this._documentFocusInListening = this.listenTo(document, 'focusin', this._onDocumentFocusIn);

			if (!this._focused) {
				this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
			}

			return true;
		}

		return false;
	},

	/**
	 * @typesign () -> boolean;
	 */
	close() {
		if (this._opened) {
			this._opened = false;

			this.button.uncheck();
			this.menu.close();

			this._documentFocusInListening.stop();

			if (!this._focused) {
				this._documentKeyDownListening.stop();
			}

			return true;
		}

		return false;
	},

	/**
	 * @typesign (value?: boolean) -> boolean;
	 */
	toggle(value) {
		if (value !== void 0) {
			return value ? this.open() : !this.close();
		}
		return this.open() || !this.close();
	},

	_onDocumentFocusIn(evt) {
		let body = document.body;
		let el = this.element;

		for (let node = evt.target; ;) {
			if (node == body) {
				this.close();
				break;
			}

			node = node.parentNode;

			if (node == el) {
				break;
			}
		}
	},

	/**
	 * @typesign () -> OpalComponents.OpalSelect;
	 */
	focus() {
		if (!this._focused) {
			this._focused = true;

			this.button.focus();

			if (!this._opened) {
				this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
			}
		}

		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalSelect;
	 */
	blur() {
		if (this._focused) {
			this._focused = false;

			this.button.blur();

			if (!this._opened) {
				this._documentKeyDownListening.stop();
			}
		}

		return this;
	},

	_onDocumentKeyDown(evt) {
		switch (evt.which) {
			case 32/* Space */: {
				evt.preventDefault();

				if (this._opened) {
					if (this._focused) {
						this.close();
					}
				} else {
					this.open();
				}

				break;
			}

			case 38/* Up */: {
				evt.preventDefault();

				if (this._opened) {
					if (document.activeElement == document.body) {
						if (this._focusOptions()) {
							document.body.classList.remove('_no-focus-highlight');
						}
					} else {
						let options = this.options;

						for (let i = 1, l = options.length; i < l; i++) {
							if (options[i].props.focused) {
								do {
									let option = options[--i];

									if (!option.props.disabled) {
										document.body.classList.remove('_no-focus-highlight');
										option.focus();
										break;
									}
								} while (i);

								break;
							}
						}
					}
				} else {
					this.open();
				}

				break;
			}

			case 40/* Down */: {
				evt.preventDefault();

				if (this._opened) {
					if (document.activeElement == document.body) {
						if (this._focusOptions()) {
							document.body.classList.remove('_no-focus-highlight');
						}
					} else {
						let options = this.options;

						for (let i = 0, l = options.length - 1; i < l; i++) {
							if (options[i].props.focused) {
								do {
									let option = options[++i];

									if (!option.props.disabled) {
										document.body.classList.remove('_no-focus-highlight');
										option.focus();
										break;
									}
								} while (i < l);

								break;
							}
						}
					}
				} else {
					this.open();
				}

				break;
			}

			case 27/* Esc */: {
				evt.preventDefault();
				this.close();
				this.focus();
				break;
			}
		}
	},

	_focusOptions() {
		let multiple = this.props.multiple;
		let options = this.options;
		let optionForFocus;

		for (let i = 0, l = options.length; i < l; i++) {
			let option = options[i];

			if (!option.props.disabled) {
				if (multiple || !option.selected) {
					optionForFocus = option;
					break;
				}

				if (!optionForFocus) {
					optionForFocus = option;
				}
			}
		}

		if (optionForFocus) {
			optionForFocus.focus();
			return true;
		}

		return false;
	}
});
