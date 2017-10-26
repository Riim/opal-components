import { assign } from '@riim/object-assign-polyfill';
import { EventEmitter } from 'cellx';

let INDEXPATH_EMPTY_ERROR_MESSAGE = 'Indexpath cannot be empty';

export interface IItem {
	[name: string]: any;
	parent?: IItem | null;
	children?: Array<IItem>;
}

export function fixParent<T extends IItem>(items: Array<T>, parent: T | null = null): Array<T> {
	for (let item of items) {
		item.parent = parent;
		fixParent(item.children!, item);
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
			? fixParent(
					items.map(function _(item): T {
						return assign(assign({}, item), {
							children: item.children ? item.children.map(_) : []
						});
					})
				)
			: [];
	}

	get(indexpath: Array<number>): T | undefined {
		let indexpathLength = indexpath.length;

		if (!indexpathLength) {
			throw new TypeError(INDEXPATH_EMPTY_ERROR_MESSAGE);
		}

		let items: Array<T> | undefined = this._items;
		let item: T;

		for (let i = 0, l = indexpathLength - 1; i < l; i++) {
			item = items[indexpath[i]];

			if (!item) {
				return;
			}

			items = item.children as Array<T>;

			if (!items) {
				return;
			}
		}

		return items[indexpath[indexpathLength - 1]];
	}

	set(indexpath: Array<number>, item: T): this {
		let indexpathLength = indexpath.length;

		if (!indexpathLength) {
			throw new TypeError(INDEXPATH_EMPTY_ERROR_MESSAGE);
		}

		let items;

		if (indexpathLength == 1) {
			items = this._items;
		} else {
			let parent = this.get(indexpath.slice(0, -1));

			if (!parent) {
				throw new TypeError(
					`Item by indexpath "[${indexpath.slice(0, -1).join(',')}]" is not exist`
				);
			}

			items = parent.children!;

			item.parent = parent;
		}

		let lastIndexValue = indexpath[indexpathLength - 1];

		if (item !== items[lastIndexValue]) {
			items[lastIndexValue] = item;
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
		return [];
	}

	filter(
		callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void,
		context?: any
	): Array<T> {
		return [];
	}

	every(
		callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void,
		context?: any
	): boolean {
		return false;
	}

	some(
		callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void,
		context?: any
	): boolean {
		return false;
	}

	reduce<R>(
		callback: (accumulator: R, item: T, index: number, list: ObservableTreeList<T>) => R,
		initialValue?: R
	): R {
		return undefined as any;
	}

	reduceRight<R>(
		callback: (accumulator: R, item: T, index: number, list: ObservableTreeList<T>) => R,
		initialValue?: R
	): any {
		return undefined as any;
	}
}

['forEach', 'map', 'filter', 'every', 'some'].forEach(name => {
	(ObservableTreeList.prototype as any)[name] = function(callback: any, context: any) {
		return this._items[name](function(item: any, index: any) {
			return callback.call(context, item, index, this);
		}, this);
	};
});

['reduce', 'reduceRight'].forEach(name => {
	(ObservableTreeList.prototype as any)[name] = function(callback: any, initialValue: any) {
		let items = this._items;
		let list = this;

		function wrapper(accumulator: any, item: any, index: any) {
			return callback(accumulator, item, index, list);
		}

		return arguments.length >= 2 ? items[name](wrapper, initialValue) : items[name](wrapper);
	};
});
