import './index.css';

import { IEvent, ObservableList, Cell, define } from 'cellx';
import { IDisposableListening, IDisposableTimeout, IDisposableCallback, getText, Component, d } from 'rionite';
import OpalTextInput from '../opal-text-input';
import OpalDropdown from '../opal-dropdown';
import template = require('./index.beml');

export interface IItem {
	value: string;
	text: string;
}

export interface IDataProvider {
	getItems(query: string): PromiseLike<{ items: Array<IItem> }>;
	getItems(count: number, query: string): PromiseLike<{ items: Array<IItem> }>;
}

function toComparable(str: string): string {
	return str.trim().replace(/\s+/g, ' ').toLowerCase();
}

@d.Component<OpalAutosuggestion>({
	elementIs: 'opal-autosuggestion',

	props: {
		dataprovider: { type: String, required: true, readonly: true },
		selectedItem: Object,
		minQueryLength: 3,
		count: 5
	},

	i18n: {
		inputPlaceholder: getText.t('начните вводить для поиска')
	},

	bemlTemplate: template,

	events: {
		'text-input': {
			focusin() {
				this.openMenu();
			},

			focusout() {
				this._cancelLoading();

				if (!(this.$('menu') as Component).props['opened']) {
					this._setSelectedItemOfList();
				}
			},

			input(evt: IEvent) {
				this._isInputLast = true;

				this.closeMenu();

				this._cancelLoading();
				this.list.clear();

				if ((evt.target as OpalTextInput).value.length >= this.props['minQueryLength']) {
					this._loadingPlanned = true;

					this._loadingTimeout = this.setTimeout(() => {
						this._loadingPlanned = false;
						this._load();
					}, 300);
				}
			},

			change(evt: IEvent) {
				if (!(evt.target as OpalTextInput).value.length) {
					this.closeMenu();
					this._cancelLoading();
					this.list.clear();
				}
			}
		},

		menu: {
			open() {
				this._documentFocusInListening = this.listenTo(document, 'focusin', this._onDocumentFocusIn);
				this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
				this._documentMouseUpListening = this.listenTo(document, 'mouseup', this._onDocumentMouseUp);
			},

			close() {
				this._documentFocusInListening.stop();
				this._documentKeyDownListening.stop();
				this._documentMouseUpListening.stop();
			}
		}
	}
})
export default class OpalAutosuggestion extends Component {
	dataProvider: IDataProvider;

	list: ObservableList<IItem>;
	_listItems: NodeListOf<HTMLElement>;

	_isInputLast = false;

	_loadingPlanned: boolean;
	_loadingTimeout: IDisposableTimeout;
	_requestCallback: IDisposableCallback;
	loading: boolean;

	loaderShown: boolean;

	selectedItem: IItem | null;
	_focusedListItem: HTMLElement;

	_documentFocusInListening: IDisposableListening;
	_documentKeyDownListening: IDisposableListening;
	_documentMouseUpListening: IDisposableListening;

	initialize() {
		this.dataProvider = Function(`return this.${ this.props['dataprovider'] };`)
			.call(this.ownerComponent || window);

		define(this, {
			list: new ObservableList(),

			_loadingPlanned: false,
			loading: false,

			loaderShown() {
				return this._loadingPlanned || this.loading;
			},

			selectedItem: this.props['selectedItem']
		});
	}

	ready() {
		this._listItems = (this.$('list') as HTMLElement)
			.getElementsByClassName('opal-autosuggestion__list-item') as NodeListOf<HTMLElement>;
	}

	elementAttached() {
		this.listenTo(
			(this.$('text-input') as Component).$('text-field') as HTMLElement,
			'click',
			this._onTextFieldClick
		);
		this.listenTo(this.list, 'change', this._onListChange);
		this.listenTo(this, 'change:loaderShown', this._onLoaderShownChange);
	}

	propertyChanged(name: string, value: any) {
		if (name == 'selectedItem') {
			this.selectedItem = value;
			(this.$('text-input') as OpalTextInput).value = value ? value.text : '';
		}
	}

	_onTextFieldClick() {
		this.openMenu();
	}

	_onListChange() {
		this.openMenu();
	}

	_onLoaderShownChange(evt: IEvent) {
		(this.$('text-input') as Component).props['loading'] = evt['value'];
	}

	_onDocumentFocusIn() {
		if (
			document.activeElement != document.body &&
				!this.element.contains(document.activeElement.parentNode as Node)
		) {
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
					let newFocusedListItem = this._focusedListItem[
						evt.which == 38 ? 'previousElementSibling' : 'nextElementSibling'
					] as HTMLElement | null;

					if (newFocusedListItem && newFocusedListItem.tagName != 'TEMPLATE') {
						this._focusedListItem.removeAttribute('focused');
						this._focusedListItem = newFocusedListItem;

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

					(this.$('text-input') as OpalTextInput).value = focusedListItemDataSet['text'] as string;

					this.closeMenu();

					this._setSelectedItem({
						value: focusedListItemDataSet['value'] as string,
						text: focusedListItemDataSet['text'] as string
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

	_onDocumentMouseUp() {
		setTimeout(() => {
			if (document.activeElement != (this.$('text-input') as Component).$('text-field')) {
				this.closeMenu();
				this._setSelectedItemOfList();
			}
		}, 1);
	}

	_onListItemClick(evt: Event, listItem: HTMLElement) {
		let textInput = this.$('text-input') as OpalTextInput;
		let listItemDataSet = listItem.dataset;

		textInput.value = listItemDataSet['text'] as string;
		textInput.focus();

		this.closeMenu();

		this._setSelectedItem({
			value: listItemDataSet['value'] as string,
			text: listItemDataSet['text'] as string
		});
	}

	_load() {
		this.loading = true;

		let dataProvider = this.dataProvider;
		let args = [(this.$('text-input') as OpalTextInput).value];

		if (dataProvider.getItems.length >= 2) {
			args.unshift(this.props['count']);
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
				let focusedListItem = this._focusedListItem = this._listItems[0];
				focusedListItem.setAttribute('focused', '');
			});
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

	openMenu() {
		if (this.list.length) {
			(this.$('menu') as OpalDropdown).open();
		}
	}

	closeMenu() {
		(this.$('menu') as OpalDropdown).close();
	}

	_setSelectedItemOfList() {
		if (this._isInputLast) {
			let comparableQuery = toComparable((this.$('text-input') as OpalTextInput).value);
			this._setSelectedItem(this.list.find(item => toComparable(item.text) == comparableQuery) || null);
		}
	}

	_setSelectedItem(selectedItem: IItem | null) {
		if (selectedItem ? !this.selectedItem || this.selectedItem.value != selectedItem.value : this.selectedItem) {
			this._isInputLast = false;
			this.selectedItem = selectedItem;
			this.emit('change');
		}
	}

	clear() {
		this.closeMenu();

		this._cancelLoading();
		this.list.clear();

		if (this.selectedItem) {
			this.selectedItem = null;
		}

		(this.$('text-input') as OpalTextInput).clear();
	}
}
