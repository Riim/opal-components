import { Component, Param } from 'rionite';
import { OpalPopover } from '../../opal-popover';
import './index.css';
import template from './template.nelm';

@Component.Config({
	elementIs: 'OpalInputValidatorRule',
	template
})
export class OpalInputValidatorRule extends Component {
	@Param({ default: false, readonly: true })
	paramRequired: boolean;

	@Param({ readonly: true })
	paramTest: (this: Component, value: any) => boolean;

	@Param({ default: 'right' })
	paramPopoverPosition: string;

	showMessage() {
		this.$<OpalPopover>('popover')!.open();
	}

	hideMessage() {
		this.$<OpalPopover>('popover')!.close();
	}
}
