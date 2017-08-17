import { EventEmitter } from 'cellx';
export interface IItem {
    [name: string]: any;
    children?: Array<IItem>;
}
export default class ObservableTreeList<T extends IItem = IItem> extends EventEmitter {
    _items: Array<T>;
    constructor(items?: Array<T>);
    get(indexpath: Array<number>): IItem | undefined;
    set(indexpath: Array<number>, item: IItem): this;
    forEach(callback: (item: IItem, index: number, list: ObservableTreeList<T>) => void, context?: any): void;
}
