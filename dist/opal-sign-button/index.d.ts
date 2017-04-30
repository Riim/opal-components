import './index.css';
import { IDisposableListening, Component } from 'rionite';
export default class OpalSignButton extends Component {
    _tabIndex: number;
    _documentKeyDownListening: IDisposableListening;
    initialize(): void;
    ready(): void;
    click(): OpalSignButton;
    checked: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalSignButton;
    blur(): OpalSignButton;
    enable(): OpalSignButton;
    disable(): OpalSignButton;
}
