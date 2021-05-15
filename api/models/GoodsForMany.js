const { Sequelize, Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../db/db.js");
const User = require("./User.js");
const Goods = require("./Goods.js");

class GoodsForMany extends Model {
  constructor({ goodformany_id, goods_id, needer_id }) {
    super();

    this.goodformany_id = goodformany_id;
    this.goods_id = goods_id;
    this.needer_id = needer_id;
  }
}

GoodsForMany.init(
  {
    goodformany_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    goods_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    needer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  },
  {
    sequelize,
    modelName: "tags",
  }
);

// foreign keys

Goods.hasOne(GoodsForMany, {
  as: "goodsformany",
  foreignKey: "goods_id",
});

GoodsForMany.belongsTo(User, {
  as: "user",
  foreignKey: "user_id",
});

module.exports = GoodsForMany;
