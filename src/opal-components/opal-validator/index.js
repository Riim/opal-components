require('./opal-validator-rule');
require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-validator', {
	Static: {
		props: {
			valid: true
		},

		template: '<rt-content class="opal-validator__content"/>',

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

	initialize() {
		this.failedRule = null;
	},

	ready() {
		this.rules = this.$$('opal-validator-rule');
	},

	/**
	 * @typesign () -> boolean;
	 */
	validate() {
		return this._validate(this.rules);
	},

	/**
	 * @typesign (rules: Array<OpalComponents.OpalValidatorRule>) -> boolean;
	 */
	_validate(rules) {
		let value = this.input.value;
		let failedRule = null;

		rules.forEach(rule => {
			let ruleProps = rule.props;

			if (
				!failedRule && (
					ruleProps.required && !value ||
						ruleProps.minLength && value.length < ruleProps.minLength ||
						ruleProps.pattern && !ruleProps.pattern.test(value)
				)
			) {
				failedRule = rule;
				rule.showMessage();
			} else {
				rule.hideMessage();
			}
		});

		this.failedRule = failedRule;
		this.props.valid = !failedRule;

		return !failedRule;
	}
});
