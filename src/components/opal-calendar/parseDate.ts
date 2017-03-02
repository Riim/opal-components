export default function parseDate(date: string): Date {
	let d = date.match(/\d+/g) as RegExpMatchArray;
	return new Date(+d[2], +d[1] - 1, +d[0]);
}
