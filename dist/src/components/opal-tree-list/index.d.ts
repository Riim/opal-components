import { IEvent, ObservableList } from 'cellx';
import { Component } from 'rionite';
import { ObservableTreeList } from '../../ObservableTreeList';
import { OpalCheckbox } from '../opal-checkbox';
import './index.css';
import { OpalTreeListItem } from './opal-tree-list-item';
import './opal-tree-list-item';
export { OpalTreeListItem };
export interface IDataTreeListItem {
    [name: string]: any;
    parent?: IDataTreeListItem | null;
    children: Array<IDataTreeListItem>;
}
export interface IFilteredDataTreeListItem {
    [name: string]: any;
    parent?: IDataTreeListItem | null;
    children: Array<IDataTreeListItem>;
    $original: IDataTreeListItem;
}
export declare type TDataTreeList = ObservableTreeList<IDataTreeListItem>;
export declare type TFilteredDataTreeList = ObservableTreeList<IFilteredDataTreeListItem>;
export declare type TViewModel = ObservableList<{
    [name: string]: any;
}>;
export declare class OpalTreeList extends Component {
    static defaultDataTreeListItemSchema: Readonly<{
        value: string;
        text: string;
    }>;
    static defaultViewModelItemSchema: Readonly<{
        value: string;
        text: string;
    }>;
    paramDataTreeList: TDataTreeList;
    paramDataTreeListKeypath: string;
    paramDataTreeListItemSchema: {
        value?: string;
        text?: string;
    };
    paramViewModel: TViewModel;
    paramViewModelItemSchema: {
        value?: string;
        text?: string;
    };
    paramQuery: string;
    dataTreeList: TDataTreeList;
    _dataTreeListItemValueFieldName: string;
    _dataTreeListItemTextFieldName: string;
    readonly filteredDataTreeList: TDataTreeList;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    initialize(): void;
    elementAttached(): void;
    _onChange(evt: IEvent<OpalCheckbox>): void;
}
