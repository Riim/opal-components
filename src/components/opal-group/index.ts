import { Component, d } from 'rionite';
import './index.css';

@d.Component({
	elementIs: 'opal-group',
	template: '@section/inner { rt-slot/content }'
})
export class OpalGroup extends Component {
}
