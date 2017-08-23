import { EventEmitter } from 'cellx';
export interface IItem {
    [name: string]: any;
    children?: Array<IItem>;
}
export default class ObservableTreeList<T extends IItem = IItem> extends EventEmitter {
    _items: Array<T>;
    readonly length: number;
    constructor(items?: Array<T>);
    get(indexpath: Array<number>): IItem | undefined;
    set(indexpath: Array<number>, item: IItem): this;
    forEach(callback: (item: T, index: number, list: ObservableTreeList<T>) => void, context?: any): void;
    map<R = any>(callback: (item: T, index: number, list: ObservableTreeList<T>) => any, context?: any): Array<R>;
    filter(callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void, context?: any): Array<T>;
    every(callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void, context?: any): boolean;
    some(callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void, context?: any): boolean;
    reduce(callback: (accumulator: any, item: T, index: number, list: ObservableTreeList<T>) => any, initialValue?: any): any;
    reduceRight(callback: (accumulator: any, item: T, index: number, list: ObservableTreeList<T>) => any, initialValue?: any): any;
}
