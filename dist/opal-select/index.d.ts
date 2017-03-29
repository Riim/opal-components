import './index.css';
import '../../assets/icons/opal-components__icon-chevron-down.svg';
import { IndexedList } from 'cellx-indexed-collections';
import { IDisposableListening, IComponentElement, Component } from 'rionite';
import OpalSelectOption from './opal-select-option';
export { default as OpalSelectOption } from './opal-select-option';
export declare type TDataList = IndexedList<{
    value: string;
    text: string;
}>;
export declare type TViewModel = IndexedList<Object>;
export default class OpalSelect extends Component {
    static OpalSelectOption: typeof OpalSelectOption;
    dataList: TDataList;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _viewModelItemDisabledFieldName: string;
    optionElements: NodeListOf<IComponentElement>;
    options: Array<OpalSelectOption>;
    _opened: boolean;
    _valueAtOpening: any;
    _onсeFocusedAfterLoading: boolean;
    _documentFocusInListening: IDisposableListening;
    _documentKeyDownListening: IDisposableListening | null | undefined;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    propertyChanged(name: string, value: any): void;
    _onViewModelChange(): void;
    _updateOptions(): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _onDocumentFocusIn(evt: Event): void;
    focus(): OpalSelect;
    blur(): OpalSelect;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _focusOptions(): boolean;
}
