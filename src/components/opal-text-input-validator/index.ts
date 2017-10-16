import { computed, observable } from 'cellx-decorators';
import { Component, ComponentConfig, IComponentElement } from 'rionite';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import { OpalTextInputValidatorRule } from './opal-text-input-validator-rule';

export { OpalTextInputValidatorRule };

let map = Array.prototype.map;

@ComponentConfig<OpalTextInputValidator>({
	elementIs: 'opal-text-input-validator',
	template: '@section/inner { rt-content/content }'
})
export class OpalTextInputValidator extends Component {
	static OpalTextInputValidatorRule = OpalTextInputValidatorRule;

	@observable failedRule: OpalTextInputValidatorRule | null = null;

	@computed get valid(): boolean {
		return !this.failedRule;
	}

	_rules: Array<OpalTextInputValidatorRule>;

	ready() {
		this._rules = map.call(
			this.element.getElementsByClassName('opal-text-input-validator-rule'),
			(ruleEl: IComponentElement) => ruleEl.$component
		);
	}

	elementAttached() {
		this.listenTo('text-input', {
			input: this._onTextInputInput,
			change: this._onTextInputChange
		});
	}

	_onTextInputInput() {
		if (this.failedRule) {
			this._validate([this.failedRule]);
		}
	}

	_onTextInputChange() {
		this.validate();
	}

	validate(): boolean {
		return this._validate(this._rules);
	}

	_validate(rules: Array<OpalTextInputValidatorRule>): boolean {
		let value = this.$<OpalTextInput>('text-input')!.value;
		let failedRule: OpalTextInputValidatorRule | undefined;

		rules.forEach((rule) => {
			let ruleInput = rule.input;

			if (!failedRule && (
				value ?
					ruleInput.minLength && value.length < ruleInput.minLength ||
						ruleInput.regex && !ruleInput.regex.test(value) ||
						ruleInput.test && !ruleInput.test.call(this.ownerComponent, value) :
					ruleInput.required
			)) {
				failedRule = rule;
				rule.showMessage();
			} else {
				rule.hideMessage();
			}
		});

		let prevFailedRule = this.failedRule;

		this.failedRule = failedRule || null;

		if (+!!failedRule ^ +!!prevFailedRule) {
			if (failedRule) {
				this.element.setAttribute('valid', 'no');
				this.emit('text-input-validation-error');
			} else {
				this.element.removeAttribute('valid');
				this.emit('text-input-validation-valid');
			}
		}

		return !failedRule;
	}
}
