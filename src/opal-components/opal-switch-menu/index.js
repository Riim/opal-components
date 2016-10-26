require('./index.css');

let { Component } = require('rionite');

let forEach = Array.prototype.forEach;

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
				},

				uncheck(evt) {
					evt.target.check();
				}
			}
		}
	},

	ready() {
		this.buttons = this.element.getElementsByClassName('opal-button');
	}
});
