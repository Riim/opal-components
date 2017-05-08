import './index.css';
import { IComponentElement, Component } from 'rionite';
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
    _componentElement: IComponentElement | null;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    elementDetached(): void;
    _onWindowPopState(): void;
    _update(): void;
    _applyState(state: IComponentState): void;
    _clear(): void;
}
export { OpalRoute };
