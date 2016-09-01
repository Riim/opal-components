let { Utils: { createClass } } = require('cellx');

let items = [];

for (let i = 0, l = 1000; i < l; i++) {
	items[i] = { id: i.toString(), value: i };
}

module.exports = createClass({
	getNextItems(count = 50, after, query) {
		let filteredItems = query ? items.filter(item => item.value.toString().indexOf(query) != -1) : items;
		let from = after ? filteredItems.findIndex(item => item.id == after) + 1 : 0;

		return new Promise((resolve) => {
			setTimeout(() => {
				resolve({
					items: filteredItems.slice(from, from + count),
					total: filteredItems.length
				});
			}, 500);
		});
	}
});
