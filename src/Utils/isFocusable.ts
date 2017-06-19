export default function isFocusable(el: HTMLElement): boolean {
	if (el.hasAttribute('tabindex')) {
		return el.tabIndex >= 0;
	}

	switch (el.tagName) {
		case 'a':
		case 'area': {
			return el.hasAttribute('href') && el.tabIndex >= 0;
		}
		case 'button':
		case 'input':
		case 'textarea':
		case 'select': {
			return !el.hasAttribute('disabled') && el.tabIndex >= 0;
		}
		case 'iframe':
		case 'object':
		case 'embed': {
			return el.tabIndex >= 0;
		}
	}

	return el.hasAttribute('contenteditable') && el.tabIndex >= 0;
}
