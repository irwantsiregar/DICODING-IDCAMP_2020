const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {test: /\.css$/, use: [{loader: "style-loader"}, {loader: "css-loader"} ]},
            { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
              use: [{loader: "file-loader"}]
            },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/detail.html",
            filename: "detail.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/category.html",
            filename: "category.html"
        }),
        new CopyWebpackPlugin({
        patterns: [
            {
                from: path.resolve(__dirname, 'src/image'),
                to: path.resolve(__dirname, 'dist/image')
            }
          ]
        })

    ]
};
