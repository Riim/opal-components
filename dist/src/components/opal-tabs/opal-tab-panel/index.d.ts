import { IEvent } from 'cellx';
import { Component } from 'rionite';
import './index.css';
export declare class OpalTabPanel extends Component {
    isContentRendered: boolean;
    initialize(): void;
    _onInputShownChange(evt: IEvent): void;
    renderContent(): void;
}
