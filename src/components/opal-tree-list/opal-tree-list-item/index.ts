import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component } from 'rionite';
import _getListItemContext from '../_getListItemContext';
import { OpalButton } from '../../opal-button';
import { IDataTreeListItem, TDataTreeList, TViewModel } from '../index';
import './index.css';
import template from './template.nelm';

@Component.Config<OpalTreeListItem>({
	elementIs: 'OpalTreeListItem',

	params: {
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
				this.params.opened = evt.target.checked;
			}
		}
	}
})
export class OpalTreeListItem extends Component {
	@computed
	get dataTreeList(): TDataTreeList {
		return this.params.dataTreeList;
	}

	dataTreeListItem: IDataTreeListItem;
	_dataTreeListItemValueFieldName: string;
	_dataTreeListItemTextFieldName: string;

	@computed
	get viewModel(): TViewModel {
		return this.params.viewModel;
	}

	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;

	initialize() {
		let params = this.params;

		this.dataTreeListItem = (params.filteredDataTreeList as TDataTreeList).get(
			params.indexpath
		)!;
		this._dataTreeListItemValueFieldName = params.dataTreeListItemValueFieldName;
		this._dataTreeListItemTextFieldName = params.dataTreeListItemTextFieldName;

		this._viewModelItemValueFieldName = params.viewModelItemValueFieldName;
		this._viewModelItemTextFieldName = params.viewModelItemTextFieldName;
	}
}

(OpalTreeListItem.prototype as any)._getListItemContext = _getListItemContext;
