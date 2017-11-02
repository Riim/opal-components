import { IEvent } from 'cellx';
import { Component, IComponentElement } from 'rionite';
import { OpalRadioButton } from './opal-radio-button';
export { OpalRadioButton };
export declare class OpalRadioGroup extends Component {
    buttonElements: NodeListOf<IComponentElement>;
    ready(): void;
    elementAttached(): void;
    _onCheck(evt: IEvent): void;
    _onUncheck(evt: IEvent<OpalRadioButton>): void;
}
