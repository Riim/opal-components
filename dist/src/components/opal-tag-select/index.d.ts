import './index.css';
import { Component } from 'rionite';
import { TDataList, TViewModel } from '../opal-select';
import { IDataProvider } from '../opal-loaded-list';
export default class OpalTagSelect extends Component {
    _dataListParam: string;
    _dataProviderParam: string;
    _viewModelParam: string;
    dataList: TDataList;
    dataProvider: IDataProvider;
    viewModel: TViewModel;
    _viewModelItemValueFieldName: string;
    _viewModelItemTextFieldName: string;
    _viewModelItemDisabledFieldName: string;
    placeholderShown: boolean;
    initialize(): void;
    ready(): void;
    _onBtnRemoveTagClick(evt: Event, btn: HTMLElement): void;
}
