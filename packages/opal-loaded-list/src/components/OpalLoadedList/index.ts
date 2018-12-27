import { nextTick } from '@riim/next-tick';
import { Cell, ObservableList } from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableCallback,
	IDisposableTimeout,
	Param,
	RnSlot
	} from 'rionite';
import './index.css';
import template = require('./template.nelm');

export interface IDataListItem {
	[name: string]: any;
}

export interface IDataProvider {
	getItems(query?: string): PromiseLike<{ items: Array<IDataListItem> }>;
	getItems(
		count: number,
		after?: string,
		query?: string
	): PromiseLike<{
		items: Array<IDataListItem>;
		total?: number;
	}>;
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
	static defaultDataListItemSchema = defaultDataListItemSchema;

	@Param({
		type: eval,
		default: defaultDataListItemSchema,
		readonly: true
	})
	paramDataListItemSchema: {
		value?: string;
		text?: string;
	};
	@Param({ readonly: true })
	paramDataProvider: IDataProvider;
	@Param
	paramCount = 100;
	@Param
	paramQuery: string;
	@Param({ readonly: true })
	paramPreloading = false;

	@Observable
	dataList = new ObservableList<IDataListItem>();
	_dataListItemTextFieldName: string;

	@Observable
	total: number | undefined;

	dataProvider: IDataProvider;

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
	get empty(): boolean {
		return !this.dataList.length;
	}

	@Computed
	get loaderShown(): boolean {
		return this.total === undefined || this.dataList.length < this.total || this.loading;
	}

	@Computed
	get nothingFoundShown(): boolean {
		return this.total === 0 && !this._loadingCheckPlanned && !this.loading;
	}

	initialize() {
		this._dataListItemTextFieldName =
			this.paramDataListItemSchema.text ||
			(this.constructor as typeof OpalLoadedList).defaultDataListItemSchema.text;

		if (!this.$specifiedParams || !this.$specifiedParams.has('dataProvider')) {
			throw new TypeError('Parameter "dataProvider" is required');
		}

		this.dataProvider = this.paramDataProvider;

		if (!this.dataProvider) {
			throw new TypeError('"dataProvider" is not defined');
		}
	}

	elementAttached() {
		this.listenTo(this, 'change:paramQuery', this._onParamQueryChange);
		this.listenTo(this.element, 'scroll', this._onElementScroll);

		if (this.paramPreloading) {
			this._load();
		} else {
			this.checkLoading();
		}
	}

	_onParamQueryChange() {
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
			this.paramQuery === this._lastRequestedQuery &&
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

		let infinite = this.dataProvider.getItems.length >= 2;
		let query: string | null = (this._lastRequestedQuery = this.paramQuery);
		let args: Array<any> = [query];

		if (infinite) {
			args.unshift(
				this.paramCount,
				this.dataList.length
					? this.dataList.get(-1)![
							this.paramDataListItemSchema.value ||
								(this.constructor as typeof OpalLoadedList)
									.defaultDataListItemSchema.value
					  ]
					: null
			);
		}

		this.loading = true;

		this.dataProvider.getItems.apply(this.dataProvider, args).then(
			(this._requestCallback = this.registerCallback(function(
				this: OpalLoadedList,
				data: {
					items: Array<IDataListItem>;
					total?: number;
				}
			) {
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

				nextTick(() => {
					this.checkLoading();
				});
			}))
		);
	}

	_getListItemContext(context: Object, slot: RnSlot) {
		return {
			__proto__: context,
			$item: slot.$context.$item
		};
	}
}
