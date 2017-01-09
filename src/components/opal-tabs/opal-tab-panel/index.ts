import './index.css';

import { Component, d } from 'rionite';

@d.Component({
	elementIs: 'opal-tab-panel',

	props: {
		shown: false
	},

	bemlTemplate: 'rt-content/content'
})
export default class OpalTabPanel extends Component {
}
