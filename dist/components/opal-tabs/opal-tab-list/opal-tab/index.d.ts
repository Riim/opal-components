import { Component } from 'rionite';
import './index.css';
export declare class OpalTab extends Component {
    _tabIndex: number;
    initialize(): void;
    ready(): void;
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
