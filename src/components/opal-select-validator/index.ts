import { OpalInputValidator, OpalInputValidatorRule } from '../opal-input-validator';
import { OpalSelect } from '../opal-select';
import './index.css';

export { OpalSelectValidatorRule } from './opal-select-validator-rule';

@OpalInputValidator.Config<OpalSelectValidator>({
	elementIs: 'opal-select-validator'
})
export class OpalSelectValidator extends OpalInputValidator {
	select: OpalSelect;

	ready() {
		super.ready();
		this.target = this.select = this.$<OpalSelect>('select')!;
	}

	_checkValue(rule: OpalInputValidatorRule): boolean {
		let vm = this.select.viewModel;
		let ruleInputs = rule.inputs;

		return !(vm.length
			? (ruleInputs.minCount && vm.length < ruleInputs.minCount) ||
				(ruleInputs.test && !ruleInputs.test.call(this.ownerComponent, vm))
			: ruleInputs.required);
	}
}
