import { ObservableList } from 'cellx-collections';
import { BaseComponent, IDisposableCallback, IDisposableTimeout, RnSlot } from 'rionite';
import './index.css';
export interface IDataListItem {
    [name: string]: any;
}
export interface IDataProvider {
    getItems(query?: string): PromiseLike<{
        items: Array<IDataListItem>;
    }>;
    getItems(limit: number, after?: string, query?: string): PromiseLike<{
        items: Array<IDataListItem>;
        total?: number;
    }>;
    reset(): void;
}
export declare class OpalLoadedList extends BaseComponent {
    static EVENT_LOADED: symbol;
    static defaultDataListItemSchema: Readonly<{
        value: string;
        text: string;
    }>;
    dataListItemSchema: {
        value?: string;
        text?: string;
    };
    dataProvider: IDataProvider;
    limit: number;
    query: string | null;
    preloading: boolean;
    dataList: ObservableList<IDataListItem>;
    _dataListItemTextFieldName: string;
    total: number | undefined;
    _scrollingInProcessing: boolean;
    _loadingCheckPlanned: boolean;
    _loadingCheckTimeout: IDisposableTimeout;
    loading: boolean;
    _requestCallback: IDisposableCallback;
    _lastRequestedQuery: string | null;
    _lastLoadedQuery: string | null;
    get loaderShown(): boolean;
    get nothingFoundShown(): boolean;
    initialize(): void;
    connected(): void;
    _onQueryChange(): void;
    _onElementScroll(): void;
    checkLoading(): void;
    _load(): void;
    clear(): void;
    _getListItemContext(context: Object, slot: RnSlot): {
        __proto__: Object;
        $item: any;
    };
}
