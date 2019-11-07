import { BaseComponent, IDisposableListening } from 'rionite';
import './index.css';
export declare class OpalButton extends BaseComponent {
    static EVENT_BLUR: symbol;
    static EVENT_CHANGE: symbol;
    static EVENT_CHECK: symbol;
    static EVENT_CLICK: symbol;
    static EVENT_FOCUS: symbol;
    static EVENT_UNCHECK: symbol;
    viewType: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'clean' | string & {
        _?: never;
    };
    size: 's' | 'm' | string & {
        _?: never;
    };
    checkable: boolean;
    checked: boolean;
    loading: boolean;
    tabIndex: number;
    focused: boolean;
    disabled: boolean;
    get _tabIndex(): number;
    _documentKeyDownListening: IDisposableListening | null | undefined;
    ready(): void;
    elementAttached(): void;
    _onTabIndexChange(): void;
    _onElementFocus(): void;
    _onElementBlur(): void;
    _onElementClick(): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
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
