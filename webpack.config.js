const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

let config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "index.builded.js",
  },
  devServer: {
    port: 3050,
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: ["babel-loader"],
        exclude: "/node-modules",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "source-map",
  plugins: [new HtmlWebpackPlugin()],
};

module.exports = config;
