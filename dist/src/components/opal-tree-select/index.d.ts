import { OpalSelect } from '../opal-select';
import { TDataTreeList, TViewModel } from '../opal-tree-list';
import './index.css';
export declare class OpalTreeSelect extends OpalSelect {
    dataTreeList: TDataTreeList;
    viewModel: TViewModel;
    initialize(): void;
    _onMenuSelectOptionSelect(): void;
    _onMenuSelectOptionDeselect(): void;
    _onMenuChange(): void;
    _updateOptions(): void;
}
