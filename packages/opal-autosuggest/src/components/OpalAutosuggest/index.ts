import { nextTick } from '@riim/next-tick';
import { OpalDropdown } from '@riim/opal-dropdown';
import { OpalTextInput } from '@riim/opal-text-input';
import { IEvent, ObservableList } from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableCallback,
	IDisposableListening,
	IDisposableTimeout,
	IPossiblyComponentElement,
	Param
	} from 'rionite';
import './index.css';
import template = require('./template.rnt');

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

const defaultDataListItemSchema = Object.freeze({
	value: 'id',
	text: 'name',
	subtext: 'parent'
});

@Component<OpalAutosuggest>({
	elementIs: 'OpalAutosuggest',
	template,

	domEvents: {
		listItem: {
			click(_evt, context) {
				let textInput = this.$<OpalTextInput>('textInput')!;
				let item = context.item;

				textInput.value = item[this._dataListItemTextFieldName];
				textInput.focus();

				this._clearDataList();

				this._selectItem({
					[this._dataListItemValueFieldName]: item[this._dataListItemValueFieldName],
					[this._dataListItemTextFieldName]: item[this._dataListItemTextFieldName],
					[this._dataListItemSubtextFieldName]: item[this._dataListItemSubtextFieldName]
				});
			}
		}
	}
})
export class OpalAutosuggest extends BaseComponent {
	@Param({
		type: eval,
		default: defaultDataListItemSchema,
		readonly: true
	})
	paramDataListItemSchema: {
		value?: string;
		text?: string;
		subtext?: string;
	};
	@Param({ readonly: true })
	paramDataProvider: IDataProvider;
	@Param({ type: eval })
	paramValue: IDataListItem;
	@Param
	paramMinQueryLength = 3;
	@Param
	paramCount = 5;
	@Param
	paramOpenMenuOnNothingFound = false;

	static defaultDataListItemSchema = defaultDataListItemSchema;

	@Observable
	dataList = new ObservableList<IDataListItem>();
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemSubtextFieldName: string;

	dataProvider: IDataProvider;

	@Observable
	value: IDataListItem | null;

	_inputNotConfirmed = false;

	@Observable
	_loadingPlanned = false;
	_loadingTimeout: IDisposableTimeout;
	_requestCallback: IDisposableCallback;
	@Observable
	loading = false;

