import { OpalPopover } from '@riim/opal-popover';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalInputValidatorRule',
	template
})
export class OpalInputValidatorRule extends BaseComponent {
	@Param({ default: false })
	declare required: boolean;
	@Param
	declare test: ((this: BaseComponent, value: any) => boolean) | null;
	@Param({ default: 'right' })
	declare popoverPosition: typeof OpalPopover.prototype.position;

	showMessage() {
		this.$<OpalPopover>('popover')!.open();
	}

	hideMessage() {
		this.$<OpalPopover>('popover')!.close();
	}
}
