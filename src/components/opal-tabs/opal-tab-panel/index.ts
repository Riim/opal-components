import { Component, d } from 'rionite';
import './index.css';

@d.Component({
	elementIs: 'opal-tab-panel',

	input: {
		shown: false
	},

	template: '@section/inner { rt-content/content }'
})
export class OpalTabPanel extends Component {
}
