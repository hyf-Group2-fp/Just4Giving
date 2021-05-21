const express = require("express");
const Goods = require("../models/Goods.js");

// initialize express
const app = express();

// get a good by id , same for all table 
app.get("/user/goods/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const good = await Goods.findOne({
      where: {
        giver_id: id,
      }
    });
    if (good === null) {
      return res.status(404).json({
        message: `nothing found`
      })
    } else {
      return res.status(200).json({
        message: "success",
        good: good
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("server error")
  }
});

module.exports = app;