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
			<h1
				id="blackScholesHeader"
				style={{
					textShadow: textShadowGenerator(0, 0.1, 0.0025, headerShadowColor),
				}}
			>
				Black Scholes Calculator
			</h1>
			<form id="blackScholesForm">
				<label className="blackScholesFormLabel" htmlFor="calcType">
					Calculation Type
				</label>
				<select name="calcType" className="blackScholesFormInput dropdown">
					<option value="price">Price</option>
					<option value="greeks">Greeks</option>
					<option value="volatility">Volatility (IV%)</option>
				</select>
				<label className="blackScholesFormLabel" htmlFor="optionType">
					Option Type
				</label>
				<select name="calcType" className="blackScholesFormInput dropdown">
					<option value="call">Call</option>
					<option value="put">Put</option>
				</select>

				<label className="blackScholesFormLabel" htmlFor="strikePrice">
					Strike Price
				</label>
				<input
					className="blackScholesFormInput"
					type="number"
					id="strikePrice"
					name="strikePrice"
				/>
				<label className="blackScholesFormLabel" htmlFor="securityPrice">
					Security Price
				</label>
				<input
					className="blackScholesFormInput"
					type="number"
					id="securityPrice"
					name="securityPrice"
				/>
				<label className="blackScholesFormLabel" htmlFor="rfRate">
					Risk-Free Rate %
				</label>
				<input
					className="blackScholesFormInput"
					type="number"
					id="rfRate"
					name="rfRate"
				/>
				<label className="blackScholesFormLabel" htmlFor="volatility">
					Volatility %
				</label>
				<input
					className="blackScholesFormInput"
					type="number"
					id="volatility"
					name="volatility"
				/>
				<label className="blackScholesFormLabel" htmlFor="timeToMaturity">
					Time to Maturity (Years)
				</label>
				<input
					className="blackScholesFormInput"
					type="number"
					id="timeToMaturity"
					name="timeToMaturity"
				/>
				<label className="blackScholesFormLabel" htmlFor="dividendYield">
					Dividend Yield %
				</label>
				<input
					className="blackScholesFormInput"
					type="number"
					id="dividendYield"
					name="dividendYield"
				/>
				<label className="blackScholesFormLabel" htmlFor="optionPrice">
					Option Price
				</label>
				<input
					className="blackScholesFormInput"
					type="number"
					id="optionPrice"
					name="optionPrice"
				/>
				<br></br>
				<input
					className="blackScholesFormInput"
					type="submit"
					id="blackScholesFormCalculate"
					value="Calculate"
				/>
			</form>
		</div>
	);
}
