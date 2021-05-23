const express = require("express");
const Tags = require("../models/Tags.js");

// initialize express
const app = express();

app.post("/tags", async (req, res) => {
  const { category_id, tag_name } = req.body;

  try {
    const name = await Tags.create({
      category_id,
      tag_name,
    });
    console.log(name);
    res.status(200).send(`a category  : ${tag_name} has been created!`);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

module.exports = app;


