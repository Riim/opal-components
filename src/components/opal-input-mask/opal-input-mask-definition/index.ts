import './index.css';

import { Component, d } from 'rionite';

@d.Component({
	elementIs: 'opal-input-mask-definition',

	props: {
		maskChar: { type: String, required: true, readonly: true },
		regex: { type: eval, required: true, readonly: true }
	}
})
export default class OpalInputMaskDefinition extends Component {
}
