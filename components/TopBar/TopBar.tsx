import TopBarLinks from "./TopBarLinks";

import * as PropTypes from "../Utilities/PropTypes"

export default function TopBar({ headerShadowColor }: PropTypes.TopBarProps) {
	return (
		<div className="topBarDiv">
			<TopBarLinks headerShadowColor={ headerShadowColor } />
		</div>
	);
}
