import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalInputValidatorRule extends BaseComponent {
    paramRequired: boolean;
    paramTest: (this: BaseComponent, value: any) => boolean;
    paramPopoverPosition: string;
    showMessage(): void;
    hideMessage(): void;
}
