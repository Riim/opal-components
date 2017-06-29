import './index.css';
import '../../assets/icons/opal-components__icon-chevron-down.svg';
import { ObservableList } from 'cellx';
import { IndexedList } from 'cellx-indexed-collections';
import { IDisposableListening, IComponentElement, Component } from 'rionite';
import OpalSelectOption from './opal-select-option';
export declare type TDataList = ObservableList<{
    [name: string]: any;
}>;
export declare type TViewModel = IndexedList<{
    [name: string]: any;
}>;
export default class OpalSelect extends Component {
    static OpalSelectOption: typeof OpalSelectOption;
    static defaultDataListItemSchema: {
        value: string;
        text: string;
        disabled: string;
    };
    static defaultVMItemSchema: {
        value: string;
        text: string;
        disabled: string;
    };
    dataList: TDataList | null;
    _dataListItemValueFieldName: string;
    _dataListItemTextFieldName: string;
    _dataListItemDisabledFieldName: string;
    _addNewItem: ((text: string) => Promise<{
        [name: string]: string;
    }>) | undefined;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _viewModelItemDisabledFieldName: string;
    optionElements: NodeListOf<IComponentElement>;
    options: Array<OpalSelectOption>;
    _opened: boolean;
    _valueOnOpen: any;
    _onсeFocusedAfterLoading: boolean;
    _documentFocusListening: IDisposableListening;
    _documentKeyDownListening: IDisposableListening | null | undefined;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    _onViewModelChange(): void;
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
