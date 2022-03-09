"use strict";

require("dotenv").config();
// const bcrypt = require("bcrypt");

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

//   Users.authenticateBasic = async function (username, password) {
//     try {
//       const user = await Users.findOne({ where: { username: username } });
//       const valid = await bcrypt.compare(password, user.passward);
//       if (valid) {
//         res.status(200).json({ username: username });
//       } else {
//         res.send("user is not valid");
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
//   return UsersMo;
// };
module.exports = Users;
