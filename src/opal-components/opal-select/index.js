require('./index.css');
require('./opal-select__icon-chevron-down.svg');

let { utils: { nextTick }, cellx } = require('cellx');
let { Component, template, components: { RtRepeat } } = require('rionite');
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

		template: template(require('./index.html')),

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

				'on-click'(evt) {
					this[evt.target.checked ? 'open' : 'close']();
				}
			},

			menu: {
				'on-close'() {
					this.close();
				},

				'on-change'(evt) {
					if (!(evt.target instanceof RtRepeat)) {
						return;
					}

					this._options.pull();

					let value = this.value;

					this.options.forEach(this.props.multiple ? option => {
						option.selected = value.contains(option.value);
					} : option => {
						option.selected = value !== null && option.value == value;
					});
				},

				'on-select'({ target: selectedOption }) {
					if (!(selectedOption instanceof OpalSelectOption)) {
						return;
					}

					if (this.props.multiple) {
						this.value.add(selectedOption.value);
						this.selectedTexts.add(selectedOption.text);
					} else {
						this.value = selectedOption.value;

						let selectedTexts = this.selectedTexts;

						if (selectedTexts.length) {
							selectedTexts.set(0, selectedOption.text);
						} else {
							selectedTexts.add(selectedOption.text);
						}

						this.options.forEach(option => {
							if (option != selectedOption) {
								option.select = false;
							}
						});

						this.close();
						this.focus();
					}
				},

				'on-deselect'({ target: deselectedOption }) {
					if (!(deselectedOption instanceof OpalSelectOption)) {
						return;
					}

					if (this.props.multiple) {
						let index = this.value.indexOf(deselectedOption.value);

						this.value.removeAt(index);
						this.selectedTexts.removeAt(index);
					} else {
						deselectedOption.select();

						this.close();
						this.focus();
					}
				}
			},

			filteredList: {},
			loadedList: {}
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

			value: void 0,

			selectedTexts: void 0,

			text: function() {
				let selectedTexts = this.selectedTexts;
				return selectedTexts && selectedTexts.join(', ') || this.props.placeholder;
			}
		});
	},

	ready() {
		this.optionElements = this.element.getElementsByClassName('opal-select-option');

		let props = this.props;

		if (props.multiple) {
			let selectedOptions = this.options.filter(option => option.selected);

			this.value = cellx.list(selectedOptions.map(option => option.value));
			this.selectedTexts = cellx.list(selectedOptions.map(option => option.text));
		} else {
			let selectedOption = this.options.find(option => option.selected);

			if (selectedOption) {
				this.value = selectedOption.value;
				this.selectedTexts = cellx.list([selectedOption.text]);
			} else {
				this.value = null;
				this.selectedTexts = cellx.list();
			}
		}
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

			let assets = this.assets;

			assets.button.check();
			assets.menu.open();

			if (assets.loadedList) {
				nextTick(() => {
					assets.loadedList.checkLoading();
				});
			}

			if (assets.filteredList) {
				assets.filteredList.focus();
			} else {
				this._focusOptions();
			}

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

			this.assets.button.uncheck();
			this.assets.menu.close();

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

			this.assets.button.focus();

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

			this.assets.button.blur();

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
