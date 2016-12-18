import './index.css';

import { define } from 'cellx';
import { Component, d } from 'rionite';
import template = require('./index.html');

@d.Component<OpalSlider>({
	elementIs: 'opal-slider',

	props: {
		min: 0,
		max: 100,
		step: 1,
		value: 0,
		range: Object
	},

	template,

	events: {
		'first-input': {
			input(evt: Event) {
				let secondInput = this.$('second-input') as HTMLInputElement;
				let value = this._firstInputValue = +(evt.target as HTMLInputElement).value;

				if (+secondInput.value < value) {
					(secondInput as any).value = this._secondInputValue = value;
				}
			}
		},

		'second-input': {
			input(evt: Event) {
				let firstInput = this.$('first-input') as HTMLInputElement;
				let value = this._secondInputValue = +(evt.target as HTMLInputElement).value;

				if (+firstInput.value > value) {
					(firstInput as any).value = this._firstInputValue = value;
				}
			}
		}
	}
})
export default class OpalSlider extends Component {
	_firstInputValue: number;
	_secondInputValue: number;
	_firstInputWidth: number;

	initialize() {
		let props = this.props;
		let range = props['range'];

		if (range) {
			define(this, {
				_firstInputValue: range[0],
				_secondInputValue: range[1],

				_firstInputWidth(this: OpalSlider): number {
					let min = props['min'];
					let all = props['max'] - min;

					return Math.round(
						(((this._firstInputValue - min) / all + (this._secondInputValue - min) / all) / 2) * 1e5
					) / 1e3;
				}
			});
		}
	}

	get value(): number | Array<number> {
		return this.props['range'] ?
			[this._firstInputValue, this._secondInputValue] :
			+(this.$('input') as HTMLInputElement).value;
	}

	set value(value: number | Array<number>) {
		if (this.props['range']) {
			(this.$('first-input') as HTMLInputElement).value = this._firstInputValue = value[0];
			(this.$('second-input') as HTMLInputElement).value = this._secondInputValue = value[1];
		} else {
			(this.$('input') as any).value = value;
		}
	}
}
