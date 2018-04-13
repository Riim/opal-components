import { assign } from '@riim/object-assign-polyfill';
import { EventEmitter } from 'cellx';

const ERROR_INDEXPATH_EMPTY = 'Indexpath cannot be empty';

export interface IItem {
	[name: string]: any;
	parent?: IItem | null;
	children?: Array<IItem>;
}

export function setParent<T extends IItem>(items: Array<T>, parent: T | null = null): Array<T> {
	for (let item of items) {
		item.parent = parent;
		setParent(item.children!, item);
	}

	return items;
}

export class ObservableTreeList<T extends IItem = IItem> extends EventEmitter {
	_items: Array<T>;

	get length(): number {
		return this._items.length;
	}

	constructor(items?: Array<T>) {
		super();

		this._items = items
			? setParent(
					items.map(function _(item): T {
						return assign(assign({}, item), {
							children: item.children ? item.children.map(_) : []
						});
					})
			  )
			: [];
	}

	get(indexpath: Array<number> | number): T | undefined {
		if (typeof indexpath == 'number') {
			return this._items[indexpath];
		}

		if (!indexpath.length) {
			throw new TypeError(ERROR_INDEXPATH_EMPTY);
		}

		let item: IItem | undefined = this._items[indexpath[0]];

		for (let i = 1, l = indexpath.length; item && i < l; i++) {
			item = item.children && item.children[indexpath[i]];
		}

		return item as T | undefined;
	}

	set(indexpath: Array<number> | number, item: T): this {
		let items: Array<IItem> | undefined;
		let parent: IItem | undefined;
		let index: number;

		if (typeof indexpath == 'number') {
			items = this._items;
			index = indexpath;
		} else {
			let indexpathLength = indexpath.length;

			if (!indexpathLength) {
				throw new TypeError(ERROR_INDEXPATH_EMPTY);
			}

			if (indexpathLength == 1) {
				items = this._items;
			} else {
				let node: IItem | undefined = this._items[indexpath[0]];

				for (let i = 1, l = indexpathLength - 1; node && i < l; i++) {
					node = node.children && node.children[indexpath[i]];
				}

				if (!node) {
					throw new TypeError(
						`Item by indexpath "[${indexpath.slice(0, -1).join(',')}]" is not exist`
					);
				}

				items = node.children || (node.children = []);
				parent = node;
			}

			index = indexpath[indexpathLength - 1];
		}

		if (index > items.length) {
			throw new RangeError('Index out of valid range');
		}

		if (item !== items[index]) {
			if (parent) {
				item.parent = parent;
			}

			items[index] = item;
			this.emit('change');
		}

		return this;
	}

	forEach(
		callback: (item: T, index: number, list: ObservableTreeList<T>) => void,
		context?: any
	) {}

	map<R = any>(
		callback: (item: T, index: number, list: ObservableTreeList<T>) => any,
		context?: any
	): Array<R> {
		return 0 as any;
	}

	filter(
		callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void,
		context?: any
	): Array<T> {
		return 0 as any;
	}

	every(
		callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void,
		context?: any
	): boolean {
		return 0 as any;
	}

	some(
		callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void,
		context?: any
	): boolean {
		return 0 as any;
	}

	reduce<R>(
		callback: (accumulator: R, item: T, index: number, list: ObservableTreeList<T>) => R,
		initialValue?: R
	): R {
		return 0 as any;
	}

	reduceRight<R>(
		callback: (accumulator: R, item: T, index: number, list: ObservableTreeList<T>) => R,
		initialValue?: R
	): any {
		return 0 as any;
	}

	toArray(): Array<T> {
		return this._items.slice();
	}
}

['forEach', 'map', 'filter', 'every', 'some'].forEach(name => {
	ObservableTreeList.prototype[name] = function(callback: any, context: any) {
		return this._items[name](function(item: any, index: any) {
			return callback.call(context, item, index, this);
		}, this);
	};
});

['reduce', 'reduceRight'].forEach(name => {
	ObservableTreeList.prototype[name] = function(callback: any, initialValue: any) {
		let items = this._items;
		let list = this;

		function wrapper(accumulator: any, item: any, index: any) {
			return callback(accumulator, item, index, list);
		}

		return arguments.length >= 2 ? items[name](wrapper, initialValue) : items[name](wrapper);
	};
});
