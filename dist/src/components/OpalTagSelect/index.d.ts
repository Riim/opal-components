import { BaseComponent } from 'rionite';
import { IDataProvider } from '../OpalLoadedList';
import { IDataListItem, TDataList, TViewModel } from '../OpalSelect';
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
    paramViewType: string;
    paramDataList: TDataList;
    paramDataListKeypath: string;
    paramDataListItemSchema: {
        value?: string;
        text?: string;
        subtext?: string;
        disabled?: string;
    };
    paramDataProvider: IDataProvider;
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
    paramPlaceholder: string;
    paramPopoverPosition: string;
    paramTabIndex: number;
    paramFocused: boolean;
    paramDisabled: boolean;
    dataList: TDataList | null;
    _dataListItemValueFieldName: string;
    _dataListItemTextFieldName: string;
    _dataListItemSubtextFieldName: string;
    _dataListItemDisabledFieldName: string;
    dataProvider: IDataProvider | null;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _viewModelItemDisabledFieldName: string;
    readonly value: Array<string>;
    readonly isPlaceholderShown: boolean;
    _dataListKeypathParam: string | null;
    initialize(): void;
    elementAttached(): void;
    _onControlClick(evt: Event): void;
    _onSelectInput(): false;
    _onSelectChange(): false;
    _onSelectSelect(): false;
    _onSelectDeselect(): false;
    _isItemDisabled(item: IDataListItem): any;
}
