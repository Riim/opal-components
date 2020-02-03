export function clickLink(url: string, target?: string | null) {
	let anchor = document.createElement('a');

	anchor.href = url;
	if (target) {
		anchor.target = target;
	}
	anchor.style.display = 'none';
	document.body.appendChild(anchor);

	anchor.click();
	document.body.removeChild(anchor);
}
