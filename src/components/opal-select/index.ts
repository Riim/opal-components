import { getText } from '@riim/gettext';
import { nextTick } from '@riim/next-tick';
import {
	Cell,
	define,
	IEvent,
	ObservableList
	} from 'cellx';
import { computed, observable } from 'cellx-decorators';
import {
	Component,
	IComponentElement,
	IDisposableListening,
	RtIfThen,
	RtRepeat
	} from 'rionite';
import { isFocusable } from '../../utils/isFocusable';
import { OpalButton } from '../opal-button';
import { OpalDropdown } from '../opal-dropdown';
import { OpalFilteredList } from '../opal-filtered-list';
import { OpalLoadedList } from '../opal-loaded-list';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import { isEqualArray } from './isEqualArray';
import { OpalSelectOption } from './opal-select-option';
import template from './template.nelm';

export { OpalSelectOption };

let map = Array.prototype.map;

export interface IDataListItem {
	[name: string]: any;
}

export type TDataList = ObservableList<IDataListItem>;
export type TViewModel = ObservableList<IDataListItem>;

let defaultDataListItemSchema = Object.freeze({
	value: 'value',
	text: 'text',
	disabled: 'disabled'
});
let defaultVMItemSchema = Object.freeze({ value: 'value', text: 'text', disabled: 'disabled' });

@Component.Config<OpalSelect>({
	elementIs: 'OpalSelect',

	params: {
		viewType: String,
		size: 'm',
		multiple: { default: false, readonly: true },
		dataList: { type: Object },
		dataListKeypath: { type: String, readonly: true },
		dataListItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
		value: eval,
		viewModel: { type: Object },
		viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
		addNewItem: { type: Object, readonly: true },
		text: String,
		maxTextLength: 20,
		placeholder: getText.t('Не выбрано'),
		tabIndex: 0,
		focused: false,
		disabled: false
	},

	template,

	events: {
		'menu-slot': {
			'<*>loaded'(evt) {
				if (this._onсeFocusedAfterLoading || evt.target !== this.$('loaded-list')) {
					return;
				}

				this._onсeFocusedAfterLoading = true;

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
			}
		}
	}
})
export class OpalSelect extends Component {
	static defaultDataListItemSchema = defaultDataListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	dataList: TDataList | null;
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemDisabledFieldName: string;

	@observable viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	@computed
	get value(): Array<string> {
		return this.viewModel.map(item => item[this._viewModelItemValueFieldName]);
	}

	_addNewItem: ((text: string) => Promise<{ [name: string]: string }>) | null;

	@computed
	get _buttonText(): string {
		let text = this.viewModel
			.map((item): string => item[this._viewModelItemTextFieldName])
			.join(', ');

		if (!text) {
			return this.params.placeholder;
		}

		if (text.length > this.params.maxTextLength) {
			text = getText.nt('Выбран{n:|о|о} {n}', this.viewModel.length);
		}

		return text;
	}

	optionElements: NodeListOf<IComponentElement>;

	optionsCell: Cell<Array<OpalSelectOption>>;
	@computed
	get options(): Array<OpalSelectOption> {
		return map.call(this.optionElements, (option: IComponentElement) => option.$component);
	}

	_needOptionsUpdating = false;

	_notUpdateOptions = false;

	_opened: boolean = false;
	_valueOnOpen: Array<string>;

	_onсeFocusedAfterLoading: boolean = false;

	_isParamDataListSpecified: boolean;

	_documentFocusListening: IDisposableListening;
	_documentKeyDownListening: IDisposableListening | null | undefined;

	initialize() {
		let params = this.params;

		if (params.dataListKeypath) {
			define(
				this,
				'dataList',
				new Cell(Function(`return this.${params.dataListKeypath};`), {
					context: this.ownerComponent || window
				})
			);

			this._isParamDataListSpecified = true;
		} else if (params.$specified.has('dataList')) {
			define(this, 'dataList', () => params.dataList);
			this._isParamDataListSpecified = true;
		} else {
			this.dataList = null;
			this._isParamDataListSpecified = false;
		}

		let dataListItemSchema = params.dataListItemSchema;
		let defaultDataListItemSchema = (this.constructor as typeof OpalSelect)
			.defaultDataListItemSchema;

		this._dataListItemValueFieldName =
			dataListItemSchema.value || defaultDataListItemSchema.value;
		this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
		this._dataListItemDisabledFieldName =
			dataListItemSchema.disabled || defaultDataListItemSchema.disabled;

		this.viewModel = params.viewModel || new ObservableList();

		let vmItemSchema = params.viewModelItemSchema;
		let defaultVMItemSchema = (this.constructor as typeof OpalSelect)
			.defaultViewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemDisabledFieldName =
			vmItemSchema.disabled || defaultVMItemSchema.disabled;

		this._addNewItem = params.addNewItem;
	}

	ready() {
		this.optionElements = this.element.getElementsByClassName('OpalSelectOption') as NodeListOf<
			IComponentElement
		>;

		if (this.params.viewModel && !this.params.value) {
			this._needOptionsUpdating = true;
		} else {
			this._notUpdateOptions = true;
			this.$<OpalDropdown>('menu')!.renderContent();
			this._notUpdateOptions = false;
			this._initViewModel();
		}
	}

