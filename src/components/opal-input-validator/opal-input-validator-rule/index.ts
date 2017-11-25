import { Component, Param } from 'rionite';
import { OpalPopover } from '../../opal-popover';
import './index.css';
import template from './template.nelm';

@Component.Config({
	elementIs: 'OpalInputValidatorRule',
	template
})
export class OpalInputValidatorRule extends Component {
	@Param({ readonly: true })
	paramRequired = false;
	@Param({ readonly: true })
	paramTest: (this: Component, value: any) => boolean;
	@Param paramPopoverPosition = 'right';

	showMessage() {
		this.$<OpalPopover>('popover')!.open();
	}

	hideMessage() {
		this.$<OpalPopover>('popover')!.close();
	}
}
