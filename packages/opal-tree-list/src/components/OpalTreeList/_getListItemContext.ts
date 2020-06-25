import { Cell, define } from 'cellx';
import { RnSlot } from 'rionite';
import { OpalTreeListItem } from '../OpalTreeListItem';
import {
	IDataTreeListItem,
	IFilteredDataTreeListItem,
	OpalTreeList,
	TViewModel
	} from './';

function isItemSelected(
	item: IDataTreeListItem,
	vm: TViewModel,
	dataTreeListItemValueFieldName: string,
	viewModelItemValueFieldName: string
) {
	do {
		if (
			vm.find(
				(vmItem) =>
					vmItem[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName]
			)
		) {
			return true;
		}
	} while ((item = item.parent!));

	return false;
}

function isItemIndeterminate(
	item: IDataTreeListItem,
	vm: TViewModel,
	dataTreeListItemValueFieldName: string,
	viewModelItemValueFieldName: string
): boolean {
	return (
		!!item.children.length &&
		!isItemSelected(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) &&
		item.children.some(
			(child) =>
				!!vm.find(
					(vmItem) =>
						vmItem[viewModelItemValueFieldName] == child[dataTreeListItemValueFieldName]
				) ||
				isItemIndeterminate(
					child,
					vm,
					dataTreeListItemValueFieldName,
					viewModelItemValueFieldName
				)
		)
	);
}

export default function _getListItemContext(this: any, context: Object, slot: RnSlot) {
	let $item: IFilteredDataTreeListItem = slot.$context.$item;

	return define({
		__proto__: context,
		$item
	}, {
		$selected: new Cell(
			function (this: OpalTreeList) {
				this.dataTreeList;

				return isItemSelected(
					$item.$original || $item,
					this.viewModel,
					this._dataTreeListItemValueFieldName,
					this._viewModelItemValueFieldName
				);
			},
			{ context: this }
		),

		$indeterminate: new Cell(
			function (this: OpalTreeList | OpalTreeListItem) {
				this.dataTreeList;

				return isItemIndeterminate(
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
