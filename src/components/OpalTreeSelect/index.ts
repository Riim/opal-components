import { Cell, define } from 'cellx';
import { Component, Param } from 'rionite';
import { OpalModal } from '../OpalModal';
import { OpalSelect } from '../OpalSelect';
import { OpalTreeList, TDataTreeList, TViewModel } from '../OpalTreeList';
import './index.css';
import template from './template.nelm';

@Component({
	template,

	events: {
		'btn-close': {
			click() {
				this.$<OpalModal>('menu')!.close();
			}
		}
	}
})
export class OpalTreeSelect extends OpalSelect {
	@Param paramMultiple = true;
	@Param paramDataTreeList: TDataTreeList;
	@Param({ readonly: true })
	paramDataTreeListKeypath: string;
	@Param({
		type: eval,
		default: OpalTreeList.defaultDataTreeListItemSchema,
		readonly: true
	})
	paramDataTreeListItemSchema: { value?: string; text?: string };
	@Param paramViewModel: TViewModel;
	@Param({
		type: eval,
		default: OpalTreeList.defaultViewModelItemSchema,
		readonly: true
	})
	paramViewModelItemSchema: { value?: string; text?: string };
	@Param paramQuery: string;

	dataTreeList: TDataTreeList;
	viewModel: TViewModel;

	initialize() {
		super.initialize();

		if (this.paramDataTreeListKeypath) {
			define(
				this,
				'dataTreeList',
				new Cell(Function(`return this.${this.paramDataTreeListKeypath};`), {
					context: this.ownerComponent || window
				})
			);
		} else {
			if (!this.$specifiedParams.has('dataTreeList')) {
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
