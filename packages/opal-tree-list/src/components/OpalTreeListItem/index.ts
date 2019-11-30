import { OpalButton } from '@riim/opal-button';
import { IEvent } from 'cellx';
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
			[OpalButton.EVENT_CHANGE](evt: IEvent<OpalButton>) {
				this.opened = evt.target.checked;
			}
		}
	}
})
export class OpalTreeListItem extends BaseComponent {
	@Param({ required: true, readonly: true })
	dataTreeList: TDataTreeList;
	@Param({ required: true })
	filteredDataTreeList: TFilteredDataTreeList;
	@Param({ type: String, required: true, readonly: true })
	dataTreeListItemValueFieldName: string;
	@Param({ type: String, required: true, readonly: true })
	dataTreeListItemTextFieldName: string;
	@Param({ required: true })
	viewModel: TViewModel;
	@Param({ type: String, required: true, readonly: true })
	viewModelItemValueFieldName: string;
	@Param({ type: String, required: true, readonly: true })
	viewModelItemTextFieldName: string;
	@Param({ type: eval, required: true, readonly: true })
	indexpath: Array<number>;
	@Param(String)
	query: string | null;
	@Param(Boolean)
	opened: boolean;

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
