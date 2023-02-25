import React, { useState, useEffect, useRef } from "react";
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
import TwitterIcon from "../../public/static/icons/Twitter.png";
import InstagramIcon from "../../public/static/icons/Instagram.png";

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

	const hamburgerMenuRef = useRef(null);

	function useOutsideAlerter(ref: any) {
		useEffect(() => {
			/**
			 * Alert if clicked on outside of element
			 */
			function handleClickOutside(event: any) {
				if (ref.current && !ref.current.contains(event.target)) {
					setHamburgerMenuState((hamburgerMenuOpen = false));
				}
			}
			// Bind the event listener
			document.addEventListener("mousedown", handleClickOutside);
			document.addEventListener("touchstart", handleClickOutside);
			return () => {
				// Unbind the event listener on clean up
				document.removeEventListener("mousedown", handleClickOutside);
				document.removeEventListener("touchstart", handleClickOutside);
			};
		}, [ref]);
	}

	useOutsideAlerter(hamburgerMenuRef);

	return (
		<div id="topBar">
			<NavigationMenu
				hamburgerMenuOpen={hamburgerMenuOpen}
				hamburgerMenuRef={hamburgerMenuRef}
			/>
			<header className={`topBarHeader ${hamburgerMenuOpen ? "showMenu" : ""}`}>
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
									<Image
										src={HomeIcon}
										alt="Home Icon"
										width={25}
										height={25}
									/>
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
							className="topBarListItem"
							title="Twitter/haydenr4"
							id="topBarTwitterIcon"
						>
							<Link href="https://twitter.com/haydenr4">
								<a className="topBarListIcon">
									<Image
										src={TwitterIcon}
										alt="Twitter Icon"
										width={25}
										height={25} // auto
									/>
								</a>
							</Link>
						</li>
						<li
							className="topBarListItem"
							title="Instagram/hayden.rose4"
							id="topBarInstagramIcon"
						>
							<Link href="https://www.instagram.com/hayden.rose4/">
								<a className="topBarListIcon">
									<Image
										src={InstagramIcon}
										alt="Instagram Icon"
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
		</div>
	);
}
