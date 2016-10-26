let { Component } = require('rionite');
let OpalRadioButton = require('./opal-radio-Button');

let forEach = Array.prototype.forEach;

module.exports = Component.extend('opal-radio-group', {
	Static: {
		OpalRadioButton,

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
		this.buttons = this.element.getElementsByClassName('opal-radio-button');
	}
});
