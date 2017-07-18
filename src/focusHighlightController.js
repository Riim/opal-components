document.addEventListener('DOMContentLoaded', function onDOMContentLoaded() {
	document.removeEventListener('DOMContentLoaded', onDOMContentLoaded);

	let body = document.body;

	body.classList.add('_no-focus-highlight');

	document.addEventListener('keydown', evt => {
		if (evt.which == 9 /* Tab */) {
			body.classList.remove('_no-focus-highlight');
		}
	});

	document.addEventListener('click', () => {
		if (document.activeElement == body) {
			body.classList.add('_no-focus-highlight');
		}
	});
});
