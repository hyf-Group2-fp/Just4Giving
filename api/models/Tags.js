const { Sequelize, Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../db/db.js");
const Categories = require("./Categories.js");

class Tags extends Model {
  constructor({ category_id, tag_name }) {
    super();
    this.category_id = category_id;
    this.tag_name = tag_name;
  }
}

Tags.init(
  {
    tags_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: "categories",
      referencesKey: "id",
    },
    tag_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "tags",
  }
);

// foreign keys

Categories.hasMany(Tags);

// Categories.hasMany(Tags, {
//   as: "tags",
//   foreignKey: "category_id",
// });

// Tags.belongsTo(Categories, {
//   as: "categories",
//   foreignKey: "category_id",
// });

module.exports = Tags;
