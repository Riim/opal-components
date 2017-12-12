import { BaseComponent } from 'rionite';

export function closestComponent(
	component: BaseComponent,
	componentClass: Function
): BaseComponent | null {
	let c: BaseComponent | null = component;
	while (!(c instanceof componentClass) && (c = c.parentComponent)) {}
	return c;
}
