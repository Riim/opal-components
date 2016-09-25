function isEqualArray(arr1, arr2) {
	let len = arr1.length;

	if (len != arr2.length) {
		return false;
	}

	for (let i = 0; i < len; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

module.exports = isEqualArray;
