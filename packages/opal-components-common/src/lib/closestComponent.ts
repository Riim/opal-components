import { BaseComponent } from 'rionite';

export function closestComponent<T extends BaseComponent>(
	fromComponent: BaseComponent,
	componentClass: Function
): T | null {
	let component = fromComponent.parentComponent;

	while (component && !(component instanceof componentClass)) {
		component = component.parentComponent;
	}

	return component as T;
}
