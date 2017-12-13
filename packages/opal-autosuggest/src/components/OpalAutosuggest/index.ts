import { getText } from '@riim/gettext';
import { OpalDropdown } from '@riim/opal-dropdown';
import { OpalTextInput } from '@riim/opal-text-input';
import { isFocusable } from '@riim/opal-utils';
import { Cell, IEvent, ObservableList } from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableCallback,
	IDisposableListening,
	IDisposableTimeout,
	Param
	} from 'rionite';
import './index.css';
import template from './template.nelm';

export interface IDataListItem {
	[name: string]: any;
}

export interface IDataProvider {
	getItems(query: string): PromiseLike<{ items: Array<IDataListItem> }>;
	getItems(count: number, query: string): PromiseLike<{ items: Array<IDataListItem> }>;
}

function toComparable(str: string): string {
	return str.replace(/\s+/g, ' ').toLowerCase();
}

let defaultDataListItemSchema = Object.freeze({ value: 'id', text: 'name' });

@Component<OpalAutosuggest>({
	i18n: {
		textInputPlaceholder: getText.t('Начните вводить для поиска'),
		nothingFound: getText.t('Ничего не найдено')
	},

	template,

	domEvents: {
		'list-item': {
			click(evt, listItem: HTMLElement) {
				let textInput = this.$<OpalTextInput>('text-input')!;
				let listItemDataSet = listItem.dataset;

				textInput.value = listItemDataSet.text!;
				textInput.focus();

				this._clearDataList();

				this._selectItem({
					[this._dataListItemValueFieldName]: listItemDataSet.value!,
					[this._dataListItemTextFieldName]: listItemDataSet.text!
				});
			}
		}
	}
})
export class OpalAutosuggest extends BaseComponent {
	@Param({ type: eval, default: defaultDataListItemSchema, readonly: true })
	paramDataListItemSchema: { value?: string; text?: string };
	@Param({ readonly: true })
	paramDataProvider: IDataProvider;
	@Param({ type: eval })
	paramValue: IDataListItem;
	@Param paramMinQueryLength = 3;
	@Param paramCount = 5;
	@Param paramOpenMenuOnNothingFound = false;

	static defaultDataListItemSchema = defaultDataListItemSchema;

	@Observable dataList = new ObservableList<IDataListItem>();
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;

	dataProvider: IDataProvider;

	@Observable value: IDataListItem | null;

	_isNotInputConfirmed = false;

	@Observable _isLoadingPlanned = false;
	_loadingTimeout: IDisposableTimeout;
	_requestCallback: IDisposableCallback;
	@Observable loading = false;

	@Computed
	get isLoaderShown(): boolean {
		return this._isLoadingPlanned || this.loading;
	}

	_focusedListItem: HTMLElement | null;

	_documentFocusListening: IDisposableListening;
	_documentListening: IDisposableListening;

	initialize() {
		let dataListItemSchema = this.paramDataListItemSchema;
		let defaultDataListItemSchema = (this.constructor as typeof OpalAutosuggest)
			.defaultDataListItemSchema;

		this._dataListItemValueFieldName =
			dataListItemSchema.value || defaultDataListItemSchema.value;
		this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;

		if (!this.$specifiedParams || !this.$specifiedParams.has('dataProvider')) {
			throw new TypeError('Parameter "dataProvider" is required');
		}

		this.dataProvider = this.paramDataProvider;

		if (!this.dataProvider) {
			throw new TypeError('"dataProvider" is not defined');
		}

		this.value = this.paramValue;
	}

	elementAttached() {
		this.listenTo(this, {
			'change:paramValue': this._onParamValueChange,
			'change:isLoaderShown': this._onIsLoaderShownChange
		});
		this.listenTo(this.dataList, 'change', this._onDataListChange);
		this.listenTo('text-input', {
			focus: this._onTextInputFocus,
			blur: this._onTextInputBlur,
			input: this._onTextInputInput,
			change: this._onTextInputChange
		});
		this.listenTo(
			this.$<OpalTextInput>('text-input')!.textField,
			'click',
			this._onTextFieldClick
		);
		this.listenTo('menu', 'change:paramOpened', this._onMenuParamOpenedChange);
		this.listenTo(
			this.$<BaseComponent>('menu')!.element,
			'mouseover',
			this._onMenuElementMouseOver
		);
	}

	ready() {
		if (this.value) {
			this.$<OpalTextInput>('text-input')!.value = this.value[
				this._dataListItemTextFieldName
			];
		}
	}

	_onParamValueChange(evt: IEvent) {
		let item: IDataListItem = evt.data.value;

		this._clearDataList();

		this.value = item;
		this.$<OpalTextInput>('text-input')!.value = item
			? item[this._dataListItemTextFieldName]
			: '';
	}

	_onIsLoaderShownChange(evt: IEvent) {
		this.$<OpalTextInput>('text-input')!.paramLoading = evt.data.value;
	}

	_onDataListChange() {
		this.openMenu();
	}

	_onTextInputFocus() {
		this.openMenu();
	}

	_onTextInputBlur() {
		this._cancelLoading();

		// Нужно для следующего случая:
		// 1. выбираем что-то;
		// 2. изменяем запрос так чтобы ничего не нашлось;
		// 3. убираем фокус.
		if (!this.$<OpalDropdown>('menu')!.paramOpened) {
			this._selectItem();
		}
	}

	_onTextInputInput(evt: IEvent<OpalTextInput>) {
		this._isNotInputConfirmed = true;

		this._clearDataList();

		if ((evt.target.value || '').length >= this.paramMinQueryLength) {
			this._isLoadingPlanned = true;

			this._loadingTimeout = this.setTimeout(() => {
				this._isLoadingPlanned = false;
				this._load();
			}, 300);
		}
	}

