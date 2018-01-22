import { IEvent } from 'cellx';
import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalSignButton extends BaseComponent {
    paramSign: string;
    paramCheckable: boolean;
    paramChecked: boolean;
    paramTabIndex_: number;
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
    click(): this;
    checked: boolean;
    selected: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
}
