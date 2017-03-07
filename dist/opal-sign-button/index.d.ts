import './index.css';
import { Component } from 'rionite';
export default class OpalSignButton extends Component {
    _tabIndex: number;
    initialize(): void;
    ready(): void;
    propertyChanged(name: string, value: any): void;
    checked: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalSignButton;
    blur(): OpalSignButton;
    enable(): OpalSignButton;
    disable(): OpalSignButton;
}
