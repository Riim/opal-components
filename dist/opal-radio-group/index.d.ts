import { IComponentElement, Component } from 'rionite';
import OpalRadioButton from './opal-radio-button';
export { default as OpalRadioButton } from './opal-radio-button';
export default class OpalRadioGroup extends Component {
    static OpalRadioButton: typeof OpalRadioButton;
    buttonElements: NodeListOf<IComponentElement>;
    ready(): void;
}
