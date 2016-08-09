require('./index.css');

let cellx = require('cellx');
let { Component } = require('rionite');

module.exports = Component.extend('opal-tab', {
	Static: {
		props: {
			selected: false,
			focused: false,
			tabIndex: 0,
			disabled: false
		},

		template: require('./index.html'),

		assets: {
			control: {
				'on-focusin'() {
					this.props.focused = true;
				},

				'on-focusout'() {
					this.props.focused = false;
				},

				'on-click'() {
					this._click();
				}
			}
		}
	},

	_focused: false,

	initialize() {
		cellx.define(this, {
			_tabIndex() {
				return this.props.disabled ? -1 : this.props.tabIndex;
			}
		});
	},

	ready() {
		if (this.props.focused) {
			this.focus();
		}
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'focused') {
			this[value ? 'focus' : 'blur']();
		}
	},

	_onDocumentKeyDown(evt) {
		if (evt.which == 13/* Enter */ || evt.which == 32/* Space */) {
			evt.preventDefault();

			if (!this.props.disabled) {
				this._click();
			}
		}
	},

	_click() {
		this.emit(this.toggle() ? 'select' : 'deselect');
	},

	/**
	 * @type {boolean}
	 */
	get selected() {
		return this.props.selected;
	},
	set selected(selected) {
		this.props.selected = selected;
	},

	/**
	 * @typesign () -> boolean;
	 */
	select() {
		if (!this.props.selected) {
			this.props.selected = true;
			return true;
		}

		return false;
	},

	/**
	 * @typesign () -> boolean;
	 */
	deselect() {
		if (this.props.selected) {
			this.props.selected = false;
			return true;
		}

		return false;
	},

	/**
	 * @typesign (value?: boolean) -> boolean;
	 */
	toggle(value) {
		return (this.props.selected = value === void 0 ? !this.props.selected : value);
	},

	/**
	 * @typesign () -> OpalComponents.OpalTab;
	 */
	focus() {
		if (!this._focused) {
			this._focused = true;

			this.assets.control.focus();
			this._documentKeyDownListening = this.listenTo(document, 'keydown', this._onDocumentKeyDown);
		}

		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalTab;
	 */
	blur() {
		if (this._focused) {
			this._focused = false;

			this.assets.control.blur();
			this._documentKeyDownListening.stop();
		}

		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalTab;
	 */
	enable() {
		this.props.disabled = false;
		return this;
	},

	/**
	 * @typesign () -> OpalComponents.OpalTab;
	 */
	disable() {
		this.props.disabled = true;
		return this;
	}
});
