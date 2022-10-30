import Link from "next/link";
import Image from "next/image";

import textShadowGenerator from "../Utilities/TextEffects";
import * as PropTypes from "../Utilities/PropTypes";
import BSCode from "../../public/static/images/BSCode.png";
import PersonalWebsiteCode from "../../public/static/images/PersonalWebsiteCode.png";
import CNNCatDogCode from "../../public/static/images/CNNCatDogCode.png";

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
					<Link href="https://github.com/hayden4r4/personal-website-frontend">
						<div
							className="portfolioGridItemBody"
							title="Github/hayden4r4/personal-website-frontend"
						>
							<h2 className="portfolioGridProjectName">Personal Website Frontend</h2>

							<h4 className="portfolioGridLangDate">
								TS HTML SCSS 🕸 Rust 🦀 | 2022
							</h4>
							<p className="portfolioGridProjectDescription">
								My personal website built with Next.js, SCSS, and Rust WASM
							</p>
							<Image
								src={PersonalWebsiteCode}
								alt="Personal Website Code Screenshot"
								quality={100}
								placeholder="blur"
							></Image>
						</div>
					</Link>
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
								Rust
							</p>
							<Image
								src={BSCode}
								alt="Black-Scholes Calculator Code Screenshot"
								quality={100}
								placeholder="blur"
							></Image>
						</div>
					</Link>
				</div>
				<div className="portfolioGridItem">
					<Link href="https://github.com/hayden4r4/CNN_Cat_Dog">
						<div
							className="portfolioGridItemBody"
							title="Github/hayden4r4/CNN_Cat_Dog"
						>
							<h2 className="portfolioGridProjectName">
								TensorFlow CNN Cat Dog Model
							</h2>

							<h4 className="portfolioGridLangDate">Python 🐍 | 2022</h4>
							<p className="portfolioGridProjectDescription">
								A model trained with a CNN in TensorFlow to classify images of
								cats and dogs
							</p>
							<Image
								src={CNNCatDogCode}
								alt="CNN Cat Dog Code Screenshot"
								quality={100}
								placeholder="blur"
							></Image>
						</div>
					</Link>
				</div>
				<div className="portfolioGridItem">
					<Link href="https://github.com/hayden4r4/GEX-python">
						<div
							className="portfolioGridItemBody"
							title="Github/hayden4r4/GEX-python"
						>
							<h2 className="portfolioGridProjectName">
								Gamma Exposure (GEX)
							</h2>

							<h4 className="portfolioGridLangDate">Python 🐍 | 2022</h4>
							<p className="portfolioGridProjectDescription">
								A python script to calculate the Gamma Exposure for a given stock/future/index using TDAmeritrade for data
							</p>
							<Image
								src={CNNCatDogCode}
								alt="CNN Cat Dog Code Screenshot"
								quality={100}
								placeholder="blur"
							></Image>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
