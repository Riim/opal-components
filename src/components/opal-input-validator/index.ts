import { define } from 'cellx';
import { Component, d, IComponentElement } from 'rionite';
import { OpalTextInput } from '../opal-text-input';
import './index.css';
import { OpalInputValidatorRule } from './opal-input-validator-rule';

let map = Array.prototype.map;

@d.Component<OpalInputValidator>({
	elementIs: 'opal-input-validator',
	template: '@section/inner { rt-content/content }',

	oevents: {
		'text-input': {
			input() {
				if (this.failedRule) {
					this._validate([this.failedRule]);
				}
			},

			change() {
				this.validate();
			}
		}
	}
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

	validate(): boolean {
		return this._validate(this._rules);
	}

	_validate(rules: Array<OpalInputValidatorRule>): boolean {
		let value = (this.$('text-input') as OpalTextInput).value;
		let failedRule: OpalInputValidatorRule | undefined;

		rules.forEach((rule) => {
			let ruleInput = rule.input;

			if (!failedRule && (
				value ?
					ruleInput.minLength && value.length < ruleInput.minLength ||
						ruleInput.regex && !ruleInput.regex.test(value) ||
						ruleInput.test &&
							!((this.ownerComponent as Component)[ruleInput.test] as (value: string) => boolean)(value) :
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
