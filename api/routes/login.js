const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const withAuth = require('../middleware');
const User = require('../models/User');
var bcrypt = require('bcrypt');
const cors = require('cors');
//validation
const {
  registerValidation
} = require('../utils/registerValidation')

const {
  JWT_SECRET
} = require('../config');

const app = express();

app.get('/secret', withAuth, function (req, res) {
  res.send('You are visiting a protected page.');
});

app.post('/authenticate', async (req, res) => {
  const {
    email,
    password
  } = req.body;

  let user = null;
  //validation
  const {
    error
  } = registerValidation(req.body);

  try {
    user = await User.findOne({
      where: {
        email
      }
    });
  } catch (e) {
    res.status(401).send('no access').end();
  }
  //no user found
  if (!user || error) {
    res.status(401).send('no access').end();
  }

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

      res.cookie('token', token, { maxAge: 3600000, httpOnly: true });

      //send token and data
      res.status(200).json({
        token,
        user
      });

    }

    //password is not correct
    else {
      res.status(401).send('no access').end();
    }
  });
});

app.get('/checkToken', withAuth, async function (req, res) {
  if (res.locals.authenticated_user) {
    const user = await User.findOne({
      where: {
        email: res.locals.authenticated_user
      }
    });

    res.status(200).json({
      user
    });
  } else {
    res.status(500);
  }

});

app.post('/logout', function (req, res) {
  res.cookie('token', '', { maxAge: 0, httpOnly: true });
  res.status(200).json();
});



module.exports = app;