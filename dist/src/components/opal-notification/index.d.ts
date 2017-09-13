import { IEvent } from 'cellx';
import { Component } from 'rionite';
import './index.css';
export declare class OpalNotification extends Component {
    isContentRendered: boolean;
    bar: HTMLElement;
    $<R>(name: string, container?: Component | Element): R | null;
    ready(): void;
    elementAttached(): void;
    elementDetached(): void;
    _onInputShownChange(evt: IEvent): void;
    _onBtnHideClick(): void;
    renderContent(): void;
    show(): boolean;
    hide(): boolean;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _show(): void;
    _hide(): void;
    focus(): this;
}
