const { Sequelize } = require("sequelize");
const sequelize = require("../db/db.js");


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
        categories_image:{
            type:Sequelize.STRING(255),
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    },
    {
        tableName: "categories",
    }
);


module.exports = Categories;