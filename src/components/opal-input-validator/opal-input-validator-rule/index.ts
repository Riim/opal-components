import { Component, ComponentConfig } from 'rionite';
import { OpalPopover } from '../../opal-popover';
import './index.css';
import template from './template.nelm';

@ComponentConfig({
	elementIs: 'opal-input-validator-rule',

	input: {
		required: { default: false, readonly: true },
		test: { type: Object, readonly: true },
		popoverFrom: 'right'
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
