import Head from "next/head";

import BlackScholesBody from "../components/BlackScholes/BlackScholesBody";

import TopBar from "../components/TopBar/TopBar";
import Footer from "../components/Footer/Footer";

import styles from "../public/static/styles/utilities/_constants.module.scss";

export default function BlackScholes() {

	return (
		<div id="blackScholesApp">
			<Head>
				<title>Portfolio - Hayden Rose</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="darkreader-lock" />
				<meta name="color-scheme" content="light" />
			</Head>
			<div id="blackScholesView">
				<TopBar headerShadowColor={styles.yellowDark} />
				<BlackScholesBody headerShadowColor={styles.yellowDark} />
			</div>
			<Footer />
		</div>
	);
}
