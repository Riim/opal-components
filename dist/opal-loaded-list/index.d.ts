import './index.css';
import { ObservableList } from 'cellx';
import { IDisposableTimeout, IDisposableCallback, Component } from 'rionite';
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
export default class OpalLoadedList extends Component {
    dataProvider: IDataProvider;
    list: ObservableList<IItem>;
    total: number | undefined;
    _scrolling: boolean;
    _loadingCheckPlanned: boolean;
    _loadingCheckTimeout: IDisposableTimeout;
    _requestCallback: IDisposableCallback;
    loading: boolean;
    _lastRequestedQuery: string | undefined;
    _lastLoadedQuery: string | undefined;
    empty: boolean;
    notFoundShown: boolean;
    loaderShown: boolean;
    initialize(): void;
    elementAttached(): void;
    checkLoading(): void;
    _load(): void;
    _getContentContext(content: Component): Object;
}
