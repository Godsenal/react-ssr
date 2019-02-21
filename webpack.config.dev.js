const path = require("path");
const webpack = require("webpack");
const clientConfig = {
  name: "client",
  mode: "development",
  entry: ["webpack-hot-middleware/client", "./client/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "client.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};

module.exports = clientConfig;
