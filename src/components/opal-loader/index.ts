import './index.css';

import { Component, d } from 'rionite';

@d.Component({
	elementIs: 'opal-loader',

	input: {
		size: 'm',
		shown: false
	}
})
export default class OpalLoader extends Component {
}
