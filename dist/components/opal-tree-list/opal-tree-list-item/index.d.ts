import { Component } from 'rionite';
import { IDataTreeListItem } from '../index';
import './index.css';
export declare class OpalTreeListItem extends Component {
    dataTreeListItem: IDataTreeListItem;
    _dataTreeListItemTextFieldName: string;
    initialize(): void;
    _getListItemContext(context: object, content: Component): object;
}
