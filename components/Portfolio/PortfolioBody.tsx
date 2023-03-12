import Link from "next/link";
import Image from "next/image";

import textShadowGenerator from "../Utilities/TextEffects";
import * as PropTypes from "../Utilities/PropTypes";

import BSCode from "../../public/static/images/CodeScreenshots/BSCode.png";
// import BS76Code from "../../public/static/images/CodeScreenshots/BS76Code.png";
import PersonalWebsiteCode from "../../public/static/images/CodeScreenshots/PersonalWebsiteCode.png";
import CNNCatDogCode from "../../public/static/images/CodeScreenshots/CNNCatDogCode.png";
import GEXCode from "../../public/static/images/CodeScreenshots/GEXCode.png";
import DIXCode from "../../public/static/images/CodeScreenshots/DIXCode.png";
import DDNSCode from "../../public/static/images/CodeScreenshots/DDNSCode.png";
import DeltaGammaHedgerCode from "../../public/static/images/CodeScreenshots/DeltaGammaHedgerCode.png";
import ERC20LoanCode from "../../public/static/images/CodeScreenshots/ERC20LoanCode.png";

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
							<h2 className="portfolioGridProjectName">
								Personal Website Frontend
							</h2>

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
					<Link href="https://github.com/hayden4r4/black76-rust">
						<div
							className="portfolioGridItemBody"
							title="Github/hayden4r4/black76-rust"
						>
							<h2 className="portfolioGridProjectName">
								Black76 Calculator
							</h2>

							<h4 className="portfolioGridLangDate">Rust 🦀 | 2022</h4>
							<p className="portfolioGridProjectDescription">
								An implementation of the Black76 option pricing model in
								Rust
							</p>
							<Image
								src={BSCode}
								alt="Black76 Calculator Code Screenshot"
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
							<h2 className="portfolioGridProjectName">Gamma Exposure (GEX)</h2>

							<h4 className="portfolioGridLangDate">Python 🐍 | 2022</h4>
							<p className="portfolioGridProjectDescription">
								A python script to calculate the Gamma Exposure for an optional
								product using TDAmeritrade for data
							</p>
							<Image
								src={GEXCode}
								alt="GEX Code Screenshot"
								quality={100}
								placeholder="blur"
							></Image>
						</div>
					</Link>
				</div>
				<div className="portfolioGridItem">
					<Link href="https://github.com/hayden4r4/DIX-python">
						<div
							className="portfolioGridItemBody"
							title="Github/hayden4r4/DIX-python"
						>
							<h2 className="portfolioGridProjectName">Dark Index (DIX)</h2>

							<h4 className="portfolioGridLangDate">Python 🐍 | 2022</h4>
							<p className="portfolioGridProjectDescription">
								A python script to calculate the Dark Index using FINRA dark
								pool data
							</p>
							<Image
								src={DIXCode}
								alt="DIX Code Screenshot"
								quality={100}
								placeholder="blur"
							></Image>
						</div>
					</Link>
				</div>
				<div className="portfolioGridItem">
					<Link href="https://github.com/hayden4r4/rust-cloudflare-ddns">
						<div
							className="portfolioGridItemBody"
							title="Github/hayden4r4/rust-cloudflare-ddns"
						>
							<h2 className="portfolioGridProjectName">
								Cloudflare DDNS Updater
							</h2>

							<h4 className="portfolioGridLangDate">Rust 🦀 | 2022</h4>
							<p className="portfolioGridProjectDescription">
								Updates IP address of a domain in cloudflare for use as DDNS
								address
							</p>
							<Image
								src={DDNSCode}
								alt="Cloudflare DDNS Updater Code Screenshot"
								quality={100}
								placeholder="blur"
							></Image>
						</div>
					</Link>
				</div>
				<div className="portfolioGridItem">
					<Link href="https://github.com/hayden4r4/Delta-Gamma-Hedger">
						<div
							className="portfolioGridItemBody"
							title="Github/hayden4r4/Delta-Gamma-Hedger"
						>
							<h2 className="portfolioGridProjectName">Delta Gamma Hedger</h2>

							<h4 className="portfolioGridLangDate">Python 🐍 | 2021</h4>
							<p className="portfolioGridProjectDescription">
								Dynamically hedges the delta of a given option(s) to remain
								delta neutral. Uses TDAmeritrade for both data and orders
							</p>
							<Image
								src={DeltaGammaHedgerCode}
								alt="Delta Gamma Hedger Code Screenshot"
								quality={100}
								placeholder="blur"
							></Image>
						</div>
					</Link>
				</div>
				<div className="portfolioGridItem">
					<Link href="https://github.com/hayden4r4/ERC20-Loan">
						<div
							className="portfolioGridItemBody"
							title="Github/hayden4r4/ERC20-Loan"
						>
							<h2 className="portfolioGridProjectName">ERC20 Loan Contract</h2>

							<h4 className="portfolioGridLangDate">Solidity 🪙 | 2021</h4>
							<p className="portfolioGridProjectDescription">
								A full-featured permissionless balloon payment loan smart
								contract built on Ethereum
							</p>
							<Image
								src={ERC20LoanCode}
								alt="ERC20 Loan Contract Code Screenshot"
								quality={100}
								placeholder="blur"
							></Image>
						</div>
					</Link>
				</div>
				<div className="portfolioGridItem">
					<Link href="https://github.com/hayden4r4?tab=repositories">
						<div
							className="portfolioGridItemBody"
							title="Github/hayden4r4/repositories"
						>
							<h2 className="portfolioGridProjectName">See more on Github ↗</h2>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
