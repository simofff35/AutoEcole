const express = require("express");
const router = express.Router();
const { Voiture } = require("../database/Schema");

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

router.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = router;
