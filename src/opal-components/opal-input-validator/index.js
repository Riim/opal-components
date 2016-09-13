require('./index.css');

let cellx = require('cellx');
let { Component } = require('rionite');
let OpalInputValidatorRule = require('./opal-input-validator-rule');

module.exports = Component.extend('opal-input-validator', {
	Static: {
		OpalInputValidatorRule,

		template: '<rt-content class="opal-input-validator__content"></rt-content>',

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
		cellx.define(this, {
			failedRule: null,

			valid() {
				return !this.failedRule;
			}
		});
	},

	ready() {
		this.assets.rules = this.$$('.opal-input-validator-rule');
	},

	/**
	 * @typesign () -> boolean;
	 */
	validate() {
		return this._validate(this.assets.rules);
	},

	/**
	 * @typesign (rules: Array<OpalComponents.OpalInputValidatorRule>) -> boolean;
	 */
	_validate(rules) {
		let value = this.assets.input.value;
		let trimmedValue = value.trim();
		let failedRule = null;

		rules.forEach(rule => {
			let ruleProps = rule.props;

			if (!failedRule && (
				trimmedValue ?
					ruleProps.minLength && trimmedValue.length < ruleProps.minLength ||
						ruleProps.regex && !ruleProps.regex.test(value) ||
						ruleProps.test && !this.ownerComponent[ruleProps.test](value) :
					ruleProps.required
			)) {
				failedRule = rule;
				rule.showMessage();
			} else {
				rule.hideMessage();
			}
		});

		let oldFailedRule = this.failedRule;

		this.failedRule = failedRule;

		if (!!failedRule ^ !!oldFailedRule) {
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
});
