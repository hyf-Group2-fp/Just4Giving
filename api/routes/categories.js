const express = require("express");
const Categories = require("../models/Categories");

// initialize express
const app = express();

app.post("/categories", async (req, res) => {
  const { category_name } = req.body;

  try {
    const name = await Categories.create({
      category_name,
    });
    console.log(name);
    res.status(200).send(`a category  : ${category_name} has been created!`);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

module.exports = app;

// just
