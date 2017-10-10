import { ComponentConfig } from 'rionite';
import { OpalTagSelect } from '../opal-tag-select';
import template from './template.nelm';

@ComponentConfig({
	elementIs: 'opal-tree-tag-select',
	template
})
export class OpalTreeTagSelect extends OpalTagSelect {
	_onSelectOptionSelect() {
	}

	_onSelectOptionDeselect() {
	}
}
