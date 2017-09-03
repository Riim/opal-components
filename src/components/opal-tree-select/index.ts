import { define } from 'cellx';
import { d } from 'rionite';
import { OpalModal } from '../opal-modal';
import { OpalSelect } from '../opal-select';
import { OpalTreeList, TDataTreeList, TViewModel } from '../opal-tree-list';
import './index.css';
import template = require('./template.nelm');

@d.Component({
	elementIs: 'opal-tree-select',

	input: {
		multiple: true,
		datatreelist: { type: Object },
		datatreelistItemSchema: { type: eval, default: OpalTreeList.defaultDataTreeListItemSchema, readonly: true },
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

		if (!input.$specified.has('datatreelist')) {
			throw new TypeError('Input property "dataTreeList" is required');
		}

		define(this, 'dataTreeList', () => input.datatreelist);
	}

	_onMenuSelectOptionSelect() {
	}

	_onMenuSelectOptionDeselect() {
	}

	_onMenuChange() {
	}

	_updateOptions() {
	}
}
