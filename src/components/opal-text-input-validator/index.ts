import { OpalInputValidator, OpalInputValidatorRule } from '../opal-input-validator';
import { OpalTextInput } from '../opal-text-input';
import './index.css';

export { OpalTextInputValidatorRule } from './opal-text-input-validator-rule';

@OpalInputValidator.Config<OpalTextInputValidator>({
	elementIs: 'opal-text-input-validator'
})
export class OpalTextInputValidator extends OpalInputValidator {
	textInput: OpalTextInput;

	ready() {
		super.ready();
		this.target = this.textInput = this.$<OpalTextInput>('text-input')!;
	}

	elementAttached() {
		super.elementAttached();
		this.listenTo(this.textInput, 'input', this._onTextInputInput);
	}

	_onTextInputInput() {
		if (this.failedRule) {
			this._validate([this.failedRule]);
		}
	}

	_checkValue(rule: OpalInputValidatorRule): boolean {
		let value = this.textInput.value;
		let ruleInput = rule.input;

		return !(value
			? (ruleInput.minLength && value.length < ruleInput.minLength) ||
				(ruleInput.regex && !ruleInput.regex.test(value)) ||
				(ruleInput.test && !ruleInput.test.call(this.ownerComponent, value))
			: ruleInput.required);
	}
}
