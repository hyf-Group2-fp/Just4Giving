const express = require("express");
const Goods = require("../models/Goods.js");

// initialize express
const app = express();

app.put("/goods/:id", async (req, res) => {
  try {
    res.send(`good put ${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

module.exports = app;

app.use("/", require("./routes/updategood.js"));