const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry:"./src/index.js",
	output:{
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
		// perset but membuat css
		{
			test: /\.css$/,
			use: [
			{
				loader: "style-loader"
			},
			{
				loader: "css-loader"
			}
			]
		}
		]
	},
	plugins:[
	//plugin untuk membuat file html saat perintah build dipanggil
	new HtmlWebpackPlugin({
		template:"./src/index.html",
		filename:"index.html"
	})
	]
};