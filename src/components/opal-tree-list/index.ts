import {
	Cell,
	define,
	IEvent,
	ObservableList
	} from 'cellx';
import { computed, observable } from 'cellx-decorators';
import { Component } from 'rionite';
import { fixParent, ObservableTreeList } from '../../ObservableTreeList';
import { closestComponent } from '../../utils';
import { OpalCheckbox } from '../opal-checkbox';
import _getListItemContext from './_getListItemContext';
import './index.css';
import { OpalTreeListItem } from './opal-tree-list-item';
import './opal-tree-list-item';
import template from './template.nelm';

export { OpalTreeListItem };

export interface IDataTreeListItem {
	[name: string]: any;
	parent?: IDataTreeListItem | null;
	children: Array<IDataTreeListItem>;
}

export type TDataTreeList = ObservableTreeList<IDataTreeListItem>;
export type TViewModel = ObservableList<{ [name: string]: any }>;

let defaultDataTreeListItemSchema = Object.freeze({ value: 'id', text: 'name' });
let defaultVMItemSchema = Object.freeze({ value: 'id', text: 'name' });

function toComparable(str: string | null): string | null {
	return (
		str &&
		str
			.trim()
			.replace(/\s+/g, ' ')
			.toLowerCase()
	);
}

@Component.Config({
	elementIs: 'opal-tree-list',

	input: {
		dataTreeList: { type: Object },
		dataTreeListKeypath: { type: String, readonly: true },
		dataTreeListItemSchema: {
			type: eval,
			default: defaultDataTreeListItemSchema,
			readonly: true
		},
		viewModel: { type: Object },
		viewModelItemSchema: { type: eval, default: defaultVMItemSchema, readonly: true },
		query: String
	},

	template
})
export class OpalTreeList extends Component {
	static defaultDataTreeListItemSchema = defaultDataTreeListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	dataTreeList: TDataTreeList;
	_dataTreeListItemValueFieldName: string;
	_dataTreeListItemTextFieldName: string;

	@computed
	get filteredDataTreeList(): TDataTreeList {
		let query = toComparable(this.input.query);

		if (!query) {
			return this.dataTreeList;
		}

		let dataTreeListItemValueFieldName = this._dataTreeListItemValueFieldName;
		let dataTreeListItemTextFieldName = this._dataTreeListItemTextFieldName;

		return new ObservableTreeList(
			fixParent(
				this.dataTreeList.reduce(
					function _(filteredDataTreeList, item) {
						if (item.children.length) {
							let filteredChildren = item.children.reduce(_, []);

							if (
								filteredChildren.length ||
								toComparable(item[dataTreeListItemTextFieldName])!.indexOf(
									query!
								) != -1
							) {
								filteredDataTreeList.push({
									$original: item,
									[dataTreeListItemValueFieldName]:
										item[dataTreeListItemValueFieldName],
									[dataTreeListItemTextFieldName]:
										item[dataTreeListItemTextFieldName],
									children: filteredChildren
								});
							}
						} else if (
							toComparable(item[dataTreeListItemTextFieldName])!.indexOf(query!) != -1
						) {
							filteredDataTreeList.push({
								$original: item,
								[dataTreeListItemValueFieldName]:
									item[dataTreeListItemValueFieldName],
								[dataTreeListItemTextFieldName]:
									item[dataTreeListItemTextFieldName],
								children: []
							});
						}

						return filteredDataTreeList;
					},
					[] as Array<IDataTreeListItem>
				)
			)
		);
	}

	@observable viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;

	initialize() {
		let input = this.input;

		if (input.dataTreeListKeypath) {
			define(
				this,
				'dataTreeList',
				new Cell(Function(`return this.${input.dataTreeListKeypath};`), {
					context: this.ownerComponent || window
				})
			);
		} else {
			if (!input.$specified.has('dataTreeList')) {
				throw new TypeError('Input property "dataTreeList" is required');
			}

			define(this, 'dataTreeList', () => input.dataTreeList);
		}

		let dataTreeListItemSchema = input.dataTreeListItemSchema;
		let defaultDataTreeListItemSchema = (this.constructor as typeof OpalTreeList)
			.defaultDataTreeListItemSchema;

		this._dataTreeListItemValueFieldName =
			dataTreeListItemSchema.value || defaultDataTreeListItemSchema.value;
		this._dataTreeListItemTextFieldName =
			dataTreeListItemSchema.text || defaultDataTreeListItemSchema.text;

		this.viewModel = input.viewModel || new ObservableList();

		let vmItemSchema = input.viewModelItemSchema;
		let defaultVMItemSchema = (this.constructor as typeof OpalTreeList)
			.defaultViewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
	}

	elementAttached() {
		this.listenTo(this, '<*>change', this._onChange);
	}

	_onChange(evt: IEvent<OpalCheckbox>) {
		let component = evt.target;

		if (component.element.classList.contains('opal-tree-list__selection-control')) {
			let dataTreeListItemValueFieldName = this._dataTreeListItemValueFieldName;
			let dataTreeListItemTextFieldName = this._dataTreeListItemTextFieldName;
			let vm = this.viewModel;
			let viewModelItemValueFieldName = this._viewModelItemValueFieldName;
			let viewModelItemTextFieldName = this._viewModelItemTextFieldName;
			let item: IDataTreeListItem = closestComponent(
				component.parentComponent!,
				OpalTreeListItem
			)!.input.$context.$item;

			if (component.selected) {
				for (
					let parent;
					(parent = item.parent) &&
					parent.children.every(
						child =>
							child == item ||
							!!vm.find(
								vmItem =>
									vmItem[viewModelItemValueFieldName] ==
									child[dataTreeListItemValueFieldName]
							)
					);

				) {
					item = parent;
				}

				item.children.forEach(function _(child) {
					let childIndex = vm.findIndex(
						vmItem =>
							vmItem[viewModelItemValueFieldName] ==
							child[dataTreeListItemValueFieldName]
					);

					if (childIndex != -1) {
						vm.removeAt(childIndex);
					}

					child.children.forEach(_);
				});

				vm.add({
					[viewModelItemValueFieldName]: item[dataTreeListItemValueFieldName],
					[viewModelItemTextFieldName]: item[dataTreeListItemTextFieldName]
				});
			} else {
				let itemIndex = vm.findIndex(
					vmItem =>
						vmItem[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName]
				);

				if (itemIndex != -1) {
					vm.removeAt(itemIndex);
				} else {
					let parent = item.parent!;

					for (;;) {
						let parentIndex = vm.findIndex(
							vmItem =>
								vmItem[viewModelItemValueFieldName] ==
								parent[dataTreeListItemValueFieldName]
						);

						vm.addRange(
							parent.children.filter(child => child != item).map(child => ({
								[viewModelItemValueFieldName]:
									child[dataTreeListItemValueFieldName],
								[viewModelItemTextFieldName]: child[dataTreeListItemTextFieldName]
							}))
						);

						if (parentIndex != -1) {
							vm.removeAt(parentIndex);
							break;
						}

						item = parent;
						parent = item.parent!;
					}
				}
			}
		}
	}
}

(OpalTreeList.prototype as any)._getListItemContext = _getListItemContext;
