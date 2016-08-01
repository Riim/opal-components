require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-switch-menu', {
	Static: {
		template: '<rt-content class="opal-switch-menu__content"></rt-content>',

		assets: {
			':component': {
				'on-check'({ target: checkedButton }) {
					this.buttons.forEach(btn => {
						if (btn != checkedButton) {
							btn.uncheck();
						}
					});
				},

				'on-uncheck'(evt) {
					evt.target.check();
				}
			}
		}
	},

	ready() {
		this.buttons = this.$$('.opal-button');
	}
});
