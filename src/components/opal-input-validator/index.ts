import { define } from 'cellx';
import { Component, d, IComponentElement } from 'rionite';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import { OpalInputValidatorRule } from './opal-input-validator-rule';

let map = Array.prototype.map;

@d.Component<OpalInputValidator>({
	elementIs: 'opal-input-validator',
	template: '@section/inner { rt-content/content }'
})
export class OpalInputValidator extends Component {
	static OpalInputValidatorRule = OpalInputValidatorRule;

	failedRule: OpalInputValidatorRule | null;

	valid: boolean;

	_rules: Array<OpalInputValidatorRule>;

	initialize() {
		define(this, {
			failedRule: null,

			valid(this: OpalInputValidator): boolean {
				return !this.failedRule;
			}
		});
	}

	ready() {
		this._rules = map.call(
			this.element.getElementsByClassName('opal-input-validator-rule'),
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

	_validate(rules: Array<OpalInputValidatorRule>): boolean {
		let value = this.$<OpalTextInput>('text-input').value;
		let failedRule: OpalInputValidatorRule | undefined;

		rules.forEach((rule) => {
			let ruleInput = rule.input;

			if (!failedRule && (
				value ?
					ruleInput.minLength && value.length < ruleInput.minLength ||
						ruleInput.regex && !ruleInput.regex.test(value) ||
						ruleInput.test && !this.ownerComponent![ruleInput.test](value) :
					ruleInput.required
			)) {
				failedRule = rule;
				rule.showMessage();
			} else {
				rule.hideMessage();
			}
		});

		let oldFailedRule = this.failedRule;

		this.failedRule = failedRule || null;

		if (+!!failedRule ^ +!!oldFailedRule) {
			if (failedRule) {
				this.element.setAttribute('valid', 'no');
				this.emit('input-validation-error');
			} else {
				this.element.removeAttribute('valid');
				this.emit('input-validation-valid');
			}
		}

		return !failedRule;
	}
}

export { OpalInputValidatorRule };
