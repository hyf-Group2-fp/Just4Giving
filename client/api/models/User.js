const { cryptPassword } = require("../utils/encryption");
const { Sequelize, Model, DataTypes, STRING } = require("sequelize");
const sequelize = require("../db/db.js");
const bcrypt = require("bcrypt");

class User extends Model {
  constructor({
    user_id,
    first_name,
    last_name,
    email,
    password,
    street,
    phone,
    age,
    is_giver,
    is_needer,
    description,
    agreement,
  }) {
    super();
    this.user_id = user_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.street = street;
    this.phone = phone;
    this.age = age;
    this.is_giver = is_giver;
    this.is_needer = is_needer;
    this.description = description;
    this.agreement = agreement;
  }

  validPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        max: 120,
        min: 18,
      },
    },
    is_needer: {
      type: DataTypes.BOOLEAN,
      max: 1,
      min: 0,
      allowNull: false,
    },
    is_giver: {
      type: DataTypes.BOOLEAN,
      max: 1,
      min: 0,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    agreement: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        max: 1,
        min: 1,
      },
    },
  },
  {
    sequelize,
    modelName: "user",
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

/**
 * tests
 * ------
 * 1- agreement must be 1
 * 2- description allows empty string should be changed || solve bu adding unique
 */
