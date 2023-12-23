const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const path = require('path')

const errorMiddleware = require("./middleware/error");
const { getSoldierInfo } = require("./controller/soldierController");

app.use(express.json());
const router = express.Router()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
router.route("/soldier").get(getSoldierInfo)

 app.use("/api/v1", router);
// app.use("/api/v1", user);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;