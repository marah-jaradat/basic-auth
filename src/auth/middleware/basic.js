"use strict";

const bcrypt = require("bcrypt");
const base64 = require("base-64");
const { Users } = require("../models/users-model");

async function basicAuth(req, res) {
  try {
    let basHeaderPar = req.headers.authorization.split(" ");
    let encodedPart = basHeaderPar.pop();
    let decodedPar = base64.decode(encodedPart);
    let [username, password] = decodedPar.split(":");
    const user = await Users.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.passward);
    if (valid) {
      res.status(200).json({ username: username });
    } else {
      res.send("user is not valid");
    }
  } catch (error) {
    res.status(404).send(error);
  }
}

module.exports = basicAuth;
