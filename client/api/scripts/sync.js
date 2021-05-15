const { TestScheduler } = require("jest");
const sequelize = require("../db/db.js");
const User = require("../models/User.js");

const User = require("../models/User"); // done!!
const Categories = require("../models/Categories"); //done!!

const Tags = require("../models/Tags");
// const GoodsForMany = require("../models/GoodsForMany");
// const Goods = require("../models/Goods");

const createTables = async () => {
  const result = await sequelize.sync({ force: true });
};

createTables().then(() => {
  process.exit();
});
