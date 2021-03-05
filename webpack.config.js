const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	watch: true,
	resolve: {
		fallback: {
			util: require.resolve('util/'),
			path: require.resolve('path-browserify'),
			crypto: require.resolve('crypto-browserify'),
			buffer: require.resolve('buffer/'),
			https: require.resolve('https-browserify'),
			url: require.resolve('url/'),
		},
	},
};
