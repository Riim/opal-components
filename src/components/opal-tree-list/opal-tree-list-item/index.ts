import { define } from 'cellx';
import { Component, d } from 'rionite';
import _getListItemContext from '../_getListItemContext';
import ObservableTreeList from '../../../ObservableTreeList';
import { IDataTreeListItem, TDataTreeList, TViewModel } from '../index';
import './index.css';
import template = require('./template.nelm');

@d.Component({
	elementIs: 'opal-tree-list-item',

	input: {
		datatreelist: { type: Object, required: true },
		datatreelistItemValueFieldName: { type: String, required: true, readonly: true },
		datatreelistItemTextFieldName: { type: String, required: true, readonly: true },
		viewModel: { type: Object, required: true },
		viewModelItemValueFieldName: { type: String, required: true, readonly: true },
		viewModelItemTextFieldName: { type: String, required: true, readonly: true },
		indexpath: { type: eval, required: true, readonly: true }
	},

	template
})
export class OpalTreeListItem extends Component {
	dataTreeList: TDataTreeList;
	dataTreeListItem: IDataTreeListItem;
	_dataTreeListItemValueFieldName: string;
	_dataTreeListItemTextFieldName: string;

	viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;

	initialize() {
		let input = this.input;

		define(this, 'dataTreeList', () => input.datatreelist);
		this.dataTreeListItem = (input.datatreelist as ObservableTreeList).get(input.indexpath)!;
		this._dataTreeListItemValueFieldName = input.datatreelistItemValueFieldName;
		this._dataTreeListItemTextFieldName = input.datatreelistItemTextFieldName;

		define(this, 'viewModel', () => input.viewModel);
		this._viewModelItemValueFieldName = input.viewModelItemValueFieldName;
		this._viewModelItemTextFieldName = input.viewModelItemTextFieldName;
	}
}

(OpalTreeListItem.prototype as any)._getListItemContext = _getListItemContext;
