export function openPopup(url: string, winId: string, width = 600, height = 400): Window | null {
	let left = Math.round(screen.width / 2 - width / 2);
	let top = 0;

	if (screen.height > height) {
		top = Math.round(screen.height / 3 - height / 2);
	}

	let win = window.open(
		url,
		winId,
		`left=${left},top=${top},width=${width},height=${height},personalbar=no,toolbar=no,scrollbars=yes,resizable=yes`
	);

	if (win) {
		win.focus();
	} else {
		location.href = url;
	}

	return win;
}
