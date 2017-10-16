import { computed, observable } from 'cellx-decorators';
import { Component, ComponentConfig, IComponentElement } from 'rionite';
import './index.css';
import { OpalInputValidatorRule } from './opal-input-validator-rule';

export { OpalInputValidatorRule };

@ComponentConfig<OpalInputValidator>({
	elementIs: 'opal-input-validator',
	template: '@section/inner { rt-content/content }'
})
export class OpalInputValidator extends Component {
	target: Component;

	rules: Array<OpalInputValidatorRule>;

	@observable failedRule: OpalInputValidatorRule | null = null;

	@computed get valid(): boolean {
		return !this.failedRule;
	}

	ready() {
		this.target = this.$<Component>('target')!;

		this.rules = Array.prototype.map.call(
			this.element.getElementsByClassName('opal-input-validator-rule'),
			(ruleEl: IComponentElement) => ruleEl.$component
		);
	}

	elementAttached() {
		this.listenTo(this.target, 'change', this._onTargetChange);
	}

	_onTargetChange() {
		this.validate();
	}

	validate(): boolean {
		return this._validate(this.rules);
	}

	_validate(rules: Array<OpalInputValidatorRule>): boolean {
		let failedRule: OpalInputValidatorRule | undefined;

		rules.forEach((rule) => {
			if (failedRule || this._checkValue(rule)) {
				rule.hideMessage();
			} else {
				failedRule = rule;
				rule.showMessage();
			}
		});

		let prevFailedRule = this.failedRule;

		this.failedRule = failedRule || null;

		if (+!!failedRule ^ +!!prevFailedRule) {
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

	_checkValue(rule: OpalInputValidatorRule): boolean {
		return false;
	}

	focusTarget() {
		(this.target as any).focus();
	}
}
