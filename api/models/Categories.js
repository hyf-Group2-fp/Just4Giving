const { Sequelize } = require("sequelize");
const sequelize = require("../db/db.js");
const Goods = require("./Goods.js");

const Categories = sequelize.define(
  "categories",
  {
    categories_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    category_name: {
      type: Sequelize.STRING(50),
      allowNull: false,
      unique: true,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    tableName: "categories",
  }
);

// foreign keys

Goods.hasOne(Categories, {
  as: "categories",
  foreignKey: "category_id",
});

Categories.belongsTo(Goods, {
  as: "goods",
  foreignKey: "category_id",
});

module.exports = Categories;
