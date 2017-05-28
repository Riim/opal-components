import './index.css';

import { ObservableList, Cell, define, Utils } from 'cellx';
import { IDisposableTimeout, IDisposableCallback, getText, Component, d } from 'rionite';
import template = require('./index.nelm');

let mixin = Utils.mixin;

export interface IItem {
	value: string;
	text: string;
}

export interface IDataProvider {
	getItems(query?: string): PromiseLike<{ items: Array<IItem> }>;
	getItems(count: number, after?: string, query?: string): PromiseLike<{ items: Array<IItem>, total?: number }>;
}

@d.Component<OpalLoadedList>({
	elementIs: 'opal-loaded-list',

	input: {
		dataprovider: { type: Object, readonly: true },
		dataproviderKeypath: { type: String, readonly: true },
		count: 100,
		query: String,
		itemAs: { default: '$item', readonly: true },
		preloading: { default: false, readonly: true }
	},

	i18n: {
		nothingFound: getText.t('Ничего не найдено')
	},

	template,

	events: {
		':component': {
			'input-query-change'() {
				if (this.loading) {
					this._requestCallback.cancel();
					this.loading = false;
				}

				this.list.clear();
				this.total = undefined;

				if (this._isLoadingCheckPlanned) {
					this._loadingCheckTimeout.clear();
				} else {
					this._isLoadingCheckPlanned = true;
				}

				this._loadingCheckTimeout = this.setTimeout(() => {
					this._scrolling = false;
					this._isLoadingCheckPlanned = false;
					this.checkLoading();
				}, 300);
			}
		},

		':element': {
			scroll() {
				if (this._scrolling) {
					return;
				}
				this._scrolling = true;

				if (this._isLoadingCheckPlanned) {
					this._loadingCheckTimeout.clear();
				} else {
					this._isLoadingCheckPlanned = true;
				}

				this._loadingCheckTimeout = this.setTimeout(() => {
					this._scrolling = false;
					this._isLoadingCheckPlanned = false;
					this.checkLoading();
				}, 150);
			}
		}
	}
})
export default class OpalLoadedList extends Component {
	dataProvider: IDataProvider;

	list: ObservableList<IItem>;
	total: number | undefined;

	_scrolling: boolean = false;
	_isLoadingCheckPlanned: boolean;
	_loadingCheckTimeout: IDisposableTimeout;
	_requestCallback: IDisposableCallback;
	loading: boolean;

	_lastRequestedQuery: string | undefined;
	_lastLoadedQuery: string | undefined;

	empty: boolean;
	nothingFoundShown: boolean;
	loaderShown: boolean;

	initialize() {
		let input = this.input;
		let dataProvider = input.dataprovider;

		if (dataProvider || input.dataproviderKeypath) {
			if (!dataProvider) {
				dataProvider = Function(`return this.${ input.dataproviderKeypath };`)
					.call(this.ownerComponent || window);

				if (!dataProvider) {
					throw new TypeError('dataProvider is not defined');
				}
			}

			this.dataProvider = dataProvider;
		} else {
			throw new TypeError('Property "dataprovider" is required');
		}

		define(this, {
			list: new ObservableList<IItem>(),
			total: undefined,

			_isLoadingCheckPlanned: false,
			loading: false,

			empty(this: OpalLoadedList): boolean {
				return !this.list.length;
			},

			nothingFoundShown(this: OpalLoadedList): boolean {
				return this.total === 0 && !this._isLoadingCheckPlanned && !this.loading;
			},

			loaderShown(this: OpalLoadedList): boolean {
				return this.total === undefined || this.list.length < this.total || this.loading;
			}
		});
	}

	elementAttached() {
		if (this.input.preloading) {
			this._load();
		} else {
			this.checkLoading();
		}
	}

	checkLoading() {
		if (
			this.input.query === this._lastRequestedQuery &&
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

		let query: string | undefined = this._lastRequestedQuery = this.input.query;
		let dataProvider = this.dataProvider;
		let infinite = dataProvider.getItems.length >= 2;
		let args = [query];

		if (infinite) {
			args.unshift(this.input.count, this.list.length ? this.list.get(-1).value : undefined);
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

					Cell.forceRelease();

					this.emit('loaded');

					setTimeout(() => {
						this.checkLoading();
					}, 1);
				}
			)
		);
	}

	_getListItemContext(context: Object, content: Component): Object {
		return mixin(Object.create(context), content.input.$context as Object);
	}
}
