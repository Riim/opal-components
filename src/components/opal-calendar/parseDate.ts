export default function parseDate(date: string, delimiter = '/'): Date {
	let d = date.split(delimiter);
	return new Date(+d[2], +d[1] - 1, +d[0]);
}
