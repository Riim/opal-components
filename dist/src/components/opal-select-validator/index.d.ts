import { Component } from 'rionite';
import './index.css';
import { OpalSelectValidatorRule } from './opal-select-validator-rule';
export { OpalSelectValidatorRule };
export declare class OpalSelectValidator extends Component {
    static OpalSelectValidatorRule: typeof OpalSelectValidatorRule;
    failedRule: OpalSelectValidatorRule | null;
    readonly valid: boolean;
    _rules: Array<OpalSelectValidatorRule>;
    ready(): void;
    elementAttached(): void;
    _onSelectChange(): void;
    validate(): boolean;
    _validate(rules: Array<OpalSelectValidatorRule>): boolean;
}
