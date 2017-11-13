import { Component } from 'rionite';
import { OpalPopover } from '../../opal-popover';
import './index.css';
import template from './template.nelm';

@Component.Config({
	elementIs: 'opal-input-validator-rule',

	inputs: {
		required: { default: false, readonly: true },
		test: { type: Object, readonly: true },
		popoverPosition: 'right'
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
