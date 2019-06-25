import { BaseComponent } from 'rionite';
import { IFilteredDataTreeListItem, TDataTreeList, TFilteredDataTreeList, TViewModel } from '../OpalTreeList';
import './index.css';
export declare class OpalTreeListItem extends BaseComponent {
    paramDataTreeList: TDataTreeList;
    filteredDataTreeList: TFilteredDataTreeList;
    dataTreeListItemValueFieldName: string;
    dataTreeListItemTextFieldName: string;
    viewModel: TViewModel;
    viewModelItemValueFieldName: string;
    viewModelItemTextFieldName: string;
    indexpath: Array<number>;
    query: string;
    opened: boolean;
    readonly dataTreeList: TDataTreeList;
    dataTreeListItem: IFilteredDataTreeListItem;
    _dataTreeListItemValueFieldName: string;
    _dataTreeListItemTextFieldName: string;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    initialize(): void;
}
