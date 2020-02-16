const ListItem = require("../models/listItem.model");

const getItems = (handleResponse, handleError) =>
  ListItem.find({}, (err, items) =>
    err ? handleError(err) : handleResponse(items)
  );

const addItem = (itemVal, handleResponse, handleError) => {
  const item = new ListItem({
    val: itemVal
  });
  item.save(err => {
    if (err) {
      handleError(err);
    } else {
      getItems(handleResponse, handleError);
    }
  });
};

const removeITem = (itemId, handleResponse, handleError) => {
  ListItem.deleteOne({ _id: itemId }, err => {
    if (err) {
      handleError(err);
    } else {
      getItems(handleResponse, handleError);
    }
  });
};

module.exports = { addItem, getItems, removeITem };
