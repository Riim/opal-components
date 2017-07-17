import { define } from 'cellx';
import { Component, d } from 'rionite';
import './index.css';
import template = require('./index.nelm');

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
	_firstInputValue: number;
	_secondInputValue: number;
	_firstInputWidth: number;

	initialize() {
		let input = this.input;
		let range = input.range;

		if (range) {
			define(this, {
				_firstInputValue: range[0],
				_secondInputValue: range[1],

				_firstInputWidth(this: OpalSlider): number {
					let min = input.min;
					let all = input.max - min;

					return Math.round(
						(((this._firstInputValue - min) / all + (this._secondInputValue - min) / all) / 2) * 1e5
					) / 1e3;
				}
			});
		}
	}

	elementAttached() {
		if (this.input.range) {
			this.listenTo('first-input', 'input', this._onFirstInputInput);
			this.listenTo('second-input', 'input', this._onSecondInputInput);
		}
	}

	_onFirstInputInput(evt: Event) {
		let secondInput = this.$('second-input') as HTMLInputElement;
		let value = this._firstInputValue = +(evt.target as HTMLInputElement).value;

		if (+secondInput.value < value) {
			(secondInput as any).value = this._secondInputValue = value;
		}
	}

	_onSecondInputInput(evt: Event) {
		let firstInput = this.$('first-input') as HTMLInputElement;
		let value = this._secondInputValue = +(evt.target as HTMLInputElement).value;

		if (+firstInput.value > value) {
			(firstInput as any).value = this._firstInputValue = value;
		}
	}

	get value(): number | Array<number> {
		return this.input.range ?
			[this._firstInputValue, this._secondInputValue] :
			+(this.$('input') as HTMLInputElement).value;
	}

	set value(value: number | Array<number>) {
		if (this.input.range) {
			(this.$('first-input') as HTMLInputElement).value = this._firstInputValue = value[0];
			(this.$('second-input') as HTMLInputElement).value = this._secondInputValue = value[1];
		} else {
			(this.$('input') as any).value = value;
		}
	}
}
