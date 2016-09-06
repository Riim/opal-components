require('./index.css');

let { Cell, cellx } = require('cellx');
let { Component, getText, template } = require('rionite');

module.exports = Component.extend('opal-autosuggestion', {
	Static: {
		props: {
			dataprovider: { type: String, required: true, readonly: true },
			minLength: 3
		},

		i18n: {
			inputPlaceholder: getText.t('начните вводить для поиска')
		},

		template: template(require('./index.html')),

		assets: {
			input: {
				'on-focusin'() {
					this.openMenu();
				},

				'on-input'(evt) {
					this.closeMenu();

					let needLoading = evt.target.value.length >= this.props.minLength;

					if (this._loadingPlanned) {
						this._loadingTimeout.clear();
					} else {
						if (this.loading) {
							this._requestCallback.cancel();
							this.loading = false;
						}

						this.list.clear();

						if (needLoading) {
							this._loadingPlanned = true;
						}
					}

					if (needLoading) {
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
		this.dataprovider = (this.ownerComponent || window)[this.props.dataprovider];

		cellx.define(this, {
			list: cellx.list(),

			_loadingPlanned: false,
			loading: false,

			loaderShown() {
				return this._loadingPlanned || this.loading;
			}
		});
	},

	ready() {
		this._listItems = this.assets.list.getElementsByClassName('opal-autosuggestion__list-item');
	},

	elementAttached() {
		this.listenTo(this.list, 'change', this._onListChange);
		this.listenTo(this.assets.input.assets.input, 'click', this._onInputClick);
		this.listenTo(this.assets.menu.props, 'change:opened', this._onMenuOpenedChange);
	},

	_load() {
		this.loading = true;

		this.dataprovider.getItems(this.assets.input.value).then(this._requestCallback = this.registerCallback(data => {
			this.loading = false;

			if (data.items.length) {
				this.list.addRange(data.items);

				Cell.afterRelease(() => {
					let focusedListItem = this._focusedListItem = this._listItems[0];
					focusedListItem.setAttribute('focused', '');
				});
			}
		}));
	},

	_onListChange() {
		this.openMenu();
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

	_onDocumentFocusIn() {
		if (document.activeElement != this.assets.input.assets.input) {
			this.closeMenu();
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

					input.value = focusedListItem.dataset.text;
					input.focus();

					this.closeMenu();
				}

				break;
			}
			case 27/* Esc */: {
				evt.preventDefault();
				this.assets.input.focus();
				this.closeMenu();
				break;
			}
		}
	},

	_onDocumentMouseUp() {
		setTimeout(() => {
			if (document.activeElement != this.assets.input.assets.input) {
				this.closeMenu();
			}
		}, 1);
	},

	_onListItemClick(evt, target) {
		let input = this.assets.input;

		input.value = target.dataset.text;
		input.focus();

		this.closeMenu();
	},

	openMenu() {
		if (this.list.length) {
			this.assets.menu.open();
		}
	},

	closeMenu() {
		this.assets.menu.close();
	}
});
