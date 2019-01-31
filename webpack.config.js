const path = require("path");
const clientConfig = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "client.js"
  },
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
const serverConfig = {
  entry: "./server/template.js",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "template.js",
    libraryTarget: "commonjs"
  },
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

module.exports = [clientConfig, serverConfig];
