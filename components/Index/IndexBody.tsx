import textShadowGenerator from "../Utilities/TextEffects";
import * as PropTypes from "../Utilities/PropTypes";

export default function IndexBody({
	headerShadowColor,
}: PropTypes.TopBarProps) {
	return (
		<div className="indexBody">
			<div className="indexBodyWelcome">
				<h1
					id="indexBodyWelcomeText"
					style={{
						textShadow: textShadowGenerator(0, 0.1, 0.0025, headerShadowColor),
					}}
				>
					Welcome!
				</h1>
			</div>
		</div>
	);
}
