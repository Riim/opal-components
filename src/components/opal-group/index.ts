import { Component } from 'rionite';
import './index.css';

@Component.Config({
	elementIs: 'opal-group',
	template: '@section/inner { rt-content/content }'
})
export class OpalGroup extends Component {}
