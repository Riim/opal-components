import { define, IEvent, ObservableList } from 'cellx';
import { Component, d } from 'rionite';
import ObservableTreeList from '../../ObservableTreeList';
import { closestComponent } from '../../Utils';
import _getListItemContext from './_getListItemContext';
import './index.css';
import { OpalTreeListItem } from './opal-tree-list-item';
import './opal-tree-list-item';
import template = require('./template.nelm');

export interface IDataTreeListItem {
	[name: string]: any;
	children?: Array<IDataTreeListItem>;
}

export type TDataTreeList = ObservableTreeList<IDataTreeListItem>;
export type TViewModel = ObservableList<IDataTreeListItem>;

let defaultDataTreeListItemSchema = Object.freeze({ value: 'id', text: 'name' });
let defaultVMItemSchema = Object.freeze({ value: 'id', text: 'name' });

function getItemVertices(item: IDataTreeListItem): Array<IDataTreeListItem> {
	return item.children ?
		item.children.reduce(
			(vertices, child) => vertices.concat(getItemVertices(child)),
			[] as Array<IDataTreeListItem>
		) :
		[item];
}

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

	dataTreeList: TDataTreeList;
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
			throw new TypeError('Input property "dataTreeList" is required');
		}

		let dataTreeListItemSchema = input.datatreelistItemSchema;
		let defaultDataTreeListItemSchema = (this.constructor as typeof OpalTreeList).defaultDataTreeListItemSchema;

		this._dataTreeListItemValueFieldName = dataTreeListItemSchema.value || defaultDataTreeListItemSchema.value;
		this._dataTreeListItemTextFieldName = dataTreeListItemSchema.text || defaultDataTreeListItemSchema.text;

		define(this, 'viewModel', new ObservableList());

		let vmItemSchema = input.viewModelItemSchema;
		let defaultVMItemSchema = (this.constructor as typeof OpalTreeList).defaultViewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
	}

	elementAttached() {
		this.listenTo(this, '<*>change', this._onChange);
	}

	_onChange(evt: IEvent<Component>) {
		let component = evt.target;

		if (component.element.classList.contains('opal-tree-list__selection-control')) {
			let dataTreeListItemValueFieldName = this._dataTreeListItemValueFieldName;
			let dataTreeListItemTextFieldName = this._dataTreeListItemTextFieldName;
			let vm = this.viewModel;
			let viewModelItemValueFieldName = this._viewModelItemValueFieldName;
			let viewModelItemTextFieldName = this._viewModelItemTextFieldName;
			let selected = (component as any).selected;

			getItemVertices(
				closestComponent(component.parentComponent!, OpalTreeListItem)!.input.$context!.$item
			).forEach((item) => {
				if (selected) {
					if (!vm.find(
						(vmItem) => vmItem[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName]
					)) {
						vm.add({
							[viewModelItemValueFieldName]: item[dataTreeListItemValueFieldName],
							[viewModelItemTextFieldName]: item[dataTreeListItemTextFieldName]
						});
					}
				} else {
					let index = vm.findIndex(
						(vmItem) => vmItem[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName]
					);

					if (index != -1) {
						vm.removeAt(index);
					}
				}
			});
		}
	}
}

(OpalTreeList.prototype as any)._getListItemContext = _getListItemContext;
