require('./index.css');

let { Cell, cellx } = require('cellx');
let { getText, ComponentTemplate, Component } = require('rionite');

function toComparable(str) {
	return str.trim().replace(/\s+/g, ' ').toLowerCase();
}

module.exports = Component.extend('opal-autosuggestion', {
	Static: {
		props: {
			dataprovider: { type: String, required: true, readonly: true },
			minQueryLength: 3,
			count: 5
		},

		i18n: {
			inputPlaceholder: getText.t('начните вводить для поиска')
		},

		template: new ComponentTemplate(require('./index.html')),

		assets: {
			input: {
				'on-focusin'() {
					this.openMenu();
				},

				'on-focusout'() {
					this._cancelLoading();

					if (!this.assets.menu.props.opened) {
						this._setSelectedItemOfList();
					}
				},

				'on-input'(evt) {
					this.closeMenu();

					this._cancelLoading();
					this.list.clear();

					if (evt.target.value.length >= this.props.minQueryLength) {
						this._loadingPlanned = true;

						this._loadingTimeout = this.setTimeout(() => {
							this._loadingPlanned = false;
							this._load();
						}, 300);
					}
				}
			},

			menu: {},
			list: {}
		}
	},

	_loadingTimeout: null,
	_requestCallback: null,

	_listItems: null,
	_focusedListItem: null,

	initialize() {
		this.dataProvider = (this.ownerComponent || window)[this.props.dataprovider];

		cellx.define(this, {
			list: cellx.list(),

			_loadingPlanned: false,
			loading: false,

			loaderShown() {
				return this._loadingPlanned || this.loading;
			},

			selectedItem: null
		});
	},

	ready() {
		this._listItems = this.assets.list.getElementsByClassName('opal-autosuggestion__list-item');
	},

	elementAttached() {
		this.listenTo(this.assets.input.assets.input, 'click', this._onInputClick);
		this.listenTo(this.assets.menu.props, 'change:opened', this._onMenuOpenedChange);
		this.listenTo(this.list, 'change', this._onListChange);
		this.listenTo(this, 'change:loaderShown', this._onLoaderShownChange);
	},

	_load() {
		this.loading = true;

		let dataProvider = this.dataProvider;
		let args = [this.assets.input.value];

		if (dataProvider.getItems.length >= 2) {
			args.unshift(this.props.count);
		}

		dataProvider.getItems.apply(dataProvider, args).then(
			this._requestCallback = this.registerCallback(data => {
				this.loading = false;

				let items = data.items;

				if (items.length) {
					this.list.addRange(items);

					Cell.afterRelease(() => {
						let focusedListItem = this._focusedListItem = this._listItems[0];
						focusedListItem.setAttribute('focused', '');
					});
				}
			})
		);
	},

	_onInputClick() {
		this.openMenu();
	},

	_onMenuOpenedChange(evt) {
		if (evt.value[1]) {
			this._documentFocusInListening = this.listenTo(document, 'focusin', this._onDocumentFocusIn);
			this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
			this._documentMouseUpListening = this.listenTo(document, 'mouseup', this._onDocumentMouseUp);
		} else {
			this._documentFocusInListening.stop();
			this._documentKeyDownListening.stop();
			this._documentMouseUpListening.stop();
		}
	},

	_onListChange() {
		this.openMenu();
	},

	_onLoaderShownChange(evt) {
		this.assets.input.props.loading = evt.value;
	},

	_onDocumentFocusIn() {
		if (document.activeElement != this.assets.input.assets.input) {
			this.closeMenu();
			this._setSelectedItemOfList();
		}
	},

	_onDocumentKeyDown(evt) {
		switch (evt.which) {
			case 38/* Up */:
			case 40/* Bottom */: {
				let focusedListItem = this._focusedListItem;

				if (focusedListItem) {
					evt.preventDefault();

					let newFocusedListItem = this._focusedListItem[
						evt.which == 38 ? 'previousElementSibling' : 'nextElementSibling'
					];

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
				let focusedListItem = this._focusedListItem;

				if (focusedListItem) {
					evt.preventDefault();

					let input = this.assets.input;
					let focusedListItemDataSet = focusedListItem.dataset;

					input.value = focusedListItemDataSet.text;

					this.closeMenu();

					this._setSelectedItem({
						value: focusedListItemDataSet.value,
						text: focusedListItemDataSet.text
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
	},

	_onDocumentMouseUp() {
		setTimeout(() => {
			if (document.activeElement != this.assets.input.assets.input) {
				this.closeMenu();
				this._setSelectedItemOfList();
			}
		}, 1);
	},

	_onListItemClick(evt, listItem) {
		let input = this.assets.input;
		let listItemDataSet = listItem.dataset;

		input.value = listItemDataSet.text;
		input.focus();

		this.closeMenu();

		this._setSelectedItem({
			value: listItemDataSet.value,
			text: listItemDataSet.text
		});
	},

	openMenu() {
		if (this.list.length) {
			this.assets.menu.open();
		}
	},

	closeMenu() {
		this.assets.menu.close();
	},

	_cancelLoading() {
		if (this._loadingPlanned) {
			this._loadingPlanned = false;
			this._loadingTimeout.clear();
		} else if (this.loading) {
			this._requestCallback.cancel();
			this.loading = false;
		}
	},

	_setSelectedItemOfList() {
		let comparableQuery = toComparable(this.assets.input.value);
		this._setSelectedItem(this.list.find(item => toComparable(item.text) == comparableQuery) || null);
	},

	_setSelectedItem(selectedItem) {
		if (
			selectedItem ?
				!this.selectedItem || this.selectedItem.value != selectedItem.value :
				this.selectedItem
		) {
			this.selectedItem = selectedItem;
			this.emit('change');
		}
	}
});
