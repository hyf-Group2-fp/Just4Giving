const { Sequelize, Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../db/db.js");

const Categories = require("./Categories");

const Tags = sequelize.define(
  "tags",
  {
    tags_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    tag_name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    // time stamp
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    tableName: "tags",
  }
);

// foreign keys

Categories.hasMany(Tags, {
  as: "tags",
  foreignKey: "category_id",
});

Tags.belongsTo(Categories, {
  as: "categories",
  foreignKey: "category_id",
});

module.exports = Tags;
