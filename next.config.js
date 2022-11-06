/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: function (config, options) {
		if (options.isServer) {
			config.output.webassemblyModuleFilename =
				"./../static/wasm/[modulehash].wasm";
		} else {
			config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";
		}
		config.experiments = { asyncWebAssembly: true, layers: true };
		return config;
	},
};

module.exports = nextConfig;
