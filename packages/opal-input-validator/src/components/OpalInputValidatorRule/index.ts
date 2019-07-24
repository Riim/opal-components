import { OpalPopover } from '@riim/opal-popover';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalInputValidatorRule',
	template
})
export class OpalInputValidatorRule extends BaseComponent {
	@Param
	required = false;
	@Param
	test: (this: BaseComponent, value: any) => boolean;
	@Param
	popoverPosition: typeof OpalPopover.prototype.position = 'right';

	showMessage() {
		this.$<OpalPopover>('popover')!.open();
	}

	hideMessage() {
		this.$<OpalPopover>('popover')!.close();
	}
}
