import './index.css';
import { Component } from 'rionite';
import { TDataList, TViewModel } from '../opal-select';
import { IDataProvider } from '../opal-loaded-list';
export default class OpalTagSelect extends Component {
    _isDataListPropertyDefined: boolean;
    dataList: TDataList | null;
    _dataListItemValueFieldName: string;
    _dataListItemTextFieldName: string;
    _dataListItemDisabledFieldName: string;
    dataProvider: IDataProvider | null;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _viewModelItemDisabledFieldName: string;
    placeholderShown: boolean;
    _dataListKeypathParam: string | null;
    initialize(): void;
    _onBtnRemoveTagClick(evt: Event, btn: HTMLElement): void;
}
