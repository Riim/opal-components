import { IEvent } from 'cellx';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalSignButton extends Component {
    readonly _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    elementAttached(): void;
    ready(): void;
    _onInputFocusedChange(evt: IEvent): void;
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