import { OpalSelect } from '@riim/opal-select';
import { TDataTreeList } from '@riim/opal-tree-list';
import './index.css';
export declare class OpalTreeSelect extends OpalSelect {
    multiple: boolean;
    paramDataTreeList: TDataTreeList | null;
    dataTreeListKeypath: string | null;
    dataTreeListItemSchema: {
        value?: string;
        text?: string;
    };
    viewModelItemSchema: {
        value?: string;
        text?: string;
    };
    query: string | null;
    openOnClick: boolean;
    dataTreeList: TDataTreeList;
    initialize(): void;
    _onMenuSelectOptionSelect(): false;
    _onMenuSelectOptionDeselect(): false;
    _onMenuChange(): false;
    _updateOptions(): void;
}
