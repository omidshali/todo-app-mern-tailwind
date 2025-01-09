const express = require("express");
const app = express();

const debug = require("debug")("app:main");
const config = require("config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");

mongoose
  .connect(config.get("db.address"))
  .then(() => debug("connected to mongodb"))
  .catch(() => debug("could not connected to mongodb"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
