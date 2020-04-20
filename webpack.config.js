const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index.bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: [".js", ".jsx"],
				},
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new ExtractTextPlugin("dist/styles/main.css", {
			allChunks: true,
		}),
	],
};
