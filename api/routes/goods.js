const express = require("express");
const Goods = require("../models/Goods.js");

// initialize express
const app = express();
// post
app.post("/goods", async (req, res) => {
  const {
    giver_id,
    item_name,
    category,
    description,
    image,
    quality,
    quantity,
    available,
    taken,
    owner_id,
    category_id,
  } = req.body;

  try {
    const name = await Goods.create({
      giver_id,
      item_name,
      category,
      description,
      image,
      quality,
      quantity,
      available,
      taken,
      owner_id,
      category_id,
    });
    console.log(name);
    res.status(200).send(`a new user : ${giver_id} has been created!`);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});



module.exports = app;
