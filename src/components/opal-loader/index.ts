import { Component } from 'rionite';
import './index.css';

@Component.Config({
	elementIs: 'OpalLoader',

	params: {
		size: 'm',
		shown: false
	}
})
export class OpalLoader extends Component {}
