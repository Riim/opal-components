import './index.css';

import { Component, d } from 'rionite';

@d.Component({
	elementIs: 'opal-tab-panel',

	input: {
		shown: false
	},

	template: '@section/inner { rt-content/content }'
})
export default class OpalTabPanel extends Component {
}
