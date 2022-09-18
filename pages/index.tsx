import Image from "next/image";
import Head from "next/head"
import TopBar from "../components/TopBar/TopBar";
import IndexBody from "../components/Index/IndexBody"
// import BlackScholes from '../components/BlackScholes/BlackScholes';

export default function IndexApp() {
	return (
		<div className="IndexApp">
      <Head>
        <title>Hayden Rose</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="darkreader-lock"/>
        <meta name="color-scheme" content="light"/>
      </Head>
			<Image
        priority
        src="/static/images/mars.png"
        unoptimized={true}
        quality={100}
				alt="Mars Background"
				layout="fill"
        objectFit="cover"
				id="marsBackground"
			/>
			<TopBar />
      <IndexBody />
			{/* <Button text="This is a Button"/> */}
			{/* <BlackScholes/> */}
		</div>
	);
}
