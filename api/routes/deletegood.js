const express = require("express");
const Goods = require("../models/Goods.js");
// initialize express
const app = express();
// delete good
app.delete("/goods/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await Goods.destroy({
            where: {
                goods_id: id,
            }
        });
        res.status(200).send(`the goods with the id : ${id} has been deleted `);
    } catch (err) {
        console.error(err);
    }
});
module.exports = app;