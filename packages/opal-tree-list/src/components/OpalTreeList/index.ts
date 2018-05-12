import { getText } from '@riim/gettext';
import { OpalCheckbox } from '@riim/opal-checkbox';
import { closestComponent } from '@riim/opal-utils';
import {
	Cell,
	define,
	IEvent,
	ObservableList
	} from 'cellx';
import { Computed, Observable } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import { ObservableTreeList, setParent } from '../../ObservableTreeList';
import '../OpalTreeListItem';
import { OpalTreeListItem } from '../OpalTreeListItem';
import _getListItemContext from './_getListItemContext';
import './index.css';
import template from './template.nelm';

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
export type TViewModel = ObservableList<{ [name: string]: any }>;

const defaultDataTreeListItemSchema = Object.freeze({ value: 'id', text: 'name' });
const defaultVMItemSchema = Object.freeze({ value: 'id', text: 'name' });

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

	i18n: {
		nothingFound: getText.t('Ничего не найдено')
	},

	template
})
export class OpalTreeList extends BaseComponent {
	static defaultDataTreeListItemSchema = defaultDataTreeListItemSchema;
	static defaultViewModelItemSchema = defaultVMItemSchema;

	@Param paramDataTreeList: TDataTreeList;
	@Param({ readonly: true })
	paramDataTreeListKeypath: string;
	@Param({
		type: eval,
		default: defaultDataTreeListItemSchema,
		readonly: true
	})
	paramDataTreeListItemSchema: { value?: string; text?: string };
	@Param paramViewModel: TViewModel;
	@Param({ type: eval, default: defaultVMItemSchema, readonly: true })
	paramViewModelItemSchema: { value?: string; text?: string };
	@Param paramQuery: string;

	dataTreeList: TDataTreeList;
	_dataTreeListItemValueFieldName: string;
	_dataTreeListItemTextFieldName: string;

	@Computed
	get filteredDataTreeList(): TDataTreeList {
		let query = toComparable(this.paramQuery);

		if (!query) {
			return this.dataTreeList;
		}

		let dataTreeListItemValueFieldName = this._dataTreeListItemValueFieldName;
		let dataTreeListItemTextFieldName = this._dataTreeListItemTextFieldName;

		return new ObservableTreeList(
			setParent(
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

	@Observable viewModel: TViewModel;
	_viewModelItemValueFieldName: string;
	_viewModelItemTextFieldName: string;

	initialize() {
		if (this.paramDataTreeListKeypath) {
			define(
				this,
				'dataTreeList',
				new Cell(Function(`return this.${this.paramDataTreeListKeypath};`), {
					context: this.ownerComponent || window
				})
			);
		} else {
			if (!this.$specifiedParams || !this.$specifiedParams.has('dataTreeList')) {
				throw new TypeError('Parameter "dataTreeList" is required');
			}

			define(this, 'dataTreeList', () => this.paramDataTreeList);
		}

		let dataTreeListItemSchema = this.paramDataTreeListItemSchema;
		let defaultDataTreeListItemSchema = (this.constructor as typeof OpalTreeList)
			.defaultDataTreeListItemSchema;

		this._dataTreeListItemValueFieldName =
			dataTreeListItemSchema.value || defaultDataTreeListItemSchema.value;
		this._dataTreeListItemTextFieldName =
			dataTreeListItemSchema.text || defaultDataTreeListItemSchema.text;

		this.viewModel = this.paramViewModel || new ObservableList();

		let vmItemSchema = this.paramViewModelItemSchema;
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

		if (component.element.classList.contains('OpalTreeList__selectionControl')) {
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
									[viewModelItemTextFieldName]:
										child[dataTreeListItemTextFieldName]
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
