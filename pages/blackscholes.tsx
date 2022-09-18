import Head from "next/head";

import BlackScholesCalc from "../components/BlackScholes/BlackScholesCalc";
import TopBar from "../components/TopBar/TopBar";

import styles from "../../public/static/styles/utilities/_constants.module.scss";

export default function BlackScholes() {
	return (
		<div>
			<Head>
				<title>Hayden Rose</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="darkreader-lock" />
				<meta name="color-scheme" content="light" />
			</Head>

			<TopBar headerShadowColor={styles.marsPink} />
			<BlackScholesCalc />
		</div>
	);
}
