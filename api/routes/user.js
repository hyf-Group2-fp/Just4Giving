const express = require("express");
const User = require("../models/User.js");

// initialize express
const app = express();

app.post("/signup", async (req, res) => {
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
    if (err.errors) {
      switch (err.errors[0].path) {
        case "first_name":
          res
            .status(401)
            .send("please make sure the first name is added and is correct!");
          break;
        case "last_name":
          res
            .status(401)
            .send("please make sure the first name is added and is correct!");
          break;
        case "password":
          res
            .status(401)
            .send("please make sure the password  is added and is correct!");
          break;
        case "email":
          res
            .status(401)
            .send("please make sure the email  is added and unique!");
          break;
      }
    }

    res.status(500).send("server error!");
  }
});

module.exports = app;

// just
