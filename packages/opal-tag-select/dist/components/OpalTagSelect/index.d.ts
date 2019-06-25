import { IDataProvider } from '@riim/opal-loaded-list';
import { IDataListItem, OpalSelect, TDataList, TViewModel } from '@riim/opal-select';
import { IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalTagSelect extends BaseComponent {
    static defaultDataListItemSchema: Readonly<{
        value: string;
        text: string;
        subtext: string;
        disabled: string;
    }>;
    static defaultViewModelItemSchema: Readonly<{
        value: string;
        text: string;
        disabled: string;
    }>;
    viewType: string;
    paramDataList: TDataList;
    dataListKeypath: string;
    dataListItemSchema: {
        value?: string;
        text?: string;
        subtext?: string;
        disabled?: string;
    };
    dataProvider: IDataProvider;
    paramValue: Array<string>;
    paramViewModel: TViewModel;
    viewModelItemSchema: {
        value?: string;
        text?: string;
        disabled?: string;
    };
    addNewItem: (text: string) => Promise<Record<string, string>>;
    placeholder: string;
    popoverPosition: string;
    tabIndex: number;
    focused: boolean;
    disabled: boolean;
    dataList: TDataList | null;
    _dataListItemValueFieldName: string;
    _dataListItemTextFieldName: string;
    _dataListItemSubtextFieldName: string;
    _dataListItemDisabledFieldName: string;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _viewModelItemDisabledFieldName: string;
    readonly value: Array<string>;
    readonly placeholderShown: boolean;
    _selectDataListKeypath: string | null;
    select: OpalSelect;
    _isItemDisabled(item: IDataListItem): any;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    _onDisabledChange(evt: IEvent): void;
    _onControlClick(evt: Event): void;
    _onSelectInput(): false;
    _onSelectChange(): false;
    _onSelectSelect(): false;
    _onSelectDeselect(): false;
    open(): boolean;
    close(): boolean;
    toggle(): boolean;
    focus(): this;
    blur(): this;
}
