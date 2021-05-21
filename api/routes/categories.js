const express = require("express");
const Categories = require("../models/Categories");

// initialize express
const app = express();

//create a new category
app.post("/categories", async (req, res) => {
  const {
    category_name
  } = req.body;

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

//get all the categories
app.get("/categories", async (req, res) => {
  try {
    const categories = await Categories.findAll();
    console.log(categories);
    res.status(200).send(categories);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

//get a single category
app.get("/categories/:id", async (req, res) => {
  const id = req.params.id
  try {
    const category = await Categories.findOne({
      where: {
        categories_id: id
      }
    });
    console.log(category);
    res.status(200).send(category);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

//get a single category
app.delete("/categories/:id", async (req, res) => {
  const id = req.params.id
  try {
    const category = await Categories.destroy({
      where: {
        categories_id: id
      }
    });
    res.status(200).send(`category deleted`);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

// update category
app.put('/categories/:id' , async (req,res) => {
  const id = req.params.id ;
  const category_name = req.body.category_name ;
  try {
    const updatedCategory = await Categories.update({category_name: category_name},{
      where:{
        categories_id:id
      }
    }) ;
    res.status(200).send(`${category_name} has been updated`)
  }catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

module.exports = app;