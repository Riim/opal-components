import './index.css';
import { IEvent } from 'cellx';
import { Component } from 'rionite';
export default class OpalModal extends Component {
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
