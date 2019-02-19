import { OpalTagSelect } from '@riim/opal-tag-select';
import { Component } from 'rionite';
import template = require('./template.rnt');

@Component({
	elementIs: 'OpalTreeTagSelect',
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
