import { OpalInputValidator } from '../opal-input-validator';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import { OpalTextInputValidatorRule } from './opal-text-input-validator-rule';

export { OpalTextInputValidatorRule };

@OpalInputValidator.Config<OpalTextInputValidator>({
	elementIs: 'OpalTextInputValidator'
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

	_checkValue(rule: OpalTextInputValidatorRule): boolean {
		let value = this.textInput.value;

		return !(value
			? (rule.paramMinLength && value.length < rule.paramMinLength) ||
				(rule.paramRegex && !rule.paramRegex.test(value)) ||
				(rule.paramTest && !rule.paramTest.call(this.ownerComponent, value))
			: rule.paramRequired);
	}
}
