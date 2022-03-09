// "use strict";

// const express = require("express");
// const { Users } = require("./models/indexmodel");
// const router = express.Router();
// const basicAuth = require("./middleware/basic");

// const bcrypt = require("bcrypt");
// const base64 = require("base-64");

// router.post("/signin", basicAuth, signInHandler);

// // router.post("/signin", basicAuth, (req, res) => {
// //   res.status(200).json(req.user);
// // });

// router.post("/signup", async (req, res, next) => {
//   let { username, password } = req.body;
//   // console.log("server is up route");
//   try {
//     let hashedPass = await bcrypt.hash(password, 5);
//     const newUser = await Users.create({
//       username: username,
//       password: hashedPass,
//     });
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.log(error);
//   }
// });

// async function signInHandler(req, res) {
//   res.status(200).json(req.user);
// }

// // async function signInFun(req, res) {
// //   if (req.headers["authorization"]) {
// //     let basHeaderPar = req.headers.authorization.split(" ");
// //     console.log(basHeaderPar);

// //     let encodedPart = basHeaderPar.pop();
// //     console.log(encodedPart);

// //     let decodedPar = base64.decode(encodedPart);
// //     let [username, password] = decoded.split(":");
// //     console.log("username");

// //     try {
// //       const user = await Users.findOne({ where: { username: username } });
// //       const valid = await bcrypt.compare(password, user.passward);
// //       if (valid) {
// //         res.status(200).json({ username: username });
// //       } else {
// //         res.send("user is not valid");
// //       }
// //     } catch (error) {
// //       res.send(error);
// //     }
// //   }
// // }

// module.exports = router;

"use strict";

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Users } = require("./models/indexmodel");

const basicAuth = require("./middleware/basic");

router.post("/signup", signupFunc);
router.post("/signin", basicAuth, signinFunc);

async function signupFunc(req, res) {
  let { username, password } = req.body;

  console.log(`${username} =>> ${password}`);

  try {
    let hashedPassword = await bcrypt.hash(password, 5);

    console.log(hashedPassword);

    const newUser = await Users.create({
      username: username,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
}

async function signinFunc(req, res) {
  res.status(200).send(req.user);
}

module.exports = router;
