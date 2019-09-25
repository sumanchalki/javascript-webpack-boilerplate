const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    port: 3000 // Overriding default port 8080
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3) Inject styles into DOM.
          "css-loader", // 2) Turns css into commonjs.
          "sass-loader" // 1. Turns sass into css.
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ]
});
