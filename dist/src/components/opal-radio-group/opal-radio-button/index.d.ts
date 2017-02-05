import './index.css';
import { IDisposableListening, Component } from 'rionite';
export default class OpalRadioButton extends Component {
    _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    initialize(): void;
    ready(): void;
    propertyChanged(name: string, value: any): void;
    checked: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalRadioButton;
    blur(): OpalRadioButton;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    enable(): OpalRadioButton;
    disable(): OpalRadioButton;
}
