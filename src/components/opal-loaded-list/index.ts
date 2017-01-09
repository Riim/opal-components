import './index.css';

import { ObservableList, define, Utils } from 'cellx';
import { IDisposableTimeout, IDisposableCallback, getText, Component, d } from 'rionite';
import template = require('./index.beml');

let mixin = Utils.mixin;

export interface IItem {
	value: string;
	text: string;
}

export interface IDataProvider {
	getItems(query?: string): PromiseLike<{ items: Array<IItem> }>;
	getItems(count: number, after?: string, query?: string): PromiseLike<{ items: Array<IItem>, total?: number }>;
}

@d.Component({
	elementIs: 'opal-loaded-list',

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

	bemlTemplate: template
})
export default class OpalLoadedList extends Component {
	dataProvider: IDataProvider;

	list: ObservableList<IItem>;
	total: number | undefined;

	_scrolling: boolean = false;
	_loadingCheckPlanned: boolean;
	_loadingCheckTimeout: IDisposableTimeout;
	_requestCallback: IDisposableCallback;
	loading: boolean;

	_lastRequestedQuery: string | undefined;
	_lastLoadedQuery: string | undefined;

	empty: boolean;
	notFoundShown: boolean;
	loaderShown: boolean;

	initialize() {
		let dataProvider = Function(`return this.${ this.props['dataprovider'] };`).call(this.ownerComponent || window);

		if (!dataProvider) {
			throw new TypeError('dataProvider is not defined');
		}

		this.dataProvider = dataProvider;

		define(this, {
			list: new ObservableList<IItem>(),
			total: undefined,

			_loadingCheckPlanned: false,
			loading: false,

			empty() {
				return !this.list.length;
			},

			notFoundShown() {
				return this.total === 0 && !this._loadingCheckPlanned && !this.loading;
			},

			loaderShown() {
				return this.total === undefined || this.list.length < this.total || this.loading;
			}
		});
	}

	elementAttached() {
		this.listenTo(this.element, 'scroll', this._onScroll);
		this.listenTo(this.props, 'change:query', this._onQueryChange);

		if (this.props['preloading']) {
			this._load();
		} else {
			this.checkLoading();
		}
	}

	_onScroll() {
		if (!this._scrolling) {
			this._scrolling = true;

			if (this._loadingCheckPlanned) {
				this._loadingCheckTimeout.clear();
			} else {
				this._loadingCheckPlanned = true;
			}

			this._loadingCheckTimeout = this.setTimeout(() => {
				this._scrolling = false;
				this._loadingCheckPlanned = false;
				this.checkLoading();
			}, 150);
		}
	}

	_onQueryChange() {
		if (this._loadingCheckPlanned) {
			this._loadingCheckTimeout.clear();
		} else {
			if (this.loading) {
				this._requestCallback.cancel();
				this.loading = false;
			}

			this.list.clear();
			this.total = undefined;

			this._loadingCheckPlanned = true;
		}

		this._loadingCheckTimeout = this.setTimeout(() => {
			this._scrolling = false;
			this._loadingCheckPlanned = false;
			this.checkLoading();
		}, 300);
	}

	checkLoading() {
		if (
			this.props['query'] === this._lastRequestedQuery &&
				(this.loading || this.total !== undefined && this.list.length == this.total)
		) {
			return;
		}

		let elRect = this.element.getBoundingClientRect();

		if (!elRect.height || elRect.bottom < (this.$('loader') as Component).element.getBoundingClientRect().top) {
			return;
		}

		this._load();
	}

	_load() {
		if (this.loading) {
			this._requestCallback.cancel();
		}

		let query: string | undefined = this._lastRequestedQuery = this.props['query'];
		let dataProvider = this.dataProvider;
		let infinite = dataProvider.getItems.length >= 2;
		let args = [query];

		if (infinite) {
			args.unshift(this.props['count'], this.list.length ? this.list.get(-1).value : undefined);
		}

		this.loading = true;

		dataProvider.getItems.apply(dataProvider, args).then(
			this._requestCallback = this.registerCallback(
				function(this: OpalLoadedList, data: { items: Array<IItem>, total?: number }) {
					this.loading = false;

					let items = data.items;

					this.total = infinite && data.total !== undefined ? data.total : items.length;

					if (query === this._lastLoadedQuery) {
						this.list.addRange(items);
					} else {
						this.list.clear().addRange(items);
						this._lastLoadedQuery = query;
					}

					setTimeout(() => {
						this.checkLoading();
					}, 1);

					this.emit('loaded');
				}
			)
		);
	}

	_getContentContext(content: Component): Object {
		return mixin(Object.create(this.props.context as Object), content.props.context as Object);
	}
}
