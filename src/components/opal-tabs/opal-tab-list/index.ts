import './index.css';

import { Component, d } from 'rionite';
import OpalTab from './opal-tab';

export { default as OpalTab } from './opal-tab';

@d.Component({
	elementIs: 'opal-tab-list',
	bemlTemplate: '@section/inner { rt-content/content (cloning=no) }'
})
export default class OpalTabList extends Component {
	static OpalTab = OpalTab;
}
