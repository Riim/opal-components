import './index.css';

import { Component, d } from 'rionite';
import OpalPopover from '../../opal-popover';
import template = require('./index.html');

@d.Component({
	elementIs: 'opal-input-validator-rule',

	props: {
		required: { default: false, readonly: true },
		minLength: { type: Number, readonly: true },
		regex: { type: Object, readonly: true },
		test: { type: String, readonly: true },
		popoverTo: 'right'
	},

	template
})
export default class OpalInputValidatorRule extends Component {
	showMessage() {
		(this.$('popover') as OpalPopover).open();
	}

	hideMessage() {
		(this.$('popover') as OpalPopover).close();
	}
}