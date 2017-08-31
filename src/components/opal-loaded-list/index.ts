import { mixin } from '@riim/mixin';
import { Cell, ObservableList } from 'cellx';
import { computed, observable } from 'cellx-decorators';
import {
	Component,
	d,
	getText,
	IDisposableCallback,
	IDisposableTimeout
	} from 'rionite';
import './index.css';
import template = require('./template.nelm');

export interface IDataListItem {
	[name: string]: any;
}

export interface IDataProvider {
	getItems(query?: string): PromiseLike<{ items: Array<IDataListItem> }>;
	getItems(count: number, after?: string, query?: string): PromiseLike<{
		items: Array<IDataListItem>;
		total?: number;
	}>;
}

let defaultDataListItemSchema = Object.freeze({ value: 'id', text: 'name' });

@d.Component<OpalLoadedList>({
	elementIs: 'opal-loaded-list',

	input: {
		datalistItemSchema: { type: eval, default: defaultDataListItemSchema, readonly: true },
		dataprovider: { type: Object, readonly: true },
		dataproviderKeypath: { type: String, readonly: true },
		count: 100,
		query: String,
		preloading: { default: false, readonly: true }
	},

	i18n: {
		nothingFound: getText.t('Ничего не найдено')
	},

	template
})
export class OpalLoadedList extends Component {
	static defaultDataListItemSchema = defaultDataListItemSchema;

	@observable dataList = new ObservableList<IDataListItem>();
	_dataListItemTextFieldName: string;

	@observable total: number | undefined;

	dataProvider: IDataProvider;

	_isScrollingInProcessing: boolean = false;
	@observable _isLoadingCheckPlanned = false;
	_loadingCheckTimeout: IDisposableTimeout;
	@observable loading = false;
	_requestCallback: IDisposableCallback;

	_lastRequestedQuery: string | null = null;
	_lastLoadedQuery: string | null = null;

	@computed get empty(): boolean {
		return !this.dataList.length;
	}

	@computed get isLoaderShown(): boolean {
		return this.total === undefined || this.dataList.length < this.total || this.loading;
	}

	@computed get isNothingFoundShown(): boolean {
		return this.total === 0 && !this._isLoadingCheckPlanned && !this.loading;
	}

	initialize() {
		let input = this.input;

		this._dataListItemTextFieldName = input.datalistItemSchema.text ||
			(this.constructor as typeof OpalLoadedList).defaultDataListItemSchema.text;

		let dataProvider;

		if (input.$specified.has('dataprovider')) {
			dataProvider = input.dataprovider;
		} else if (input.dataproviderKeypath) {
			dataProvider = Function(`return this.${ input.dataproviderKeypath };`).call(this.ownerComponent || window);
		} else {
			throw new TypeError('Input property "dataprovider" is required');
		}

		if (!dataProvider) {
			throw new TypeError('"dataProvider" is not defined');
		}

		this.dataProvider = dataProvider;
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

		this.dataList.clear();
		this.total = undefined;

		if (this._isLoadingCheckPlanned) {
			this._loadingCheckTimeout.clear();
		} else {
			this._isLoadingCheckPlanned = true;
		}

		this._loadingCheckTimeout = this.setTimeout(() => {
			this._isScrollingInProcessing = false;
			this._isLoadingCheckPlanned = false;
			this.checkLoading();
		}, 300);
	}

	_onElementScroll() {
		if (this._isScrollingInProcessing) {
			return;
		}
		this._isScrollingInProcessing = true;

		if (this._isLoadingCheckPlanned) {
			this._loadingCheckTimeout.clear();
		} else {
			this._isLoadingCheckPlanned = true;
		}

		this._loadingCheckTimeout = this.setTimeout(() => {
			this._isScrollingInProcessing = false;
			this._isLoadingCheckPlanned = false;
			this.checkLoading();
		}, 150);
	}

	checkLoading() {
		if (
			this.input.query === this._lastRequestedQuery &&
				(this.loading || this.total !== undefined && this.dataList.length == this.total)
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

		let input = this.input;
		let infinite = this.dataProvider.getItems.length >= 2;
		let query: string | null = this._lastRequestedQuery = input.query;
		let args = [query];

		if (infinite) {
			args.unshift(
				input.count,
				this.dataList.length ?
					this.dataList.get(-1)![
						input.datalistItemSchema.value ||
							(this.constructor as typeof OpalLoadedList).defaultDataListItemSchema.value
					] :
					null
			);
		}

		this.loading = true;

		this.dataProvider.getItems.apply(this.dataProvider, args).then(
			this._requestCallback = this.registerCallback(
				function(this: OpalLoadedList, data: { items: Array<IDataListItem>, total?: number }) {
					this.loading = false;

					let items = data.items;

					this.total = infinite && data.total !== undefined ? data.total : items.length;

					if (query === this._lastLoadedQuery) {
						this.dataList.addRange(items);
					} else {
						this.dataList.clear().addRange(items);
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

	_getListItemContext(context: { [name: string]: any }, content: Component): { [name: string]: any } {
		return mixin(Object.create(context), content.input.$context, ['$component']);
	}
}
