import { BaseComponent, Component } from 'rionite';
import { OpalTab } from '../OpalTab';
import './index.css';
import template from './template.nelm';

export { OpalTab };

@Component({
	template
})
export class OpalTabList extends BaseComponent {}
