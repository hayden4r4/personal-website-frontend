import Link from "next/link";

import * as PropTypes from "../Utilities/PropTypes";

export default function NavigationMenu({
	hamburgerMenuOpen,
	hamburgerMenuRef,
}: PropTypes.NavigationMenuProps) {
	return (
		<nav
			ref={hamburgerMenuRef}
			className={`navigationMenu ${hamburgerMenuOpen ? "showMenu" : ""}`}
		>
			<ul className="navigationMenuList">
				<li className="navigationMenuListItem">
					<Link href="/optioncalculator" title="Option Calculator">
						<a
							className="navigationMenuLink"
							title="Option Calculator using Black-Scholes or Black76"
						>
							Option Calculator
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
