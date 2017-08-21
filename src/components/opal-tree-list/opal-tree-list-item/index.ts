import { Utils } from 'cellx';
import { Component, d } from 'rionite';
import ObservableTreeList from '../../../ObservableTreeList';
import { IDataTreeListItem } from '../index';
import './index.css';
import template = require('./template.nelm');

let mixin = Utils.mixin;

@d.Component({
	elementIs: 'opal-tree-list-item',

	input: {
		datatreelist: { type: Object, required: true },
		dataTreeListItemValueFieldName: { type: String, required: true, readonly: true },
		dataTreeListItemTextFieldName: { type: String, required: true, readonly: true },
		indexpath: { type: eval, required: true, readonly: true }
	},

	template
})
export class OpalTreeListItem extends Component {
	dataTreeListItem: IDataTreeListItem;
	_dataTreeListItemTextFieldName: string;

	initialize() {
		this.dataTreeListItem = (this.input.datatreelist as ObservableTreeList).get(this.input.indexpath)!;
		this._dataTreeListItemTextFieldName = this.input.dataTreeListItemTextFieldName;
	}

	_getListItemContext(context: object, content: Component): object {
		return mixin(Object.create(context), content.input.$context!, ['$component']);
	}
}
