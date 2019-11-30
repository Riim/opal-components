if (!(window as any).__ShareButtonCallbacks) {
	(window as any).__ShareButtonCallbacks = {};
}

let idCounter = 0;

export function jsonp(url: string, cb: (...args: Array<any>) => void) {
	let callbackName = 'callback' + ++idCounter;
	let disposed = false;

	let script = document.createElement('script');

	script.onload = script.onerror = () => {
		setTimeout(dispose, 1);
	};

	script.src = url.replace(
		/(\?|&)callback=\?/,
		'$1callback=__ShareButtonCallbacks.' + callbackName
	);

	(window as any).__ShareButtonCallbacks[callbackName] = (...args: Array<any>) => {
		dispose();
		cb(...args);
	};

	function dispose() {
		if (disposed) {
			return;
		}

		disposed = true;

		(window as any).__ShareButtonCallbacks[callbackName] = undefined;

		script.onload = script.onerror = null;
		document.head.removeChild(script);
	}

	document.head.appendChild(script);
}
