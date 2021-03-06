import { IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalNotification extends BaseComponent {
    static EVENT_CLOSE: symbol;
    static EVENT_HIDE: symbol;
    viewType: 'default' | 'primary' | 'success' | 'warning' | 'danger' | (string & {
        _?: never;
    });
    icon: string | null;
    iconSize: 'xs' | 's' | 'm' | (string & {
        _?: never;
    });
    buttonHide: boolean;
    timeout: number;
    shown: boolean;
    bar: HTMLElement;
    _closingTimeoutId?: number | null;
    $<R>(name: string, container?: BaseComponent | Element): R | null;
    ready(): void;
    disconnected(): void;
    _onShownChange(evt: IEvent): void;
    _onElementMouseEnter(): void;
    _onElementMouseLeave(): void;
    _onClosingTimeout(): void;
    _onBtnHideClick(): void;
    show(): boolean;
    hide(): boolean;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _show(): void;
    _hide(): void;
    focus(): this;
}
