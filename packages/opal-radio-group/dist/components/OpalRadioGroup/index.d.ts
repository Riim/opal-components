import { IEvent } from 'cellx';
import { BaseComponent, IComponentElement } from 'rionite';
import { OpalRadioButton } from '../OpalRadioButton';
export { OpalRadioButton };
export declare class OpalRadioGroup extends BaseComponent {
    buttonElements: HTMLCollectionOf<IComponentElement>;
    ready(): void;
    elementAttached(): void;
    _onButtonCheck(evt: IEvent): void;
    _onButtonUncheck(evt: IEvent<OpalRadioButton>): void;
}
