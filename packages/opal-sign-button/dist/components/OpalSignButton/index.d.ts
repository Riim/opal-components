import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalSignButton extends BaseComponent {
    sign: string;
    viewType: string;
    checkable: boolean;
    checked: boolean;
    tabIndex: number;
    focused: boolean;
    disabled: boolean;
    readonly _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    elementAttached(): void;
    ready(): void;
    _onControlFocus(): void;
    _onControlBlur(): void;
    _onControlClick(evt: Event): void;
    click(): this;
    selected: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
}
