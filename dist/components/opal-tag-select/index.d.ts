import { Component } from 'rionite';
import { IDataProvider } from '../opal-loaded-list';
import { IDataListItem, TDataList, TViewModel } from '../opal-select';
import './index.css';
export declare class OpalTagSelect extends Component {
    dataList: TDataList | null;
    _dataListItemValueFieldName: string;
    _dataListItemTextFieldName: string;
    _dataListItemDisabledFieldName: string;
    dataProvider: IDataProvider | null;
    _addNewItem: ((text: string) => Promise<{
        [name: string]: string;
    }>) | undefined;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _viewModelItemDisabledFieldName: string;
    readonly value: Array<IDataListItem>;
    isPlaceholderShown: boolean;
    _dataListKeypathParam: string | null;
    initialize(): void;
    elementAttached(): void;
    _onControlClick(evt: Event): void;
    _onSelectInput(): void;
    _onSelectChange(): void;
    _onSelectOptionSelect(): void;
    _onSelectOptionDeselect(): void;
}
