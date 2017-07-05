import './index.css';
import { IEvent } from 'cellx';
import { IDisposableListening, Component } from 'rionite';
export default class OpalRadioButton extends Component {
    _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    _onInputCheckedChange(evt: IEvent): void;
    _onInputFocusedChange(evt: IEvent): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    checked: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalRadioButton;
    blur(): OpalRadioButton;
    enable(): OpalRadioButton;
    disable(): OpalRadioButton;
}
