export function getScript(url: string) {
	let script = document.createElement('script');

	script.src = url;

	document.head.appendChild(script);
	document.head.removeChild(script);
}
