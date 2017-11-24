import { Component, Param } from 'rionite';
import './index.css';

@Component.Config({
	elementIs: 'OpalInputMaskDefinition'
})
export class OpalInputMaskDefinition extends Component {
	@Param({ required: true, readonly: true })
	paramMaskChar: string;

	@Param({ type: eval, required: true, readonly: true })
	paramRegex: RegExp;
}
