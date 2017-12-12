import { OpalButton } from '@riim/opal-button';
import { IEvent } from 'cellx';
import { BaseComponent, IComponentElement } from 'rionite';
import './index.css';
export declare class OpalSwitchMenu extends BaseComponent {
    buttonElements: NodeListOf<IComponentElement<OpalButton>>;
    _checkedButton: OpalButton | null;
    checkedButton: OpalButton | null;
    ready(): void;
    elementAttached(): void;
    _onButtonCheck(evt: IEvent<OpalButton>): void;
    _onButtonUncheck(evt: IEvent<OpalButton>): void;
    clear(): void;
}
