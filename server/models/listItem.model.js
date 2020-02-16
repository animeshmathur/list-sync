const mongoose = require("mongoose");

module.exports = mongoose.model(
  "ListItem",
  new mongoose.Schema({
    val: String,
    addedOn: { type: Date, default: Date.now }
  })
);
