import { IEvent } from 'cellx';
import { Component } from 'rionite';
import './index.css';
export declare class OpalModal extends Component {
    ready(): void;
    elementAttached(): void;
    elementDetached(): void;
    _onInputOpenedChange(evt: IEvent): void;
    _onElementClick(evt: Event): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _open(): void;
    _close(): void;
    focus(): OpalModal;
}
