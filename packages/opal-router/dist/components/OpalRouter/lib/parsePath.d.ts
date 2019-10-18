import { PathNodeType } from './PathNodeType';
export interface IPathStaticNode {
    type: PathNodeType.STATIC;
    value: string;
}
export interface IPathOptionalNode {
    type: PathNodeType.OPTIONAL;
    name: string | null;
    children: Array<TPathNode>;
}
export interface IPathInsertNode {
    type: PathNodeType.INSERT;
    name: string;
}
export declare type TPathNode = IPathStaticNode | IPathOptionalNode | IPathInsertNode;
export declare function parsePath(path: string): Array<TPathNode>;
