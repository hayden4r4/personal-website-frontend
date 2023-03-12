import { useState, FormEvent } from "react";

import textShadowGenerator from "../Utilities/TextEffects";
import * as PropTypes from "../Utilities/PropTypes";

export default function OptionCalcBody({
	headerShadowColor,
}: PropTypes.TopBarProps) {
	const FormulaType = Object.freeze({
		BlackScholes: 0,
		Black76: 1,
	});

	function showFormulaTypeFields(formulaType: any) {
		switch (Number(formulaType)) {
			case FormulaType.BlackScholes:
				return (
					<>
						<label className="optionCalcFormLabel" htmlFor="dividendYield">
							Dividend Yield %
						</label>
						<input
							className="optionCalcFormInput"
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
		switch (Number(calcType)) {
			case CalcType.PriceGreeks:
				return (
					<>
						<label className="optionCalcFormLabel" htmlFor="Volatility">
							Volatility %
						</label>
						<input
							className="optionCalcFormInput"
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
						<label className="optionCalcFormLabel" htmlFor="optionPrice">
							Option Price
						</label>
						<input
							className="optionCalcFormInput"
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

	const [optionCalcResult, setOptionCalcResult] = useState<Result>(
		{} as Result
	);

	const clearOptionCalcResult = () => {
		setOptionCalcResult({} as Result);
	};

	function handleFormulaType(event: any) {
		clearOptionCalcResult();
		setSelectedFormulaType(Number(event.target.value));
	}

	function handleCalcType(event: any) {
		clearOptionCalcResult();
		setSelectedCalcType(Number(event.target.value));
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
						<li id="optionCalcResultListItem">
							Epsilon:
							{Number(optionCalcResult.result.greeks.epsilon.toFixed(4))}
						</li>
					</>
				);
		}
	}

	const HandleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;

		async function getInputs(formulaType: number) {
			switch (formulaType) {
				case FormulaType.BlackScholes:
					const bsinputs = await import("@haydenr4/blackscholes_wasm").then(
						(bs) => {
							const optionType =
								form.optionType.value == OptionType.call
									? bs.OptionType.Call
									: bs.OptionType.Put;

							return new bs.Inputs(
								optionType,
								Number(form.securityPrice.value),
								Number(form.strikePrice.value),
								undefined,
								Number(form.rfRate.value) / 100.0,
								Number(form.dividendYield.value) / 100.0,
								Number(form.timeToMaturity.value) / 365.25,
								undefined
							);
						}
					);
					return bsinputs;

				case FormulaType.Black76:
					const b76inputs = await import("@haydenr4/black76_wasm").then(
						(b76) => {
							const optionType2 =
								form.optionType.value == OptionType.call
									? b76.OptionType.Call
									: b76.OptionType.Put;

							return new b76.Inputs(
								optionType2,
								Number(form.securityPrice.value),
								Number(form.strikePrice.value),
								undefined,
								Number(form.rfRate.value) / 100.0,
								Number(form.timeToMaturity.value) / 365.25,
								undefined
							);
						}
					);
					return b76inputs;
			}
		}

		switch (selectedCalcType) {
			case CalcType.PriceGreeks:
				const inputs1 = await getInputs(selectedFormulaType);
				inputs1!.sigma = Number(form.Volatility.value) / 100.0;

				const resultPriceGreeks: ResultPriceGreeks = {
					optionPrice: inputs1!.calc_price(),
					greeks: JSON.parse(inputs1!.calc_all_greeks()),
				};

				const result: Result = {
					calcType: Number(selectedCalcType),
					result: resultPriceGreeks,
				};
				setOptionCalcResult(result);

				break;

			case CalcType.Volatility:
				const inputs2 = await getInputs(selectedFormulaType);
				inputs2!.p = Number(form.optionPrice.value);
				const resultVolatility: ResultVolatility = {
					volatility: inputs2!.calc_iv(0.01) * 100.0,
				};
				const result2: Result = {
					calcType: Number(selectedCalcType),
					result: resultVolatility,
				};
				setOptionCalcResult(result2);
				break;
		}
	};

	function getOptionCalcResult() {
		if (optionCalcResult === ({} as Result)) {
			return <></>;
		} else {
			switch (optionCalcResult.calcType) {
				case CalcType.PriceGreeks:
					return (
						<>
							<ul id="optionCalcResultList">
								<li id="optionCalcResultListItem">
									Option Price:{" "}
									{Number(optionCalcResult.result.optionPrice.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Delta:{" "}
									{Number(optionCalcResult.result.greeks.delta.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Gamma:{" "}
									{Number(optionCalcResult.result.greeks.gamma.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Theta:{" "}
									{Number(optionCalcResult.result.greeks.theta.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Vega: {Number(optionCalcResult.result.greeks.vega.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Rho: {Number(optionCalcResult.result.greeks.rho.toFixed(4))}
								</li>
								{showEpsilon(selectedFormulaType)}
								<li id="optionCalcResultListItem">
									Lambda:{" "}
									{Number(optionCalcResult.result.greeks.lambda.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Vanna:{" "}
									{Number(optionCalcResult.result.greeks.vanna.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Charm:{" "}
									{Number(optionCalcResult.result.greeks.charm.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Veta: {Number(optionCalcResult.result.greeks.veta.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Vomma:{" "}
									{Number(optionCalcResult.result.greeks.vomma.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Speed:{" "}
									{Number(optionCalcResult.result.greeks.speed.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Zomma:{" "}
									{Number(optionCalcResult.result.greeks.zomma.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Color:{" "}
									{Number(optionCalcResult.result.greeks.color.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Ultima:{" "}
									{Number(optionCalcResult.result.greeks.ultima.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Dual Delta:
									{Number(optionCalcResult.result.greeks.dual_delta.toFixed(4))}
								</li>
								<li id="optionCalcResultListItem">
									Dual Gamma:{" "}
									{Number(optionCalcResult.result.greeks.dual_gamma.toFixed(4))}
								</li>
							</ul>
						</>
					);
				case CalcType.Volatility:
					return (
						<>
							<ul id="optionCalcResultList">
								<li id="optionCalcResultListItem">
									Volatility:{" "}
									{Number(optionCalcResult.result.volatility.toFixed(4))}%
								</li>
							</ul>
						</>
					);
			}
		}
	}

	return (
		<div id="optionCalcBody">
			<h1
				id="optionCalcHeader"
				style={{
					textShadow: textShadowGenerator(0, 0.1, 0.0025, headerShadowColor),
				}}
			>
				Option Calculator
			</h1>
			<form id="optionCalcForm" onSubmit={HandleSubmit}>
				<label className="optionCalcFormLabel" htmlFor="formulaType">
					Formula
				</label>
				<select
					name="formulaType"
					className="optionCalcFormInput dropdown"
					value={selectedFormulaType}
					onChange={handleFormulaType}
				>
					<option value={FormulaType.BlackScholes}>Black Scholes</option>
					<option value={FormulaType.Black76}>Black 76</option>
				</select>
				<label className="optionCalcFormLabel" htmlFor="calcType">
					Calculation Type
				</label>
				<select
					name="calcType"
					className="optionCalcFormInput dropdown"
					value={selectedCalcType}
					onChange={handleCalcType}
				>
					<option value={CalcType.PriceGreeks}>Option Price & Greeks</option>
					<option value={CalcType.Volatility}>Volatility (IV%)</option>
				</select>
				<label className="optionCalcFormLabel" htmlFor="optionType">
					Option Type
				</label>
				<select
					name="optionType"
					className="optionCalcFormInput dropdown"
					onChange={clearOptionCalcResult}
				>
					<option value={OptionType.call}>Call</option>
					<option value={OptionType.put}>Put</option>
				</select>
				<label className="optionCalcFormLabel" htmlFor="strikePrice">
					Strike Price
				</label>
				<input
					className="optionCalcFormInput"
					type="number"
					id="strikePrice"
					name="strikePrice"
					pattern="^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$"
					title="Must be a numerical strike price"
					step="any"
					required
				/>
				<label className="optionCalcFormLabel" htmlFor="securityPrice">
					Security Price
				</label>
				<input
					className="optionCalcFormInput"
					type="number"
					id="securityPrice"
					name="securityPrice"
					pattern="^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$"
					title="Must be a numerical security price"
					step="any"
					required
				/>

				{showCalcTypeFields(selectedCalcType)}

				<label className="optionCalcFormLabel" htmlFor="rfRate">
					Risk-Free Rate %
				</label>
				<input
					className="optionCalcFormInput"
					type="number"
					id="rfRate"
					name="rfRate"
					pattern="^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$"
					title="Must be a numerical risk-free rate as %"
					step="any"
					required
				/>
				<label className="optionCalcFormLabel" htmlFor="timeToMaturity">
					Time to Maturity (Days)
				</label>
				<input
					className="optionCalcFormInput"
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
					className="optionCalcFormInput"
					type="submit"
					id="optionCalcFormCalculate"
					value="Calculate"
				/>
			</form>
			<div id="optionCalcResult">{getOptionCalcResult()}</div>
		</div>
	);
}
