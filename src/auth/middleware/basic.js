// // "use strict";
"use strict";

const base64 = require("base-64");
const bcrypt = require("bcrypt");
const { users } = require("../src/models/index");

async function signup(req, res, next) {
  console.log("testing");
  const { username, password } = req.body;
  console.log(`${username}:${password}`);

  try {
    let hashed = await bcrypt.hash(password, 5);
    let newUser = await users.create({
      username: username,
      password: hashed,
    });
    console.log(newUser);
    res.status(201).json(newUser);
    next(); // next has to be inside the try
  } catch (error) {
    next("something went wrong");
  }

  // next() if i write the next outside the try, it will execute the next and skip the try/cach
}

async function signin(req, res, next) {
  if (req.headers.authorization) {
    // i need to make sure that i have the username:password inside the authorization header
    // 'basic hghgidjddoj'
    let arr = req.headers.authorization.split(" ");
    console.log(arr);
    let usernameandpass = arr.pop();
    console.log(usernameandpass);
    let decoded = base64.decode(usernameandpass);
    console.log(decoded);
    let [username, password] = decoded.split(":");
    console.log(username);
    console.log(password);
    try {
      let user = await users.findOne({ where: { username: username } });
      const valid = await bcrypt.compare(password, user.password);
      // console.log(Boolean(valid)); pending promise is equal to true
      if (valid) {
        res.status(200).json({
          user: user,
        });
      } else {
        res.send("not valid credentials");
      }
    } catch (error) {
      next("not valid credentials");
    }
  } else {
    next("username doesn't exist");
  }
}

(module.exports = signin), signup;
// "use strict";

// const base64 = require("base-64");
// const bcrypt = require("bcrypt");
// const { Users } = require("../models/indexmodel");

// const basicAuth = async (req, res, next) => {
//   if (req.headers["authorization"]) {
//     let basicHeaderParts = req.headers.authorization.split(" ");

//     let encodedPart = basicHeaderParts.pop();

//     let decoded = base64.decode(encodedPart);

//     let [username, password] = decoded.split(":");
//     try {
//       const user = await Users.findOne({ where: { username: username } });
//       const valid = await bcrypt.compare(password, user.password);
//       if (valid) {
//         res.status(200).json({ username: username });
//       } else {
//         res.send("user is not valid");
//       }
//     } catch (error) {
//       res.send(error);
//     }
//   }
// };

// module.exports = basicAuth;
// // const bcrypt = require("bcrypt");
// const base64 = require("base-64");
// const { Users } = require("../models/indexmodel");
// require("dotenv").config();

// async function basicAuth(req, res, next) {
//   if (req.headers["authorization"]) {
//     let basicHeaderParts = req.headers.authorization.split(" ");

//     let encodedPart = basicHeaderParts.pop();

//     let decoded = base64.decode(encodedPart);

//     let [username, password] = decoded.split(":");
//     try {
//       const user = await db.Users.findOne({ where: { username: username } });
//       const valid = await bcrypt.compare(password, user.password);
//       if (valid) {
//         res.status(200).json({
//           username: username,
//         });
//         next();
//       } else {
//         ress.send("user is not valid");
//         next("user is not valid");
//       }
//     } catch (error) {
//       next(error.message);
//     }
//   } else {
//     next("username doesn't exist");
//   }
// }

// module.exports = basicAuth;
