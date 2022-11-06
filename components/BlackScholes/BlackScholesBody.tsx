import Link from "next/link";
import { useState, FormEvent } from "react";

import textShadowGenerator from "../Utilities/TextEffects";
import * as PropTypes from "../Utilities/PropTypes";
import * as blackscholes from "blackscholes";

export default function BlackScholesBody({
	headerShadowColor,
}: PropTypes.TopBarProps) {
	const [selectedCalcType, setSelectedCalcType] = useState("price_greeks");

	function handleSelectedCalcType(event: any) {
		setSelectedCalcType(event.target.value);
	}

	function showFields(calcType: string) {
		switch (calcType) {
			case "price_greeks":
				return (
					<>
						<label className="blackScholesFormLabel" htmlFor="volatility">
							Volatility %
						</label>
						<input
							className="blackScholesFormInput"
							type="number"
							id="volatility"
							name="volatility"
							pattern="^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$"
							title="Must be a numerical volatility value as %"
							step="any"
							required
						/>
					</>
				);

			case "volatility":
				return (
					<>
						<label className="blackScholesFormLabel" htmlFor="optionPrice">
							Option Price
						</label>
						<input
							className="blackScholesFormInput"
							type="number"
							id="optionPrice"
							name="optionPrice"
							pattern="^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$"
							title="Must be a numerical option price"
							step="any"
							required
						/>
					</>
				);
		}
	}

	type Result = {
		calcType: string;
		result: ResultPriceGreeks | ResultVolatility;
	};

	type ResultPriceGreeks = {
		optionPrice: number;
		delta: number;
		gamma: number;
		theta: number;
		vega: number;
		rho: number;
		[key: string]: any;
	};

	type ResultVolatility = {
		volatility: number;
		[key: string]: any;
	};

	const [blackScholesResult, setBlackScholesResult] = useState({} as Result);

	const HandleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;

		const optionType =
			form.optionType.value === "call"
				? blackscholes.OptionType.Call
				: blackscholes.OptionType.Put;

		var inputs: blackscholes.Inputs = new blackscholes.Inputs(
			optionType,
			form.securityPrice.value as number,
			form.strikePrice.value as number,
			undefined,
			(form.rfRate.value as number) / 100.0,
			(form.dividendYield.value as number) / 100.0,
			(form.timeToMaturity.value as number) / 365.25,
			undefined
		);

		const calcType: string = form.calcType.value;

		switch (calcType) {
			case "price_greeks":
				inputs.sigma = (form.volatility.value as number) / 100;
				const resultPriceGreeks: ResultPriceGreeks = {
					optionPrice: blackscholes.Price.calc_price(inputs),
					delta: blackscholes.Greeks.calc_delta(inputs),
					gamma: blackscholes.Greeks.calc_gamma(inputs),
					theta: blackscholes.Greeks.calc_theta(inputs),
					vega: blackscholes.Greeks.calc_vega(inputs),
					rho: blackscholes.Greeks.calc_rho(inputs),
				};
				const result: Result = {
					calcType: calcType,
					result: resultPriceGreeks,
				};
				setBlackScholesResult(result);
				break;
			case "volatility":
				inputs.p = form.optionPrice.value as number;
				const resultVolatility: ResultVolatility = {
					volatility: blackscholes.Volatility.calc_iv(inputs, 0.0001) * 100,
				};
				const result2: Result = {
					calcType: calcType,
					result: resultVolatility,
				};
				setBlackScholesResult(result2);
				break;
		}
	};

	function getBlackScholesResult() {
		if (blackScholesResult === ({} as Result)) {
			return <></>;
		} else {
			switch (blackScholesResult.calcType) {
				case "price_greeks":
					return (
						<>
							<ul id="blackScholesResultList">
								<li id="blackScholesResultListItem">
									Option Price: {blackScholesResult.result.optionPrice}
								</li>
								<li id="blackScholesResultListItem">
									Delta: {blackScholesResult.result.delta}
								</li>
								<li id="blackScholesResultListItem">
									Gamma: {blackScholesResult.result.gamma}
								</li>
								<li id="blackScholesResultListItem">
									Theta: {blackScholesResult.result.theta}
								</li>
								<li id="blackScholesResultListItem">
									Vega: {blackScholesResult.result.vega}
								</li>
								<li id="blackScholesResultListItem">
									Rho: {blackScholesResult.result.rho}
								</li>
							</ul>
						</>
					);
				case "volatility":
					return (
						<>
							<ul id="blackScholesResultList">
								<li id="blackScholesResultListItem">
									Volatility: {blackScholesResult.result.volatility}%
								</li>
							</ul>
						</>
					);
			}
		}
	}

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
			<form id="blackScholesForm" onSubmit={HandleSubmit}>
				<label className="blackScholesFormLabel" htmlFor="calcType">
					Calculation Type
				</label>
				<select
					name="calcType"
					className="blackScholesFormInput dropdown"
					value={selectedCalcType}
					onChange={handleSelectedCalcType}
				>
					<option value="price_greeks">Option Price & Greeks</option>
					<option value="volatility">Volatility (IV%)</option>
				</select>
				<label className="blackScholesFormLabel" htmlFor="optionType">
					Option Type
				</label>
				<select name="optionType" className="blackScholesFormInput dropdown">
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
					pattern="^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$"
					title="Must be a numerical strike price"
					step="any"
					required
				/>
				<label className="blackScholesFormLabel" htmlFor="securityPrice">
					Security Price
				</label>
				<input
					className="blackScholesFormInput"
					type="number"
					id="securityPrice"
					name="securityPrice"
					pattern="^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$"
					title="Must be a numerical security price"
					step="any"
					required
				/>

				{showFields(selectedCalcType)}

				<label className="blackScholesFormLabel" htmlFor="rfRate">
					Risk-Free Rate %
				</label>
				<input
					className="blackScholesFormInput"
					type="number"
					id="rfRate"
					name="rfRate"
					pattern="^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$"
					title="Must be a numerical risk-free rate as %"
					step="any"
					required
				/>
				<label className="blackScholesFormLabel" htmlFor="timeToMaturity">
					Time to Maturity (Days)
				</label>
				<input
					className="blackScholesFormInput"
					type="number"
					id="timeToMaturity"
					name="timeToMaturity"
					pattern="^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$"
					title="Must be a numerical value of days to maturity"
					step="any"
					required
				/>
				<label className="blackScholesFormLabel" htmlFor="dividendYield">
					Dividend Yield %
				</label>
				<input
					className="blackScholesFormInput"
					type="number"
					id="dividendYield"
					name="dividendYield"
					pattern="^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$"
					title="Must be a numerical dividend yield as %"
					step="any"
					required
				/>
				<br></br>
				<input
					className="blackScholesFormInput"
					type="submit"
					id="blackScholesFormCalculate"
					value="Calculate"
				/>
			</form>
			<div id="blackScholesResult">{getBlackScholesResult()}</div>
		</div>
	);
}
