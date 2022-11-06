import Link from "next/link";
import { useState, FormEvent } from "react";

import textShadowGenerator from "../Utilities/TextEffects";
import * as PropTypes from "../Utilities/PropTypes";

export default function BlackScholesBody({
	headerShadowColor,
}: PropTypes.TopBarProps) {
	const [selectedCalcType, setSelectedCalcType] = useState("price_greeks");
	const [blackScholesResult, setBlackScholesResult] = useState("");

	function handleSelectedCalcType(event: any) {
		setSelectedCalcType(event.target.value);
	}

	function handleBlackScholesResult(value: string) {
		setBlackScholesResult(value);
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

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;

		var data = {
			calcType: form.calcType.value as string,
			optionType: form.optionType.value as string,
			s: form.securityPrice.value as number,
			k: form.strikePrice.value as number,
			p: 0,
			r: form.rfRate.value as number / 100.0,
			q: form.dividendYield.value as number / 100.0,
			t: form.timeToMaturity.value as number / 365.25,
			sigma: 0,
		};

		switch (form.calcType.value) {
			case "price_greeks":
				data.sigma = form.volatility.value as number / 100;
				break
			case "volatility":
				data.p = form.optionPrice.value as number;
				break
		}

		const response = await fetch("/api/blackScholes", {
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const result = await response.json();
		handleBlackScholesResult(result.data);
	};

	function getBlackScholesResult() {
		if (blackScholesResult === "") {
			return <></>;
		} else {
			const bsResultJson = JSON.parse(blackScholesResult)
			switch (bsResultJson.calcType) {
				case "price_greeks":
					return (
						<>
							<ul id="blackScholesResultList">
								<li id="blackScholesResultListItem">Option Price: {bsResultJson.result.optionPrice}</li>
								<li id="blackScholesResultListItem">Delta: {bsResultJson.result.delta}</li>
								<li id="blackScholesResultListItem">Gamma: {bsResultJson.result.gamma}</li>
								<li id="blackScholesResultListItem">Theta: {bsResultJson.result.theta}</li>
								<li id="blackScholesResultListItem">Vega: {bsResultJson.result.vega}</li>
								<li id="blackScholesResultListItem">Rho: {bsResultJson.result.rho}</li>
							</ul>
						</>
					);
				case "volatility":
					return (
						<>
							<ul id="blackScholesResultList">
								<li id="blackScholesResultListItem">Volatility: {bsResultJson.result.volatility}</li>
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
			<form id="blackScholesForm" onSubmit={handleSubmit}>
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
			<div id="blackScholesResult">
				{getBlackScholesResult()}
			</div>
		</div>
	);
}
