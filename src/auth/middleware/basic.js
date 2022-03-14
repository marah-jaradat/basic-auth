// "use strict";

const bcrypt = require("bcrypt");
const base64 = require("base-64");
const Users = require("../models/users-model");
require("dotenv").config();

// async function basicAuth(req, res, next) {
//   if (req.headers["authorization"]) {
//     let basicHeaderParts = req.headers.authorization.split(" ");
//     // console.log(basicHeaderParts);

//     let encodedPart = basicHeaderParts.pop();
//     console.log(encodedPart);

//     let decoded = base64.decode(encodedPart);
//     console.log(decoded);

//     let [username, password] = decoded.split(":");
//     // console.log('username');
//     try {
//       const User = await Users.findOne({ where: { username: username } });
//       const valid = await bcrypt.compare(password, User.password);
//       if (valid) {
//         req.User = User;
//         next();
//       } else {
//         res.send("user is not valid");
//         next("user is not valid");
//       }
//     } catch (error) {
//       next(error.message);
//     }
//   }
// }

function basicAuth(req, res, next) {
  const encodedHeaders = req.headers.authorization.split(" ")[1]; // "Basic dGFtaW06cGl6emE="
  const [username, password] = base64.decode(encodedHeaders).split(":"); // spread operator

  Users.authenticateBasic(username, password)
    .then((validUser) => {
      req.user = validUser;
      next();
    })
    .catch((err) => {
      next("Invalid Login");
    });
}

module.exports = basicAuth;
