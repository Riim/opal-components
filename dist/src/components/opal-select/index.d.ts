import { Cell, IEvent, ObservableList } from 'cellx';
import { Component, IComponentElement, IDisposableListening } from 'rionite';
import { OpalButton } from '../opal-button';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import { OpalSelectOption } from './opal-select-option';
import '../../../node_modules/bytesize-icons/dist/icons/chevron-bottom.svg?id=opal-components__icon-chevron-bottom';
export interface IDataListItem {
    [name: string]: any;
}
export declare type TDataList = ObservableList<IDataListItem>;
export declare type TViewModel = ObservableList<IDataListItem>;
export declare class OpalSelect extends Component {
    static OpalSelectOption: typeof OpalSelectOption;
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
    dataList: TDataList | null;
    _dataListItemValueFieldName: string;
    _dataListItemTextFieldName: string;
    _dataListItemDisabledFieldName: string;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _viewModelItemDisabledFieldName: string;
    readonly value: Array<IDataListItem>;
    _addNewItem: ((text: string) => Promise<{
        [name: string]: string;
    }>) | null;
    readonly _buttonText: string;
    optionElements: NodeListOf<IComponentElement>;
    optionsCell: Cell<Array<OpalSelectOption>>;
    readonly options: Array<OpalSelectOption>;
    _notUpdateOptions: boolean;
    _opened: boolean;
    _valueOnOpen: Array<string>;
    _onсeFocusedAfterLoading: boolean;
    _isInputDataListSpecified: boolean;
    _documentFocusListening: IDisposableListening;
    _documentKeyDownListening: IDisposableListening | null | undefined;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    _onInputValueChange(evt: IEvent): void;
    _onInputViewModelChange(evt: IEvent): void;
    _onInputFocusedChange(evt: IEvent): void;
    _onViewModelChange(): void;
    _onButtonFocus(): void;
    _onButtonBlur(): void;
    _onButtonClick(evt: IEvent<OpalButton>): void;
    _onMenuInputOpenedChange(evt: IEvent): void;
    _onMenuSelectOptionSelect(evt: IEvent<OpalSelectOption>): void;
    _onMenuSelectOptionDeselect(evt: IEvent<OpalSelectOption>): void;
    _onMenuTextInputConfirm(evt: IEvent<OpalTextInput>): void;
    _onMenuChange(evt: IEvent): void;
    _onLoadedListLoaded(): void;
    _updateOptions(): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _onDocumentFocus(evt: Event): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _focusOptions(): boolean;
    focus(): OpalSelect;
    blur(): OpalSelect;
}
export { OpalSelectOption };