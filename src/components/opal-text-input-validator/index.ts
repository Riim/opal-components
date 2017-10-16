import { ComponentConfig } from 'rionite';
import { OpalInputValidator, OpalInputValidatorRule } from '../opal-input-validator';
import { OpalTextInput } from '../opal-text-input';
import './index.css';

export { OpalTextInputValidatorRule } from './opal-text-input-validator-rule';

@ComponentConfig<OpalTextInputValidator>({
	elementIs: 'opal-text-input-validator'
})
export class OpalTextInputValidator extends OpalInputValidator {
	target: OpalTextInput;

	elementAttached() {
		super.elementAttached();
		this.listenTo(this.target, 'input', this._onTextInputInput);
	}

	_onTextInputInput() {
		if (this.failedRule) {
			this._validate([this.failedRule]);
		}
	}

	_checkValue(rule: OpalInputValidatorRule): boolean {
		let value = this.target.value;
		let ruleInput = rule.input;

		return !(
			value ?
				ruleInput.minLength && value.length < ruleInput.minLength ||
					ruleInput.regex && !ruleInput.regex.test(value) ||
					ruleInput.test && !ruleInput.test.call(this.ownerComponent, value) :
				ruleInput.required
		);
	}
}
