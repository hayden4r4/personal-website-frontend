import textShadowGenerator from "../Utilities/TextEffects";

import * as PropTypes from "../Utilities/PropTypes";

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
                    <h2 className="porfolioGridProjectName">Project1</h2>
                </div>
				<div className="portfolioGridItem">
                    <h2 className="porfolioGridProjectName">Project2</h2>
                </div>
				<div className="portfolioGridItem">
                    <h2 className="porfolioGridProjectName">Project3</h2>
                </div>
			</div>
		</div>
	);
}
