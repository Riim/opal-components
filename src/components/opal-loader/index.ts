import { Component, d } from 'rionite';
import './index.css';

@d.Component({
	elementIs: 'opal-loader',

	input: {
		size: 'm',
		shown: false
	}
})
export class OpalLoader extends Component {
}
