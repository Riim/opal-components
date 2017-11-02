import { Component } from 'rionite';
import './index.css';

@Component.Config({
	elementIs: 'opal-loader',

	input: {
		size: 'm',
		shown: false
	}
})
export class OpalLoader extends Component {}
