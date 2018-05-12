import { OpalButton } from '@riim/opal-button';
import { IEvent } from 'cellx';
import { Computed } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import {
	IFilteredDataTreeListItem,
	TDataTreeList,
	TFilteredDataTreeList,
	TViewModel
	} from '../OpalTreeList';
import _getListItemContext from '../OpalTreeList/_getListItemContext';
import './index.css';
import template from './template.nelm';

@Component<OpalTreeListItem>({
	elementIs: 'OpalTreeListItem',

	template,

	events: {
		btnToggleChildren: {
			change(evt: IEvent<OpalButton>) {
				this.paramOpened = evt.target.checked;
			}
		}
	}
})
export class OpalTreeListItem extends BaseComponent {
	@Param({ required: true })
	paramDataTreeList: TDataTreeList;
	@Param({ required: true })
	paramFilteredDataTreeList: TFilteredDataTreeList;
	@Param({ required: true, readonly: true })
	paramDataTreeListItemValueFieldName: string;
	@Param({ required: true, readonly: true })
	paramDataTreeListItemTextFieldName: string;
	@Param({ required: true })
	paramViewModel: TViewModel;
	@Param({ required: true, readonly: true })
	paramViewModelItemValueFieldName: string;
	@Param({ required: true, readonly: true })
	paramViewModelItemTextFieldName: string;
	@Param({ type: eval, required: true, readonly: true })
	paramIndexpath: Array<number>;
	@Param paramQuery: string;
	@Param paramOpened = false;

	@Computed
	get dataTreeList(): TDataTreeList {
		return this.paramDataTreeList;
	}

	dataTreeListItem: IFilteredDataTreeListItem;
	_dataTreeListItemValueFieldName: string;
	_dataTreeListItemTextFieldName: string;

	@Computed
	get viewModel(): TViewModel {
		return this.paramViewModel;
	}

	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;

	initialize() {
		this.dataTreeListItem = this.paramFilteredDataTreeList.get(this.paramIndexpath)!;
		this._dataTreeListItemValueFieldName = this.paramDataTreeListItemValueFieldName;
		this._dataTreeListItemTextFieldName = this.paramDataTreeListItemTextFieldName;

		this._viewModelItemValueFieldName = this.paramViewModelItemValueFieldName;
		this._viewModelItemTextFieldName = this.paramViewModelItemTextFieldName;
	}
}

(OpalTreeListItem.prototype as any)._getListItemContext = _getListItemContext;
