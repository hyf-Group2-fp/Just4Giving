const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const withAuth = require('../middleware');
const User = require('../models/User');
var bcrypt = require('bcrypt');
const cors = require('cors');

const {
  JWT_SECRET
} = require('../config');

const app = express();
app.use(cors());

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/home', function (req, res) {
//   res.send('Welcome!');
// });

app.get('/secret', withAuth, function (req, res) {
  res.send('You are visiting a protected page.');
});

// app.post('/register', async (req, res) => {
//   const {email, password} = req.body;
//   //const user = new User({email, password});

//   try {
//     await user.save();
//   } catch (e) {
//     res.sendStatus(500)
//     return;
//   }

//   res.sendStatus(200);
// });

app.post('/authenticate', async (req, res) => {
  const {
    email,
    password
  } = req.body;

  let user = null;

  try {
    user = await User.findOne({
      where: {
        email
      }
    });
  } catch (e) {
    // stop further execution in this callback
    //send 401
    res.status(401).send('no access').end();
  }
  //no user found
  if (!user) {
    /*email does not exist
    maybe redirect to a route
    res.status(401).location('/foo').end();*/
    res.status(401).send('no access').end();
  }

  var isValidPassword = function (userpass, password) {

    return bcrypt.compareSync(password, userpass);

  }
  //password from the request
  //user.password from the response

  bcrypt.compare(password, user.password, function (err, isValid) {
    if (isValid) {
      res.send(user);
      // Issue token
      const payload = {email};

        const token = jwt.sign(payload, JWT_SECRET, {
              expiresIn: '1h'
            });

            res.cookie('token', token, {httpOnly: true}).sendStatus(200);
    }

    //password is not correct
    else {
      res.status(401).send('no access').end();
    }
  });
});

app.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
});

module.exports = app;