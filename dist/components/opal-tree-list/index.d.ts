import { IEvent, ObservableList } from 'cellx';
import { Component } from 'rionite';
import ObservableTreeList from '../../ObservableTreeList';
import './index.css';
import './opal-tree-list-item';
export interface IDataTreeListItem {
    [name: string]: any;
    children?: Array<IDataTreeListItem>;
}
export declare type TDataTreeList = ObservableTreeList<IDataTreeListItem>;
export declare type TViewModel = ObservableList<IDataTreeListItem>;
export declare class OpalTreeList extends Component {
    static defaultDataTreeListItemSchema: Readonly<{
        value: string;
        text: string;
    }>;
    static defaultViewModelItemSchema: Readonly<{
        value: string;
        text: string;
    }>;
    dataTreeList: TDataTreeList;
    _dataTreeListItemValueFieldName: string;
    _dataTreeListItemTextFieldName: string;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    filteredDataTreeList: TDataTreeList;
    initialize(): void;
    elementAttached(): void;
    _onChange(evt: IEvent<Component>): void;
}
