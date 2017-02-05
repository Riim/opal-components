import './index.css';
import { Component } from 'rionite';
export default class OpalButton extends Component {
    _tabIndex: number;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    propertyChanged(name: string, value: any): void;
    checked: boolean;
    check(): boolean;
    uncheck(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalButton;
    blur(): OpalButton;
    enable(): OpalButton;
    disable(): OpalButton;
}
