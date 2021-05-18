const { Sequelize } = require("sequelize");
const sequelize = require("../db/db.js");
const User = require("./User.js");
const Goods = require("./Goods.js");

const GoodsForMany = sequelize.define(
    "goodsformany",
    {
        goodformany_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        goods_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        needer_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    },
    {
        tableName: "goodsformany",
    }
);

// foreign keys

// one to one goods and goodsForMany

Goods.hasOne(GoodsForMany, {
    as: "goodsformany",
    foreignKey: "goods_id",
});

// one to many user to goodsForMany

User.hasMany(GoodsForMany, {
    as:"goodformany",
    foreignKey:"needer_id",
})
module.exports = GoodsForMany;