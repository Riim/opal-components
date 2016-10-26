require('./index.css');

let { ComponentTemplate, Component } = require('rionite');

let openedModals = [];
let documentListening;

function onDocumentFocusIn() {
	let body = document.body;

	if (document.activeElement != body && !openedModals[0].element.contains(document.activeElement.parentNode)) {
		openedModals[0].$('btn-close').focus();
	}
}

function onDocumentKeyUp(evt) {
	if (evt.keyCode == 27/* Esc */) {
		evt.preventDefault();
		openedModals[0].close();
	}
}

module.exports = Component.extend('opal-modal', {
	Static: {
		props: {
			opened: false
		},

		template: new ComponentTemplate(require('./index.html')),

		events: {
			':element': {
				click(evt) {
					let el = this.element;
					let windowEl = this.$('window');

					for (let node = evt.target; node != windowEl;) {
						if (node == el) {
							this.close();
							break;
						}

						node = node.parentNode;

						if (!node) {
							break;
						}
					}
				}
			},

			'btn-close': {
				click() {
					this.props.opened = false;
				}
			}
		}
	},

	ready() {
		if (this.props.opened) {
			this._open();
		}
	},

	elementDetached() {
		this.close();
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
		return (this.props.opened = value === void 0 ? !this.props.opened : value);
	},

	_open() {
		if (openedModals.length) {
			openedModals[0].element.classList.add('_overlapped');
		} else {
			documentListening = this.listenTo(document, {
				focusin: onDocumentFocusIn,
				keyup: onDocumentKeyUp
			});

			let body = document.body;
			let initialBodyWidth = body.offsetWidth;

			body.style.overflow = 'hidden';

			if (initialBodyWidth < body.offsetWidth) {
				body.style.marginRight = body.offsetWidth - initialBodyWidth + 'px';
			}
		}

		this.props.opened = true;
		openedModals.unshift(this);

		this.$('btn-close').focus();

		this.emit('open');
	},

	_close() {
		let index = openedModals.indexOf(this);

		if (index) {
			openedModals[index - 1].close();
		}

		this.props.opened = false;
		openedModals.shift();

		if (openedModals.length) {
			openedModals[0].element.classList.remove('_overlapped');
			openedModals[0].$('btn-close').focus();
		} else {
			documentListening.stop();

			let bodyStyle = document.body.style;

			bodyStyle.overflow = '';
			bodyStyle.marginRight = '';
		}

		this.emit('close');
	}
});
