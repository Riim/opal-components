import { IEvent } from 'cellx';
import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalCheckbox extends BaseComponent {
    checked: boolean;
    indeterminate: boolean;
    tabIndex: number;
    focused: boolean;
    disabled: boolean;
    readonly _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    elementAttached(): void;
    ready(): void;
    _onCheckedChange(evt: IEvent): void;
    _onIndeterminateChange(evt: IEvent): void;
    _onFocusedChange(evt: IEvent): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    _onInputChange(evt: Event): void;
    _onControlFocus(): void;
    _onControlBlur(): void;
    selected: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
}
