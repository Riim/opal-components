import { Component } from 'rionite';
import './index.css';
export declare class OpalSlider extends Component {
    _firstInputValue: number;
    _secondInputValue: number;
    _firstInputWidth: number;
    initialize(): void;
    elementAttached(): void;
    _onFirstInputInput(evt: Event): void;
    _onSecondInputInput(evt: Event): void;
    value: number | Array<number>;
}
