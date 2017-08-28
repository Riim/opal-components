import { computed, observable } from 'cellx-decorators';
import { Component, d } from 'rionite';
import './index.css';
import template = require('./template.nelm');

@d.Component<OpalSlider>({
	elementIs: 'opal-slider',

	input: {
		min: 0,
		max: 100,
		step: 1,
		value: 0,
		range: eval
	},

	template
})
export class OpalSlider extends Component {
	@observable _firstInputValue: number;
	@observable _secondInputValue: number;

	@computed get _firstInputWidth(): number {
		let min = this.input.min;
		let all = this.input.max - min;

		return Math.round(
			(((this._firstInputValue - min) / all + (this._secondInputValue - min) / all) / 2) * 1e5
		) / 1e3;
	}

	initialize() {
		let range = this.input.range;

		if (range) {
			this._firstInputValue = range[0];
			this._secondInputValue = range[1];
		}
	}

	elementAttached() {
		if (this.input.range) {
			this.listenTo('first-input', 'input', this._onFirstInputInput);
			this.listenTo('second-input', 'input', this._onSecondInputInput);
		}
	}

	_onFirstInputInput(evt: Event) {
		let secondInput = this.$<HTMLInputElement>('second-input')!;
		let value = this._firstInputValue = +(evt.target as HTMLInputElement).value;

		if (+secondInput.value < value) {
			(secondInput as any).value = this._secondInputValue = value;
		}
	}

	_onSecondInputInput(evt: Event) {
		let firstInput = this.$<HTMLInputElement>('first-input')!;
		let value = this._secondInputValue = +(evt.target as HTMLInputElement).value;

		if (+firstInput.value > value) {
			(firstInput as any).value = this._firstInputValue = value;
		}
	}

	get value(): number | Array<number> {
		return this.input.range ?
			[this._firstInputValue, this._secondInputValue] :
			+this.$<HTMLInputElement>('input')!.value;
	}
	set value(value: number | Array<number>) {
		if (this.input.range) {
			this.$<HTMLInputElement>('first-input')!.value = this._firstInputValue = value[0];
			this.$<HTMLInputElement>('second-input')!.value = this._secondInputValue = value[1];
		} else {
			this.$<HTMLInputElement>('input')!.value = value as any;
		}
	}
}
