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
	do {
		if (vm.find((vmItem) => vmItem[viewModelItemValueFieldName] == item[dataTreeListItemValueFieldName])) {
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
	return !!item.children.length &&
		!isSelectedItem(item, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName) &&
		item.children.some((child) =>
			!!vm.find((vmItem) => vmItem[viewModelItemValueFieldName] == child[dataTreeListItemValueFieldName]) ||
				isIndeterminateItem(child, vm, dataTreeListItemValueFieldName, viewModelItemValueFieldName)
		);
}

export default function _getListItemContext(
	context: { [name: string]: any },
	content: Component
): { [name: string]: any } {
	let $item = content.input.$context.$item;

	return define(
		mixin(
			Object.create(context),
			content.input.$context,
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
			}, { context: this }),

			$indeterminate: new Cell(function(this: OpalTreeList) {
				this.dataTreeList;

				return isIndeterminateItem(
					$item.$original || $item,
					this.viewModel,
					this._dataTreeListItemValueFieldName,
					this._viewModelItemValueFieldName
				);
			}, { context: this })
		}
	);
}
