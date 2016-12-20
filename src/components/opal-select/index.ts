import './index.css';
import '../../assets/icons/opal-components__icon-chevron-down.svg';

import { IEvent, define, Utils } from 'cellx';
import { IndexedList } from 'cellx-indexed-collections';
import { IDisposableListening, getText, IComponentElement, Component, d, Components, ComponentTemplate } from 'rionite';
import OpalButton from '../opal-button';
import OpalTextInput from '../opal-text-input';
import OpalDropdown from '../opal-dropdown';
import OpalLoadedList from '../opal-loaded-list';
import OpalFilteredList from '../opal-filtered-list';
import OpalSelectOption from './opal-select-option';
import isEqualArray from './isEqualArray';
import template = require('./index.html');

export { default as OpalSelectOption } from './opal-select-option';

let { nextUID, nextTick } = Utils;
let { RtIfThen, RtRepeat } = Components;

let map = Array.prototype.map;

export type TDataList = IndexedList<{ value: string, text: string }>;
export type TViewModel = IndexedList<Object>;

let defaultVMItemSchema = { value: 'value', text: 'text', disabled: 'disabled' };

@d.Component<OpalSelect>({
	elementIs: 'opal-select',

	props: {
		type: String,
		size: 'm',
		datalist: { type: String, readonly: true },
		value: Object,
		viewModel: { type: String, readonly: true },
		viewModelItemSchema: { default: defaultVMItemSchema, readonly: true },
		text: String,
		placeholder: getText.t('Не выбрано'),
		multiple: { default: false, readonly: true },
		allowInput: false,
		focused: false,
		tabIndex: 0,
		disabled: false
	},

	template: new ComponentTemplate(template),

	events: {
		button: {
			focusin() {
				this.props['focused'] = true;
				this.emit('focusin');
			},

			focusout() {
				this.props['focused'] = false;
				this.emit('focusout');
			},

			click(evt: IEvent) {
				(evt['originalEvent'] || evt).preventDefault();

				if ((evt.target as OpalButton).checked) {
					this.open();
				} else {
					this.close();
				}
			}
		},

		menu: {
			close() {
				this.close();
			},

			confirminput(evt: IEvent) {
				if (!this.props['allow-input']) {
					return;
				}

				let textInput = evt.target as OpalTextInput;

				let itemValue = '_' + Math.floor(Math.random() * 1e9) + '_' + nextUID();
				let itemText = textInput.value;

				let dataList = this.dataList;

				if (dataList) {
					dataList.add({ value: itemValue, text: itemText });
				}

				textInput.clear();

				let loadedList = this.loadedList;

				if (loadedList === undefined) {
					loadedList = this.loadedList = this.$('loaded-list') as OpalLoadedList;
				}

				if (loadedList) {
					loadedList.props['query'] = '';
				}

				this.emit('input');

				let vm = this.viewModel;
				let vmItem = {
					[this._viewModelItemValueFieldName]: itemValue,
					[this._viewModelItemTextFieldName]: itemText
				};

				if (this.props['multiple']) {
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

			change(evt: IEvent) {
				if (!(evt.target instanceof RtIfThen) && !(evt.target instanceof RtRepeat)) {
					return;
				}

				(this as any)._options.pull();
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

				if (this.props['multiple']) {
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

				if (this.props['multiple']) {
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
					let filteredList = this.$('filtered-list') as OpalFilteredList;

					if (filteredList) {
						if (
							document.activeElement == (filteredList.$('query-input') as Component).$('input') as
								HTMLElement
						) {
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
})
export default class OpalSelect extends Component {
	static OpalSelectOption = OpalSelectOption;

	dataList: TDataList;
	viewModel: TViewModel;

	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	filteredList: OpalFilteredList;
	loadedList: OpalLoadedList;

	optionElements: NodeListOf<IComponentElement>;
	options: Array<OpalSelectOption>;

	_opened: boolean = false;

	_valueAtOpening: any;

	_documentFocusInListening: IDisposableListening;
	_documentKeyDownListening: IDisposableListening;

	initialize() {
		let props = this.props;
		let dataList = props['datalist'];

		if (dataList) {
			let context = this.ownerComponent || window;
			let getDataList = Function(`return this.${ dataList };`);

			define(this, 'dataList', function() {
				return getDataList.call(context);
			});
		}

		let vm = props['view-model'];
		let vmItemSchema = props['view-model-item-schema'];

		if (vm) {
			vm = Function(`return this.${ vm };`).call(this.ownerComponent || window);

			if (!vm) {
				throw new TypeError('viewModel is not defined');
			}
		} else {
			vm = new IndexedList(undefined, { indexes: [vmItemSchema.value] });
		}

		define(this, 'viewModel', vm);

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;

		define(this, {
			options(this: OpalSelect): Array<OpalSelectOption> {
				return this.optionElements ?
					map.call(this.optionElements, (option: IComponentElement) => option.$c) :
					[];
			},

			text(this: OpalSelect): string {
				return this.viewModel.map(item => item[this._viewModelItemTextFieldName]).join(', ') ||
					this.props['placeholder'];
			}
		});
	}

	ready() {
		this.optionElements = this.element.getElementsByClassName('opal-select-option') as
			NodeListOf<IComponentElement>;

		let props = this.props;

		if (props['view-model']) {
			this._updateOptions();
		} else {
			let value = props['value'];
			let selectedOptions: Array<OpalSelectOption>;

			if (value) {
				if (!Array.isArray(value)) {
					throw new TypeError('value must be an array');
				}

				if (value.length) {
					if (props['multiple']) {
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
				if (props['multiple']) {
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
		this.listenTo(this.props, 'change:value', this._onPropsValueChange);
		this.listenTo(this.viewModel, 'change', this._onViewModelChange);
	}

	elementAttributeChanged(name: string, oldValue: any, value: any) {
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
	}

	_onPropsValueChange(evt: IEvent) {
		let vm = this.viewModel;
		let value = evt['value'];

		if (value) {
			if (!Array.isArray(value)) {
				throw new TypeError('value must be an array');
			}

			if (value.length) {
				let vmItemValueFieldName = this._viewModelItemValueFieldName;
				let vmItemTextFieldName = this._viewModelItemTextFieldName;

				if (this.props['multiple']) {
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

		this._valueAtOpening = this.viewModel.map(item => item[this._viewModelItemValueFieldName]);

		this._documentFocusInListening = this.listenTo(document, 'focusin', this._onDocumentFocusIn);

		if (!this.props['focused']) {
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

		let filteredList = this.filteredList;

		if (filteredList === undefined) {
			filteredList = this.filteredList = this.$('filtered-list') as OpalFilteredList;
		}

		if (filteredList) {
			filteredList.focus();
		} else {
			this._focusOptions();
		}

		return true;
	}

	close(): boolean {
		if (!this._opened) {
			return false;
		}

		this._opened = false;

		this._documentFocusInListening.stop();

		if (!this.props['focused']) {
			this._documentKeyDownListening.stop();
		}

		(this.$('button') as OpalButton).uncheck();
		(this.$('menu') as OpalDropdown).close();

		if (this.props['multiple']) {
			if (!isEqualArray(
				this.viewModel.map(item => item[this._viewModelItemValueFieldName]),
				this._valueAtOpening
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

	_onDocumentFocusIn(evt: Event) {
		if (!this.element.contains((evt.target as Node).parentNode as Node)) {
			this.close();
		}
	}

	focus(): OpalSelect {
		(this.$('button') as OpalSelect).focus();
		return this;
	}

	blur(): OpalSelect {
		(this.$('button') as OpalSelect).blur();
		return this;
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		switch (evt.which) {
			case 32/* Space */: {
				evt.preventDefault();

				if (this._opened) {
					if (this.props['focused']) {
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
							if (options[i].props['focused']) {
								do {
									let option = options[--i];

									if (!option.props['disabled']) {
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
							if (options[i].props['focused']) {
								do {
									let option = options[++i];

									if (!option.props['disabled']) {
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

			if (!option.props['disabled']) {
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
}