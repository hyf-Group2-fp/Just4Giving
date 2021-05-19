const express = require("express");
const Goods = require("../models/Goods.js");

// initialize express
const app = express();

// update good
app.put('/goods/:id' , async (req,res) => {
  const id = req.params.id ;
  const item_name = req.body.item_name ;
  try {
    const updatedGood = await Goods.update({item_name:item_name},{
      where:{
        goods_id:id ,
      }
    }) ;
    res.status(200).send(`the goods with the id : ${id} has been updated`)
  }catch (err) {
    console.error(err);
  }
});

module.exports = app;

