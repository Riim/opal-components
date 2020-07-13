import { BaseComponent } from 'rionite';
import './index.css';
export declare class OpalSlider extends BaseComponent {
    static EVENT_CHANGE: symbol;
    min: number;
    max: number;
    step: number;
    value: number;
    range: [number, number] | null;
    get _firstInputWidth(): number;
    connected(): void;
    _onFirstInputInput(evt: Event): void;
    _onSecondInputInput(evt: Event): void;
    _onInputInput(evt: Event): void;
}
