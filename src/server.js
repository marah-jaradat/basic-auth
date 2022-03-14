"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./middleware/500");
const notFound = require("./middleware/404");
const bcrypt = require("bcrypt");

const usersRout = require("./router");
const basicAuth = require("./auth/middleware/basic");
const req = require("express/lib/request");

// express-middleare
app.use(express.json());
app.use(cors());
app.use(usersRout);

// my-routes
app.get("/", (req, res) => {
  res.status(500).send("home is alive");
});

app.post("/signup", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    const record = await Users.create(req.body);
    res.status(201).json(record);
  } catch (error) {
    res.status(403).send("Error occurred");
  }
});

app.get("/signin", (req, res) => {
  res.send("You have logged in ");
});

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
