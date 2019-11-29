import { BaseComponent, Component, Param } from 'rionite';

@Component({
	elementIs: 'OpalRoute'
})
export class OpalRoute extends BaseComponent {
	@Param({ type: String, required: true, readonly: true })
	declare path: string;
	@Param({ type: String, readonly: true })
	declare component: string | null;
	@Param({ readonly: true })
	declare lazyLoadComponent: (() => Promise<typeof BaseComponent>) | null;
}
