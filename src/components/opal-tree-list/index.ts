import {
	Cell,
	define,
	IEvent,
	ObservableList
	} from 'cellx';
import { computed, observable } from 'cellx-decorators';
import { Component, d } from 'rionite';
import ObservableTreeList from '../../ObservableTreeList';
import { closestComponent } from '../../utils';
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
export type TViewModel = ObservableList<{ [name: string]: any }>;

let defaultDataTreeListItemSchema = Object.freeze({ value: 'id', text: 'name' });
let defaultVMItemSchema = Object.freeze({ value: 'id', text: 'name' });

function getVertices(item: IDataTreeListItem): Array<IDataTreeListItem> {
	return item.children ?
		item.children.reduce((vertices, child) => vertices.concat(getVertices(child)), [] as Array<IDataTreeListItem>) :
		[item];
}

function toComparable(str: string | null): string | null {
	return str && str.trim().replace(/\s+/g, ' ').toLowerCase();
}

@d.Component({
	elementIs: 'opal-tree-list',

	input: {
		dataTreeList: { type: Object },
		dataTreeListKeypath: { type: String, readonly: true },
		dataTreeListItemSchema: { type: eval, default: defaultDataTreeListItemSchema, readonly: true },
		viewModel: { type: Object },
		viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
		query: String
	},

	template
})
export class OpalTreeList extends Component {
	static OpalTreeListItem = OpalTreeListItem;

	static defaultDataTreeListItemSchema = defaultDataTreeListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	dataTreeList: TDataTreeList;
	_dataTreeListItemValueFieldName: string;
	_dataTreeListItemTextFieldName: string;

	@computed get filteredDataTreeList(): TDataTreeList {
		let query = toComparable(this.input.query);

		if (!query) {
			return this.dataTreeList;
		}

		let dataTreeListItemValueFieldName = this._dataTreeListItemValueFieldName;
		let dataTreeListItemTextFieldName = this._dataTreeListItemTextFieldName;

		return new ObservableTreeList(
			this.dataTreeList.reduce(function _(filteredDataTreeList, item) {
				if (item.children) {
					let filteredChildren = item.children.reduce(_, []);

					if (
						filteredChildren.length ||
							toComparable(item[dataTreeListItemTextFieldName])!.indexOf(query!) != -1
					) {
						filteredDataTreeList.push({
							$original: item,
							[dataTreeListItemValueFieldName]: item[dataTreeListItemValueFieldName],
							[dataTreeListItemTextFieldName]: item[dataTreeListItemTextFieldName],
							children: filteredChildren
						});
					}
				} else if (toComparable(item[dataTreeListItemTextFieldName])!.indexOf(query!) != -1) {
					filteredDataTreeList.push({
						$original: item,
						[dataTreeListItemValueFieldName]: item[dataTreeListItemValueFieldName],
						[dataTreeListItemTextFieldName]: item[dataTreeListItemTextFieldName]
					});
				}

				return filteredDataTreeList;
			}, [] as Array<IDataTreeListItem>)
		);
	}

	@observable viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;

	initialize() {
		let input = this.input;

		if (input.dataTreeListKeypath) {
			define(this, 'dataTreeList', new Cell(Function(`return this.${ input.dataTreeListKeypath };`), {
				context: this.ownerComponent || window
			}));
		} else {
			if (!input.$specified.has('dataTreeList')) {
				throw new TypeError('Input property "dataTreeList" is required');
			}

			define(this, 'dataTreeList', () => input.dataTreeList);
		}

		let dataTreeListItemSchema = input.dataTreeListItemSchema;
		let defaultDataTreeListItemSchema = (this.constructor as typeof OpalTreeList).defaultDataTreeListItemSchema;

		this._dataTreeListItemValueFieldName = dataTreeListItemSchema.value || defaultDataTreeListItemSchema.value;
		this._dataTreeListItemTextFieldName = dataTreeListItemSchema.text || defaultDataTreeListItemSchema.text;

		this.viewModel = input.viewModel || new ObservableList();

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
			let $item = closestComponent(component.parentComponent!, OpalTreeListItem)!.input.$context.$item;
			let selected = (component as any).selected;

			getVertices($item.$original || $item).forEach((item) => {
				let index = vm.findIndex(
					(vmItem) => vmItem[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName]
				);

				if (selected) {
					if (index == -1) {
						vm.add({
							[viewModelItemValueFieldName]: item[dataTreeListItemValueFieldName],
							[viewModelItemTextFieldName]: item[dataTreeListItemTextFieldName]
						});
					}
				} else if (index != -1) {
					vm.removeAt(index);
				}
			});
		}
	}
}

(OpalTreeList.prototype as any)._getListItemContext = _getListItemContext;

export { OpalTreeListItem };
