import { Cell, define } from 'cellx';
import { ComponentConfig } from 'rionite';
import { OpalModal } from '../opal-modal';
import { OpalSelect } from '../opal-select';
import { OpalTreeList, TDataTreeList, TViewModel } from '../opal-tree-list';
import './index.css';
import template from './template.nelm';

@ComponentConfig({
	elementIs: 'opal-tree-select',

	input: {
		multiple: true,
		dataTreeList: { type: Object },
		dataTreeListKeypath: { type: String, readonly: true },
		dataTreeListItemSchema: { type: eval, default: OpalTreeList.defaultDataTreeListItemSchema, readonly: true },
		viewModel: { type: Object },
		viewModelItemSchema: { type: eval, default: OpalTreeList.defaultViewModelItemSchema, readonly: true },
		query: String
	},

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
	dataTreeList: TDataTreeList;
	viewModel: TViewModel;

	initialize() {
		super.initialize();

		let input = this.input;

		if (input.dataTreeListKeypath) {
			define(this, 'dataTreeList', new Cell(Function(`return this.${ input.dataTreeListKeypath };`), {
				context: this.ownerComponent || window
			}));
		} else {
			if (!input.$specified.has('dataTreeList')) {
				throw new TypeError('Input property "dataTreeList" is required');
			}

			define(this, 'dataTreeList', () => input.dataTreeList);
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

	_updateOptions() {
	}
}
