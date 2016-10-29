require('./index.css');

let { Utils: { mixin }, cellx } = require('cellx');
let { getText, ComponentTemplate, Component } = require('rionite');

module.exports = Component.extend('opal-loaded-list', {
	Static: {
		props: {
			dataprovider: { type: String, required: true, readonly: true },
			count: 100,
			query: String,
			itemAs: { default: '$item', readonly: true },
			preloading: { default: false, readonly: true }
		},

		i18n: {
			notFoundMessage: getText.t('Ничего не найдено')
		},

		template: new ComponentTemplate(require('./index.html'))
	},

	_scrolling: false,

	_loadingCheckTimeout: null,
	_requestCallback: null,

	_lastRequestedQuery: void 0,
	_lastAppliedQuery: void 0,

	initialize() {
		this.dataProvider = Function(`return this.${ this.props.dataprovider };`).call(this.ownerComponent || window);

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

		if (!elRect.height || elRect.bottom < this.$('loader').element.getBoundingClientRect().top) {
			return;
		}

		this._load();
	},

	_load() {
		if (this.loading) {
			this._requestCallback.cancel();
		}

		let query = this._lastRequestedQuery = this.props.query;
		let dataProvider = this.dataProvider;
		let infinite = dataProvider.getItems.length >= 2;
		let args = [query];

		if (infinite) {
			args.unshift(this.props.count, this.list.length ? this.list.get(-1).value : null);
		}

		this.loading = true;

		dataProvider.getItems.apply(dataProvider, args).then(
			this._requestCallback = this.registerCallback(data => {
				this.loading = false;

				let items = data.items;

				this.total = infinite && data.total !== void 0 ? data.total : items.length;

				if (query === this._lastAppliedQuery) {
					this.list.addRange(items);
				} else {
					this.list.clear().addRange(items);
					this._lastAppliedQuery = query;
				}

				setTimeout(() => {
					this.checkLoading();
				}, 1);

				this.emit('loaded');
			})
		);
	},

	_getContentContext(content) {
		return mixin(Object.create(this.props.context), content.props.context);
	}
});
