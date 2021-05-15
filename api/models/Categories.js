const { Sequelize, Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../db/db.js");
const Goods = require("./Goods.js");
class Categories extends Model {
  constructor({ category_id, category_name }) {
    super();
    this.category_id = category_id;
    this.category_name = category_name;
  }
}

Categories.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Categories",
  }
);

// foreign keys

// Goods.hasOne(Categories, {
//   as: "categories",
//   foreignKey: "category_id",
// });

module.exports = Categories;
