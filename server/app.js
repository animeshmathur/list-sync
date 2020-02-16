const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db_connection");
const listRoutes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Connect to DB
db.connect();

app.use("/list", listRoutes); // path must route to lambda
app.use("/", express.static(path.join(__dirname, "../dist")));

module.exports = app;
