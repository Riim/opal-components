import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, ComponentConfig } from 'rionite';
import _getListItemContext from '../_getListItemContext';
import { OpalButton } from '../../opal-button';
import { IDataTreeListItem, TDataTreeList, TViewModel } from '../index';
import './index.css';
import template from './template.nelm';

@ComponentConfig<OpalTreeListItem>({
	elementIs: 'opal-tree-list-item',

	input: {
		dataTreeList: { type: Object, required: true },
		filteredDataTreeList: { type: Object, required: true },
		dataTreeListItemValueFieldName: { type: String, required: true, readonly: true },
		dataTreeListItemTextFieldName: { type: String, required: true, readonly: true },
		viewModel: { type: Object, required: true },
		viewModelItemValueFieldName: { type: String, required: true, readonly: true },
		viewModelItemTextFieldName: { type: String, required: true, readonly: true },
		indexpath: { type: eval, required: true, readonly: true },
		query: String,
		opened: false
	},

	template,

	events: {
		'btn-toggle-children': {
			change(evt: IEvent<OpalButton>) {
				this.input.opened = evt.target.checked;
			}
		}
	}
})
export class OpalTreeListItem extends Component {
	@computed get dataTreeList(): TDataTreeList {
		return this.input.dataTreeList;
	}
	dataTreeListItem: IDataTreeListItem;
	_dataTreeListItemValueFieldName: string;
	_dataTreeListItemTextFieldName: string;

	@computed get viewModel(): TViewModel {
		return this.input.viewModel;
	}
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;

	initialize() {
		let input = this.input;

		this.dataTreeListItem = (input.filteredDataTreeList as TDataTreeList).get(input.indexpath)!;
		this._dataTreeListItemValueFieldName = input.dataTreeListItemValueFieldName;
		this._dataTreeListItemTextFieldName = input.dataTreeListItemTextFieldName;

		this._viewModelItemValueFieldName = input.viewModelItemValueFieldName;
		this._viewModelItemTextFieldName = input.viewModelItemTextFieldName;
	}
}

(OpalTreeListItem.prototype as any)._getListItemContext = _getListItemContext;
