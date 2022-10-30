import Link from "next/link";

import * as blackscholes from "blackscholes";

import textShadowGenerator from "../Utilities/TextEffects";
import * as PropTypes from "../Utilities/PropTypes";

export function BlackScholesCalc() {
	const inputs: blackscholes.Inputs = new blackscholes.Inputs(
		blackscholes.OptionType.Call,
		100.0,
		100.0,
		undefined,
		0.05,
		0.2,
		12.0,
		0.2
	);
	const price: number = blackscholes.Price.calc_price(inputs);
	// const clicker = () => {
	console.log(price);
	// };
	return (
		<div>
			{/* <button onClick={clicker} style={{ fontSize: "50px", width: "20px", height: "20px", zIndex: 100, color: "green", marginTop: "100px"}}>click me</button> */}
		</div>
	);
}

export default function BlackScholesBody({
	headerShadowColor,
}: PropTypes.TopBarProps) {
	return (
		<div id="blackScholesBody">
			<h1 id="blackScholesHeader">Black Scholes Calculator</h1>
		</div>
	);
}
