import { Cell, IEvent } from 'cellx';
import { observable } from 'cellx-decorators';
import { Component, IDisposableListening } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config({
	elementIs: 'opal-popover',

	inputs: {
		position: 'right',
		autoDirection: true,
		autoClosing: false,
		opened: false
	},

	template
})
export class OpalPopover extends Component {
	@observable isContentRendered = false;

	_positionOnOpen: string;

	_documentClickListening: IDisposableListening | null | undefined;

	ready() {
		if (this.inputs.opened) {
			this._open();
		}
	}

	elementAttached() {
		this.listenTo(this, 'input-opened-change', this._onInputOpenedChange);
	}

	_onInputOpenedChange(evt: IEvent) {
		if (evt.data.value) {
			this._open();
		} else {
			this._close();
		}
	}

	renderContent() {
		this.isContentRendered = true;
		Cell.forceRelease();
	}

	open(): boolean {
		if (this.inputs.opened) {
			return false;
		}

		this.inputs.opened = true;
		Cell.forceRelease();

		return true;
	}

	close(): boolean {
		if (!this.inputs.opened) {
			return false;
		}

		this.inputs.opened = false;
		Cell.forceRelease();

		return true;
	}

	toggle(value?: boolean): boolean {
		if (value !== undefined) {
			return value ? this.open() : !this.close();
		}
		return this.open() || !this.close();
	}

	_open() {
		if (this.isContentRendered) {
			this._open$();
		} else {
			this.isContentRendered = true;
			Cell.forceRelease();
			this._open$();
		}
	}

	_open$() {
		let el = this.element;

		if (this.inputs.autoDirection) {
			let docEl = document.documentElement;
			let containerClientRect = el.offsetParent.getBoundingClientRect();
			let elClientRect = el.getBoundingClientRect();
			let position = (this._positionOnOpen = this.inputs.position).split('-');

			switch (position[0]) {
				case 'left': {
					if (
						elClientRect.left + document.body.scrollLeft < 0 ||
						(elClientRect.left < 0 &&
							containerClientRect.left <
								docEl.clientWidth - containerClientRect.right)
					) {
						this.inputs.position =
							'right' + (position.length == 2 ? '-' + position[1] : '');
					}

					break;
				}
				case 'top': {
					if (
						elClientRect.top + document.body.scrollTop < 0 ||
						(elClientRect.top < 0 &&
							containerClientRect.top <
								docEl.clientHeight - containerClientRect.bottom)
					) {
						this.inputs.position =
							'bottom' + (position.length == 2 ? '-' + position[1] : '');
					}

					break;
				}
				case 'right': {
					if (
						elClientRect.right > docEl.clientWidth &&
						containerClientRect.left > docEl.clientWidth - containerClientRect.right &&
						containerClientRect.left + document.body.scrollLeft >=
							elClientRect.right - containerClientRect.right
					) {
						this.inputs.position =
							'left' + (position.length == 2 ? '-' + position[1] : '');
					}

					break;
				}
				case 'bottom': {
					if (
						elClientRect.bottom > docEl.clientHeight &&
						containerClientRect.top > docEl.clientHeight - containerClientRect.bottom &&
						containerClientRect.top + document.body.scrollTop >=
							elClientRect.bottom - containerClientRect.bottom
					) {
						this.inputs.position =
							'top' + (position.length == 2 ? '-' + position[1] : '');
					}

					break;
				}
			}
		}

		let position = this.inputs.position.split('-');
		let arrowStyle = this.$<HTMLElement>('arrow')!.style;

		arrowStyle.top = arrowStyle.right = arrowStyle.bottom = arrowStyle.left = '';

		if (position.length == 2) {
			arrowStyle[position[1]] =
				el.offsetParent[
					position[1] == 'left' || position[1] == 'right' ? 'clientWidth' : 'clientHeight'
				] /
					2 +
				'px';
		}

		if (this.inputs.autoClosing) {
			setTimeout(() => {
				if (this.inputs.opened) {
					this._documentClickListening = this.listenTo(
						document,
						'click',
						this._onDocumentClick
					);
				}
			}, 1);
		}
	}

	_close() {
		if (this.inputs.autoDirection) {
			this.inputs.position = this._positionOnOpen;
		}

		if (this._documentClickListening) {
			this._documentClickListening.stop();
			this._documentClickListening = null;
		}
	}

	_onDocumentClick(evt: Event) {
		let docEl = document.documentElement;
		let componentEl = this.element;

		for (let el: HTMLElement | null = evt.target as HTMLElement; el != componentEl; ) {
			if (el == docEl || el.tagName == 'A') {
				this.close();
				this.emit('close');
				break;
			}

			el = el.parentNode as HTMLElement | null;

			if (!el) {
				break;
			}
		}
	}
}
