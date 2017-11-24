import { IEvent } from 'cellx';
import { Component } from 'rionite';
import './index.css';
export declare class OpalTabPanel extends Component {
    paramShown: boolean;
    isContentRendered: boolean;
    initialize(): void;
    _onParamShownChange(evt: IEvent): void;
    renderContent(): void;
}
