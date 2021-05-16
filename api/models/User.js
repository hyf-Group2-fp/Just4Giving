const { cryptPassword } = require("../utils/encryption");
const { Sequelize } = require("sequelize");
const sequelize = require("../db/db.js");
const bcrypt = require("bcrypt");

const User = sequelize.define(
    "user",
    {
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        last_name: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING(50),
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        street: {
            type: Sequelize.STRING(255),
            allowNull: true,
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING(50),
            allowNull: true,
        },
        age: {
            type: Sequelize.INTEGER,
            validate: {
                max: 120,
                min: 18,
            },
        },
        is_needer: {
            type: Sequelize.BOOLEAN,
            max: 1,
            min: 0,
            allowNull: false,
        },
        is_giver: {
            type: Sequelize.BOOLEAN,
            max: 1,
            min: 0,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        agreement: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            validate: {
                max: 1,
                min: 1,
            },
        },

        // time stamp
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    },
    {
        tableName: "users",
    }
);

User.beforeCreate((user, options) => {
    return cryptPassword(user.password)
        .then((success) => {
            user.password = success;
        })
        .catch((err) => {
            if (err) console.log(err);
        });
});

module.exports = User;