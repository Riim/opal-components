import { IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalNotification extends BaseComponent {
    static EVENT_CLOSE: symbol;
    static EVENT_HIDE: symbol;
    viewType: 'default' | 'primary' | 'success' | 'danger' | string;
    icon: string;
    iconSize: 'xs' | 's' | 'm' | string;
    buttonHide: boolean;
    timeout: number;
    shown: boolean;
    bar: HTMLElement;
    _closingTimeoutId?: number | null;
    $<R>(name: string, container?: BaseComponent | Element): R | null;
    ready(): void;
    elementAttached(): void;
    elementDetached(): void;
    _onShownChange(evt: IEvent): void;
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