	_initViewModel() {
		let value = this.params.value;
		let selectedOptions: Array<OpalSelectOption> | undefined;

		if (value) {
			if (!Array.isArray(value)) {
				throw new TypeError('Parameter "value" must be an array');
			}

			this._notUpdateOptions = true;
			this.viewModel.clear();

			if (value.length) {
				if (this.params.multiple) {
					selectedOptions = this.options.filter(
						option => value.indexOf(option.value) != -1
					);
				} else {
					value = value[0];

					let selectedOption = this.options.find(option => option.value == value);

					if (selectedOption) {
						selectedOptions = [selectedOption];
					}
				}
			}
		} else if (this.params.multiple) {
			selectedOptions = this.options.filter(option => option.selected);
		} else {
			let selectedOption = this.options.find(option => option.selected);

			if (selectedOption) {
				selectedOptions = [selectedOption];
			}
		}

		if (selectedOptions && selectedOptions.length) {
			this._notUpdateOptions = true;
			this.viewModel.addRange(
				selectedOptions.map(option => ({
					[this._viewModelItemValueFieldName]: option.value,
					[this._viewModelItemTextFieldName]: option.text
				}))
			);
		}

		this._notUpdateOptions = false;

		if (value) {
			this._updateOptions();
		}
	}

	elementAttached() {
		if (this.params.focused) {
			this._documentKeyDownListening = this.listenTo(
				document,
				'keydown',
				this._onDocumentKeyDown
			);
			this.focus();
		}

		this.listenTo(this, {
			'param-value-change': this._onParamValueChange,
			'param-view-model-change': this._onParamViewModelChange,
			'param-focused-change': this._onParamFocusedChange
		});

		this.listenTo(this.viewModel, 'change', this._onViewModelChange);

		this.listenTo('button', {
			focus: this._onButtonFocus,
			blur: this._onButtonBlur,
			click: this._onButtonClick
		});

		this.listenTo('menu', {
			'param-opened-change': this._onMenuParamOpenedChange,
			'<OpalSelectOption>select': this._onMenuSelectOptionSelect,
			'<OpalSelectOption>deselect': this._onMenuSelectOptionDeselect,
			'<OpalTextInput>confirm': this._onMenuTextInputConfirm,
			'<*>change': this._onMenuChange
		});
	}

	_onParamValueChange(evt: IEvent) {
		let vm = this.viewModel;
		let value: Array<string> | null = evt.data.value;

		if (value) {
			if (!Array.isArray(value)) {
				throw new TypeError('Parameter "value" must be an array');
			}

			if (value.length) {
				let multiple = this.params.multiple;

				if (
					multiple ||
					!vm.length ||
					value[0] != vm.get(0)![this._viewModelItemValueFieldName]
				) {
					if (this._needOptionsUpdating) {
						this._needOptionsUpdating = false;
						this._notUpdateOptions = true;
						this.$<OpalDropdown>('menu')!.renderContent();
						this._notUpdateOptions = false;
						this._updateViewModel(value, multiple);
					} else {
						this._updateViewModel(value, multiple);
					}
				}

				return;
			}
		}

		vm.clear();
	}

