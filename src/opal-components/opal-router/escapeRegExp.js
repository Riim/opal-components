let reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;

/**
 * @typesign (str: string) -> string;
 */
function escapeRegExp(str) {
	return str.replace(reEscapableChars, '\\$1');
}

module.exports = escapeRegExp;
