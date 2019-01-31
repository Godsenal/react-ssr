const express = require("express");
const template = require("./dist/template");

const app = express();

const initialState = {
  greeting: "Hello! My first server side rendering app"
};

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(template.default(initialState));
});

app.listen(3000, () => {
  console.log("Server start");
});
