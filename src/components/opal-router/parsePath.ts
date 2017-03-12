import PathNodeType from './PathNodeType';

let reName = /[a-z][0-9a-z]*/i;

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

export type TPathNode = IPathSimpleNode | IPathOptionalNode | IPathInsertNode;

export default function parsePath(path: string): Array<TPathNode> {
	let ctx = PathNodeType.SIMPLE;

	let at = 0;
	let chr = path[0];

	return readPath();

	function next(c?: string): string {
		if (c && c != chr) {
			throw {
				name: 'SyntaxError',
				message: `Expected "${ c }" instead of "${ chr }"`,
				at,
				path
			};
		}

		chr = path[++at];
		return chr;
	}

	function readPath() {
		let path = [] as Array<TPathNode>;

		while (chr) {
			if (chr == '(') {
				path.push(readOptionalNode());
			} else if (chr == '[') {
				path.push(readInsert());
			} else {
				path.push(readSimpleNode());
			}
		}

		return path;
	}

	function readSimpleNode(): IPathSimpleNode {
		let value = chr;

		while (next()) {
			if (chr == '(' || chr == '[' || ctx == PathNodeType.OPTIONAL && chr == ')') {
				break;
			}

			value += chr;
		}

		return {
			type: PathNodeType.SIMPLE,
			value
		};
	}

	function readOptionalNode(): IPathOptionalNode {
		let optionalNodeAt = at;

		next('(');

		let name;

		if (chr == ':') {
			name = readOptionalNodeName();
		}

		let childNodes = [] as Array<TPathNode>;

		let prevCtx = ctx;
		ctx = PathNodeType.OPTIONAL;

		while (chr) {
			if (chr == ')') {
				next();
				ctx = prevCtx;

				return {
					type: PathNodeType.OPTIONAL,
					name: name || null,
					childNodes
				};
			} else if (chr == '(') {
				childNodes.push(readOptionalNode());
			} else if (chr == '[') {
				childNodes.push(readInsert());
			} else {
				childNodes.push(readSimpleNode());
			}
		}

		throw {
			name: 'SyntaxError',
			message: 'Missing ")" in compound statement',
			at: optionalNodeAt,
			path
		};
	}

	function readOptionalNodeName(): string {
		next(':');

		let optionalNodeNameAt = at;
		let name = '';

		while (chr) {
			if (chr == ':') {
				if (!reName.test(name) || name == 'class') {
					throw {
						name: 'SyntaxError',
						message: `Invalid name "${ name }"`,
						at: optionalNodeNameAt,
						path
					};
				}

				next();

				return name;
			} else {
				name += chr;
				next();
			}
		}

		throw {
			name: 'SyntaxError',
			message: 'Missing ":" in compound statement',
			at: optionalNodeNameAt,
			path
		};
	}

	function readInsert(): IPathInsertNode {
		let insertAt = at;

		next('[');

		let name = '';

		let prevCtx = ctx;
		ctx = PathNodeType.INSERT;

		while (chr) {
			if (chr == ']') {
				if (!reName.test(name) || name == 'class') {
					throw {
						name: 'SyntaxError',
						message: `Invalid name "${ name }"`,
						at: insertAt + 1,
						path
					};
				}

				next();
				ctx = prevCtx;

				return {
					type: PathNodeType.INSERT,
					name
				};
			} else {
				name += chr;
				next();
			}
		}

		throw {
			name: 'SyntaxError',
			message: 'Missing "]" in compound statement',
			at: insertAt,
			path
		};
	}
}
