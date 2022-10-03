import Head from "next/head";

import PortfolioBody from "../components/Portfolio/PortfolioBody";
import TopBar from "../components/TopBar/TopBar";
import Footer from "../components/Footer/Footer";

import styles from "../public/static/styles/utilities/_constants.module.scss";

export default function Portfolio() {
	return (
		<div id="portfolioApp">
			<Head>
				<title>Portfolio - Hayden Rose</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="darkreader-lock" />
				<meta name="color-scheme" content="light" />
			</Head>
			<div id="porfolioView">
				<TopBar headerShadowColor={styles.lightBlueSecondary} />
				<PortfolioBody headerShadowColor={styles.lightBlueSecondary}/>
			</div>
			<Footer />
		</div>
	);
}
