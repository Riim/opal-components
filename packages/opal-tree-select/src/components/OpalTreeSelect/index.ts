import { OpalModal } from '@riim/opal-modal';
import { OpalSelect } from '@riim/opal-select';
import { OpalTreeList, TDataTreeList } from '@riim/opal-tree-list';
import { Cell, define } from 'cellx';
import { Component, Param } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalTreeSelect',
	template,

	events: {
		btnClose: {
			click() {
				this.$<OpalModal>('menu')!.close();
			}
		}
	}
})
export class OpalTreeSelect extends OpalSelect {
	@Param
	multiple = true;
	@Param('dataTreeList')
	paramDataTreeList: TDataTreeList;
	@Param({ readonly: true })
	dataTreeListKeypath: string;
	@Param({
		type: eval,
		default: OpalTreeList.defaultDataTreeListItemSchema,
		readonly: true
	})
	dataTreeListItemSchema: {
		value?: string;
		text?: string;
	};
	@Param({
		type: eval,
		default: OpalTreeList.defaultViewModelItemSchema,
		readonly: true
	})
	viewModelItemSchema: {
		value?: string;
		text?: string;
	};
	@Param
	query: string;
	@Param({ readonly: true })
	openOnClick = true;

	dataTreeList: TDataTreeList;

	initialize() {
		super.initialize();

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
	}

	_onMenuSelectOptionSelect(): false {
		return false;
	}

	_onMenuSelectOptionDeselect(): false {
		return false;
	}

	_onMenuChange(): false {
		return false;
	}

	_updateOptions() {}
}
