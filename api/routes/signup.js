const express = require("express");
const User = require("../models/User.js");

// initialize express
const app = express();


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
    res
      .status(200)
      .send(`a new user : ${first_name} ${last_name} has been created!`);
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

module.exports = app;

// just