	_updateViewModel(value: any, multiple: boolean) {
		let vm = this.viewModel;
		let vmItemValueFieldName = this._viewModelItemValueFieldName;
		let vmItemTextFieldName = this._viewModelItemTextFieldName;

		if (multiple) {
			this.options.forEach(option => {
				let optionValue = option.value;
				let itemIndex = vm.findIndex(item => item[vmItemValueFieldName] == optionValue);

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

			if (
				!this.options.some(option => {
					if (option.value != value) {
						return false;
					}

					vm.set(0, {
						[vmItemValueFieldName]: value,
						[vmItemTextFieldName]: option.text
					});

					return true;
				})
			) {
				vm.clear();
			}
		}
	}

	_onParamViewModelChange(evt: IEvent) {
		if (evt.data.value != this.viewModel) {
			throw new TypeError('Parameter "viewModel" is readonly');
		}
	}

	_onParamFocusedChange(evt: IEvent) {
		if (evt.data.value) {
			if (!this._documentKeyDownListening) {
				this._documentKeyDownListening = this.listenTo(
					document,
					'keydown',
					this._onDocumentKeyDown
				);
			}

			this.focus();

			this.emit('focus');
		} else {
			if (!this._opened) {
				this._documentKeyDownListening!.stop();
				this._documentKeyDownListening = null;
			}

			this.blur();

			this.emit('blur');
		}
	}

	_onViewModelChange() {
		if (!this._needOptionsUpdating && !this._notUpdateOptions) {
			this._updateOptions();
		}
	}

	_onButtonFocus() {
		this.params.focused = true;
	}

	_onButtonBlur() {
		this.params.focused = false;
	}

	_onButtonClick(evt: IEvent<OpalButton>) {
		if (evt.target.checked) {
			this.open();
		} else {
			this.close();
		}
	}

	_onMenuParamOpenedChange(evt: IEvent): false {
		if (!evt.data.value) {
			this.close();
		}

		return false;
	}

	_onMenuSelectOptionSelect(evt: IEvent<OpalSelectOption>): false {
		let vm = this.viewModel;
		let vmItem = {
			[this._viewModelItemValueFieldName]: evt.target.value,
			[this._viewModelItemTextFieldName]: evt.target.text
		};

		if (this.params.multiple) {
			this._notUpdateOptions = true;
			vm.add(vmItem);
			this._notUpdateOptions = false;

			this.emit('select');
		} else {
			if (vm.length) {
				vm.set(0, vmItem);
			} else {
				vm.add(vmItem);
			}

			this.close();
			this.focus();

			this.emit('select');
			this.emit('change');
		}

		return false;
	}

	_onMenuSelectOptionDeselect(evt: IEvent<OpalSelectOption>): false {
		if (this.params.multiple) {
			let value = evt.target.value;
			this._notUpdateOptions = true;
			this.viewModel.removeAt(this.viewModel.findIndex(item => item.value == value));
			this._notUpdateOptions = false;
		} else {
			evt.target.select();

			this.close();
			this.focus();
		}

		this.emit('deselect');

		return false;
	}

	_onMenuTextInputConfirm(evt: IEvent<OpalTextInput>): false | void {
		let textInput = evt.target;

		if (textInput !== this.$('new-item-input')) {
			return;
		}

		if (!this._addNewItem) {
			throw new TypeError('Parameter "addNewItem" is required');
		}

		let text = textInput.value!;

		textInput.clear();
		textInput.params.loading = true;
		textInput.params.disabled = true;

		this._addNewItem(text).then(
			(newItem: { [name: string]: string }) => {
				textInput.params.loading = false;
				textInput.params.disabled = false;

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
					loadedList.params.query = '';
				}

				let vm = this.viewModel;
				let vmItem = {
					[this._viewModelItemValueFieldName]: value,
					[this._viewModelItemTextFieldName]: text
				};

				if (this.params.multiple) {
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
			},
			() => {
				textInput.params.loading = false;
				textInput.params.disabled = false;
			}
		);

		return false;
	}

	_onMenuChange(evt: IEvent) {
		if (
			!this._notUpdateOptions &&
			(evt.target instanceof RtIfThen || evt.target instanceof RtRepeat)
		) {
			this.optionsCell.pull();
			this._updateOptions();
		}
	}

	open(): boolean {
		if (this._opened) {
			return false;
		}

		this._opened = true;
		this._valueOnOpen = this.viewModel.map(
			(item): string => item[this._viewModelItemValueFieldName]
		);

		this._documentFocusListening = this.listenTo(
			document,
			'focus',
			this._onDocumentFocus,
			this,
			true
		);

		if (!this._documentKeyDownListening) {
			this._documentKeyDownListening = this.listenTo(
				document,
				'keydown',
				this._onDocumentKeyDown
			);
		}

		this.$<OpalButton>('button')!.check();
		this._notUpdateOptions = true;
		this.$<OpalDropdown>('menu')!.open();
		this._notUpdateOptions = false;

		if (this._needOptionsUpdating) {
			this._needOptionsUpdating = false;
			this._updateOptions();
		}

		let loadedList = this.$<OpalLoadedList>('loaded-list');

		if (loadedList) {
			loadedList!.checkLoading();
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

		if (!this.params.focused) {
			this._documentKeyDownListening!.stop();
			this._documentKeyDownListening = null;
		}

		this.$<OpalButton>('button')!.uncheck();
		this.$<OpalDropdown>('menu')!.close();

		if (this.params.multiple) {
			if (
				!isEqualArray(
					this.viewModel.map((item): string => item[this._viewModelItemValueFieldName]),
					this._valueOnOpen
				)
			) {
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
				if (this._opened) {
					if (this.params.focused) {
						evt.preventDefault();
						this.close();
					}
				} else {
					evt.preventDefault();
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
							if (options[i].params.focused) {
								do {
									let option = options[--i];

									if (!option.params.disabled && option.element.offsetWidth) {
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
							if (options[i].params.focused) {
								do {
									let option = options[++i];

									if (!option.params.disabled && option.element.offsetWidth) {
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

	_updateOptions() {
		let vm = this.viewModel;
		let vmItemValueFieldName = this._viewModelItemValueFieldName;
		let vmItemDisabledFieldName = this._viewModelItemDisabledFieldName;

		this.options.forEach(option => {
			let value = option.value;
			let item = vm.find(item => item[vmItemValueFieldName] == value);

			if (item) {
				option.selected = true;
				option.disabled = item[vmItemDisabledFieldName];
			} else {
				option.selected = false;
			}
		});
	}

	_focusOptions(): boolean {
		let options = this.options;
		let optionForFocus;

		for (let i = 0, l = options.length; i < l; i++) {
			let option = options[i];

			if (!option.params.disabled) {
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
