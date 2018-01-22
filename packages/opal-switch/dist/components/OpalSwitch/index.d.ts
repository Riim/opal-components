import { IEvent } from 'cellx';
import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalSwitch extends BaseComponent {
    paramChecked: boolean;
    paramTabIndex_: number;
    paramFocused: boolean;
    paramDisabled: boolean;
    _tabIndex(): number;
    _documentKeyDownListening: IDisposableListening;
    ready(): void;
    elementAttached(): void;
    _onParamCheckedChange(evt: IEvent): void;
    _onParamFocusedChange(evt: IEvent): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onInputChange(evt: Event): void;
    _onControlFocus(evt: Event): void;
    _onControlBlur(): void;
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
