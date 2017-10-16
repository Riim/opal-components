import { ComponentConfig } from 'rionite';
import { OpalInputValidator, OpalInputValidatorRule } from '../opal-input-validator';
import { OpalSelect } from '../opal-select';

export { OpalSelectValidatorRule } from './opal-select-validator-rule';

@ComponentConfig<OpalSelectValidator>({
	elementIs: 'opal-select-validator'
})
export class OpalSelectValidator extends OpalInputValidator {
	target: OpalSelect;

	_checkValue(rule: OpalInputValidatorRule): boolean {
		let vm = this.target.viewModel;
		let ruleInput = rule.input;

		return !(
			vm.length ?
				ruleInput.minCount && vm.length < ruleInput.minCount ||
					ruleInput.test && !ruleInput.test.call(this.ownerComponent, vm) :
				ruleInput.required
		);
	}
}
