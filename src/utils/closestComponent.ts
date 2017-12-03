import { Component } from 'rionite';

export function closestComponent(
	component: Component,
	componentClass: Function
): Component | null {
	let c: Component | null = component;
	while (!(c instanceof componentClass) && (c = c.parentComponent)) {}
	return c;
}
