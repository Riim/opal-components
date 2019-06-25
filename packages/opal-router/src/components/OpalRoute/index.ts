import { BaseComponent, Component, Param } from 'rionite';

@Component({
	elementIs: 'OpalRoute'
})
export class OpalRoute extends BaseComponent {
	@Param({
		required: true,
		readonly: true
	})
	path: string;
	@Param({
		required: true,
		readonly: true
	})
	component: string;
}
