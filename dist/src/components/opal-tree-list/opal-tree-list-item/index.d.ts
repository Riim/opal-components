import { Component } from 'rionite';
import { IFilteredDataTreeListItem, TDataTreeList, TFilteredDataTreeList, TViewModel } from '../index';
import './index.css';
export declare class OpalTreeListItem extends Component {
    paramDataTreeList: TDataTreeList;
    paramFilteredDataTreeList: TFilteredDataTreeList;
    paramDataTreeListItemValueFieldName: string;
    paramDataTreeListItemTextFieldName: string;
    paramViewModel: TViewModel;
    paramViewModelItemValueFieldName: string;
    paramViewModelItemTextFieldName: string;
    paramIndexpath: Array<number>;
    paramQuery: string;
    paramOpened: boolean;
    readonly dataTreeList: TDataTreeList;
    dataTreeListItem: IFilteredDataTreeListItem;
    _dataTreeListItemValueFieldName: string;
    _dataTreeListItemTextFieldName: string;
    readonly viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    initialize(): void;
}
