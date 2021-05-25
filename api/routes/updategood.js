const express = require("express");
const Goods = require("../models/Goods.js");

// initialize express
const app = express();

// update good
app.put('/goods/:id' , async (req,res) => {
  const id = req.params.id ;
  const item_name = req.body.item_name;
  const category_name = req.body.category;
  const category_id = req.body.category_id;
  const giver_id = req.body.giver_id;
  const description = req.body.description;
  const image = req.body.image;
  const quality = req.body.quality;
  const quantity = req.body.quantity;
  const available = req.body.available;
  const taken = req.body.taken;
  const owner_id = req.body.owner_id;
  
  try {
    const updatedGood = await Goods.update(
      {
        item_name:item_name,
        category: category_name,
        category_id: category_id,
        giver_id: giver_id,
        description: description,
        image: image,
        quality: quality,
        quantity: quantity,
        available: available,
        taken: taken,
        owner_id: owner_id
      },{
      where:{
        goods_id:id ,
      }
    }) ;
    res.status(200).send(`the goods with the id : ${id} has been updated`)
  }catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

module.exports = app;

