import './index.css';
import { IComponentElement, Component } from 'rionite';
import { Location } from 'created-browser-history';
import OpalRoute from './opal-route';
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
export default class OpalRouter extends Component {
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
    _onWindowPopState(location: Location): void;
    _update(hash: string): void;
    _applyState(): void;
    _clear(): void;
    refresh(): void;
}
export { OpalRoute };
