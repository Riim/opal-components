import './index.css';

import { IEvent, ObservableList, Cell, define } from 'cellx';
import { IDisposableListening, IDisposableTimeout, IDisposableCallback, getText, Component, d } from 'rionite';
import isFocusable from '../../Utils/isFocusable';
import OpalTextInput from '../opal-text-input';
import OpalDropdown from '../opal-dropdown';
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

	events: {
		':component': {
			'input-selected-item-change'(evt: IEvent) {
				let value = evt.value as IItem;

				this._clearList();

				this.selectedItem = value;
				(this.$('text-input') as OpalTextInput).value = value ? value.text : '';
			}
		},

		'text-input': {
			focus() {
				this.openMenu();
			},

			blur() {
				this._cancelLoading();

				// Нужно для следующего случая:
				// 1. выбираем что-то;
				// 2. изменяем запрос так чтобы ничего не нашлось;
				// 3. убираем фокус.
				if (!(this.$('menu') as Component).input.opened) {
					this._setSelectedItemOfList();
				}
			},

			input(evt: IEvent) {
				this._isNotInputConfirmed = true;

				this._clearList();

				if (((evt.target as OpalTextInput).value || '').length >= this.input.minQueryLength) {
					this._isLoadingPlanned = true;

					this._loadingTimeout = this.setTimeout(() => {
						this._isLoadingPlanned = false;
						this._load();
					}, 300);
				}
			},

			change(evt: IEvent) {
				if (!(evt.target as OpalTextInput).value) {
					this._clearList();

					if (this.selectedItem) {
						this.selectedItem = null;
						this.emit('change');
					}
				}
			}
		},

		menu: {
			'input-opened-change'(evt: IEvent) {
				if (evt.value) {
					this._documentFocusListening = this.listenTo(document, 'focus', this._onDocumentFocus, this, true);
					this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
					this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
				} else {
					this._documentFocusListening.stop();
					this._documentKeyDownListening.stop();
					this._documentClickListening.stop();
				}
			}
		}
	}
})
export default class OpalAutosuggest extends Component {
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
	_documentKeyDownListening: IDisposableListening;
	_documentClickListening: IDisposableListening;

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
		this.listenTo((this.$('text-input') as OpalTextInput).textField, 'click', this._onTextFieldClick);
		this.listenTo((this.$('menu') as Component).element as HTMLElement, 'mouseover', this._onMenuMouseOver);
		this.listenTo(this.list, 'change', this._onListChange);
		this.listenTo(this, 'change:isLoaderShown', this._onIsLoaderShownChange);
	}

	ready() {
		if (this.selectedItem) {
			(this.$('text-input') as OpalTextInput).value = this.selectedItem.text;
		}
	}

	_onTextFieldClick() {
		this.openMenu();
	}

	_onMenuMouseOver(evt: Event) {
		let menu = (this.$('menu') as Component).element as HTMLElement;
		let el = evt.target as HTMLElement;

		for (; !el.classList.contains('opal-autosuggest__list-item'); el = el.parentNode as HTMLElement) {
			if (el == menu) {
				return;
			}
		}

		let focusedListItem = this._focusedListItem as HTMLElement;

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
		(this.$('text-input') as Component).input.loading = evt.value;
	}

	_onDocumentFocus(evt: Event) {
		if (!isFocusable(evt.target as HTMLElement)) {
			return;
		}

		if (!this.element.contains((evt.target as HTMLElement).parentNode as Node)) {
			this.closeMenu();
			this._setSelectedItemOfList();
		}
	}

	_onDocumentKeyDown(evt: KeyboardEvent) {
		switch (evt.which) {
			case 38/* Up */:
			case 40/* Bottom */: {
				evt.preventDefault();

				let focusedListItem = this._focusedListItem;

				if (focusedListItem) {
					let listItems = this.$$('list-item');
					let index = listItems.indexOf(focusedListItem);

					if (evt.which == 38 ? index > 0 : index < listItems.length - 1) {
						let newFocusedListItem = listItems[index + (evt.which == 38 ? -1 : 1)] as HTMLElement;

						this._focusedListItem = newFocusedListItem;

						focusedListItem.removeAttribute('focused');
						newFocusedListItem.setAttribute('focused', '');
					}
				}

				break;
			}
			case 13/* Enter */:
			case 39/* Right */: {
				evt.preventDefault();

				let focusedListItem = this._focusedListItem;

				if (focusedListItem) {
					let focusedListItemDataSet = focusedListItem.dataset;

					(this.$('text-input') as OpalTextInput).value = focusedListItemDataSet.text as string;

					this._clearList();

					this._setSelectedItem({
						value: focusedListItemDataSet.value as string,
						text: focusedListItemDataSet.text as string
					});
				}

				break;
			}
			case 27/* Esc */: {
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

	_onListItemClick(evt: Event, listItem: HTMLElement) {
		let textInput = this.$('text-input') as OpalTextInput;
		let listItemDataSet = listItem.dataset;

		textInput.value = listItemDataSet.text as string;
		textInput.focus();

		this._clearList();

		this._setSelectedItem({
			value: listItemDataSet.value as string,
			text: listItemDataSet.text as string
		});
	}

	_load() {
		this.loading = true;

		let dataProvider = this.dataProvider;
		let args = [(this.$('text-input') as OpalTextInput).value];

		if (dataProvider.getItems.length >= 2) {
			args.unshift(this.input.count);
		}

		dataProvider.getItems.apply(dataProvider, args)
			.then(this._requestCallback = this.registerCallback(this._itemsRequestCallback));
	}

	_itemsRequestCallback(data: { items: Array<IItem> }) {
		this.loading = false;

		let items = data.items;

		if (items.length) {
			this.list.addRange(items);

			Cell.afterRelease(() => {
				let focusedListItem = this.$('list-item') as HTMLElement;

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
			(this.$('menu') as OpalDropdown).open();
		}

		return this;
	}

	closeMenu(): OpalAutosuggest {
		(this.$('menu') as OpalDropdown).close();
		return this;
	}

	_setSelectedItemOfList() {
		if (this._isNotInputConfirmed) {
			let comparableQuery = toComparable((this.$('text-input') as OpalTextInput).value || '');
			let selectedItem = this.list.find(item => toComparable(item.text) == comparableQuery) || null;

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

		(this.$('text-input') as OpalTextInput).clear();
	}

	_clearList() {
		this._cancelLoading();

		this.closeMenu();

		this.list.clear();
		this._focusedListItem = null;
	}
}
