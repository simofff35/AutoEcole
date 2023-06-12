// Requirement
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

//! Data base Schema
// mongoose.connect("");

//Routes for testing
app.get("/", (req, res, next) => {
  res.send("hello world");
});

//Runing the app
const port = 3000;
app.listen(port, () => {
  console.log(`app listening on port ${3000}`);
});
