function formatDate(year, month, day) {
	if (arguments.length == 1) {
		let date = year;

		year = date.getFullYear();
		month = date.getMonth();
		day = date.getDate();
	}

	return ('0' + day).slice(-2) + '/' + ('0' + (month + 1)).slice(-2) + '/' + ('000' + year).slice(-4);
}

module.exports = formatDate;
