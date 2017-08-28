import { Cell, define } from 'cellx';
import { d } from 'rionite';
import { OpalSelect } from '../opal-select';
import { OpalTreeList, TDataTreeList, TViewModel } from '../opal-tree-list';
import './index.css';
import template = require('./template.nelm');

@d.Component({
	elementIs: 'opal-tree-select',

	input: {
		multiple: true,
		datatreelist: { type: Object },
		datatreelistKeypath: { type: String, readonly: true },
		datatreelistItemSchema: { type: eval, default: OpalTreeList.defaultDataTreeListItemSchema, readonly: true },
		viewModel: { type: Object },
		viewModelKeypath: { type: String, readonly: true },
		viewModelItemSchema: { type: eval, default: OpalTreeList.defaultViewModelItemSchema, readonly: true },
		query: String
	},

	template
})
export class OpalTreeSelect extends OpalSelect {
	dataTreeList: TDataTreeList;
	viewModel: TViewModel;

	initialize() {
		super.initialize();

		let input = this.input;

		if (input.$specified.has('datatreelist')) {
			define(this, 'dataTreeList', () => input.datatreelist);
		} else if (input.datatreelistKeypath) {
			define(this, 'dataTreeList', new Cell(
				Function(`return this.${ input.datatreelistKeypath };`),
				{
					context: this.ownerComponent || window
				}
			));
		} else {
			throw new TypeError('Input property "dataTreeList" is required');
		}
	}

	_onMenuSelectOptionSelect() {
	}

	_onMenuSelectOptionDeselect() {
	}

	_updateOptions() {
	}
}
