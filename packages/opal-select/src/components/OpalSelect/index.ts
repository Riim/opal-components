import { t } from '@riim/gettext';
import { nextTick } from '@riim/next-tick';
import { OpalButton } from '@riim/opal-button';
import { OpalDropdown } from '@riim/opal-dropdown';
import { OpalFilteredList } from '@riim/opal-filtered-list';
import { OpalLoadedList } from '@riim/opal-loaded-list';
import { OpalTextInput } from '@riim/opal-text-input';
import {
	Cell,
	define,
	IEvent,
	ObservableList
	} from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IComponentElement,
	IDisposableListening,
	Param,
	RnIfThen,
	RnRepeat
	} from 'rionite';
import { OpalSelectOption } from '../OpalSelectOption';
import './index.css';
import { isEqualArray } from './isEqualArray';
import template = require('./template.nelm');

export { OpalSelectOption };

const map = Array.prototype.map;

export interface IDataListItem {
	[name: string]: any;
}

export type TDataList = ObservableList<IDataListItem>;
export type TViewModel = ObservableList<IDataListItem>;

const defaultDataListItemSchema = Object.freeze({
	value: 'value',
	text: 'text',
	subtext: 'subtext',
	disabled: 'disabled'
});
const defaultVMItemSchema = Object.freeze({
	value: 'value',
	text: 'text',
	subtext: 'subtext',
	disabled: 'disabled'
});

@Component<OpalSelect>({
	elementIs: 'OpalSelect',
	template
})
export class OpalSelect extends BaseComponent {
	static defaultDataListItemSchema = defaultDataListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	@Param
	paramViewType: string;
	@Param
	paramSize = 'm';
	@Param({ readonly: true })
	paramMultiple = false;
	@Param
	paramDataList: TDataList;
	@Param({ readonly: true })
	paramDataListKeypath: string;
	@Param({
		type: eval,
		default: defaultDataListItemSchema,
		readonly: true
	})
	paramDataListItemSchema: {
		value?: string;
		text?: string;
		subtext?: string;
		disabled?: string;
	};
	@Param({ type: eval })
	paramValue: Array<string>;
	@Param({ readonly: true })
	paramViewModel: TViewModel;
	@Param({
		type: eval,
		default: defaultVMItemSchema,
		readonly: true
	})
	paramViewModelItemSchema: {
		value?: string;
		text?: string;
		subtext?: string;
		disabled?: string;
	};
	@Param({ readonly: true })
	paramAddNewItem: (text: string) => Promise<{ [name: string]: string }>;
	@Param
	paramText: string;
	@Param
	paramMaxTextLength = 20;
	@Param
	paramPlaceholder = t('Не выбрано'); // ;;; ничего не выбрано
	@Param({ readonly: true })
	openOnClick = false;
	@Param
	paramTabIndex = 0;
	@Param
	paramFocused = false;
	@Param
	paramDisabled = false;

	dataListCell: Cell<TDataList | null> | null = null;
	dataList: TDataList | null;
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemSubtextFieldName: string;
	_dataListItemDisabledFieldName: string;

	@Observable
	viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;
	_viewModelItemSubtextFieldName: string;
	_viewModelItemDisabledFieldName: string;

	@Computed
	get value(): Array<string> {
		return this.viewModel.map(item => item[this._viewModelItemValueFieldName]);
	}

	_addNewItem: ((text: string) => Promise<{ [name: string]: string }>) | null;

	@Computed
	get _buttonText(): string {
		let text = this.viewModel
			.map((item): string => item[this._viewModelItemTextFieldName])
			.join(', ');

		if (!text) {
			return this.paramPlaceholder;
		}

		if (text.length > this.paramMaxTextLength) {
			text = t('Выбран{n:|о|о} {n}', this.viewModel.length);
		}

		return text;
	}

	optionElements: HTMLCollectionOf<IComponentElement>;

	optionsCell: Cell<Array<OpalSelectOption>>;
	@Computed
	get options(): Array<OpalSelectOption> {
		return map.call(this.optionElements, (option: IComponentElement) => option.$component);
	}

	_needOptionsUpdating = false;

	_notUpdateOptions = false;

	_opened: boolean = false;
	_valueOnOpen: Array<string>;

	_onceFocusedAfterLoading: boolean = false;

