import { Component, d } from 'rionite';
import './index.css';

@d.Component({
	elementIs: 'opal-input-mask-definition',

	input: {
		maskChar: { type: String, required: true, readonly: true },
		regex: { type: eval, required: true, readonly: true }
	}
})
export class OpalInputMaskDefinition extends Component {
}
