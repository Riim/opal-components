let PathNodeType = require('./PathNodeType');

let reName = /[a-z][0-9a-z]*/i;

function parsePath(path) {
	let ctx = PathNodeType.NORMAL;

	let at = 0;
	let chr = path[0];

	return readPath();

	function raiseError(msg, at) {
		throw {
			name: 'SyntaxError',
			message: msg,
			at,
			path
		};
	}

	function next(c) {
		if (c && c != chr) {
			raiseError(`Expected "${ c }" instead of "${ chr }"`, at);
		}

		chr = path[++at];
		return chr;
	}

	function readPath() {
		let path = [];

		while (chr) {
			if (chr == '(') {
				path.push(readOptionalNode());
			} else if (chr == '[') {
				path.push(readInsert());
			} else {
				path.push(readNormalNode());
			}
		}

		return path;
	}

	function readNormalNode() {
		let value = chr;

		while (next()) {
			if (chr == '(' || chr == '[' || ctx == PathNodeType.OPTIONAL && chr == ')') {
				break;
			}

			value += chr;
		}

		return {
			type: PathNodeType.NORMAL,
			value
		};
	}

	function readOptionalNode() {
		let optionalNodeAt = at;

		next('(');

		let name = readOptionalNodeName();
		let childNodes = [];

		let prevCtx = ctx;
		ctx = PathNodeType.OPTIONAL;

		while (chr) {
			if (chr == ')') {
				next();
				ctx = prevCtx;

				return {
					type: PathNodeType.OPTIONAL,
					name,
					childNodes
				};
			} else if (chr == '(') {
				childNodes.push(readOptionalNode());
			} else if (chr == '[') {
				childNodes.push(readInsert());
			} else {
				childNodes.push(readNormalNode());
			}
		}

		raiseError('Missing ")" in compound statement', optionalNodeAt);
	}

	function readOptionalNodeName() {
		let optionalNodeNameAt = at;
		let name = '';

		while (chr) {
			if (chr == '?') {
				if (!reName.test(name)) {
					raiseError('Invalid name "' + name + '"', optionalNodeNameAt);
				}

				next();

				return name;
			} else {
				name += chr;
				next();
			}
		}

		raiseError('Invalid path "' + path + '"', 0);
	}

	function readInsert() {
		let insertAt = at;

		next('[');

		let name = '';

		let prevCtx = ctx;
		ctx = PathNodeType.INSERT;

		while (chr) {
			if (chr == ']') {
				if (!reName.test(name)) {
					raiseError('Invalid name "' + name + '"', insertAt + 1);
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

		raiseError('Missing "]" in compound statement', insertAt);
	}
}

module.exports = parsePath;
