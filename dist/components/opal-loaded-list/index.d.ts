import { ObservableList } from 'cellx';
import { Component, IDisposableCallback, IDisposableTimeout } from 'rionite';
import './index.css';
export interface IDataListItem {
    [name: string]: string;
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
    dataProvider: IDataProvider;
    dataList: ObservableList<IDataListItem>;
    total: number | undefined;
    _scrolling: boolean;
    _isLoadingCheckPlanned: boolean;
    _loadingCheckTimeout: IDisposableTimeout;
    _requestCallback: IDisposableCallback;
    loading: boolean;
    _lastRequestedQuery: string | undefined;
    _lastLoadedQuery: string | undefined;
    empty: boolean;
    isLoaderShown: boolean;
    isNothingFoundShown: boolean;
    initialize(): void;
    elementAttached(): void;
    _onInputQueryChange(): void;
    _onElementScroll(): void;
    checkLoading(): void;
    _load(): void;
    _getListItemContext(context: object, content: Component): object;
}
