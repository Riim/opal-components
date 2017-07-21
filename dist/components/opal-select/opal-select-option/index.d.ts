import { IEvent } from 'cellx';
import { Component } from 'rionite';
import '../../../assets/icons/opal-components__icon-check.svg';
import './index.css';
export declare class OpalSelectOption extends Component {
    _tabIndex: number;
    initialize(): void;
    elementAttached(): void;
    _onInputFocusedChange(evt: IEvent): void;
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
