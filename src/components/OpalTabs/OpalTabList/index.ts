import { BaseComponent, Component } from 'rionite';
import './index.css';
import { OpalTab } from './OpalTab';
import template from './template.nelm';

export { OpalTab };

@Component({
	template
})
export class OpalTabList extends BaseComponent {}
