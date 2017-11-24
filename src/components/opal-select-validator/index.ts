import { OpalInputValidator } from '../opal-input-validator';
import { OpalSelect } from '../opal-select';
import './index.css';
import { OpalSelectValidatorRule } from './opal-select-validator-rule';

export { OpalSelectValidatorRule };

@OpalInputValidator.Config<OpalSelectValidator>({
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
