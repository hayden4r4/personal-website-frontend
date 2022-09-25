import Link from "next/link";

import * as PropTypes from "../Utilities/PropTypes";

export default function NavigationMenu({
	hamburgerMenuOpen,
}: PropTypes.NavigationMenuProps) {
	return (
		<nav className={`navigationMenu ${hamburgerMenuOpen ? "showMenu" : ""}`}>
			<ul className="navigationMenuList">
				<li className="navigationMenuListItem">
					<Link href="/blackscholes" title="Black Scholes Calculator">
						<a
							className="navigationMenuLink"
							title="Option Pricer using Black-Scholes"
						>
							Option Pricer
						</a>
					</Link>
				</li>

				<li className="navigationMenuListItem">
					<Link href="/about">
						<a className="navigationMenuLink" title="About This Site">
							About
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
}


