import { IEvent } from 'cellx';
import { Component, IComponentElement } from 'rionite';
import { OpalRadioButton } from './opal-radio-button';
export declare class OpalRadioGroup extends Component {
    static OpalRadioButton: typeof OpalRadioButton;
    buttonElements: NodeListOf<IComponentElement>;
    ready(): void;
    elementAttached(): void;
    _onCheck(evt: IEvent): void;
    _onUncheck(evt: IEvent): void;
}
export { OpalRadioButton };
