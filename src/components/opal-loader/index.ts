import { Component, ComponentConfig } from 'rionite';
import './index.css';

@ComponentConfig({
	elementIs: 'opal-loader',

	input: {
		size: 'm',
		shown: false
	}
})
export class OpalLoader extends Component {
}
