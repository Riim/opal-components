require('./index.css');

let { Component } = require('rionite');
let OpalValidatorRule = require('./opal-validator-rule');

module.exports = Component.extend('opal-validator', {
	Static: {
		OpalValidatorRule,

		template: '<rt-content class="opal-validator__content"></rt-content>',

		assets: {
			input: {
				'on-input'() {
					if (this.failedRule) {
						this._validate([this.failedRule]);
					}
				},

				'on-change'() {
					this.validate();
				}
			}
		}
	},

	valid: false,
	failedRule: null,

	ready() {
		this.assets.rules = this.$$('.opal-validator-rule');
	},

	/**
	 * @typesign () -> boolean;
	 */
	validate() {
		return this._validate(this.assets.rules);
	},

	/**
	 * @typesign (rules: Array<OpalComponents.OpalValidatorRule>) -> boolean;
	 */
	_validate(rules) {
		let value = this.assets.input.value;
		let failedRule = null;

		rules.forEach(rule => {
			let ruleProps = rule.props;

			if (!failedRule && (
				ruleProps.required && !value.trim() ||
					ruleProps.minLength && (value = value.trim()) && value.length < ruleProps.minLength ||
					ruleProps.regex && !ruleProps.regex.test(value) ||
					ruleProps.test && !this.ownerComponent[ruleProps.test](value)
			)) {
				failedRule = rule;
				rule.showMessage();
			} else {
				rule.hideMessage();
			}
		});

		this.valid = !failedRule;
		this.failedRule = failedRule;

		if (failedRule) {
			this.element.setAttribute('valid', 'no');
		} else {
			this.element.removeAttribute('valid');
		}

		return !failedRule;
	}
});
