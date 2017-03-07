import './index.css';
import { Component } from 'rionite';
import OpalButton from '../opal-button';
export default class OpalSwitchMenu extends Component {
    buttonElements: NodeListOf<HTMLElement>;
    _checkedButton: OpalButton | null;
    checkedButton: OpalButton | null;
    ready(): void;
    clear(): void;
}
