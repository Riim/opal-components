import { IEvent, ObservableList } from 'cellx';
import { Component, IDisposableCallback, IDisposableListening, IDisposableTimeout } from 'rionite';
import './index.css';
export interface IItem {
    value: string;
    text: string;
}
export interface IDataProvider {
    getItems(query: string): PromiseLike<{
        items: Array<IItem>;
    }>;
    getItems(count: number, query: string): PromiseLike<{
        items: Array<IItem>;
    }>;
}
export declare class OpalAutosuggest extends Component {
    dataProvider: IDataProvider;
    list: ObservableList<IItem>;
    _isNotInputConfirmed: boolean;
    _isLoadingPlanned: boolean;
    _loadingTimeout: IDisposableTimeout;
    _requestCallback: IDisposableCallback;
    loading: boolean;
    isLoaderShown: boolean;
    _focusedListItem: HTMLElement | null;
    selectedItem: IItem | null;
    _documentFocusListening: IDisposableListening;
    _documentListening: IDisposableListening;
    initialize(): void;
    elementAttached(): void;
    ready(): void;
    _onInputSelectedItemChange(evt: IEvent): void;
    _onTextInputFocus(): void;
    _onTextInputBlur(): void;
    _onTextInputInput(evt: IEvent): void;
    _onTextInputChange(evt: IEvent): void;
    _onTextFieldClick(): void;
    _onMenuInputOpenedChange(evt: IEvent): void;
    _onMenuElementMouseOver(evt: Event): void;
    _onListChange(): void;
    _onIsLoaderShownChange(evt: IEvent): void;
    _onDocumentFocus(evt: Event): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onDocumentClick(evt: Event): void;
    _load(): void;
    _itemsRequestCallback(data: {
        items: Array<IItem>;
    }): void;
    _cancelLoading(): void;
    openMenu(force?: boolean): OpalAutosuggest;
    closeMenu(): OpalAutosuggest;
    _setSelectedItemOfList(): void;
    _setSelectedItem(selectedItem: IItem | null): void;
    clear(): void;
    _clearList(): void;
}
