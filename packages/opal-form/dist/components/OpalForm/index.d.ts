import { BaseComponent } from 'rionite';
export declare class OpalForm extends BaseComponent {
    static EVENT_SUBMIT: symbol;
    elementAttached(): void;
    validate(): boolean;
}
