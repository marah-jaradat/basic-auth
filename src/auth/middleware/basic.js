// "use strict";

const bcrypt = require("bcrypt");
const base64 = require("base-64");
const express = require("express");
// const app = express();
const { Users } = require("../models/users-model");
require("dotenv").config();
const { db } = require("../models/indexmodel.js");

// async function basicAuth(req, res, next) {
//   if (req.headers["authorization"]) {
//     let basHeaderPar = req.headers.authorization.split(" ");

//     let encodedPart = basHeaderPar.pop();

//     let decodedPar = base64.decode(encodedPart);

//     let [username, password] = decodedPar.split(":");
//     try {
//       const user = await Users.findOne({ where: { username: username } });

//       const validPass = await bcrypt.compare(password, user.password);
//       if (validPass) {
//         // req.user = user;
//         next();
//       } else {
//         next("user is not valid");
//         // res.send("user is not valid");
//       }
//     } catch (error) {
//       next(error);
//       // res.send(error);
//     }
//   }
// }
// // const user = await Users.findOne({ where: { username: username } });
// // const valid = await bcrypt.compare(password, user.passward);
// // if (valid) {
// //   res.status(200).json({ username: username });
// // } else {
// //   res.send("user is not valid");
// // }

// module.exports = basicAuth;

// const bcrypt = require("bcrypt");
// const base64 = require("base-64");
// const { Users } = require("../models/users-model");
// const express = require("express");
// const app = express();

async function basicAuth(req, res, next) {
  if (req.headers["authorization"]) {
    let basicHeaderParts = req.headers.authorization.split(" ");

    console.log(basicHeaderParts);

    let encodedPart = basicHeaderParts.pop(); //encoded(username:password)
    console.log(encodedPart);

    let decoded = base64.decode(encodedPart); //username:password
    console.log(decoded);

    let [username, password] = decoded.split(":"); //[username: password]
    // console.log('username');
    try {
      const User = await Users.findOne({ where: { username: username } });
      const valid = await bcrypt.compare(password, User.password);
      if (valid) {
        next();
      } else {
        next("user is not valid");
      }
    } catch (error) {
      next(error.message);
    }
  }
}

module.exports = basicAuth;
