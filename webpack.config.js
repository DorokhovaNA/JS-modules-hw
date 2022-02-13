const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
	module: {
		rules: [
			{ 
				test: /\\.(png|jpe?g|gif|mp3)$/i,
				use: 'file-loader'
			},
			{ 
				test: /\\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{ 
				test: /\\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
                test: /\.mp3$/,
                use: ["file-loader"],
            },

	]
	},
	plugins: [
		new HtmlWebpackPlugin({template: "./index.html",}),
		new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src"),
                    to: path.resolve(__dirname, "dist"),
                },
            ],
        }),
	],
	devServer: {
        port: 8080,
        static: "./dist",
        hot: true,
    },
};