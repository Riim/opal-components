import { Computed } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.rnt';

@Component({
	elementIs: 'OpalSlider',
	template
})
export class OpalSlider extends BaseComponent {
	static EVENT_CHANGE = Symbol('change');

	@Param({ default: 0 })
	min: number;
	@Param({ default: 100 })
	max: number;
	@Param({ default: 1 })
	step: number;
	@Param({ default: 0 })
	value: number;
	@Param(eval)
	range: [number, number] | null;

	@Computed
	get _firstInputWidth() {
		let min = this.min;
		let all = this.max - min;

		return (
			Math.round((((this.range![0] - min) / all + (this.range![1] - min) / all) / 2) * 1e5) /
			1e3
		);
	}

	connected() {
		if (this.range) {
			this.listenTo('firstInput', 'input', this._onFirstInputInput);
			this.listenTo('secondInput', 'input', this._onSecondInputInput);
		} else {
			this.listenTo('input', 'input', this._onInputInput);
		}
	}

	_onFirstInputInput(evt: Event) {
		let secondInput = this.$<HTMLInputElement>('secondInput')!;
		let firstInputValue = +(evt.target as HTMLInputElement).value;

		if (+secondInput.value < firstInputValue) {
			(secondInput as any).value = firstInputValue;
			this.range = [firstInputValue, firstInputValue];
		} else {
			this.range = [firstInputValue, this.range![1]];
		}

		this.emit(OpalSlider.EVENT_CHANGE);
	}

	_onSecondInputInput(evt: Event) {
		let firstInput = this.$<HTMLInputElement>('firstInput')!;
		let secondInputValue = +(evt.target as HTMLInputElement).value;

		if (+firstInput.value > secondInputValue) {
			(firstInput as any).value = secondInputValue;
			this.range = [secondInputValue, secondInputValue];
		} else {
			this.range = [this.range![0], secondInputValue];
		}

		this.emit(OpalSlider.EVENT_CHANGE);
	}

	_onInputInput(evt: Event) {
		let inputValue = +(evt.target as HTMLInputElement).value;
		this.value = inputValue;
		this.emit(OpalSlider.EVENT_CHANGE);
	}
}
