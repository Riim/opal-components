import { OpalInputValidator } from '@riim/opal-input-validator';
import { OpalTextInput } from '@riim/opal-text-input';
import { Component } from 'rionite';
import { OpalTextInputValidatorRule } from '../OpalTextInputValidatorRule';
import './index.css';

export { OpalTextInputValidatorRule };

@Component({
	elementIs: 'OpalTextInputValidator'
})
export class OpalTextInputValidator extends OpalInputValidator {
	static TARGET_CHANGE_EVENT = OpalTextInput.EVENT_CHANGE;

	textInput: OpalTextInput;

	ready() {
		super.ready();
		this.target = this.textInput = this.$<OpalTextInput>('textInput')!;
	}

	elementAttached() {
		super.elementAttached();
		this.listenTo(this.textInput, OpalTextInput.EVENT_INPUT, this._onTextInputInput);
	}

	_onTextInputInput() {
		if (this.failedRule) {
			this._validate([this.failedRule]);
		}
	}

	_checkValue(rule: OpalTextInputValidatorRule): boolean {
		let value = this.textInput.value;

		return !(value
			? (rule.minLength && value.length < rule.minLength) ||
			  (rule.regex && !rule.regex.test(value)) ||
			  (rule.test && !rule.test.call(this.ownerComponent, value))
			: rule.required);
	}
}
