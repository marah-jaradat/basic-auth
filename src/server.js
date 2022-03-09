"use strict";

const { req, res } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./middleware/500");
const notFound = require("./middleware/404");
// const bcrypt = require("bcrypt");
// const base = require("base-64");

const usersRout = require("./auth/router");
const basicAuth = require("./auth/middleware/basic");

// express-middleare
app.use(express.json());
app.use(cors());
app.use(usersRout);

// my-routes
app.get("/", (req, res) => {
  res.status(500).send("home is alive");
});
// app.post("/signup", (rq, res) => {
//   res.send("You have signed up");
// });

// app.get("/signin", (req, res) => {
//   res.send("You have logged in ");
// });

// start
function start(port) {
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}

app.use(errorHandler);
app.use("*", notFound);

module.exports = {
  app: app,
  start: start,
};
