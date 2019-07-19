import { OpalCheckbox } from '@riim/opal-checkbox';
import { closestComponent } from '@riim/opal-utils';
import {
	Cell,
	define,
	IEvent,
	ObservableList
	} from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import {
	BaseComponent,
	Component,
	IDisposableTimeout,
	Param
	} from 'rionite';
import { ObservableTreeList, setParent } from '../../ObservableTreeList';
import '../OpalTreeListItem';
import { OpalTreeListItem } from '../OpalTreeListItem';
import _getListItemContext from './_getListItemContext';
import './index.css';
import template from './template.rnt';

export { OpalTreeListItem };

export interface IDataTreeListItem {
	[name: string]: any;
	parent?: IDataTreeListItem | null;
	children: Array<IDataTreeListItem>;
}

export interface IFilteredDataTreeListItem {
	[name: string]: any;
	parent?: IDataTreeListItem | null;
	children: Array<IDataTreeListItem>;
	$original: IDataTreeListItem;
}

export type TDataTreeList = ObservableTreeList<IDataTreeListItem>;
export type TFilteredDataTreeList = ObservableTreeList<IFilteredDataTreeListItem>;
export type TViewModel = ObservableList<Record<string, any>>;

const defaultDataTreeListItemSchema = Object.freeze({
	value: 'id',
	text: 'name'
});
const defaultVMItemSchema = Object.freeze({
	value: 'id',
	text: 'name'
});

function toComparable(str: string | null): string | null {
	return (
		str &&
		str
			.trim()
			.replace(/\s+/g, ' ')
			.toLowerCase()
	);
}

@Component({
	elementIs: 'OpalTreeList',
	template
})
export class OpalTreeList extends BaseComponent {
	static defaultDataTreeListItemSchema = defaultDataTreeListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	@Param('dataTreeList')
	paramDataTreeList: TDataTreeList;
	@Param({ readonly: true })
	dataTreeListKeypath: string;
	@Param({
		type: eval,
		default: defaultDataTreeListItemSchema,
		readonly: true
	})
	dataTreeListItemSchema: {
		value?: string;
		text?: string;
	};
	@Param({ readonly: true })
	viewModel: TViewModel = new ObservableList();
	@Param({
		type: eval,
		default: defaultVMItemSchema,
		readonly: true
	})
	viewModelItemSchema: {
		value?: string;
		text?: string;
	};
	@Param
	query: string;

	dataTreeList: TDataTreeList | null;
	_dataTreeListItemValueFieldName: string;
	_dataTreeListItemTextFieldName: string;

	@Observable
	comparableQuery: string | null;

	@Computed
	get filteredDataTreeList(): TDataTreeList | null {
		let dataTreeList = this.dataTreeList;

		if (!dataTreeList) {
			return null;
		}

		let query = this.comparableQuery;

		if (!query) {
			return dataTreeList;
		}

		let dataTreeListItemValueFieldName = this._dataTreeListItemValueFieldName;
		let dataTreeListItemTextFieldName = this._dataTreeListItemTextFieldName;

		return new ObservableTreeList(
			setParent(
				dataTreeList.reduce(
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

	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;

	@Observable
	_queryTimeout: IDisposableTimeout | null = null;

	@Computed
	get listShown(): boolean {
		return !!this.dataTreeList && !this._queryTimeout;
	}

	initialize() {
		if (this.dataTreeListKeypath) {
			define(this, 'dataTreeList', new Cell(
				Function(`return this.${this.dataTreeListKeypath};`),
				{
					context: this.ownerComponent || window
				}
			));
		} else {
			if (!this.$specifiedParams || !this.$specifiedParams.has('dataTreeList')) {
				throw new TypeError('Parameter "dataTreeList" is required');
			}

			define(this, 'dataTreeList', () => this.paramDataTreeList);
		}

		let dataTreeListItemSchema = this.dataTreeListItemSchema;
		let defaultDataTreeListItemSchema = (this.constructor as typeof OpalTreeList)
			.defaultDataTreeListItemSchema;

		this._dataTreeListItemValueFieldName =
			dataTreeListItemSchema.value || defaultDataTreeListItemSchema.value;
		this._dataTreeListItemTextFieldName =
			dataTreeListItemSchema.text || defaultDataTreeListItemSchema.text;

		let vmItemSchema = this.viewModelItemSchema;
		let defaultVMItemSchema = (this.constructor as typeof OpalTreeList)
			.defaultViewModelItemSchema;

		this._viewModelItemValueFieldName = vmItemSchema.value || defaultVMItemSchema.value;
		this._viewModelItemTextFieldName = vmItemSchema.text || defaultVMItemSchema.text;
	}

	elementAttached() {
		this.listenTo(this, {
			'change:query': this._onQueryChange,
			'<*>change': this._onChange
		});
	}

	_onQueryChange() {
		if (this._queryTimeout) {
			this._queryTimeout.clear();
		}

		this._queryTimeout = this.setTimeout(this._onQueryTimeout, 300);
	}

	_onQueryTimeout() {
		this._queryTimeout = null;
		this.comparableQuery = toComparable(this.query);
	}

	_onChange(evt: IEvent<OpalCheckbox>) {
		let component = evt.target;

		if (!component.element.classList.contains('OpalTreeList__selectionControl')) {
			return;
		}

		let dataTreeListItemValueFieldName = this._dataTreeListItemValueFieldName;
		let dataTreeListItemTextFieldName = this._dataTreeListItemTextFieldName;
		let vm = this.viewModel;
		let viewModelItemValueFieldName = this._viewModelItemValueFieldName;
		let viewModelItemTextFieldName = this._viewModelItemTextFieldName;
		let item: IDataTreeListItem | IFilteredDataTreeListItem = closestComponent(
			component.parentComponent!,
			OpalTreeListItem
		)!.$context!.$item;

		if (item.$original) {
			item = item.$original;
		}

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
						vmItem[viewModelItemValueFieldName] == child[dataTreeListItemValueFieldName]
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
				let parent: IDataTreeListItem | IFilteredDataTreeListItem = item.parent!;

				for (;;) {
					let parentIndex = vm.findIndex(
						vmItem =>
							vmItem[viewModelItemValueFieldName] ==
							parent[dataTreeListItemValueFieldName]
					);

					vm.addRange(
						((parent as IFilteredDataTreeListItem).$original || parent).children
							.filter(child => child != item)
							.map(child => ({
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

(OpalTreeList.prototype as any)._getListItemContext = _getListItemContext;
