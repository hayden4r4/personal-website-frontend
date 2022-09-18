export default function textShadowGenerator(
	start: number,
	end: number,
	increment: number,
	color: string
): string {
	let shadowString: string = "";
	for (let i: number = start; i <= end; i += increment) {
		shadowString += `${i}em ${i}em ${color}, `;
	}
	return shadowString.slice(0, -2);
}
