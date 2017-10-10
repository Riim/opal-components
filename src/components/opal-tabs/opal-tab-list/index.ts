import { Component, ComponentConfig } from 'rionite';
import './index.css';
import { OpalTab } from './opal-tab';

@ComponentConfig({
	elementIs: 'opal-tab-list',
	template: '@section/inner { rt-content/content }'
})
export class OpalTabList extends Component {
	static OpalTab = OpalTab;
}

export { OpalTab };
