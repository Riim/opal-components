import { Component } from 'rionite';
import { OpalInputValidator } from '../OpalInputValidator';
import { OpalSelect } from '../OpalSelect';
import './index.css';
import { OpalSelectValidatorRule } from './OpalSelectValidatorRule';

export { OpalSelectValidatorRule };

@Component<OpalSelectValidator>()
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
