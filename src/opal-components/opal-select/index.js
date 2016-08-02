require('./index.css');
require('./opal-select__icon-chevron-down.svg');

let cellx = require('cellx');
let { Component, components: { RtRepeat } } = require('rionite');
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

				'on-change'(evt) {
					if (!(evt.target instanceof RtRepeat)) {
						return;
					}

					this._options.pull();
					this._updateOptions();
				},

				'on-select'({ target: selectedOption }) {
					if (!(selectedOption instanceof OpalSelectOption)) {
						return;
					}

					if (this.props.multiple) {
						let value = this.value;

						if (value.push(selectedOption.value) == 1) {
							this.text = selectedOption.text;
						} else {
							this.text += ', ' + selectedOption.text;
						}
					} else {
						this.value = selectedOption.value;
						this.text = selectedOption.text;

						this._updateOptions();

						this.close();
						this.focus();
					}
				},

				'on-deselect'({ target: deselectedOption }) {
					if (!(deselectedOption instanceof OpalSelectOption)) {
						return;
					}

					if (this.props.multiple) {
						let value = this.value;
						let index = value.indexOf(deselectedOption.value);

						value.splice(index, 1);

						if (value.length) {
							if (index) {
								this.text = index == value.length ?
									this.text.slice(
										0,
										-(deselectedOption.text.length + 2)
									) :
									this.text
										.split(`, ${ deselectedOption.text }, `)
										.join(', ');
							} else {
								this.text = this.text.slice(
									deselectedOption.text.length + 2
								);
							}
						} else {
							this.text = this.props.placeholder;
						}
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
			text: void 0
		});
	},

	ready() {
		this.optionElements = this.element.getElementsByClassName('opal-select-option');

		let props = this.props;

		if (props.multiple) {
			let selectedOptions = this.options.reduce((selectedOptions, option) => {
				if (option.selected) {
					selectedOptions.push(option);
				}

				return selectedOptions;
			}, []);

			this.value = selectedOptions.map(option => option.value);
			this.text = selectedOptions.map(option => option.text).join(', ') ||
				props.placeholder;
		} else {
			let selectedOption = this.options.find(option => option.selected);

			if (selectedOption) {
				this.value = selectedOption.value;
				this.text = selectedOption.text;
			} else {
				this.value = null;
				this.text = props.placeholder;
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

	_updateOptions() {
		let value = this.value;

		this.options.forEach(this.props.multiple ? option => {
			option.selected = value && value.indexOf(option.value) != -1;
		} : option => {
			option.selected = option.value == value;
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

			let loadedList = this.loadedList;

			if (loadedList) {
				loadedList.checkLoading();
			}

			let filteredList = this.filteredList;

			if (filteredList) {
				filteredList.focus();
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