	_paramDataListSpecified: boolean;

	_documentClickListening: IDisposableListening | null | undefined;
	_documentFocusListening: IDisposableListening;
	_documentKeyDownListening: IDisposableListening | null | undefined;
	_dataListChangeListeneng: IDisposableListening;
	_menuLoadedListeneng: IDisposableListening;

	initialize() {
		if (this.paramDataListKeypath) {
			define(this, 'dataList', new Cell(
				Function(`return this.${this.paramDataListKeypath};`),
				{
					context: this.ownerComponent || window
				}
			));

			this._paramDataListSpecified = true;
		} else if (this.$specifiedParams && this.$specifiedParams.has('dataList')) {
			define(this, 'dataList', () => this.paramDataList);
			this._paramDataListSpecified = true;
		} else {
			this.dataList = null;
			this._paramDataListSpecified = false;
		}

		let dataListItemSchema = this.paramDataListItemSchema;
		let defaultDataListItemSchema = (this.constructor as typeof OpalSelect)
			.defaultDataListItemSchema;

		this._dataListItemValueFieldName =
			dataListItemSchema.value || defaultDataListItemSchema.value;
		this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
		this._dataListItemSubtextFieldName =
			dataListItemSchema.subtext || defaultDataListItemSchema.subtext;
		this._dataListItemDisabledFieldName =
			dataListItemSchema.disabled || defaultDataListItemSchema.disabled;

		this.viewModel = this.paramViewModel || new ObservableList();

		let vmItemSchema = this.paramViewModelItemSchema;
		let defaultVMItemSchema = (this.constructor as typeof OpalSelect)
			.defaultViewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemSubtextFieldName = vmItemSchema.subtext || defaultVMItemSchema.subtext;
		this._viewModelItemDisabledFieldName =
			vmItemSchema.disabled || defaultVMItemSchema.disabled;

		this._addNewItem = this.paramAddNewItem;
	}

	ready() {
		this.optionElements = this.element.getElementsByClassName('OpalSelectOption') as any;

		if (this.paramViewModel && !this.paramValue) {
			this._needOptionsUpdating = true;
		} else {
			this._notUpdateOptions = true;
			this.$<OpalDropdown>('menu')!.renderContent();
			this._notUpdateOptions = false;
			this._initViewModel();
		}
	}

