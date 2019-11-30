export function clickLink(url: string) {
	let anchor = document.createElement('a');

	anchor.href = url;
	anchor.style.display = 'none';
	document.body.appendChild(anchor);

	setTimeout(() => {
		anchor.click();
		document.body.removeChild(anchor);
	}, 1);
}
