import { OpalSelect } from '@riim/opal-select';
import { TDataTreeList } from '@riim/opal-tree-list';
import './index.css';
export declare class OpalTreeSelect extends OpalSelect {
    multiple: boolean;
    paramDataTreeList: TDataTreeList;
    dataTreeListKeypath: string;
    dataTreeListItemSchema: {
        value?: string;
        text?: string;
    };
    viewModelItemSchema: {
        value?: string;
        text?: string;
    };
    query: string;
    openOnClick: boolean;
    dataTreeList: TDataTreeList;
    initialize(): void;
    _onMenuSelectOptionSelect(): false;
    _onMenuSelectOptionDeselect(): false;
    _onMenuChange(): false;
    _updateOptions(): void;
}
