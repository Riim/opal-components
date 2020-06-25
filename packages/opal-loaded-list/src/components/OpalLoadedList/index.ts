import { Cell, ObservableList } from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableCallback,
	IDisposableTimeout,
	Listen,
	Param,
	RnSlot
	} from 'rionite';
import './index.css';
import template from './template.rnt';

export interface IDataListItem {
	[name: string]: any;
}

export interface IDataProvider {
	getItems(query?: string): PromiseLike<{ items: Array<IDataListItem> }>;
	getItems(
		limit: number,
		after?: string,
		query?: string
	): PromiseLike<{
		items: Array<IDataListItem>;
		total?: number;
	}>;
	reset(): void;
}

let defaultDataListItemSchema = Object.freeze({
	value: 'id',
	text: 'name'
});

@Component({
	elementIs: 'OpalLoadedList',
	template
})
export class OpalLoadedList extends BaseComponent {
	static EVENT_LOADED = Symbol('loaded');

	static defaultDataListItemSchema = defaultDataListItemSchema;

	@Param({ type: eval, default: defaultDataListItemSchema, readonly: true })
	dataListItemSchema: {
		value?: string;
		text?: string;
	};
	@Param({ required: true, readonly: true })
	dataProvider: IDataProvider;
	@Param({ default: 100 })
	limit: number;
	@Param(String)
	query: string | null;
	@Param({ type: Boolean, readonly: true })
	preloading: boolean;

	@Observable
	dataList = new ObservableList<IDataListItem>();
	_dataListItemTextFieldName: string;

	@Observable
	total: number | undefined;

	_scrollingInProcessing = false;
	@Observable
	_loadingCheckPlanned = false;
	_loadingCheckTimeout: IDisposableTimeout;
	@Observable
	loading = false;
	_requestCallback: IDisposableCallback;

	_lastRequestedQuery: string | null = null;
	_lastLoadedQuery: string | null = null;

	@Computed
	get loaderShown() {
		return this.total === undefined || this.dataList.length < this.total || this.loading;
	}

	@Computed
	get nothingFoundShown() {
		return this.total === 0 && !this._loadingCheckPlanned && !this.loading;
	}

	initialize() {
		this._dataListItemTextFieldName =
			this.dataListItemSchema.text ||
			(this.constructor as typeof OpalLoadedList).defaultDataListItemSchema.text;
	}

	elementAttached() {
		if (this.preloading) {
			this._load();
		} else {
			this.checkLoading();
		}
	}

	@Listen('change:query')
	_onQueryChange() {
		if (this.loading) {
			this._requestCallback.cancel();
			this.loading = false;
		}

		this.dataList.clear();
		this.total = undefined;

		if (this._loadingCheckPlanned) {
			this._loadingCheckTimeout.clear();
		} else {
			this._loadingCheckPlanned = true;
		}

		this._loadingCheckTimeout = this.setTimeout(() => {
			this._scrollingInProcessing = false;
			this._loadingCheckPlanned = false;
			this.checkLoading();
		}, 300);
	}

	@Listen('scroll', '@element')
	_onElementScroll() {
		if (this._scrollingInProcessing) {
			return;
		}
		this._scrollingInProcessing = true;

		if (this._loadingCheckPlanned) {
			this._loadingCheckTimeout.clear();
		} else {
			this._loadingCheckPlanned = true;
		}

		this._loadingCheckTimeout = this.setTimeout(() => {
			this._scrollingInProcessing = false;
			this._loadingCheckPlanned = false;
			this.checkLoading();
		}, 150);
	}

	checkLoading() {
		if (
			this.query === this._lastRequestedQuery &&
			(this.loading || (this.total !== undefined && this.dataList.length == this.total))
		) {
			return;
		}

		let elRect = this.element.getBoundingClientRect();

		if (
			elRect.height &&
			elRect.bottom > this.$<BaseComponent>('loader')!.element.getBoundingClientRect().top
		) {
			this._load();
		}
	}

	_load() {
		if (this.loading) {
			this._requestCallback.cancel();
		}

		let getItemsLength = this.dataProvider!.getItems.length;
		let query: string | null = (this._lastRequestedQuery = this.query);
		let args: Array<any> = getItemsLength ? [query] : [];

		if (getItemsLength >= 2) {
			args.unshift(
				this.limit,
				this.dataList.length
					? this.dataList.get(-1)![
							this.dataListItemSchema.value ||
								(this.constructor as typeof OpalLoadedList)
									.defaultDataListItemSchema.value
					  ]
					: null
			);
		}

		this.loading = true;

		this.dataProvider!.getItems.apply(this.dataProvider, args).then(
			(this._requestCallback = this.registerCallback(function (
				this: OpalLoadedList,
				data: {
					items: Array<IDataListItem>;
					total?: number;
				}
			) {
				this.loading = false;

				let items = data.items;

				this.total =
					getItemsLength >= 2 && data.total !== undefined ? data.total : items.length;

				if (query === this._lastLoadedQuery) {
					this.dataList.addRange(items);
				} else {
					this.dataList.clear().addRange(items);
					this._lastLoadedQuery = query;
				}

				Cell.release();

				this.emit(OpalLoadedList.EVENT_LOADED);

				this.checkLoading();
			}))
		);
	}

	clear() {
		this.dataList.clear();
		this.total = undefined;
		this._lastLoadedQuery = null;
		this.dataProvider!.reset();
	}

	_getListItemContext(context: Object, slot: RnSlot) {
		return {
			__proto__: context,
			$item: slot.$context.$item
		};
	}
}
