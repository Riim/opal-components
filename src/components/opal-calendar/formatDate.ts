export default function formatDate(year: number, month: number, day: number): string {
	return ('0' + day).slice(-2) + '/' + ('0' + (month + 1)).slice(-2) + '/' + ('000' + year).slice(-4);
}
