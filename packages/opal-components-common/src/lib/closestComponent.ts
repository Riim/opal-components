import { BaseComponent } from 'rionite';

export function closestComponent(
	component: BaseComponent,
	componentClass: Function
): BaseComponent | null {
	let c: BaseComponent | null = component;

	for (;;) {
		if (c instanceof componentClass || !(c = c.parentComponent)) {
			break;
		}
	}

	return c;
}
