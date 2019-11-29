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
	declare dataTreeList: TDataTreeList;
	@Param({ required: true })
	declare filteredDataTreeList: TFilteredDataTreeList;
	@Param({ type: String, required: true, readonly: true })
	declare dataTreeListItemValueFieldName: string;
	@Param({ type: String, required: true, readonly: true })
	declare dataTreeListItemTextFieldName: string;
	@Param({ required: true })
	declare viewModel: TViewModel;
	@Param({ type: String, required: true, readonly: true })
	declare viewModelItemValueFieldName: string;
	@Param({ type: String, required: true, readonly: true })
	declare viewModelItemTextFieldName: string;
	@Param({ type: eval, required: true, readonly: true })
	declare indexpath: Array<number>;
	@Param(String)
	declare query: string | null;
	@Param(Boolean)
	declare opened: boolean;

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
