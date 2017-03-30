import './index.css';
import { Component } from 'rionite';
export default class OpalTab extends Component {
    _tabIndex: number;
    initialize(): void;
    ready(): void;
    propertyChanged(name: string, value: any): void;
    click(): OpalTab;
    selected: boolean;
    select(): boolean;
    deselect(): boolean;
    toggle(value?: boolean): boolean;
    focus(): OpalTab;
    blur(): OpalTab;
    enable(): OpalTab;
    disable(): OpalTab;
}
