import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalInputValidatorRule extends BaseComponent {
    required: boolean;
    test: (this: BaseComponent, value: any) => boolean;
    popoverPosition: string;
    showMessage(): void;
    hideMessage(): void;
}
