import { OpalSelect } from '../opal-select';
import { TDataTreeList, TViewModel } from '../opal-tree-list';
import './index.css';
export declare class OpalTreeSelect extends OpalSelect {
    dataTreeList: TDataTreeList;
    viewModel: TViewModel;
    initialize(): void;
    _updateOptions(): void;
}
