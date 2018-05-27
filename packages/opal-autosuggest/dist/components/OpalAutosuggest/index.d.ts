import { OpalTextInput } from '@riim/opal-text-input';
import { IEvent, ObservableList } from 'cellx';
import { BaseComponent, IDisposableCallback, IDisposableListening, IDisposableTimeout } from 'rionite';
import './index.css';
export interface IDataListItem {
    [name: string]: any;
}
export interface IDataProvider {
    getItems(query: string): PromiseLike<{
        items: Array<IDataListItem>;
    }>;
    getItems(count: number, query: string): PromiseLike<{
        items: Array<IDataListItem>;
    }>;
}
export declare class OpalAutosuggest extends BaseComponent {
    paramDataListItemSchema: {
        value?: string;
        text?: string;
        subtext?: string;
    };
    paramDataProvider: IDataProvider;
    paramValue: IDataListItem;
    paramMinQueryLength: number;
    paramCount: number;
    paramOpenMenuOnNothingFound: boolean;
    static defaultDataListItemSchema: Readonly<{
        value: string;
        text: string;
        subtext: string;
    }>;
    dataList: ObservableList<IDataListItem>;
    _dataListItemValueFieldName: string;
    _dataListItemTextFieldName: string;
    _dataListItemSubtextFieldName: string;
    dataProvider: IDataProvider;
    value: IDataListItem | null;
    _inputNotConfirmed: boolean;
    _loadingPlanned: boolean;
    _loadingTimeout: IDisposableTimeout;
    _requestCallback: IDisposableCallback;
    loading: boolean;
    readonly loaderShown: boolean;
    _focusedListItem: HTMLElement | null;
    _documentFocusListening: IDisposableListening;
    _documentListening: IDisposableListening;
    initialize(): void;
    elementAttached(): void;
    ready(): void;
    _onParamValueChange(evt: IEvent): void;
    _onLoaderShownChange(evt: IEvent): void;
    _onDataListChange(): void;
    _onTextInputFocus(): void;
    _onTextInputBlur(): void;
    _onTextInputInput(evt: IEvent<OpalTextInput>): void;
    _onTextInputChange(evt: IEvent<OpalTextInput>): void;
    _onTextFieldClick(): void;
    _onMenuParamOpenedChange(evt: IEvent): void;
    _onMenuElementMouseOver(evt: Event): void;
    _onDocumentFocus(evt: Event): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onDocumentClick(evt: Event): void;
    _load(): void;
    _itemsRequestCallback(data: {
        items: Array<IDataListItem>;
    }): void;
    _cancelLoading(): void;
    openMenu(force?: boolean): this;
    closeMenu(): this;
    _selectItem(item?: IDataListItem | null): void;
    clear(): void;
    _clearDataList(): void;
}
