require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-popover', {
	Static: {
		props: {
			to: 'right',
			opened: false,
			autoClosing: false
		},

		template: '<span class="opal-popover__arrow"></span><rt-content class="opal-popover__content"></rt-content>'
	},

	ready() {
		if (this.props.opened) {
			this._open();
		}
	},

	elementAttributeChanged(name, oldValue, value) {
		if (name == 'opened') {
			this[value ? '_open' : '_close']();
		}
	},

	/**
	 * @typesign () -> boolean;
	 */
	open() {
		if (this.props.opened) {
			return false;
		}

		this.props.opened = true;
		return true;
	},

	/**
	 * @typesign () -> boolean;
	 */
	close() {
		if (!this.props.opened) {
			return false;
		}

		this.props.opened = false;
		return true;
	},

	/**
	 * @typesign (value?: boolean) -> boolean;
	 */
	toggle(value) {
		return (this.props.opened = value === void 0 ? !this.props.opened : value);
	},

	_open() {
		if (this.props.autoClosing) {
			setTimeout(() => {
				if (this.props.opened) {
					this._documentClickListening = this.listenTo(document, 'click', this._onDocumentClick);
				}
			}, 1);
		}

		this.emit('open');
	},

	_close() {
		if (this._documentClickListening) {
			this._documentClickListening.stop();
		}

		this.emit('close');
	},

	_onDocumentClick(evt) {
		let docEl = document.documentElement;
		let el = this.element;

		for (let node = evt.target; ;) {
			if (node == docEl || node.tagName == 'A') {
				this.close();
				break;
			}

			node = node.parentNode;

			if (!node || node == el) {
				break;
			}
		}
	}
});
