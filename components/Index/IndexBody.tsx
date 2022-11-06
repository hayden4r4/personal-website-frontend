import styles from "../../public/static/styles/utilities/_constants.module.scss";
import textShadowGenerator from "../Utilities/TextEffects";

export default function IndexBody() {
	return (
		<div className="indexBody">
			<div className="indexBodyWelcome">
				<h1
					id="indexBodyWelcomeText"
					style={{
						textShadow: textShadowGenerator(0, 0.1, 0.0025, styles.marsPink),
					}}
				>
					Welcome!
				</h1>
			</div>
		</div>
	);
}
