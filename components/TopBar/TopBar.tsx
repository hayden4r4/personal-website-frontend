import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import textShadowGenerator from "../Utilities/TextEffects";

import HamburgerClosed from "../../public/static/icons/Hamburger_Closed.png";
import HamburgerOpen from "../../public/static/icons/Hamburger_Open.png";
import GithubIcon from "../../public/static/icons/Github.png";
import LinkedInIcon from "../../public/static/icons/LinkedIn.png";
import HomeIcon from "../../public/static/icons/Home.png";
import Porfolio from "../../public/static/icons/Portfolio.png";

import * as PropTypes from "../Utilities/PropTypes";

export default function TopBar({ headerShadowColor }: PropTypes.TopBarProps) {
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
		<header id="topBarHeader">
			{/* <div className={`topBarLinks ${hamburgerMenuOpen ? "showMenu" : ""}`}>
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
				<div className="topBarHeader" style={{ textShadow: textShadowGenerator(0, 0.1, 0.0025, headerShadowColor) }}>
					<p id="header">Hayden Rose</p>
				</div>
			</div> */}
			<NavigationMenu hamburgerMenuOpen={hamburgerMenuOpen} />
			<nav>
				<ul
					className={`topBarList ${hamburgerMenuOpen ? "showMenu" : ""}`}
					id="topBarList"
				>
					<li
						className="topBarListItem"
						id="topBarHamburgerMenu"
						title="Menu"
						onClick={hamburgerMenuToggle}
					>
						{hamburgerMenuImg}
					</li>
					<li className="topBarListItem" title="Home" id="topBarHomeIcon">
						<Link href="/">
							<a className="topBarListIcon">
								<Image src={HomeIcon} alt="Home Icon" width={25} height={25} />
							</a>
						</Link>
					</li>
					<li
						className="topBarListItem"
						title="Portfolio"
						id="topBarPortfolioIcon"
					>
						<Link href="/portfolio">
							<a className="topBarListIcon">
								<Image
									src={Porfolio}
									alt="Portfolio Icon"
									width={25}
									height={25}
								/>
							</a>
						</Link>
					</li>
					<li
						className="topBarListItem"
						title="Github/hayden4r4"
						id="topBarGithubIcon"
					>
						<Link href="https://github.com/hayden4r4">
							<a className="topBarListIcon">
								<Image
									src={GithubIcon}
									alt="Github Icon"
									width={25}
									height={25} // auto
								/>
							</a>
						</Link>
					</li>
					<li
						className="topBarListItem"
						title="LinkedIn"
						id="topBarLinkedInIcon"
					>
						<Link href="https://www.linkedin.com/in/hayden-rose-b5a282179/">
							<a className="topBarListIcon">
								<Image
									src={LinkedInIcon}
									alt="LinkedIn Icon"
									width={25}
									height={25} // auto
								/>
							</a>
						</Link>
					</li>
					<li
						id="topBarHeading"
						style={{
							textShadow: textShadowGenerator(
								0,
								0.1,
								0.0025,
								headerShadowColor
							),
						}}
					>
						<p>Hayden Rose</p>
					</li>
				</ul>
			</nav>
		</header>
	);
}
