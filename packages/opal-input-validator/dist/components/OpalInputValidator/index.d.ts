import { BaseComponent } from 'rionite';
import { OpalInputValidatorRule } from '../OpalInputValidatorRule';
import './index.css';
export { OpalInputValidatorRule };
export declare class OpalInputValidator extends BaseComponent {
    target: BaseComponent;
    rules: Array<OpalInputValidatorRule>;
    failedRule: OpalInputValidatorRule | null;
    readonly valid: boolean;
    ready(): void;
    elementAttached(): void;
    _onTargetChange(): void;
    validate(): boolean;
    _validate(rules: Array<OpalInputValidatorRule>): boolean;
    _checkValue(_rule: OpalInputValidatorRule): boolean;
    focusTarget(): this;
}
