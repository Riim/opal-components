import './index.css';

import { Component, d } from 'rionite';

@d.Component({
	elementIs: 'opal-tab-panel',

	props: {
		shown: false
	},

	template: '<rt-content class="opal-tab-panel__content"></rt-content>'
})
export default class OpalTabPanel extends Component {
}
