import { OpalCheckbox } from '@riim/opal-checkbox';
import { IEvent } from 'cellx';
import { ObservableList } from 'cellx-collections';
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
    $original: IDataTreeListItem;
    parent?: IDataTreeListItem | null;
    children: Array<IDataTreeListItem>;
    [name: string]: any;
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
    paramDataTreeList: TDataTreeList | null;
    dataTreeListKeypath: string | null;
    dataTreeListItemSchema: {
        value?: string;
        text?: string;
    };
    viewModel: TViewModel;
    viewModelItemSchema: {
        value?: string;
        text?: string;
    };
    query: string | null;
    dataTreeList: TDataTreeList | null;
    _dataTreeListItemValueFieldName: string;
    _dataTreeListItemTextFieldName: string;
    comparableQuery: string | null;
    get filteredDataTreeList(): TDataTreeList | null;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _queryTimeout: IDisposableTimeout | null;
    get listShown(): boolean;
    initialize(): void;
    _onQueryChange(): void;
    _onQueryTimeout(): void;
    _onSelectionControlChange(evt: IEvent<OpalCheckbox>): void;
}
