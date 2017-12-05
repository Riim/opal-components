import { IEvent } from 'cellx';
import { BaseComponent, IComponentElement } from 'rionite';
import { OpalRadioButton } from './OpalRadioButton';
export { OpalRadioButton };
export declare class OpalRadioGroup extends BaseComponent {
    buttonElements: NodeListOf<IComponentElement>;
    ready(): void;
    elementAttached(): void;
    _onCheck(evt: IEvent): void;
    _onUncheck(evt: IEvent<OpalRadioButton>): void;
}
