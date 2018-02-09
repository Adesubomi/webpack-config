const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin(path.join('css', 'main.css'));

module.exports = {
	entry: {
        index: './src/index.js'
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{test: /\.scss/, use: extractPlugin.extract(['css-loader', 'sass-loader']) }
		]
	},
    plugins: [
        extractPlugin
    ]
};
