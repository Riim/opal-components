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
    getItems(count: number, after?: string, query?: string): PromiseLike<{
        items: Array<IDataListItem>;
        total?: number;
    }>;
}
export declare class OpalLoadedList extends BaseComponent {
    static defaultDataListItemSchema: Readonly<{
        value: string;
        text: string;
    }>;
    paramDataListItemSchema: {
        value?: string;
        text?: string;
    };
    paramDataProvider: IDataProvider;
    paramCount: number;
    paramQuery: string;
    paramPreloading: boolean;
    dataList: ObservableList<IDataListItem>;
    _dataListItemTextFieldName: string;
    total: number | undefined;
    dataProvider: IDataProvider;
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
    _onParamQueryChange(): void;
    _onElementScroll(): void;
    checkLoading(): void;
    _load(): void;
    _getListItemContext(context: {
        [name: string]: any;
    }, slot: RnSlot): {
        __proto__: {
            [name: string]: any;
        };
        $item: any;
    };
}
