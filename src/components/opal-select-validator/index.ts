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
		let ruleInput = rule.input;

		return !(vm.length
			? (ruleInput.minCount && vm.length < ruleInput.minCount) ||
				(ruleInput.test && !ruleInput.test.call(this.ownerComponent, vm))
			: ruleInput.required);
	}
}
