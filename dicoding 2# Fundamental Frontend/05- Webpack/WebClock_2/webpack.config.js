//NB : Sudah tidak digunakan lagi karena development
// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
//
// module.exports = {
//   entry : "./src/index.js",
//   output: {
//     path : path.resolve(__dirname, "dist"),
//     filename : "bundle.js"
//   },
//   mode : "production",
//   module : {
//     rules : [
//       {
//         // css loader dan style loader
//         test : /\.css$/,
//         use : [
//           {
//             loader : "style-loader"
//           },
//           {
//             loader : "css-loader"
//           }
//         ]
//       },
//       {
//       // babel loader
//       test : /\.js$/,
//       exclude : "/node_modules/",
//       use : [
//           {
//             loader : "babel-loader",
//             options : {
//               presets : ["@babel/preset-env"]
//             }
//           }
//         ]
//       }
//
//     ]
//   },
//   // plugin
//   plugins : [
//     // Html webpack plugin
//     new HtmlWebpackPlugin({
//       template : "./src/template.html",
//       filename : "index.html"
//     })
//   ]
// }
