// "use strict";

// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const { Users } = require("./auth/models/indexmodel");

// const basicAuth = require("./auth/middleware/basic");

// router.post("/signup", signupFunc);
// router.post("/signin", basicAuth, signinFunc);

// async function signupFunc(req, res, next) {
//   let { username, password } = req.body;

//   console.log(`${username} =>> ${password}`);

//   try {
//     let hashedPassword = await bcrypt.hash(req.body.password, 5);

//     console.log(hashedPassword);

//     const newUser = await Users.create(req.body);
//     // ({
//     //   username: username,
//     //   password: hashedPassword,
//     // });
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(403).send("error happend");
//   }
// }

// async function signinFunc(req, res) {
//   res.status(201).send(req.user);
// }

// module.exports = router;
