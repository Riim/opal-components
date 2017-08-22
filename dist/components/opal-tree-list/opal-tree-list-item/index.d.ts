import { Component } from 'rionite';
import { IDataTreeListItem, TDataTreeList, TViewModel } from '../index';
import './index.css';
export declare class OpalTreeListItem extends Component {
    dataTreeList: TDataTreeList;
    dataTreeListItem: IDataTreeListItem;
    _dataTreeListItemValueFieldName: string;
    _dataTreeListItemTextFieldName: string;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    initialize(): void;
}
