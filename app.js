// Requirement
const express = require("express");
const path = require("path");
const myRouter = require("./routes/router");
const cnxUrl = "./database/Connecting";
const cnx = require(cnxUrl);

const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use("/img", express.static(path.join(__dirname, "img")));

//To the router
app.use("/", myRouter);

//Runing the app
const port = 3000;
app.listen(port, () => {
  console.log(`app listening on port ${3000}`);
});
