import { IEvent } from 'cellx';
import { computed } from 'cellx-decorators';
import { Component, d } from 'rionite';
import _getListItemContext from '../_getListItemContext';
import { OpalButton } from '../../opal-button';
import { IDataTreeListItem, TDataTreeList, TViewModel } from '../index';
import './index.css';
import template = require('./template.nelm');

@d.Component<OpalTreeListItem>({
	elementIs: 'opal-tree-list-item',

	input: {
		datatreelist: { type: Object, required: true },
		filteredDatatreelist: { type: Object, required: true },
		datatreelistItemValueFieldName: { type: String, required: true, readonly: true },
		datatreelistItemTextFieldName: { type: String, required: true, readonly: true },
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
		return this.input.datatreelist;
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

		this.dataTreeListItem = (input.filteredDatatreelist as TDataTreeList).get(input.indexpath)!;
		this._dataTreeListItemValueFieldName = input.datatreelistItemValueFieldName;
		this._dataTreeListItemTextFieldName = input.datatreelistItemTextFieldName;

		this._viewModelItemValueFieldName = input.viewModelItemValueFieldName;
		this._viewModelItemTextFieldName = input.viewModelItemTextFieldName;
	}
}

(OpalTreeListItem.prototype as any)._getListItemContext = _getListItemContext;
