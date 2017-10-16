import { Component, ComponentConfig } from 'rionite';
import { OpalPopover } from '../../opal-popover';
import './index.css';
import template from './template.nelm';

@ComponentConfig({
	elementIs: 'opal-select-validator-rule',

	input: {
		required: { default: false, readonly: true },
		minCount: { type: Number, readonly: true },
		test: { type: Object, readonly: true },
		popoverFrom: 'right'
	},

	template
})
export class OpalSelectValidatorRule extends Component {
	showMessage() {
		this.$<OpalPopover>('popover')!.open();
	}

	hideMessage() {
		this.$<OpalPopover>('popover')!.close();
	}
}
