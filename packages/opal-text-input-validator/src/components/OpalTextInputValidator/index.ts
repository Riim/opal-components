import { OpalInputValidator } from '@riim/opal-input-validator';
import { OpalTextInput } from '@riim/opal-text-input';
import { Component } from 'rionite';
import { OpalTextInputValidatorRule } from '../OpalTextInputValidatorRule';
import './index.css';

export { OpalTextInputValidatorRule };

@Component<OpalTextInputValidator>()
export class OpalTextInputValidator extends OpalInputValidator {
	textInput: OpalTextInput;

	ready() {
		super.ready();
		this.target = this.textInput = this.$<OpalTextInput>('textInput')!;
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
