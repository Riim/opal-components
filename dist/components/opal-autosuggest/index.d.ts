import { IEvent, ObservableList } from 'cellx';
import { Component, IDisposableCallback, IDisposableListening, IDisposableTimeout } from 'rionite';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
export interface IDataListItem {
    [name: string]: string;
}
export interface IDataProvider {
    getItems(query: string): PromiseLike<{
        items: Array<IDataListItem>;
    }>;
    getItems(count: number, query: string): PromiseLike<{
        items: Array<IDataListItem>;
    }>;
}
export declare class OpalAutosuggest extends Component {
    static defaultDataListItemSchema: {
        value: string;
        text: string;
        disabled: string;
    };
    dataProvider: IDataProvider;
    dataList: ObservableList<IDataListItem>;
    _dataListItemValueFieldName: string;
    _dataListItemTextFieldName: string;
    _isNotInputConfirmed: boolean;
    _isLoadingPlanned: boolean;
    _loadingTimeout: IDisposableTimeout;
    _requestCallback: IDisposableCallback;
    loading: boolean;
    isLoaderShown: boolean;
    _focusedListItem: HTMLElement | null;
    value: IDataListItem | null;
    _documentFocusListening: IDisposableListening;
    _documentListening: IDisposableListening;
    initialize(): void;
    elementAttached(): void;
    ready(): void;
    _onInputValueChange(evt: IEvent): void;
    _onTextInputFocus(): void;
    _onTextInputBlur(): void;
    _onTextInputInput(evt: IEvent<OpalTextInput>): void;
    _onTextInputChange(evt: IEvent<OpalTextInput>): void;
    _onTextFieldClick(): void;
    _onMenuInputOpenedChange(evt: IEvent): void;
    _onMenuElementMouseOver(evt: Event): void;
    _onDataListChange(): void;
    _onIsLoaderShownChange(evt: IEvent): void;
    _onDocumentFocus(evt: Event): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onDocumentClick(evt: Event): void;
    _load(): void;
    _itemsRequestCallback(data: {
        [name: string]: any;
    }): void;
    _cancelLoading(): void;
    openMenu(force?: boolean): OpalAutosuggest;
    closeMenu(): OpalAutosuggest;
    _selectItem(item?: IDataListItem | null): void;
    clear(): void;
    _clearDataList(): void;
}
