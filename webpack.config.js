const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: path.join('css', '[name].css')
});

module.exports = {
	entry: {
        index: './src/index.js',
        main: './src/main.scss'
	},
	output: {
		filename: 'js/[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{test: /\.scss/, use: extractPlugin.extract({use: ['css-loader', 'sass-loader']}) }
		]
	},
    plugins: [
        extractPlugin
    ]
};
