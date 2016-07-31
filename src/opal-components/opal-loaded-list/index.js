require('./index.css');

let { utils: { mixin }, cellx } = require('cellx');
let { Component, getText, Rionite } = require('rionite');

let createObject = Object.create;

module.exports = Component.extend('opal-loaded-list', {
	Static: {
		props: {
			provider: String,
			nextCount: 100,
			query: String,
			itemAs: '$item',
			preloading: false
		},

		i18n: {
			notFoundMessage: getText.t('Ничего не найдено')
		},

		template: Rionite.template(require('./index.html')),

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
		this.dataProvider = this.ownerComponent[this.props.provider];

		cellx.define(this, {
			list: cellx.list(),
			total: void 0,

			loadingCheckPlanned: false,
			loading: false,

			notFoundShown() {
				return this.total === 0 && !this.loadingCheckPlanned && !this.loading;
			},

			loaderShown() {
				return this.total === void 0 || this.list.length < this.total || this.loading;
			}
		});
	},

	elementAttached() {
		let props = this.props;

		this.listenTo(this.element, 'scroll', this._onScroll);
		this.listenTo(props, 'change:query', this._onQueryChange);

		if (props.preloading) {
			this._load();
		} else {
			this.checkLoading();
		}
	},

	_onScroll() {
		if (!this._scrolling) {
			this._scrolling = true;

			if (this.loadingCheckPlanned) {
				this._loadingCheckTimeout.clear();
			} else {
				this.loadingCheckPlanned = true;
			}

			this._loadingCheckTimeout = this.setTimeout(() => {
				this.loadingCheckPlanned = false;
				this.checkLoading();

				this._scrolling = false;
			}, 150);
		}
	},

	_onQueryChange() {
		if (this.loadingCheckPlanned) {
			this._loadingCheckTimeout.clear();
		} else {
			if (this._requestCallback) {
				this._requestCallback.cancel();
				this.loading = false;
			}

			this.list.clear();
			this.total = void 0;

			this.loadingCheckPlanned = true;
		}

		this._loadingCheckTimeout = this.setTimeout(() => {
			this.loadingCheckPlanned = false;
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

		if (!elRect.height || elRect.bottom < this.loader.element.getBoundingClientRect().top) {
			return;
		}

		this._load();
	},

	_load() {
		if (this._requestCallback) {
			this._requestCallback.cancel();
		}

		let props = this.props;
		let list = this.list;
		let query = this._lastRequestedQuery = props.query;

		this.loading = true;

		this.dataProvider.getNext(props.nextCount, list.length ? list.get(-1).id : void 0, query).then(
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
