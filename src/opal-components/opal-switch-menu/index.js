require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-switch-menu', {
	Static: {
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
