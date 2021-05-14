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
    if (err.errors) {
      switch (err.errors[0].path) {
        case "category_id":
          res
            .status(401)
            .send("please make sure the category_id is added and is correct!");
          break;
        case "category_name":
          res
            .status(401)
            .send("please make sure the category_nam is added and is correct!");
          break;
      }
    }

    res.status(500).send("server error!");
  }
});

module.exports = app;

// just
