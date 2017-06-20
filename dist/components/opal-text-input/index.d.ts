import './index.css';
import '../../assets/icons/opal-components__icon-cross.svg';
import { Component } from 'rionite';
export default class OpalTextInput extends Component {
    btnClearShown: boolean;
    _initialHeight: number;
    initialize(): void;
    ready(): void;
    _onBtnClearClick(evt: Event): void;
    _fixHeight(): void;
    value: string;
    clear(): OpalTextInput;
    focus(): OpalTextInput;
    blur(): OpalTextInput;
    enable(): OpalTextInput;
    disable(): OpalTextInput;
}
