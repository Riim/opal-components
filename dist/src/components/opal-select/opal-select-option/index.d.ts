import { IEvent } from 'cellx';
import { Component } from 'rionite';
import './index.css';
export declare class OpalSelectOption extends Component {
    readonly _tabIndex: number;
    elementAttached(): void;
    _onParamFocusedChange(evt: IEvent): void;
    _onControlFocus(evt: Event): void;
    _onControlBlur(): void;
    _onControlClick(evt: Event): void;
    click(): OpalSelectOption;
    value: string;
    text: string;
    selected: boolean;
    disabled: boolean;
    select(): boolean;
    deselect(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalSelectOption;
    blur(): OpalSelectOption;
    enable(): OpalSelectOption;
    disable(): OpalSelectOption;
}
