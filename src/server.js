"use strict";
const express = require("express");
const cors = require("cors");
const errorhandler = require("./errorHandler/500");
const notFound = require("./errorHandler/404");
const router = require("./routes/router");
const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.get("/", (req, res) => {
  res.status(200).send("Welcome home");
});

app.use(errorhandler);
app.use("*", notFound);

function start(port) {
  app.listen(port, () => {
    console.log("server is running probably on port " + process.env.PORT);
  });
}

module.exports = {
  app: app,
  start: start,
};
