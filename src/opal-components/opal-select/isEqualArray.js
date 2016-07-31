function isEqualArray(a: Array<any>, b: Array<any>): boolean {
	let aLen = a.length;
	let bLen = b.length;

	if (aLen != bLen) {
		return false;
	}

	for (let i = 0; i < aLen; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}

	return true;
}

module.exports = isEqualArray;
