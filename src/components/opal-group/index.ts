import { Component } from 'rionite';
import './index.css';

@Component.Config({
	elementIs: 'opal-group',
	template: '@section/inner { rt-slot/content-slot }'
})
export class OpalGroup extends Component {}
