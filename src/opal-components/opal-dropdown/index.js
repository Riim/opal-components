require('./index.css');

let { Component } = require('rionite');

let openedDropdowns = [];

module.exports = Component.extend('opal-dropdown', {
	Static: {
		props: {
			opened: false,
			autoHeight: true,
			autoClosing: false
		},

		template: '<rt-content class="opal-dropdown__content"></rt-content>'
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
		return (this.props.opened = value === undefined ? !this.props.opened : value);
	},

	_open() {
		openedDropdowns.push(this);

		let el = this.element;
		let elStyle = el.style;

		elStyle.top = '100%';
		elStyle.right = '';
		elStyle.bottom = '';
		elStyle.left = '0';
		elStyle.display = 'block';
		elStyle.maxHeight = '';

		let docEl = document.documentElement;
		let container = el.offsetParent;

		let docElClientWidth = docEl.clientWidth;
		let containerClientRect = container.getBoundingClientRect();
		let elClientRect = el.getBoundingClientRect();

		if (elClientRect.right > docElClientWidth) {
			if (containerClientRect.right - el.offsetWidth >= 0) {
				elStyle.right = '0';
				elStyle.left = '';
			} else {
				elStyle.left = Math.max(-containerClientRect.left, docElClientWidth - elClientRect.right) + 'px';
			}
		}

		if (this.props.autoHeight) {
			let docElClientHeight = docEl.clientHeight;
			let margin = elClientRect.top - containerClientRect.bottom;
			let excess = elClientRect.bottom + margin - docElClientHeight;

			if (excess > 0) {
				let diff = containerClientRect.top - (docElClientHeight - containerClientRect.bottom);

				if (diff > 0) {
					elStyle.top = '';
					elStyle.bottom = '100%';

					excess -= diff;

					if (excess > 0) {
						elStyle.maxHeight = el.offsetHeight - excess + 'px';
					}
				} else {
					elStyle.maxHeight = el.offsetHeight - excess + 'px';
				}
			}
		}

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
		openedDropdowns.splice(openedDropdowns.indexOf(this), 1);

		this.element.style.display = '';

		if (this._documentClickListening) {
			this._documentClickListening.stop();
		}

		this.emit('close');
	},

	_onDocumentClick(evt) {
		let docEl = document.documentElement;
		let el = this.element;

		for (let node = evt.target; node != el;) {
			if (node == docEl || node.tagName == 'A') {
				this.close();
				break;
			}

			node = node.parentNode;

			if (!node) {
				break;
			}
		}
	}
});
