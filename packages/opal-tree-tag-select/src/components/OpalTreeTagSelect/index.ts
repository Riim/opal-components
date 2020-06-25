import { OpalTagSelect } from '@riim/opal-tag-select';
import { Component } from 'rionite';
import template from './template.rnt';

@Component({
	elementIs: 'OpalTreeTagSelect',
	template
})
export class OpalTreeTagSelect extends OpalTagSelect {
	_onSelectSelect() {
		return false;
	}

	_onSelectDeselect() {
		return false;
	}
}
