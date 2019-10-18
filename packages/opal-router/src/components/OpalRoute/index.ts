import { BaseComponent, Component, Param } from 'rionite';

@Component({
	elementIs: 'OpalRoute'
})
export class OpalRoute extends BaseComponent {
	@Param({ required: true, readonly: true })
	path: string;
	@Param({ readonly: true })
	component: string;
	@Param({ readonly: true })
	lazyLoadComponent: () => Promise<typeof BaseComponent>;
}
