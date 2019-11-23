const path = require('path');
module.exports = {
	entry: "./asserts/js/app.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'asserts/dist'),
	},
	watch: true,
	module: {
			rules: [{
			test: require.resolve('jquery'),
			use: [{
		    	loader: 'expose-loader',
		    	options: 'jQuery'
			},{
		    	loader: 'expose-loader',
		    	options: '$'
			}]
		}]
	}
}