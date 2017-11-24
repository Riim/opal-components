import { Cell, IEvent, ObservableList } from 'cellx';
import { Component, IComponentElement, IDisposableListening } from 'rionite';
import { OpalButton } from '../opal-button';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import { OpalSelectOption } from './opal-select-option';
export { OpalSelectOption };
export interface IDataListItem {
    [name: string]: any;
}
export declare type TDataList = ObservableList<IDataListItem>;
export declare type TViewModel = ObservableList<IDataListItem>;
export declare class OpalSelect extends Component {
    static defaultDataListItemSchema: Readonly<{
        value: string;
        text: string;
        disabled: string;
    }>;
    static defaultViewModelItemSchema: Readonly<{
        value: string;
        text: string;
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
        disabled?: string;
    };
    paramValue: Array<string>;
    paramViewModel: TViewModel;
    paramViewModelItemSchema: {
        value?: string;
        text?: string;
        disabled?: string;
    };
    paramAddNewItem: (text: string) => Promise<{
        [name: string]: string;
    }>;
    paramText: string;
    paramMaxTextLength: number;
    paramPlaceholder: string;
    paramTabIndex: number;
    paramFocused: boolean;
    paramDisabled: boolean;
    dataList: TDataList | null;
    _dataListItemValueFieldName: string;
    _dataListItemTextFieldName: string;
    _dataListItemDisabledFieldName: string;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _viewModelItemDisabledFieldName: string;
    readonly value: Array<string>;
    _addNewItem: ((text: string) => Promise<{
        [name: string]: string;
    }>) | null;
    readonly _buttonText: string;
    optionElements: NodeListOf<IComponentElement>;
    optionsCell: Cell<Array<OpalSelectOption>>;
    readonly options: Array<OpalSelectOption>;
    _needOptionsUpdating: boolean;
    _notUpdateOptions: boolean;
    _opened: boolean;
    _valueOnOpen: Array<string>;
    _onсeFocusedAfterLoading: boolean;
    _isParamDataListSpecified: boolean;
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
    _onMenuParamOpenedChange(evt: IEvent): false;
    _onMenuSelectOptionSelect(evt: IEvent<OpalSelectOption>): false;
    _onMenuSelectOptionDeselect(evt: IEvent<OpalSelectOption>): false;
    _onMenuTextInputConfirm(evt: IEvent<OpalTextInput>): false | void;
    _onMenuChange(evt: IEvent): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _onDocumentFocus(evt: Event): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _updateOptions(): void;
    _focusOptions(): boolean;
    focus(): OpalSelect;
    blur(): OpalSelect;
}
