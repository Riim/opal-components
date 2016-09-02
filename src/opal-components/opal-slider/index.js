require('./index.css');

let cellx = require('cellx');
let { Component } = require('rionite');

module.exports = Component.extend('opal-slider', {
	Static: {
		props: {
			min: 0,
			max: 100,
			step: 1,
			value: 0,
			range: Object
		},

		template: require('./index.html'),

		assets: {
			firstInput: {
				'on-input'(evt) {
					let secondInput = this.assets.secondInput;
					let value = this._firstInputValue = +evt.target.value;

					if (+secondInput.value < value) {
						secondInput.value = this._secondInputValue = value;
					}
				}
			},

			secondInput: {
				'on-input'(evt) {
					let firstInput = this.assets.firstInput;
					let value = this._secondInputValue = +evt.target.value;

					if (+firstInput.value > value) {
						firstInput.value = this._firstInputValue = value;
					}
				}
			},

			input: {}
		}
	},

	initialize() {
		let props = this.props;

		if (props.range) {
			cellx.define(this, {
				_firstInputValue: props.range[0],
				_secondInputValue: props.range[1],

				_firstInputWidth() {
					let min = this.props.min;
					let all = this.props.max - min;

					return Math.round(
						(((this._firstInputValue - min) / all + (this._secondInputValue - min) / all) / 2) * 1e5
					) / 1e3;
				}
			});
		}
	},

	get value() {
		return this.props.range ? [this._firstInputValue, this._secondInputValue] : +this.assets.input.value;
	},

	set value(value) {
		if (this.props.range) {
			this.assets.firstInput.value = this._firstInputValue = value[0];
			this.assets.secondInput.value = this._secondInputValue = value[1];
		} else {
			this.input.value = value;
		}
	}
});
