import TopBar from "../components/TopBar/TopBar";

import styles from "../../public/static/styles/utilities/_constants.module.scss";

export default function About() {
	return (
		<div>
			<TopBar headerShadowColor={styles.marsPink} />
			About
		</div>
	);
}
