import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalSlider extends BaseComponent {
    min: number;
    max: number;
    step: number;
    paramValue: number;
    range: [number, number];
    _firstInputValue: number;
    _secondInputValue: number;
    readonly _firstInputWidth: number;
    initialize(): void;
    elementAttached(): void;
    _onFirstInputInput(evt: Event): void;
    _onSecondInputInput(evt: Event): void;
    value: number | Array<number>;
}
