require('./index.css');

let { Utils: { mixin }, cellx } = require('cellx');
let { getText, Template, Component } = require('rionite');

let createObject = Object.create;

module.exports = Component.extend('opal-loaded-list', {
	Static: {
		props: {
			dataprovider: { type: String, required: true, readonly: true },
			nextCount: 100,
			query: String,
			itemAs: { default: '$item', readonly: true },
			preloading: { default: false, readonly: true }
		},

		i18n: {
			notFoundMessage: getText.t('Ничего не найдено')
		},

		template: new Template(require('./index.html')),

		assets: {
			loader: {}
		}
	},

	_scrolling: false,

	_loadingCheckTimeout: null,
	_requestCallback: null,

	_lastRequestedQuery: void 0,
	_lastAppliedQuery: void 0,

	initialize() {
		this.dataprovider = (this.ownerComponent || window)[this.props.dataprovider];

		cellx.define(this, {
			list: cellx.list(),
			total: void 0,

			_loadingCheckPlanned: false,
			loading: false,

			empty() {
				return !this.list.length;
			},

			notFoundShown() {
				return this.total === 0 && !this._loadingCheckPlanned && !this.loading;
			},

			loaderShown() {
				return this.total === void 0 || this.list.length < this.total || this.loading;
			}
		});
	},

	elementAttached() {
		this.listenTo(this.element, 'scroll', this._onScroll);
		this.listenTo(this.props, 'change:query', this._onQueryChange);

		if (this.props.preloading) {
			this._load();
		} else {
			this.checkLoading();
		}
	},

	_onScroll() {
		if (!this._scrolling) {
			this._scrolling = true;

			if (this._loadingCheckPlanned) {
				this._loadingCheckTimeout.clear();
			} else {
				this._loadingCheckPlanned = true;
			}

			this._loadingCheckTimeout = this.setTimeout(() => {
				this._loadingCheckPlanned = false;
				this.checkLoading();

				this._scrolling = false;
			}, 150);
		}
	},

	_onQueryChange() {
		if (this._loadingCheckPlanned) {
			this._loadingCheckTimeout.clear();
		} else {
			if (this.loading) {
				this._requestCallback.cancel();
				this.loading = false;
			}

			this.list.clear();
			this.total = void 0;

			this._loadingCheckPlanned = true;
		}

		this._loadingCheckTimeout = this.setTimeout(() => {
			this._loadingCheckPlanned = false;
			this.checkLoading();
		}, 300);
	},

	checkLoading() {
		if (
			this.props.query === this._lastRequestedQuery &&
				(this.loading || this.total !== void 0 && this.list.length == this.total)
		) {
			return;
		}

		let elRect = this.element.getBoundingClientRect();

		if (!elRect.height || elRect.bottom < this.assets.loader.element.getBoundingClientRect().top) {
			return;
		}

		this._load();
	},

	_load() {
		if (this.loading) {
			this._requestCallback.cancel();
		}

		let list = this.list;
		let query = this._lastRequestedQuery = this.props.query;

		this.loading = true;

		this.dataprovider.getNextItems(this.props.nextCount, list.length ? list.get(-1).id : void 0, query).then(
			this._requestCallback = this.registerCallback(data => {
				this.loading = false;

				this.total = data.total;

				if (query === this._lastAppliedQuery) {
					list.addRange(data.items);
				} else {
					list.clear().addRange(data.items);
					this._lastAppliedQuery = query;
				}

				setTimeout(() => {
					this.checkLoading();
				}, 1);
			})
		);
	},

	_getContentContext(content) {
		return mixin(createObject(this.props.context), content.props.context);
	}
});