	@Computed
	get loaderShown(): boolean {
		return this._loadingPlanned || this.loading;
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
		this._dataListItemSubtextFieldName =
			dataListItemSchema.subtext || defaultDataListItemSchema.subtext;

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
			'change:loaderShown': this._onLoaderShownChange
		});
		this.listenTo(this.dataList, 'change', this._onDataListChange);
		this.listenTo('textInput', {
			focus: this._onTextInputFocus,
			blur: this._onTextInputBlur,
			input: this._onTextInputInput,
			change: this._onTextInputChange
		});
		this.listenTo(
			this.$<OpalTextInput>('textInput')!.textField,
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
			this.$<OpalTextInput>('textInput')!.value = this.value[this._dataListItemTextFieldName];
		}
	}

	_onParamValueChange(evt: IEvent) {
		let item: IDataListItem = evt.data.value;

		this._clearDataList();

		this.value = item;
		this.$<OpalTextInput>('textInput')!.value = item
			? item[this._dataListItemTextFieldName]
			: '';
	}

	_onLoaderShownChange(evt: IEvent) {
		this.$<OpalTextInput>('textInput')!.paramLoading = evt.data.value;
	}

	_onDataListChange() {
		// Смотри _itemsRequestCallback
		nextTick(() => {
			this.openMenu();
		});
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
		this._inputNotConfirmed = true;

		this._clearDataList();

		if ((evt.target.value || '').length >= this.paramMinQueryLength) {
			this._loadingPlanned = true;

			this._loadingTimeout = this.setTimeout(() => {
				this._loadingPlanned = false;
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
		let el: Element | null = evt.target as Element;

		for (;;) {
			if (el == menu) {
				return;
			}

			if (el!.classList.contains('OpalAutosuggest__listLtem')) {
				break;
			}

			el = el.parentElement;

			if (!el) {
				return;
			}
		}

		let focusedListItem = this._focusedListItem;

		if (!focusedListItem || el != focusedListItem) {
			this._focusedListItem = el as HTMLElement;

			if (focusedListItem) {
				focusedListItem.removeAttribute('focused');
			}
			el.setAttribute('focused', '');
		}
	}

	_onDocumentFocus(evt: Event) {
		if (!this.element.contains((evt.target as HTMLElement).parentElement!)) {
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
				let listItems = this.$$<HTMLElement>('listItem');

				if (focusedListItem) {
					let index = listItems.indexOf(focusedListItem);

					if (evt.which == 38 ? index > 0 : index < listItems.length - 1) {
						let newFocusedListItem = listItems[index + (evt.which == 38 ? -1 : 1)];

						this._focusedListItem = newFocusedListItem;
						focusedListItem.removeAttribute('focused');
						newFocusedListItem.setAttribute('focused', '');
					} else if (evt.which == 40) {
						let menuFooterSlot = this.$<BaseComponent>('menuFooterSlot');

						if (menuFooterSlot) {
							let tabbableComponentEl: IPossiblyComponentElement | null = menuFooterSlot.element.querySelector(
								'[tab_index]'
							);

							if (tabbableComponentEl && tabbableComponentEl.$component) {
								if (focusedListItem) {
									this._focusedListItem = null;
									focusedListItem.removeAttribute('focused');
								}

								(tabbableComponentEl.$component as any).focus();
								document.body.classList.remove('_noFocusHighlight');

								break;
							}
						}
					}
				} else {
					if (evt.which == 40) {
						let menuFooterSlot = this.$<BaseComponent>('menuFooterSlot');

						if (menuFooterSlot) {
							let tabbableComponentEl: IPossiblyComponentElement | null = menuFooterSlot.element.querySelector(
								'[tab_index]'
							);

							if (tabbableComponentEl && tabbableComponentEl.$component) {
								if (!listItems.length) {
									(tabbableComponentEl.$component as any).focus();
									document.body.classList.remove('_noFocusHighlight');
									break;
								} else if ((tabbableComponentEl.$component as any).paramFocused) {
									document.body.classList.remove('_noFocusHighlight');
									break;
								}
							}
						}
					}

					if (listItems.length) {
						let newFocusedListItem =
							listItems[evt.which == 38 ? listItems.length - 1 : 0];
						this._focusedListItem = newFocusedListItem;
						newFocusedListItem.setAttribute('focused', '');
					}
				}

				this.$<OpalTextInput>('textInput')!.focus();

				break;
			}
			case 13 /* Enter */:
			case 39 /* Right */: {
				if (
					this._focusedListItem &&
					(document.activeElement == this.$<OpalTextInput>('textInput')!.textField ||
						document.activeElement == document.body)
				) {
					evt.preventDefault();

					let focusedListItemDataSet = this._focusedListItem.dataset;

					this.$<OpalTextInput>('textInput')!.value = focusedListItemDataSet.text!;

					this._clearDataList();

					this._selectItem({
						[this._dataListItemValueFieldName]: focusedListItemDataSet.value,
						[this._dataListItemTextFieldName]: focusedListItemDataSet.text,
						[this._dataListItemSubtextFieldName]: focusedListItemDataSet.subtext
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

		let args: Array<any> = [this.$<OpalTextInput>('textInput')!.value];

		if (this.dataProvider.getItems.length >= 2) {
			args.unshift(this.paramCount);
		}

		this.dataProvider.getItems
			.apply(this.dataProvider, args)
			.then((this._requestCallback = this.registerCallback(this._itemsRequestCallback)));
	}

	_itemsRequestCallback(data: { items: Array<IDataListItem> }) {
		this.loading = false;

		let items = data.items;

		if (items.length) {
			this.dataList.addRange(items);

			// Cell.forceRelease();
			// Содержимое OpalDropdown рендерится лениво, из-за этого обработчик изменения dataList
			// в RnRepeat оказывается после _onDataListChange (RnRepeat рендерится после
			// elementAttached). При первом открытии меню всё хорошо, тк. появившийся RnRepeat
			// показывает свои items в RnRepeat#elementConnected, но при втором открытии возможно
			// следующее: срабатывает _onDataListChange в котором открывается меню,
			// для меню считается выравнивание, но RnRepeat ещё не обновился тк. обработчик
			// изменения dataList в нём идёт сразу за текущим.
			// В результате выравнивание меню получается неправильным.
			// По этой причине вместо Cell.forceRelease здесь nextTick и nextTick добавлен в
			// _onDataListChange.
			nextTick(() => {
				let focusedListItem = this.$<HTMLElement>('listItem')!;

				this._focusedListItem = focusedListItem;
				focusedListItem.setAttribute('focused', '');
			});
		} else if (this.paramOpenMenuOnNothingFound) {
			this.openMenu(true);
		}
	}

	_cancelLoading() {
		if (this._loadingPlanned) {
			this._loadingPlanned = false;
			this._loadingTimeout.clear();
		} else if (this.loading) {
			this._requestCallback.cancel();
			this.loading = false;
		}
	}

	openMenu(force?: boolean): this {
		if (force || this.dataList.length) {
			this.$<OpalDropdown>('menu')!.open();
		}

		return this;
	}

	closeMenu(): this {
		this.$<OpalDropdown>('menu')!.close();
		return this;
	}

	_selectItem(item?: IDataListItem | null) {
		if (item === undefined) {
			if (this._inputNotConfirmed) {
				let query = this.$<OpalTextInput>('textInput')!.value;

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
				this._inputNotConfirmed = false;

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

	clear(textInputValue?: string): this {
		this._clearDataList();

		if (this.value) {
			this.value = null;
		}

		this.$<OpalTextInput>('textInput')!.value = textInputValue || null;

		return this;
	}

	_clearDataList() {
		this._cancelLoading();

		this.closeMenu();

		this.dataList.clear();
		this._focusedListItem = null;
	}
}
