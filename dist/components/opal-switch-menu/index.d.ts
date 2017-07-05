import './index.css';
import { IEvent } from 'cellx';
import { Component } from 'rionite';
import OpalButton from '../opal-button';
export default class OpalSwitchMenu extends Component {
    buttonElements: NodeListOf<HTMLElement>;
    _checkedButton: OpalButton | null;
    checkedButton: OpalButton | null;
    ready(): void;
    elementAttached(): void;
    _onButtonCheck(evt: IEvent): void;
    _onButtonUncheck(evt: IEvent): void;
    clear(): void;
}
