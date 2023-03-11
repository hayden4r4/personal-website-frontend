import Head from "next/head";

import OptionCalcBody from "../components/OptionCalc/OptionCalc";

import TopBar from "../components/TopBar/TopBar";
import Footer from "../components/Footer/Footer";

import styles from "../public/static/styles/utilities/_constants.module.scss";

export default function OptionCalculator() {
	return (
		<div id="optionCalcApp">
			<Head>
				<title>Option Pricer - Hayden Rose</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width user-scalable=no"
				/>
				<meta name="darkreader-lock" />
				<meta name="color-scheme" content="light" />
			</Head>
			<div id="optionCalcView">
				<TopBar headerShadowColor={styles.yellowDark} />
				<OptionCalcBody headerShadowColor={styles.yellowDark} />
			</div>
			<Footer />
		</div>
	);
}
