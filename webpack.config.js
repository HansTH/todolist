const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	// webpack will take the files from ./src/index.tsx
	entry: './src/index.tsx',

	// and output it into /dist as bundle.js
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},

	// adding .ts and .tsx extensions will help babel look for .ts and .tsx files to transpile
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},

	module: {
		rules: [
			{
				// use babel-loader to load our jsx and tsx files
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},

			// css-loader to bundle all the css files into one file,
			// style-loader will add all the styles  inside the style tag of the document
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		// webpack add a script tag with the source pointing to out bundle.js,
		// and use the custom index.html template we created.
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
};
