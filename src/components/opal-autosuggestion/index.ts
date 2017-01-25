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
		input: {
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
				this._inputAfterSelecting = true;

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
			}
		}
	}
})
export default class OpalAutosuggestion extends Component {
	dataProvider: IDataProvider;

	list: ObservableList<IItem>;
	_listItems: NodeListOf<HTMLElement>;

	_inputAfterSelecting: boolean = false;

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
		this.listenTo((this.$('input') as Component).$('input'), 'click', this._onInputClick);
		this.listenTo(this.$('menu'), 'property-opened-change', this._onMenuOpenedChange);
		this.listenTo(this.list, 'change', this._onListChange);
		this.listenTo(this, 'change:loaderShown', this._onLoaderShownChange);
	}

	propertyChanged(name: string, value: any) {
		if (name == 'selectedItem') {
			this.selectedItem = value;
			(this.$('input') as OpalTextInput).value = value ? value.text : '';
		}
	}

	_onInputClick() {
		this.openMenu();
	}

	_onMenuOpenedChange(evt: IEvent) {
		if (evt.target != this.$('menu')) {
			return;
		}

		if (evt['value']) {
			this._documentFocusInListening = this.listenTo(document, 'focusin', this._onDocumentFocusIn);
			this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
			this._documentMouseUpListening = this.listenTo(document, 'mouseup', this._onDocumentMouseUp);
		} else {
			this._documentFocusInListening.stop();
			this._documentKeyDownListening.stop();
			this._documentMouseUpListening.stop();
		}
	}

	_onListChange() {
		this.openMenu();
	}

	_onLoaderShownChange(evt: IEvent) {
		(this.$('input') as Component).props['loading'] = evt['value'];
	}

	_onDocumentFocusIn() {
		if (document.activeElement != document.body && !this.element.contains(document.activeElement.parentNode as Node)) {
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

					(this.$('input') as OpalTextInput).value = focusedListItemDataSet['text'];

					this.closeMenu();

					this._setSelectedItem({
						value: focusedListItemDataSet['value'],
						text: focusedListItemDataSet['text']
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
			if (document.activeElement != (this.$('input') as Component).$('input')) {
				this.closeMenu();
				this._setSelectedItemOfList();
			}
		}, 1);
	}

	_onListItemClick(evt: Event, listItem: HTMLElement) {
		let input = this.$('input') as OpalTextInput;
		let listItemDataSet = listItem.dataset;

		input.value = listItemDataSet['text'];
		input.focus();

		this.closeMenu();

		this._setSelectedItem({
			value: listItemDataSet['value'],
			text: listItemDataSet['text']
		});
	}

	_load() {
		this.loading = true;

		let dataProvider = this.dataProvider;
		let args = [(this.$('input') as OpalTextInput).value];

		if (dataProvider.getItems.length >= 2) {
			args.unshift(this.props['count']);
		}

		dataProvider.getItems.apply(dataProvider, args).then(
			this._requestCallback = this.registerCallback(
				function(this: OpalAutosuggestion, data: { items: Array<IItem> }) {
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
			)
		);
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
		if (this._inputAfterSelecting) {
			let comparableQuery = toComparable((this.$('input') as OpalTextInput).value);
			this._setSelectedItem(this.list.find(item => toComparable(item.text) == comparableQuery) || null);
		}
	}

	_setSelectedItem(selectedItem: IItem | null) {
		if (selectedItem ? !this.selectedItem || this.selectedItem.value != selectedItem.value : this.selectedItem) {
			this._inputAfterSelecting = false;
			this.selectedItem = selectedItem;
			this.emit('change');
		}
	}

	clear() {
		if (this.selectedItem) {
			this.selectedItem = null;
		}

		(this.$('input') as OpalTextInput).clear();
	}
}
