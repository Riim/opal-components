import { Component } from 'rionite';
import './index.css';
import { OpalInputValidatorRule } from './opal-input-validator-rule';
export { OpalInputValidatorRule };
export declare class OpalInputValidator extends Component {
    target: Component;
    rules: Array<OpalInputValidatorRule>;
    failedRule: OpalInputValidatorRule | null;
    readonly valid: boolean;
    ready(): void;
    elementAttached(): void;
    _onTargetChange(): void;
    validate(): boolean;
    _validate(rules: Array<OpalInputValidatorRule>): boolean;
    _checkValue(rule: OpalInputValidatorRule): boolean;
    focusTarget(): void;
}
