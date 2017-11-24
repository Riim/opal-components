import { Component } from 'rionite';
import './index.css';
export declare class OpalInputValidatorRule extends Component {
    paramRequired: boolean;
    paramTest: (this: Component, value: any) => boolean;
    paramPopoverPosition: string;
    showMessage(): void;
    hideMessage(): void;
}
