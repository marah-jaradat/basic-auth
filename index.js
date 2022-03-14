"use strict";

require("dotenv").config();

const server = require("./src/server.js");
const { db } = require("./src/auth/models/indexmodel");

db.sync()
  .then(() => {
    server.start(process.env.PORT || 3001);
  })
  .catch(console.error);

// sequelize.sync().then(() => {
//     app.listen(3004, () => {
//       console.log("index is running on port ");
//     });
//   });
