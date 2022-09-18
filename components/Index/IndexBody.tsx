import styles from "../../public/static/styles/utilities/_constants.module.scss";
export default function IndexBody() {
	let shadowString: string = "";
	for (let i: number = 5; i <= 15; i += 0.25) {
		shadowString += `${i}px ${i}px ${styles.marsPink}, `;
	}
	shadowString = shadowString.slice(0, -2);
	return (
		<div className="indexBody">
			<div className="indexBodyWelcome">
				<h1 id="indexBodyWelcomeText" style={{ textShadow: shadowString }}>
					Please hire me
				</h1>
			</div>
		</div>
	);
}
