import { Component, ComponentConfig } from 'rionite';
import './index.css';

@ComponentConfig({
	elementIs: 'opal-group',
	template: '@section/inner { rt-content/content }'
})
export class OpalGroup extends Component {}
