import './_noFocusHighlight.css';

document.addEventListener('DOMContentLoaded', function onDOMContentLoaded() {
	document.removeEventListener('DOMContentLoaded', onDOMContentLoaded);

	let body = document.body;

	body.classList.add('_noFocusHighlight');

	document.addEventListener('keydown', (evt) => {
		if (evt.which == 9 /* Tab */) {
			body.classList.remove('_noFocusHighlight');
		}
	});

	document.addEventListener('click', () => {
		if (document.activeElement == body) {
			body.classList.add('_noFocusHighlight');
		}
	});
});
