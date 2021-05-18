const express = require("express");
const GoodsForMany = require("../models/GoodsForMany");

// initialize express
const app = express();

app.post("/goodsformany", async (req, res) => {
    const {
        needer_id,
        goods_id,
    } = req.body;

    try {
        const name = await GoodsForMany.create({
            needer_id,
            goods_id,
        });
        console.log(name);
        res.status(200).send(`a new user : ${needer_id} has been created!`);
    } catch (err) {
        console.error(err);
        res.status(500).send("server error");
    }
});

module.exports = app;
