import { BaseComponent } from 'rionite';
import './index.css';
import { OpalInputValidatorRule } from './OpalInputValidatorRule';
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
    _checkValue(rule: OpalInputValidatorRule): boolean;
    focusTarget(): this;
}
