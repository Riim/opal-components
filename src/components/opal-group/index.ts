import './index.css';

import { Component, d } from 'rionite';

@d.Component({
	elementIs: 'opal-group',
	template: '@section/inner { rt-content/content }'
})
export default class OpalGroup extends Component {
}
