const express = require("express");
const User = require("../models/User.js");
const cors = require('cors');

// initialize express
const app = express();
app.use(cors());

app.post("/giver/signup", async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    street,
    phone,
    age,
    is_giver,
    is_needer,
    description,
    agreement,
  } = req.body;

    try {
        const name = await User.create({
            first_name,
            last_name,
            email,
            password,
            street,
            phone,
            age,
            is_giver,
            is_needer,
            description,
            agreement,
        });
        console.log(name);
        res.status(200).send(
            `a new user : ${first_name} ${last_name} has been created!`
        );
    } catch (err) {
        console.error(err.message);
        //401 or 403: user already exists
        res.status(401).send("password or email are not valid");
        //res.status(500).send("server error");
    }
});


module.exports = app;

// just

