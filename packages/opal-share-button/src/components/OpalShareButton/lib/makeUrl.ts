const hasOwn = Object.prototype.hasOwnProperty;

export function makeUrl(url: string, data: Record<string, any>): string {
	let data_ = {};

	for (let key in data) {
		if (hasOwn.call(data, key)) {
			data_[key] = encodeURIComponent(data[key]);
		}
	}

	return url.replace(/\[([^\]]+)\]/g, (match, name) => (name in data_ ? data_[name] : match));
}
