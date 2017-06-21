import './index.css';
import { IEvent, ObservableList } from 'cellx';
import { IDisposableListening, IDisposableTimeout, IDisposableCallback, Component } from 'rionite';
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
export default class OpalAutosuggest extends Component {
    dataProvider: IDataProvider;
    list: ObservableList<IItem>;
    _isInputLast: boolean;
    _loadingPlanned: boolean;
    _loadingTimeout: IDisposableTimeout;
    _requestCallback: IDisposableCallback;
    loading: boolean;
    loaderShown: boolean;
    _focusedListItem: HTMLElement | null;
    selectedItem: IItem | null;
    _documentFocusListening: IDisposableListening;
    _documentKeyDownListening: IDisposableListening;
    _documentClickListening: IDisposableListening;
    initialize(): void;
    elementAttached(): void;
    ready(): void;
    _onTextFieldClick(): void;
    _onMenuMouseOver(evt: Event): void;
    _onListChange(): void;
    _onLoaderShownChange(evt: IEvent): void;
    _onDocumentFocus(evt: Event): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onDocumentClick(evt: Event): void;
    _onListItemClick(evt: Event, listItem: HTMLElement): void;
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
