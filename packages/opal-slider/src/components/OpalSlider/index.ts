import { Computed, Observable } from 'cellx-decorators';
import { BaseComponent, Component, Param } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component({
	template
})
export class OpalSlider extends BaseComponent {
	@Param paramMin = 0;
	@Param paramMax = 100;
	@Param paramStep = 1;
	@Param paramValue = 0;
	@Param({ type: eval })
	paramRange: [number, number];

	@Observable _firstInputValue: number;
	@Observable _secondInputValue: number;

	@Computed
	get _firstInputWidth(): number {
		let min = this.paramMin;
		let all = this.paramMax - min;

		return (
			Math.round(
				((this._firstInputValue - min) / all + (this._secondInputValue - min) / all) /
					2 *
					1e5
			) / 1e3
		);
	}

	initialize() {
		let range = this.paramRange;

		if (range) {
			this._firstInputValue = range[0];
			this._secondInputValue = range[1];
		}
	}

	elementAttached() {
		if (this.paramRange) {
			this.listenTo('first-input', 'input', this._onFirstInputInput);
			this.listenTo('second-input', 'input', this._onSecondInputInput);
		}
	}

	_onFirstInputInput(evt: Event) {
		let secondInput = this.$<HTMLInputElement>('second-input')!;
		let value = (this._firstInputValue = +(evt.target as HTMLInputElement).value);

		if (+secondInput.value < value) {
			(secondInput as any).value = this._secondInputValue = value;
		}
	}

	_onSecondInputInput(evt: Event) {
		let firstInput = this.$<HTMLInputElement>('first-input')!;
		let value = (this._secondInputValue = +(evt.target as HTMLInputElement).value);

		if (+firstInput.value > value) {
			(firstInput as any).value = this._firstInputValue = value;
		}
	}

	get value(): number | Array<number> {
		return this.paramRange
			? [this._firstInputValue, this._secondInputValue]
			: +this.$<HTMLInputElement>('input')!.value;
	}
	set value(value: number | Array<number>) {
		if (this.paramRange) {
			this.$<HTMLInputElement>(
				'first-input'
			)!.value = this._firstInputValue = (value as any)[0];
			this.$<HTMLInputElement>(
				'second-input'
			)!.value = this._secondInputValue = (value as any)[1];
		} else {
			this.$<HTMLInputElement>('input')!.value = value as any;
		}
	}
}