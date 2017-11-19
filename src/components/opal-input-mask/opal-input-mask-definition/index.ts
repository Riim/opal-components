import { Component } from 'rionite';
import './index.css';

@Component.Config({
	elementIs: 'OpalInputMaskDefinition',

	params: {
		maskChar: { type: String, required: true, readonly: true },
		regex: { type: eval, required: true, readonly: true }
	}
})
export class OpalInputMaskDefinition extends Component {}
