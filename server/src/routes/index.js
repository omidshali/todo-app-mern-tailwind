const express = require("express");
const router = express.Router();
const todoRouter = require("./todo/index");

router.use("/todo", todoRouter);

module.exports = router;
