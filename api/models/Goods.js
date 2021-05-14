const { Sequelize, Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../db/db.js");
const User = require("./User.js");
const Tags = require("./Tags");

class Goods extends Model {
  constructor({
    goods_id,
    giver_id,
    item_name,
    category,
    description,
    image,
    quality,
    quantity,
    available,
    taken,
    owner_id,
    category_id,
  }) {
    super();
    this.goods_id = goods_id;
    this.giver_id = giver_id;
    this.item_name = item_name;
    this.category = category;
    this.description = description;
    this.image = image;
    this.quality = quality;
    this.quantity = quantity;
    this.available = available;
    this.taken = taken;
    this.owner_id = owner_id;
    this.category_id = category_id;
  }
}

Goods.init(
  {
    goods_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    giver_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    item_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      default: "Good",
    },
    quality: {
      type: DataTypes.INTEGER,
      max: 5,
      min: 0,
    },
    quantity: {
      type: DataTypes.INTEGER,
      max: 100,
      min: 1,
    },
    available: {
      type: DataTypes.TINYINT,
      max: 1,
      min: 0,
    },
    taken: {
      type: DataTypes.TINYINT,
      max: 1,
      min: 0,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    sequelize,
    modelName: "goods",
  }
);

// foreign keys

User.hasOne(Goods, {
  // as: "goods",
  foreignKey: "giver_id",
});

User.hasOne(Goods, {
  as: "goods",
  foreignKey: "owner_id",
});

module.exports = Goods;
