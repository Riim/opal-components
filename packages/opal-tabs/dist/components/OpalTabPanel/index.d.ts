import { IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalTabPanel extends BaseComponent {
    paramShown: boolean;
    contentRendered: boolean;
    initialize(): void;
    _onParamShownChange(evt: IEvent): void;
    renderContent(): void;
}
