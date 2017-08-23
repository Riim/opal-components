import { EventEmitter } from 'cellx';

let INDEXPATH_EMPTY_ERROR_MESSAGE = 'Indexpath cannot be empty';

export interface IItem {
	[name: string]: any;
	children?: Array<IItem>;
}

export default class ObservableTreeList<T extends IItem = IItem> extends EventEmitter {
	_items: Array<T>;

	get length(): number {
		return this._items.length;
	}

	constructor(items?: Array<T>) {
		super();
		this._items = items || [];
	}

	get(indexpath: Array<number>): IItem | undefined {
		let indexpathLength = indexpath.length;

		if (!indexpathLength) {
			throw new TypeError(INDEXPATH_EMPTY_ERROR_MESSAGE);
		}

		let items: Array<IItem> | undefined = this._items;
		let item: IItem;

		for (let i = 0, l = indexpathLength - 1; i < l; i++) {
			item = items[indexpath[i]];

			if (!item) {
				return;
			}

			items = item.children;

			if (!items) {
				return;
			}
		}

		return items[indexpath[indexpathLength - 1]];
	}

	set(indexpath: Array<number>, item: IItem): this {
		let indexpathLength = indexpath.length;

		if (!indexpathLength) {
			throw new TypeError(INDEXPATH_EMPTY_ERROR_MESSAGE);
		}

		let items;

		if (indexpathLength == 1) {
			items = this._items;
		} else {
			let item_ = this.get(indexpath.slice(0, -1));

			if (!item_) {
				throw new TypeError(`Item by indexpath "[${ indexpath.slice(0, -1).join(',') }]" is not exist`);
			}

			items = item_.children || (item_.children = []);
		}

		let lastIndexValue = indexpath[indexpathLength - 1];

		if (item !== items[lastIndexValue]) {
			items[lastIndexValue] = item;
			this.emit('change');
		}

		return this;
	}

	forEach(callback: (item: T, index: number, list: ObservableTreeList<T>) => void, context?: any) {}

	map<R = any>(callback: (item: T, index: number, list: ObservableTreeList<T>) => any, context?: any): Array<R> {
		return [];
	}

	filter(callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void, context?: any): Array<T> {
		return [];
	}

	every(callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void, context?: any): boolean {
		return false;
	}

	some(callback: (item: T, index: number, list: ObservableTreeList<T>) => boolean | void, context?: any): boolean {
		return false;
	}

	reduce(
		callback: (accumulator: any, item: T, index: number, list: ObservableTreeList<T>) => any,
		initialValue?: any
	): any {}

	reduceRight(
		callback: (accumulator: any, item: T, index: number, list: ObservableTreeList<T>) => any,
		initialValue?: any
	): any {}
}

['forEach', 'map', 'filter', 'every', 'some'].forEach((name) => {
	ObservableTreeList.prototype[name] = function(callback: any, context: any) {
		return this._items[name](function(item: any, index: any) {
			return callback.call(context, item, index, this);
		}, this);
	};
});

['reduce', 'reduceRight'].forEach((name) => {
	ObservableTreeList.prototype[name] = function(callback: any, initialValue: any) {
		let items = this._items;
		let list = this;

		function wrapper(accumulator: any, item: any, index: any) {
			return callback(accumulator, item, index, list);
		}

		return arguments.length >= 2 ? items[name](wrapper, initialValue) : items[name](wrapper);
	};
});
