import { mixin } from '@riim/mixin';
import { Cell, define } from 'cellx';
import { RtContent } from 'rionite';
import {
	IDataTreeListItem,
	IFilteredDataTreeListItem,
	OpalTreeList,
	TViewModel
	} from './index';
import { OpalTreeListItem } from './opal-tree-list-item/index';

function isSelectedItem(
	item: IDataTreeListItem,
	vm: TViewModel,
	dataTreeListItemValueFieldName: string,
	viewModelItemValueFieldName: string
): boolean {
	do {
		if (
			vm.find(
				vmItem =>
					vmItem[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName]
			)
		) {
			return true;
		}
	} while ((item = item.parent!));

	return false;
}

function isIndeterminateItem(
	item: IDataTreeListItem,
	vm: TViewModel,
	dataTreeListItemValueFieldName: string,
	viewModelItemValueFieldName: string
): boolean {
	return (
		!!item.children.length &&
		!isSelectedItem(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) &&
		item.children.some(
			child =>
				!!vm.find(
					vmItem =>
						vmItem[viewModelItemValueFieldName] == child[dataTreeListItemValueFieldName]
				) ||
				isIndeterminateItem(
					child,
					vm,
					dataTreeListItemValueFieldName,
					viewModelItemValueFieldName
				)
		)
	);
}

export default function _getListItemContext(
	this: OpalTreeList | OpalTreeListItem,
	context: { [name: string]: any },
	content: RtContent
): { [name: string]: any } {
	let $item: IFilteredDataTreeListItem = content.$context.$item;

	return define(mixin(Object.create(context), content.$context, ['$component']), {
		$selected: new Cell(
			function(this: OpalTreeList) {
				this.dataTreeList;

				return isSelectedItem(
					$item.$original || $item,
					this.viewModel,
					this._dataTreeListItemValueFieldName,
					this._viewModelItemValueFieldName
				);
			},
			{ context: this }
		),

		$indeterminate: new Cell(
			function(this: OpalTreeList | OpalTreeListItem) {
				this.dataTreeList;

				return isIndeterminateItem(
					$item.$original || $item,
					this.viewModel,
					this._dataTreeListItemValueFieldName,
					this._viewModelItemValueFieldName
				);
			},
			{ context: this }
		)
	});
}
