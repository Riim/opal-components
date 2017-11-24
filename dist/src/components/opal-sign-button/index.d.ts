import { IEvent } from 'cellx';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalSignButton extends Component {
    paramSign: string;
    paramCheckable: boolean;
    paramChecked: boolean;
    paramTabIndex: number;
    paramFocused: boolean;
    paramDisabled: boolean;
    readonly _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    elementAttached(): void;
    ready(): void;
    _onParamFocusedChange(evt: IEvent): void;
    _onControlFocus(evt: Event): void;
    _onControlBlur(): void;
    _onControlClick(evt: Event): void;
    click(): OpalSignButton;
    checked: boolean;
    selected: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalSignButton;
    blur(): OpalSignButton;
    enable(): OpalSignButton;
    disable(): OpalSignButton;
}
