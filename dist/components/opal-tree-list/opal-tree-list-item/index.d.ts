import { Component } from 'rionite';
import { IDataTreeListItem, TDataTreeList, TViewModel } from '../index';
import './index.css';
export declare class OpalTreeListItem extends Component {
    readonly dataTreeList: TDataTreeList;
    dataTreeListItem: IDataTreeListItem;
    _dataTreeListItemValueFieldName: string;
    _dataTreeListItemTextFieldName: string;
    readonly viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    initialize(): void;
}
