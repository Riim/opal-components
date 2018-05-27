import { OpalSelect } from '@riim/opal-select';
import { TDataTreeList } from '@riim/opal-tree-list';
import './index.css';
export declare class OpalTreeSelect extends OpalSelect {
    paramMultiple: boolean;
    paramDataTreeList: TDataTreeList;
    paramDataTreeListKeypath: string;
    paramDataTreeListItemSchema: {
        value?: string;
        text?: string;
    };
    paramViewModelItemSchema: {
        value?: string;
        text?: string;
    };
    paramQuery: string;
    openOnClick: boolean;
    dataTreeList: TDataTreeList;
    initialize(): void;
    _onMenuSelectOptionSelect(): false;
    _onMenuSelectOptionDeselect(): false;
    _onMenuChange(): false;
    _updateOptions(): void;
}
