"use strict";

require("dotenv").config();
const bcrypt = require("bcrypt");
const { sequelize, DataTypes } = require("./indexmodel");

const Users = (sequelize, DataTypes) =>
  sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = Users;
