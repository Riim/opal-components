import { BaseComponent, Component } from 'rionite';
import { OpalTab } from '../OpalTab';
import './index.css';
import template = require('./template.rnt');

export { OpalTab };

@Component({
	elementIs: 'OpalTabList',
	template
})
export class OpalTabList extends BaseComponent {}
