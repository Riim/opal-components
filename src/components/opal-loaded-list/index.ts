import { Cell, define, ObservableList } from 'cellx';
import {
	Component,
	d,
	getText,
	IDisposableCallback,
	IDisposableTimeout
	} from 'rionite';
import './index.css';
import template = require('./template.nelm');

export interface IItem {
	[name: string]: string;
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
		itemValueName: { default: 'id', readonly: true },
		count: 100,
		query: String,
		itemAs: { default: '$item', readonly: true },
		preloading: { default: false, readonly: true }
	},

	i18n: {
		nothingFound: getText.t('Ничего не найдено')
	},

	template
})
export class OpalLoadedList extends Component {
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

	isLoaderShown: boolean;
	isNothingFoundShown: boolean;

	initialize() {
		let input = this.input;
		let dataProvider = input.dataprovider;

		if (dataProvider || input.dataproviderKeypath) {
			if (!dataProvider) {
				dataProvider = Function(`return this.${ input.dataproviderKeypath };`)
					.call(this.ownerComponent || window);

				if (!dataProvider) {
					throw new TypeError('"dataProvider" is not defined');
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

			isLoaderShown(this: OpalLoadedList): boolean {
				return this.total === undefined || this.list.length < this.total || this.loading;
			},

			isNothingFoundShown(this: OpalLoadedList): boolean {
				return this.total === 0 && !this._isLoadingCheckPlanned && !this.loading;
			}
		});
	}

	elementAttached() {
		this.listenTo(this, 'input-query-change', this._onInputQueryChange);
		this.listenTo(this.element, 'scroll', this._onElementScroll);

		if (this.input.preloading) {
			this._load();
		} else {
			this.checkLoading();
		}
	}

	_onInputQueryChange() {
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

	_onElementScroll() {
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

	checkLoading() {
		if (
			this.input.query === this._lastRequestedQuery &&
				(this.loading || this.total !== undefined && this.list.length == this.total)
		) {
			return;
		}

		let elRect = this.element.getBoundingClientRect();

		if (elRect.height && elRect.bottom > this.$<Component>('loader')!.element.getBoundingClientRect().top) {
			this._load();
		}
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
			args.unshift(this.input.count, this.list.length ? this.list.get(-1)![this.input.itemValueName] : undefined);
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

	_getListItemContext(context: object, content: Component): object {
		let anotherContext = content.input.$context!;
		let result = Object.create(context);

		for (let name of Object.getOwnPropertyNames(anotherContext)) {
			if (name != '$component') {
				Object.defineProperty(result, name, Object.getOwnPropertyDescriptor(anotherContext, name));
			}
		}

		return result;
	}
}
