import { BaseComponent, Component, Param } from 'rionite';

@Component({
	elementIs: 'OpalRoute'
})
export class OpalRoute extends BaseComponent {
	@Param({ type: String, required: true, readonly: true })
	path: string;
	@Param({ type: String, readonly: true })
	component: string | null;
	@Param({ readonly: true })
	lazyLoadComponent: (() => Promise<typeof BaseComponent>) | null;
}
