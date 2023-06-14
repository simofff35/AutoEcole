const mongoose = require("mongoose");

const url =
  "mongodb+srv://simo:simo@auto.cxriz3e.mongodb.net/?retryWrites=true&w=majority";

const DbName = "AUTO";

module.exports = mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log(`Connected to DB`);
  })
  .catch((err) => {
    console.error(`Error connecting to DB ${err}`);
  });
