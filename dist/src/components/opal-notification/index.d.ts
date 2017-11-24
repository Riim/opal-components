import { IEvent } from 'cellx';
import { Component } from 'rionite';
import './index.css';
export declare class OpalNotification extends Component {
    paramViewType: string;
    paramIconSize: string;
    paramButtonHide: boolean;
    paramTimeout: number;
    paramShown: boolean;
    bar: HTMLElement;
    $<R>(name: string, container?: Component | Element): R | null;
    ready(): void;
    elementAttached(): void;
    elementDetached(): void;
    _onParamShownChange(evt: IEvent): void;
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
