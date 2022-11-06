import textShadowGenerator from "../Utilities/TextEffects";
import * as PropTypes from "../Utilities/PropTypes";

export default function AboutBody({
	headerShadowColor,
}: PropTypes.TopBarProps) {
	return (
		<div id="aboutBody">
			<h1
				id="aboutHeader"
				style={{
					textShadow: textShadowGenerator(0, 0.1, 0.0025, headerShadowColor),
				}}
			>
				About this site
			</h1>
			<p id="aboutBodyText">
				This site is built using Next.js, SASS, and Rust WASM. Currently this is
				a static site but I plan to eventually build a backend for it as well.
				This site is hosted on Netlify with domain hosting by Cloudflare. The
				main intentions for this site are to show off my portfolio while also
				gaining experience with web development. Thanks for visiting!
			</p>
		</div>
	);
}
