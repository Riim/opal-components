import { ObservableList } from 'cellx';
import { Component, IDisposableCallback, IDisposableTimeout } from 'rionite';
import './index.css';
export interface IDataListItem {
    [name: string]: any;
}
export interface IDataProvider {
    getItems(query?: string): PromiseLike<{
        items: Array<IDataListItem>;
    }>;
    getItems(count: number, after?: string, query?: string): PromiseLike<{
        items: Array<IDataListItem>;
        total?: number;
    }>;
}
export declare class OpalLoadedList extends Component {
    static defaultDataListItemSchema: Readonly<{
        value: string;
        text: string;
    }>;
    dataList: ObservableList<IDataListItem>;
    _dataListItemTextFieldName: string;
    total: number | undefined;
    dataProvider: IDataProvider;
    _isScrollingInProcessing: boolean;
    _isLoadingCheckPlanned: boolean;
    _loadingCheckTimeout: IDisposableTimeout;
    loading: boolean;
    _requestCallback: IDisposableCallback;
    _lastRequestedQuery: string | null;
    _lastLoadedQuery: string | null;
    readonly empty: boolean;
    readonly isLoaderShown: boolean;
    readonly isNothingFoundShown: boolean;
    initialize(): void;
    elementAttached(): void;
    _onInputQueryChange(): void;
    _onElementScroll(): void;
    checkLoading(): void;
    _load(): void;
    _getListItemContext(context: {
        [name: string]: any;
    }, content: Component): {
        [name: string]: any;
    };
}