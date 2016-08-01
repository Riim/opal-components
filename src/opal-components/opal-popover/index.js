require('./index.css');

let { Component } = require('rionite');

module.exports = Component.extend('opal-popover', {
	Static: {
		props: {
			from: 'right',
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
		if (!this.props.opened) {
			this.props.opened = true;
			return true;
		}

		return false;
	},

	/**
	 * @typesign () -> boolean;
	 */
	close() {
		if (this.props.opened) {
			this.props.opened = false;
			return true;
		}

		return false;
	},

	/**
	 * @typesign (value?: boolean) -> boolean;
	 */
	toggle(value) {
		if (value !== void 0) {
			return (this.props.opened = !!value);
		}
		return (this.props.opened = !this.props.opened);
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
			if (node == docEl) {
				this.close();
				break;
			}

			if (node.tagName == 'A') {
				this.close();
				break;
			}

			node = node.parentNode;

			if (node == el) {
				break;
			}
		}
	}
});
