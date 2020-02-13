import { OpalButton } from '@riim/opal-button';
import {
	BaseComponent,
	Component,
	IDisposableTimeout,
	Param
	} from 'rionite';
import { OpalPopover } from '../OpalPopover';
import './index.css';

@Component({
	elementIs: 'OpalPopoverSource'
})
export class OpalPopoverSource extends BaseComponent {
	@Param({ default: true })
	active: boolean;

	popoverTarget: BaseComponent | Element;
	popover: OpalPopover;

	mouseLeaveTimeout: IDisposableTimeout | null = null;

	ready() {
		let popoverTarget = this.$('popoverTarget')!;

		if (popoverTarget instanceof BaseComponent && !(popoverTarget instanceof OpalButton)) {
			popoverTarget = popoverTarget.element;
		}

		this.popoverTarget = popoverTarget;
		this.popover = this.$<OpalPopover>('popover')!;
	}

	elementAttached() {
		let popoverTarget = this.popoverTarget;

		if (popoverTarget instanceof OpalButton) {
			if (popoverTarget.checkable) {
				this.listenTo(popoverTarget, {
					[OpalButton.EVENT_CHECK]: this._onPopoverTargetCheck,
					[OpalButton.EVENT_UNCHECK]: this._onPopoverTargetUncheck
				});
				this.listenTo(this.popover, OpalPopover.EVENT_CLOSE, this._onPopoverClose);
			} else {
				this.listenTo(popoverTarget, OpalButton.EVENT_CLICK, this._onPopoverTargetClick);
			}
		} else {
			this.listenTo(popoverTarget, {
				mouseenter: this._onPopoverTargetMouseEnter,
				mouseleave: this._onPopoverTargetMouseLeave
			});
			this.listenTo(this.popover.element, {
				mouseenter: this._onPopoverElementMouseEnter,
				mouseleave: this._onPopoverElementMouseLeave
			});
		}
	}

	_onPopoverTargetCheck() {
		if (this.active) {
			this.popover.open();
		}
	}

	_onPopoverTargetUncheck() {
		this.popover.close();
	}

	_onPopoverTargetClick() {
		if (this.active) {
			this.popover.open();
		}
	}

	_onPopoverTargetMouseEnter() {
		if (this.mouseLeaveTimeout) {
			this.mouseLeaveTimeout.clear();
			this.mouseLeaveTimeout = null;
		}

		if (this.active) {
			this.popover.open();
		}
	}

	_onPopoverTargetMouseLeave() {
		this.mouseLeaveTimeout = this.setTimeout(() => {
			this._onPopoverTargetMouseLeaveTimeout();
		}, 100);
	}

	_onPopoverTargetMouseLeaveTimeout() {
		this.popover.close();
	}

	_onPopoverElementMouseEnter() {
		if (this.mouseLeaveTimeout) {
			this.mouseLeaveTimeout.clear();
			this.mouseLeaveTimeout = null;
		}
	}

	_onPopoverElementMouseLeave() {
		this.mouseLeaveTimeout = this.setTimeout(() => {
			this._onPopoverElementMouseLeaveTimeout();
		}, 100);
	}

	_onPopoverElementMouseLeaveTimeout() {
		this.popover.close();
	}

	_onPopoverClose() {
		((this.popoverTarget as any) as OpalButton).checked = false;
	}
}
