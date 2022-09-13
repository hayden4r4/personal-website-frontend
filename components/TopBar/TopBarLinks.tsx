import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import HamburgerClosed from "../../icons/Hamburger_Closed.png";
import HamburgerOpen from "../../icons/Hamburger_Open.png";
import GithubIcon from "../../icons/Github.png";
import LinkedInIcon from "../../icons/LinkedIn.png";
import HomeIcon from "../../icons/Home.png";
import Porfolio from "../../icons/Portfolio.png";

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
			<Link href="/" title="Home">
				<Image
					src={HomeIcon}
					alt="Home Icon"
					className="topBarLinksIcon"
					id="topBarHomeIcon"
					width={25}
					height={25} // auto
				/>
			</Link>
			<Link href="/portfolio" title="Portfolio">
				<Image
					src={Porfolio}
					alt="Portfolio Icon"
					className="topBarLinksIcon"
					id="topBarPortfolioIcon"
					width={25}
					height={25} // auto
				/>
			</Link>
			<Link
				href="https://github.com/hayden4r4"
				title="Github/hayden4r4"
			>
				<Image
					src={GithubIcon}
					alt="Github Icon"
					className="topBarLinksIcon"
					id="topBarGithubIcon"
					width={25}
					height={25} // auto
				/>
			</Link>
			<Link
				href="https://www.linkedin.com/in/hayden-rose-b5a282179/"
				title="LinkedIn"
			>
				<Image
					src={LinkedInIcon}
					alt="LinkedIn Icon"
					className="topBarLinksIcon"
					id="topBarLinkedInIcon"
					width={25}
					height={25} // auto
				/>
			</Link>
			<div className="topBarHeader">
				<p id="header">Hayden Rose</p>
			</div>
		</div>
	);
}
