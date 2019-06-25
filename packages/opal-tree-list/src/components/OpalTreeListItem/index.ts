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
import template from './template.rnt';

@Component<OpalTreeListItem>({
	elementIs: 'OpalTreeListItem',
	template,

	events: {
		btnToggleChildren: {
			change(evt: IEvent<OpalButton>) {
				this.opened = evt.target.checked;
			}
		}
	}
})
export class OpalTreeListItem extends BaseComponent {
	@Param({ required: true })
	paramDataTreeList: TDataTreeList;
	@Param({ required: true })
	filteredDataTreeList: TFilteredDataTreeList;
	@Param({
		required: true,
		readonly: true
	})
	dataTreeListItemValueFieldName: string;
	@Param({
		required: true,
		readonly: true
	})
	dataTreeListItemTextFieldName: string;
	@Param({ required: true })
	viewModel: TViewModel;
	@Param({
		required: true,
		readonly: true
	})
	viewModelItemValueFieldName: string;
	@Param({
		required: true,
		readonly: true
	})
	viewModelItemTextFieldName: string;
	@Param({
		type: eval,
		required: true,
		readonly: true
	})
	indexpath: Array<number>;
	@Param
	query: string;
	@Param
	opened = false;

	@Computed
	get dataTreeList(): TDataTreeList {
		return this.paramDataTreeList;
	}

	dataTreeListItem: IFilteredDataTreeListItem;
	_dataTreeListItemValueFieldName: string;
	_dataTreeListItemTextFieldName: string;

	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;

	initialize() {
		this.dataTreeListItem = this.filteredDataTreeList.get(this.indexpath)!;
		this._dataTreeListItemValueFieldName = this.dataTreeListItemValueFieldName;
		this._dataTreeListItemTextFieldName = this.dataTreeListItemTextFieldName;

		this._viewModelItemValueFieldName = this.viewModelItemValueFieldName;
		this._viewModelItemTextFieldName = this.viewModelItemTextFieldName;
	}
}

(OpalTreeListItem.prototype as any)._getListItemContext = _getListItemContext;
