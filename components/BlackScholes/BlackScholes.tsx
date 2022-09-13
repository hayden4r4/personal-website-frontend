// // import * as blackscholes from "../../wasm/blackscholes/pkg";
import dynamic from "next/dynamic";
// import * as blackscholes from "blackscholes";

// // export default function BlackScholes() {
// // 	const inputs: blackscholes.Inputs = new blackscholes.Inputs(
// // 		blackscholes.OptionType.Call,
// // 		100.0,
// // 		100.0,
// // 		1200.0,
// // 		0.05,
// // 		0.2,
// // 		12.0
// // 	);
// // 	// const price: number = blackscholes.Price.calc_price(inputs);
// // 	const clicker = () => {
// // 		console.log(blackscholes.Greeks.calc_delta(inputs));
// // 	};
// // 	return (
// // 		<div>
// // 			<button onClick={clicker}>click me</button>
// // 		</div>
// // 	);
// // }

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
