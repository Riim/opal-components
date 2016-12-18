function parseDate(date, format = 'dd/mm/yyyy') {
	date = date.match(/\d+/g);

	date = format.match(/d{2}|m{2}|y{4}/g).reduce((parsedDate, item, index) => {
		parsedDate[item] = +date[index];
		return parsedDate;
	}, {});

	return new Date(date.yyyy, date.mm - 1, date.dd);
}

module.exports = parseDate;
