/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack: function (config, options) {
		config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';
		config.experiments = { asyncWebAssembly: true, layers: true };
		return config;
	},
};

module.exports = nextConfig;
