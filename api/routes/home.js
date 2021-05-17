const express = require("express");

const app = express();

/**
 * Just a simple test endpoint to demo how to test with Jest
 **/
app.get("/home", function (req, res) {
  res.send("Hello World!!");
});

module.exports = app;
