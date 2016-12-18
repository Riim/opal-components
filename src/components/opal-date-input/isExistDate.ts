export default function isExistDate(date: string): boolean {
	let match = date.match(/\d+/g);

	if (!match) {
		return false;
	}

	let day = parseInt(match[0], 10);
	let month = parseInt(match[1], 10) - 1;
	let year = parseInt(match[2], 10);

	if (year < 100) {
		year += 1900;
	}

	let d = new Date(year, month, day);

	return day == d.getDate() && month == d.getMonth() && year == d.getFullYear();
}
