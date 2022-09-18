import Link from "next/link";

export default function NavigationMenu({
	hamburgerMenuOpen,
}: NavigationMenuProps) {
	return (
		<nav className={`navigationMenu ${hamburgerMenuOpen ? "showMenu" : ""}`}>
			<ul className="navigationMenuList">
                <li className="navigationMenuListItem">
                    <Link href="/blackscholes" title="Black Scholes Calculator">
                        <a className="navigationMenuLink">📈 Black Scholes Calc</a>
                    </Link>
                </li>



                <li className="navigationMenuListItem">
                    <Link href="/about" title="About">
                        <a className="navigationMenuLink">❔ About</a>
                    </Link>
                </li>
            </ul>
		</nav>
	);
}

type NavigationMenuProps = {
	hamburgerMenuOpen: boolean;
};
