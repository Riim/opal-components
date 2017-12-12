import { OpalTagSelect } from '@riim/opal-tag-select';
import { Component } from 'rionite';
import template from './template.nelm';

@Component({
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
