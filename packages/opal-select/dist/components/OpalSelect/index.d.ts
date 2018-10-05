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
    paramViewType: string;
    paramSize: string;
    paramMultiple: boolean;
    paramDataList: TDataList;
    paramDataListKeypath: string;
    paramDataListItemSchema: {
        value?: string;
        text?: string;
        subtext?: string;
        disabled?: string;
    };
    paramValue: Array<string>;
    paramViewModel: TViewModel;
    paramViewModelItemSchema: {
        value?: string;
        text?: string;
        subtext?: string;
        disabled?: string;
    };
    paramAddNewItem: (text: string) => Promise<{
        [name: string]: string;
    }>;
    paramText: string;
    paramMaxTextLength: number;
    paramPlaceholder: string;
    openOnClick: boolean;
    paramTabIndex: number;
    paramFocused: boolean;
    paramDisabled: boolean;
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
    readonly value: Array<string>;
    _addNewItem: ((text: string) => Promise<{
        [name: string]: string;
    }>) | null;
    readonly _buttonText: string;
    optionElements: HTMLCollectionOf<IComponentElement>;
    optionsCell: Cell<Array<OpalSelectOption>>;
    readonly options: Array<OpalSelectOption>;
    _needOptionsUpdating: boolean;
    _notUpdateOptions: boolean;
    _opened: boolean;
    _valueOnOpen: Array<string>;
    _onсeFocusedAfterLoading: boolean;
    _paramDataListSpecified: boolean;
    _documentClickListening: IDisposableListening | null | undefined;
    _documentFocusListening: IDisposableListening;
    _documentKeyDownListening: IDisposableListening | null | undefined;
    initialize(): void;
    ready(): void;
    _initViewModel(): void;
    elementAttached(): void;
    _onParamValueChange(evt: IEvent): void;
    _updateViewModel(value: any, multiple: boolean): void;
    _onParamFocusedChange(evt: IEvent): void;
    _onViewModelChange(): void;
    _onButtonFocus(): void;
    _onButtonBlur(): void;
    _onButtonClick(evt: IEvent<OpalButton>): void;
    _onButtonElementMouseDown(): void;
    _onDocumentClick(): void;
    _onMenuParamOpenedChange(evt: IEvent): false;
    _onMenuSelectOptionSelect(evt: IEvent<OpalSelectOption>): false;
    _onMenuSelectOptionDeselect(evt: IEvent<OpalSelectOption>): false;
    _onMenuTextInputConfirm(evt: IEvent<OpalTextInput>): false | void;
    _onMenuButtonClick(evt: IEvent<OpalButton>): false | void;
    _addNewItem$(newItem: {
        [name: string]: string;
    }): void;
    _onMenuChange(evt: IEvent): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _onDocumentFocus(evt: Event): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _updateOptions(): void;
    focus(): this;
    blur(): this;
    _focusOptions(): boolean;
}
