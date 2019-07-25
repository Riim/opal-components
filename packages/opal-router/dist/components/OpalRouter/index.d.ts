import { History, Location } from 'history';
import { BaseComponent, IComponentElement } from 'rionite';
import { OpalRoute } from '../OpalRoute';
import './index.css';
export { History, Location };
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
    static EVENT_REFRESH_ROUTER: symbol;
    static history: History<any>;
    useLocationHash: boolean;
    scrollTopOnChange: boolean;
    scrollTopOnChangeComponent: boolean;
    _routes: Array<IRoute>;
    _route: IRoute | null;
    _state: IComponentState | null;
    _componentElement: IComponentElement | null;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    elementDetached(): void;
    _onHistoryChange(location: Location): void;
    _onBodyClick(evt: Event): void;
    _onRefreshRouter(): boolean;
    _update(path: string, _hash: string): boolean;
    _applyState(): void;
    _clear(): void;
    refresh(): void;
}
