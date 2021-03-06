import { pt, t } from '@riim/gettext';
import { nextTick } from '@riim/next-tick';
import { OpalButton } from '@riim/opal-button';
import { OpalDropdown } from '@riim/opal-dropdown';
import { OpalFilteredList } from '@riim/opal-filtered-list';
import { OpalLoadedList } from '@riim/opal-loaded-list';
import { OpalSignButton } from '@riim/opal-sign-button';
import { OpalTextInput } from '@riim/opal-text-input';
import { Cell, define, IEvent } from 'cellx';
import { ObservableList } from 'cellx-collections';
import { Computed, Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IComponentElement,
	IDisposableListening,
	Listen,
	Param,
	RnCondition,
	RnRepeat
	} from 'rionite';
import { OpalSelectOption } from '../OpalSelectOption';
import './index.css';
import { isArraysEqual } from './isArraysEqual';
import template from './template.rnt';

export { OpalSelectOption };

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
	static EVENT_BLUR = Symbol('blur');
	static EVENT_CHANGE = Symbol('change');
	static EVENT_DESELECT = Symbol('deselect');
	static EVENT_FOCUS = Symbol('focus');
	static EVENT_INPUT = Symbol('input');
	static EVENT_SELECT = Symbol('select');

	static buttonFocusEvents = [OpalButton.EVENT_FOCUS, OpalSignButton.EVENT_FOCUS];
	static buttonBlurEvents = [OpalButton.EVENT_BLUR, OpalSignButton.EVENT_BLUR];
	static buttonClickEvents = [OpalButton.EVENT_CLICK, OpalSignButton.EVENT_CLICK];
	static menuChangeEvents = [RnCondition.EVENT_CHANGE, RnRepeat.EVENT_CHANGE];
	static menuLoadedEvents = [OpalLoadedList.EVENT_LOADED];

	static defaultDataListItemSchema = defaultDataListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	@Param({ default: 'default' })
	viewType: typeof OpalButton.prototype.viewType;
	@Param({ default: 'm' })
	size: typeof OpalButton.prototype.size;
	@Param({ type: Boolean, readonly: true })
	multiple: boolean;
	@Param(Boolean)
	clearOnDeselect: boolean;
	@Param('dataList')
	paramDataList: TDataList | null;
	@Param({ type: String, readonly: true })
	dataListKeypath: string | null;
	@Param({ type: eval, default: defaultDataListItemSchema, readonly: true })
	dataListItemSchema: {
		value?: string;
		text?: string;
		subtext?: string;
		disabled?: string;
	};
	@Param('value', eval)
	paramValue: Array<string> | null;
	@Param('viewModel', { readonly: true })
	paramViewModel: TViewModel | null;
	@Param({ type: eval, default: defaultVMItemSchema, readonly: true })
	viewModelItemSchema: {
		value?: string;
		text?: string;
		subtext?: string;
		disabled?: string;
	};
	@Param({ readonly: true })
	addItem: ((text: string, select: OpalSelect) => Promise<Record<string, string>>) | null;
	@Param(Boolean)
	clearLoadedListOnOpen: boolean;
	@Param(String)
	text: string | null;
	@Param({ default: 20 })
	maxTextLength: number;
	@Param({ default: pt('OpalSelect#placeholder', 'Не выбрано') })
	placeholder: string;
	@Param({ type: Boolean, readonly: true })
	openOnClick: boolean;
	@Param({ default: 0 })
	tabIndex: number;
	@Param(Boolean)
	focused: boolean;
	@Param(Boolean)
	disabled: boolean;

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
	get value() {
		return this.viewModel.map((item) => item[this._viewModelItemValueFieldName]);
	}
	set value(value: Array<string>) {
		this.paramValue = value;
	}

	_addItem: ((text: string, select: OpalSelect) => Promise<Record<string, string>>) | null;

	@Computed
	get _buttonText() {
		let text = this.viewModel
			.map((item): string => item[this._viewModelItemTextFieldName])
			.join(', ');

		if (!text) {
			return this.placeholder;
		}

		if (text.length > this.maxTextLength) {
			text = t('Выбран{n:|о|о} {n}', this.viewModel.length);
		}

		return text;
	}

	optionElements: HTMLCollectionOf<IComponentElement<OpalSelectOption>>;

	optionsCell: Cell<Array<OpalSelectOption>> | null = null;
	@Computed
	get options() {
		return Array.from(this.optionElements).map((optionEl) => optionEl.$component!);
	}

	_needOptionsUpdating = false;

	_notUpdateOptions = false;

	_opened: boolean = false;
	_valueOnOpen: Array<string>;

	_onceFocusedAfterLoading: boolean = false;

	_paramDataListSpecified: boolean;

	validator: { validate(): boolean } | null = null;

	_documentClickListening: IDisposableListening | null | undefined;
	_documentFocusListening: IDisposableListening;
	_documentKeyDownListening: IDisposableListening | null | undefined;
	_dataListChangeListeneng: IDisposableListening;
	_menuLoadedListeneng: IDisposableListening;

	initialize() {
		let dataListKeypath = this.dataListKeypath;

		if (dataListKeypath || this.$specifiedParams.has('dataList')) {
			define(this, 'dataList', dataListKeypath
				? new Cell(Function(`return this.${dataListKeypath};`), {
						context: this.ownerComponent || window
				  })
				: () => this.paramDataList);

			this._paramDataListSpecified = true;
		} else {
			this.dataList = null;
			this._paramDataListSpecified = false;
		}

		let dataListItemSchema = this.dataListItemSchema;
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

		let vmItemSchema = this.viewModelItemSchema;
		let defaultVMItemSchema = (this.constructor as typeof OpalSelect)
			.defaultViewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
		this._viewModelItemSubtextFieldName = vmItemSchema.subtext || defaultVMItemSchema.subtext;
		this._viewModelItemDisabledFieldName =
			vmItemSchema.disabled || defaultVMItemSchema.disabled;

		this._addItem = this.addItem;
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
				if (this.multiple) {
					selectedOptions = this.options.filter((option) =>
						(value as Array<string>).includes(option.value)
					);
				} else {
					value = value[0];

					let selectedOption = this.options.find((option) => option.value == value);

					if (selectedOption) {
						selectedOptions = [selectedOption];
					}
				}
			}
		} else if (this.multiple) {
			selectedOptions = this.options.filter((option) => option.selected);
		} else {
			let selectedOption = this.options.find((option) => option.selected);

			if (selectedOption) {
				selectedOptions = [selectedOption];
			}
		}

		if (selectedOptions && selectedOptions.length) {
			this._notUpdateOptions = true;
			this.viewModel.addRange(
				selectedOptions.map((option) => ({
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

	connected() {
		if (this.focused) {
			this._documentKeyDownListening = this.listenTo(
				document,
				'keydown',
				this._onDocumentKeyDown
			);

			this.focus();
		}

		if (!this.openOnClick) {
			this.listenTo(
				this.$<BaseComponent>('button')!.element,
				'mousedown',
				this._onButtonElementMouseDown
			);
		}
	}

	@Listen('change:paramValue')
	_onParamValueChange(evt: IEvent) {
		let vm = this.viewModel;
		let value: Array<string> | null = evt.data.value;

		if (value) {
			if (!Array.isArray(value)) {
				throw new TypeError('Parameter "value" must be an array');
			}

			if (value.length) {
				let multiple = this.multiple;

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

	_updateViewModel(value: Array<string>, multiple: boolean) {
		let dataList = this.dataList;
		let vm = this.viewModel;
		let vmItemValueFieldName = this._viewModelItemValueFieldName;
		let vmItemTextFieldName = this._viewModelItemTextFieldName;
		let vmItemSubtextFieldName = this._viewModelItemSubtextFieldName;

		if (multiple) {
			for (let item of dataList || this.options) {
				let itemValue = dataList
					? item[this._dataListItemValueFieldName]
					: (item as OpalSelectOption).value;
				let index = vm.findIndex((item) => item[vmItemValueFieldName] == itemValue);

				if (!value.includes(itemValue)) {
					if (index != -1) {
						vm.removeAt(index);
					}
				} else if (index == -1) {
					let subtext = dataList
						? item[this._dataListItemSubtextFieldName]
						: (item as OpalSelectOption).subtext;
					let vmItem = {
						[vmItemValueFieldName]: itemValue,
						[vmItemTextFieldName]: dataList
							? item[this._dataListItemTextFieldName]
							: (item as OpalSelectOption).text
					};

					if (subtext) {
						vmItem[vmItemSubtextFieldName] = subtext;
					}

					vm.add(vmItem);
				}
			}
		} else {
			let itemValue = value[0];

			if (
				!(dataList || this.options).some((item: IDataListItem | OpalSelectOption) => {
					if (
						(dataList
							? item[this._dataListItemValueFieldName]
							: (item as OpalSelectOption).value) != itemValue
					) {
						return false;
					}

					let subtext = dataList
						? item[this._dataListItemSubtextFieldName]
						: (item as OpalSelectOption).subtext;
					let vmItem = {
						[vmItemValueFieldName]: itemValue,
						[vmItemTextFieldName]: dataList
							? item[this._dataListItemTextFieldName]
							: (item as OpalSelectOption).text
					};

					if (subtext) {
						vmItem[vmItemSubtextFieldName] = subtext;
					}

					vm.set(0, vmItem);

					return true;
				})
			) {
				vm.clear();
			}
		}
	}

	@Listen('change:focused')
	_onFocusedChange(evt: IEvent) {
		if (evt.data.value) {
			if (!this._documentKeyDownListening) {
				this._documentKeyDownListening = this.listenTo(
					document,
					'keydown',
					this._onDocumentKeyDown
				);
			}

			this.emit(OpalSelect.EVENT_FOCUS);
		} else {
			if (this._documentKeyDownListening && !this._opened) {
				this._documentKeyDownListening.stop();
				this._documentKeyDownListening = null;
			}

			this.emit(OpalSelect.EVENT_BLUR);
		}
	}

	@Listen(ObservableList.EVENT_CHANGE, '@viewModel')
	_onViewModelChange() {
		if (!this._needOptionsUpdating && !this._notUpdateOptions) {
			this._updateOptions();
		}
	}

	@Listen((ctor: typeof OpalSelect) => ctor.buttonFocusEvents, 'button')
	_onButtonFocus() {
		this.focused = true;
	}

	@Listen((ctor: typeof OpalSelect) => ctor.buttonBlurEvents, 'button')
	_onButtonBlur() {
		this.focused = false;
	}

	@Listen((ctor: typeof OpalSelect) => ctor.buttonClickEvents, 'button')
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
		if (this.disabled) {
			return;
		}

		if (!this._documentClickListening) {
			this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
		}

		if (this._opened) {
			this.close();
		} else {
			setTimeout(() => {
				this.open();
			}, 1);
		}
	}

	_onDocumentClick() {
		if (this._documentClickListening) {
			this._documentClickListening.stop();
			this._documentClickListening = null;
		}
	}

	@Listen('change:opened', 'menu')
	_onMenuOpenedChange(evt: IEvent) {
		if (!evt.data.value) {
			this.close();
		}

		return false;
	}

	@Listen(OpalSelectOption.EVENT_SELECT, 'menu')
	_onMenuSelectOptionSelect(evt: IEvent<OpalSelectOption>) {
		let vm = this.viewModel;
		let vmItem = {
			[this._viewModelItemValueFieldName]: evt.target.value,
			[this._viewModelItemTextFieldName]: evt.target.text,
			[this._viewModelItemSubtextFieldName]: evt.target.subtext
		};

		if (this.multiple) {
			this._notUpdateOptions = true;
			vm.add(vmItem);
			this._notUpdateOptions = false;

			this.emit(OpalSelect.EVENT_SELECT);
		} else {
			if (vm.length) {
				vm.set(0, vmItem);
			} else {
				vm.add(vmItem);
			}

			this.close();
			this.focus();

			this.emit(OpalSelect.EVENT_SELECT);
			this.emit(OpalSelect.EVENT_CHANGE);
		}

		return false;
	}

	@Listen(OpalSelectOption.EVENT_DESELECT, 'menu')
	_onMenuSelectOptionDeselect(evt: IEvent<OpalSelectOption>) {
		if (this.multiple || this.clearOnDeselect) {
			let vmItemValueFieldName = this._viewModelItemValueFieldName;
			let value = evt.target.value;

			this._notUpdateOptions = true;
			this.viewModel.removeAt(
				this.viewModel.findIndex((item) => item[vmItemValueFieldName] == value)
			);
			this._notUpdateOptions = false;
		} else {
			evt.target.select();

			this.close();
			this.focus();
		}

		this.emit(OpalSelect.EVENT_DESELECT);

		return false;
	}

	@Listen(OpalTextInput.EVENT_CONFIRM, 'menu')
	_onMenuTextInputConfirm(evt: IEvent<OpalTextInput>) {
		let textInput = evt.target;

		if (textInput !== this.$<OpalTextInput>('itemInput')) {
			return;
		}

		if (!this._addItem) {
			throw new TypeError('Parameter "addItem" is required');
		}

		evt.data.initialEvent.preventDefault();

		if (textInput.validator && !textInput.validator.validate()) {
			return false;
		}

		let text = textInput.value!;

		textInput.clear();
		textInput.loading = true;
		textInput.disable();

		this._addItem(text, this).then(
			(item: Record<string, string> | false | null | undefined) => {
				textInput.loading = false;
				textInput.enable();

				if (item) {
					this._addItem$(item);
				}
			},
			() => {
				textInput.loading = false;
				textInput.enable();
			}
		);

		return false;
	}

	@Listen(OpalButton.EVENT_CLICK, 'menu')
	_onMenuButtonClick(evt: IEvent<OpalButton>) {
		let button = evt.target;

		if (button !== this.$<OpalButton>('btnAddItem')) {
			return;
		}

		if (!this._addItem) {
			throw new TypeError('Parameter "addItem" is required');
		}

		let text = button.element.dataset.itemText!;

		button.loading = true;
		button.disable();

		this._addItem(text, this).then(
			(item: Record<string, string> | false | null | undefined) => {
				button.loading = false;
				button.enable();

				if (item) {
					this._addItem$(item);
				}
			},
			() => {
				button.loading = false;
				button.enable();
			}
		);

		return false;
	}

	_addItem$(item: Record<string, string>) {
		let value = item[this._dataListItemValueFieldName];
		let text = item[this._dataListItemTextFieldName];
		let subtext = item[this._dataListItemSubtextFieldName];

		if (
			this.dataList &&
			!this.dataList.find((item) => item[this._dataListItemValueFieldName] == value)
		) {
			let dataListItem = {
				[this._dataListItemValueFieldName]: value,
				[this._dataListItemTextFieldName]: text
			};

			if (subtext) {
				dataListItem[this._dataListItemSubtextFieldName] = subtext;
			}

			this.dataList.add(dataListItem);
		}

		let loadedList = this.$<OpalLoadedList>('loadedList');

		if (loadedList) {
			loadedList.query = '';
		}

		let vm = this.viewModel;
		let vmItem = {
			[this._viewModelItemValueFieldName]: value,
			[this._viewModelItemTextFieldName]: text
		};

		if (subtext) {
			vmItem[this._viewModelItemSubtextFieldName] = subtext;
		}

		if (this.multiple) {
			vm.add(vmItem);
			this.emit(OpalSelect.EVENT_INPUT);
		} else {
			if (vm.length) {
				vm.set(0, vmItem);
			} else {
				vm.add(vmItem);
			}

			this.close();
			this.focus();

			this.emit(OpalSelect.EVENT_INPUT);
			this.emit(OpalSelect.EVENT_CHANGE);
		}
	}

	@Listen((ctor: typeof OpalSelect) => ctor.menuChangeEvents, 'menu')
	_onMenuChange() {
		if (!this._notUpdateOptions) {
			this.optionsCell!.pull();
			this._updateOptions();
		}
	}

	open() {
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
			'menu',
			(this.constructor as typeof OpalSelect).menuLoadedEvents,
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

		if (loadedList && !loadedList.loading) {
			if (this.clearLoadedListOnOpen) {
				loadedList.clear();
			}

			loadedList.checkLoading();
		}

		this.focus();

		return true;
	}

	close() {
		if (!this._opened) {
			return false;
		}

		this._opened = false;

		this._documentFocusListening.stop();

		if (!this.focused) {
			this._documentKeyDownListening!.stop();
			this._documentKeyDownListening = null;
		}

		if (this._dataListChangeListeneng) {
			this._dataListChangeListeneng.stop();
		}

		this._menuLoadedListeneng.stop();

		this.$<OpalButton>('button')!.uncheck();
		this.$<OpalDropdown>('menu')!.close();

		if (this.multiple) {
			if (
				!isArraysEqual(
					this.viewModel.map((item): string => item[this._viewModelItemValueFieldName]),
					this._valueOnOpen
				)
			) {
				this.emit(OpalSelect.EVENT_CHANGE);
			}
		}

		return true;
	}

	toggle(value?: boolean) {
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
					if (this.focused) {
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

						for (let i = 0, l = options.length; ; i++) {
							if (i < l) {
								if (options[i].focused) {
									for (;;) {
										if (!i) {
											for (let j = options.length; j; ) {
												let option = options[--j];

												if (
													!option.disabled &&
													option.element.offsetWidth
												) {
													document.body.classList.remove(
														'_noFocusHighlight'
													);
													option.focus();
													break;
												}
											}

											break;
										}

										let option = options[--i];

										if (!option.disabled && option.element.offsetWidth) {
											document.body.classList.remove('_noFocusHighlight');
											option.focus();
											break;
										}
									}

									break;
								}
							} else {
								if (this._focusOptions()) {
									document.body.classList.remove('_noFocusHighlight');
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

						for (let i = 0, l = options.length; ; i++) {
							if (i < l) {
								if (options[i].focused) {
									for (;;) {
										if (i + 1 == l) {
											for (let option of options) {
												if (
													!option.disabled &&
													option.element.offsetWidth
												) {
													document.body.classList.remove(
														'_noFocusHighlight'
													);
													option.focus();
													break;
												}
											}

											break;
										}

										let option = options[++i];

										if (!option.disabled && option.element.offsetWidth) {
											document.body.classList.remove('_noFocusHighlight');
											option.focus();
											break;
										}
									}

									break;
								}
							} else {
								if (this._focusOptions()) {
									document.body.classList.remove('_noFocusHighlight');
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

		let focusTarget =
			this.$<HTMLElement | OpalTextInput>('focus') ||
			this.$<OpalFilteredList>('filteredList');

		if (focusTarget) {
			focusTarget!.focus();
		}
	}

	_updateOptions() {
		let vm = this.viewModel;
		let vmItemValueFieldName = this._viewModelItemValueFieldName;
		let vmItemDisabledFieldName = this._viewModelItemDisabledFieldName;

		for (let option of this.options) {
			let value = option.value;
			let item = vm.find((item) => item[vmItemValueFieldName] == value);

			if (item) {
				option.selected = true;

				if (item[vmItemDisabledFieldName] !== undefined) {
					option.disabled = item[vmItemDisabledFieldName];
				}
			} else {
				option.selected = false;
			}
		}
	}

	focus() {
		if (this._opened) {
			this._focusOptions();

			let focusTarget =
				this.$<HTMLElement | OpalTextInput>('focus') ||
				this.$<OpalFilteredList>('filteredList');

			if (focusTarget && focusTarget.focus() !== false) {
				return this;
			}
		}

		this.$<OpalSelect>('button')!.focus();

		return this;
	}

	blur() {
		this.$<OpalButton>('button')!.blur();
		return this;
	}

	_focusOptions() {
		let focusTarget;

		for (let option of this.options) {
			if (!option.disabled && option.element.offsetWidth) {
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

	enable() {
		this.disabled = false;
		return this;
	}

	disable() {
		this.disabled = true;
		return this;
	}

	validate() {
		return !this.validator || this.validator.validate();
	}
}
