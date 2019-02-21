require("@babel/register")();

const express = require("express");
const webpack = require("webpack");
const path = require("path");
const template = require("./server/template");
const webpackConfig = require("./webpack.config.dev.js");
const compiler = webpack(webpackConfig);

const app = express();

const initialState = {
  greeting: "Hello! My first server side rendering app"
};

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: "/"
  })
);
app.use(require("webpack-hot-middleware")(compiler, { reload: true }));

app.get("/", (req, res) => {
  res.send(template.default(initialState));
});

app.listen(3000, () => {
  console.log("Server start");
});
