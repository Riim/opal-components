import { OpalButton } from '@riim/opal-button';
import { OpalTextInput } from '@riim/opal-text-input';
import { Cell, IEvent, ObservableList } from 'cellx';
import { BaseComponent, IComponentElement, IDisposableListening } from 'rionite';
import { OpalSelectOption } from '../OpalSelectOption';
import './index.css';
export { OpalSelectOption };
export interface IDataListItem {
    [name: string]: any;
}
export declare type TDataList = ObservableList<IDataListItem>;
export declare type TViewModel = ObservableList<IDataListItem>;
export declare class OpalSelect extends BaseComponent {
    static EVENT_BLUR: symbol;
    static EVENT_CHANGE: symbol;
    static EVENT_DESELECT: symbol;
    static EVENT_FOCUS: symbol;
    static EVENT_INPUT: symbol;
    static EVENT_SELECT: symbol;
    static buttonFocusEvents: symbol[];
    static buttonBlurEvents: symbol[];
    static buttonClickEvents: symbol[];
    static menuChangeEvents: symbol[];
    static menuLoadedEvents: symbol[];
    static defaultDataListItemSchema: Readonly<{
        value: string;
        text: string;
        subtext: string;
        disabled: string;
    }>;
    static defaultViewModelItemSchema: Readonly<{
        value: string;
        text: string;
        subtext: string;
        disabled: string;
    }>;
    viewType: typeof OpalButton.prototype.viewType;
    size: typeof OpalButton.prototype.size;
    multiple: boolean;
    clearOnDeselect: boolean;
    paramDataList: TDataList;
    dataListKeypath: string;
    dataListItemSchema: {
        value?: string;
        text?: string;
        subtext?: string;
        disabled?: string;
    };
    paramValue: Array<string>;
    paramViewModel: TViewModel;
    viewModelItemSchema: {
        value?: string;
        text?: string;
        subtext?: string;
        disabled?: string;
    };
    addNewItem: (text: string, select: OpalSelect) => Promise<Record<string, string>>;
    clearLoadedListOnOpen: boolean;
    text: string;
    maxTextLength: number;
    placeholder: string;
    openOnClick: boolean;
    tabIndex: number;
    focused: boolean;
    disabled: boolean;
    dataListCell: Cell<TDataList | null> | null;
    dataList: TDataList | null;
    _dataListItemValueFieldName: string;
    _dataListItemTextFieldName: string;
    _dataListItemSubtextFieldName: string;
    _dataListItemDisabledFieldName: string;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _viewModelItemSubtextFieldName: string;
    _viewModelItemDisabledFieldName: string;
    value: Array<string>;
    _addNewItem: ((text: string, select: OpalSelect) => Promise<Record<string, string>>) | null;
    readonly _buttonText: string;
    optionElements: HTMLCollectionOf<IComponentElement>;
    optionsCell: Cell<Array<OpalSelectOption>>;
    readonly options: Array<OpalSelectOption>;
    _needOptionsUpdating: boolean;
    _notUpdateOptions: boolean;
    _opened: boolean;
    _valueOnOpen: Array<string>;
    _onceFocusedAfterLoading: boolean;
    _paramDataListSpecified: boolean;
    validator: {
        validate(): boolean;
    } | null;
    _documentClickListening: IDisposableListening | null | undefined;
    _documentFocusListening: IDisposableListening;
    _documentKeyDownListening: IDisposableListening | null | undefined;
    _dataListChangeListeneng: IDisposableListening;
    _menuLoadedListeneng: IDisposableListening;
    initialize(): void;
    ready(): void;
    _initViewModel(): void;
    elementAttached(): void;
    _onParamValueChange(evt: IEvent): void;
    _updateViewModel(value: any, multiple: boolean): void;
    _onFocusedChange(evt: IEvent): void;
    _onViewModelChange(): void;
    _onButtonFocus(): void;
    _onButtonBlur(): void;
    _onButtonClick(evt: IEvent<OpalButton>): void;
    _onButtonElementMouseDown(): void;
    _onDocumentClick(): void;
    _onMenuOpenedChange(evt: IEvent): false;
    _onMenuSelectOptionSelect(evt: IEvent<OpalSelectOption>): false;
    _onMenuSelectOptionDeselect(evt: IEvent<OpalSelectOption>): false;
    _onMenuTextInputConfirm(evt: IEvent<OpalTextInput>): false | void;
    _onMenuButtonClick(evt: IEvent<OpalButton>): false | void;
    _addNewItem$(newItem: Record<string, string>): void;
    _onMenuChange(): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _onDocumentFocus(evt: Event): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onDataListChange(evt: IEvent): void;
    _onMenuLoaded(evt: IEvent): void;
    _updateOptions(): void;
    focus(): this;
    blur(): this;
    _focusOptions(): boolean;
    enable(): this;
    disable(): this;
    validate(): boolean;
}
