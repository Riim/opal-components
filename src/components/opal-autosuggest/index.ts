import {
	Cell,
	define,
	IEvent,
	ObservableList
	} from 'cellx';
import {
	Component,
	d,
	getText,
	IDisposableCallback,
	IDisposableListening,
	IDisposableTimeout
	} from 'rionite';
import { isFocusable } from '../../Utils/isFocusable';
import { OpalDropdown } from '../opal-dropdown';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import template = require('./index.nelm');

export interface IItem {
	value: string;
	text: string;
}

export interface IDataProvider {
	getItems(query: string): PromiseLike<{ items: Array<IItem> }>;
	getItems(count: number, query: string): PromiseLike<{ items: Array<IItem> }>;
}

function toComparable(str: string): string {
	return str.replace(/\s+/g, ' ').toLowerCase();
}

@d.Component<OpalAutosuggest>({
	elementIs: 'opal-autosuggest',

	input: {
		dataprovider: { type: Object, readonly: true },
		dataproviderKeypath: { type: String, readonly: true },
		selectedItem: eval,
		minQueryLength: 3,
		count: 5,
		openMenuOnNothingFound: false
	},

	i18n: {
		textInputPlaceholder: getText.t('Начните вводить для поиска'),
		nothingFound: getText.t('Ничего не найдено')
	},

	template,

	domEvents: {
		'list-item': {
			click(_: any, listItem: HTMLElement) {
				let textInput = this.$<OpalTextInput>('text-input')!;
				let listItemDataSet = listItem.dataset;

				textInput.value = listItemDataSet.text!;
				textInput.focus();

				this._clearList();

				this._setSelectedItem({
					value: listItemDataSet.value!,
					text: listItemDataSet.text!
				});
			}
		}
	}
})
export class OpalAutosuggest extends Component {
	dataProvider: IDataProvider;

	list: ObservableList<IItem>;

	_isNotInputConfirmed = false;

	_isLoadingPlanned: boolean;
	_loadingTimeout: IDisposableTimeout;
	_requestCallback: IDisposableCallback;
	loading: boolean;

	isLoaderShown: boolean;

	_focusedListItem: HTMLElement | null;
	selectedItem: IItem | null;

	_documentFocusListening: IDisposableListening;
	_documentListening: IDisposableListening;

	initialize() {
		let input = this.input;
		let dataProvider = input.dataprovider;

		if (dataProvider || input.dataproviderKeypath) {
			if (!dataProvider) {
				dataProvider = Function(`return this.${ input.dataproviderKeypath };`)
					.call(this.ownerComponent || window);

				if (!dataProvider) {
					throw new TypeError('"dataProvider" is not defined');
				}
			}

			this.dataProvider = dataProvider;
		} else {
			throw new TypeError('Property "dataprovider" is required');
		}

		define(this, {
			list: new ObservableList<IItem>(),

			_isLoadingPlanned: false,
			loading: false,

			isLoaderShown(this: OpalAutosuggest): boolean {
				return this._isLoadingPlanned || this.loading;
			},

			selectedItem: input.selectedItem
		});
	}

	elementAttached() {
		this.listenTo(this, 'input-selected-item-change', this._onInputSelectedItemChange);
		this.listenTo('text-input', {
			focus: this._onTextInputFocus,
			blur: this._onTextInputBlur,
			input: this._onTextInputInput,
			change: this._onTextInputChange
		});
		this.listenTo(this.$<OpalTextInput>('text-input')!.textField, 'click', this._onTextFieldClick);
		this.listenTo('menu', 'input-opened-change', this._onMenuInputOpenedChange);
		this.listenTo(this.$<Component>('menu')!.element, 'mouseover', this._onMenuElementMouseOver);
		this.listenTo(this.list, 'change', this._onListChange);
		this.listenTo(this, 'change:isLoaderShown', this._onIsLoaderShownChange);
	}

	ready() {
		if (this.selectedItem) {
			this.$<OpalTextInput>('text-input')!.value = this.selectedItem.text;
		}
	}

	_onInputSelectedItemChange(evt: IEvent) {
		let value = evt.value as IItem;

		this._clearList();

		this.selectedItem = value;
		this.$<OpalTextInput>('text-input')!.value = value ? value.text : '';
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
		if (!this.$<Component>('menu')!.input.opened) {
			this._setSelectedItemOfList();
		}
	}

