const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use("/", express.static(path.join(__dirname, "../dist")));

let listItems = [];

app.get("/list/getAll", (req, res) => {
  res.json(listItems);
});

app.post("/list/add", (req, res) => {
  const { item } = req.body;
  listItems.push({
    id: new Date().getTime(),
    val: item
  });
  res.json(listItems);
});

app.post("/list/remove", (req, res) => {
  const { itemId } = req.body;
  listItems = listItems.filter(listItem => listItem.id !== itemId);
  res.json(listItems);
});

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log("Started server at port - 3000....");
});
