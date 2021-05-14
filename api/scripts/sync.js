const { TestScheduler } = require("jest");
const sequelize = require("../db/db.js");
const User = require("../models/User");
const Tags = require("../models/Tags");
const Categories = require("../models/Categories");
const Goods = require("../models/Goods");
const GoodsForMany = require("../models/GoodsForMany");

// create tables

const createTables = async () => {
  const result = await sequelize.sync({ force: true });
};

createTables().then(() => {
  process.exit();
});
