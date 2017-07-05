import './index.css';
import { IEvent } from 'cellx';
import { IDisposableListening, Component } from 'rionite';
export default class OpalDropdown extends Component {
    _documentClickListening: IDisposableListening | undefined;
    ready(): void;
    elementAttached(): void;
    _onInputOpenedChange(evt: IEvent): void;
    open(): boolean;
    close(): boolean;
    toggle(value?: boolean): boolean;
    _open(): void;
    _close(): void;
    _onDocumentClick(evt: Event): void;
}
