const express = require("express");
const Goods = require("../models/Goods.js");

// initialize express
const app = express();

app.put("/goods/:id", async (req, res) => {
  try {
    res.send(`good id put ${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});



// app.put("/goods", (req, res) => {
//   const id =req.body.id;
//   const good = req.body.good;

//   db.query("UPDATE category SET good = ? WHERE id = ?",
//   [good, id],
//   (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send (result);
//     }
//   }
//  );
// })

module.exports = app;

