import { OpalButton } from '@riim/opal-button';
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
			[OpalButton.EVENT_CLICK]() {
				this.$<OpalModal>('menu')!.close();
			}
		}
	}
})
export class OpalTreeSelect extends OpalSelect {
	@Param({ default: true })
	multiple: boolean;
	@Param('dataTreeList')
	paramDataTreeList: TDataTreeList | null;
	@Param({ type: String, readonly: true })
	dataTreeListKeypath: string | null;
	@Param({ type: eval, default: OpalTreeList.defaultDataTreeListItemSchema, readonly: true })
	dataTreeListItemSchema: {
		value?: string;
		text?: string;
	};
	@Param({ type: eval, default: OpalTreeList.defaultViewModelItemSchema, readonly: true })
	viewModelItemSchema: {
		value?: string;
		text?: string;
	};
	@Param(String)
	query: string | null;
	@Param({ default: true, readonly: true })
	openOnClick: boolean;

	dataTreeList: TDataTreeList;

	initialize() {
		super.initialize();

		if (this.dataTreeListKeypath) {
			define(this, 'dataTreeList', new Cell(
				Function(`return this.${this.dataTreeListKeypath};`),
				{ context: this.ownerComponent || window }
			));
		} else {
			if (!this.$specifiedParams.has('dataTreeList')) {
				throw new TypeError('Parameter "dataTreeList" is required');
			}

			define(this, 'dataTreeList', () => this.paramDataTreeList);
		}
	}

	_onMenuSelectOptionSelect() {
		return false;
	}

	_onMenuSelectOptionDeselect() {
		return false;
	}

	_onMenuChange() {
		return false;
	}

	_updateOptions() {}
}
