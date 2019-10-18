import { PathNodeType } from './PathNodeType';

const reName = /[a-z][0-9a-z]*/i;

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

export type TPathNode = IPathStaticNode | IPathOptionalNode | IPathInsertNode;

export function parsePath(path: string): Array<TPathNode> {
	let ctx = PathNodeType.STATIC;

	let pos = 0;
	let chr = path[0];

	return readPath();

	function next(c?: string): string {
		if (c && c != chr) {
			throw {
				name: 'SyntaxError',
				message: `Expected "${c}" instead of "${chr}"`,
				pos,
				path
			};
		}

		chr = path[++pos];
		return chr;
	}

	function readPath() {
		let path: Array<TPathNode> = [];

		while (chr) {
			if (chr == '(') {
				path.push(readOptionalNode());
			} else if (chr == '[') {
				path.push(readInsert());
			} else {
				path.push(readStaticNode());
			}
		}

		return path;
	}

	function readStaticNode(): IPathStaticNode {
		let value = chr;

		while (next()) {
			if (chr == '(' || chr == '[' || (ctx == PathNodeType.OPTIONAL && chr == ')')) {
				break;
			}

			value += chr;
		}

		return {
			type: PathNodeType.STATIC,
			value
		};
	}

	function readOptionalNode(): IPathOptionalNode {
		let optionalNodePos = pos;

		next('(');

		let name;

		if (chr == '|') {
			name = readOptionalNodeName();
		}

		let children: Array<TPathNode> = [];

		let prevCtx = ctx;
		ctx = PathNodeType.OPTIONAL;

		while (chr) {
			if (chr == ')') {
				next();
				ctx = prevCtx;

				return {
					type: PathNodeType.OPTIONAL,
					name: name || null,
					children
				};
			} else if (chr == '(') {
				children.push(readOptionalNode());
			} else if (chr == '[') {
				children.push(readInsert());
			} else {
				children.push(readStaticNode());
			}
		}

		throw {
			name: 'SyntaxError',
			message: 'Missing ")" in compound statement',
			pos: optionalNodePos,
			path
		};
	}

	function readOptionalNodeName(): string {
		next('|');

		let optionalNodeNamePos = pos;
		let name = '';

		while (chr) {
			if (chr == '|') {
				if (!reName.test(name) || name == 'class') {
					throw {
						name: 'SyntaxError',
						message: `Invalid name "${name}"`,
						pos: optionalNodeNamePos,
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
			pos: optionalNodeNamePos,
			path
		};
	}

	function readInsert(): IPathInsertNode {
		let insertPos = pos;

		next('[');

		let name = '';

		let prevCtx = ctx;
		ctx = PathNodeType.INSERT;

		while (chr) {
			if (chr == ']') {
				if (!reName.test(name) || name == 'class') {
					throw {
						name: 'SyntaxError',
						message: `Invalid name "${name}"`,
						pos: insertPos + 1,
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
			pos: insertPos,
			path
		};
	}
}
