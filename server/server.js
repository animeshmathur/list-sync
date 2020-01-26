const path = require("path");
const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const router = express.Router();

let listItems = [];

router.get("/list/getAll", (req, res) => {
  res.json(listItems);
});

router.post("/list/add", (req, res) => {
  const { item } = req.body;
  listItems.push({
    id: new Date().getTime(),
    val: item
  });
  res.json(listItems);
});

router.post("/list/remove", (req, res) => {
  const { itemId } = req.body;
  listItems = listItems.filter(listItem => listItem.id !== itemId);
  res.json(listItems);
});

app.use("/.netlify/functions/server", router); // path must route to lambda
app.use("/", express.static(path.join(__dirname, "../dist")));

module.exports = app;
module.exports.handler = serverless(app);
