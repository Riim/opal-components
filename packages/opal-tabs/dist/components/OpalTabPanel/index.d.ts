import { IEvent } from 'cellx';
import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalTabPanel extends BaseComponent {
    shown: boolean;
    contentRendered: boolean;
    initialize(): void;
    _onShownChange(evt: IEvent): void;
    renderContent(): void;
}
