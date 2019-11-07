import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalSignButton extends BaseComponent {
    static EVENT_BLUR: symbol;
    static EVENT_CHANGE: symbol;
    static EVENT_CHECK: symbol;
    static EVENT_CLICK: symbol;
    static EVENT_FOCUS: symbol;
    static EVENT_UNCHECK: symbol;
    sign: string;
    viewType: 'default' | 'primary' | 'success' | 'warning' | 'danger' | string & {
        _?: never;
    };
    checkable: boolean;
    checked: boolean;
    tabIndex: number;
    focused: boolean;
    disabled: boolean;
    get _tabIndex(): number;
    _documentKeyDownListening: IDisposableListening;
    ready(): void;
    _onControlFocus(): void;
    _onControlBlur(): void;
    _onControlClick(evt: Event): void;
    click(): this;
    get selected(): boolean;
    set selected(selected: boolean);
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): this;
    blur(): this;
    enable(): this;
    disable(): this;
}
