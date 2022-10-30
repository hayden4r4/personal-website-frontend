import Head from "next/head";

import AboutBody from "../components/About/AboutBody";
import TopBar from "../components/TopBar/TopBar";
import Footer from "../components/Footer/Footer";

import styles from "../public/static/styles/utilities/_constants.module.scss";

export default function About() {
	return (
		<div id="aboutApp">
			<Head>
				<title>About - Hayden Rose</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="darkreader-lock" />
				<meta name="color-scheme" content="light" />
			</Head>
			<div id="aboutView">
				<TopBar headerShadowColor={styles.purple} />
				<AboutBody headerShadowColor={styles.purple}/>
			</div>
			<Footer />
		</div>
	);
}
