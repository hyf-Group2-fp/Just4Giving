const express = require("express");
const GoodsForMany = require("../models/GoodsForMany");

// initialize express
const app = express();

app.post("/goodsformany", async (req, res) => {
  const { goods_id, needer_id } = req.body;

  try {
    const name = await GoodsForMany.create({
      goods_id,
      needer_id,
    });
    console.log(name);
    res
      .status(200)
      .send(`a good for a needer  : ${needer_id} has been created!`);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

module.exports = app;

// just
