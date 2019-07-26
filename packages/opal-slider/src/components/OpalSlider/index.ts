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

	@Param
	min = 0;
	@Param
	max = 100;
	@Param
	step = 1;
	@Param
	value = 0;
	@Param({ type: eval })
	range: [number, number];

	@Computed
	get _firstInputWidth(): number {
		let min = this.min;
		let all = this.max - min;

		return (
			Math.round((((this.range[0] - min) / all + (this.range[1] - min) / all) / 2) * 1e5) /
			1e3
		);
	}

	elementAttached() {
		if (this.range) {
			this.listenTo('firstInput', 'input', this._onFirstInputInput);
			this.listenTo('secondInput', 'input', this._onSecondInputInput);
		}
	}

	_onFirstInputInput(evt: Event) {
		let secondInput = this.$<HTMLInputElement>('secondInput')!;
		let firstInputValue = +(evt.target as HTMLInputElement).value;

		if (+secondInput.value < firstInputValue) {
			(secondInput as any).value = firstInputValue;
			this.range = [firstInputValue, firstInputValue];
		} else {
			this.range = [firstInputValue, this.range[1]];
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
			this.range = [this.range[0], secondInputValue];
		}

		this.emit(OpalSlider.EVENT_CHANGE);
	}
}
