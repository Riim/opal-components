import { OpalPopover } from '@riim/opal-popover';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalInputValidatorRule extends BaseComponent {
    required: boolean;
    test: ((this: BaseComponent, value: any) => boolean) | null;
    popoverPosition: typeof OpalPopover.prototype.position;
    showMessage(): void;
    hideMessage(): void;
}
