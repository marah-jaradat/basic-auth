"use strict";

const express = require("express");
const { Users } = require("./models/indexmodel");
const router = express.Router();
const basicAuth = require("./middleware/basic");

const bcrypt = require("bcrypt");

router.post("/signup", signUpFun);
router.post("/signin", basicAuth, signInFun);

async function signUpFun(req, res) {
  let { username, password } = req.body;
  console.log("server is up route");
  try {
    let hashedPass = await bcrypt.hash(password, 5);
    const newUser = await Users.create({
      username: username,
      password: hashedPass,
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
  }
}

async function signInFun(req, res) {
  await res.status(200).json(req.user);
}

// async function signInFun(req, res) {
//   if (req.headers["authorization"]) {
//     let basHeaderPar = req.headers.authorization.split(" ");
//     console.log(basHeaderPar);

//     let encodedPart = basHeaderPar.pop();
//     console.log(encodedPart);

//     let decodedPar = base64.decode(encodedPart);
//     let [username, password] = decoded.split(":");
//     console.log("username");

//     try {
//       const user = await Users.findOne({ where: { username: username } });
//       const valid = await bcrypt.compare(password, user.passward);
//       if (valid) {
//         res.status(200).json({ username: username });
//       } else {
//         res.send("user is not valid");
//       }
//     } catch (error) {
//       res.send(error);
//     }
//   }
// }

module.exports = router;
