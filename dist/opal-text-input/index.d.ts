import './index.css';
import { Component } from 'rionite';
export default class OpalTextInput extends Component {
    btnClearShown: boolean;
    _initialHeight: number;
    initialize(): void;
    ready(): void;
    propertyChanged(name: string, value: any): void;
    _onBtnClearClick(evt: Event): void;
    _fixHeight(): void;
    value: string;
    clear(): OpalTextInput;
    focus(): OpalTextInput;
    blur(): OpalTextInput;
    enable(): OpalTextInput;
    disable(): OpalTextInput;
}
