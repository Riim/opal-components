import { EventEmitter } from 'cellx';
export interface IItem {
    [name: string]: any;
    parent?: IItem | null;
    children?: Array<IItem>;
}
export declare function setParent<T extends IItem>(items: Array<T>, parent?: T | null): Array<T>;
export declare class ObservableTreeList<T extends IItem = IItem> extends EventEmitter {
    static EVENT_CHANGE: string;
    _items: Array<T>;
    get length(): number;
    constructor(items?: Array<T>);
    get(indexpath: Array<number> | number): T | undefined;
    set(indexpath: Array<number> | number, item: T): this;
    forEach(callback: (item: T, index: number, list: ObservableTreeList<T>) => void, context?: any): void;
    map<R = any>(callback: (item: T, index: number, list: ObservableTreeList<T>) => any, context?: any): Array<R>;
    filter(callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void, context?: any): Array<T>;
    every(callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void, context?: any): boolean;
    some(callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void, context?: any): boolean;
    reduce<R>(callback: (accumulator: R, item: T, index: number, list: ObservableTreeList<T>) => R, initialValue?: R): R;
    reduceRight<R>(callback: (accumulator: R, item: T, index: number, list: ObservableTreeList<T>) => R, initialValue?: R): any;
    toArray(): Array<T>;
}
