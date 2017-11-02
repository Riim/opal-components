import { OpalTagSelect } from '../opal-tag-select';
import template from './template.nelm';

@OpalTagSelect.Config({
	elementIs: 'opal-tree-tag-select',
	template
})
export class OpalTreeTagSelect extends OpalTagSelect {
	_onSelectSelect(): false {
		return false;
	}

	_onSelectDeselect(): false {
		return false;
	}
}
