import { Component } from 'rionite';
import './index.css';
import { OpalTab } from './opal-tab';
import template from './template.nelm';

export { OpalTab };

@Component.Config({
	elementIs: 'opal-tab-list',
	template
})
export class OpalTabList extends Component {}
