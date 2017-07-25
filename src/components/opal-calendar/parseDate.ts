export function parseDate(date: string): Date {
	let d = date.match(/\d+/g)!;
	return new Date(+d[2], +d[1] - 1, +d[0]);
}
