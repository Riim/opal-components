import { Component } from 'rionite';
import './index.css';

@Component.Config({
	elementIs: 'opal-loader',

	params: {
		size: 'm',
		shown: false
	}
})
export class OpalLoader extends Component {}
