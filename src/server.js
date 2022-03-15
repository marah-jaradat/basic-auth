// "use strict";

// "use strict";

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const router = require("./routes/authroute");

("use strict");

const express = require("express");
const app = express();
app.use(express.json());
const signup = require("../auth/signup");
const signin = require("../auth/signin");

app.get("/", (req, res) => {
  res.send("up and runnig");
});

app.post("/signup", signup, (req, res) => {
  console.log("signed up successfully");
});

app.post("/signin", signin, (res, req) => {
  console.log("signedin successfully");
});

function start(PORT) {
  app.listen(PORT || 5000, () => {
    console.log(`listening on ${PORT}`);
  });
}

module.exports = {
  app,
  start,
};
// // dependencies
// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("dotenv").config();
// const errorHandler = require("./errorHandler/500");
// const notFound = require("./errorHandler/404");
// const auth = require("./routes/authroute");

// // env variables
// const PORT = process.env.PORT;

// // middlewares
// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.status(200).send("Welcome Home");
// });

// app.use(auth);

// app.use(errorHandler);
// app.use("*", notFound);

// // server start function
// function start(port) {
//   app.listen(port, () => {
//     console.log(`Server is working on port ${PORT}`);
//   });
// }

// module.exports = {
//   app: app,
//   start: start,
// };
