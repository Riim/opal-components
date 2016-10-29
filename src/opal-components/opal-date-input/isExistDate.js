function isExistDate(date) {
	date = date.match(/\d+/g);

	let day = parseInt(date[0], 10);
	let month = parseInt(date[1], 10) - 1;
	let year = parseInt(date[2], 10);

	if (year < 100) {
		year += 1900;
	}

	date = new Date(year, month, day);

	return day == date.getDate() && month == date.getMonth() && year == date.getFullYear();
}

module.exports = isExistDate;
