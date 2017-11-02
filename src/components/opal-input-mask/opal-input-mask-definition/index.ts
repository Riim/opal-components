import { Component } from 'rionite';
import './index.css';

@Component.Config({
	elementIs: 'opal-input-mask-definition',

	input: {
		maskChar: { type: String, required: true, readonly: true },
		regex: { type: eval, required: true, readonly: true }
	}
})
export class OpalInputMaskDefinition extends Component {}
