require('./index.css');
require('./opal-select__icon-chevron-down.svg');

let { utils: { nextTick }, cellx } = require('cellx');
let { IndexedList, Component, template, components: { RtRepeat } } = require('rionite');
let OpalSelectOption = require('./opal-select-option');
let isEqualArray = require('./isEqualArray');

let map = Array.prototype.map;

module.exports = Component.extend('opal-select', {
	Static: {
		OpalSelectOption,

		props: {
			type: String,
			size: 'm',
			viewModel: String,
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
					this._updateOptions();

					return false;
				},

				'on-select'({ target: selectedOption }) {
					if (!(selectedOption instanceof OpalSelectOption)) {
						return;
					}

					let vm = this.viewModel;
					let item = {
						value: selectedOption.value,
						text: selectedOption.text
					};

					if (this.props.multiple) {
						vm.add(item);
					} else {
						if (vm.length) {
							vm.set(0, item);
						} else {
							vm.add(item);
						}

						this.options.forEach(option => {
							if (option != selectedOption) {
								option.selected = false;
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
						this.viewModel.remove(this.viewModel.get(deselectedOption.value, 'value'));
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
		let vm = this.props.viewModel;

		if (vm) {
			vm = (this.ownerComponent || window)[vm];

			if (!vm) {
				throw new TypeError('viewModel is required');
			}
		} else {
			vm = new IndexedList(null, { indexes: ['value'] });
		}

		cellx.define(this, {
			viewModel: vm,

			options(push, fail, oldOptions) {
				let optionElements = this.optionElements;
				let options = optionElements ? map.call(optionElements, option => option.$c) : [];
				return oldOptions && isEqualArray(options, oldOptions) ? oldOptions : options;
			},

			text: function() {
				return this.viewModel.map(item => item.text).join(', ') || this.props.placeholder;
			}
		});
	},

	ready() {
		this.optionElements = this.element.getElementsByClassName('opal-select-option');

		if (this.props.viewModel) {
			this._updateOptions();
		} else {
			let selectedOptions;

			if (this.props.multiple) {
				selectedOptions = this.options.filter(option => option.selected);
			} else {
				let selectedOption = this.options.find(option => option.selected);
				selectedOptions = selectedOption ? [selectedOption] : [];
			}

			if (selectedOptions.length) {
				this.viewModel.addRange(selectedOptions.map(option => ({
					value: option.value,
					text: option.text
				})));
			}
		}
	},

	elementAttached() {
		this.listenTo(this.viewModel, 'change', this._onViewModelChange);
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'focused') {
			this[value ? 'focus' : 'blur']();
		}
	},

	_onViewModelChange(evt) {
		this.emit({
			type: 'change',
			value: evt.value
		});
	},

	_updateOptions() {
		let vm = this.viewModel;

		this.options.forEach(option => {
			option.selected = vm.contains(option.value, 'value');
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
