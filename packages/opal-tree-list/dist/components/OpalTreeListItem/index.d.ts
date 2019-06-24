import { BaseComponent } from 'rionite';
import { IFilteredDataTreeListItem, TDataTreeList, TFilteredDataTreeList, TViewModel } from '../OpalTreeList';
import './index.css';
export declare class OpalTreeListItem extends BaseComponent {
    paramDataTreeList: TDataTreeList;
    paramFilteredDataTreeList: TFilteredDataTreeList;
    paramDataTreeListItemValueFieldName: string;
    paramDataTreeListItemTextFieldName: string;
    paramViewModel: TViewModel;
    paramViewModelItemValueFieldName: string;
    paramViewModelItemTextFieldName: string;
    paramIndexpath: Array<number>;
    paramQuery: string;
    opened: boolean;
    readonly dataTreeList: TDataTreeList;
    dataTreeListItem: IFilteredDataTreeListItem;
    _dataTreeListItemValueFieldName: string;
    _dataTreeListItemTextFieldName: string;
    readonly viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    initialize(): void;
}
