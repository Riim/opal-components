import { Component } from 'rionite';
import { OpalTagSelect } from '../OpalTagSelect';
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
