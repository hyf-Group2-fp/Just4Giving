const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const withAuth = require('../middleware');
const User = require('../models/User');
const  bcrypt = require('bcrypt');
const cors = require('cors');

// import the secret token
const {   JWT_SECRET} = require('../config');



const app = express();
app.use(cors());

app.get('/secret', withAuth, function (req, res) {
  res.send('You are visiting a protected page.');
});


app.post('/authenticate', async (req, res) => {
  const {
    email,
    password
  } = req.body;

  let user = null;

  try {

    user = await User.findOne({
      where: {email:email}
    });

    res.status(200).send({user:user}) ;

  } catch (err) {
    // stop further execution in this callback 401
    res.status(401).send('unAuthorized!!').end();
  }

  //no user
  if (!user) {
    /*
    email does not exist
    maybe redirect to a route
    res.status(401).location('/foo').end();

    */
    res.status(401).send('Invalid Email or password!!').end();
  }


  const  isValidPassword = function (userPass, password) {

    return bcrypt.compareSync(password, userPass);

  }
  /*
  confront
  password from the request
  ser.password from the response
  */

  bcrypt.compare(password, user.password, function (err, isValid) {
    if (isValid) {

      // Issue token
      const mail = user.email;
      const payload = {
        mail: mail
      };

      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1h'
      });
      //send token and data
      res.status(200).json({
        token,
        user
      });

    }

    //password is not correct
    else {
      res.status(401).send('invalid Email or password!!').end();
    }
  });

});

app.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
});


module.exports = app;