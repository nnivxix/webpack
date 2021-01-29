const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry:"./src/index.js",
	output:{
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	mode: "production",
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
		},
		// babel preset
		{
			test:/\.js$/,
			exclude:"/node_modules",
			use:[
			{
				loader:"babel-loader",
				options: {
					presets: ["@babel/preset-env"]
				}
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