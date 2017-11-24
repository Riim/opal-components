import { OpalSelect } from '../opal-select';
import { TDataTreeList, TViewModel } from '../opal-tree-list';
import './index.css';
export declare class OpalTreeSelect extends OpalSelect {
    paramMultiple: boolean;
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
    viewModel: TViewModel;
    initialize(): void;
    _onMenuSelectOptionSelect(): false;
    _onMenuSelectOptionDeselect(): false;
    _onMenuChange(): false;
    _updateOptions(): void;
}
