let reEscapableChars = /([?+|$(){}[^.\-\]\/\\*])/g;

/**
 * @typesign (str: string) -> string;
 */
module.exports = function escapeRegExp(str) {
	return str.replace(reEscapableChars, '\\$1');
};
