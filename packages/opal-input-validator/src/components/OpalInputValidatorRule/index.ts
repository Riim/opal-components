import { OpalPopover } from '@riim/opal-popover';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template = require('./template.rnt');

@Component({
	elementIs: 'OpalInputValidatorRule',
	template
})
export class OpalInputValidatorRule extends BaseComponent {
	@Param({ readonly: true })
	paramRequired = false;
	@Param({ readonly: true })
	paramTest: (this: BaseComponent, value: any) => boolean;
	@Param
	paramPopoverPosition = 'right';

	showMessage() {
		this.$<OpalPopover>('popover')!.open();
	}

	hideMessage() {
		this.$<OpalPopover>('popover')!.close();
	}
}
