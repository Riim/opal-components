import './index.css';
import '../../assets/icons/opal-components__icon-chevron-down.svg';

import { IEvent, ObservableList, define, Utils } from 'cellx';
import { IndexedList } from 'cellx-indexed-collections';
import { IDisposableListening, getText, IComponentElement, Component, Components, d } from 'rionite';
import OpalButton from '../opal-button';
import OpalTextInput from '../opal-text-input';
import OpalDropdown from '../opal-dropdown';
import OpalLoadedList from '../opal-loaded-list';
import OpalFilteredList from '../opal-filtered-list';
import OpalSelectOption from './opal-select-option';
import isEqualArray from './isEqualArray';
import template = require('./index.nelm');

let { nextUID, nextTick } = Utils;
let { RtIfThen, RtRepeat } = Components;

let map = Array.prototype.map;

export type TDataList = ObservableList<{ [name: string]: any }>;
export type TViewModel = IndexedList<{ [name: string]: any }>;

let defaultDataListItemSchema = { value: 'value', text: 'text', disabled: 'disabled' };
let defaultVMItemSchema = { value: 'value', text: 'text', disabled: 'disabled' };

@d.Component<OpalSelect>({
	elementIs: 'opal-select',

	input: {
		viewType: String,
		size: 'm',
		multiple: { default: false, readonly: true },
		datalistKeypath: { type: String, readonly: true },
		datalistItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
		value: eval,
		viewModelKeypath: { type: String, readonly: true },
		viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
		text: String,
		maxTextLength: 20,
		placeholder: getText.t('Не выбрано'),
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template,

	events: {
		':component': {
			'input-value-change'(evt: IEvent) {
				let vm = this.viewModel;
				let value = evt.value;

				if (value) {
					if (!Array.isArray(value)) {
						throw new TypeError('value must be an array');
					}

					if (value.length) {
						let vmItemValueFieldName = this._viewModelItemValueFieldName;
						let vmItemTextFieldName = this._viewModelItemTextFieldName;

						if (this.input.multiple) {
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
									if (option.value != value) {
										return false;
									}

									vm.set(0, {
										[vmItemValueFieldName]: value,
										[vmItemTextFieldName]: option.text
									});

									return true;
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

			'input-focused-change'(evt: IEvent) {
				if (evt.value) {
					if (!this._documentKeyDownListening) {
						this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
					}

					this.focus();
				} else {
					if (!this._opened) {
						(this._documentKeyDownListening as IDisposableListening).stop();
						this._documentKeyDownListening = null;
					}

					this.blur();
				}
			}
		},

		button: {
			focus() {
				this.input.focused = true;
				this.emit('focus');
			},

			blur() {
				this.input.focused = false;
				this.emit('blur');
			},

			click(evt: IEvent) {
				if ((evt.target as OpalButton).checked) {
					this.open();
				} else {
					this.close();
				}
			}
		},

		menu: {
			'input-opened-change'(evt: IEvent) {
				if (!evt.value) {
					this.close();
				}
			},

			'<opal-select-option>select'(evt: IEvent) {
				let vm = this.viewModel;
				let vmItem = {
					[this._viewModelItemValueFieldName]: (evt.target as OpalSelectOption).value,
					[this._viewModelItemTextFieldName]: (evt.target as OpalSelectOption).text
				};

				if (this.input.multiple) {
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

			'<opal-select-option>deselect'(evt: IEvent) {
				if (this.input.multiple) {
					this.viewModel.remove(
						this.viewModel.get((evt.target as OpalSelectOption).value, this._viewModelItemValueFieldName)
					);
				} else {
					(evt.target as OpalSelectOption).select();

					this.close();
					this.focus();
				}
			},

			'<opal-text-input>confirm'(evt: IEvent) {
				let textInput = evt.target as OpalTextInput;

				if (textInput !== this.$('new-item-input')) {
					return;
				}

				let itemValue = '_' + Math.floor(Math.random() * 1e9) + '_' + nextUID();
				let itemText = textInput.value;

				let dataList = this.dataList;

				if (dataList) {
					dataList.add({
						[this._dataListItemValueFieldName]: itemValue,
						[this._dataListItemTextFieldName]: itemText
					});
				}

				textInput.clear();

				let loadedList = this.$('loaded-list') as OpalLoadedList | null;

				if (loadedList) {
					loadedList.input.query = '';
				}

				this.emit('input');

				let vm = this.viewModel;
				let vmItem = {
					[this._viewModelItemValueFieldName]: itemValue,
					[this._viewModelItemTextFieldName]: itemText
				};

				if (this.input.multiple) {
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

			'<*>change'(evt: IEvent) {
				if (!(evt.target instanceof RtIfThen) && !(evt.target instanceof RtRepeat)) {
					return;
				}

				(this as any).optionsCell.pull();
				this._updateOptions();

				return false;
			}
		},

		'loaded-list': {
			loaded() {
				if (this._onсeFocusedAfterLoading) {
					return;
				}

				this._onсeFocusedAfterLoading = true;

				nextTick(() => {
					this._focusOptions();

					let focusTarget = this.$('focus') as HTMLElement | OpalTextInput | null;

					if (focusTarget) {
						nextTick(() => {
							(focusTarget as HTMLElement).focus();
						});
					} else {
						let filteredList = this.$('filtered-list') as OpalFilteredList | null;

						if (filteredList) {
							focusTarget = filteredList.$('query-input') as OpalTextInput | null;
						}

						if (focusTarget) {
							nextTick(() => {
								(focusTarget as OpalTextInput).focus();
							});
						}
					}
				});
			}
		},

		'btn-close': {
			click() {
				this.close();
				this.focus();
			}
		}
	}
})
export default class OpalSelect extends Component {
	static OpalSelectOption = OpalSelectOption;

	static defaultDataListItemSchema = defaultDataListItemSchema;
	static defaultVMItemSchema = defaultVMItemSchema;

	dataList: TDataList | null;
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemDisabledFieldName: string;

	viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	optionElements: NodeListOf<IComponentElement>;
	options: Array<OpalSelectOption>;

	_opened: boolean = false;

	_valueOnOpen: any;

	_onсeFocusedAfterLoading: boolean = false;

	_documentFocusListening: IDisposableListening;
	_documentKeyDownListening: IDisposableListening | null | undefined;

	initialize() {
		let input = this.input;

		if (input.datalistKeypath) {
			let context = this.ownerComponent || window;
			let getDataList = Function(`return this.${ input.datalistKeypath };`);

			define(this, 'dataList', function() {
				return getDataList.call(context);
			});

			let dataListItemSchema = input.datalistItemSchema;

			this._dataListItemValueFieldName = dataListItemSchema.value || defaultDataListItemSchema.value;
			this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
			this._dataListItemDisabledFieldName = dataListItemSchema.disabled || defaultDataListItemSchema.disabled;
		} else {
			this.dataList = null;
		}

		let vmItemSchema = input.viewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;

		let vm;

		if (input.viewModelKeypath) {
			vm = Function(`return this.${ input.viewModelKeypath };`).call(this.ownerComponent || window);

			if (!vm) {
				throw new TypeError('viewModel is not defined');
			}
		} else {
			vm = new IndexedList(undefined, { indexes: [this._viewModelItemValueFieldName] });
		}

		define(this, {
			viewModel: vm,

			options(this: OpalSelect): Array<OpalSelectOption> {
				return this.optionElements ?
					map.call(this.optionElements, (option: IComponentElement) => option.$component) :
					[];
			},

			text(this: OpalSelect): string {
				let text = this.viewModel.map(item => item[this._viewModelItemTextFieldName]).join(', ');

				if (!text) {
					return this.input.placeholder;
				}

				if (text.length > this.input.maxTextLength) {
					text = getText.nt('Выбран{n:|о|о} {n}', this.viewModel.length);
				}

				return text;
			}
		});
	}

	ready() {
		this.optionElements = this.element.getElementsByClassName('opal-select-option') as
			NodeListOf<IComponentElement>;

		let input = this.input;

		if (input.viewModel) {
			this._updateOptions();
		} else {
			let value = input.value;
			let selectedOptions: Array<OpalSelectOption>;

			if (value) {
				if (!Array.isArray(value)) {
					throw new TypeError('value must be an array');
				}

				if (value.length) {
					if (input.multiple) {
						selectedOptions = this.options.filter(option => value.indexOf(option.value) != -1);
					} else {
						value = value[0];

						let selectedOption = (this.options as any)
							.find((option: OpalSelectOption) => option.value == value);

						selectedOptions = selectedOption ? [selectedOption] : [];
					}
				} else {
					selectedOptions = [];
				}
			} else {
				if (input.multiple) {
					selectedOptions = this.options.filter(option => option.selected);
				} else {
					let selectedOption = (this.options as any).find((option: OpalSelectOption) => option.selected);
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
	}

	elementAttached() {
		this.listenTo(this.viewModel, 'change', this._onViewModelChange);
	}

	_onViewModelChange() {
		this._updateOptions();
	}

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
	}

	open(): boolean {
		if (this._opened) {
			return false;
		}

		this._opened = true;

		this._valueOnOpen = this.viewModel.map(item => item[this._viewModelItemValueFieldName]);

		this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);

		if (!this._documentKeyDownListening) {
			this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
		}

		(this.$('button') as OpalButton).check();
		(this.$('menu') as OpalDropdown).open();

		let loadedList = this.$('loaded-list') as OpalLoadedList;

		if (loadedList) {
			nextTick(() => {
				loadedList.checkLoading();
			});
		}

		let focusTarget = this.$('focus') as HTMLElement | OpalTextInput | null;

		if (focusTarget) {
			focusTarget.focus();
		} else {
			let filteredList = this.$('filtered-list') as OpalFilteredList | null;

			if (filteredList) {
				focusTarget = filteredList.$('query-input') as OpalTextInput | null;
			}

			if (focusTarget) {
				focusTarget.focus();
			} else {
				this._focusOptions();
			}
		}

		return true;
	}

	close(): boolean {
		if (!this._opened) {
			return false;
		}

		this._opened = false;

		this._documentFocusListening.stop();

		if (!this.input.focused) {
			(this._documentKeyDownListening as IDisposableListening).stop();
			this._documentKeyDownListening = null;
		}

		(this.$('button') as OpalButton).uncheck();
		(this.$('menu') as OpalDropdown).close();

		if (this.input.multiple) {
			if (!isEqualArray(
				this.viewModel.map(item => item[this._viewModelItemValueFieldName]),
				this._valueOnOpen
			)) {
				this.emit('change');
			}
		}

		return true;
	}

	toggle(value?: boolean): boolean {
		if (value !== undefined) {
			return value ? this.open() : !this.close();
		}
		return this.open() || !this.close();
	}

	_onDocumentFocus(evt: Event) {
		if (!this.element.contains((evt.target as Node).parentNode as Node)) {
			this.close();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		switch (evt.which) {
			case 32/* Space */: {
				evt.preventDefault();

				if (this._opened) {
					if (this.input.focused) {
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
							if (options[i].input.focused) {
								do {
									let option = options[--i];

									if (!option.input.disabled) {
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
							if (options[i].input.focused) {
								do {
									let option = options[++i];

									if (!option.input.disabled) {
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
	}

	_focusOptions(): boolean {
		let options = this.options;
		let optionForFocus;

		for (let i = 0, l = options.length; i < l; i++) {
			let option = options[i];

			if (!option.input.disabled) {
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

	focus(): OpalSelect {
		(this.$('button') as OpalSelect).focus();
		return this;
	}

	blur(): OpalSelect {
		(this.$('button') as OpalSelect).blur();
		return this;
	}
}

export { OpalSelectOption };
