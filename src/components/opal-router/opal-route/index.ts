import { Component, d } from 'rionite';

@d.Component({
	elementIs: 'opal-route',

	input: {
		path: { type: String, required: true, readonly: true },
		component: { type: String, required: true, readonly: true }
	}
})
export default class OpalRoute extends Component {
}
