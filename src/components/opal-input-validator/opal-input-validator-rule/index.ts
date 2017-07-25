import { Component, d } from 'rionite';
import { OpalPopover } from '../../opal-popover';
import './index.css';
import template = require('./index.nelm');

@d.Component({
	elementIs: 'opal-input-validator-rule',

	input: {
		required: { default: false, readonly: true },
		minLength: { type: Number, readonly: true },
		regex: { type: eval, readonly: true },
		test: { type: String, readonly: true },
		popoverTo: 'right'
	},

	template
})
export class OpalInputValidatorRule extends Component {
	showMessage() {
		this.$<OpalPopover>('popover')!.open();
	}

	hideMessage() {
		this.$<OpalPopover>('popover')!.close();
	}
}