	_onTextInputChange(evt: IEvent<OpalTextInput>) {
		if (!evt.target.value) {
			this._clearDataList();

			if (this.value) {
				this.value = null;
				this.emit('change');
			}
		}
	}

	_onTextFieldClick() {
		this.openMenu();
	}

	_onMenuParamOpenedChange(evt: IEvent) {
		if (evt.data.value) {
			this._documentFocusListening = this.listenTo(
				document,
				'focus',
				this._onDocumentFocus,
				this,
				true
			);
			this._documentListening = this.listenTo(document, {
				keydown: this._onDocumentKeyDown,
				click: this._onDocumentClick
			});
		} else {
			this._documentFocusListening.stop();
			this._documentListening.stop();
		}
	}

	_onMenuElementMouseOver(evt: Event) {
		let menu = this.$<BaseComponent>('menu')!.element;
		let el = evt.target as HTMLElement;

		for (
			;
			!el.classList.contains('OpalAutosuggest__list-item');
			el = el.parentNode as HTMLElement
		) {
			if (el == menu) {
				return;
			}
		}

		let focusedListItem = this._focusedListItem!;

		if (el != focusedListItem) {
			this._focusedListItem = el;

			focusedListItem.removeAttribute('focused');
			el.setAttribute('focused', '');
		}
	}

	_onDocumentFocus(evt: Event) {
		if (!isFocusable(evt.target as HTMLElement)) {
			return;
		}

		if (!this.element.contains((evt.target as HTMLElement).parentNode!)) {
			this.closeMenu();
			this._selectItem();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		switch (evt.which) {
			case 38 /* Up */:
			case 40 /* Bottom */: {
				evt.preventDefault();

				let focusedListItem = this._focusedListItem;

				if (focusedListItem) {
					let listItems = this.$$<HTMLElement>('list-item');
					let index = listItems.indexOf(focusedListItem);

					if (evt.which == 38 ? index > 0 : index < listItems.length - 1) {
						let newFocusedListItem = listItems[index + (evt.which == 38 ? -1 : 1)];

						this._focusedListItem = newFocusedListItem;

						focusedListItem.removeAttribute('focused');
						newFocusedListItem.setAttribute('focused', '');
					}
				}

				break;
			}
			case 13 /* Enter */:
			case 39 /* Right */: {
				evt.preventDefault();

				let focusedListItem = this._focusedListItem;

				if (focusedListItem) {
					let focusedListItemDataSet = focusedListItem.dataset;

					this.$<OpalTextInput>('text-input')!.value = focusedListItemDataSet.text!;

					this._clearDataList();

					this._selectItem({
						[this._dataListItemValueFieldName]: focusedListItemDataSet.value!,
						[this._dataListItemTextFieldName]: focusedListItemDataSet.text!
					});
				}

				break;
			}
			case 27 /* Esc */: {
				evt.preventDefault();
				this.closeMenu();
				this._selectItem();
				break;
			}
		}
	}

	_onDocumentClick(evt: Event) {
		if (!this.element.contains(evt.target as HTMLElement)) {
			this.closeMenu();
			this._selectItem();
		}
	}

	_load() {
		this.loading = true;

		let args: Array<any> = [this.$<OpalTextInput>('text-input')!.value];

		if (this.dataProvider.getItems.length >= 2) {
			args.unshift(this.paramCount);
		}

		this.dataProvider.getItems
			.apply(this.dataProvider, args)
			.then((this._requestCallback = this.registerCallback(this._itemsRequestCallback)));
	}

	_itemsRequestCallback(data: { [name: string]: any }) {
		this.loading = false;

		let items: Array<IDataListItem> = data.items;

		if (items.length) {
			this.dataList.addRange(items);
			Cell.forceRelease();

			let focusedListItem = this.$<HTMLElement>('list-item')!;

			this._focusedListItem = focusedListItem;
			focusedListItem.setAttribute('focused', '');
		} else if (this.paramOpenMenuOnNothingFound) {
			this.openMenu(true);
		}
	}

	_cancelLoading() {
		if (this._isLoadingPlanned) {
			this._isLoadingPlanned = false;
			this._loadingTimeout.clear();
		} else if (this.loading) {
			this._requestCallback.cancel();
			this.loading = false;
		}
	}

	openMenu(force?: boolean): OpalAutosuggest {
		if (force || this.dataList.length) {
			this.$<OpalDropdown>('menu')!.open();
		}

		return this;
	}

	closeMenu(): OpalAutosuggest {
		this.$<OpalDropdown>('menu')!.close();
		return this;
	}

	_selectItem(item?: IDataListItem | null) {
		if (item === undefined) {
			if (this._isNotInputConfirmed) {
				let query = this.$<OpalTextInput>('text-input')!.value;

				if (query) {
					query = toComparable(query);
					item = this.dataList.find(
						item => toComparable(item[this._dataListItemTextFieldName]) == query
					);

					if (item && this.dataList.length > 1) {
						this._clearDataList();
					}
				}

				this._selectItem(item || null);
			}
		} else {
			if (item) {
				this._isNotInputConfirmed = false;

				if (
					this.value &&
					this.value[this._dataListItemValueFieldName] ==
						item[this._dataListItemValueFieldName]
				) {
					return;
				}
			} else if (!this.value) {
				return;
			}

			this.value = item;
			this.emit('change');
		}
	}

	clear() {
		this._clearDataList();

		if (this.value) {
			this.value = null;
		}

		this.$<OpalTextInput>('text-input')!.clear();
	}

	_clearDataList() {
		this._cancelLoading();

		this.closeMenu();

		this.dataList.clear();
		this._focusedListItem = null;
	}
}
