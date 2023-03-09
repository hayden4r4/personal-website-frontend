import { useState, useEffect, FormEvent } from "react";

import textShadowGenerator from "../Utilities/TextEffects";
import * as PropTypes from "../Utilities/PropTypes";
import * as blackscholes from "@haydenr4/blackscholes_wasm";
import * as black76 from "@haydenr4/black76_wasm";

export default function BlackScholesBody({
	headerShadowColor,
}: PropTypes.TopBarProps) {
	const FormulaType = Object.freeze({
		BlackScholes: 0,
		Black76: 1,
	});

	function showFormulaTypeFields(formulaType: any) {
		switch (+formulaType) {
			case FormulaType.BlackScholes:
				return (
					<>
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
					</>
				);

			// case FormulaType.Black76:
		}
	}

	const CalcType = Object.freeze({
		PriceGreeks: 0,
		Volatility: 1,
	});

	function showCalcTypeFields(calcType: any) {
		switch (+calcType) {
			case CalcType.PriceGreeks:
				return (
					<>
						<label className="blackScholesFormLabel" htmlFor="Volatility">
							Volatility %
						</label>
						<input
							className="blackScholesFormInput"
							type="number"
							id="Volatility"
							name="Volatility"
							pattern="^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$"
							title="Must be a numerical Volatility value as %"
							step="any"
							required
						/>
					</>
				);

			case CalcType.Volatility:
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

	const [selectedFormulaType, setSelectedFormulaType] = useState<number>(
		FormulaType.BlackScholes
	);

	const [selectedCalcType, setSelectedCalcType] = useState<number>(
		CalcType.PriceGreeks
	);

	const [blackScholesResult, setBlackScholesResult] = useState<Result>({} as Result);

	const clearBlackScholesResult = () => {
		setBlackScholesResult({} as Result);
	};

	function handleFormulaType(event: any) {
		clearBlackScholesResult();
		setSelectedFormulaType(event.target.value);
	}

	function handleCalcType(event: any) {
		clearBlackScholesResult();
		setSelectedCalcType(event.target.value);
	}

	type Result = {
		calcType: number;
		result: ResultPriceGreeks | ResultVolatility;
	};

	type ResultPriceGreeks = {
		optionPrice: number;
		greeks: any;
		[key: string]: any;
	};

	type ResultVolatility = {
		volatility: number;
		[key: string]: any;
	};

	const OptionType = Object.freeze({
		call: 0,
		put: 1,
	});

	function showEpsilon(formulaType: any) {
		switch (+formulaType) {
			case FormulaType.BlackScholes:
				return (
					<>
						<li id="blackScholesResultListItem">
							Epsilon:{+blackScholesResult.result.greeks.epsilon.toFixed(4)}
						</li>
					</>
				);
		}
	}

	const HandleSubmit = (event: FormEvent) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;

		function getInputs(formulatType: number) {
			
			switch (selectedFormulaType) {
				case FormulaType.BlackScholes:
					const optionType =
						form.optionType.value == OptionType.call
							? blackscholes.OptionType.Call
							: blackscholes.OptionType.Put;

					console.log(selectedFormulaType);
					console.log("Black scholes:" + FormulaType.BlackScholes);
					console.log(optionType);
					
					var inputs: blackscholes.Inputs | black76.Inputs =
						new blackscholes.Inputs(
							optionType,
							form.securityPrice.value as number,
							form.strikePrice.value as number,
							undefined,
							(form.rfRate.value as number) / 100.0,
							(form.dividendYield.value as number) / 100.0,
							(form.timeToMaturity.value as number) / 365.25,
							undefined
						);
					
					break;

				case FormulaType.Black76:
					const optionType2 =
						form.optionType.value == OptionType.call
							? black76.OptionType.Call
							: black76.OptionType.Put;

					var inputs2: blackscholes.Inputs | black76.Inputs = new black76.Inputs(
						optionType2,
						form.securityPrice.value as number,
						form.strikePrice.value as number,
						undefined,
						(form.rfRate.value as number) / 100.0,
						(form.timeToMaturity.value as number) / 365.25,
						undefined
					);
					break;
			}
			return inputs!;
		}

		switch (selectedCalcType) {
			case CalcType.PriceGreeks:
				const inputs1 = getInputs(selectedFormulaType);
				inputs1.sigma = (form.Volatility.value as number) / 100;
				
				const resultPriceGreeks: ResultPriceGreeks = {
					optionPrice: inputs1.calc_price(),
					greeks: JSON.parse(inputs1.calc_all_greeks()),
				};
				
				const result: Result = {
					calcType: Number(selectedCalcType),
					result: resultPriceGreeks,
				};
				setBlackScholesResult(result);
				
				break;

			case CalcType.Volatility:
				const inputs2 = getInputs(selectedFormulaType);
				inputs2.p = form.optionPrice.value as number;
				const resultVolatility: ResultVolatility = {
					volatility: inputs2.calc_iv(0.0001) * 100,
				};
				const result2: Result = {
					calcType: Number(selectedCalcType),
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
				case CalcType.PriceGreeks:
					return (
						<>
							<ul id="blackScholesResultList">
								<li id="blackScholesResultListItem">
									Option Price:{" "}
									{+blackScholesResult.result.optionPrice.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Delta: {+blackScholesResult.result.greeks.delta.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Gamma: {+blackScholesResult.result.greeks.gamma.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Theta: {+blackScholesResult.result.greeks.theta.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Vega: {+blackScholesResult.result.greeks.vega.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Rho: {+blackScholesResult.result.greeks.rho.toFixed(4)}
								</li>
								{showEpsilon(selectedFormulaType)}
								<li id="blackScholesResultListItem">
									Lambda: {+blackScholesResult.result.greeks.lambda.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Vanna: {+blackScholesResult.result.greeks.vanna.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Charm: {+blackScholesResult.result.greeks.charm.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Veta: {+blackScholesResult.result.greeks.veta.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Vomma: {+blackScholesResult.result.greeks.vomma.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Speed: {+blackScholesResult.result.greeks.speed.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Zomma: {+blackScholesResult.result.greeks.zomma.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Color: {+blackScholesResult.result.greeks.color.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Ultima: {+blackScholesResult.result.greeks.ultima.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Dual Delta:{" "}
									{+blackScholesResult.result.greeks.dual_delta.toFixed(4)}
								</li>
								<li id="blackScholesResultListItem">
									Dual Gamma:{" "}
									{+blackScholesResult.result.greeks.dual_gamma.toFixed(4)}
								</li>
							</ul>
						</>
					);
				case CalcType.Volatility:
					return (
						<>
							<ul id="blackScholesResultList">
								<li id="blackScholesResultListItem">
									Volatility: {+blackScholesResult.result.volatility.toFixed(4)}
									%
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
				Option Calculator
			</h1>
			<form id="blackScholesForm" onSubmit={HandleSubmit}>
				<label className="blackScholesFormLabel" htmlFor="formulaType">
					Formula
				</label>
				<select
					name="formulaType"
					className="blackScholesFormInput dropdown"
					value={selectedFormulaType}
					onChange={handleFormulaType}
				>
					<option value={FormulaType.BlackScholes}>Black Scholes</option>
					<option value={FormulaType.Black76}>Black 76</option>
				</select>
				<label className="blackScholesFormLabel" htmlFor="calcType">
					Calculation Type
				</label>
				<select
					name="calcType"
					className="blackScholesFormInput dropdown"
					value={selectedCalcType}
					onChange={handleCalcType}
				>
					<option value={CalcType.PriceGreeks}>Option Price & Greeks</option>
					<option value={CalcType.Volatility}>Volatility (IV%)</option>
				</select>
				<label className="blackScholesFormLabel" htmlFor="optionType">
					Option Type
				</label>
				<select
					name="optionType"
					className="blackScholesFormInput dropdown"
					onChange={clearBlackScholesResult}
				>
					<option value={OptionType.call}>Call</option>
					<option value={OptionType.put}>Put</option>
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

				{showCalcTypeFields(selectedCalcType)}

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

				{showFormulaTypeFields(selectedFormulaType)}

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
