import {
	Cell,
	define,
	IEvent,
	ObservableList,
	Utils
	} from 'cellx';
import {
	Component,
	Components,
	d,
	getText,
	IComponentElement,
	IDisposableListening
	} from 'rionite';
import '../../assets/icons/opal-components__icon-chevron-down.svg';
import { isFocusable } from '../../Utils/isFocusable';
import { OpalButton } from '../opal-button';
import { OpalDropdown } from '../opal-dropdown';
import { OpalFilteredList } from '../opal-filtered-list';
import { OpalLoadedList } from '../opal-loaded-list';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import { isEqualArray } from './isEqualArray';
import { OpalSelectOption } from './opal-select-option';
import template = require('./template.nelm');

let { nextTick } = Utils;
let { RtIfThen, RtRepeat } = Components;

let map = Array.prototype.map;

export type TDataList = ObservableList<{ [name: string]: any }>;
export type TViewModel = ObservableList<{ [name: string]: any }>;

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
		addNewItemKeypath: { type: String, readonly: true },
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

	template
})
export class OpalSelect extends Component {
	static OpalSelectOption = OpalSelectOption;

	static defaultDataListItemSchema = defaultDataListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	dataList: TDataList | null;
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemDisabledFieldName: string;

	_addNewItem: ((text: string) => Promise<{ [name: string]: string }>) | undefined;

	viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	optionElements: NodeListOf<IComponentElement>;
	options: Array<OpalSelectOption>;
	optionsCell: Cell<Array<OpalSelectOption>>;

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

			define(this, 'dataList', () => {
				return getDataList.call(context);
			});

			let dataListItemSchema = input.datalistItemSchema;
			let defaultDataListItemSchema = (this.constructor as typeof OpalSelect).defaultDataListItemSchema;

