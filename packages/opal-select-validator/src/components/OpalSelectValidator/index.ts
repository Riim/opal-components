import { OpalInputValidator } from '@riim/opal-input-validator';
import { OpalSelect } from '@riim/opal-select';
import { OpalTagSelect } from '@riim/opal-tag-select';
import { Component } from 'rionite';
import { OpalSelectValidatorRule } from '../OpalSelectValidatorRule';
import './index.css';

export { OpalSelectValidatorRule };

@Component({
	elementIs: 'OpalSelectValidator'
})
export class OpalSelectValidator extends OpalInputValidator {
	static targetChangeEvents = [OpalSelect.EVENT_CHANGE, OpalTagSelect.EVENT_CHANGE];

	select: OpalSelect;

	ready() {
		super.ready();
		this.target = this.select = this.$<OpalSelect>('select')!;
		this.select.validator = this;
	}

	_checkValue(rule: OpalSelectValidatorRule): boolean {
		let vm = this.select.viewModel;

		return !(vm.length
			? (rule.minCount && vm.length < rule.minCount) ||
			  (rule.test && !rule.test.call(this.ownerComponent, vm))
			: rule.required);
	}
}
