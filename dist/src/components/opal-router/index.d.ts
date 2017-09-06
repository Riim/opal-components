import { Location } from 'created-browser-history';
import { Component, IComponentElement } from 'rionite';
import './index.css';
import { OpalRoute } from './opal-route';
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
export declare class OpalRouter extends Component {
    static OpalRoute: typeof OpalRoute;
    _routes: Array<IRoute>;
    _route: IRoute | null;
    _state: IComponentState | null;
    _componentElement: IComponentElement | null;
    _historyListening: {
        unlisten: () => void;
    };
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    elementDetached(): void;
    _onRefreshRouter(): boolean;
    _onWindowPopState(location: Location): void;
    _update(hash: string): void;
    _applyState(): void;
    _clear(): void;
    refresh(): void;
}
export { OpalRoute };