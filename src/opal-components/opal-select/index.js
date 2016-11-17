require('./index.css');
require('./opal-select__icon-chevron-down.svg');

let { Utils: { nextUID, nextTick }, cellx } = require('cellx');
let { IndexedList } = require('cellx-indexed-collections');
let { getText, ComponentTemplate, Component, Components: { RtIfThen, RtRepeat } } = require('rionite');
let OpalSelectOption = require('./opal-select-option');
let isEqualArray = require('./isEqualArray');

let map = Array.prototype.map;

module.exports = Component.extend('opal-select', {
	Static: {
		OpalSelectOption,

		props: {
			type: String,
			size: 'm',
			datalist: { type: String, readonly: true },
			value: Object,
			viewModel: { type: String, readonly: true },
			viewModelItemSchema: { default: { value: 'value', text: 'text', disabled: 'disabled' }, readonly: true },
			text: String,
			placeholder: getText.t('Не выбрано'),
			multiple: { default: false, readonly: true },
			allowInput: false,
			focused: false,
			tabIndex: 0,
			disabled: false
		},

		template: new ComponentTemplate(require('./index.html')),

		events: {
			button: {
				focusin() {
					this.props.focused = true;
					this.emit('focusin');
				},

				focusout() {
					this.props.focused = false;
					this.emit('focusout');
				},

				click(evt) {
					this[evt.target.checked ? 'open' : 'close']();
				}
			},

			menu: {
				close() {
					this.close();
				},

				confirminput({ target: textInput }) {
					if (!this.props.allowInput) {
						return;
					}

					let itemValue = '_' + Math.floor(Math.random() * 1e9) + '_' + nextUID();
					let itemText = textInput.value;

					let dataList = this.dataList;

					if (dataList) {
						dataList.add({ value: itemValue, text: itemText });
					}

					textInput.clear();

					let loadedList = this.loadedList;

					if (loadedList === void 0) {
						loadedList = this.loadedList = this.$('loaded-list');
					}

					if (loadedList) {
						loadedList.props.query = '';
					}

					this.emit('input');

					let vm = this.viewModel;
					let vmItem = {
						[this._viewModelItemValueFieldName]: itemValue,
						[this._viewModelItemTextFieldName]: itemText
					};

					if (this.props.multiple) {
						vm.add(vmItem);
					} else {
						if (vm.length) {
							vm.set(0, vmItem);
						} else {
							vm.add(vmItem);
						}

						this.close();
						this.focus();

						this.emit('change');
					}
				},

				change(evt) {
					if (!(evt.target instanceof RtIfThen) && !(evt.target instanceof RtRepeat)) {
						return;
					}

					this._options.pull();
					this._updateOptions();

					return false;
				},

				select({ target: selectedOption }) {
					if (!(selectedOption instanceof OpalSelectOption)) {
						return;
					}

					let vm = this.viewModel;
					let vmItem = {
						[this._viewModelItemValueFieldName]: selectedOption.value,
						[this._viewModelItemTextFieldName]: selectedOption.text
					};

					if (this.props.multiple) {
						vm.add(vmItem);
					} else {
						if (vm.length) {
							vm.set(0, vmItem);
						} else {
							vm.add(vmItem);
						}

						this.close();
						this.focus();

						this.emit('change');
					}
				},

				deselect({ target: deselectedOption }) {
					if (!(deselectedOption instanceof OpalSelectOption)) {
						return;
					}

					if (this.props.multiple) {
						this.viewModel.remove(
							this.viewModel.get(deselectedOption.value, this._viewModelItemValueFieldName)
						);
					} else {
						deselectedOption.select();

						this.close();
						this.focus();
					}
				}
			},

			'loaded-list': {
				loaded() {
					setTimeout(() => {
						let filteredList = this.$('filtered-list');

						if (filteredList) {
							if (document.activeElement == filteredList.$('query-input').$('input')) {
								this._focusOptions();
								filteredList.focus();
							} else {
								this._focusOptions();
							}
						} else {
							this._focusOptions();
						}
					}, 1);
				}
			}
		}
	},

	filteredList: void 0,
	loadedList: void 0,

	_opened: false,

	_valueWhenOpened: null,

	initialize() {
		let props = this.props;
		let dataList = props.datalist;

		if (dataList) {
			let context = this.ownerComponent || window;
			let getDataList = Function(`return this.${ dataList };`);

			cellx.define(this, 'dataList', function() {
				return getDataList.call(context);
			});
		}

		let vm = props.viewModel;
		let vmItemSchema = props.viewModelItemSchema;

		if (vm) {
			vm = Function(`return this.${ vm };`).call(this.ownerComponent || window);

			if (!vm) {
				throw new TypeError('viewModel is not defined');
			}
		} else {
			vm = new IndexedList(null, { indexes: [vmItemSchema.value] });
		}

		cellx.define(this, 'viewModel', vm);

		this._viewModelItemValueFieldName = vmItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text;
		this._viewModelItemDisabledFieldName = vmItemSchema.disabled;

		cellx.define(this, {
			options() {
				return this.optionElements ? map.call(this.optionElements, option => option.$c) : [];
			},

			text() {
				return this.viewModel.map(item => item[this._viewModelItemTextFieldName]).join(', ') ||
					this.props.placeholder;
			}
		});
	},

	ready() {
		this.optionElements = this.element.getElementsByClassName('opal-select-option');

		let props = this.props;

		if (props.viewModel) {
			this._updateOptions();
		} else {
			let value = props.value;
			let selectedOptions;

			if (value) {
				if (!Array.isArray(value)) {
					throw new TypeError('value must be an array');
				}

				if (value.length) {
					if (props.multiple) {
						selectedOptions = this.options.filter(option => value.indexOf(option.value) != -1);
					} else {
						value = value[0];
						let selectedOption = this.options.find(option => option.value == value);
						selectedOptions = selectedOption ? [selectedOption] : [];
					}
				} else {
					selectedOptions = [];
				}
			} else {
				if (props.multiple) {
					selectedOptions = this.options.filter(option => option.selected);
				} else {
					let selectedOption = this.options.find(option => option.selected);
					selectedOptions = selectedOption ? [selectedOption] : [];
				}
			}

			if (selectedOptions.length) {
				this.viewModel.addRange(selectedOptions.map(option => ({
					[this._viewModelItemValueFieldName]: option.value,
					[this._viewModelItemTextFieldName]: option.text
				})));
			}

			if (value) {
				this._updateOptions();
			}
		}
	},

	elementAttached() {
		this.listenTo(this.props, 'change:value', this._onPropsValueChange);
		this.listenTo(this.viewModel, 'change', this._onViewModelChange);
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'focused') {
			if (value) {
				if (!this._opened) {
					this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
				}

				this.focus();
			} else {
				if (!this._opened) {
					this._documentKeyDownListening.stop();
				}

				this.blur();
			}
		}
	},

	_onPropsValueChange({ value }) {
		let vm = this.viewModel;

		if (value) {
			if (!Array.isArray(value)) {
				throw new TypeError('value must be an array');
			}

			if (value.length) {
				let vmItemValueFieldName = this._viewModelItemValueFieldName;
				let vmItemTextFieldName = this._viewModelItemTextFieldName;

				if (this.props.multiple) {
					this.options.forEach(option => {
						let optionValue = option.value;

						if (value.indexOf(optionValue) != -1) {
							if (!vm.contains(optionValue, vmItemValueFieldName)) {
								vm.add({
									[vmItemValueFieldName]: optionValue,
									[vmItemTextFieldName]: option.text
								});
							}
						} else {
							let item = vm.get(optionValue, vmItemValueFieldName);

							if (item) {
								vm.remove(item);
							}
						}
					});
				} else {
					value = value[0];

					if (!vm.length || value != vm.get(0)[vmItemValueFieldName]) {
						if (!this.options.some(option => {
							if (option.value == value) {
								vm.set(0, {
									[vmItemValueFieldName]: value,
									[vmItemTextFieldName]: option.text
								});

								return true;
							}
						}) && vm.length) {
							vm.clear();
						}
					}
				}
			} else {
				vm.clear();
			}
		} else {
			vm.clear();
		}
	},

	_onViewModelChange() {
		this._updateOptions();
	},

	_updateOptions() {
		let vm = this.viewModel;

		this.options.forEach(option => {
			let item = vm.get(option.value, this._viewModelItemValueFieldName);

			if (item) {
				option.selected = true;
				option.disabled = item[this._viewModelItemDisabledFieldName];
			} else {
				option.selected = false;
			}
		});
	},

	/**
	 * @typesign () -> boolean;
	 */
	open() {
		if (this._opened) {
			return false;
		}

		this._opened = true;

		this._valueWhenOpened = this.viewModel.map(item => item[this._viewModelItemValueFieldName]);

		this.$('button').check();
		this.$('menu').open();

		let loadedList = this.$('loaded-list');

		if (loadedList) {
			nextTick(() => {
				loadedList.checkLoading();
			});
		}

		let filteredList = this.filteredList;

		if (filteredList === void 0) {
			filteredList = this.filteredList = this.$('filtered-list');
		}

		if (filteredList) {
			filteredList.focus();
		} else {
			this._focusOptions();
		}

		this._documentFocusInListening = this.listenTo(document, 'focusin', this._onDocumentFocusIn);

		if (!this.props.focused) {
			this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
		}

		return true;
	},

	/**
	 * @typesign () -> boolean;
	 */
	close() {
		if (!this._opened) {
			return false;
		}

		this._opened = false;

		this.$('button').uncheck();
		this.$('menu').close();

		this._documentFocusInListening.stop();

		if (!this.props.focused) {
			this._documentKeyDownListening.stop();
		}

		if (this.props.multiple) {
			if (!isEqualArray(
				this.viewModel.map(item => item[this._viewModelItemValueFieldName]),
				this._valueWhenOpened
			)) {
				this.emit('change');
			}
		}

		return true;
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
		if (!this.element.contains(evt.target.parentNode)) {
			this.close();
		}
	},

	/**
	 * @typesign () -> OpalComponents.OpalSelect;
	 */
	focus() {
		this.$('button').focus();
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalSelect;
	 */
	blur() {
		this.$('button').blur();
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
		let options = this.options;
		let optionForFocus;

		for (let i = 0, l = options.length; i < l; i++) {
			let option = options[i];

			if (!option.props.disabled) {
				if (option.selected) {
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
