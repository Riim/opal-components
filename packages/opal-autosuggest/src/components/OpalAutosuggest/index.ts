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
	Listen,
	Param
	} from 'rionite';
import './index.css';
import template from './template.rnt';

export interface IDataListItem {
	[name: string]: any;
}

export interface IDataProvider {
	getItems(query: string): PromiseLike<{ items: Array<IDataListItem> }>;
	getItems(limit: number, query: string): PromiseLike<{ items: Array<IDataListItem> }>;
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
		option: {
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
	static EVENT_CHANGE = Symbol('change');

	@Param({ type: eval, default: defaultDataListItemSchema, readonly: true })
	declare dataListItemSchema: {
		value?: string;
		text?: string;
		subtext?: string;
	};
	@Param({ required: true, readonly: true })
	declare dataProvider: IDataProvider;
	@Param(eval)
	declare value: IDataListItem | null;
	@Param({ default: 3 })
	declare minQueryLength: number;
	@Param({ default: 5 })
	declare limit: number;
	@Param(Boolean)
	declare openMenuOnNothingFound: boolean;

	static defaultDataListItemSchema = defaultDataListItemSchema;

	@Observable
	dataList = new ObservableList<IDataListItem>();
	_dataListItemValueFieldName: string;
	_dataListItemTextFieldName: string;
	_dataListItemSubtextFieldName: string;

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

	_focusedOption: HTMLElement | null;

	_documentFocusListening: IDisposableListening;
	_documentListening: IDisposableListening;

	initialize() {
		let dataListItemSchema = this.dataListItemSchema;
		let defaultDataListItemSchema = (this.constructor as typeof OpalAutosuggest)
			.defaultDataListItemSchema;

		this._dataListItemValueFieldName =
			dataListItemSchema.value || defaultDataListItemSchema.value;
		this._dataListItemTextFieldName = dataListItemSchema.text || defaultDataListItemSchema.text;
		this._dataListItemSubtextFieldName =
			dataListItemSchema.subtext || defaultDataListItemSchema.subtext;
	}

	ready() {
		if (this.value) {
			this.$<OpalTextInput>('textInput')!.value = this.value[this._dataListItemTextFieldName];
		}
	}

	@Listen('change:value')
	_onValueChange(evt: IEvent) {
		let item: IDataListItem = evt.data.value;

		this._clearDataList();

		this.value = item;
		this.$<OpalTextInput>('textInput')!.value = item
			? item[this._dataListItemTextFieldName]
			: '';
	}

	@Listen('change:loaderShown')
	_onLoaderShownChange(evt: IEvent) {
		this.$<OpalTextInput>('textInput')!.loading = evt.data.value;
	}

	@Listen(ObservableList.EVENT_CHANGE, '@dataList')
	_onDataListChange() {
		// Смотри _itemsRequestCallback
		nextTick(() => {
			this.openMenu();
		});
	}

	@Listen(OpalTextInput.EVENT_FOCUS, 'textInput')
	_onTextInputFocus() {
		this.openMenu();
	}

	@Listen(OpalTextInput.EVENT_BLUR, 'textInput')
	_onTextInputBlur() {
		this._cancelLoading();

		// Нужно для следующего случая:
		// 1. выбираем что-то;
		// 2. изменяем запрос так чтобы ничего не нашлось;
		// 3. убираем фокус.
		if (!this.$<OpalDropdown>('menu')!.opened) {
			this._selectItem();
		}
	}

	@Listen(OpalTextInput.EVENT_INPUT, 'textInput')
	_onTextInputInput(evt: IEvent<OpalTextInput>) {
		this._inputNotConfirmed = true;

		this._clearDataList();

		if ((evt.target.value || '').length >= this.minQueryLength) {
			this._loadingPlanned = true;

			this._loadingTimeout = this.setTimeout(() => {
				this._loadingPlanned = false;
				this._load();
			}, 300);
		}
	}

	@Listen(OpalTextInput.EVENT_CHANGE, 'textInput')
	_onTextInputChange(evt: IEvent<OpalTextInput>) {
		if (!evt.target.value) {
			this._clearDataList();

			if (this.value) {
				this.value = null;
				this.emit(OpalAutosuggest.EVENT_CHANGE);
			}
		}
	}

	@Listen('click', self => self.$<OpalTextInput>('textInput')!.textField)
	_onTextFieldClick() {
		this.openMenu();
	}

	@Listen('change:opened', 'menu')
	_onMenuOpenedChange(evt: IEvent) {
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

	@Listen('mouseover', self => self.$<BaseComponent>('menu')!.element)
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

		let focusedOption = this._focusedOption;

		if (!focusedOption || el != focusedOption) {
			this._focusedOption = el as HTMLElement;

			if (focusedOption) {
				focusedOption.removeAttribute('focused');
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

				let focusedOption = this._focusedOption;
				let options = this.$$<HTMLElement>('option');

				if (focusedOption) {
					let index = options.indexOf(focusedOption);

					if (evt.which == 38 ? index > 0 : index < options.length - 1) {
						let newFocusedOption = options[index + (evt.which == 38 ? -1 : 1)];

						this._focusedOption = newFocusedOption;
						focusedOption.removeAttribute('focused');
						newFocusedOption.setAttribute('focused', '');
					} else if (evt.which == 40) {
						let menuFooterSlot = this.$<BaseComponent>('menuFooterSlot');

						if (menuFooterSlot) {
							let tabbableComponentEl: IPossiblyComponentElement | null = menuFooterSlot.element.querySelector(
								'[tab_index]'
							);

							if (tabbableComponentEl && tabbableComponentEl.$component) {
								if (focusedOption) {
									this._focusedOption = null;
									focusedOption.removeAttribute('focused');
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
								if (!options.length) {
									(tabbableComponentEl.$component as any).focus();
									document.body.classList.remove('_noFocusHighlight');
									break;
								} else if ((tabbableComponentEl.$component as any).focused) {
									document.body.classList.remove('_noFocusHighlight');
									break;
								}
							}
						}
					}

					if (options.length) {
						let newFocusedOption = options[evt.which == 38 ? options.length - 1 : 0];
						this._focusedOption = newFocusedOption;
						newFocusedOption.setAttribute('focused', '');
					}
				}

				this.$<OpalTextInput>('textInput')!.focus();

				break;
			}
			case 13 /* Enter */:
			case 39 /* Right */: {
				if (
					this._focusedOption &&
					(document.activeElement == this.$<OpalTextInput>('textInput')!.textField ||
						document.activeElement == document.body)
				) {
					evt.preventDefault();

					let focusedOptionDataSet = this._focusedOption.dataset;

					this.$<OpalTextInput>('textInput')!.value = focusedOptionDataSet.text!;

					this._clearDataList();

					this._selectItem({
						[this._dataListItemValueFieldName]: focusedOptionDataSet.value,
						[this._dataListItemTextFieldName]: focusedOptionDataSet.text,
						[this._dataListItemSubtextFieldName]: focusedOptionDataSet.subtext
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

		if (this.dataProvider!.getItems.length >= 2) {
			args.unshift(this.limit);
		}

		this.dataProvider!.getItems
			.apply(this.dataProvider, args)
			.then((this._requestCallback = this.registerCallback(this._itemsRequestCallback)));
	}

	_itemsRequestCallback(data: { items: Array<IDataListItem> }) {
		this.loading = false;

		let items = data.items;

		if (items.length) {
			this.dataList.addRange(items);

			// Cell.release();
			// Содержимое OpalDropdown рендерится лениво, из-за этого обработчик изменения dataList
			// в RnRepeat оказывается после _onDataListChange. При первом открытии меню всё хорошо,
			// тк. RnRepeat#_render запускается в RnRepeat#elementConnected: OpalDropdown#_open() ->
			// this.contentRendered = true; -> RnRepeat#elementConnected -> RnRepeat#_render ->
			// OpalDropdown#_open$(). То есть при запуске OpalDropdown#_open$ RnRepeat уже
			// отрендерился. Но при втором открытии возможно следующее: срабатывает
			// _onDataListChange в котором открывается меню, для меню считается выравнивание, но
			// RnRepeat ещё не обновился тк. обработчик изменения dataList в нём идёт сразу за
			// местным. В результате выравнивание меню получается неправильным. По этой причине в
			// _onDataListChange добавлен nextTick и как следствие здесь вместо Cell.release тоже
			// нужно использовать nextTick.
			nextTick(() => {
				let focusedOption = this.$<HTMLElement>('option')!;

				this._focusedOption = focusedOption;
				focusedOption.setAttribute('focused', '');
			});
		} else if (this.openMenuOnNothingFound) {
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
			this.emit(OpalAutosuggest.EVENT_CHANGE);
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
		this._focusedOption = null;
	}
}