	_initViewModel() {
		let value: any = this.paramValue;
		let selectedOptions: Array<OpalSelectOption> | undefined;

		if (value) {
			if (!Array.isArray(value)) {
				throw new TypeError('Parameter "value" must be an array');
			}

			this._notUpdateOptions = true;
			this.viewModel.clear();

			if (value.length) {
				if (this.paramMultiple) {
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
		} else if (this.paramMultiple) {
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
					[this._viewModelItemTextFieldName]: option.text,
					[this._viewModelItemSubtextFieldName]: option.subtext
				}))
			);
		}

		this._notUpdateOptions = false;

		if (value) {
			this._updateOptions();
		}
	}

	elementAttached() {
		if (this.paramFocused) {
			this._documentKeyDownListening = this.listenTo(
				document,
				'keydown',
				this._onDocumentKeyDown
			);

			this.focus();
		}

		this.listenTo(this, {
			'change:paramValue': this._onParamValueChange,
			'change:paramFocused': this._onParamFocusedChange
		});
		this.listenTo(this.viewModel, 'change', this._onViewModelChange);
		this.listenTo('button', {
			focus: this._onButtonFocus,
			blur: this._onButtonBlur,
			click: this._onButtonClick
		});

		if (!this.openOnClick) {
			this.listenTo(
				this.$<BaseComponent>('button')!.element,
				'mousedown',
				this._onButtonElementMouseDown
			);
		}

		this.listenTo('menu', {
			'change:paramOpened': this._onMenuParamOpenedChange,
			'<OpalSelectOption>select': this._onMenuSelectOptionSelect,
			'<OpalSelectOption>deselect': this._onMenuSelectOptionDeselect,
			'<OpalTextInput>confirm': this._onMenuTextInputConfirm,
			'<OpalButton>click': this._onMenuButtonClick,
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
				let multiple = this.paramMultiple;

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
		let vmItemSubtextFieldName = this._viewModelItemSubtextFieldName;

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
						[vmItemTextFieldName]: option.text,
						[vmItemSubtextFieldName]: option.subtext
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
						[vmItemTextFieldName]: option.text,
						[vmItemSubtextFieldName]: option.subtext
					});

					return true;
				})
			) {
				vm.clear();
			}
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
		this.paramFocused = true;
	}

	_onButtonBlur() {
		this.paramFocused = false;
	}

	_onButtonClick(evt: IEvent<OpalButton>) {
		evt.defaultPrevented = true;

		if (this._documentClickListening) {
			this._documentClickListening.stop();
			this._documentClickListening = null;
		} else if (evt.target.checked) {
			this.close();
		} else {
			this.open();
		}
	}

	_onButtonElementMouseDown() {
		if (this.paramDisabled) {
			return;
		}

		if (!this._documentClickListening) {
			this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
		}

		if (this._opened) {
			this.close();
		} else {
			this.open();
		}
	}

	_onDocumentClick() {
		if (this._documentClickListening) {
			this._documentClickListening.stop();
			this._documentClickListening = null;
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
			[this._viewModelItemTextFieldName]: evt.target.text,
			[this._viewModelItemSubtextFieldName]: evt.target.subtext
		};

		if (this.paramMultiple) {
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
		if (this.paramMultiple) {
			let vmItemValueFieldName = this._viewModelItemValueFieldName;
			let value = evt.target.value;

			this._notUpdateOptions = true;
			this.viewModel.removeAt(
				this.viewModel.findIndex(item => item[vmItemValueFieldName] == value)
			);
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

		if (textInput !== this.$<OpalTextInput>('newItemInput')) {
			return;
		}

		if (!this._addNewItem) {
			throw new TypeError('Parameter "addNewItem" is required');
		}

		let text = textInput.value!;

		textInput.clear();
		textInput.paramLoading = true;
		textInput.disable();

		this._addNewItem(text).then(
			(newItem: { [name: string]: string } | false | null | undefined) => {
				textInput.paramLoading = false;
				textInput.enable();

				if (newItem) {
					this._addNewItem$(newItem);
				}
			},
			() => {
				textInput.paramLoading = false;
				textInput.enable();
			}
		);

		return false;
	}

	_onMenuButtonClick(evt: IEvent<OpalButton>): false | void {
		let button = evt.target;

		if (button !== this.$<OpalButton>('btnAddNewItem')) {
			return;
		}

		if (!this._addNewItem) {
			throw new TypeError('Parameter "addNewItem" is required');
		}

		let text = button.element.dataset.newItemText!;

		button.paramLoading = true;
		button.disable();

		this._addNewItem(text).then(
			(newItem: { [name: string]: string } | false | null | undefined) => {
				button.paramLoading = false;
				button.enable();

				if (newItem) {
					this._addNewItem$(newItem);
				}
			},
			() => {
				button.paramLoading = false;
				button.enable();
			}
		);

		return false;
	}

	_addNewItem$(newItem: { [name: string]: string }) {
		let value = newItem[this._viewModelItemValueFieldName];
		let text = newItem[this._viewModelItemTextFieldName];
		let subtext = newItem[this._viewModelItemDisabledFieldName];

		if (this.dataList) {
			this.dataList.add({
				[this._dataListItemValueFieldName]: value,
				[this._dataListItemTextFieldName]: text,
				[this._dataListItemSubtextFieldName]: subtext
			});
		}

		let loadedList = this.$<OpalLoadedList>('loadedList');

		if (loadedList) {
			loadedList.paramQuery = '';
		}

		let vm = this.viewModel;
		let vmItem = {
			[this._viewModelItemValueFieldName]: value,
			[this._viewModelItemTextFieldName]: text,
			[this._dataListItemSubtextFieldName]: subtext
		};

		if (this.paramMultiple) {
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
	}

	_onMenuChange(evt: IEvent) {
		if (
			!this._notUpdateOptions &&
			(evt.target instanceof RnIfThen || evt.target instanceof RnRepeat)
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

		if (this.dataListCell) {
			this._dataListChangeListeneng = this.listenTo(
				this,
				'change:dataList',
				this._onDataListChange
			);
		}

		this._menuLoadedListeneng = this.listenTo(
			this.$<BaseComponent>('menu')!,
			'<*>loaded',
			this._onMenuLoaded
		);

		this.$<OpalButton>('button')!.check();
		this._notUpdateOptions = true;
		this.$<OpalDropdown>('menu')!.open();
		this._notUpdateOptions = false;

		if (this._needOptionsUpdating) {
			this._needOptionsUpdating = false;
			this._updateOptions();
		}

		let loadedList = this.$<OpalLoadedList>('loadedList');

		if (loadedList) {
			loadedList!.checkLoading();
		}

		this.focus();

		return true;
	}

	close(): boolean {
		if (!this._opened) {
			return false;
		}

		this._opened = false;

		this._documentFocusListening.stop();

		if (!this.paramFocused) {
			this._documentKeyDownListening!.stop();
			this._documentKeyDownListening = null;
		}

		if (this._dataListChangeListeneng) {
			this._dataListChangeListeneng.stop();
		}

		this._menuLoadedListeneng.stop();

		this.$<OpalButton>('button')!.uncheck();
		this.$<OpalDropdown>('menu')!.close();

		if (this.paramMultiple) {
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
		if (!this.element.contains((evt.target as Node).parentElement!)) {
			this.close();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		switch (evt.which) {
			case 32 /* Space */: {
				if (this._opened) {
					if (this.paramFocused) {
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
							document.body.classList.remove('_noFocusHighlight');
						}
					} else {
						let options = this.options;

						for (let i = 0, l = options.length; i < l; i++) {
							if (options[i].paramFocused) {
								for (;;) {
									if (!i) {
										for (let j = options.length; j; ) {
											let option = options[--j];

											if (
												!option.paramDisabled &&
												option.element.offsetWidth
											) {
												option.focus();
												break;
											}
										}

										break;
									}

									let option = options[--i];

									if (!option.paramDisabled && option.element.offsetWidth) {
										document.body.classList.remove('_noFocusHighlight');
										option.focus();
										break;
									}
								}

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
							document.body.classList.remove('_noFocusHighlight');
						}
					} else {
						let options = this.options;

						for (let i = 0, l = options.length; i < l; i++) {
							if (options[i].paramFocused) {
								for (;;) {
									if (i + 1 == l) {
										for (let option of options) {
											if (
												!option.paramDisabled &&
												option.element.offsetWidth
											) {
												option.focus();
												break;
											}
										}

										break;
									}

									let option = options[++i];

									if (!option.paramDisabled && option.element.offsetWidth) {
										document.body.classList.remove('_noFocusHighlight');
										option.focus();
										break;
									}
								}

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

	_onDataListChange(evt: IEvent) {
		if (!evt.data.prevValue) {
			nextTick(() => {
				if (this._opened) {
					this.focus();
				}
			});
		}
	}

	_onMenuLoaded(evt: IEvent) {
		if (this._onceFocusedAfterLoading || evt.target !== this.$('loadedList')) {
			return;
		}

		this._onceFocusedAfterLoading = true;

		this._focusOptions();

		let focusTarget =
			this.$<HTMLElement | OpalTextInput>('focus') ||
			this.$<OpalFilteredList>('filteredList');

		if (focusTarget) {
			nextTick(() => {
				focusTarget!.focus();
			});
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

				if (item[vmItemDisabledFieldName] !== undefined) {
					option.disabled = item[vmItemDisabledFieldName];
				}
			} else {
				option.selected = false;
			}
		});
	}

	focus(): this {
		if (this._opened) {
			let focusTarget =
				this.$<HTMLElement | OpalTextInput>('focus') ||
				this.$<OpalFilteredList>('filteredList');

			if ((focusTarget && focusTarget.focus() !== false) || this._focusOptions()) {
				return this;
			}
		}

		this.$<OpalSelect>('button')!.focus();

		return this;
	}

	blur(): this {
		this.$<OpalButton>('button')!.blur();
		return this;
	}

	_focusOptions(): boolean {
		let focusTarget;

		for (let option of this.options) {
			if (!option.paramDisabled && option.element.offsetWidth) {
				if (option.selected) {
					focusTarget = option;
					break;
				}

				if (!focusTarget) {
					focusTarget = option;
				}
			}
		}

		if (focusTarget) {
			focusTarget.focus();
			return true;
		}

		return false;
	}
}
