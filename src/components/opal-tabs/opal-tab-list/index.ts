import { Component, ComponentConfig } from 'rionite';
import './index.css';
import { OpalTab } from './opal-tab';

export { OpalTab };

@ComponentConfig({
	elementIs: 'opal-tab-list',
	template: '@section/inner { rt-content/content }'
})
export class OpalTabList extends Component {
	static OpalTab = OpalTab;
}
