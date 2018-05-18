import { Location } from 'created-browser-history';
import { BaseComponent, IComponentElement } from 'rionite';
import { OpalRoute } from '../OpalRoute';
import './index.css';
export { OpalRoute };
export interface IRouteProperty {
    name: string;
    optional: boolean;
}
export interface IRoute {
    path: string;
    rePath: RegExp;
    properties: Array<IRouteProperty>;
    componentName: string;
}
export interface IComponentState {
    [name: string]: boolean | string;
}
export declare class OpalRouter extends BaseComponent {
    paramUseHash: boolean;
    paramScrollTopOnChange: boolean;
    paramScrollTopOnChangeComponent: boolean;
    _routes: Array<IRoute>;
    _route: IRoute | null;
    _state: IComponentState | null;
    _componentElement: IComponentElement | null;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    elementDetached(): void;
    _onWindowPopState(location: Location): void;
    _onBodyClick(evt: Event): void;
    _onRefreshRouter(): boolean;
    _update(path: string): boolean;
    _applyState(): void;
    _clear(): void;
    refresh(): void;
}
