const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output:{
        publicPath: "/",
        path: path.join(__dirname,"public"),

    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",

        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react","@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ],
    },

    devServer: {
        port: 3000,
        historyApiFallback: true,
    },

}