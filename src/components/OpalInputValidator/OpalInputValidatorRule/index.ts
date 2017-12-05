import { BaseComponent, Component, Param } from 'rionite';
import { OpalPopover } from '../../OpalPopover';
import './index.css';
import template from './template.nelm';

@Component({
	template
})
export class OpalInputValidatorRule extends BaseComponent {
	@Param({ readonly: true })
	paramRequired = false;
	@Param({ readonly: true })
	paramTest: (this: BaseComponent, value: any) => boolean;
	@Param paramPopoverPosition = 'right';

	showMessage() {
		this.$<OpalPopover>('popover')!.open();
	}

	hideMessage() {
		this.$<OpalPopover>('popover')!.close();
	}
}
