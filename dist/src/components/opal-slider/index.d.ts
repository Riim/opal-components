import { Component } from 'rionite';
import './index.css';
export declare class OpalSlider extends Component {
    paramMin: number;
    paramMax: number;
    paramStep: number;
    paramValue: number;
    paramRange: [number, number];
    _firstInputValue: number;
    _secondInputValue: number;
    readonly _firstInputWidth: number;
    initialize(): void;
    elementAttached(): void;
    _onFirstInputInput(evt: Event): void;
    _onSecondInputInput(evt: Event): void;
    value: number | Array<number>;
}
