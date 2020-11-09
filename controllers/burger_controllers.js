const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function (req, res) {
  burger.all(function (data) {
    const burgerList = {
      burgers: data
    };
    res.render("index", burgerList);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function (res) {
    res.json({ id: res.insertId })
  });
});

router.put("/api/burgers/:id", function (req, res) {
  const cond = "id = " + response.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, cond, function (res) {
    if (res.changedRow === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  const cond = "id = " + response.params.id;

  burger.delete(cond, function (res) {
    if (res.affectedRow === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;