import { OpalPopover } from '@riim/opal-popover';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalInputValidatorRule',
	template
})
export class OpalInputValidatorRule extends BaseComponent {
	@Param(Boolean)
	required: boolean;
	@Param
	test: ((this: BaseComponent, value: any) => boolean) | null;
	@Param({ default: 'right' })
	popoverPosition: typeof OpalPopover.prototype.position;

	showMessage() {
		this.$<OpalPopover>('popover')!.open();
	}

	hideMessage() {
		this.$<OpalPopover>('popover')!.close();
	}
}
