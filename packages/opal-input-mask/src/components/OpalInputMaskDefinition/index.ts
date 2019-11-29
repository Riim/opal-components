import { BaseComponent, Component, Param } from 'rionite';
import './index.css';

@Component({
	elementIs: 'OpalInputMaskDefinition'
})
export class OpalInputMaskDefinition extends BaseComponent {
	@Param({ type: String, required: true, readonly: true })
	declare maskChar: string;
	@Param({ type: eval, required: true, readonly: true })
	declare regex: RegExp;
}
