import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import textShadowGenerator from '../Utilities/TextEffects';

import HamburgerClosed from "../../public/static/icons/Hamburger_Closed.png";
import HamburgerOpen from "../../public/static/icons/Hamburger_Open.png";
import GithubIcon from "../../public/static/icons/Github.png";
import LinkedInIcon from "../../public/static/icons/LinkedIn.png";
import HomeIcon from "../../public/static/icons/Home.png";
import Porfolio from "../../public/static/icons/Portfolio.png";

export default function TopBarLinks() {
	var [hamburgerMenuOpen, setHamburgerMenuState] = useState(false);
	var hamburgerMenuImg = hamburgerMenuOpen ? (
		<Image
			src={HamburgerOpen}
			alt="Hamburger Menu Open"
			id="topBarHamburgerOpen"
			width={22}
			height={19} // auto
		/>
	) : (
		<Image
			src={HamburgerClosed}
			alt="Hamburger Menu Closed"
			id="topBarHamburgerClosed"
			width={25}
			height={30} // auto
		/>
	);

	const hamburgerMenuToggle = () => {
		setHamburgerMenuState(!hamburgerMenuOpen);
	};

	return (
		<div className={`topBarLinks ${hamburgerMenuOpen ? "showMenu" : ""}`}>
			<button
				className="topBarHamburgerMenu"
				title="Menu"
				onClick={hamburgerMenuToggle}
			>
				{hamburgerMenuImg}
			</button>
			<NavigationMenu hamburgerMenuOpen={hamburgerMenuOpen} />
			<Link href="/">
				<a className="topBarLinksIcon">
					<Image
						src={HomeIcon}
						title="Home"
						alt="Home Icon"
						id="topBarHomeIcon"
						width={25}
						height={25} // auto
					/>
				</a>
			</Link>
			<Link href="/portfolio">
				<a className="topBarLinksIcon">
					<Image
						src={Porfolio}
						title="Portfolio"
						alt="Portfolio Icon"
						id="topBarPortfolioIcon"
						width={25}
						height={25} // auto
					/>
				</a>
			</Link>
			<Link
				href="https://github.com/hayden4r4"
			>
				<a className="topBarLinksIcon">
					<Image
						src={GithubIcon}
						title="Github/hayden4r4"
						alt="Github Icon"
						id="topBarGithubIcon"
						width={25}
						height={25} // auto
					/>
				</a>
			</Link>
			<Link
				href="https://www.linkedin.com/in/hayden-rose-b5a282179/"
			>
				<a className="topBarLinksIcon">
					<Image
						src={LinkedInIcon}
						title="LinkedIn"
						alt="LinkedIn Icon"
						id="topBarLinkedInIcon"
						width={25}
						height={25} // auto
					/>
				</a>
			</Link>
			<div className="topBarHeader" style={{ textShadow: textShadowGenerator(0, 0.1, 0.0025) }}>
				<p id="header">Hayden Rose</p>
			</div>
		</div>
	);
}
