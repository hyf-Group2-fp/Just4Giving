const express = require("express");
const Goods = require("../models/Goods.js");
//validation
const {
  goodValidation
} = require('../utils/goodValidation');


// initialize express
const app = express();

// post a new good
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

  //validation
  const {
    error
  } = goodValidation(req.body);

  if (error) {
    res.status(400).send(error.details[0].message).end();
  } else {

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
      res.status(200).send(`a new item : ${item_name} has been created!`);
    } catch (err) {
      console.error(err);
      res.status(500).send("server error");
    }
    
  }
});

//get all the goods 
app.get('/goods', async (req, res) => {
  try {
    const goods = await Goods.findAll();
    console.log(goods);
    res.status(200).send({
      goods: goods
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('something goes wrong!!');
  }
});
//get all goods of a user
app.get('/user/goods/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const goods = await Goods.findAll({
      where: {
        giver_id: id,
      }
    });
    console.log(goods);
    res.status(200).send({
      goods: goods
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('something goes wrong!!');
  }
});

//get all the goods of one category
app.get('/goods/category/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const goods = await Goods.findAll({
      where: {
        category_id: id,
      }
    });
    console.log(goods);
    res.status(200).send({
      goods: goods
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('something goes wrong!!');
  }
});
module.exports = app;