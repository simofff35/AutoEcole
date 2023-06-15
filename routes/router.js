const express = require("express");
const router = express.Router();
const fs = require("fs");
const { Voiture } = require("../database/Schema");
const { Db } = require("mongodb");

router.get("/", (req, res) => {
  res.render("main", {
    hb: "hbibi",
    name: "Audi",
    model: "R8",
    etat: "new",
    prix: "80",
    disp: "Hell Yeah",
  });
});

Voiture.find().then((result) => {
  console.log(result);
});

router.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = router;
