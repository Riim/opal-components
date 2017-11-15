import { IEvent } from 'cellx';
import { Component, IComponentElement } from 'rionite';
import { OpalButton } from '../opal-button';
import './index.css';
export declare class OpalSwitchMenu extends Component {
    buttonElements: NodeListOf<IComponentElement<OpalButton>>;
    _checkedButton: OpalButton | null;
    checkedButton: OpalButton | null;
    ready(): void;
    elementAttached(): void;
    _onButtonCheck(evt: IEvent<OpalButton>): void;
    _onButtonUncheck(evt: IEvent<OpalButton>): void;
    clear(): void;
}
