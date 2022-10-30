import textShadowGenerator from "../Utilities/TextEffects";
import * as PropTypes from "../Utilities/PropTypes";

export default function AboutBody({
	headerShadowColor,
}: PropTypes.TopBarProps) {
	return (
		<div id="aboutBody">
            <h1 id="aboutHeader">
                About
            </h1>
        </div>
    );
}