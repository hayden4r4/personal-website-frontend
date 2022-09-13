import Link from "next/link";

export default function NavigationMenu({
	hamburgerMenuOpen,
}: NavigationMenuProps) {
	return (
		<nav className={`navigationMenu ${hamburgerMenuOpen ? "showMenu" : ""}`}>
			<ul className="navigationMenuList">
                <li className="navigationMenuListItem">
                    <Link href="/BlackScholes" title="Black Scholes Calculator" className="navigationMenuLink">📈 Black Scholes</Link>
                </li>



                <li className="navigationMenuListItem">
                    <Link href="/About" title="About" className="navigationMenuLink">❔ About</Link>
                </li>
            </ul>
		</nav>
	);
}

type NavigationMenuProps = {
	hamburgerMenuOpen: boolean;
};
