import { IEvent } from 'cellx';
import { BrowserHistory, State, Update } from 'history';
import { BaseComponent, IComponentElement } from 'rionite';
import { OpalRoute } from '../OpalRoute';
import './index.css';
export * from 'history';
export { OpalRoute };
export interface IRouteProperty {
    name: string;
    optional: boolean;
}
export interface IRoute {
    path: string;
    rePath: RegExp;
    properties: Array<IRouteProperty>;
    component: OpalRoute;
}
export interface IComponentState {
    [name: string]: boolean | string;
}
export declare class OpalRouter extends BaseComponent {
    static EVENT_CHANGE: symbol;
    static EVENT_REFRESH_ROUTER: symbol;
    static EVENT_BLOCK_ROUTER: symbol;
    static EVENT_UNBLOCK_ROUTER: symbol;
    static history: BrowserHistory<State>;
    useLocationHash: boolean;
    scrollTopOnChange: boolean;
    scrollTopOnChangeComponent: boolean;
    _routes: Array<IRoute>;
    _route: IRoute | null;
    _state: IComponentState | null;
    _historyBlockingMessage: string;
    _historyUnblock: (() => void) | null;
    _componentElement: IComponentElement | null;
    isLoaderShown: boolean;
    initialize(): void;
    ready(): void;
    elementAttached(): void;
    elementDetached(): void;
    _onHistoryChange(update: Update): void;
    _onBodyClick(evt: Event): void;
    _onRefreshRouter(): boolean;
    _onBlockRouter(evt: IEvent): boolean;
    _onUnblockRouter(): void;
    _update(path: string, _hash: string): boolean;
    _applyState(): void;
    _clear(): void;
    refresh(): void;
}
