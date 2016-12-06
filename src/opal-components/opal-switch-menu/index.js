require('./index.css');

let { Component } = require('rionite');

let forEach = Array.prototype.forEach;
let find = Array.prototype.find;

module.exports = Component.extend('opal-switch-menu', {
	Static: {
		template: '<rt-content class="opal-switch-menu__content"></rt-content>',

		events: {
			':component': {
				check({ target: checkedButton }) {
					forEach.call(this.buttons, btn => {
						if (btn.$c != checkedButton) {
							btn.$c.uncheck();
						}
					});

					this._checkedButton = checkedButton;

					this.emit('change');
				},

				uncheck(evt) {
					evt.target.check();
				}
			}
		}
	},

	_checkedButton: undefined,

	get checkedButton() {
		if (this._checkedButton !== undefined) {
			return this._checkedButton;
		}

		return (this._checkedButton = find.call(this.buttons, button => button.$c.checked) || null);
	},

	ready() {
		this.buttons = this.element.getElementsByClassName('opal-button');
	},

	clear() {
		let checkedButton = this._checkedButton;

		if (checkedButton) {
			checkedButton.uncheck();
			this._checkedButton = null;
		}
	}
});
