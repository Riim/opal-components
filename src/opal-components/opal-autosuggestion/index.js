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
			selectedItem: Object,
			minQueryLength: 3,
			count: 5
		},

		i18n: {
			inputPlaceholder: getText.t('начните вводить для поиска')
		},

		template: new ComponentTemplate(require('./index.html')),

		events: {
			input: {
				focusin() {
					this.openMenu();
				},

				focusout() {
					this._cancelLoading();

					if (!this.$('menu').props.opened) {
						this._setSelectedItemOfList();
					}
				},

				input(evt) {
					this._wasInputAfterSelecting = true;

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
			}
		}
	},

	_wasInputAfterSelecting: false,

	_loadingTimeout: null,
	_requestCallback: null,

	_listItems: null,
	_focusedListItem: null,

	initialize() {
		this.dataProvider = Function(`return this.${ this.props.dataprovider };`).call(this.ownerComponent || window);

		cellx.define(this, {
			list: cellx.list(),

			_loadingPlanned: false,
			loading: false,

			loaderShown() {
				return this._loadingPlanned || this.loading;
			},

			selectedItem: this.props.selectedItem
		});
	},

	ready() {
		this._listItems = this.$('list').getElementsByClassName('opal-autosuggestion__list-item');
	},

	elementAttached() {
		this.listenTo(this.$('input').$('input'), 'click', this._onInputClick);
		this.listenTo(this.$('menu').props, 'change:opened', this._onMenuOpenedChange);
		this.listenTo(this.list, 'change', this._onListChange);
		this.listenTo(this, 'change:loaderShown', this._onLoaderShownChange);
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'selected-item') {
			this.selectedItem = value;
			this.$('input').value = value ? value.text : '';
		}
	},

	_load() {
		this.loading = true;

		let dataProvider = this.dataProvider;
		let args = [this.$('input').value];

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
		if (evt.value) {
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
		this.$('input').props.loading = evt.value;
	},

	_onDocumentFocusIn() {
		if (document.activeElement != document.body && !this.element.contains(document.activeElement.parentNode)) {
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

					let focusedListItemDataSet = focusedListItem.dataset;

					this.$('input').value = focusedListItemDataSet.text;

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
			if (document.activeElement != this.$('input').$('input')) {
				this.closeMenu();
				this._setSelectedItemOfList();
			}
		}, 1);
	},

	_onListItemClick(evt, listItem) {
		let input = this.$('input');
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
			this.$('menu').open();
		}
	},

	closeMenu() {
		this.$('menu').close();
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
		if (this._wasInputAfterSelecting) {
			let comparableQuery = toComparable(this.$('input').value);
			this._setSelectedItem(this.list.find(item => toComparable(item.text) == comparableQuery) || null);
		}
	},

	_setSelectedItem(selectedItem) {
		if (
			selectedItem ?
				!this.selectedItem || this.selectedItem.value != selectedItem.value :
				this.selectedItem
		) {
			this._wasInputAfterSelecting = false;
			this.selectedItem = selectedItem;
			this.emit('change');
		}
	}
});
