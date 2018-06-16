export function isFocusable(el: HTMLElement): boolean {
	if (el.hasAttribute('tabindex')) {
		return el.tabIndex >= 0;
	}

	switch (el.tagName) {
		case 'A':
		case 'AREA': {
			return el.hasAttribute('href') && el.tabIndex >= 0;
		}
		case 'BUTTON':
		case 'INPUT':
		case 'SELECT':
		case 'TEXTAREA': {
			return !el.hasAttribute('disabled') && el.tabIndex >= 0;
		}
		case 'EMBED':
		case 'IFRAME':
		case 'OBJECT': {
			return el.tabIndex >= 0;
		}
	}

	return el.hasAttribute('contenteditable') && el.tabIndex >= 0;
}
