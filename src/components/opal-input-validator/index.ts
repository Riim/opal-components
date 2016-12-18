import './index.css';

import { define } from 'cellx';
import { IComponentElement, Component, d } from 'rionite';
import OpalTextInput from '../opal-text-input';
import OpalInputValidatorRule from './opal-input-validator-rule';

export { default as OpalInputValidatorRule } from './opal-input-validator-rule';

let map = Array.prototype.map;

@d.Component<OpalInputValidator>({
	elementIs: 'opal-input-validator',
	template: '<rt-content class="opal-input-validator__content"></rt-content>',

	events: {
		input: {
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
export default class OpalInputValidator extends Component {
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
			(ruleEl: IComponentElement) => ruleEl.$c
		);
	}

	validate(): boolean {
		return this._validate(this._rules);
	}

	_validate(rules: Array<OpalInputValidatorRule>): boolean {
		let value = (this.$('input') as OpalTextInput).value;
		let trimmedValue = value.trim();
		let failedRule: OpalInputValidatorRule | undefined;

		rules.forEach(rule => {
			let ruleProps = rule.props;

			if (!failedRule && (
				trimmedValue ?
					ruleProps['min-length'] && trimmedValue.length < ruleProps['min-length'] ||
						ruleProps['regex'] && !ruleProps['regex'].test(value) ||
						ruleProps['test'] && !(
							(this.ownerComponent as Component)[ruleProps['test']] as (value: string) => boolean
						)(value) :
					ruleProps['required']
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
