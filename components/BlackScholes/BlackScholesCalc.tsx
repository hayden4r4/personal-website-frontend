// // import * as blackscholes from "../../wasm/blackscholes/pkg";
// import dynamic from "next/dynamic";
import * as blackscholes from "blackscholes";

export default function BlackScholesCalc() {
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

// export default function BlackScholes() {
// 	const WasmComponent = dynamic({
// 		loader: async () => {
// 		  const bs = await import("../../wasm/blackscholes/pkg/blackscholes_bg.wasm")
// 		  const inputs = new blackscholes.Inputs(blackscholes.OptionType.Call, 100.0, 100.0, 1200.0, 0.05, 0.2, 12.0);

// 		  return () => {
// 		  	<div>
// 				Adding two numbers: {bs.inputs_new}
// 			</div>
// 		  }
// 		},
// 	  })
	
	
	
// 	return (
// 		<div>
			
// 		</div>
// 	);
// }
