export function formatDate(year: number, month: number, day: number, delimiter = '/') {
	return (
		('0' + day).slice(-2) +
		delimiter +
		('0' + (month + 1)).slice(-2) +
		delimiter +
		('000' + year).slice(-4)
	);
}
