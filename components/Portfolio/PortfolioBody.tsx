import Link from "next/link";
import Image from "next/image";

import textShadowGenerator from "../Utilities/TextEffects";
import * as PropTypes from "../Utilities/PropTypes";
import BSCode from "../../public/static/images/BSCode.png";

export default function PortfolioBody({
	headerShadowColor,
}: PropTypes.TopBarProps) {
	return (
		<div id="portfolioBody">
			<h1
				id="portfolioGridHeader"
				style={{
					textShadow: textShadowGenerator(0, 0.1, 0.0025, headerShadowColor),
				}}
			>
				Projects
			</h1>
			<div id="portfolioGrid">
				<div className="portfolioGridItem">
					<h2 className="portfolioGridProjectName">Project1</h2>
				</div>
				<div className="portfolioGridItem">
					<Link href="https://github.com/hayden4r4/blackscholes-rust">
						<div
							className="portfolioGridItemBody"
							title="Github/hayden4r4/blackscholes-rust"
						>
							<h2 className="portfolioGridProjectName">
								Black-Scholes Calculator
							</h2>

							<h4 className="portfolioGridLangDate">Rust 🦀 | 2022</h4>
							<p className="portfolioGridProjectDescription">
								An implementation of the Black-Scholes option pricing model in
								Rust.
							</p>
							<Image
								src={BSCode}
								alt="Black-Scholes Calculator Code Screenshot"
							></Image>
						</div>
					</Link>
				</div>
				<div className="portfolioGridItem">
					<h2 className="portfolioGridProjectName">Project3</h2>
				</div>
			</div>
		</div>
	);
}
