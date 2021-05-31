const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

var allowedOrigins = ['http://localhost:3000']

const app = express();
app.use(cors({
  credentials: true,
  origin: function(origin, callback){
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use('/', require('./routes/home.js'));
app.use('/', require('./routes/login.js'));
app.use('/', require('./routes/signup.js'));
app.use('/', require('./routes/tags.js'));
app.use('/', require('./routes/categories.js'));
app.use('/', require('./routes/goodsformany.js'));
app.use('/', require('./routes/signupneeder.js'));
app.use('/', require('./routes/good.js'));
app.use('/', require('./routes/goods.js'));
app.use('/', require('./routes/deletegood.js'));
app.use('/', require('./routes/updategood.js'));
app.use('/', require('./routes/getGoods.js'));
app.use('/', require('./routes/goods.js'));
app.use('/', require('./routes/getGiver.js'));
app.use('/', require('./routes/sendEmail.js'));
app.use("/", require("./routes/upload.js"));
app.use("/", require("./routes/uploadtest.js"));

module.exports = app;
