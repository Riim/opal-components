import { Component } from 'rionite';

// tslint:disable-next-line
export default function closestComponent(component: Component, componentClass: Function): Component | null {
	let c: Component | null = component;
	while (!(c instanceof componentClass) && (c = c.parentComponent)) {}
	return c;
}
