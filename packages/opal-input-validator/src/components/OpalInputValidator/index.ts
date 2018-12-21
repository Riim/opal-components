import { Computed, Observable } from 'cellx-decorators';
import { BaseComponent, Component, IComponentElement } from 'rionite';
import { OpalInputValidatorRule } from '../OpalInputValidatorRule';
import './index.css';
import template from './template.nelm';

export { OpalInputValidatorRule };

@Component({
	elementIs: 'OpalInputValidator',
	template
})
export class OpalInputValidator extends BaseComponent {
	target: BaseComponent;

	rules: Array<OpalInputValidatorRule>;

	@Observable
	failedRule: OpalInputValidatorRule | null = null;

	@Computed
	get valid(): boolean {
		return !this.failedRule;
	}

	ready() {
		this.rules = Array.prototype.map.call(
			this.element.getElementsByClassName('OpalInputValidatorRule'),
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

		rules.forEach(rule => {
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

	_checkValue(_rule: OpalInputValidatorRule): boolean {
		return false;
	}

	focusTarget(): this {
		(this.target as any).focus();
		return this;
	}
}
