import { OpalCheckbox } from '@riim/opal-checkbox';
import { IEvent, ObservableList } from 'cellx';
import { BaseComponent, IDisposableTimeout } from 'rionite';
import { ObservableTreeList } from '../../ObservableTreeList';
import { OpalTreeListItem } from '../OpalTreeListItem';
import '../OpalTreeListItem';
import './index.css';
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
export declare type TViewModel = ObservableList<Record<string, any>>;
export declare class OpalTreeList extends BaseComponent {
    static selectionControlChangeEvents: symbol[];
    static defaultDataTreeListItemSchema: Readonly<{
        value: string;
        text: string;
    }>;
    static defaultViewModelItemSchema: Readonly<{
        value: string;
        text: string;
    }>;
    paramDataTreeList: TDataTreeList;
    dataTreeListKeypath: string;
    dataTreeListItemSchema: {
        value?: string;
        text?: string;
    };
    viewModel: TViewModel;
    viewModelItemSchema: {
        value?: string;
        text?: string;
    };
    query: string;
    dataTreeList: TDataTreeList | null;
    _dataTreeListItemValueFieldName: string;
    _dataTreeListItemTextFieldName: string;
    comparableQuery: string | null;
    readonly filteredDataTreeList: TDataTreeList | null;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _queryTimeout: IDisposableTimeout | null;
    readonly listShown: boolean;
    initialize(): void;
    elementAttached(): void;
    _onQueryChange(): void;
    _onQueryTimeout(): void;
    _onSelectionControlChange(evt: IEvent<OpalCheckbox>): void;
}
