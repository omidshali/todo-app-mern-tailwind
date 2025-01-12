const controller = require("../controller");
const mongoose = require("mongoose");

module.exports = new (class extends controller {
  async todos(req, res) {
    const todos = await this.Todo.find({});
    this.response({ res, data: todos, message: "todos receved" });
  }

  async addTodo(req, res) {
    const { title } = req.body;
    const todo = new this.Todo({
      title,
    });
    await todo.save();
    this.response({ res, message: "todo added", data: todo });
  }

  async deleteTodo(req, res) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return this.response({ res, code: 400, message: "invalid id" });

    await this.Todo.findByIdAndDelete(id);
    this.response({ res, message: "todo deleted" });
  }

  async updateTodo(req, res) {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return this.response({ res, code: 400, message: "invalid id" });
    const { title, isComplated } = req.body;
    const todo = await this.Todo.findByIdAndUpdate(
      id,
      { title, isComplated },
      { new: true }
    );
    this.response({ res, message: "todo updated", data: { todo } });
  }
})();
