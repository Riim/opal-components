import { Component } from 'rionite';
import './index.css';
import template from './template.nelm';

@Component.Config({
	elementIs: 'opal-group',
	template
})
export class OpalGroup extends Component {}
