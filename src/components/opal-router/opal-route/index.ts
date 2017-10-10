import { Component, ComponentConfig } from 'rionite';

@ComponentConfig({
	elementIs: 'opal-route',

	input: {
		path: { type: String, required: true, readonly: true },
		component: { type: String, required: true, readonly: true }
	}
})
export class OpalRoute extends Component {
}
