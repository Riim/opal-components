export default function parseDate(date: string, format = 'dd/mm/yyyy'): Date {
	let match = date.match(/\d+/g);

	if (!match) {
		return new Date(NaN);
	}

	let d = (format.match(/d{2}|m{2}|y{4}/g) as RegExpMatchArray).reduce((parsedDate, item, index) => {
		parsedDate[item] = +(match as RegExpMatchArray)[index];
		return parsedDate;
	}, {});

	return new Date(d['yyyy'], d['mm'] - 1, d['dd']);
}
