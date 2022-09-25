import Link from "next/link";

export default function Footer() {
	return (
		<div id="footer">
			<div id="footerContent">
                <span id="footerMainText">
                    <p id="footerName">Hayden Rose</p>
                    <Link href="mailto:haydenrose@hayden-rose.com">
                        <a id="footerEmail">haydenrose@hayden-rose.com</a>
                    </Link>
                    <Link href="https://github.com/hayden4r4/personal_website_frontend_nextjs/tree/master">
                        <a id="footerPageSourceLink">View this page on GitHub ↗</a>
                    </Link>
                </span>
				<Link href="https://github.com/hayden4r4/personal_website_frontend_nextjs/blob/master/LICENSE.md">
					<a id="footerLicense">
						Licensed Under the GPLv3 License
					</a>
				</Link>
			</div>
		</div>
	);
}