	_onTextInputInput(evt: IEvent<OpalTextInput>) {
		this._isNotInputConfirmed = true;

		this._clearList();

		if ((evt.target.value || '').length >= this.input.minQueryLength) {
			this._isLoadingPlanned = true;

			this._loadingTimeout = this.setTimeout(() => {
				this._isLoadingPlanned = false;
				this._load();
			}, 300);
		}
	}

	_onTextInputChange(evt: IEvent<OpalTextInput>) {
		if (!evt.target.value) {
			this._clearList();

			if (this.selectedItem) {
				this.selectedItem = null;
				this.emit('change');
			}
		}
	}

	_onTextFieldClick() {
		this.openMenu();
	}

	_onMenuInputOpenedChange(evt: IEvent) {
		if (evt.value) {
			this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
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
		let menu = this.$<Component>('menu')!.element;
		let el = evt.target as HTMLElement;

		for (; !el.classList.contains('opal-autosuggest__list-item'); el = el.parentNode as HTMLElement) {
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

	_onListChange() {
		this.openMenu();
	}

	_onIsLoaderShownChange(evt: IEvent) {
		this.$<Component>('text-input')!.input.loading = evt.value;
	}

	_onDocumentFocus(evt: Event) {
		if (!isFocusable(evt.target as HTMLElement)) {
			return;
		}

		if (!this.element.contains((evt.target as HTMLElement).parentNode!)) {
			this.closeMenu();
			this._setSelectedItemOfList();
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

					this._clearList();

					this._setSelectedItem({
						value: focusedListItemDataSet.value!,
						text: focusedListItemDataSet.text!
					});
				}

				break;
			}
			case 27 /* Esc */: {
				evt.preventDefault();
				this.closeMenu();
				this._setSelectedItemOfList();
				break;
			}
		}
	}

	_onDocumentClick(evt: Event) {
		if (!this.element.contains(evt.target as HTMLElement)) {
			this.closeMenu();
			this._setSelectedItemOfList();
		}
	}

	_load() {
		this.loading = true;

		let dataProvider = this.dataProvider;
		let args = [this.$<OpalTextInput>('text-input')!.value];

		if (dataProvider.getItems.length >= 2) {
			args.unshift(this.input.count);
		}

		dataProvider.getItems.apply(dataProvider, args)
			.then(this._requestCallback = this.registerCallback(this._itemsRequestCallback));
	}

	_itemsRequestCallback(data: { [name: string]: any }) {
		this.loading = false;

		let items: Array<IItem> = data.items;

		if (items.length) {
			this.list.addRange(items);

			Cell.afterRelease(() => {
				let focusedListItem = this.$<HTMLElement>('list-item')!;

				this._focusedListItem = focusedListItem;
				focusedListItem.setAttribute('focused', '');
			});
		} else if (this.input.openMenuOnNothingFound) {
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
		if (force || this.list.length) {
			this.$<OpalDropdown>('menu')!.open();
		}

		return this;
	}

	closeMenu(): OpalAutosuggest {
		this.$<OpalDropdown>('menu')!.close();
		return this;
	}

	_setSelectedItemOfList() {
		if (this._isNotInputConfirmed) {
			let comparableQuery = toComparable(this.$<OpalTextInput>('text-input')!.value || '');
			let selectedItem = this.list.find((item) => toComparable(item.text) == comparableQuery) || null;

			if (selectedItem && this.list.length > 1) {
				this._clearList();
			}

			this._setSelectedItem(selectedItem);
		}
	}

	_setSelectedItem(selectedItem: IItem | null) {
		if (selectedItem) {
			this._isNotInputConfirmed = false;

			if (this.selectedItem && this.selectedItem.value == selectedItem.value) {
				return;
			}
		} else if (!this.selectedItem) {
			return;
		}

		this.selectedItem = selectedItem;
		this.emit('change');
	}

	clear() {
		this._clearList();

		if (this.selectedItem) {
			this.selectedItem = null;
		}

		this.$<OpalTextInput>('text-input')!.clear();
	}

	_clearList() {
		this._cancelLoading();

		this.closeMenu();

		this.list.clear();
		this._focusedListItem = null;
	}
}
