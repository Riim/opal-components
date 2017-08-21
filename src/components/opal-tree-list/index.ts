import { define, ObservableList, Utils } from 'cellx';
import { Component, d } from 'rionite';
import ObservableTreeList from '../../ObservableTreeList';
import './index.css';
import './opal-tree-list-item';
import template = require('./template.nelm');

let mixin = Utils.mixin;

export interface IDataTreeListItem {
	[name: string]: any;
	children?: Array<IDataTreeListItem>;
}

export type TDataTreeList = ObservableTreeList<IDataTreeListItem>;
export type TViewModel = ObservableList<IDataTreeListItem>;

let defaultDataTreeListItemSchema = Object.freeze({ value: 'id', text: 'name' });
let defaultVMItemSchema = Object.freeze({ value: 'id', text: 'name' });

@d.Component({
	elementIs: 'opal-tree-list',

	input: {
		datatreelist: { type: Object },
		datatreelistKeypath: { type: String, required: true, readonly: true },
		datatreelistItemSchema: { type: eval, default: defaultDataTreeListItemSchema, readonly: true },
		viewModel: { type: Object },
		viewModelKeypath: { type: String, readonly: true },
		viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true }
	},

	template
})
export class OpalTreeList extends Component {
	static defaultDataTreeListItemSchema = defaultDataTreeListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	dataTreeList: TDataTreeList | null;
	_dataTreeListItemValueFieldName: string;
	_dataTreeListItemTextFieldName: string;

	viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;

	initialize() {
		let input = this.input;

		if (input.$specified.has('datatreelist')) {
			define(this, 'dataTreeList', () => input.datatreelist);
		} else if (input.datatreelistKeypath) {
			let getDataTreeList = Function(`return this.${ input.datatreelistKeypath };`);
			let context = this.ownerComponent || window;
			define(this, 'dataTreeList', () => getDataTreeList.call(context));
		} else {
			this.dataTreeList = null;
		}

		let dataTreeListItemSchema = input.datatreelistItemSchema;
		let defaultDataTreeListItemSchema = (this.constructor as typeof OpalTreeList).defaultDataTreeListItemSchema;

		this._dataTreeListItemValueFieldName = dataTreeListItemSchema.value || defaultDataTreeListItemSchema.value;
		this._dataTreeListItemTextFieldName = dataTreeListItemSchema.text || defaultDataTreeListItemSchema.text;

		let vmItemSchema = input.viewModelItemSchema;
		let defaultVMItemSchema = (this.constructor as typeof OpalTreeList).defaultViewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;

		// let x = this.dataTreeList!.get([])!.children![0].children![0].;
	}

	_getListItemContext(context: object, content: Component): object {
		return mixin(Object.create(context), content.input.$context!, ['$component']);
	}
}
