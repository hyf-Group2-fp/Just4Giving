const { Sequelize } = require("sequelize");
const sequelize = require("../db/db.js");
const User = require("./User.js");
const Categories = require("./Categories");

const Goods = sequelize.define(
    "goods",
    {
        goods_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        giver_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        item_name: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        category: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        image: {
            type: Sequelize.STRING,
            defaultValue: "good image",
        },
        quality: {
            type: Sequelize.STRING
        },
        quantity: {
            type: Sequelize.INTEGER,
            max: 100,
            min: 1,
        },
        available: {
            type: Sequelize.INTEGER,
            max: 1,
            min: 0,
        },
        taken: {
            type: Sequelize.INTEGER,
            max: 1,
            min: 0,
        },
        owner_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    },
    {
        tableName: "goods",
    }
);

// foreign keys one to one user and goods

User.hasOne(Goods, {
    as: "goods",
    foreignKey: "giver_id",
});

User.hasOne(Goods, {
    as: "good",
    foreignKey: "owner_id",
});

// one to many categories and goods

Categories.hasMany(Goods,{
    as:"categories",
    foreignKey:"category_id",
})

module.exports = Goods;
