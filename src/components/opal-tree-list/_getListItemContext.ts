import { mixin } from '@riim/mixin';
import { Cell, define } from 'cellx';
import { Component } from 'rionite';
import { IDataTreeListItem, OpalTreeList, TViewModel } from './index';

function isSelectedItem(
	item: IDataTreeListItem,
	vm: TViewModel,
	dataTreeListItemValueFieldName: string,
	viewModelItemValueFieldName: string
): boolean {
	return item.children ?
		item.children
			.every((child) => isSelectedItem(child, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName)) :
		!!vm.find((child) => child[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName]);
}

function isIndeterminateItem(
	item: IDataTreeListItem,
	vm: TViewModel,
	dataTreeListItemValueFieldName: string,
	viewModelItemValueFieldName: string
): boolean {
	return !!item.children && !isSelectedItem(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) &&
		item.children.some(
			(child) => isSelectedItem(child, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) ||
				isIndeterminateItem(child, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName)
		);
}

export default function _getListItemContext(
	context: { [name: string]: any },
	slot: Component
): { [name: string]: any } {
	let $item = slot.input.$context.$item;

	return define(
		mixin(
			Object.create(context),
			slot.input.$context,
			['$component']
		) as any,
		{
			$selected: new Cell(function(this: OpalTreeList) {
				this.dataTreeList;

				return isSelectedItem(
					$item.$original || $item,
					this.viewModel,
					this._dataTreeListItemValueFieldName,
					this._viewModelItemValueFieldName
				);
			}, { owner: this }),

			$indeterminate: new Cell(function(this: OpalTreeList) {
				this.dataTreeList;

				return isIndeterminateItem(
					$item.$original || $item,
					this.viewModel,
					this._dataTreeListItemValueFieldName,
					this._viewModelItemValueFieldName
				);
			}, { owner: this })
		}
	);
}
