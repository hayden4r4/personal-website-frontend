// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export {}

// No longer used, integrated into the blackscholes page so this can be done client side only


// import type { NextApiRequest, NextApiResponse } from 'next'

// import * as blackscholes from "blackscholes";

// type ResponseData = {
// 	data: string
//   }

// export default function BlackScholesCalc(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  
// 	const body = req.body

// 	const optionType = body.optionType === "call" ? blackscholes.OptionType.Call : blackscholes.OptionType.Put;

// 	var inputs: blackscholes.Inputs = new blackscholes.Inputs(
// 		optionType,
// 		body.s,
// 		body.k,
// 		undefined,
// 		body.r,
// 		body.q,
// 		body.t,
// 		undefined
// 	);

// 	type Result = {
// 		calcType: string,
// 		result: ResultPriceGreeks | ResultVolatility
// 	}

// 	type ResultPriceGreeks = {
// 		optionPrice: number,
// 		delta: number,
// 		gamma: number,
// 		theta: number,
// 		vega: number,
// 		rho: number
// 		[key: string]: any
// 	}

// 	type ResultVolatility = {
// 		volatility: number,
// 		[key: string]: any
// 	}

// 	switch (body.calcType) {
// 		case 'price_greeks':
// 			inputs.sigma = body.sigma
// 			const resultPriceGreeks: ResultPriceGreeks = {
// 				optionPrice: blackscholes.Price.calc_price(inputs),
// 				delta: blackscholes.Greeks.calc_delta(inputs),
// 				gamma: blackscholes.Greeks.calc_gamma(inputs),
// 				theta: blackscholes.Greeks.calc_theta(inputs),
// 				vega: blackscholes.Greeks.calc_vega(inputs),
// 				rho: blackscholes.Greeks.calc_rho(inputs)
// 			}
// 			const result: Result = {
// 				calcType: body.calcType,
// 				result: resultPriceGreeks
// 			}
// 			res.status(200).json({ data: `${JSON.stringify(result)}` })
// 			break

// 		case 'volatility':
// 			inputs.p = body.p
// 			const resultVolatility: ResultVolatility = {
// 				volatility: blackscholes.Volatility.calc_iv(inputs, 0.0001) * 100
// 			}
// 			const result2: Result = {
// 				calcType: body.calcType,
// 				result: resultVolatility
// 			}
// 			res.status(200).json({ data: `${JSON.stringify(result2)}` })
// 			break
// 	}
	

// }