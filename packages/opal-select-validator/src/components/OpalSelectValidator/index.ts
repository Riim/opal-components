import { OpalInputValidator } from '@riim/opal-input-validator';
import { OpalSelect } from '@riim/opal-select';
import { Component } from 'rionite';
import { OpalSelectValidatorRule } from '../OpalSelectValidatorRule';
import './index.css';

export { OpalSelectValidatorRule };

@Component({
	elementIs: 'OpalSelectValidator'
})
export class OpalSelectValidator extends OpalInputValidator {
	select: OpalSelect;

	ready() {
		super.ready();
		this.target = this.select = this.$<OpalSelect>('select')!;
	}

	_checkValue(rule: OpalSelectValidatorRule): boolean {
		let vm = this.select.viewModel;

		return !(vm.length
			? (rule.paramMinCount && vm.length < rule.paramMinCount) ||
				(rule.paramTest && !rule.paramTest.call(this.ownerComponent, vm))
			: rule.paramRequired);
	}
}
