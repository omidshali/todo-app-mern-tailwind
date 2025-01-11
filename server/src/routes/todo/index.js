const express = require("express");
const router = express.Router();
const controller = require("./controller");
const validator = require("./validator");

router.get("/", controller.todos);
router.post(
  "/",
  validator.todoValidate(),
  controller.validate,
  controller.addTodo
);
router.put(
  "/:id",
  validator.todoValidate(),
  controller.validate,
  controller.updateTodo
);
router.delete("/:id", controller.deleteTodo);

module.exports = router;
