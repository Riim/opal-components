import { ObservableList } from 'cellx';
import { Component, IDisposableCallback, IDisposableTimeout } from 'rionite';
import './index.css';
export interface IItem {
    value: string;
    text: string;
}
export interface IDataProvider {
    getItems(query?: string): PromiseLike<{
        items: Array<IItem>;
    }>;
    getItems(count: number, after?: string, query?: string): PromiseLike<{
        items: Array<IItem>;
        total?: number;
    }>;
}
export declare class OpalLoadedList extends Component {
    dataProvider: IDataProvider;
    list: ObservableList<IItem>;
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