			this._dataListItemValueFieldName = dataListItemSchema.value || defaultDataListItemSchema.value;
			this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
			this._dataListItemDisabledFieldName = dataListItemSchema.disabled || defaultDataListItemSchema.disabled;
		} else {
			this.dataList = null;
		}

		let vmItemSchema = input.viewModelItemSchema;
		let defaultVMItemSchema = (this.constructor as typeof OpalSelect).defaultViewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemDisabledFieldName = vmItemSchema.disabled || defaultVMItemSchema.disabled;

		let vm;

		if (input.viewModelKeypath) {
			vm = Function(`return this.${ input.viewModelKeypath };`).call(this.ownerComponent || window);

			if (!vm) {
				throw new TypeError('"viewModel" is not defined');
			}
		} else {
			vm = new ObservableList();
		}

		define(this, {
			viewModel: vm,

			options(this: OpalSelect): Array<OpalSelectOption> {
				return this.optionElements ?
					map.call(this.optionElements, (option: IComponentElement) => option.$component) :
					[];
			},

			text(this: OpalSelect): string {
				let text = this.viewModel.map((item) => item[this._viewModelItemTextFieldName]).join(', ');

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
			let selectedOptions: Array<OpalSelectOption> | undefined;

			if (value) {
				if (!Array.isArray(value)) {
					throw new TypeError('value must be an array');
				}

				if (value.length) {
					if (input.multiple) {
						selectedOptions = this.options.filter((option) => value.indexOf(option.value) != -1);
					} else {
						value = value[0];

						let selectedOption = this.options.find((option) => option.value == value);

						if (selectedOption) {
							selectedOptions = [selectedOption];
						}
					}
				}
			} else {
				if (input.multiple) {
					selectedOptions = this.options.filter((option) => option.selected);
				} else {
					let selectedOption = this.options.find((option) => option.selected);

					if (selectedOption) {
						selectedOptions = [selectedOption];
					}
				}
			}

			if (selectedOptions && selectedOptions.length) {
				this.viewModel.addRange(selectedOptions.map((option) => ({
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
		this.listenTo(this, {
			'input-value-change': this._onInputValueChange,
			'input-focused-change': this._onInputFocusedChange
		});

		this.listenTo(this.viewModel, 'change', this._onViewModelChange);

		this.listenTo('button', {
			focus: this._onButtonFocus,
			blur: this._onButtonBlur,
			click: this._onButtonClick
		});

		this.listenTo('menu', {
			'input-opened-change': this._onMenuInputOpenedChange,
			'<opal-select-option>select': this._onMenuSelectOptionSelect,
			'<opal-select-option>deselect': this._onMenuSelectOptionDeselect,
			'<opal-text-input>confirm': this._onMenuTextInputConfirm,
			'<*>change': this._onMenuChange
		});

		let loadedList = this.$('loaded-list');

		if (loadedList) {
			this.listenTo(loadedList, 'loaded', this._onLoadedListLoaded);
		}
	}

	_onInputValueChange(evt: IEvent) {
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
					this.options.forEach((option) => {
						let optionValue = option.value;
						let itemIndex = vm.findIndex((item) => item[vmItemValueFieldName] == optionValue);

						if (value.indexOf(optionValue) == -1) {
							if (itemIndex != -1) {
								vm.removeAt(itemIndex);
							}
						} else if (itemIndex == -1) {
							vm.add({
								[vmItemValueFieldName]: optionValue,
								[vmItemTextFieldName]: option.text
							});
						}
					});
				} else {
					value = value[0];

					if (!vm.length || value != vm.get(0)![vmItemValueFieldName]) {
						if (!this.options.some((option) => {
							if (option.value != value) {
								return false;
							}

							vm.set(0, {
								[vmItemValueFieldName]: value,
								[vmItemTextFieldName]: option.text
							});

							return true;
						})) {
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

	_onInputFocusedChange(evt: IEvent) {
		if (evt.value) {
			if (!this._documentKeyDownListening) {
				this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
			}

			this.focus();
		} else {
			if (!this._opened) {
				this._documentKeyDownListening!.stop();
				this._documentKeyDownListening = null;
			}

			this.blur();
		}
	}

	_onViewModelChange() {
		this._updateOptions();
	}

	_onButtonFocus() {
		this.input.focused = true;
		this.emit('focus');
	}

	_onButtonBlur() {
		this.input.focused = false;
		this.emit('blur');
	}

	_onButtonClick(evt: IEvent<OpalButton>) {
		if (evt.target.checked) {
			this.open();
		} else {
			this.close();
		}
	}

	_onMenuInputOpenedChange(evt: IEvent) {
		if (!evt.value) {
			this.close();
		}
	}

	_onMenuSelectOptionSelect(evt: IEvent<OpalSelectOption>) {
		let vm = this.viewModel;
		let vmItem = {
			[this._viewModelItemValueFieldName]: evt.target.value,
			[this._viewModelItemTextFieldName]: evt.target.text
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
	}

	_onMenuSelectOptionDeselect(evt: IEvent<OpalSelectOption>) {
		if (this.input.multiple) {
			let value = evt.target.value;
			this.viewModel.removeAt(this.viewModel.findIndex((item) => item.value == value));
		} else {
			evt.target.select();

			this.close();
			this.focus();
		}
	}

	_onMenuTextInputConfirm(evt: IEvent<OpalTextInput>) {
		let textInput = evt.target;

		if (textInput !== this.$('new-item-input')) {
			return;
		}

		let addNewItemKeypath = this.input.addNewItemKeypath;

		if (!addNewItemKeypath) {
			throw new TypeError('Input "addNewItemKeypath" is required');
		}

		let addNewItem = this._addNewItem ||
			(this._addNewItem = Function(`return this.${ addNewItemKeypath };`).call(this.ownerComponent || window));

		if (!addNewItem) {
			throw new TypeError('"addNewItem" is not defined');
		}

		let text = textInput.value;

		textInput.clear();
		textInput.input.loading = true;
		textInput.input.disabled = true;

		addNewItem(text).then((newItem: { [name: string]: string }) => {
			textInput.input.loading = false;
			textInput.input.disabled = false;

			let value = newItem[this._viewModelItemValueFieldName];
			let text = newItem[this._viewModelItemTextFieldName];

			if (this.dataList) {
				this.dataList.add({
					[this._dataListItemValueFieldName]: value,
					[this._dataListItemTextFieldName]: text
				});
			}

			let loadedList = this.$<OpalLoadedList>('loaded-list');

			if (loadedList) {
				loadedList.input.query = '';
			}

			let vm = this.viewModel;
			let vmItem = {
				[this._viewModelItemValueFieldName]: value,
				[this._viewModelItemTextFieldName]: text
			};

			if (this.input.multiple) {
				vm.add(vmItem);
				this.emit('input');
			} else {
				if (vm.length) {
					vm.set(0, vmItem);
				} else {
					vm.add(vmItem);
				}

				this.close();
				this.focus();

				this.emit('input');
				this.emit('change');
			}
		}, () => {
			textInput.input.loading = false;
			textInput.input.disabled = false;
		});
	}

	_onMenuChange(evt: IEvent) {
		if (!(evt.target instanceof RtIfThen) && !(evt.target instanceof RtRepeat)) {
			return;
		}

		this.optionsCell.pull();
		this._updateOptions();
	}

	_onLoadedListLoaded() {
		if (this._onсeFocusedAfterLoading) {
			return;
		}

		this._onсeFocusedAfterLoading = true;

		nextTick(() => {
			this._focusOptions();

			let focusTarget = this.$<HTMLElement | OpalTextInput>('focus');

			if (!focusTarget) {
				let filteredList = this.$<OpalFilteredList>('filtered-list');

				if (filteredList) {
					focusTarget = filteredList.$<OpalTextInput>('query-input');
				}
			}

			if (focusTarget) {
				nextTick(() => {
					focusTarget!.focus();
				});
			}
		});
	}

	_updateOptions() {
		let vm = this.viewModel;
		let vmItemValueFieldName = this._viewModelItemValueFieldName;
		let vmItemDisabledFieldName = this._viewModelItemDisabledFieldName;

		this.options.forEach((option) => {
			let value = option.value;
			let item = vm.find((item) => item[vmItemValueFieldName] == value);

			if (item) {
				option.selected = true;
				option.disabled = item[vmItemDisabledFieldName];
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

		this._valueOnOpen = this.viewModel.map((item) => item[this._viewModelItemValueFieldName]);

		this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);

		if (!this._documentKeyDownListening) {
			this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
		}

		this.$<OpalButton>('button')!.check();
		this.$<OpalDropdown>('menu')!.open();

		let loadedList = this.$<OpalLoadedList>('loaded-list');

		if (loadedList) {
			nextTick(() => {
				loadedList!.checkLoading();
			});
		}

		let focusTarget = this.$<HTMLElement | OpalTextInput>('focus');

		if (focusTarget) {
			focusTarget.focus();
		} else {
			let filteredList = this.$<OpalFilteredList>('filtered-list');

			if (filteredList) {
				focusTarget = filteredList.$<OpalTextInput>('query-input');
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
			this._documentKeyDownListening!.stop();
			this._documentKeyDownListening = null;
		}

		this.$<OpalButton>('button')!.uncheck();
		this.$<OpalDropdown>('menu')!.close();

		if (this.input.multiple) {
			if (!isEqualArray(
				this.viewModel.map((item) => item[this._viewModelItemValueFieldName]),
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
		if (!isFocusable(evt.target as HTMLElement)) {
			return;
		}

		if (!this.element.contains((evt.target as Node).parentNode!)) {
			this.close();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		switch (evt.which) {
			case 32 /* Space */: {
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
			case 38 /* Up */: {
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
			case 40 /* Down */: {
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
			case 27 /* Esc */: {
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
		this.$<OpalSelect>('button')!.focus();
		return this;
	}

	blur(): OpalSelect {
		this.$<OpalSelect>('button')!.blur();
		return this;
	}
}

export { OpalSelectOption };
