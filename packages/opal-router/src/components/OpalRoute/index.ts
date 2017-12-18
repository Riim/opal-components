import { BaseComponent, Component, Param } from 'rionite';

@Component()
export class OpalRoute extends BaseComponent {
	@Param({ required: true, readonly: true })
	paramPath: string;
	@Param({ required: true, readonly: true })
	paramComponent: string;
}