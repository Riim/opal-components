import { ObservableList } from 'cellx';
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
}
export declare class OpalLoadedList extends BaseComponent {
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
    query: string;
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
    readonly empty: boolean;
    readonly loaderShown: boolean;
    readonly nothingFoundShown: boolean;
    initialize(): void;
    elementAttached(): void;
    _onQueryChange(): void;
    _onElementScroll(): void;
    checkLoading(): void;
    _load(): void;
    _getListItemContext(context: Object, slot: RnSlot): {
        __proto__: Object;
        $item: any;
    };
}
