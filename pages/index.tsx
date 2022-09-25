import Image from "next/future/image";
import Head from "next/head";
import TopBar from "../components/TopBar/TopBar";
import IndexBody from "../components/Index/IndexBody";
import Footer from "../components/Footer/Footer";

import Mars from "../public/static/images/mars.png";

import styles from "../public/static/styles/utilities/_constants.module.scss";

export default function IndexApp() {
	return (
		<div className="IndexApp">
			<Head>
				<title>Hayden Rose</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="darkreader-lock" />
				<meta name="color-scheme" content="light" />
			</Head>
			<div id="indexBackgroundImage">
				<Image
					priority
					src={Mars}
					unoptimized={true}
					quality={100}
					alt="Mars Background"
					sizes="100vw"
					className="marsBackground"
				/>
			</div>
			<TopBar headerShadowColor={styles.marsPink} />
			<IndexBody />
			<Footer />
		</div>
	);
}
