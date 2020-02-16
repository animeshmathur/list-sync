const router = require("express").Router();
const list = require("./controllers/list.controller");

router.get("/getAll", (req, res) => {
  list.getItems(
    listItems => res.json(listItems),
    () => res.sendStatus(500)
  );
});

router.post("/add", (req, res) => {
  const { item } = req.body;
  list.addItem(
    item,
    listItems => res.json(listItems),
    () => res.sendStatus(500)
  );
});

router.post("/remove", (req, res) => {
  const { itemId } = req.body;
  list.removeITem(
    itemId,
    listItems => res.json(listItems),
    () => res.sendStatus(500)
  );
});

module.exports = router;
