import { Component } from 'rionite';
import './index.css';
import { OpalTab } from './opal-tab';

export { OpalTab };

@Component.Config({
	elementIs: 'opal-tab-list',
	template: '@section/inner { rt-content/content }'
})
export class OpalTabList extends Component {}
