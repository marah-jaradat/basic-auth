// "use strict";

// const express = require("express");
// const router = express.Router();
// const base64 = require("base-64");
// const bcrypt = require("bcrypt");
// const { Users } = require("../auth/models/indexmodel");
// const basicAuth = require("../auth/middleware/basic");

// router.post("/signup", signupHandler);
// async function signupHandler(req, res) {
//   let { username, password } = req.body;
//   console.log(`${username} and ${password}`);
//   try {
//     let hashedPassword = await bcrypt.hash(password, 5);
//     console.log("after hashing >>> ", hashedPassword);
//     const newUser = await Users.create({
//       username: username,
//       password: hashedPassword,
//     });
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.log("signUp function", error);
//   }
// }

// router.post("/signin", basicAuth, signinHandler);
// async function signinHandler(req, res) {
//   res.status(201).send(req.user);
// }

// module.exports = router;
