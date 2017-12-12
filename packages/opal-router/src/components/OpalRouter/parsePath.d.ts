import { PathNodeType } from './PathNodeType';
export interface IPathSimpleNode {
    type: PathNodeType.SIMPLE;
    value: string;
}
export interface IPathOptionalNode {
    type: PathNodeType.OPTIONAL;
    name: string | null;
    childNodes: Array<TPathNode>;
}
export interface IPathInsertNode {
    type: PathNodeType.INSERT;
    name: string;
}
export declare type TPathNode = IPathSimpleNode | IPathOptionalNode | IPathInsertNode;
export declare function parsePath(path: string): Array<TPathNode>;
