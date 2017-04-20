import './index.css';

import { Component, d } from 'rionite';

@d.Component({
	elementIs: 'opal-tab-panel',

	props: {
		shown: false
	},

	bemlTemplate: '@section/inner { rt-content/content (cloning=no) }'
})
export default class OpalTabPanel extends Component {
}
