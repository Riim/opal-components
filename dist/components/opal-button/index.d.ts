import './index.css';
import { IEvent } from 'cellx';
import { IDisposableListening, Component } from 'rionite';
export default class OpalButton extends Component {
    _tabIndex: number;
    _documentKeyDownListening: IDisposableListening | undefined;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    _onInputFocusedChange(evt: IEvent): void;
    _onTabIndexChange(): void;
    _onElementFocus(evt: Event): void;
    _onElementBlur(): void;
    _onElementClick(): void;
    _onDocumentKeyDown(evt: KeyboardEvent): void;
    click(): OpalButton;
    checked: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalButton;
    blur(): OpalButton;
    enable(): OpalButton;
    disable(): OpalButton;
}
