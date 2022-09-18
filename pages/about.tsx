import Head from "next/head";

import TopBar from "../components/TopBar/TopBar";

import styles from "../public/static/styles/utilities/_constants.module.scss";

export default function About() {
	return (
		<div>
			<Head>
				<title>About - Hayden Rose</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="darkreader-lock" />
				<meta name="color-scheme" content="light" />
			</Head>
			<TopBar headerShadowColor={styles.marsPink} />
			About
		</div>
	);
}
