import { BaseComponent, Component, Param } from 'rionite';
import './index.css';

@Component()
export class OpalInputMaskDefinition extends BaseComponent {
	@Param({ required: true, readonly: true })
	paramMaskChar: string;
	@Param({ type: eval, required: true, readonly: true })
	paramRegex: RegExp;
}
